import {useEffect, useState} from 'react';

export default function useWindowWidth() {
	const isSSR = typeof window === 'undefined';

	const [windowWidth, setWindowWidth] = useState(isSSR ? 1440 : window.innerWidth);

	function changeWindowWidth() {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', changeWindowWidth);

		return () => {
			window.removeEventListener('resize', changeWindowWidth);
		};
	}, []);

	return windowWidth;
}
