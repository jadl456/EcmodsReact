import React from 'react';
import './styles/Footer.css';

class Footer extends React.Component{

    render(){
        
        return(
            <footer className="footer">
                <div className="container">
                    <span>Ecmods {(new Date().getFullYear())}</span>

                </div>

            </footer>
        )
    }
}

export default Footer;
