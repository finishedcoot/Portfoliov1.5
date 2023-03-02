import React, {ChangeEventHandler, FormEventHandler, useEffect, useState} from "react";
import Section from "@/components/Section";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Contact: React.FC = () => {
    const {ref, inView} = useInView({
        threshold: 0.2,
    })
    const formAnim = useAnimation()
    const boxVariant = {
        visible: {left: '100%', transition: {ease: [0.43, 0.13, 0.23, 0.96], duration: 1.5, delay: 0.3}},
    };

    const inputVariant = {
        visible: {width: 'auto', transition: {ease: [0.43, 0.13, 0.23, 0.96], duration: 0.8, delay: 0.3}},
    }
    const fadeVariants = {
        visible: {opacity: '100%', transition: {ease: [0.43, 0.13, 0.23, 0.96], duration: 1, delay: 1.3}},
        messageVisible: {opacity: '100%', transition: {ease: [0.43, 0.13, 0.23, 0.96], duration: 1, delay: 0.3}},
    }

    const [submitStatus, setSubmitStatus] = useState("")
    const [submitMessage, setSubmitMessage] = useState("")
    const [formDataState, setFormDataState] = useState({
        name   : "",
        email  : "",
        message: "",
    })


    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
        const name = e.target.name
        const value = e.target.value
        setFormDataState(prev => ({...prev, [name]: value}))
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        //Validating Name
        setSubmitMessage("Sending...")
        if (formDataState.name.length < 1) {
            setSubmitMessage("Please Enter Your name")
            setSubmitStatus("fail")
            return
        }

        //Validating Email
        if (
            String(formDataState.email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) === null
        ) {
            setSubmitMessage("Please Enter Your Mail")
            setSubmitStatus("fail")
            return
        }

        if (formDataState.message.length < 2) {
            setSubmitMessage("Please Enter Your Message")
            setSubmitStatus("fail")
            return
        }
        const formData = new FormData()
        formData.append("name", formDataState.name)
        formData.append("email", formDataState.email)
        formData.append("message", formDataState.message)

        fetch("  https://getform.io/f/7b21e2af-6011-4a39-bbba-297494472947", {
            method: "POST",
            body  : formData,
        })
            .then(response => {
                console.log(response)
                setFormDataState({
                    name   : "",
                    email  : "",
                    message: "",
                })
                setSubmitStatus("success")
                setSubmitMessage("Thank You")
            })
            .catch(error => {
                setSubmitStatus("fail")
                setSubmitMessage("Please Try Later")
                console.log(error)
            })
    }

    useEffect(() => {
        if (inView) {
            formAnim.start('visible')
            formAnim.start('messageVisible')
        }
    }, [inView])


    return (
        <Section title={'CONTACT'} parentClassName={'mt-24'}>
            <motion.form exit={{opacity: 0}}
                         className={'flex flex-col justify-start md:max-w-[50%] mt-20'}
                         transition={{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}}
                         id="contact-section"
                         onSubmit={handleSubmit} method="post" ref={ref}>
                <label htmlFor="name" className={'relative text-2xl font-semibold mb-3'}>
                    <motion.span
                        className="absolute inset-0 bg-white"
                        initial={{
                            left: 0
                        }}
                        animate={formAnim}
                        variants={boxVariant}
                    />
                    Name
                </label>
                <motion.input
                    autoComplete={"false"}
                    className="outline-none border-b border-black pt-0 mb-10"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    initial={{
                        width: 0
                    }}
                    animate={formAnim}
                    variants={inputVariant}
                />

                <label htmlFor="email" className={'relative text-2xl font-semibold mb-3'}>
                    <motion.span
                        className="absolute inset-0 bg-white"
                        initial={{
                            left: 0
                        }}
                        animate={formAnim}
                        variants={boxVariant}
                    />
                    Email
                </label>
                <motion.input
                    initial={{
                        width: 0
                    }}
                    animate={formAnim}
                    variants={inputVariant}
                    autoComplete={"false"}
                    className="outline-none border-b border-black pt-0 mb-10"
                    name="email"
                    type="text"
                    onChange={handleChange}
                />

                <label htmlFor="message" className={'relative text-2xl font-semibold mb-3'}>
                    <motion.span
                        className="absolute inset-0 bg-white"
                        initial={{
                            left: 0
                        }}
                        animate={formAnim}
                        variants={boxVariant}
                    />
                    Message
                </label>
                <motion.textarea
                    initial={{
                        opacity: 0
                    }}
                    animate={formAnim}
                    variants={fadeVariants}
                    className="outline-none border border-black p-2 mb-10 w-full h-60"
                    name="message"
                    onChange={handleChange}
                />
                <motion.button   initial={{
                    opacity: 0
                }}
                          animate={formAnim}
                          variants={fadeVariants} className="text-black border border-black hover:text-white hover:bg-black transition-all" type="submit" value={"submit"}>
                    Submit
                    {submitMessage.length > 1 && (
                        <div className={`submitMessage ${submitStatus}`}>
                            <h3>{submitMessage && submitMessage}</h3>
                        </div>
                    )}
                </motion.button>
            </motion.form>
        </Section>
    )
}

export default Contact