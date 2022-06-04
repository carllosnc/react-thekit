import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type SyntaxProps = {
  children: string
  lang?: string
}

export function Syntax({ children, lang = 'typescript' }: SyntaxProps) {
  const [copy, setCopy] = useState<boolean>(false)

  function copyToClipboad() {
    navigator.clipboard?.writeText(children.trim())
    setCopy(true)

    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }

  return (
    <code data-testid="syntax" className="syntax">
      <button
        data-testid="syntax-copy"
        className={`syntax__copy ${copy && 'syntax__copy--copied'}`}
        onClick={copyToClipboad}
      >
        {copy ? 'Copied' : 'Copy'}
      </button>

      <SyntaxHighlighter
        data-testid="syntax-content"
        className="syntax__content"
        language={lang}
        style={monokaiSublime}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </code>
  )
}
