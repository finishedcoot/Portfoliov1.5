import React, {useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import {ExperiencesInterface} from "@/types/InfoTypes";
import {useInView} from "react-intersection-observer";

const Experience: React.FC<{ experience: ExperiencesInterface }> = ({experience}) => {
    const boxVariant = {
        visible: {left: '100%'},
        hidden: {left: 0}
    };
    const fadeVariants = {
        visible: {opacity: '100%'},
        hidden: {opacity: '0%'}
    }

    const titleControl = useAnimation();
    const dateControl = useAnimation();
    const descControl = useAnimation();
    const [titleRef, titleInView] = useInView({threshold: 0.2});
    const [dateRef, dateInView] = useInView({threshold: 0.2});
    const [descRef, descInView] = useInView({threshold: 0.2});

    useEffect(() => {
        if (titleInView) {
            console.log('start');
            titleControl.start("visible")
        }
    }, [titleInView])

    useEffect(() => {
        if (dateInView) {
            console.log('start');
            dateControl.start("visible")
        }
    }, [dateInView])

    useEffect(() => {
        if (descInView) {
            console.log('start');
            descControl.start("visible")
        }
    }, [descInView])
    return (<div className={'flex flex-col items-start first-of-type:mt-20 mt-20'}>

        <div className={'flex flex-col justify-end relative'}>
            <h1
                ref={titleRef}
                className={'text-3xl font-bold cursor-default relative'}>

                {experience.title}
                <motion.span
                    initial={{
                        left: 0
                    }}
                    animate={titleControl}
                    variants={boxVariant}
                    viewport={{once: true}}
                    transition={{ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay: 0.3}}
                    className={'absolute inset-0 bg-white'}/>
            </h1>
            <span ref={dateRef} className={'text-sm text-neutral-500 relative'}>
<motion.span
    initial={{
        left: 0
    }}
    animate={dateControl}
    variants={boxVariant}
    viewport={{once: true}}
    transition={{ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay: 0.3}}
    className={'absolute inset-0 bg-white'}/>
                {experience.date}</span>
            {experience.logo &&
                <motion.div initial={{
                    opacity: 0
                }}
                            animate={dateControl}
                            variants={fadeVariants}
                            viewport={{once: true}}
                            transition={{ease: [0.43, 0.13, 0.23, 0.96], duration: 0.7, delay: 2.7}}
                            className={'absolute -right-20'}>
                    <Image src={experience.logo} alt={experience.title} width={65} height={65}/>
                </motion.div>
            }
        </div>

        <p ref={descRef} className={'mt-2 text-sm relative'}>{experience.description}
            <motion.span
                initial={{
                    left: 0
                }}
                animate={descControl}
                variants={boxVariant}
                viewport={{once: true}}
                transition={{ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay: 0.3}}
                className={'absolute inset-0 bg-white'}/>
        </p>
        <div  className={'flex flex-wrap items-center gap-x-1.5 mt-4 relative'}>
            <motion.span
                initial={{
                    left: 0
                }}
                animate={descControl}
                variants={boxVariant}
                viewport={{once: true}}
                transition={{ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay: 0.3}}
                className={'absolute inset-0 bg-white'}/>
            <span className={'text-lg font-semibold'}>Technologies:</span>
            {experience.tools.map((tech, index) => <span className={'text-sm'}
                                                         key={index}>{`${index != 0 ? ',' : ''}${tech}`}</span>)}
        </div>
        <motion.div initial={{
            opacity: 0
        }}
                    animate={descControl}
                    variants={fadeVariants}
                    viewport={{once: true}}
                    transition={{ease: [0.43, 0.13, 0.23, 0.96], duration: 0.7, delay: 2.7}}
                    className={'flex gap-3 items-center mt-4'}>
            {experience.website &&
                <a className={'px-3.5 py-2 bg-black text-white hover:text-black hover:bg-transparent border transition-all'}
                   href={experience.website}>Website</a>}
            {experience.github &&
                <a className={'px-3.5 py-2 bg-black text-white hover:text-black hover:bg-transparent border transition-all'}
                   href={experience.github}>Code</a>}
        </motion.div>
    </div>)
}

export default Experience