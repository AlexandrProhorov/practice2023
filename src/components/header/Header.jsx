import styles from "./../../static/css/header/Header.module.scss"
import logo from "./../../static/img/logo.png"

const Header = () => {
    return (
        <div className={styles.Header}>
            <img src= {logo} alt="logo" />
        </div>
    )
}

export default Header;