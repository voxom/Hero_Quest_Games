import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "../app/page.module.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function ContainerBox({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/">
          <h1>Hero Quest Games</h1>
        </a>
        <div>
          {"Forged by Voxom"}
        </div>
      </div>

      {/* Add Content Here */}
      <div>{children}</div>
      
      <div className={styles.grid}>
        <Link href="/Store" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            The Store <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Your Quest Starts Here!
          </p>
        </Link>

        <Link
          href="/Supplies"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Supplies <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore Our Inventory!</p>
        </Link>

        <Link href="/Magic" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Spells & Magic <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Deploy Your Squad!
          </p>
        </Link>
      </div>
    </main>
  )
}
