import { FadeScrollComponentY } from '../00-helpers/FadeScrollComponent'

let PlansCardComponent = ({title, subtitle, description, img, type}) => {
    return(
        <article className={`plans__item ${type}`} tabIndex="0">
                <div className="plans__info">
                    <h4 className="plans__title">{title}</h4>
                    <h2 className="plans__subtitle">{subtitle}</h2>
                    <p className="plans__description">{description}</p>
                </div>
                <div className="plans__media">
                    <FadeScrollComponentY>
                        <img className="plans__img" src={img} alt="placeholder"/>
                    </FadeScrollComponentY>
                </div>
            </article>
    )
}

export { PlansCardComponent }