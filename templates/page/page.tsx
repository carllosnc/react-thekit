import Head from 'next/head'
import style from './page.module.scss'

type PageProps = {
  children: any
}

export function Page(props: PageProps) {
  return (
    <div>
      <Head>
        <title> React Thekit </title>
      </Head>

      {props.children}
    </div>
  )
}
