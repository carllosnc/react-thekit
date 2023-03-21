import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { FiChevronLeft } from 'react-icons/fi'

type PageProps = {
  children: any
  markdown?: any
  title?: string
}

export function DocPage({ children, markdown, title }: PageProps) {
  const content = markdown ? JSON.parse(markdown) : null
  const { pathname } = useRouter()

  console.log(pathname)

  return (
    <div className="max-w-[800px] m-auto px-6 py-[100px] flex flex-col gap-14">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>{`${title || 'React'} - thekit`}</title>
      </Head>

      <a
        target="__blank"
        href="https://github.com/C4co/cn-react-thekit"
        className="animate-bounce w-[70px] h-[70px] fixed bottom-[20px] right-[20px] bg-neutral-800 rounded-full flex justify-center items-center
        "
      >
        <FaGithubAlt className="text-[40px] text-white" />
      </a>

      <header className="flex gap-6 items-center rounded-lg transition-all hover:border-blue-500">
        {pathname !== '/' && (
          <Link
            href="/"
            className="w-[35px] h-[35px] flex justify-center items-center bg-blue-500 hover:bg-blue-700 rounded-full"
          >
            <FiChevronLeft className="text-white text-lg" />
          </Link>
        )}
        <div>
          <h2 className="text-[40px] text-neutral-800"> TheKit </h2>
          <p className="text-neutral-500"> Some useful react components </p>
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
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={xcode}
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
      )}
    </div>
  )
}
