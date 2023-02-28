export interface InfoInterface {
    experiences: ExperiencesInterface[]
    skills: string[]
    familiar: string[]
}

export interface ExperiencesInterface {
    title: string,
    description: string
    tools: string[]
    date: string
    logo: string | null
    website: string | null
    github: string | null
}