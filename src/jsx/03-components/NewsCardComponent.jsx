let NewsCardComponent = ({img,title,description,link}) => {
    return(
        <article className="news-card">
            <div className="news-card__media">
                <img src={img} alt="placeholder" className="news-card__image"/>
            </div>
            <div className="news-card__info">
                <h3 className="news-card__title">{title}</h3>
                <p className="news-card__description">{description}</p>
                <a href={`#${link}`} className="news-card__link">Read article now</a>
            </div>
        </article>
    )
}
export { NewsCardComponent }