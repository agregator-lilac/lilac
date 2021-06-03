import { sections } from '@/pages/catalog'
import { ICatalogItem } from '@/types/catalogItem.types'
import { useFormikContext } from 'formik'
import React from 'react'
import styles from './navbarforcatalogitem.module.scss'

export const NavbarForCatalogItem = () => {
  const { values } = useFormikContext<ICatalogItem>()
  return (
    <div className={styles.root}>
      <div className="d-flex">
        <span>Каталог</span>
        <img src="/assets/image/catalog/arrow.svg"></img>
        <span>Памятники</span>
        <img src="/assets/image/catalog/arrow.svg"></img>
        <span>{sections[values.section]}</span>
      </div>
      <div>
        <h1 className={styles.h1}>{values.nameMonument}</h1>
      </div>
    </div>
  )
}
