import Image from "next/image";
import styles from "./page.module.css";

const apiUrl = "https://open.er-api.com/v6/latest/USD"

fetch(apiUrl)

export default function Home() {
  return (
    <main className={styles.main}>
  <select>
    <option>USD</option>
    <option>MXN</option>
  </select>
    </main>
  );
}
