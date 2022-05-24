// import {useState} from 'react'
import style from './style.module.css';

export default function Counter({angka, setAngka}) {

  return (
    <div className={style.background}>
        <div className={style.container}>
            <h1>Login</h1>

            <div>
                <p>Email</p>
                <input name='email' type='email'/>
            </div>

            <div>
                <p>Password</p>
                <input name='pass' type='password'/>
            </div>

            <a href="/">Login</a>
        </div>
    </div>
  )
}