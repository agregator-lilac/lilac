import {FC} from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const Avatar: FC = () => {
	return (
		<div className={styles.root}>
			<span>Hello, Alex!</span>
			<Image src="/assets/image/avatarDefault.svg" alt="аватар" width={52} height={52}/>
		</div>
	);
};

export {Avatar};
