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
    <div className="doc-page">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>{`${title || 'React'} - thekit`}</title>
      </Head>

      <a
        target="__blank"
        href="https://github.com/C4co/cn-react-thekit"
        className="github"
      >
        <FaGithubAlt className="github__icon" />
      </a>

      <header className="flex flex-col gap-3">
        <Link href="/">
          <svg
            className="w-full h-auto max-w-[140px] md:max-w-[110px
            ] fill-neutral-400"
            viewBox="0 0 189 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.6448 26.0352V55.2344C14.6448 57.6451 15.1571 59.3627 16.1816 60.3872C17.2061 61.3515 18.984 61.8336 21.5152 61.8336H27.572V68.7944H20.1592C15.5789 68.7944 12.1437 67.7397 9.8536 65.6304C7.56347 63.5211 6.4184 60.0557 6.4184 55.2344V26.0352H0V19.2552H6.4184V6.78H14.6448V19.2552H27.572V26.0352H14.6448Z" />
            <path d="M51.2801 18.3512C55.0166 18.3512 58.3916 19.1648 61.4049 20.792C64.4182 22.3589 66.7686 24.7395 68.4561 27.9336C70.2038 31.1277 71.0777 35.0149 71.0777 39.5952V68.7944H62.9417V40.7704C62.9417 35.8285 61.7062 32.0619 59.2353 29.4704C56.7644 26.8187 53.3894 25.4928 49.1105 25.4928C44.7713 25.4928 41.306 26.8488 38.7145 29.5608C36.1833 32.2728 34.9177 36.2203 34.9177 41.4032V68.7944H26.6913V1.8984H34.9177V26.3064C36.5449 23.7752 38.7748 21.8165 41.6073 20.4304C44.5001 19.0443 47.7244 18.3512 51.2801 18.3512Z" />
            <path d="M118.868 42.1264C118.868 43.6933 118.777 45.3507 118.596 47.0984H79.0011C79.3025 51.98 80.9598 55.8069 83.9731 58.5792C87.0467 61.2912 90.7531 62.6472 95.0923 62.6472C98.6481 62.6472 101.601 61.8336 103.952 60.2064C106.362 58.5189 108.05 56.2891 109.014 53.5168H117.873C116.547 58.2779 113.896 62.1651 109.918 65.1784C105.94 68.1315 100.998 69.608 95.0923 69.608C90.3915 69.608 86.1729 68.5533 82.4363 66.444C78.7601 64.3347 75.8673 61.3515 73.7579 57.4944C71.6486 53.5771 70.5939 49.0571 70.5939 43.9344C70.5939 38.8117 71.6185 34.3219 73.6675 30.4648C75.7166 26.6077 78.5792 23.6547 82.2555 21.6056C85.992 19.4963 90.271 18.4416 95.0923 18.4416C99.7931 18.4416 103.952 19.4661 107.568 21.5152C111.184 23.5643 113.956 26.3968 115.884 30.0128C117.873 33.5685 118.868 37.6064 118.868 42.1264ZM110.37 40.4088C110.37 37.2749 109.677 34.5931 108.291 32.3632C106.905 30.0731 105.006 28.3555 102.596 27.2104C100.245 26.0051 97.6235 25.4024 94.7307 25.4024C90.5723 25.4024 87.0166 26.7283 84.0635 29.38C81.1707 32.0317 79.5134 35.708 79.0915 40.4088H110.37Z" />
            <path d="M146.541 68.7944L127.105 46.9176V68.7944H118.878V1.8984H127.105V41.2224L146.179 19.2552H157.66L134.337 43.9344L157.75 68.7944H146.541Z" />
            <path d="M158.803 11.2096C157.236 11.2096 155.91 10.6672 154.826 9.5824C153.741 8.4976 153.198 7.17173 153.198 5.6048C153.198 4.03787 153.741 2.712 154.826 1.6272C155.91 0.542403 157.236 0 158.803 0C160.31 0 161.575 0.542403 162.6 1.6272C163.685 2.712 164.227 4.03787 164.227 5.6048C164.227 7.17173 163.685 8.4976 162.6 9.5824C161.575 10.6672 160.31 11.2096 158.803 11.2096ZM162.781 19.2552V68.7944H154.554V19.2552H162.781Z" />
            <path d="M175.988 26.0352V55.2344C175.988 57.6451 176.5 59.3627 177.524 60.3872C178.549 61.3515 180.327 61.8336 182.858 61.8336H188.915V68.7944H181.502C176.922 68.7944 173.487 67.7397 171.196 65.6304C168.906 63.5211 167.761 60.0557 167.761 55.2344V26.0352H161.343V19.2552H167.761V6.78H175.988V19.2552H188.915V26.0352H175.988Z" />
          </svg>
        </Link>
        <p className="text-neutral-700"> Some react components </p>
      </header>

      <div className="doc-page__wrapper">
        {title && <h1 className="doc-page__title"> {title} </h1>}

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
