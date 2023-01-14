import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../src/components/DefaultHeader'
import SideBar from '../src/components/SideBar'
import WorkSpace from '../src/components/WorkSpace'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head />
      <body>
        <Header />
        <SideBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
