import style from './style.module.css'
import logo from '../../logo.svg';

export default function Navbar() {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <img src={logo} className={style.logo} alt='logo'/>
                <a href='/'>Home</a>
            </div>

            <div className={style.right}>
                <a href='cart'>Cart</a>
                <a className={style.btnLogout} href='login'>Logout</a>
            </div>
        </header>
    )
}