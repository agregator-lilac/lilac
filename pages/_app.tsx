import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

import { Navbar } from '@/components/Navbar'

import '@/styles/global.scss'
import { Footer } from '@/components/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <div className="container">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}

// MyApp.getInitialProps = async (context: AppContext): Promise<IPageProps> => {
// 	const initialProps = App.getInitialProps && (await App.getInitialProps(context));
// 	return {pageProps: {appData: 'App component', ...initialProps.pageProps}};
// };

export default MyApp
