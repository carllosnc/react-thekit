import Head from 'next/head'

import style from './page.module.scss'

type PageProps = {
  children: any
}

export function Page(props: PageProps){
  return (
    <div>
      <Head>
        <title> CN Next Starter </title>
      </Head>

      { props.children }
    </div>
  )
}
