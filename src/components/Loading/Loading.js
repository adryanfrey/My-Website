import './loading.sass'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Loading({setLoading}) {

    useEffect(() => {
        const astronaut = document.querySelector('.astronaut')
        gsap.to(astronaut, {opacity: 1, duration: 1})
        setTimeout(() => {
            astronaut.className = 'astronaut astronautShrink'
        }, 800)
        
        setTimeout(() => {
            setLoading(false)
        },[1800])
    },[])

    return (
        <div className="loading">
            <div className="astronaut">
                <div className="head"></div>
                <div className="arm arm-left"></div>
                <div className="arm arm-right"></div>
                <div className="body">
                    <div className="panel"></div>
                </div>
                <div className="leg leg-left"></div>
                <div className="leg leg-right"></div>
                <div className="schoolbag"></div>
            </div>
        </div>
    )
} 