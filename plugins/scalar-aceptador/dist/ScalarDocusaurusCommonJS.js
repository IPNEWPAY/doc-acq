"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserOnly_1 = __importDefault(require("@docusaurus/BrowserOnly"));
const Layout_1 = __importDefault(require("@theme/Layout"));
const react_1 = __importStar(require("react"));
//require("./theme.css");
class ScalarDocusaurusCommonJS extends react_1.Component {
    observer = null;
    constructor(props) {
        super(props);
        this.mutationCallback = this.mutationCallback.bind(this);
        if (typeof window !== 'undefined') {
            this.observer = new MutationObserver(this.mutationCallback);
        }
    }
    componentWillUnmount() {
        // Clean up app
        document.dispatchEvent(new Event('scalar:destroy-references'));
        this.observer?.disconnect();
    }
    mutationCallback(mutations) {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const container = document.getElementById('api-reference-container');
                if (container && this.props.route.configuration && !document.getElementById('api-reference')) {
                    console.log('Loading Scalar script...');
                    // Deep copy the configuration
                    const config = JSON.parse(JSON.stringify(this.props.route.configuration));
                    // Create and append a script element to mount the Scalar app
                    const apiReferenceScript = document.createElement('script');
                    apiReferenceScript.id = 'api-reference';
                    apiReferenceScript.type = 'application/json';
                    container.appendChild(apiReferenceScript);
                    // Check if we've already loaded the Scalar script
                    const loaded = document.body.getAttribute('data-scalar-loaded');
                    if (loaded) {
                        console.log('Scalar script already loaded, reloading app');
                        document.dispatchEvent(new Event('scalar:reload-references'));
                        document.dispatchEvent(new CustomEvent('scalar:update-references-config', {
                            detail: { configuration: config },
                        }));
                    }
                    else {
                        // Execute content function if it exists
                        if (typeof config.spec?.content === 'function') {
                            config.spec.content = config.spec.content();
                        }
                        // Convert the document to a string
                        const documentString = config?.spec?.content
                            ? typeof config?.spec?.content === 'string'
                                ? config.spec.content
                                : JSON.stringify(config.spec.content)
                            : '';
                        // Delete content from configuration
                        if (config?.spec?.content) {
                            delete config.spec.content;
                        }
                        // Convert the configuration to a string
                        const configString = JSON.stringify(config ?? {})
                            .split('"')
                            .join('&quot;');
                        apiReferenceScript.dataset.configuration = configString;
                        apiReferenceScript.innerHTML = documentString;
                        // Creating and appending the script element
                        const script = document.createElement('script');
                        script.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference';
                        script.async = true;
                        script.onload = () => {
                            console.log('Scalar script loaded successfully');
                            document.body.setAttribute('data-scalar-loaded', 'true');
                        };
                        script.onerror = (error) => {
                            console.error('Error loading Scalar script:', error);
                        };
                        container.appendChild(script);
                    }
                    // Stop observing once the container is found and script is added
                    this.observer?.disconnect();
                }
            }
        });
    }
    setupAPIReference = () => {
        if (typeof window !== 'undefined') {
            this.observer = new MutationObserver(this.mutationCallback);
            this.observer.observe(document.body, { childList: true, subtree: true });
        }
    };
    render() {
        return (react_1.default.createElement(Layout_1.default, null,
            react_1.default.createElement(BrowserOnly_1.default, null, () => {
                if (typeof window !== 'undefined') {
                    this.setupAPIReference();
                }
                return react_1.default.createElement("div", { id: "api-reference-container" });
            })));
    }
}
exports.default = ScalarDocusaurusCommonJS;
