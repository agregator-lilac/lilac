import {FC, useState} from 'react';
import {TabContent} from './TabContent';

import styles from './styles.module.scss';

const FaqSection: FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	const changeTabHandler = (id: number) => {
		setActiveTab(id);
	};

	return (
		<section className={`container ${styles.root}`}>
			<div className={`d-grid ${styles.header}`}>
				<h2 className={styles.grid__cellLeft}>Вопросы</h2>
				<div className={`${styles.grid__cellRight} ${styles.tabs}`}>
					<div
						className={`${styles.tab} ${activeTab === 0 ? styles.activeTab : ''}`}
						onClick={() => changeTabHandler(0)}
					>
						Как мы работаем
					</div>

					<div
						className={`${styles.tab} ${activeTab === 1 ? styles.activeTab : ''}`}
						onClick={() => changeTabHandler(1)}
					>
						Основные
					</div>

					<div
						className={`${styles.tab} ${activeTab === 2 ? styles.activeTab : ''}`}
						onClick={() => changeTabHandler(2)}
					>
						Оплата
					</div>

				</div>
			</div>
			<TabContent id={activeTab} />
		</section>
	);
};

export {FaqSection};
