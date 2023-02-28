import React from "react";
import Section from "@/components/Section";
import {ExperiencesInterface} from "@/types/InfoTypes";

const Experience: React.FC<{ experiences: ExperiencesInterface[] }> = ({experiences}) => {
    return (
        <Section title={'EXPERIENCES'} parentClassName={'mt-16'}>
            {experiences.map((experiences, index) => <div key={index} className={'flex'}>
                <div></div>
                <div></div>
            </div>)}
        </Section>
    )
}

export default Experience