import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import AdBlock from '../components/pages/AdBlock';

function Layout (props){
    return (
        <React.Fragment>
            <Navbar/>
            <AdBlock/>
            {props.children}
            <Footer/>
        </React.Fragment>
        
    );
}

export default Layout;