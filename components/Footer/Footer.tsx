import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

const navLinks = [
  { title: 'Исполнители', path: '/executors' },
  { title: 'Отзывы', path: '/reviews' },
  { title: 'FAQ', path: '/FAQ' },
]

const Footer: FC = () => {
  return (
    <div className={`d-grid ${styles.root}`}>
      <div className={styles.logo}>
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

      <div className={styles.menu}>
        {navLinks.map(({ title, path }) => (
          <Link href={path} key={path}>
            <a>{title}</a>
          </Link>
        ))}
      </div>

      <div className={styles.footerContacts}>
        <div className={styles.contactBlock}>
          <span>Client support:</span>
          <span>support@sup.echange</span>
        </div>

        <div className={styles.contactBlock}>
          <span>General inquires:</span>
          <span>partners@part.exchange</span>
        </div>
      </div>
    </div>
  )
}

export { Footer }
