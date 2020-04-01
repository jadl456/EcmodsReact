import React from 'react';
import {Link} from 'react-router-dom';

import AdSense from 'react-adsense';
import AdBlock from '../components/pages/AdBlock';


class Descargas extends React.Component{
    render(){
        return (
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
                    <Link type="button" className="btn btn-outline-primary btn-block" to="//www.adowl.in/mediafire" target="_blank">Mediafire</Link>
                    <Link type="button" className="btn btn-outline-danger btn-block" to="//www.adowl.in/mega" target="_blank">Mediafire</Link>
                    <Link type="button" className="btn btn-outline-secondary btn-block" to="//www.adowl.in/forge" target="_blank">Forge 1.7.10</Link>
                </div>
                <AdSense.Google
                    client='ca-pub-8559008179999989'
                    slot='9677299766'
                    style={{ display: 'block' }}
                    format='auto'
                    responsive='true'
                />
            </main>
        );
    }
}
export default Descargas;