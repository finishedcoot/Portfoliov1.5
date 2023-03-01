import React, {ReactNode, useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const Section: React.FC<{
    title: string, parentClassName?: string, titleClassName?: string, children: ReactNode
}> = ({
          title,
          parentClassName,
          titleClassName,
          children
      }) => {
    const ref = useRef(null)
    const boxVariant = {
        visible: { left: '100%' },
        hidden: { left: 0 }
    };
    const control = useAnimation();

    const root = useRef(null)
    const isInView = useInView(ref,{root, margin: "0% -30% -10% -30%", once: true})

    useEffect(()=>{
        if(isInView){
            console.log('inview')
            control.start("visible")
        }
    },[isInView])

    return <section ref={root} className={`flex flex-col ${parentClassName}`}>
        <motion.h1 ref={ref} className={titleClassName || 'text-5xl font-semibold w-max relative cursor-default'}>
            {title}
            <motion.span
                initial={{
                    left: 0
                }}
                animate={control}
                variants={boxVariant}
                 viewport={{ once: true }}
                transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay:0.3 }}

                className={'absolute inset-0 bg-white'}></motion.span>
            <span className={'absolute left-0 -bottom-2 h-1 w-full bg-black'}/>
            <motion.span
                initial={{
                    left: 0
                }}
                whileInView={{
                    left: '100%'
                }}
                 viewport={{ once: true }}
                transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay:0.3 }}
                className={'absolute left-0 -bottom-2 h-1 w-full bg-white'}/>
        </motion.h1>

        {children}
    </section>
}

export default Section