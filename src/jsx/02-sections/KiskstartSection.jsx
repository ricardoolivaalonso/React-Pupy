import KickstartImg from '../../img/kickstart.png'
import { AppElement } from '../04-elements/AppElement'
import { GoogleElement } from '../04-elements/GoogleElement'

let KickstartSection = () => {
    return(
        <section className="kickstart">
            <div className="kickstart-container">
                <div className="kickstart__info">
                    <h1 className="kickstart__title">Ready to kickstart your dog’s training?</h1>
                    <p className="kickstart__description">Download the app for free today, available on the AppStore and the Play Store.</p>
                    <div className="kickstart-app">
                        <a href="#placeholder" className="kickstart__link"><AppElement /></a>
                        <a href="#placeholder" className="kickstart__link"><GoogleElement/></a>
                    </div>
                </div>
            </div>
            <div className="kickstart__media">
                <img className="kickstart__img" src={KickstartImg} alt="placeholder"/>
            </div>
        </section>
    )
}

export { KickstartSection }