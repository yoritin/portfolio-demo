import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const name = 'Makoto Katayori'
export const siteTitle = 'Yori Portfolio'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yori Portfolio" />
        <meta
          property="og:image"
          content="https://nextjs-blog-yoritin.vercel.app/twitter-card.jpg"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
