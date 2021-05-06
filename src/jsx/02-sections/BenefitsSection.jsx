import { BenefitsCardComponent } from '../03-components/BenefitsCardComponent'
import { BenefitItem } from './BenefitsSectionData'

let BenefitsSections = () => {
    return(
        <section className="benefits">
            <div className="benefits-container">
                <div className="benefits__info">
                    <h2 className="benefits__title">Take your dog training to the next level with Pupy Pro!</h2>
                    <p className="benefits__description">
                        We’re always creating new training exercises and videos to keep you and your dog on your toes – with Pupy Pro you’ll get access to every single piece of training material we ever make, delivered straight to your app.
                    </p>
                </div>
                <div className="benefits__cards">
                    {
                        BenefitItem.map( i => (
                            <BenefitsCardComponent
                                key={i.id}
                                title={i.title}
                                description={i.description}
                                img={i.img}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export { BenefitsSections }