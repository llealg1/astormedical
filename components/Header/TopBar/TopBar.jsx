import {Container, Grid, Image, Input} from 'semantic-ui-react'
import Link from 'next/link'
import Nav from '../Nav'

export default function TopBar() {
  return (
    <div className='top-bar'>
      <Container fluid >
        <Grid className='top-bar'>
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Nav/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )

}

function Logo() {
  return (
    <Link href='/'>
      <a >
        <Image src='/astormedic.png' alt='Astor Medical'size='tiny'/>
      </a>
    </Link>
  )
}

