import { imgs, sections } from '@/pages/catalog'
import { ICatalogItem } from '@/types/catalogItem.types'
import { useFormikContext } from 'formik'
import React from 'react'

import styles from './imagmonument.module.scss'

export const ImagMonument = () => {
  const { values } = useFormikContext<ICatalogItem>()
  const img = imgs[values.section] as string
  return (
    <div className={styles.root}>
      <img src={img}></img>
    </div>
  )
}
