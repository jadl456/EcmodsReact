import React from 'react';

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
                    <button type="button" className="btn btn-outline-primary btn-block">Mediafire</button>
                    <button type="button" className="btn btn-outline-danger btn-block">Mega</button>
                </div>
            </main>
        );
    }
}
export default Descargas;