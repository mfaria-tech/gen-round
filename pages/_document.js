import { Html, Head, NextScript } from 'next/document'
import Header from '../src/components/DefaultHeader'
import SideBar from '../src/components/SideBar'
import WorkSpace from '../src/components/WorkSpace'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name="author" content="Marcus Faria" />
        <link rel='icon' href='/img/favicon.ico' />
      </Head>
      <body>
        <Header />
        <SideBar />
        <WorkSpace />
        <NextScript />
      </body>
    </Html>
  )
}
