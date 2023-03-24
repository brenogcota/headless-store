import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBagShopping, faHeart } from '@fortawesome/pro-light-svg-icons'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <div />

        <div className='header__logo'>
            <Link to="/" >
                STORE
            </Link>
        </div>

        <nav className='header__navbar'>
            <div className='header__navbar--item'><FontAwesomeIcon icon={faUser} /></div>
            <div className='header__navbar--item'><FontAwesomeIcon icon={faBagShopping} /></div>
            <div className='header__navbar--item'><FontAwesomeIcon icon={faHeart} /></div>
        </nav>
    </header>
  )
}
