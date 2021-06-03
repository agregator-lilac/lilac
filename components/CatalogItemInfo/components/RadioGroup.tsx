import { useField } from 'formik'
import React, { useState } from 'react'
import { RadioButton } from './RadioButton'
import styles from './radiogroup.module.scss'

interface IProps {
  heading: string
  name: string
  selectOption: string[]
  option?: {
    value?: string
    setValue?: (v: string) => void
  }
}

export const RadioGroup = ({ name, selectOption, heading, option }: IProps) => {
  const [field] = useField(name)
  const [value, setValue] = useState<string>(field.value)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e)
    if (option && option.setValue) {
      option.setValue(e.target.value)
    } else setValue(e.target.value)
  }
  const checked = (v: string) => v === ((option && option.value) || value)

  return (
    <>
      <h4 className={styles.h4}>{heading}</h4>
      <div className={styles.radiogroup}>
        {selectOption.map((item, i) => (
          <RadioButton
            key={i}
            name={field.name}
            onChange={onChange}
            isActiv={checked(item)}
            value={item}
          >
            {item}
          </RadioButton>
        ))}
      </div>
    </>
  )
}
