import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import Slide from '../../components/Slide/Slide';
import DiscoverSection from '../../components/Discover section/DiscoverSection';
import Temporal from '../../components/temporal/temporal';




const Home = () => {

    return(
        <div className="home">

            <Slide />
            <Temporal />
            <DiscoverSection />
            
        </div>
    )
};

export default Home;