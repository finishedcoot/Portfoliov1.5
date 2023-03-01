import React from "react";
import Section from "@/components/Section";
import {ExperiencesInterface} from "@/types/InfoTypes";
import Image from "next/image";

const Experience: React.FC<{ experiences: ExperiencesInterface[] }> = ({experiences}) => {
    return (
        <Section title={'EXPERIENCES'} parentClassName={'mt-16'}>
            {experiences.map((experiences, index) => <div key={index} className={'flex flex-col items-start first-of-type:mt-20 mt-20'}>

                    <div className={'flex flex-col justify-end relative'}>
                    <h3 className={'text-3xl font-bold cursor-default'}>{experiences.title}</h3>
                    <span className={'text-sm text-neutral-500'}>{experiences.date}</span>
                    {experiences.logo && <Image src={experiences.logo} className={'absolute -right-20'} alt={experiences.title} width={65} height={65}/>}
                    </div>

                <p className={'mt-2 text-sm'}>{experiences.description}</p>
                <div className={'flex flex-wrap items-center gap-x-1.5 mt-4'}>
                    <span className={'text-lg font-semibold'}>Technologies:</span>
                    {experiences.tools.map((tech,index)=><span className={'text-sm'} key={index}>{`${index != 0 ? ',' : ''}${tech}`}</span>)}
                </div>
                <div className={'flex gap-3 items-center mt-4'}>
                    {experiences.website && <a className={'px-3.5 py-2 bg-black text-white hover:text-black hover:bg-transparent border transition-all'} href={experiences.website}>Website</a>}
                    {experiences.github && <a className={'px-3.5 py-2 bg-black text-white hover:text-black hover:bg-transparent border transition-all'} href={experiences.github}>Code</a>}
                </div>
            </div>)}
        </Section>
    )
}

export default Experience