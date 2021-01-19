import {FC} from 'react';

import {CounterCard} from './CounterCard';

import styles from './styles.module.scss';

const dataCounters = [
	{
		count: '250+',
		icon: '/assets/image/sections/countersSection/sales.svg',
		text: 'Куплено',
	},
	{
		count: '47+',
		icon: '/assets/image/sections/countersSection/regions.svg',
		text: 'Регионов',
	},
	{
		count: '61+',
		icon: '/assets/image/sections/countersSection/executors.svg',
		text: 'Исполнитель',
	},
	{
		count: '15%',
		icon: '/assets/image/sections/countersSection/economics.svg',
		text: 'Экономия',
	},
];

const CountersSection: FC = () => {
    return (
		<section className={`container ${styles.root}`}>
			{dataCounters.map((counter, index) => {
				return <CounterCard key={index} {...counter} />;
			})}
		</section>
	);
}

export {CountersSection};