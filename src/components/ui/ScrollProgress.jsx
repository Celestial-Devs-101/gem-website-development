import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress,{
        stiffness:120,
        damping:30
    });

    return(

<motion.div

style={{scaleX}}

className="
fixed
left-0
top-0
z-[9999]
h-1
w-full
origin-left
bg-gradient-to-r
from-amber-400
via-yellow-300
to-amber-500
"

/>

    )

}

export default ScrollProgress;