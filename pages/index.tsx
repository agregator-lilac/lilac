import {CountersSection} from '@/components/sections/CountersSection/CountersSection';
import {HeaderSection} from '@/components/sections/HeaderSection';
import {ReviewSection} from '@/components/sections/ReviewSection';
import {ServiceSection} from '@/components/sections/ServiceSection';
import {NextPage} from 'next';
import {FaqSection} from '@/components/sections/FaqSection';
import {AboutSection} from '@/components/sections/AboutSection';

interface IInitialData {
	// reviews: IReview[];
}

const Home: NextPage<IInitialData> = () => {
	return (
		<>
			<HeaderSection />
			<CountersSection />
			<ServiceSection />
			<ReviewSection />
			<AboutSection />
			<FaqSection />
		</>
	);
};

// export async function getServerSideProps() {
// 	let reviews = await fetch(`https://lilac-dev.herokuapp.com/api/reviews`)
// 		.then(async (data) => {
// 			return await data.json();
// 		})
// 		.catch((err) => console.log(err));

// 	return {
// 		props: {
// 			reviews,
// 		},
// 	};
// }

export default Home;
