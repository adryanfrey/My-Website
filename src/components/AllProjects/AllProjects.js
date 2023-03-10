import './allProjects.sass'
import { HiArrowCircleRight } from 'react-icons/hi'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AllProjects = ({setProjectsVisible, loading}) => {
    const navigate = useNavigate('')

    const handleNavigate = (url) => {
        const tl = gsap.timeline({defaults: {duration: 1}})

        tl.to('.project', {y: -3000, stagger: .07, ease: 'power1.in'})
        tl.to('.closeButton', {opacity: 0}, '<50%')

        setTimeout(() => {
            navigate(url)
            setProjectsVisible(false)
        },[1150])
    }

    const handleClose = () => {
        const tl = gsap.timeline({defaults: {duration: 1}})

        tl.to('.project', {y: -3000, stagger: .07, ease: 'power1.in'})
        tl.to('.closeButton', {opacity: 0}, '<50%')

        
        setTimeout(() => {
            setProjectsVisible(false)
        },[1150])
    }

    useEffect(() => {
        console.log('asdsd')
        gsap.to('.project', {y: 0, stagger: 0.2, opacity: 1 })
        gsap.to('.closeButton', {opacity: 1})
    },[])

    return (
        <div className='allProjects'>
            <button className='closeButton' onClick={handleClose}><i className="fa-solid fa-xmark"></i><span>Close</span></button>

            <div onClick={() => handleNavigate('/projects/1')} className='project project1'>
                <h1>01</h1>
                <div className='filter'></div>
                <h2>Audiophile Shop</h2>
                <p>Bringin you the best audio gear</p>
                <button>
                    <span>See Project</span>
                    <HiArrowCircleRight className='button-icon' />
                </button>
            </div>

            <div onClick={() => handleNavigate('/projects/2')} className='project project2'>
                <h1>02</h1>
                <div className='filter'></div>
                <h2>Invoice App</h2>
                <p>Manage your invoices easily</p>
                <button>
                    <span>See Project</span>
                    <HiArrowCircleRight className='button-icon' />
                </button>
            </div>

            <div onClick={() => handleNavigate('/projects/3')} className='project project3'>
                <h1>03</h1>
                <div className='filter'></div>
                <h2>Pizzeria Pro</h2>
                <p>Complete system for managing customer orders in a restaurant.</p>
                <button >
                    <span>see project</span>
                    <HiArrowCircleRight className='button-icon' />
                </button>
            </div>

            <div onClick={() => handleNavigate('/projects/4')} className='project project4'>
                <h1>04</h1>
                <div className='filter'></div>
                <h2>Apple Website Clone</h2>
                <p>Full animated apple website</p>
                <button >
                    <span>See Project</span>
                    <HiArrowCircleRight className='button-icon' />
                </button>
            </div>
        </div>
    )
}

export default AllProjects