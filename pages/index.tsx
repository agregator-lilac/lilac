import { CountersSection } from '@/components/sections/CountersSection/CountersSection'
import { HeaderSection } from '@/components/sections/HeaderSection'
import { ReviewSection } from '@/components/sections/ReviewSection'
import { ServiceSection } from '@/components/sections/ServiceSection'
import { NextPage } from 'next'
import { IReview } from '@/types/reviews.types'
import { FaqSection } from '@/components/sections/FaqSection'
import { AboutSection } from '@/components/sections/AboutSection'

interface IInitialData {
  reviews: IReview[]
}

const Home: NextPage<IInitialData> = ({ reviews }) => {
  return (
    <>
      <HeaderSection />
      <CountersSection />
      <ServiceSection />
      <ReviewSection data={reviews} />
      <AboutSection />
      <FaqSection />
    </>
  )
}

export async function getServerSideProps() {
  const dev = process.env.NODE_ENV !== 'production'
  const HOST = dev ? process.env.HOST : process.env.HOST_PROD
  const reviews = await fetch(`${HOST}/api/reviews`).then(async (data) => {
    return await data.json()
  })

  return {
    props: {
      reviews,
    },
  }
}

export default Home
