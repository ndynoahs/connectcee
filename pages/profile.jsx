import React from 'react'
import Head from 'next/head'
import Topnav from '../components/navbar/Topnav'
import Nav from '../components/navbar/Nav'
import Profile from '../components/profile/Profile'

const profile = () => {
  return (
    <div>
        <Head>
            <title>Profile</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
        </Head>
        <Topnav />
        <Nav />

        <main>
            <Profile />
        </main>
        <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>

    </div>
  )
}

export default profile