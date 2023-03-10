import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
