import {FC} from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

interface IProps {
    count: string;
    icon: string;
    text: string;
}

//TODO Поработать с наимениванием классов

const CounterCard: FC<IProps> = ({count, icon, text}) => {
	return (
		<article className={styles.counterCard}>
			<span className={styles.count}>{count}</span>
			<div className={styles.iconCount}>
				<Image src={icon} alt={text} width={32} height={32} />
				<span className={styles.iconText}>{text}</span>
			</div>
		</article>
	);
};

export {CounterCard};