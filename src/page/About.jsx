// src/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn  } from '../components/TextFade.Jsx';
import { RiJavascriptFill } from "react-icons/ri";
import { TbFileTypeCss } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


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
                            <motion.p 
                             variants={{
                                animate:{opacity: 1, scale:1},
                                show: {
                                    y: 0,
                                    x: 0,
                                    opacity: 1,
                                    transition:{
                                        duration: 0.8,
                                        delay: 0.3,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }
                                },
                                exit:{ 
                                    y: 0,
                                    x: 0,
                                }
                            }}
                            whileInView={"show"}
                            initial={{ opacity: 0}}
                            className='text-lg text-center mt-3 md:mt-8 px-20'>
                                " I am a Front End Developer with experience 
                                in designing and building responsive and interactive web applications.
                                 With an educational background in Information Systems and several years of experience. "
                            </motion.p>
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

                                <motion.div
                                     variants={{
                                        animate:{opacity: 1, scale:1},
                                        show: {
                                            y: 0,
                                            x: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: 0.8,
                                                delay: 0.3,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            }
                                        },
                                        exit:{ 
                                            y: 0,
                                            x: 0,
                                        }
                                    }}
                                    whileInView={"show"}
                                    initial={{ opacity: 0}}
                                    className="box grid-cols-1 text-center gap-2">
                                    <h1 className='text-4xl font-bold text-orange-400 mb-4 mt-10 text-center'>
                                        Tech Stack
                                    </h1>

                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2" onClick={() => { window.open("https://nodejs.org/en/about", "_blank")}}>
                                        <FaNodeJs className='text-green-300 text-3xl'/>
                                    </div>
                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2" onClick={() => { window.open("https://react.dev/", "_blank")}}>
                                        <IoLogoReact className='text-primary text-3xl'/>
                                    </div>
                                    
                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2" onClick={() => { window.open("https://tailwindcss.com/", "_blank")}}>
                                        <RiTailwindCssFill className='text-primary text-3xl'/>
                                    </div>

                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2" onClick={() => { window.open("https://www.mysql.com/", "_blank")}}>
                                        <SiMysql className='text-white text-3xl'/>
                                    </div>

                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2" onClick={() => { window.open("https://www.postgresql.org/", "_blank")}}>
                                        <BiLogoPostgresql className='text-primary text-3xl'/>
                                    </div>

                                    <div className="btn btn-lg bg-transparent hover:bg-transparent text-white rounded-full mr-2" onClick={() => { window.open("https://www.elastic.co/elasticsearch", "_blank")}}>
                                        <svg  viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" className="size-6">
                                            <path d="M255.96 134.393c0-21.521-13.373-40.117-33.223-47.43a75.239 75.239 0 0 0 1.253-13.791c0-39.909-32.386-72.295-72.295-72.295-23.193 0-44.923 11.074-58.505 30.088-6.686-5.224-14.835-7.94-23.402-7.94-21.104 0-38.446 17.133-38.446 38.446 0 4.597.836 9.194 2.298 13.373C13.582 81.739 0 100.962 0 122.274c0 21.522 13.373 40.327 33.431 47.64-.835 4.388-1.253 8.985-1.253 13.79 0 39.7 32.386 72.087 72.086 72.087 23.402 0 44.924-11.283 58.505-30.088 6.686 5.223 15.044 8.149 23.611 8.149 21.104 0 38.446-17.134 38.446-38.446 0-4.597-.836-9.194-2.298-13.373 19.64-7.104 33.431-26.327 33.431-47.64z" fill="#FFF"/>
                                            <path d="M100.085 110.364l57.043 26.119 57.669-50.565a64.312 64.312 0 0 0 1.253-12.746c0-35.52-28.834-64.355-64.355-64.355-21.313 0-41.162 10.447-53.072 27.998l-9.612 49.73 11.074 23.82z" fill="#F4BD19"/><path d="M40.953 170.75c-.835 4.179-1.253 8.567-1.253 12.955 0 35.52 29.043 64.564 64.564 64.564 21.522 0 41.372-10.656 53.49-28.208l9.403-49.729-12.746-24.238-57.251-26.118-56.207 50.774z" fill="#3CBEB1"/>
                                            <path d="M40.536 71.918l39.073 9.194 8.775-44.506c-5.432-4.179-11.91-6.268-18.805-6.268-16.925 0-30.924 13.79-30.924 30.924 0 3.552.627 7.313 1.88 10.656z" fill="#E9478C"/><path d="M37.192 81.32c-17.551 5.642-29.67 22.567-29.67 40.954 0 17.97 11.074 34.059 27.79 40.327l54.953-49.73-10.03-21.52-43.043-10.03z" fill="#2C458F"/>
                                            <path d="M167.784 219.852c5.432 4.18 11.91 6.478 18.596 6.478 16.925 0 30.924-13.79 30.924-30.924 0-3.761-.627-7.314-1.88-10.657l-39.073-9.193-8.567 44.296z" fill="#95C63D"/><path d="M175.724 165.317l43.043 10.03c17.551-5.85 29.67-22.566 29.67-40.954 0-17.97-11.074-33.849-27.79-40.326l-56.415 49.311 11.492 21.94z" fill="#176655"/>
                                        </svg>
                                    </div>
                                </motion.div>

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
                                            <div className="timeline-end md:mb-10">
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