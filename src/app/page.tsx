"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Olá mundo!</h1>
      <button onClick={() => router.push('tela2')}>Página 2</button>
    </main>
  )
}
