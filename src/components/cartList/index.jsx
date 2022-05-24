import { useState } from 'react'
import style from './style.module.css'
import img from '../../logo.svg'

export default function Navbar() {
    const [jumlah, setJumlah] = useState(1)

    const tambah = () => [
        setJumlah(jumlah + 1)
      ]
    
      const kurang = () => {
        if (jumlah === 1) return
        setJumlah(jumlah - 1)
      }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <img src={img} className={style.img} />
                <p>Product Name</p>
            </div>

            <div className={style.right}>
                <div>
                    <p onClick={kurang} className={style.btnCard}>-</p>
                    <p>{jumlah}</p>
                    <p onClick={tambah} className={style.btnCard}>+</p>
                </div>
                <button>Hapus</button>
            </div>
        </div>
    )
}