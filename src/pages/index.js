import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import About from 'components/About'
import Present from '../../components/Present'
import Week11 from '../../components/Week11'
import Week12 from '../../components/Week12'
import Week13 from '../../components/Week13'
import Week15 from '../../components/Week15'
import Final from 'components/Final'


export default function Home() {
  return (
    <div>
      <Head>
        <title>BITACORA</title>


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Present />
        <Hero />
        <About />
        <Week11 />
        <Week12 />
        <Week13 />
        <Week15 />
        <Final />






      </main>
    </div>
  )
}
