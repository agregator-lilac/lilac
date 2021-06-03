import React from 'react'

import { RadioGroup } from '../components/RadioGroup'

export const FlowerGardenFilling = () => {
  const type = ['Песок', 'Искусственный газон', 'Мраморная крошка']

  return (
    <RadioGroup
      name="flowerGardenFilling"
      selectOption={type}
      heading="Наполнение цветника"
    ></RadioGroup>
  )
}
