import styles from "./page.module.css";

// Import the shared function into the Next.js application
import { getSiteInfo } from "../../../packages/site-info";
import Button from "../../../packages/components/button";

export default function Home() {
  let siteInfo = getSiteInfo(); //Define a variable to get the values

  return (
    <main className={styles.main}>
      <h1>Sam&apos;s App</h1>
      <h2 className={styles.title}>Welcome to {siteInfo.title}</h2>
      <Button text="Click me Sam" />
      <p className={styles.description}>{siteInfo.subtitle}</p>
    </main>
  );
}
