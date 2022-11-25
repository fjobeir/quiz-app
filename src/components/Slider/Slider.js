import { useEffect, useRef, useState } from 'react'
import './Slider.css'

const Slider = () => {
    const slider = useRef()
    const [activeSlide, setActiveSlide] = useState(0)
    const [slides, setSlides] = useState([])
    const goNextSlide = () => {
        if (activeSlide < (slides.length - 1)) {
            setActiveSlide(activeSlide + 1)
        } else {
            // if you want to start from the beginning automatically
            // setActiveSlide(0)
        }
    }
    const goPreviousSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide(activeSlide - 1)
        } else {
            // setActiveSlide(slides.length - 1)
        }
    }
    useEffect(() => {
        setSlides(slider.current.querySelectorAll('.slide'))
    }, [])
    useEffect(() => {
        const windowWidth = window.innerWidth
        const distanceToSlide = windowWidth * activeSlide
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${distanceToSlide}px)`
        })
    }, [activeSlide])
    return (
        <div className='slider' ref={slider}>
            <div className='slide red'>
                Slide One
            </div>
            <div className='slide blue'>
                Slide Two
            </div>
            <div className='slide green'>
                Slide Three
            </div>
            <div className='slide yellow'>
                Slide Four
            </div>
            <div className='slide gray'>
                Slide Five
            </div>
            {(activeSlide < (slides.length - 1)) && <div className='navigation next' onClick={goNextSlide}>
                <div className='arrow'></div>
            </div>}
            {(activeSlide > 0) && <div className='navigation previous' onClick={goPreviousSlide}>
                <div className='arrow'></div>
            </div>}
        </div>
    )
}

export default Slider