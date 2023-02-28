import React from "react";
import Section from "@/components/Section";

const Skills: React.FC<{ skills: string[], familiar: string[] }> = ({skills, familiar}) => {
    return (<>
        <Section title={'SKILLS'} parentClassName={'mt-16'}>
            <ul className={'pl-5 mt-8 max-h-[40vh] grid grid-cols-3 gap-y-4'}>
                {skills.map((skill, index) => <li key={index}
                                                       className={'list-disc col-span-1'}>{skill}</li>)}
            </ul>
        </Section>
        <Section title={'FAMILIAR WITH'} parentClassName={'mt-8'}>
            <ul className={'pl-5 mt-8 max-h-[40vh] grid grid-cols-3 gap-y-4'}>
                {familiar.map((skill, index) => <li key={index}
                                                         className={'list-disc col-span-1'}>{skill}</li>)}
            </ul>
        </Section></>)
}

export default Skills