import React, {useCallback, useEffect, useRef, useState} from 'react'
import CodeBlock from '@theme/CodeBlock'

const v4 = {
    testsUrl: 'https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/',
    mainUrl: 'https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/main/',
}

const v5 = {
    testsUrl: 'https://raw.githubusercontent.com/aml-org/examples/semantic-json-schema/AMF5/src/test/',
    mainUrl: 'https://raw.githubusercontent.com/aml-org/examples/semantic-json-schema/AMF5/src/main/',
    scala: 'scala/scalaPlatform/',
    java: 'java/javaPlatform/',
    ts: 'ts/',
}

function getVersion(version) {
    switch (version) {
        case 'v4':
            return v4;
        case 'v5':
            return v5;
        default:
            return v5;
    }
}

function getLanguageUrl(language, version) {
    if (version === v4) return ''

    switch (language) {
        case 'scala':
            return version.scala;
        case 'java':
            return version.java;
        case 'ts' || 'typescript':
            return version.ts;
        case 'js' || 'javascript':
            return version.js;
        default:
            return version.scala;
    }
}

const CodeGetter = ({AMFVersion, language, example, lineStart, lineEnd, hideLink, fromMain}) => {
    const mountedRef = useRef(true)
    const [code, setCode] = useState('')
    const [githubUrl, setGithubUrl] = useState('')

    const fetchFromGithub = useCallback(async () => {
        const version = getVersion(AMFVersion)
        const langUrl = getLanguageUrl(language, version)
        const api = fromMain ? version.mainUrl : version.testsUrl
        const fileUrl = api + langUrl + example
        const githubUrl = fileUrl.replace('raw.githubusercontent.com/aml-org/examples', 'github.com/aml-org/examples/tree')

        const res = await fetch(fileUrl)
        const text = await res.text()

        if (!mountedRef.current) return null
        setGithubUrl(githubUrl)
        setCode(text)
        if ((lineEnd - lineStart) > 0) {
            let result = text
                .split('\n')
                .slice(lineStart, lineEnd)
                .join('\n')
            setCode(result)
        }
    }, [])

    useEffect(() => {
        fetchFromGithub()
        return () => {
            mountedRef.current = false
        }
    }, [])

    return (
        <div>
            <CodeBlock className={language}>{code}</CodeBlock>
            {!hideLink &&
            <p>
                Code extracted from the examples <strong><a href={githubUrl}>GitHub
                repository</a></strong>.
            </p>
            }
        </div>
    )
}

export default CodeGetter
