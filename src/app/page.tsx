import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import Lander from "@test.mdx";
import LandingPage from "./components/landing/landingold";

export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
      <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
        />

      <LandingPage/>

      </main>
      {/* <footer className={styles.footer}>
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
      </footer> */}

    </div>
  );
}
