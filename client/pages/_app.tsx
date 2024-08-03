
// /* (компонент для создания обложки с провайдером для store над приложением, скопирован из документации https://github.com/kirill-konshin/next-redux-wrapper, вставляем в него наш store(wrapper)) */


import React from 'react';
import {wrapper} from '../store';
import {AppProps} from 'next/app';

class MyApp extends React.Component<AppProps> {
  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);