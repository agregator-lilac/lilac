import React, { useState } from 'react'
import { useField, FieldProps } from 'formik'

import styles from './select.module.scss'

interface IProps {
  label?: string
  name: string
  children?: JSX.Element[]
  selectWidth?: string
}

const MySelect = ({ label, selectWidth, ...props }: IProps) => {
  const [field, meta] = useField(props)
  return (
    <div className={styles.select} style={{ width: selectWidth && 'auto' }}>
      {label && <label htmlFor={props.name}>{label}</label>}
      <select {...field} {...props} style={{ width: selectWidth }} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export const Select = (props: IProps) => {
  return (
    <MySelect {...props}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </MySelect>
  )
}
