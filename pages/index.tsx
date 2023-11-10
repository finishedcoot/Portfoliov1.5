import Head from 'next/head'
import {GetStaticProps, NextPage} from "next";
import data from "@/data/info.json"
import {InfoInterface} from "@/types/InfoTypes";
import {Poppins} from 'next/font/google'
import Flower from "@/components/Flower";
import {motion} from 'framer-motion'
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"), {
    ssr:true
});
const Skills = dynamic(() => import("@/components/Skills"), {
    ssr:true
});
const AllExperiences = dynamic(() => import("@/components/AllExperiences"), {
    ssr:true
});
const Contact = dynamic(() => import("@/components/Contact"), {
    ssr:false
});

const Font = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800']})

const Home: NextPage<{ data: InfoInterface }> = ({data}) => {
    return (
        <>
            <Head>
                <title>Ardeshir Laghai Portfolio</title>
                <meta name="description" content="Ardeshir Laghai Portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>
            <main className={`relative w-full overflow-hidden  ${Font.className}`}>
                <div className={'container mx-auto  grid grid-cols-12 mb-10'}>
                    <div className={'xl:col-start-6 md:col-start-4 col-start-1 px-4 md:px-0 col-end-12 flex flex-col'}>
                        <section className={'h-screen flex flex-col items-start justify-center'}>
                            <div className={'relative'}>
                                <h1 className={'text-8xl font-semibold'}>Hello</h1>
                                <h2 className={'text-7xl font-semibold'}>I&apos;m Ardeshir</h2>
                                <motion.span
                                    initial={{
                                        top: 0
                                    }}
                                    whileInView={{
                                        top: '100%'
                                    }}
                                    transition={{ ease: [0.46, 0.32, 0.55, 0.77], duration: 2}}
                                    viewport={{ once: true }}
                                    className={'absolute inset-0 bg-white'}/>
                            </div>

                        </section>
                        <About/>
                        <Skills skills={data.skills} familiar={data.familiar}/>
                        <AllExperiences experiences={data.experiences}/>
                        <Contact/>
                    </div>
                </div>
               <Flower/>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = () => {

    return {
        props: {
            data
        }
    }
}

export default Home