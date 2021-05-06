import { NewsCardComponent } from '../03-components/NewsCardComponent'
import { MainTitleElement } from '../04-elements/MainTitleElement'
import { NewsItem } from './NewsSectionData'


let NewsSection = () => {
    return(
        <section className="news">
            <div className="news-container">
                <MainTitleElement>Pupy Blog.</MainTitleElement>

                <div className="news-cards">
                    {
                        NewsItem.map( i => (
                            <NewsCardComponent 
                                key={i.id}
                                img={i.img}
                                title={i.title}
                                description={i.description}
                                link={i.link}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export { NewsSection }