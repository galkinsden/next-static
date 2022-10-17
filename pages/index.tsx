import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SP NEXT APP</title>
        <meta name="description" content="sp next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DEMO NEXT
        </h1>

        <Link href="/about">
          <a>go next page</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`} alt="Vercel Logo" width={205} height={24} />
      </footer>
    </div>
  )
}

export default Home
