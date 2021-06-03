import React from 'react'
import { RadioGroup } from '../components/RadioGroup'

export const Polishing = () => {
  const type = ['Видимые стороны', 'Все стороны']
  return (
    <RadioGroup
      name="polishingType"
      heading="Полировка"
      selectOption={type}
    ></RadioGroup>
  )
}
