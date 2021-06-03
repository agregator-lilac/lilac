import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { withRouter } from 'next/router'

import { Avatar } from '@/components/Avatar'

import styles from './styles.module.scss'

const navLinks = [
  { title: 'Исполнители', path: '/executors' },
  { title: 'Отзывы', path: '/reviews' },
  { title: 'FAQ', path: '/FAQ' },
]

const checkActive = (route: string, path: string): boolean => {
  return route.includes(path)
}

const NavBar: FC<any> = ({ router: { route } }) => {
  const [activeMobileNav, setActiveMobileNav] = useState<boolean>(false)

  const onMobileNavClick = () => {
    setActiveMobileNav((prev) => !prev)
  }

  return (
    <nav className={`d-grid ${styles.nav}`}>
      <div className={styles.nav__brand}>
        <Link href={'/'}>
          <a>
            <Image
              src="/assets/image/logo.svg"
              alt="Логотип"
              width={121}
              height={46}
            />
          </a>
        </Link>
      </div>
      <div className={`d-flex ${styles.nav__menu}`}>
        {navLinks.map(({ title, path }) => (
          <Link href={path} key={path}>
            <a className={`${checkActive(route, path) ? styles.active : ''}`}>
              {title}
            </a>
          </Link>
        ))}
      </div>
      <div className={`d-flex ${styles.nav__information}`}>
        <div className={`d-flex ${styles.telephone}`}>
          <Image
            src="/assets/image/call.svg"
            alt="telphone"
            width={12}
            height={19}
          />
          <span>+7 969 656 78 59</span>
        </div>
        <Avatar />
      </div>

      <div className={styles.nav__mobile}>
        <Image
          onClick={onMobileNavClick}
          src="/assets/image/icon_menu.svg"
          alt="меню"
          width={50}
          height={50}
        />
        <div
          className={`${styles['nav__mobile-active']} ${
            activeMobileNav
              ? styles['nav__mobile-show']
              : styles['nav__mobile-disabled']
          }`}
        >
          {navLinks.map(({ title, path }) => (
            <Link href={path} key={path}>
              <a className={`${checkActive(route, path) ? styles.active : ''}`}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

const Navbar = withRouter(NavBar)

export { Navbar }
