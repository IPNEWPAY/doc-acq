"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarDocusaurus = void 0;
const BrowserOnly_1 = __importDefault(require("@docusaurus/BrowserOnly"));
require("@scalar/api-reference-react/style.css");
const Layout_1 = __importDefault(require("@theme/Layout"));
const react_1 = __importDefault(require("react"));
//require("./theme.css");
const ScalarDocusaurus = ({ route }) => {
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement(BrowserOnly_1.default, null, () => {
            const ApiReferenceReact = require('@scalar/api-reference-react').ApiReferenceReact;
            return react_1.default.createElement(ApiReferenceReact, { configuration: route.configuration });
        })));
};
exports.ScalarDocusaurus = ScalarDocusaurus;
exports.default = exports.ScalarDocusaurus;
