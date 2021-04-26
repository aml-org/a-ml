import React, {Component} from 'react';
import CodeBlock from '@theme/CodeBlock'

const API = 'https://raw.githubusercontent.com/aml-org/examples/master/src/test/';
const GITHUB = 'https://github.com/aml-org/examples/tree/master/src/test/';

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
        fetch(API + this.props.example)
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
            <div>
                <CodeBlock className={this.props.language}>{this.state.code}</CodeBlock>
                <p>Code extracted from the examples <strong><a href={GITHUB + this.props.example}>GitHub repository</a></strong>.</p>
            </div>
        )
    }
}

export default CodeGetter;
