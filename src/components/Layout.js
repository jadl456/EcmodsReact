import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import PoliticasCokies from './pages/PoliticasCokkies';

function Layout (props){
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
            <PoliticasCokies/>
            <Footer/>
        </React.Fragment>
        
    );
}

export default Layout;