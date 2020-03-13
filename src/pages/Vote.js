import React from 'react';
import { Link } from 'react-router-dom';

import AdSense from 'react-adsense';

class Vote extends React.Component{
    render(){
        return(
            <main role="main" className="container mt-2">
                <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='9677299766'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
                <div className="row mt-2 mp-2">
                    <Link type="button" to="//stfly.io/Voto" className="btn btn-primary btn-block">Opcion 1</Link>
                    <Link type="button" to="//stfly.io/Votoo" className="btn btn-danger btn-block">Opcion 2</Link>
                    <Link type="button" to="//stfly.io/Voto3" className="btn btn-secondary btn-block">Opcion 3</Link>
                    <Link type="button" to="//stfly.io/Voto4" className="btn btn-info btn-block">Opcion 4</Link>
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

