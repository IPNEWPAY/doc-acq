import type { ReferenceProps } from '@scalar/api-reference-react';
import React, { Component } from 'react';
import './theme.css';
type Props = {
    route: ReferenceProps;
};
declare class ScalarDocusaurusCommonJS extends Component<Props> {
    observer: any;
    constructor(props: Props);
    componentWillUnmount(): void;
    mutationCallback(mutations: MutationRecord[]): void;
    setupAPIReference: () => void;
    render(): React.JSX.Element;
}
export default ScalarDocusaurusCommonJS;
