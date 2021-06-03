import React, { ReactNode } from 'react'
import styles from './radiobutton.module.scss'

interface IProps {
  isActiv: boolean
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children?: ReactNode
}

export const RadioButton = ({
  isActiv,
  name,
  value,
  onChange,
  children,
}: IProps) => {
  return (
    <label className={`${styles.item} ${isActiv ? '' : styles.inactiv}`}>
      <input
        className={styles.input}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
        checked={isActiv}
      />
      {children}
    </label>
  )
}
