import React from "react";
import Section from "@/components/Section";
import {ExperiencesInterface} from "@/types/InfoTypes";
import Experience from "@/components/Experience";

const AllExperiences: React.FC<{ experiences: ExperiencesInterface[] }> = ({experiences}) => {


    return (
        <Section title={'EXPERIENCES'} parentClassName={'mt-24'}>
            {experiences.map((experience, index) =><Experience key={index} experience={experience}/>)}
        </Section>
    )
}

export default AllExperiences