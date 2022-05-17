import React from 'react'
import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'
import Head from 'next/head';
export default function BasicLayout(props) {
  const {children} = props
  
  return (<>
        <Head>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>

</Head>
    <Container fluid className='basic-layout'>
      <Header />
      <Container fluid className='content m-0'>
        {children}
      </Container>
    </Container>
  </>

  )
}
