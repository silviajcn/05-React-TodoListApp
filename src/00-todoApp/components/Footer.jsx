import { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa";

export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, [])

    return (
        <footer>
            <div className='scrollToTop'>
                {isVisible && (
                    <div
                        className='back-top-container'
                        onClick={() => scrollToTop()}
                    >
                        <div className='indication'>
                            <FaAngleUp />
                        </div>
                    </div>
                )}
            </div>

            <p>© 2022, ToDoApp By <a href='https://silviajcn.vercel.app/' target='_blank' rel="noreferrer" className='links'>Silvi</a>.</p>

        </footer>
    )
};