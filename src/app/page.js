import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.oloco}>Sei lá</h1>

      <Link href='/listas'>teste</Link>
    </div>
  );
}
