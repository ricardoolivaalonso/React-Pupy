import { NewsSection } from '../02-sections/NewsSections'
import { KickstartSection } from '../02-sections/KiskstartSection'
import MetaTags from 'react-meta-tags'
import { motion } from "framer-motion"

let BlogPage = ({variants}) => {
    return(
        <>
            <MetaTags><title>Blog</title></MetaTags>
            <motion.div className="motion-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition= {{ duration: .5 }}
            > 
                <NewsSection />
                <KickstartSection />
            </motion.div>
        </>
    )
}

export { BlogPage }