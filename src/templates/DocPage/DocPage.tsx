import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Link from 'next/link'

type PageProps = {
  children: any
  markdown: any
  title: string
}

export function DocPage({ children, markdown, title }: PageProps) {
  const content = JSON.parse(markdown)

  return (
    <div className="doc-page">
      <Head>
        <title> {title} - thekit </title>
      </Head>

      <Link href="/">
        <a className="doc-page__back"> ⇱ Black to home </a>
      </Link>

      <h1 className="doc-page__title"> {title} </h1>

      <div>{children}</div>

      <hr className="doc-line" />

      <div className="doc-page__emoji">👇</div>

      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={monokaiSublime}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {`${content.default}`}
        </ReactMarkdown>
      </div>
    </div>
  )
}
