import { ICatalogItem } from '@/types/catalogItem.types'
import image from 'next/image'
import React, { FC } from 'react'
import { CatalogItem } from '../CatalogItem/CatalogItem'

import styles from './styles.module.scss'

interface IProps {
  catalogItems: ICatalogItem[]
  section: string
  img: string
}

const CatalogSection: FC<IProps> = ({ catalogItems, section, img }) => {
  return (
    <div className={`d-flex ${styles.root}`}>
      {catalogItems.map((catalogItem) => (
        <CatalogItem
          catalogItem={catalogItem}
          section={section}
          key={catalogItem.name}
          img={img}
        ></CatalogItem>
      ))}
    </div>
  )
}

export { CatalogSection }
