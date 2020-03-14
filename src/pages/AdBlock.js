import React from 'react';

import adb from '../img/adblock.png'

class AdBlock extends React.Component {
    render() {
        return (
            <div className="container my-2">
                <center><div className="row">
                    <img src={adb} className="rounded mx-auto d-block" alt=""></img>
                    <p>Hemos detectado que tienes AdBlock y lo tienes habilitado para nuestro sitio
                    lamentablemente nos mantenemos de la publicidad que hay aqui y si evitas la
                    publicidad no generamos ganancias para poder seguir online, porfavor desactiva
                    AdBlock para nuestro sitio, lo tienes arriba del navegador a la derecha y actualiza
                    la Web nuevamente para seguir navegando.</p>
                </div>
                </center>
            </div>
        );
    }
};

export default AdBlock ;