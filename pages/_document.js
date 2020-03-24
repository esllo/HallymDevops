import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme';

class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet();
  //   const page = renderPage(App => props =>
  //     sheet.collectStyles(<App {...props} />)
  //   );
  //   const styleTags = sheet.getStyleElement();
  //   return { ...page, styleTags };
  // }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" />
          <style>{`body { margin: 0; overflow-x:hidden; } /* custom! */`}</style>
          <link
            rel="stylesheet"
            href="/static/css/nprogress.css"
            media="nope!"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            media="nope!"
          />
          <link rel="stylesheet" href="/static/css/animator.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async defer src="/static/js/init.js"></script>
          <script async defer src="/static/js/animator.js"></script>
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
