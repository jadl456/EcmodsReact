import React from 'react';

import Querry from '../components/pages/querry';
// import ReactDOM from "react-dom";
import AdSense from 'react-adsense';

class inicio extends React.Component{

    render(){
    return (
        
        <React.Fragment>
            <div className="container mt-2">
            <div className="jumbotron">
                <p><h2>ElectroMods</h2></p>
            </div>
            <AdSense.Google
            client='ca-pub-8559008179999989'
            slot='5530225095'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
            />
            <p>Juadores conectados</p>
            <Querry/>
            </div>
            
        </React.Fragment>
    );
}

}

export default inicio;