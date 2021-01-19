import { CountersSection } from '@/components/sections/CountersSection/CountersSection';
import { HeaderSection } from '@/components/sections/HeaderSection';
import { ServiceSection } from '@/components/sections/ServiceSection';
import {NextPage} from 'next';

const Home: NextPage = () => {

    return (
        <>
            <HeaderSection />
            <CountersSection />
            <ServiceSection />
        </>
    )
}

export default Home;