import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

interface IInitialData {
  params: string
}

const CatalogItemInfo: NextPage<IInitialData> = ({ params }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1 style={{ flex: '1 0 auto' }}>Loading...</h1>
  }
  return <h1 style={{ flex: '1 0 auto' }}>Это страница {params}</h1>
}

export async function getStaticPaths() {
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }]
  return { paths, fallback: 'blocking' }
}
export async function getStaticProps({ params }) {
  async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout((params) => resolve(params.id), 1000, params)
    })

    let result = await promise

    return result
  }
  return { props: { params: await f() } }
}

export default CatalogItemInfo
