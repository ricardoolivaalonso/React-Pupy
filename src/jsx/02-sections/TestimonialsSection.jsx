import { TestimonialsCardComponent } from '../03-components/TestimonialsCardComponent'
import { TestimonialItem } from './TestimonialsSectionData'

let TestimonialsSection = () => {
    return(
        <section className="testimonials">
            <div className="testimonials__info">
                <span className="testimonials__subtitle">Dog owners are convinced</span>
                <h2 className="testimonials__title">What others say about Pupy</h2>
            </div>
            <div className="testimonials__cards">
                {
                    TestimonialItem.map( i => (
                        <TestimonialsCardComponent 
                            key={i.id}
                            img={i.img}
                            title={i.title}
                            description={i.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}


export { TestimonialsSection }