import {useState} from 'react'
import styles from './style.module.css';

export default function Counter() {
    const [angkaa, setAngkaa] = useState(0)

  const klik = () => {
    setAngkaa(angkaa + 1)
  }

  const reset = () => {
    setAngkaa(0)
  }

  return (
    <div className={styles.container}>
      <div onClick={klik} className={styles.button}>Click</div>
      <div className={styles.number}>Total click: {angkaa}</div>
      <div onClick={reset} className={styles.button}>Reset</div>
    </div>
  )
}