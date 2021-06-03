import React from 'react'
import { Size } from './InfoSize/Size'

import styles from './infosize.module.scss'
import { Size2 } from './InfoSize/Size2'
import { FlowerGarden } from './InfoSize/FlowerGarden'
import { FlowerGardenFilling } from './InfoSize/FlowerGardenFilling'

export const InfoSize = () => {
  return (
    <div className={styles.root}>
      <Size></Size>
      <Size2></Size2>
      <FlowerGarden></FlowerGarden>
      <FlowerGardenFilling></FlowerGardenFilling>
    </div>
  )
}
