import React from 'react'

import styles from './size.module.scss'
import { Select } from './Select'

export const Size = () => {
  return (
    <div>
      <h4 className={styles.h4}>Размер стелы (см)</h4>
      <div className={styles.selectsection}>
        <Select name="size.height" label="Высота"></Select>
        <Select name="size.width" label="Ширина"></Select>
        <Select name="size.depth" label="Толщина"></Select>
      </div>
    </div>
  )
}
