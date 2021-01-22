import {CountersSection} from '@/components/sections/CountersSection/CountersSection';
import {HeaderSection} from '@/components/sections/HeaderSection';
import {ReviewSection} from '@/components/sections/ReviewSection';
import {ServiceSection} from '@/components/sections/ServiceSection';
import {NextPage} from 'next';
import {IReview} from '@/types/reviews.types';
import { FaqSection } from '@/components/sections/FaqSection';
import { AboutSection } from '@/components/sections/AboutSection';

interface IInitialData {
	reviews: IReview[];
}

const Home: NextPage<IInitialData> = ({reviews}) => {
	return (
		<>
			<HeaderSection />
			<CountersSection />
			<ServiceSection />
			<ReviewSection data={reviews} />
            <AboutSection />
            <FaqSection />
		</>
	);
};

export async function getServerSideProps() {
	const reviews = await fetch('https://lilac.gb-game.ru/reviews').then(async (data) => {
		return await data.json();
	});

	return {
		props: {
			reviews,
		},
	};
}

export default Home;
