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
                    <Link type="button" className="btn btn-outline-primary btn-block" to="//www.mediafire.com/file/mueca9f82hntc9f/mods.rar/file" target="_blank">Mediafire</Link>
                    <Link type="button" className="btn btn-outline-danger btn-block" to="//mega.nz/#!Y2w3ESjJ!Cpl3ni8qE8-pephIkwet_OLqfb-swwy3iRwNMhEF42w" target="_blank">Mediafire</Link>
                    <Link type="button" className="btn btn-outline-secondary btn-block" to="//files.minecraftforge.net/maven/net/minecraftforge/forge/1.7.10-10.13.4.1614-1.7.10/forge-1.7.10-10.13.4.1614-1.7.10-installer.jar" target="_blank">Forge 1.7.10</Link>
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