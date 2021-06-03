import React from 'react'

import { RadioGroup } from '../components/RadioGroup'

export const FlowerGarden = () => {
  const type = ['Да', 'Нет', 'Надгробная плита']
  return (
    <RadioGroup
      name="flowerGarden"
      selectOption={type}
      heading="Цветник"
    ></RadioGroup>
  )
}
