import React from 'react';
import Slider from './layout-components/Slider';
import Gamer from './layout-components/Gamer';
import LatestGamer from './layout-components/LatestGamer';
import OldestGame from './layout-components/OldestGame';
import Background from '../assets/background2.jpg';
 
const Home = () => {
    return (
        <div style={{
            backgroundImage:`url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight:'100vh',
            width:'100%'
        }}>
             <header>
                <Slider></Slider>
             </header>
             <section>
                <Gamer></Gamer>
             </section>
             <section>
                <LatestGamer></LatestGamer>
             </section>
             <section>
                <OldestGame></OldestGame>
             </section>
        </div>
    );
};

export default Home;