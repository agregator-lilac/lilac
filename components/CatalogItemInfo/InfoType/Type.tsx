import React, { useState } from 'react'
import { useField } from 'formik'

import styles from './type.module.scss'
import { RadioButton } from '../components/RadioButton'
import { RadioGroup } from '../components/RadioGroup'

export const Type = () => {
  const [field, meta, helper] = useField('type')
  const [value, setValue] = useState<string>(field.value)
  const onChangeOther = (e: React.ChangeEvent<HTMLInputElement>) => {
    helper.setValue(e.target.value)
    setValue('Иное')
  }
  const checked = (v: string) => v === value
  const type = ['Одинарное', 'Парное', 'Тройное']

  return (
    <>
      <RadioGroup
        name="type"
        selectOption={type}
        heading="Тип захоронения"
        option={{ value, setValue }}
      ></RadioGroup>
      <label className={styles.itemOther}>
        <input
          className={styles.input}
          name={field.name}
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          value="Иное"
          checked={checked('Иное')}
        />
        <input
          className={styles.inputOther}
          placeholder="Если иное, укажите какое"
          onChange={(e) => onChangeOther(e)}
          onFocus={(e) => onChangeOther(e)}
        ></input>
      </label>
    </>
  )
}
