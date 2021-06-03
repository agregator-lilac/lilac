import { sections } from '@/pages/catalog'
import { ICatalogItem } from '@/types/catalogItem.types'
import { useFormikContext } from 'formik'
import React from 'react'

import styles from './order.module.scss'

export const Order = () => {
  const { values } = useFormikContext<ICatalogItem>()

  return (
    <div className={styles.root}>
      <div className={styles.order}>
        <div className={styles.left}>
          <div className={styles.orderNamber}>Заказ № 00001</div>
          <p>Наименование</p>
          <p>Тип памятника </p>
          <p>Тип захоронения</p>
          <p>Материал</p>
          <p>Полировка</p>
          <p>Размер стеллы</p>
          <p>Размер подставки</p>
          <p>Цветник</p>
          <p>Наполнение цветника</p>
          <p>Гравировка ФИО</p>
          <p>Годы жизни</p>
          <p>Гравировка фото</p>
          <p>Установка</p>
          <p>Доставка</p>
        </div>
        <div className={styles.right}>
          <div className={styles.br}></div>
          <p>{values.nameMonument}</p>
          <p>{sections[values.section]} </p>
          <p>{values.type}</p>
          <p>{values.material}</p>
          <p>{values.polishingType}</p>
          <p>{`Д ${values.size.depth} х Ш ${values.size.height} х В ${values.size.width}`}</p>
          <p>
            {values.size2 &&
              `Д ${values.size2.depth} х Ш ${values.size2.height} х В ${values.size2.width}`}
          </p>
          <p>{values.flowerGarden}</p>
          <p>{values.flowerGardenFilling}</p>
          <p>{values.name}</p>
          <p>{values.date}</p>
          <p>{values.photo ? 'Да' : 'Нет'}</p>
          <p>{values.installation}</p>
          <p>{values.delivery}</p>
        </div>
      </div>
      <button className={styles.btn} type="submit">
        Отправить исполнителям
      </button>
    </div>
  )
}
