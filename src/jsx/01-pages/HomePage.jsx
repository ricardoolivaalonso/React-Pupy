import { HeroSection } from '../02-sections/HeroSection'
import { FeaturesSection } from '../02-sections/FeaturesSection'
import { PlansSection } from '../02-sections/PlansSection'
import { BenefitsSections } from '../02-sections/BenefitsSection'
import { TestimonialsSection } from '../02-sections/TestimonialsSection'
import { KickstartSection } from '../02-sections/KiskstartSection'
import MetaTags from 'react-meta-tags'
import { motion } from "framer-motion"

let HomePage = ({variants}) => {
    return(
        <>
            <MetaTags><title>Home</title></MetaTags>
            <motion.div className="motion-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition= {{ duration: .5 }}
            > 
                <HeroSection />
                <FeaturesSection/>
                <PlansSection />
                <BenefitsSections />
                <TestimonialsSection />
                <KickstartSection />
            </motion.div>
        </>
    )
}

export { HomePage }