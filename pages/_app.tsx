import {IPageProps} from '@/types/app';
import type {AppContext, AppProps} from 'next/app';
import App from 'next/app';

import {Navbar} from '@/components/Navbar';

import '@/styles/global.scss';


const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<>
            <Navbar />
			<Component {...pageProps} />
		</>
	);
};

// MyApp.getInitialProps = async (context: AppContext): Promise<IPageProps> => {
// 	const initialProps = App.getInitialProps && (await App.getInitialProps(context));
// 	return {pageProps: {appData: 'App component', ...initialProps.pageProps}};
// };

export default MyApp;
