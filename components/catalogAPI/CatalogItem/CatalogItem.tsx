import { ICatalogItem } from '@/types/catalogItem.types'
import { FC } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

interface IProps {
  catalogItem: ICatalogItem
  section: string
  img: string
}

const CatalogItem: FC<IProps> = ({ catalogItem, section, img }) => {
  return (
    <div className={styles.root}>
      <div className={`d-flex ${styles.img}`}>
        <Image src={img} alt="Изображение памятника" width={194} height={246} />
      </div>
      <div className={styles.iteminfo}>
        <p className={styles.section}>{section}</p>
        <p className={styles.name}>{catalogItem.name}</p>
        <button className={styles.btn}>ВЫБРАТЬ ПАРАМЕТРЫ</button>
      </div>
    </div>
  )
}

export { CatalogItem }
