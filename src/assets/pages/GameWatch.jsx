import React from 'react';
import Navbar from '../../compontents/Navbar';
import Footer from '../../compontents/Footer';
import WatchList from '../../compontents/layout-components/WatchList';

const GameWatch = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
               <WatchList></WatchList>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default GameWatch;