import {FC} from 'react';
import Link from 'next/link';

import {Avatar} from '@/components/Avatar';

import styles from './styles.module.scss';

const navLinks = [
	{title: 'Исполнители', path: '/executors'},
	{title: 'Отзывы', path: '/reviews'},
	{title: 'FAQ', path: '/FAQ'},
];

const Navbar: FC = () => {
	return (
		<nav className={`container d-grid ${styles.nav}`}>
			<div className={styles.nav__brand}>
				<Link href={'/'}>
					<a>
						<img src="/assets/image/logo.svg" alt="Логотип" />
					</a>
				</Link>
			</div>
			<div className={`d-flex ${styles.nav__menu}`}>
				{navLinks.map(({title, path}) => (
					<Link href={path} key={path}>
						<a>{title}</a>
					</Link>
				))}
			</div>
			<div className={`d-flex ${styles.nav__information}`}>
				<div className={`d-flex ${styles.telephone}`}>
					<img src="/assets/image/call.svg" alt="telphone" />
					<span>+7 969 656 78 59</span>
				</div>
				<Avatar />
			</div>
		</nav>
	);
};

export {Navbar};