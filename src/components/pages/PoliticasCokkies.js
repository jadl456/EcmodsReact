import React from 'react';
import CookieConsent from "react-cookie-consent";

class PoliticasCokkies extends React.Component{

    render(){
        return(
            <CookieConsent
                buttonText = "Aceptar"
                cookieName="EcmodsCookies"
                acceptOnScroll={false}
                style={{ background: "#727272" }}
            >
                Utilizamos cookies propias y de terceros para ofrecer nuestros servicios, recoger información estadística e incluir publicidad. Si continua navegando acepta su instalación y uso. Puede cambiar la configuración u obtener más información en nuestra <a href="/cookies">POLÍTICA DE COOKIES</a>
            </CookieConsent>
        )
    }
}

export default PoliticasCokkies ;