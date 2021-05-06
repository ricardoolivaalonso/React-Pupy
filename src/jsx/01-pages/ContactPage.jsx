import { FormSection } from '../02-sections/FormSection'
import { KickstartSection } from '../02-sections/KiskstartSection'
import MetaTags from 'react-meta-tags'
import { motion } from "framer-motion"

let ContactPage = ({variants}) => {
    return(
        <>
            <MetaTags><title>Contact</title></MetaTags>
            <motion.div className="motion-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition= {{ duration: .5 }}
            > 
                <FormSection />
                <KickstartSection />
            </motion.div>

        </>
    )
}

export { ContactPage }