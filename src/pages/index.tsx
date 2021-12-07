import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavBar from '../components/NavBar'
import ApoiadoresSlider from '../components/ApoiadoresSlider'

import { StyledIndex } from '../styles'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [])

  return (
    <StyledIndex>
      <Head>
        <title>Grupo Rio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
        <NavBar/>
        <section>
          {
            isMobile ?
              <Image src="/first-session/background-mobile.jpg" alt="background" width="1082px" height="1921px" layout="responsive"/>:
              <Image src="/first-session/background.png" alt="background" width="1536px" height="864px" layout="responsive"/>
              
          }
          <ApoiadoresSlider/>
        </section>

        <section>
        </section>
      </main>
    </StyledIndex>
  )
}

export default Home
