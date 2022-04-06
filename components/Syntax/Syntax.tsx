import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type SyntaxProps = {
  children: string
}

export function Syntax({ children }: SyntaxProps) {
  return (
    <code className="syntax">
      <SyntaxHighlighter
        className="syntax__inside"
        language="jsx"
        style={monokaiSublime}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </code>
  )
}
