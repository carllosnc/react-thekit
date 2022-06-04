import Head from 'next/head'
import { FaGithubAlt } from 'react-icons/fa'

type PageProps = {
  children: any
}

export function Page(props: PageProps) {
  return (
    <div>
      <Head>
        <title> React Thekit </title>
      </Head>

      <a
        target="__blank"
        href="https://github.com/C4co/cn-react-thekit"
        className="github"
      >
        <FaGithubAlt className="github__icon" />
      </a>

      {props.children}
    </div>
  )
}
