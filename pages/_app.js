import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components' 
import { SateContext } from '../context/StateContext'
import {Toaster} from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
  return (
    <SateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </SateContext>
  )
}

export default MyApp
