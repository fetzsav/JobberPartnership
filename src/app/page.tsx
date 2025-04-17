import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import Lander from "@test.mdx";
import LandingMDX from "../pages/test.mdx";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Lander /> */}
        <LandingMDX/>
        <Link href="/test" className={styles.card}> View Test Page</Link>
      </main>
      <footer className={styles.footer}>
        <a href="https://getjobber.com/fetzer">
          <Image
            src="/images/jobber.svg"
            alt="Jobber Logo"
            className={styles.logo}
            width={150}
            height={25}
            priority
          />
        </a>
      </footer>
    </div>
  );
}
