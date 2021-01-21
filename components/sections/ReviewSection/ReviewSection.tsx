import {FC, useEffect, useState} from 'react';

import {LinkBtn} from '@/utils/ui';
import {Slider} from './Slider';

import styles from './styles.module.scss';
import {IReview} from '@/types/reviews.types';

interface IProps {
	data?: IReview[];
}

const ReviewSection: FC<IProps> = ({data}) => {
	const [reviews, setReviews] = useState<IReview[]>(data);

	// const getReviews = async () => {
	// 	return await fetch('https://lilac.gb-game.ru/reviews')
	// 		.then((data) => {
	// 			return data.json();
	// 		})
	// 		.then((data) => setReviews(data));
	// };

	// useEffect(() => {
	// 	getReviews();
	// }, []);

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
