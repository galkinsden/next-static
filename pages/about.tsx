import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          DEMO NEXT
        </h1>

        <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}`}>
          <a>go back</a>
        </Link>
      </main>
    </div>
  )
}

export default About
