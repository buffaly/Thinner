import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import stylesheet from 'antd/dist/antd.css';
import customStyle from '../style/customStyle.css';

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
          <title>Thinner</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style dangerouslySetInnerHTML={{ __html: customStyle }} />
        </Head>

        <body>
          <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>

            <div className="root">
              <Main />
            </div>

            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
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
