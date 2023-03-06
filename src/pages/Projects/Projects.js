// styles
import './projects.sass'
import 'swiper/css'
import "swiper/css/navigation"

// assets
import logo from '../../assets/logo.png'
import project1 from '../../assets/audiophile.png'
import project2 from '../../assets/invoiceAppBanner.png'
import project3 from '../../assets/appleClone.png'
import project4 from '../../assets/pizzeriaProBanner.png'
import audiophile1 from '../../assets/audiophile1.png'
import audiophile2 from '../../assets/audiophile2.png'
import audiophile3 from '../../assets/audiophile3.png'
import audiophile4 from '../../assets/audiophile4.png'
import audiophile5 from '../../assets/audiophile5.png'

import iphone1 from '../../assets/iphone1.png'
import iphone2 from '../../assets/iphone2.png'
import iphone3 from '../../assets/iphone3.png'
import iphone4 from '../../assets/iphone4.png'

import invoiceApp1 from '../../assets/invoiceApp1.png'
import invoiceApp2 from '../../assets/invoiceApp2.png'
import invoiceApp3 from '../../assets/invoiceApp3.png'
import invoiceApp4 from '../../assets/invoiceApp4.png'
import invoiceApp5 from '../../assets/invoiceApp5.png'
import invoiceApp6 from '../../assets/invoiceApp6.png'

import pizzeriaPro1 from '../../assets/pizzeriaPro2.png'
import pizzeriaPro2 from '../../assets/pizzeriaPro1.png'
import pizzeriaPro3 from '../../assets/pizzeriaPro3.png'
import pizzeriaPro4 from '../../assets/pizzeriaPro4.png'
import pizzeriaPro5 from '../../assets/pizzeriaPro5.png'
import pizzeriaMobile1 from '../../assets/pizzeriaMobile1.png'
import pizzeriaMobile2 from '../../assets/pizzeriaMobile2.png'
import pizzeriaMobile3 from '../../assets/pizzeriaMobile3.png'
import pizzeriaMobile4 from '../../assets/pizzeriaMobile4.png'
import pizzeriaMobile5 from '../../assets/pizzeriaMobile5.png'


