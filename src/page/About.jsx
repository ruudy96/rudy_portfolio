// src/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../components/TextFade.Jsx';


import { RiJavascriptFill } from "react-icons/ri";
import { TbFileTypeCss } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";


const About = () => {
    const customStyle = {"--value": 95}
    const customStyle2 = {"--value": 90}
    const customStyle3 = {"--value": 90}
    const customStyle4 = {"--value": 90}
    const customStyle5 = {"--value": 80}
      
    return (
        <div id="about" className="about mt-3" name="about">
               <div className="container mx-auto  mt-2 md:mt-0 p-2 md:pt-1">

                    <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-10">
                        <div className='grid grid-cols-1 md:grid-cols-1'>
                            <p className='text-lg text-center mt-3 md:mt-8 px-20'>" I am a Front End Developer with experience 
                                in designing and building responsive and interactive web applications.
                                 With an educational background in Information Systems and several years of experience. "
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2'>

                            {/* skilll */}
                            <div className="mt-4">
                                <h1 className='text-4xl font-bold text-orange-400 mb-5 md:mb-5 text-center'>
                                    Skill
                                </h1>

                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>

                                    <motion.div 
                                    variants={fadeIn("down",0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once:false, amount:0.7}}
                                    className="card text-center items-center md:col-start-2 md:row-start-1">
                                        <div className="radial-progress text-green-400" style={customStyle} role="progressbar"><TiHtml5 className='text-4xl' /></div>
                                    </motion.div>


                                    <motion.div
                                    variants={fadeIn("right",0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once:false, amount:0.7}}
                                    className="card text-center items-center md:col-start-1 md:row-start-2">
                                        <div className="radial-progress text-primary" style={customStyle2} role="progressbar"><TbFileTypeCss className='text-4xl' /></div>
                                    </motion.div>

                                    <motion.div
                                    variants={fadeIn("up",0)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once:false, amount:0.1}}
                                    className="card text-center items-center md:col-start-2 md:row-start-2">
                                        <div className="radial-progress text-red-400" style={customStyle3} role="progressbar"><RiJavascriptFill className='text-4xl'/></div>
                                    </motion.div>

                                    
                                    <motion.div
                                    variants={fadeIn("left",0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once:false, amount:0.7}}
                                    className="card text-center items-center md:col-start-3 md:row-start-2">
                                        <div className="radial-progress text-purple-400" style={customStyle4} role="progressbar"><DiJqueryLogo className='text-4xl'/></div>
                                    </motion.div>


                                    <motion.div
                                    variants={fadeIn("up",0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once:false, amount:0.7}}
                                    className="card text-center items-center md:col-start-2 md:row-start-3">
                                        <div className="radial-progress text-orange-300" style={customStyle5} role="progressbar"><BiLogoTypescript className='text-4xl'/></div>
                                    </motion.div>


                                </div>

                                <div className="grid-cols-1 text-center gap-2">
                                    <h1 className='text-4xl font-bold text-orange-400 mb-4 text-center'>
                                        Framework used
                                    </h1>

                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2">
                                        <FaNodeJs className='text-green-300 text-3xl'/>
                                    </div>
                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2">
                                        <IoLogoReact className='text-primary text-3xl'/>
                                    </div>
                                    
                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2">
                                        <RiTailwindCssFill className='text-primary text-3xl'/>
                                    </div>
                                        
                                </div>

                            </div>

                            {/* pengalman */}
                            <div className="mt-4">
                                <h1 className='text-4xl font-bold text-orange-400 mb-10 sm:mb-5 md:mb-10 text-center lg:mb-5 xl:mb-10'>Work Experience</h1>
                                <motion.div
                                    variants={fadeIn("down",0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{once:false, amount:0.7}}
                                >
                                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                        <li>
                                            <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5">
                                                <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                            </svg>
                                            </div>
                                            <div className="timeline-start mb-10 md:text-end">
                                            <time className="font-mono italic">2019 - 2024</time>
                                            <div className="text-lg font-black">Front End Developer</div>
                                            Building the UI/UX design of websites or applications, 
                                            maintaining the systems of websites or applications that have already been developed.
                                            </div>
                                            <hr className='bg-ungu10' />
                                        </li>
                                        <li>
                                            <hr className='bg-ungu10'/>
                                            <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5">
                                                <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                            </svg>
                                            </div>
                                            <div className="timeline-end mb-10">
                                            <time className="font-mono italic">2016-2017</time>
                                            <div className="text-lg font-black">Assisten IT - LP3I BC Purwokerto</div>
                                            Hardware and software maintenance, designing brochures and banners.
                                            </div>
                                            <hr className='bg-ungu10'/>
                                        </li>
                                        <li>
                                            <hr className='bg-ungu10'/>
                                            <div className="timeline-middle">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5">
                                                <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                            </svg>
                                            </div>
                                            <div className="timeline-start mb-10 md:text-end">
                                            <time className="font-mono italic">2016</time>
                                            <div className="text-lg font-black">Content Writer -  CV Java Multi Mandiri</div>
                                            Writing content about products on the website.
                                            </div>
                                            <hr className='bg-ungu10'/>
                                        </li>
                                        
                                    </ul>
                                </motion.div>
                            </div>

                        </div>

                       
                    </div> 
               </div>
        </div>

       
    );
};

export default About;