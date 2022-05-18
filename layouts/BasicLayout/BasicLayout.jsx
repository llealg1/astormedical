import React from 'react'
import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'
import Head from 'next/head';
export default function BasicLayout(props) {
  const {children} = props
  
  return (
    <>
      <Head>
        <title>Astor Medical</title>
      </Head>
      <Header />
      <Container fluid className='basic-layout aboutMe'>
   
        <Container fluid className='content m-0'>
          {children}
        </Container>
      </Container>
    </>
  )
}
