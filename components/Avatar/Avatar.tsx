import {FC} from 'react';
import styles from './styles.module.scss';

const Avatar: FC = () => {
	return (
		<div className={styles.root}>
			<span>Hello, Alex!</span>
			<img src="/assets/image/avatarDefault.svg" alt="аватар" />
		</div>
	);
};

export {Avatar};
