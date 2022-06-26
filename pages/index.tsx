import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/home/Navbar'
import Intro from '../components/home/Intro'
import Ads from '../components/home/Ads'
import Slider from '../components/home/Slider'
import Appstore from '../components/home/Appstore'
import How from '../components/home/How'
import Footer from '../components/footer/Footer'






import Services from '../components/home/Services'


const Home: NextPage = () => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <div>
      <Head>
        <title>Ecconnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' mx-auto'>
        <Navbar />
        <Intro />
        <Services />
        <How />
        <Ads />
        <Appstore />
        {/* <Slider /> */}
       
        <Footer/>

      </main>

      CONNECTCEE
      
    </div>
  )
}

export default Home
