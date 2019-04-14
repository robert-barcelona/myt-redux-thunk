import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import configureStore from '../redux/configure-store'
import Debug from 'debug'
import Head from 'next/head'
import Header from '../components/Header'

const debug = Debug('app')

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
      debug('pageProps in app', pageProps)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Head>
            <title>Movie Picker 3000</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"/>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

          </Head>
          <Header/>
          <Component  {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore, {debug: false})(MyApp);
