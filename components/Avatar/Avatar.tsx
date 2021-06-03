import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

const Avatar: FC = () => {
  const [session, loading] = useSession()
  return (
    <div className={styles.root}>
      {/* {!session && (
        <div>
          <p>Авторизация</p>
          <button onClick={() => signIn()}>Войти</button>
        </div>
      )}
      {session && (
        <div>
          <p>Вы вошли</p>
          <button onClick={() => signOut()}>Выйти</button>
        </div>
      )} */}
      <span>Hello, Alex!</span>
      <Image
        src="/assets/image/avatarDefault.svg"
        alt="аватар"
        width={52}
        height={52}
      />
    </div>
  )
}

export { Avatar }
