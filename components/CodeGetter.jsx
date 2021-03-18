import React, {Component} from 'react';
import CodeBlock from '@theme/CodeBlock'

const API = 'https://raw.githubusercontent.com/aml-org/';

class CodeGetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            lineStart: 0,
            lineEnd: 0
        };
    }

    componentDidMount() {
        fetch(API + this.props.codeUrl)
            .then(response => response.text())
            .then(text => {
                let result = text;
                let start = this.props.lineStart;
                let end = this.props.lineEnd;
                if ((end - start) > 0) {
                    result = result
                        .split('\n')
                        .slice(start, end)
                        .join('\n')
                }
                this.setState({code: result})
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <CodeBlock className={this.props.language}>{this.state.code}</CodeBlock>
        )
    }
}

export default CodeGetter;
