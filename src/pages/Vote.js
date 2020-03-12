import React from 'react';

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
                <div className="row">
                    <button type="button" className="btn btn-primary btn-block">Opcion 1</button>
                    <button type="button" className="btn btn-danger btn-block">Opcion 2</button>
                    <button type="button" className="btn btn-secondary btn-block">Opcion 3</button>
                    <button type="button" className="btn btn-info btn-block">Opcion 4</button>
                </div>
            </main>
        )
    }
}

export default Vote;

