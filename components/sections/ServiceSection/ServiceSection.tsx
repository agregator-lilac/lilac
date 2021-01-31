import {FC} from 'react';
import Image from 'next/image';

import {LinkBtn} from '@/utils/ui';

import styles from './styles.module.scss';

const ServiceSection: FC = () => {
	return (
		<section className={`container ${styles.root}`}>
			<div className="d-grid">
				<article className={styles.main}>
					<h2>Памятники</h2>
					<p>
						Выбор памятника – это процесс с которому люди подходят обдуманно и
						скурпулёзно. В этом разделе Вы сделаете выбор, правильность которого будет
						доказана десятилетиями. Мы предложим Вам широкий выбор, исходя из желаемых
						типа, размеров и материала памятника.
					</p>
					<div className={styles.btn}>
						<LinkBtn href="/" label="Выбрать" />
					</div>
				</article>
				<div className={styles.img}>
					<Image
						src="/assets/image/sections/service/monument.svg"
						alt="Изображение памятника"
						width={194}
						height={246}
					/>
				</div>
			</div>
		</section>
	);
};

export {ServiceSection};
