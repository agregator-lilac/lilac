import React, { useState } from 'react'
import { useField } from 'formik'

import styles from './material.module.scss'

const materials = ['Гранит', 'Мрамор', 'Винга', 'Дымовский', 'Кашмир']

export const Material = () => {
  const [field, meta, helper] = useField('material')
  const [value, setValue] = useState<string>(field.value)
  const setMaterial = (material: string) => {
    helper.setValue(material)
    setValue(material)
  }
  const isActive = (v: string) => v === value

  return (
    <>
      <h4 className={styles.h4}>Материал</h4>
      <div className={styles.items}>
        {materials.map((material, i) => (
          <label
            className={styles.itemname}
            onClick={() => setMaterial(material)}
            key={i}
          >
            <img
              src="/assets/image/catalog/granit.jpg"
              className={`${styles.inputimg} ${
                isActive(material) ? styles.isactive : ''
              }`}
            ></img>
            <p>{material}</p>
          </label>
        ))}
      </div>
    </>
  )
}
