import { NextPage } from 'next'
import { IReview } from '@/types/reviews.types'

interface IInitialData {
  reviews: {
    size: { width: number; depth: number; height: number }
    _id: string
    material: string
    polishing: boolean
    polishingType: string
    flowerGarden: boolean
    flowerGardenFilling: string
    place: string
    name: string
  }[]
}

const baseURL = 'http://localhost:3000'

const deleteAPI = async ({ url, data }) => {
  const response = await fetch(baseURL + url, {
    method: 'DELETE',
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

const Order: NextPage<IInitialData> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <div>Материал</div>
          <div>{item.material}</div>
          <div>размеры</div>
          <div>{`Вх${item.size.height} Шх${item.size.width} Тх${item.size.depth}`}</div>
          {item.polishing && (
            <div>
              <div>Полировка</div>
              <div>{item.polishingType}</div>
            </div>
          )}
          {item.flowerGarden && (
            <div>
              <div>Цветник</div>
              <div>{item.flowerGardenFilling}</div>
            </div>
          )}
          <div>Установка</div>
          <div>{item.place}</div>
          <button
            onClick={() =>
              deleteAPI({ url: '/api/catalog', data: { _id: item._id } })
            }
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const reviews = await fetch('http://localhost:3000/api/catalog').then(
    async (data) => {
      return await data.json()
    }
  )

  return {
    props: {
      reviews,
    },
  }
}

export default Order
