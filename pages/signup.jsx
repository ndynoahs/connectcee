import Signup from '../components/auth/Signup'
import Head from 'next/head'
const signup = () => {
  return (
    <div>
        <Head>
            <title>Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
        </Head>
        <main>
            <Signup />

            <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
        </main>

    </div>
  )
}

export default signup