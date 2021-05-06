let BenefitsCardComponent = ({title, description, img}) => {
    return(
        <article className="benefits__card" tabIndex="0">    
            <div className="benefits__card-bg">
                <img className="benefits__card-img" src={img} alt="placeholder"/>
            </div>
            <h3 className="benefits__card-title">{title}</h3>
            <p className="benefits__card-description">{description}</p>
        </article>
    )
}

export { BenefitsCardComponent }