import React, {Component} from 'react';
import CodeBlock from '@theme/CodeBlock'

const v4 = {
    API: 'https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/',
    GITHUB: 'https://github.com/aml-org/examples/tree/master/AMF4/src/test/'
}

const v5 = {
    API: 'https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/test/',
    GITHUB: 'https://github.com/aml-org/examples/tree/master/AMF5/src/test/'
}

/**
 * Automatically fetch code from the examples repository (https://github.com/aml-org/examples)
 * Can be passed version, line start and end, and language (java/js)
 */
class CodeGetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            lineStart: 0,
            lineEnd: 0
        };
    }

    getVersion(version) {
        switch(version) {
            case 'v4':
                return v4;
            case 'v5':
                return v5;
            default:
                return v4;
        }
    }

    componentDidMount() {
        const version = this.getVersion(this.props.AMFVersion);
        fetch(version.API + this.props.example)
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
                this.setState({
                    code: result,
                    source: version.GITHUB + this.props.example
                })
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <CodeBlock className={this.props.language}>{this.state.code}</CodeBlock>
                <p>Code extracted from the examples <strong><a href={this.state.source}>GitHub repository</a></strong>.</p>
            </div>
        )
    }
}

export default CodeGetter;
