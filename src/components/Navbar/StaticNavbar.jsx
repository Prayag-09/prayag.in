import { useState, useEffect } from 'react'
import { fixedNav } from '../../utils/static'
import { motion, useAnimation } from "framer-motion";
import { Link, animateScroll } from 'react-scroll';

const StaticNavbar = () => {
    
    const [state,setState] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
        document.onclick = (e) => {
            const target = e.target;
            if(!target.closest(".menu-btn")){
                setState(false);
            }
        }
    },[controls]);
    
    const myName = () => {
        <div>
            <div>
                <span>
                    
                </span>
            </div>
        </div>
    }
    return (
        <div>

        </div>
    )
}

export default StaticNavbar;

