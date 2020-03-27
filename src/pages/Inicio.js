import React from 'react';

import Querry from '../components/pages/Querry';
import Status from '../components/pages/Status';
//import ReactDOM from "react-dom";
import AdSense from 'react-adsense';
import AdBlock from '../components/pages/AdBlock';


class Inicio extends React.Component{

    render(){
    return (
        
        <React.Fragment>
            <AdBlock/>
            <main role="main" className="container my-2">
            <div className="jumbotron">
                <p><h1>ElectroMods</h1></p>
                <p><h4>Ip: mc.ecmods.com</h4></p>
                <p><h5>Versión: 1.7.10</h5></p>
                <Status/>
            </div>
            <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='5530225095'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
            <div className="container">
            <p>Juadores conectados</p>
                <Querry/>
            </div>
            </main>
        </React.Fragment>
    );
}

}

export default Inicio;