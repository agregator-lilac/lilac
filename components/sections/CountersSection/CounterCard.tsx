import {FC} from 'react';

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
				<img src={icon} alt="" />
				<span className={styles.iconText}>{text}</span>
			</div>
		</article>
	);
};

export {CounterCard};