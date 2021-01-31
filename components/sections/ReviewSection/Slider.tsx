import {FC, TouchEvent, useState} from 'react';
import Image from 'next/image';
import {ReviewCard} from './ReviewCard';
import useWindowWidth from '@/utils/useWindowSize';
import styles from './styles.module.scss';
import { IReview } from '@/types/reviews.types';

// const data = [
// 	{
// 		id: 1,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 2,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 3,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 4,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 5,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 6,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 7,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// 	{
// 		id: 8,
// 		text:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
// 		avatar: '/assets/sections/reviews/Avatar.jpg',
// 		author: 'Павел Середкин',
// 		date: '12.08.2020',
// 	},
// ];

const getElemOnPage = (width: number) => {
	if (width > 1199.8) {
		return 4;
	}

	if (width > 991.8) {
		return 3;
	}

	if (width > 767.8) {
		return 2;
	}

	return 1;
};

interface IReviews {
	reviews: IReview[];
} 

const Slider: FC<IReviews> = ({reviews}) => {
	const width = useWindowWidth();
	const [currentPage, setCurrentPage] = useState(0);
	const [touchStart, setTouchStart] = useState<number>(0);
	const [touchEnd, setTouchEnd] = useState<number>(0);

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
		setTouchStart(e.targetTouches[0].clientX);
	}

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		setTouchEnd(e.targetTouches[0].clientX);
	}

	const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
		if (touchEnd - touchStart >= 150 && currentPage !== 0) {
			setCurrentPage(currentPage - 1);
			return
		}

		if (touchEnd - touchStart <= -150 && currentPage !== pages - 1) {
			setCurrentPage(currentPage + 1);
			return;
		}
	}


	let elemOnPage = getElemOnPage(width);

	const pages = Math.ceil(reviews.length / elemOnPage);	

	const indicators = [];

	for (let i = 0; i < pages; i++) {
		indicators.push(
			<div
				key={i}
				className={`${styles.indicator} ${
					i === currentPage ? styles['indicator-active'] : ''
				}`}
			></div>
		);
	}

	const activeSliderData =
		currentPage * elemOnPage + elemOnPage < reviews.length
			? reviews.slice(currentPage * elemOnPage, currentPage * elemOnPage + elemOnPage)
			: reviews.slice(currentPage * elemOnPage);

	return (
		<div className={styles.slider}>
			<div
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				className={`d-grid ${styles['slider-content']} ${
					activeSliderData.length < elemOnPage ? styles.lastPage : ''
				}`}
			>
				{activeSliderData.map((data) => {
					return <ReviewCard key={data._id} review={data} />;
				})}
			</div>
			<div className={styles.controls}>
				<button
					className={styles.arrowBtn}
					disabled={currentPage === 0}
					onClick={() => {
						setCurrentPage(currentPage - 1);
					}}
				>
					<Image
						src="/assets/image/sections/reviews/left_arrow.svg"
						alt="left arrow"
						width={62}
						height={14}
					/>
				</button>
				<div className={styles.indicators}>{indicators.map((indicator) => indicator)}</div>
				<button
					className={styles.arrowBtn}
					disabled={currentPage === pages - 1}
					onClick={() => {
						setCurrentPage(currentPage + 1);
					}}
				>
					<Image
						src="/assets/image/sections/reviews/right_arrow.svg"
						alt="left arrow"
						width={62}
						height={14}
					/>
				</button>
			</div>
		</div>
	);
};

export {Slider};
