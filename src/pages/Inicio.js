import React from 'react';

import Querry from '../components/pages/querry';
// import ReactDOM from "react-dom";

class inicio extends React.Component{

    render(){
    return (
        <React.Fragment>
            <div className="container mt-2">
            <div className="jumbotron">
                <p><h2>ElectroMods</h2></p>
            </div>
            <p>Juadores conectados</p>
            <Querry/>
            </div>
            
        </React.Fragment>
    );
}

}

export default inicio;