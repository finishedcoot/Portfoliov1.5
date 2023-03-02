import React, {useEffect} from "react";
import Section from "@/components/Section";
import {ExperiencesInterface} from "@/types/InfoTypes";
import Image from "next/image";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Experience from "@/components/Experience";

const AllExperiences: React.FC<{ experiences: ExperiencesInterface[] }> = ({experiences}) => {


    return (
        <Section title={'EXPERIENCES'} parentClassName={'mt-16'}>
            {experiences.map((experience, index) =><Experience key={index} experience={experience}/>)}
        </Section>
    )
}

export default AllExperiences