import {FC, useEffect, useState} from 'react';

import {LinkBtn} from '@/utils/ui';
import {Slider} from './Slider';

import styles from './styles.module.scss';
import {IReview} from '@/types/reviews.types';
import useSWR from 'swr';

interface IProps {
	data?: IReview[];
}

const ReviewSection: FC<IProps> = () => {
	const [reviews, setReviews] = useState<IReview[]>([]);

	const {data} = useSWR<IReview[]>('/api/reviews', url => fetch(url).then(data => data.json()));

	if (!data) {
		return <div>loading</div>;
	}
	
	if (data && reviews.length === 0) {
		setReviews(data);
	}

	return (
		<section className={`container ${styles.root}`}>
			<div className={styles.header}>
				<div className={styles['header-text']}>
					<h2>Отзывы</h2>
				</div>

				<div className={styles['desktop-btn']}>
					<LinkBtn href="/" label="Оставить отзыв" />
				</div>
			</div>
			<Slider reviews={reviews} />

			<div className={styles['mobile-btn']}>
				<LinkBtn href="/" label="Оставить отзыв" />
			</div>
		</section>
	);
};


export default ReviewSection;
