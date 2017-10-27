import React from 'react';
import stylesheet from 'antd/dist/antd.css';
import customStyle from '../style/customStyle.css';
import Document, { Head, Main, NextScript } from 'next/document';

const FACEBOOK_APP_ID = '1234567890';

export default class MyDocument extends Document {
  static getInitialProps(initialProps) {
    const { html, head, errorHtml, chunks } = initialProps.renderPage();
    return { html, head, errorHtml, chunks };
  }

  render() {
    return (
      <html lang="th">
        <Head>
          <title>Storylog 3.0</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style dangerouslySetInnerHTML={{ __html: customStyle }} />
        </Head>

        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
          <div dangerouslySetInnerHTML={{ __html: `
            <script async>
                window.fbAsyncInit = function() {
                  FB.init({
                    appId      : ${FACEBOOK_APP_ID},
                    xfbml      : true,
                    version    : 'v2.9',
                  });
                };

              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id; js.async = true;
                js.src = "//connect.facebook.net/th_TH/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'))
            </script>
          ` }}
          />
        </body>
      </html>
    );
  }
}
