import App from 'next/app';
import React, { Fragment } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Header from '../components/Header';
import Drawer from '../components/SideDrawer';
import ImageDisplay from '../components/ImageDisplay';
import Footer from '../components/Footer';
import Scripter from '../components/Scripter';
import theme from '../theme';

Router.events.on('routeChangeStart', url => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class RootApp extends App {
  constructor(props) {
    super(props);
    this.state = { open: false, transparent: false };
    NProgress.configure({ showSpinner: false });
  }

  toggleTransparent = transparent => {
    this.setState({ transparent: transparent });
  };

  toggleDrawer = open => () => {
    this.setState({ open: open });
  };

  /*static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }*/

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          tp={this.state.transparent}
          toggleTrigger={this.toggleDrawer}
          toolbar={true}
          white={false}
        />
        <Drawer open={this.state.open} toggleTrigger={this.toggleDrawer} />
        <ImageDisplay />
        <Component
          toggleTransparent={this.toggleTransparent}
          {...pageProps}
          {...this.state}
        />
        <Footer />
        <Scripter />
      </ThemeProvider>
    );
  }
}
