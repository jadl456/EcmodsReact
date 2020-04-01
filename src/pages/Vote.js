import React from 'react';
import { Link } from 'react-router-dom';

import AdSense from 'react-adsense';
import AdBlock from '../components/pages/AdBlock';


class Vote extends React.Component{
    render(){
        return(
            <main role="main" className="container mt-2">
                <AdBlock/>
                <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='9677299766'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
                <div className="row my-2">
                    <Link type="button" to="//www.adowl.in/Voto1" className="btn btn-primary btn-block" target="_blank">Opcion 1</Link>
                    <Link type="button" to="//www.adowl.in/Voto2" className="btn btn-danger btn-block" target="_blank">Opcion 2</Link>
                    <Link type="button" to="//www.adowl.in/Voto3" className="btn btn-secondary btn-block" target="_blank">Opcion 3</Link>
                    <Link type="button" to="//www.adowl.in/Voto4" className="btn btn-info btn-block" target="_blank">Opcion 4</Link>
                </div>

                <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='9677299766'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
            </main>
        )
    }
}

export default Vote;

