import React from 'react';
import {Link} from 'react-router-dom';

import AdSense from 'react-adsense';

class Descargas extends React.Component{
    render(){
        return (
            <main role="main" className="container mt-2">
                <AdSense.Google
                client='ca-pub-8559008179999989'
                slot='9677299766'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
            />
                <div className="row mt-2">
                    <Link type="button" className="btn btn-outline-primary btn-block" to="//www.mediafire.com/file/gp0pise6htt6eeo/mods_1.7.10.rar/file" target="_blank">Mediafire</Link>
                    <Link type="button" className="btn btn-outline-danger btn-block" to="//mega.nz/#!1jp0mAbb!_r9zYgWb4qUqFBKtiKt4NcrwnWQTkMSIJrck6dSZMns" target="_blank">Mediafire</Link>
                </div>
            </main>
        );
    }
}
export default Descargas;