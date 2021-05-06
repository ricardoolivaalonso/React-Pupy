import { FeaturesCardComponent } from '../03-components/FeaturesCardComponent'
import { FeaturesItem } from './FeaturesSectionData'

let FeaturesSection = () => {
    return(
        <section className="features">
            {
                FeaturesItem.map( i => (
                   <FeaturesCardComponent 
                        key={i.id}
                        title={i.title} 
                        description={i.description} 
                        bg={i.bg}
                        icon={i.icon}
                    />
                ))
            }
        </section>
    )
}

export { FeaturesSection }