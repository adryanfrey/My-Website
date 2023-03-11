import './contact.sass'
import emailjs from 'emailjs-com'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import {toast} from 'react-toastify'

const Contact = ({setContactVisible}) => {

    // handle message
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // await emailjs.sendForm('service_yynju27', 'template_hlzd56y', e.target, 'EFiuWxNTSflYwcYLU')
            gsap.to('.img-bg', {opacity: 0, x: -200, ease: "power2.out", duration: 1})
            gsap.to('.formMessage', {opacity: 0, duration: 1, x: 200, ease: "power2.out"})
            gsap.to('.message', {duration: 1, opacity: 1, delay: .5})
            
        } catch (error) {
            toast.warn('Sorry there was an error')
        }
            
        e.target.reset()
    }

    useEffect(() => {
        console.log('ssd')
        gsap.to('.img-bg', {opacity: 1, duration: 1, x: 0, ease: "power2.out",})
        gsap.to('.formMessage', {opacity: 1, duration: 1, x: 0, ease: "power2.out"})
        gsap.to('.title', {opacity: 1, duration: 1.5})
        gsap.to('.closeButton', {opacity: 1, duration: 1.5})
    })

    const handleClose = () => {
        gsap.to('.img-bg', {opacity: 0, duration: 1, x: -400, ease: "power2.out",})
        gsap.to('.formMessage', {opacity: 0, duration: 1, x: 400, ease: "power2.out"})
        gsap.to('.title', {opacity: 0, duration: 1})
        gsap.to('.closeButton', {opacity: 0, duration: 1})
        gsap.to('.message', {opacity: 0, duration: 1})
        
        setTimeout(() => {
            setContactVisible(false)
        },[700])
    }

    return (
        <div className='contact-container'>
            <button className='closeButton' onClick={handleClose}><i className="fa-solid fa-xmark"></i><span>Close</span></button>
            <h2 className='contactTitle'>Contact</h2>
            <div className='email-container'>   
                <h1 className='message'>Thanks for the message! I will reply ASAP.</h1>
                <div className='img-bg'>
                    <h3 className='h3-top'><i className="fa-solid fa-phone"></i> +31 6 29800492</h3>
                    <h3 className='h3-bot'><i className="fa-solid fa-envelope"></i>adryanfrey886@gmail.com</h3>
                </div>
                <form className='formMessage' onSubmit={(e) => handleSubmit(e)}>
                    <h2>Send me a message!</h2>
                    <label>
                        Name:
                        <input name='name' type="text" placeholder='Your Name' required />
                    </label>
                    <label>
                        Email:
                        <input name='email' type="email" placeholder='Your Email' required />
                    </label>
                    <label>
                        Message:
                        <textarea name='message' placeholder='Message' required />
                    </label>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact