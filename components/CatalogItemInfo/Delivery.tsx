import React from 'react'

import styles from './delivery.module.scss'
import { RadioGroup } from './components/RadioGroup'

export const Delivery = () => {
  const type = ['Без установки', 'Стандартная', 'Усиленная']
  const type2 = ['Самостоятельно', 'Силами исполнителя']
  return (
    <div className={styles.root}>
      <div>
        <RadioGroup
          name="installation"
          heading="Установка"
          selectOption={type}
        ></RadioGroup>
      </div>
      <div className={styles.delivery}>
        <RadioGroup
          name="delivery"
          heading="Доставка"
          selectOption={type2}
        ></RadioGroup>
      </div>
    </div>
  )
}
