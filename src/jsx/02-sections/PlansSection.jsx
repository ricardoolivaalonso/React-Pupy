import { PlansCardComponent } from '../03-components/PlansCardComponent'
import { PlansItem } from './PlansSectionData'

let PlansSection = () => {
    return(
        <section className="plans">
            {
                PlansItem.map( i => (
                    <PlansCardComponent 
                        key={i.id}
                        title={i.title}
                        subtitle={i.subtitle}
                        description={i.description}
                        img={i.img}
                        type={i.type}
                    />
                ))
            }
        </section>
    )
}

export { PlansSection }