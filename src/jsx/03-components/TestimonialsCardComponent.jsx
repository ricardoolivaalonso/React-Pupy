
let TestimonialsCardComponent = ({img,title,description}) => {
    return(
        <article className="testimonials-card">
            <img className="testimonials-card__img" src={img} alt="placeholder"/>
            <h3 className="testimonials-card__title">{title}</h3>
            <p className="testimonials-card__description">{description}</p>
            <a href="#placeholder" className="testimonials-card__link">Read the whole story</a>
        </article>
    )
}

export { TestimonialsCardComponent }