import { FadeScrollComponentX } from '../00-helpers/FadeScrollComponent'

let FeaturesCardComponent = ({title, description, bg, icon}) => {
    return(
        <FadeScrollComponentX>
            <article className={`features__item features__item${bg}`} tabIndex="0">
                <div className={`features__bg features__bg${bg}`}>
                <img className="features__icon" src={icon} alt="placeholder"/>
                </div>
                <h3 className="features__title">{title}</h3>
                <p className="features__description">{description}</p>
            </article>
        </FadeScrollComponentX>
    )
}

export { FeaturesCardComponent}