import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa'

type PageProps = {
  children: any
  markdown?: any
  title?: string
}

export function DocPage({ children, markdown, title }: PageProps) {
  const content = markdown ? JSON.parse(markdown) : null

  return (
    <div className="max-w-[800px] m-auto px-6 py-[100px] flex flex-col gap-14">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>{`${title || 'React'} - thekit`}</title>
      </Head>

      <a
        target="__blank"
        href="https://github.com/C4co/cn-react-thekit"
        className="animate-bounce w-[70px] h-[70px] fixed bottom-[20px] right-[20px] bg-gradient-to-b from-sky-500 to-blue-700 rounded-full flex justify-center items-center
        "
      >
        <FaGithubAlt className="text-[40px] text-white" />
      </a>

      <header className="flex gap-6 items-center rounded-lg transition-all hover:border-blue-500">
        <div className="w-full flex">
          <Link href="/">
            <h2 className="text-[25px] font-black text-white bg-black px-4 py-1 transition-all">
              TheKit
            </h2>
          </Link>
        </div>
      </header>

      <div className="flex flex-col gap-8">
        {title && (
          <h1
            data-testid="page-title"
            className="text-3xl font-bold text-neutral-900 pb-2 border-b border-neutral-200"
          >
            {title}
          </h1>
        )}

        <div>{children}</div>
      </div>

      {content && (
        <div className="markdown">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={xcode}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {`${content.default}`}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}
