import React from "react";
import Section from "@/components/Section";
import {motion} from "framer-motion";

const About:React.FC = () => {
    return(
        <Section title={'ABOUT ME'}>
            <p className={'mt-12 relative'}>
                <motion.span
                    initial={{
                        left: 0
                    }}
                    whileInView={{
                        left: '100%'
                    }}
                    transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 1.5  ,delay:0.7}}
                    viewport={{ once: true }}
                    className={'absolute inset-0 bg-white'}></motion.span>
                When I was younger, I always thought that I want to be an artist, like a photographer or
                a
                musician, and on my journey to find the right path and the feeling of satisfaction, I
                tried
                to learn many skills, like photography, painting etc. none of them felt fulfilling,
                after a few
                years I joined a bootcamp for python, at that time it didn’t feel like art to me but it
                was so
                satisfying to see that you have the power to solve real world problems with just a few
                lines
                of code, so it began, an endless journey to learn more about the computer science.
                <div className={'h-[16px]'}/>
                The more I studied and played with new technologies, the more it felt like being an
                artist
                and when I got focused on the frontend development, it felt like magic, making UI/UX
                designers visions come to life, with every little bit of detail and its so amazing to
                see your
                work on all sorts of devices by applying responsive design principles. It was around
                that
                time that I found out about webgl and the magic of 3D web design and with a little help
                from Three.js you can create the most unbelievable web pages and user experiences.
                <div className={'h-[16px]'}/>
                As I went deeper into the wondrous world of computer science, I became more interested
                in
                its architectural aspects, learning about different design patterns and their amazing
                ways
                of handling all sorts of problems with precision and creative insight, currently I’m
                learning Asp.net core to get more familiar with APIs architectures.
                <div className={'h-[16px]'}/>
                I believe there is no unsolvable problem and in the end of the day all I want, is to be
                better
                than my yesterday.
            </p>
        </Section>
    )
}

export default About