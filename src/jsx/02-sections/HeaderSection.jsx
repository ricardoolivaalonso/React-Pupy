import { useState, useEffect } from 'react'
import HeaderTrigger from '../../img/menu.svg'
import { NavLink } from 'react-router-dom'

let HeaderSection = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)


    const moveHeader = () => window.scrollY > 100 ? setIsHeaderVisible(true) : setIsHeaderVisible(false)
    const showMenu = () => setIsMenuVisible(!isMenuVisible)
    
    useEffect(()=>{
        window.addEventListener('scroll', moveHeader)
        return () => window.removeEventListener('scroll', moveHeader)  
    }, [])

    return(
        <header className={ `header ${isHeaderVisible && 'is-header-visible'}` }>
            <div className="header-container">
                <a href="/" className="header__logo">
                    <svg width={118} height={36} viewBox="0 0 188 58"><g fillRule="nonzero" fill="none"><path d="M87.758 44.373v-6.995c1.573.139 3.332.231 6.202.231 7.776 0 14.302-4.91 14.302-13.897C108.262 13.845 100.3 10 92.247 10l-.497.001-.325.003-.323.003c-2.153.03-4.35.168-10.102.642v33.724h6.758zm5.045-13.156c-1.667 0-3.472-.232-5.045-.464V16.856c1.157-.139 3.517-.324 4.49-.324 5.739 0 8.793 2.316 8.793 7.18 0 4.957-2.916 7.505-8.238 7.505zm34.833 13.526a77.958 77.958 0 0 1 6.526-.695V21.303h-6.526v9.82c0 4.68-1.481 7.413-5.091 7.413-3.518 0-5.091-2.224-5.091-6.3 0-3.614.277-7.227.462-10.655-2.268-.093-4.443-.324-6.618-.602-.324 3.66-.648 8.43-.648 12.23 0 6.485 3.147 11.442 10.46 11.442 2.268 0 4.86-.927 6.526-2.456v2.548zm17.107 10.98v-13.99c1.62 2.037 3.98 2.918 7.081 2.918 6.758 0 11.479-4.587 11.479-11.674 0-7.134-4.258-11.813-11.386-11.813-3.333 0-5.693.88-7.174 2.409v-2.594c-2.13.324-4.12.51-6.341.648v34.095h6.34zm5.924-16.91c-1.851 0-3.471-.694-4.536-1.991-.74-.973-1.157-2.177-1.157-3.753 0-1.852.51-3.289 1.389-4.308 1.018-1.158 2.453-1.76 4.35-1.76 3.333 0 5.971 1.992 5.971 5.976 0 4.03-2.546 5.837-6.017 5.837zM167.912 56c4.212-.093 8.147-2.502 11.71-11.998L188 21.627c-2.268-.139-4.582-.324-6.665-.648l-5.184 15.935-5.832-15.935c-2.453.324-4.767.51-6.989.648l9.72 22.885-.185.555c-1.389 3.66-3.518 5.142-5.925 5.837l.972 5.096z" fill="#000" /><path d="M.226 28.3C1.209 11.793 11.849.057 29.418.836c9.389.417 17.101 6.105 20.149 14.971.072.21.142.44.209.692l.02.079 8.893-.172a3.2 3.2 0 0 1 3.18 2.481l.036.179c1.963 11.478-.52 19.345-7.862 22.645-4.758 2.22-10.009 1.925-15.507-.738a3.2 3.2 0 1 1 2.79-5.76c3.857 1.868 7.112 2.051 10.051.68 3.691-1.66 5.34-5.692 4.633-12.738l-.032-.296-8.748.17a3.2 3.2 0 0 1-3.194-2.543l-.033-.181-.082-.526-.081-.472-.08-.417a17.71 17.71 0 0 0-.037-.188l-.074-.331-.07-.272-.064-.21c-2.188-6.365-7.602-10.358-14.38-10.66-13.758-.61-21.73 8.183-22.52 21.45-.717 12.02 5.041 22.225 12.391 22.225 6.054 0 9.082-4.821 7.117-13.687l-.167-.717a35.16 35.16 0 0 0-.293-1.11c-.516-1.836-1.574-4.206-3.18-7.066a3.2 3.2 0 0 1 5.58-3.133c1.835 3.267 3.09 6.076 3.762 8.47 3.854 13.727-1.597 23.643-12.819 23.643C7.1 57.305-.68 43.515.226 28.3z" fill="#FF7154" /></g></svg>
                </a>
                <button className="header__trigger" onClick={showMenu} >
                    <img className="header__icon" src={HeaderTrigger} alt="placeholder" />
                </button>
                <nav className={`header-menu ${isMenuVisible && 'is-menu-visible'}`}>
                    <ul className="header-menu__list">
                        <li className="header-menu__item">
							<NavLink to="/" exact={true} className="header-menu__link" onClick={showMenu}>Home</NavLink>
                        </li>
                        <li className="header-menu__item">
							<NavLink to="/blog" exact={true} className="header-menu__link" onClick={showMenu}>Blog</NavLink>
                        </li>
                        <li className="header-menu__item">
							<NavLink to="/contact" exact={true} className="header-menu__link" onClick={showMenu}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export { HeaderSection }