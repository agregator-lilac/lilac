
import {FC} from 'react';
import Image from 'next/image';
import {ReviewContent} from './ReviewContent';
import styles from './styles.module.scss';
import { IReview } from '@/types/reviews.types';

interface IProps {
	review: IReview
}

const ReviewCard: FC<IProps> = ({review}) => {
	return (
		<div className={styles.reviewCard} id={review._id.toString()}>
			<div className={`${styles.quotes} ${styles['quotes-straight']}`}>
				<Image src="/assets/image/sections/reviews/quotes.jpg" alt="" width={29} height={21} />
			</div>
			<ReviewContent {...review} />
			<div className={`${styles.quotes} ${styles['quotes-inverse']}`}>
				<Image src="/assets/image/sections/reviews/quotes.jpg" alt="" width={29} height={21} />
			</div>
		</div>
	);
};

export {ReviewCard};
