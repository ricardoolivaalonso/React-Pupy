import { MainTitleElement } from '../04-elements/MainTitleElement'

let FormSection = () => {
    const formSubmit = (e) => e.preventDefault()

    return(
        <div className="form">
            <MainTitleElement>Get in touch</MainTitleElement>
            <form className="form-contact" onSubmit={formSubmit}>
                <input type="email" className="form-contact__input" placeholder="Email*"/>
                <input type="text" className="form-contact__input" placeholder="Company*"/>
                <input type="text" className="form-contact__input" placeholder="First name*"/>
                <input type="text" className="form-contact__input" placeholder="Last name*"/>
                <textarea className="form-contact__textarea" placeholder="Message*"></textarea>
                <button className="form-contact__submit" type="submit">Send message</button>
            </form>
        </div>
    )
}

export { FormSection }