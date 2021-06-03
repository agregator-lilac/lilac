import { NextPage } from 'next'
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'

import { ICatalogItem } from '@/types/catalogItem.types'
import styles from './id.module.scss'
import { InfoType } from '@/components/CatalogItemInfo/InfoType'
import { InfoSize } from '@/components/CatalogItemInfo/InfoSize'
import { Order } from '@/components/CatalogItemInfo/Order'
import { Print } from '@/components/CatalogItemInfo/Print'
import { Delivery } from '@/components/CatalogItemInfo/Delivery'
import { NavbarForCatalogItem } from '@/components/CatalogItemInfo/NavbarForCatalogItem'
import { ImagMonument } from '@/components/CatalogItemInfo/ImagMonument'
import { useRouter } from 'next/router'

interface IInitialData {
  catalogItem: ICatalogItem
}

const imgs = [
  '/assets/image/catalog/Rectangle224.svg',
  '/assets/image/catalog/Rectangle221.svg',
  '/assets/image/catalog/Rectangle223.svg',
  '',
  '',
]

const CatalogItemInfo: NextPage<IInitialData> = ({ catalogItem }) => {
  const router = useRouter()
  const { id } = router.query
  if (!id) return null

  return (
    <Formik
      initialValues={catalogItem}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      <Form>
        <NavbarForCatalogItem></NavbarForCatalogItem>
        <div className={`d-flex ${styles.root}`}>
          <div className={styles.left}>
            <InfoType></InfoType>
            <InfoSize></InfoSize>
            <Print></Print>
            <Delivery></Delivery>
          </div>
          <div className={styles.right}>
            <ImagMonument></ImagMonument>
            <Order></Order>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/api/catalog`)
  const items = await res.json()

  const paths = items.map((item) => ({
    params: { id: item._id },
  }))
  console.log('paths', paths)
  return { paths, fallback: true }
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4000/api/catalog/${params.id}`)
  const catalogItem = await res.json()

  return { props: { catalogItem } }
}

export default CatalogItemInfo
