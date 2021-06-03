import React from 'react'

import { Material } from './InfoType/Material'
import { Type } from './InfoType/Type'
import { Polishing } from './InfoType/Polishing'
import styles from './infoType.module.scss'

export const InfoType = () => {
  return (
    <div className={styles.root}>
      <Type></Type>
      <Material></Material>
      <Polishing></Polishing>
    </div>
  )
}
