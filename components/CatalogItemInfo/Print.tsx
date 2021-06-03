import { useField } from 'formik'
import React from 'react'
import { Select } from './InfoSize/Select'

import styles from './print.module.scss'

export const Print = () => {
  const [name] = useField('name')
  const [photo] = useField('photo')
  const onChangeOther = (e) => {}
  return (
    <div className={styles.root}>
      <h4 className={styles.h4}>Гравировка</h4>
      <div className={styles.items}>
        <div className={styles.name}>
          <label htmlFor={name.name} className={styles.label}>
            ФИО
          </label>
          <input
            className={styles.inputOther}
            placeholder="ФИО"
            name={name.name}
            onChange={name.onChange}
          ></input>
          <div className={styles.selectsection}>
            <Select name="size.height" selectWidth="80px"></Select>
            <Select name="size.width" selectWidth="80px"></Select>
            <Select name="size.depth" selectWidth="80px"></Select>
          </div>
        </div>
        <div className={styles.photo}>
          <label htmlFor="photo" className={styles.label}>
            Фото
          </label>
          <input
            className={styles.inputOther}
            placeholder="ФИО"
            type="file"
            name={photo.name}
            onChange={photo.onChange}
          ></input>
        </div>
      </div>
    </div>
  )
}
