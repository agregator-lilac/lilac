import {FC} from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import {IReview} from '@/types/reviews.types';

const ReviewContent: FC<IReview> = ({text, name, date}) => {
	return (
		<div className={styles['review-content']}>
			<p className={styles['review-text']}>{text}</p>
			<div className={styles['review-footer']}>
				<Image
					src="/assets/image/sections/reviews/Avatar.jpg"
					alt="Аватар"
					width={35}
					height={35}
				/>
				<div className={styles['review-author']}>
					<p>{name}</p>
					<span>{date}</span>
				</div>
			</div>
		</div>
	);
};

export {ReviewContent};
