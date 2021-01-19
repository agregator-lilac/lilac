import {FC} from 'react';

import {LinkBtn} from '@/utils/ui'

import styles from './styles.module.scss';

const HeaderSection: FC = () => {

    return (
		<section className={styles.root}>
			<div className="container">
				<div className={styles.main}>
					<h1>
						Выбери <strong>лучшего</strong> изготовителя памятников
					</h1>
					<p>
						Поможем найти изготовителя памятника с оптимальными
						условиями: цена&nbsp;-&nbsp;качество&nbsp;-&nbsp;сроки
					</p>
					<div className={styles.btn}>
						<LinkBtn href="/" label="Выбрать" />
					</div>
				</div>
			</div>
		</section>
	);
}

export {HeaderSection};