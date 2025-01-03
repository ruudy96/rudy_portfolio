// src/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '../components/Input'
import { cn } from '../utils/U_boxes';
const Contact = () => {
      const handleSubmit = e => {
        e.preventDefault()
        console.log("Form submitted")
      }
    return (
        <div id="contact" className="contact mt-28" name="contact">

            <div className="container mx-auto mt-2 md:mt-40 p-2 md:pt-10 ">
                <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                       Contact Me
                    </h2>
                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Input id="firstname" placeholder="Name" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                          <Input id="email" placeholder="email" type="email" />
                        </LabelInputContainer>
                        {/* <LabelInputContainer className="mb-4">
                          <Input id="text" placeholder="subject" type="text" />
                        </LabelInputContainer> */}
                        <LabelInputContainer className="mb-4">
                          <Input id="message" placeholder="Message" type="text"/>
                        </LabelInputContainer>


                        <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                        >
                       Send
                        <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    
                    </form>
                </div>
            </div>
           
        </div>
      
    );
};

export default Contact;

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    )
  }
  
  const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    )
  }