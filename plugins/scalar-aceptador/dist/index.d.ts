import type { LoadContext, Plugin } from '@docusaurus/types';
import type { ReferenceProps } from '@scalar/api-reference-react';
export type ScalarOptions = {
    label: string;
    route: string;
    showNavLink?: boolean;
} & ReferenceProps;
/**
 * Scalar's Docusaurus plugin for Api References
 */
declare const ScalarDocusaurus: (context: LoadContext, options: ScalarOptions) => Plugin<ReferenceProps>;
export default ScalarDocusaurus;
