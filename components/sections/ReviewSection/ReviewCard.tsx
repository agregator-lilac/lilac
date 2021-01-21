import {FC} from 'react';
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
				<img src="\assets\image\sections\reviews\quotes.jpg" alt="" />
			</div>
			<ReviewContent {...review} />
			<div className={`${styles.quotes} ${styles['quotes-inverse']}`}>
				<img src="\assets\image\sections\reviews\quotes.jpg" alt="" />
			</div>
		</div>
	);
};

export {ReviewCard};
