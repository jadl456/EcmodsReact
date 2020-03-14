import React from 'react';
import AdBlockDetect from 'react-ad-block-detect';

class AdBlock extends React.Component {
    render() {
        return (
            <AdBlockDetect>
                <p>Show this if an ad blocker has been enabled.</p>
            </AdBlockDetect>
        );
    }
}

export default AdBlock ;