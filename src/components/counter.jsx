import {useState} from 'react'
import styles from './style.module.css';

export default function Counter({angka, setAngka}) {
    // const [angka, setAngka] = useState(0)

  const tambah = () => [
    setAngka(angka + 1)
  ]

  const kurang = () => {
    if (angka === 0) return
    setAngka(angka - 1)
  }

  return (
    <div className={styles.container}>
      <div onClick={kurang} className={styles.button}>-</div>
      <div className={styles.number}>{angka}</div>
      <div onClick={tambah} className={styles.button}>+</div>
    </div>
  )
}