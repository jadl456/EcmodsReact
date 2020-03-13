import React from 'react';

import Querry from '../components/pages/querry';
// import ReactDOM from "react-dom";
import AdSense from 'react-adsense';

class inicio extends React.Component{

    render(){
    return (
        
        <React.Fragment>
            <main role="main" className="container mt-2">
            <div className="jumbotron">
                <p><h2>ElectroMods</h2></p>
                <p><h3>Ip: Proximamente</h3></p>
            </div>
            <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='5530225095'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
            <p>Juadores conectados</p>
            <Querry/>
            </main>
            
        </React.Fragment>
    );
}

}

export default inicio;