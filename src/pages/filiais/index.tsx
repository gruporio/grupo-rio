import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

import { FiliaisStyled } from '../../styles/filiais'

export default function Filiais(){
    return(
        <FiliaisStyled>
            <Head>
                <title>Grupo Rio - Filiais</title>
            </Head>
            <Navbar/>

            <section>
                <h1>FILIAIS</h1>
            </section>

            <section>
                <h3>ESTRUTURA PARA ATENDER AS MAIS ALTAS EXIGÊNCIAS</h3>
                <p>Nas filiais GRUPO RIO você vai encontrar um time competente e orgulhoso em pertencer a essa organização, comprometido em fazer sempre o melhor para você.</p>
            </section>

            <section>
                <Link href="/filiais/Bairros-de-Volta-Redonda" passHref>
                    <div>
                        <Image src="/filiais/Bairros-de-Volta-Redonda.webp" alt="Bairros de Volta Redonda" width={250} height={250}/>
                        <h2>VOLTA REDONDA</h2>
                    </div>
                </Link>

                <Link href="/filiais/Bairros-de-Campos-dos-Goytacazes" passHref>
                    <div>
                        <Image src="/filiais/Bairros-de-Campo-dos-Goytacazes.webp" alt="CAMPO DOS GOYTACAZES" width={250} height={250}/>
                        <h2>CAMPO DOS GOYTACAZES</h2>
                    </div>
                </Link>

                <Link href="/filiais/quitandinha-petropolis-rj" passHref>
                    <div>
                        <Image src="/filiais/quitandinha-petropolis-rj.webp" alt="PETRÓPOLIS" width={250} height={250}/>
                        <h2>PETRÓPOLIS</h2>
                    </div>
                </Link>
            </section>

            <Footer/>
        </FiliaisStyled>
    )
}