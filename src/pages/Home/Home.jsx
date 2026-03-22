import React from 'react';
import Banner from '../../components/Banner/Banner';
import AppCard from '../../components/AppCard/AppCard';
import { useLoaderData } from 'react-router';

const Home = () => { 
    const data = useLoaderData();
   
    
    return (
        <div>
            <Banner></Banner>
            this is home
            <AppCard data={data}></AppCard>
        </div>
    );
};

export default Home;