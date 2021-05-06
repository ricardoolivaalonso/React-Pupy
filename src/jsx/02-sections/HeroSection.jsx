import { AppElement } from '../04-elements/AppElement'
import { GoogleElement } from '../04-elements/GoogleElement'
import { MainTitleElement } from '../04-elements/MainTitleElement'
import HeroVideo from '../../img/hero-video.mp4'
import { FadeScrollComponentY, FadeScrollComponentX } from '../00-helpers/FadeScrollComponent'

let HeroSection = () => {
    return(
        <section className="hero">
            <div className="hero-info">
                <FadeScrollComponentX>
                    <MainTitleElement>How dog training is done right.</MainTitleElement>
                </FadeScrollComponentX>
                <FadeScrollComponentY>
                    <p className="hero__description">
                        When your dog misbehaves, it can be tough to deal with. There’s one thing that separates the best puppies from the worst behaved puppies and that’s training.
                    </p>
                </FadeScrollComponentY>
                <div className="hero-app">
                    <a href="#placeholder" className="hero__link"><AppElement /></a>
                    <a href="#placeholder" className="hero__link"><GoogleElement/></a>
                </div>
            </div>
            <div className="hero-media">
                <video className="hero__video" autoPlay loop muted>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export { HeroSection }