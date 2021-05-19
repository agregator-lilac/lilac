import { NextPage } from 'next'
import { IReview } from '@/types/reviews.types'
import React from 'react'
import { Field, Form, Formik } from 'formik'

interface IInitialData {
  reviews: IReview[]
}

const baseURL = 'http://localhost:3000'

const post = async ({ url, data }) => {
  const response = await fetch(baseURL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw await response.json()
  }
  return await response.json()
}

const Add: NextPage<IInitialData> = ({ reviews }) => {
  return (
    <div className="d-flex">
      <h1>Каталог</h1>
      <Formik
        initialValues={{
          material: 'Гранит',
          size: {
            width: 11,
            depth: 20,
            height: 30,
          },
          polishing: false,
          polishingType: 1,
          flowerGarden: false,
          flowerGardenFilling: 'песок',
          place: 'Ярославль',
          name: 'Памятник 1',
          section: '1',
        }}
        onSubmit={(values) => {
          post({
            url: '/api/catalog',
            data: values,
          })
        }}
      >
        {({ values }) => (
          <Form style={{ display: 'grid', justifyContent: 'center' }}>
            <h3>Категория </h3>
            <Field name="section"></Field>
            <h3>Название </h3>
            <Field name="name"></Field>
            <div>Материал</div>
            <Field as="select" name="material">
              <option value="Гранит">Гранит</option>
              <option value="Мрамор">Мрамор</option>
              <option value="Серый гранит">Серый гранит</option>
            </Field>
            <div>размер памятника </div>
            <div>ширина </div>
            <Field name="size.width"></Field>
            <div>глубина </div>
            <Field name="size.depth"></Field>
            <div>высота </div>
            <Field name="size.height"></Field>
            <div>
              <p>Полировка</p>
              <Field type="checkbox" name="polishing" />
            </div>
            {values.polishing && (
              <Field as="select" name="polishingType">
                <option value="1">1 сторона</option>
                <option value="2">2 стороны</option>
                <option value="3">Все</option>
              </Field>
            )}
            <div>
              <p>цветник</p>
              <Field type="checkbox" name="flowerGarden" />
            </div>
            {values.flowerGarden && (
              <Field as="select" name="flowerGardenFilling">
                <option value="песок">песок</option>
                <option value="гравий">гравий</option>
                <option value="галька">галька</option>
              </Field>
            )}
            <div>Место установки </div>
            <Field name="place"></Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Add
