import React from 'react'
import Head from 'next/head'
import Wallet from '../components/wallet/Wallet'

const wallet = () => {
  return (
    <div>
        <Head>
            <title>Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
        </Head>
        <main>
            <Wallet />

        </main>
        <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>

    </div>
    
  )
}

export default wallet