import { HomePage } from './01-pages/HomePage'
import { HeaderSection } from './02-sections/HeaderSection'
import { ContactPage } from './01-pages/ContactPage'
import { BlogPage } from './01-pages/BlogPage'

import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import { FooterSection } from './02-sections/FooterSection'
import { ScrollToTop } from './00-helpers/ScrollToTop'
import { AnimatePresence } from "framer-motion"
import MetaTags from 'react-meta-tags'
import Favicon from '../img/favicon.png'

let App = () => {
	let location = useLocation()

	return(
		<div className="container">
			<MetaTags><link rel="shorcut icon" type="image/x-icon" href={Favicon}/></MetaTags>
			<ScrollToTop />

			<HeaderSection />
			<AnimatePresence exitBeforeEnter >
				<Switch location={location} key={location.key}>
					<Route path="/" exact >
						<HomePage />
					</Route>
					<Route path="/contact" exact >
						<ContactPage />
					</Route>
					<Route path="/blog" exact >
						<BlogPage />
					</Route>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</AnimatePresence>
			<FooterSection />

		</div>

	)
}

export default App;
