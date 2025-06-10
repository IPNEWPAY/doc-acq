"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
/**
 * Used to set default options from the user-provided options
 * This is also useful to ensure backwards compatibility with older configs that don't have the new options
 */
const createDefaultScalarOptions = (options) => ({
    showNavLink: true,
    configuration: {
        _integration: 'docusaurus',
        ...(options.configuration ?? {}),
    },
    ...options,
});
/**
 * Scalar's Docusaurus plugin for Api References
 */
const ScalarDocusaurus = (context, options) => {
    const defaultOptions = createDefaultScalarOptions(options);
    return {
        name: '@scalar/docusaurus',
        async loadContent() {
            return defaultOptions;
        },
        async contentLoaded({ content, actions }) {
            const { addRoute } = actions;
            // If showNavLink is true, add a link to the navbar
            if (defaultOptions.showNavLink) {
                ;
                context.siteConfig.themeConfig.navbar.items.push({
                    to: defaultOptions.route ?? '/scalar',
                    label: defaultOptions.label ?? 'Scalar',
                    position: 'left',
                });
            }
addRoute({
  path: defaultOptions.route,
  component: '@site/src/components/ForceReloadWrapperWithScalarAceptador2',
  exact: true,
  ...content,
});
        },
    };
};
exports.default = ScalarDocusaurus;
