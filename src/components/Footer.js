import React from 'react';
import './styles/Footer.css';

class Footer extends React.Component{



    render(){
        
        return(
            <div className="footer">
                <div className="container">
                    <span>Ecmods {(new Date().getFullYear())}</span>

                </div>

            </div>
        )
    }
}

export default Footer;
