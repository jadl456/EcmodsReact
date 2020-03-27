import React from 'react';

import Server from '../components/pages/Server';
import List from '../components/pages/List';
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
                <List/>
            </div>
            <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='5530225095'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
<iframe title="s" src="https://www.strawpoll.me/embed_1/19634403" style={{width: "700px", height:"420px", border:"0"}}>Loading poll...</iframe>

            <div className="container">
            <p>Juadores conectados</p>
                <Server/>
            </div>
            
            </main>
        </React.Fragment>
    );
}

}

export default Inicio;