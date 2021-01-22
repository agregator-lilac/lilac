import {FC} from 'react';

import styles from './styles.module.scss';

const AboutSection: FC = () => {

    return (
		<section className={`container ${styles.root}`}>
			<div className={`d-grid ${styles.header}`}>
				<h2 className={styles.grid__cellLeft}>Почему мы</h2>
				<p className={styles.grid__cellRight}>
					Наш сервис помогает в поиске Исполнителя на изготовление памятника по Вашим
					условиям, снижает риски бессмысленной траты времени и неоправданных расходов
					из-за неверного выбора фирмы-изготовителя.
				</p>
			</div>

			<div className={`d-grid ${styles.content}`}>
				<div className={`${styles.article} ${styles.grid__cellLeft}`}>
					<h5>Ситуация №1</h5>
					<p>
						Житель крупного мегаполиса третий год собирается выделить время для выбора и
						установки памятника ушедшим родственникам. Работа, пробки, огромное
						количество фирм-изготовителей памятников. На выходных либо без сил лежишь на
						диване либо стараешься отдохнуть с друзьями. Отныне, чтобы душа не болела за
						не исполненный долг, наш сервис выполнит эту работу за Вас. Мы предложим
						выбор из нескольких предложений Исполнителей Вашего региона «под ключ».
						Максимум 15 минут и выбор сделан. Вы продолжаете взаимодействие с
						понравившимся изготовителем с возможностью дистанционного контроля за его
						работой.
					</p>
				</div>
				<div className={`${styles.article} ${styles.grid__cellRight}`}>
					<h5>Ситуация №2</h5>
					<p>
						Прошел год после смерти родственника. Пришло время установки памятника. Есть
						выбор - заказать памятник в фирме-изготовителе при кладбище захоронения, что
						как правило дороже или воспользоваться поиском Исполнителя в интернете. На
						сайте одной из фирм региона найдена привлекательная цена. Созвонившись с
						менеджером, выбираем размеры, заказываем надписи на стелу, полировку и т.п.
						Цена выросла в 3 раза. Наш сервис поможет избежать подобных манипуляций с
						ценой, предоставит выбор из нескольких предложений фирм-изготовителей в
						регионе захоронения. Конкурсная форма выбора исполнителя позволит сэкономить
						до 20%.
					</p>
				</div>
			</div>
		</section>
	);
}

export {AboutSection};