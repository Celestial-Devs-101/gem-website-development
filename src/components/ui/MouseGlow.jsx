import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function MouseGlow() {

    const [position,setPosition]=useState({
        x:0,
        y:0
    });

    useEffect(()=>{

        const move=(e)=>{

            setPosition({
                x:e.clientX,
                y:e.clientY
            });

        };

        window.addEventListener("mousemove",move);

        return()=>window.removeEventListener("mousemove",move);

    },[]);

    return(

<motion.div

animate={{
    x:position.x-175,
    y:position.y-175
}}

transition={{
    type:"spring",
    stiffness:90,
    damping:18
}}

className="
pointer-events-none
fixed
left-0
top-0
z-0
h-[350px]
w-[350px]
rounded-full
bg-amber-400/10
blur-[110px]
"

/>

    )

}

export default MouseGlow;