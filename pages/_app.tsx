import React from 'react';

import Headline from '../components/headline';
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Headline />
      <Component {...pageProps} />
    </React.Fragment>
  )
}