// hooks
import { useParams } from 'react-router-dom'
import { HiArrowCircleRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// components
import Loading from '../../components/Loading/Loading'

export default function Projects() {
    gsap.registerPlugin(ScrollTrigger)

    const { id } = useParams()
    const navigate = useNavigate('')
    const [loading, setLoading] = useState(true)

    // animations
    useEffect(() => {

        // first load animation
        gsap.to('.container', { scale: 1, duration: 1, ease: 'back.out(1)' })

        // scroll animation
        gsap.to('.projectIntroduction', {
            opacity: 1, duration: 2, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.projectIntroduction',
                start: 'top 90%',
            }
        })

        gsap.to('.visitSiteButton', {
            opacity: 1, duration: 2, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.visitSiteButton',
                start: 'top 90%',
            }
        })

        gsap.to('.swiper', {
            opacity: 1, duration: .7, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.swiper',
                start: 'top 80%',
            }
        })

        gsap.to('.features', {
            opacity: 1, duration: 2, y: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.features',
                start: 'top 30%',
            }
        })

        gsap.to('.mobileText', {
            opacity: 1, duration: 1, x: 0, ease: "power2.out", scrollTrigger: {
                trigger: '.mobileText',
                start: 'top 20%',
            }
        })

    }, [loading])

    // imgs
    const audiophileImgs = [audiophile1, audiophile2, audiophile3, audiophile4, audiophile5]
    const iphoneCloneImgs = [iphone1, iphone2, iphone3, iphone4]
    const invoiceAppImgs = [invoiceApp1, invoiceApp2, invoiceApp3, invoiceApp4, invoiceApp5, invoiceApp6]
    const pizzeriaProImgs = [pizzeriaPro1, pizzeriaPro2, pizzeriaPro3, pizzeriaPro4, pizzeriaPro5]
    const pizzeriaProMobile = [pizzeriaMobile1, pizzeriaMobile2, pizzeriaMobile3, pizzeriaMobile4, pizzeriaMobile5]

    const projectData = [
        {
            title: 'Audiophile Shop',
            subtitle: 'Bringin you the best audio gear',
            role: 'Frontend Developer',
            introduction: 'Audiophile Shop is an E-commerce website built using ReactJS, JavaScript and Sass. The website is fully responsive and optimized for all screen sizes.',
            features: 'The website features include a product listing page, product detail page, shopping cart, checkout process and an order confirmation page.',
            banner: project1,
            imgs: audiophileImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Audiophile-E-commerce',
            siteLink: 'https://adryanfrey.github.io/Audiophile-E-commerce/' 
        },
        {
            title: 'Invoice app',
            subtitle: 'Manage your invoices easily',
            role: 'Fullstack Developer',
            introduction: 'Invoice app is a web application built with JavaScript, ReactJS, Sass, and Firebase. This app offers a complete solution for invoicing, with a full login and registration system and a demo version for trying the app without registering.',
            features: 'The app is fully animated, responsive, and features both dark mode and light mode. With real-time database tracking, users can easily manage and view their invoices, and private routes ensure secure access to sensitive information.',
            banner: project2,
            imgs: invoiceAppImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Invoice-App',
            siteLink: 'https://invoice-app-b9eae.web.app/' 
        },
        {
            title: 'Apple Website Clone',
            subtitle: 'Fully animated apple website',
            role: 'Frontend Developer',
            introduction: 'This apple website clone its a personal project to attest my skills as a frontend developer.',
            features: 'Apple clone landing page fully animated',
            banner: project3,
            imgs: iphoneCloneImgs,
            mobile: false,
            gitHubRepo: 'https://github.com/adryanfrey/Iphone-Website-Clone',
            siteLink: 'https://adryanfrey.github.io/Iphone-Website-Clone/'

        },
        {
            title: 'Pizzeria Pro',
            subtitle: 'Complete system for managing customer orders in a restaurant.',
            role: 'Fullstack Developer',
            introduction: 'Pizzeria pro is a complete solution for managing orders in restaurants. Built with NextJs, TypeScript, ReactNative and NodeJS our order management system can seamlessly handle orders, improve customer satisfaction, and increase operational efficiency.',
            features: 'Our restaurant order management system streamlines the process of taking and fulfilling customer orders. Using a mobile app built with React Native, waitstaff can easily create and send new orders directly to our web-based system. The system, built with Next.js, TypeScript, and Sass, uses a RESTFUL API built with NodeJs that allows cashiers to manage these orders and communicate them to the kitchen staff.',
            banner: project4,
            imgs: pizzeriaProImgs,
            imgsMobile: pizzeriaProMobile,
            mobile: true,
            mobileFeatures: 'Our mobile app simplifies the restaurant experience for both waiters and customers. With our easy-to-use system, waiters can quickly take and manage customer orders with all the necessary details, without having to worry about manually recording them on paper. Orders are immediately sent to the cashier for efficient processing. In addition, our app offers a comprehensive catalog of the restaurants menu, conveniently divided into  categories for quick and easy selection. This helps waiters to take orders more accurately and efficiently, and provides customers with an enjoyable, hassle-free dining experience.'
        }
    ]

    // navigate
    const handleNav = (url) => {
        const project = document.querySelector('.container')

        gsap.to(project, { scale: 5, duration: .6, opacity: 0, transformOrigin: 'center' })

        setTimeout(() => {
            navigate(url)
        }, 500)

    }

    // handle links
    const handleLinks = (link) => {
        window.open(link, '_blank')
    }


    if (loading) {
        return <Loading setLoading={setLoading} />
    }

    return (
        <>
            <main className='projects'>
                <header className='navbar navbarProjects'>
                    <div onClick={() => handleNav('/')} className="navbar-logo">
                        <a href='#'><img src={logo} alt="Logo" /></a>
                        <a href='#'><h1>Adryan Frey</h1></a>
                    </div>

                    <nav className='navbar-container'>
                        <ul>
                            <li onClick={() => handleNav('/')}><a href='#'>Back home</a></li>
                            <li><a href='#'>All projects</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </nav>
                    <i id='mobile-bar' className="fa-solid fa-bars"></i>
                </header>

                <div className='container1 container'>
                    <div className='titleContainer'>
                        <h1> {projectData[id - 1].title}</h1>
                        <p>{projectData[id - 1].subtitle}</p>
                        <div className='btn-container'>
                            <button onClick={() => handleLinks(projectData[id -1].siteLink)}>
                                <span>Visit Website</span>
                                <HiArrowCircleRight className='button-icon' />
                            </button>
                            <button onClick={() => handleLinks(projectData[id -1].gitHubRepo)}>
                                <span>Github Repo</span>
                                <HiArrowCircleRight className='button-icon' />
                            </button>
                        </div>
                    </div>
                    <div onClick={() => handleLinks(projectData[id -1].siteLink)} className='imgContainer'>
                        <img src={projectData[id - 1].banner} alt="Project Image" />
                    </div>
                </div>
                <div className='container2 container'>
                    <p><span>role</span> {projectData[id - 1].role}</p>
                    <p><span>Context</span> personal project</p>
                </div>
            </main>

            <section className='introductionContainer'>
                <div className='introduction'>
                    <h1>Introduction</h1>
                    <p className='projectIntroduction'>{projectData[id - 1].introduction}</p>
                    <button onClick={() => handleLinks(projectData[id -1].siteLink)} className='visitSiteButton'>
                        <span>Visit Website</span>
                        <HiArrowCircleRight className='button-icon' />
                    </button>
                </div>

                <Swiper navigation={true} modules={[Navigation]} className='swiper'>
                    {projectData[id - 1].imgs.map((img) => (
                        <SwiperSlide key={img}><img src={img} alt="Project Demonstration" /></SwiperSlide>
                    ))}
                </Swiper>

                <div className='features'>
                    <h1 className='featuresTitle'>Features</h1>
                    <p className='featuresText'>{projectData[id - 1].features}</p>
                </div>

                {projectData[id - 1].mobile &&
                    <div className='mobileContainer'>
                        <div className='mobileText'>
                            <h1>App Features</h1>
                            <p>
                                {projectData[id - 1].mobileFeatures}
                            </p>
                        </div>

                        <Swiper navigation={true} modules={[Navigation]} className='mobileSwiper'>
                            {projectData[id - 1].imgsMobile?.map((img) => (
                                <SwiperSlide key={img}><img src={img} alt="Project Demonstration" /></SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                }


            </section>

            <Footer />
        </>


    )
}