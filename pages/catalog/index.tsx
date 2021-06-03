import { NextPage } from 'next'
import { IReview } from '@/types/reviews.types'
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { MenuSection } from '@/components/catalog/MenuSection'
import { ICatalogItem } from '@/types/catalogItem.types'
import { CatalogSection } from '@/components/catalog/Catalog'

import styles from './styles.module.scss'

interface IInitialData {
  catalogItems: ICatalogItem[]
}

export const sections = [
  'Вертикальные',
  'Горизонтальные',
  'Кресты',
  'Декоративные',
  'Мусульманские',
]

export const imgs = [
  '/assets/image/catalog/Rectangle224.svg',
  '/assets/image/catalog/Rectangle221.svg',
  '/assets/image/catalog/Rectangle223.svg',
  '',
  '',
]

const baseURL = 'http://localhost:4000'

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

const Catalog: NextPage<IInitialData> = ({ catalogItems }) => {
  const [activeSection, setActiveSection] = useState(0)
  const sectionHandler = (id: number) => {
    setActiveSection(id)
  }
  if (!catalogItems) return <div></div>
  const catalogItemsForSection = catalogItems.filter(
    (catalogItem) => Number(catalogItem.section) === activeSection
  )
  return (
    <div className={`d-flex ${styles.root}`}>
      <MenuSection
        activeSection={activeSection}
        sectionHandler={sectionHandler}
        sections={sections}
      ></MenuSection>
      <CatalogSection
        catalogItems={catalogItemsForSection}
        section={sections[activeSection]}
        img={imgs[activeSection]}
      ></CatalogSection>
    </div>
  )
}

export async function getServerSideProps() {
  const catalogItems = await fetch('http://localhost:4000/api/catalog').then(
    async (data) => {
      return await data.json()
    }
  )

  return {
    props: {
      catalogItems,
    },
  }
}

export default Catalog
