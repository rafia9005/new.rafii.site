import { Html, Head, Main, NextScript } from 'next/document'
import NextTopLoader from 'nextjs-toploader';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>rafii.site | Full-Stack Developer</title>
        <link rel="shortcut icon" href="pp.png" type="image/x-icon" />
      </Head>
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
