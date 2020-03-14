import React from 'react';
import AdBlockDetect from 'react-ad-block-detect';
import { Redirect } from 'react-router-dom';

class AdBlock extends React.Component {
    render() {
        return (
            <AdBlockDetect>
               <Redirect to="/adb" />
            </AdBlockDetect>
        );
    }
};

export default AdBlock ;