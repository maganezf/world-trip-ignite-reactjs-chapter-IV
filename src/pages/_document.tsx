import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />

          <link rel='shortcut icon' href='favicon.svg' type='image/svg' />
          <link rel='apple-touch-icon' href='favicon.svg'></link>

          <meta property='og:locale' content='pt_BR' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='WorldTrip' />
          <meta property='og:image:type' content='image/svg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image:width' content='1200' />
          <meta name='twitter:image:height' content='620' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
