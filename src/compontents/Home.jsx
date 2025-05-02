import React from 'react';
import Slider from './layout-components/Slider';
import Gamer from './layout-components/Gamer';
import LatestGamer from './layout-components/LatestGamer';
import OldestGame from './layout-components/OldestGame';
 
const Home = () => {
    return (
        <div>
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