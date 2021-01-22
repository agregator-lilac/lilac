import {FC, ReactText} from 'react';

import styles from './styles.module.scss';
import {IFaq, ITab} from './faq.types';

const aboutWork: IFaq[] = [
	{
		num: '01',
		question: 'Оформление заявки',
		answer:
			'Для передачи заявки на изготовление памятника в работу, Вам нужно выбрать тип памятника, задать параметры и отправить макет Исполнителям Вашего региона.',
	},
	{
		num: '02',
		question: 'Выбор исполнителя',
		answer:
			'В течении суток Вам поступят предложения от нескольких Исполнителей Вашего региона. Вам остается только выбрать фирму-изготовителя с приемлемой ценой, сроками, портфолио (образцами работ).',
	},
	{
		num: '03',
		question: 'Заключение договора',
		answer:
			'После выбора Исполнителя, Вы сможете напрямую общаться с ним по всем важным моментам: заключение договора, порядок оплаты, корректировки по заказу.',
	},
];

const primary: IFaq[] = [
	{
		num: '01',
		question: 'Как узнать окончательную цену на памятник, чтобы больше не доплачивать?',
		answer:
			'Предложения от Исполнителя поступают к Вам по принципу «все включено», учитывая в том числе Ваши пожелания по доставке и установке. Цена исполнения может подлежать корректировке только, если Вы сами этого захотите и внесете дополнения в работу, выбранной фирмы-изготовителя или подадите новую заявку на сайте.',
	},
	{
		num: '02',
		question:
			'Живу в другом городе. Нет возможности приехать. Могу ли я заказать на Вашем сервисе памятник и быть уверенным в точном исполнении заказа?',
		answer:
			'Через наш сервис делаете заказ в регионе захоронения. Выбирайте Исполнителя, заключайте договор, разбивайте заказ на этапы, смотрите видео или фото отчеты от ходе работ, оплачивайте услуги по принципу «безопасная сделка» (см. раздел Оплата)',
	},
	{
		num: '03',
		question: 'Чем Ваш сервис лучше других? Какую проблему он помогает решить?',
		answer:
			'Наш сервис является единственным в России, где условия диктует не фирма, оказывающая услугу, а Заказчик, который получает широкий выбор, исходя из своих пожеланий. Вы экономите массу времени на объезд/обзвон большого количества Исполнителей, избегаете манипуляций с ценой, получая цену «под ключ». Сервис совершенно бесплатно решаем поставленную Вами задачу.',
	},
];

const payment: IFaq[] = [
	{
		num: '01',
		question: 'Какова стоимость услуг сервиса по поиску наилучшего варианта памятника? ',
		answer:
			'Для Заказчика поиска лучшего предложения на изготовление памятника на место захоронения -  услуги нашего сервиса абсолютно бесплатны.',
	},
	{
		num: '02',
		question: 'Что такое оплата по принципу «безопасная сделка»?',
		answer:
			'После создания заказа, на карте заказчика блокируется нужная сумма. После подтвереждения выполнения заказа заказчиком сервис автоматически переводит оплату исполнителю',
	},
	{
		num: '03',
		question:
			'Могу ли я использовать принцип оплаты «безопасная сделка», если предусматривается предоплата?',
		answer:
			'По договоренности с Исполнителем оплату услуг можно разбить на этапы. Согласно договора на оказание услуг, Вы перечисляете предоплату Исполнителю. Исполнитель выполняет очередной этап и предоставляет Вам отчет об исполнении (видео/фото отчет или выезд на место). Вы подтверждаете качественное исполнение работ и сервис дает команду Кассе на оплату оставшейся/очередной суммы.',
	},
];

const data = [aboutWork, primary, payment];

const TabContent: FC<ITab> = ({id}) => {
	const renderTabContent = ({num, question, answer}) => {
		return (
			<div key={`${num}__${question}`} className={`d-grid ${styles.tabItem}`}>
				<div className={`${styles.grid__cellLeft} ${styles['tabItem-question']}`}>
					<span className={styles.questionNumber}>{num}</span>
					<span className={styles.questionText}>{question}</span>
				</div>

				<p className={`${styles.grid__cellRight} ${styles.questionAnswer}`}>{answer}</p>
			</div>
		);
	};

	return (
		<div className={styles.content}>
			{data[id].map((content, index) => {
				return renderTabContent(content);
			})}
		</div>
	);
};

export {TabContent};
