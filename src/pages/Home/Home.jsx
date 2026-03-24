import React from 'react';
import Banner from '../../components/Banner/Banner';
import AppCard from '../../components/AppCard/AppCard';
import { useLoaderData } from 'react-router';
import AppStatus from '../../components/AppStatus/AppStatus';

const Home = () => {
    const data = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <div className="-mt-17.5 mb-8">
                <AppStatus data={data}></AppStatus>
            </div>
            <div className="mb-8">
                <AppCard data={data}></AppCard>
            </div>

        </div>
    );
};

export default Home;