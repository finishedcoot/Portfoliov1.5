import React, {useEffect} from "react";
import Section from "@/components/Section";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const Skills: React.FC<{ skills: string[], familiar: string[] }> = ({skills, familiar}) => {

    const boxVariant = {
        visible: { left: '100%' },
        hidden: { left: 0 }
    };
    const skillsControl = useAnimation();
    const familiarWithControl = useAnimation();

    const skillsInView = useInView({ threshold: 0.2 });
    const familiarWithInView = useInView({ threshold: 0.2 });

    useEffect(()=>{
        if(skillsInView[1]){
            skillsControl.start("visible")
        }
        if(familiarWithInView[1]){
            familiarWithControl.start("visible")
        }
    },[skillsInView[1],familiarWithInView[1]])


    return (<>
        <Section title={'SKILLS'} parentClassName={'mt-16'}>
            <ul
                className={'relative pl-5 mt-8 max-h-[40vh] grid grid-cols-3 gap-y-4'}>
                <motion.span  ref={skillsInView[0]}
                              initial={{
                                  left: 0
                              }}
                              animate={skillsControl}
                              variants={boxVariant}
                              viewport={{ once: true }}
                              transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay:0.3 }} className={'absolute inset-0 bg-white'}/>
                {skills.map((skill, index) => <li key={index}
                                                       className={'list-disc col-span-1'}>{skill}</li>)}
            </ul>
        </Section>
        <Section title={'FAMILIAR WITH'} parentClassName={'mt-8'}>
            <ul className={'relative pl-5 mt-8 max-h-[40vh] grid grid-cols-3 gap-y-4'}>
                <motion.span ref={familiarWithInView[0]}
                             initial={{
                                 left: 0
                             }}
                             animate={familiarWithControl}
                             variants={boxVariant}
                             viewport={{ once: true }}
                             transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 3, delay:0.3 }} className={'absolute inset-0 bg-white'}/>
                {familiar.map((skill, index) => <li key={index}
                                                         className={'list-disc col-span-1'}>{skill}</li>)}
            </ul>
        </Section></>)
}

export default Skills