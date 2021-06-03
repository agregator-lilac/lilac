import React from 'react'

import styles from './size2.module.scss'
import { Select } from './Select'

export const Size2 = () => {
  return (
    <div>
      <h4 className={styles.h4}>Размер подставки (см)</h4>
      <div className={styles.selectsection}>
        <Select name="size2.height" label="Высота"></Select>
        <Select name="size2.width" label="Ширина"></Select>
        <Select name="size2.depth" label="Толщина"></Select>
      </div>
    </div>
  )
}
