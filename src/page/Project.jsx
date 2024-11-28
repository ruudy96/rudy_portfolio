import React from 'react';
import { CardBody, CardContainer, CardItem  } from '../components/Card3d';
import { PiFileCodeDuotone } from "react-icons/pi";
import { motion } from 'framer-motion';

const Project = () => {

    return(
        <div id="project" className="project mt-3" name="project">
            <div className="container mx-auto mt-2 md:mt-28 p-2 md:pt-10">
                <div className="px-2 md:px-4 md:gap-2 lg:gap-2 font-inter grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-4 2xl:grid-cols-4 2xl:gap-4">
                    
                    <div className='row-span-2 md:row-start-1 md:col-start-1 lg:row-start-1 lg:col-start-1 xl:row-start-1 xl:col-start-1 2xl:row-start-1 2xl:col-start-1'>
                        <motion.div
                            variants={{
                                animate:{opacity: 1},
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
                            viewport={{once:false, amount:0.7}}
                            initial={{ opacity: 0}}
                        >
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-ungu3 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        EMIRA
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300" >
                                        Monitoring application for APN data, VPABX, MICS, GBR, SBC.
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4 md:py-18 lg:py-[57px] xl:py-[70px] xl:px-4 2xl:px-0 2xl:py-[63px]">

                                        <div className="grid grid-cols-1 gap-2 ">    
                                            <div className="h-15 bg-primary w-80 aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative md:mb-6">
                                                <div className="w-full h-full bg-[url('./assets/image/5.png')] bg-cover bg-center">
                                                </div>
                                            </div>

                                            <div className="h-15 bg-primary w-80 aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                                <div className="w-full h-full bg-[url('./assets/image/4.png')] bg-cover bg-center">
                                                </div>
                                            </div>
                                        </div>

                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    </div>
                    <div className='self-center row-start-1 col-start-1 md:row-start-1 md:col-start-2 lg:row-start-1 lg:col-start-2 xl:row-start-1 xl:col-start-2 2xl:row-start-1 2xl:col-start-2'>
                      
                        <div className="text-center">
                            <motion.div
                                variants={{
                                    animate:{opacity: 1, scale: 1 },
                                    show: {
                                        y: 0,
                                        x: 0,
                                        opacity: 1,
                                        transition:{
                                            duration: 0.8,
                                            delay: 0.3,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }
                                    }
                                }}
                                whileInView={"show"}
                                viewport={{once:false, amount:0.7}}
                                initial={{ opacity: 0, scale: 1.1 }}
                            >
                            <button className="btn bg-transparent text-2xl text-orange-400 font-bold text-pretty min-h-0 xl:h-0">
                                <PiFileCodeDuotone className='text-orange-400 font-bold text-pretty'/> 
                                My Project
                            </button>
                            </motion.div>
                        </div>
                    </div>
                    <div className='md:row-start-4 md:col-start-1 lg:row-start-1 lg:col-start-3 xl:row-start-1 xl:col-start-3 2xl:row-start-1 2xl:col-start-3'>
                        <motion.div
                            variants={{
                                animate:{opacity: 1 },
                                show: {
                                    y: 0,
                                    x: 0,
                                    opacity: 1,
                                    transition:{
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }
                                }
                            }}
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                            initial={{ opacity: 0 }}
                            >
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-ungu3 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        TNQ
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-3" >
                                    Traffic Data Monitoring Application for Router and Region
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="h-15 bg-primary aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                                    <div className="w-full h-full bg-[url('./assets/image/2.png')] bg-cover bg-center">
                                                    </div>
                                                </div>
                                                <div className="h-15 bg-primary aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                                    <div className="w-full h-full bg-[url('./assets/image/7.jpg')] bg-cover bg-center">
                                                    </div>
                                                </div>
                                                <div className="h-15 bg-primary aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                                    <div className="w-full h-full bg-[url('./assets/image/8.png')] bg-cover bg-center">
                                                    </div>
                                                </div>
                                            </div>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    </div>
                    <div className='md:row-start-4 md:col-start-2 lg:row-start-2 lg:col-start-3 xl:row-start-2 xl:col-start-2 2xl:row-start-1 2xl:col-start-4'>
                        <motion.div
                            variants={{
                                animate:{opacity: 1 },
                                show: {
                                    y: 0,
                                    x: 0,
                                    opacity: 1,
                                    transition:{
                                        duration: 0.8,
                                        delay: 0.7,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }
                                }
                            }}
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                            initial={{ opacity: 0 }}
                            >
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-ungu3 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        APN 2
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mb-2 dark:text-neutral-300" >
                                        Application for Monitoring Data Traffic of PDP Active, Call Attempts, and Subscribers in Each Region
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full ">
                                        <div className="h-15 bg-primary aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                            <div className="w-full h-full bg-[url('./assets/image/3.png')] bg-cover bg-center">
                                            </div>
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    </div>
                    <div className=' md:row-start-5 md:col-start-1 lg:row-start-3 lg:col-start-1 xl:row-start-2 xl:col-start-3 2xl:row-start-2 2xl:col-start-2'>
                        <motion.div
                            variants={{
                                animate:{opacity: 1 },
                                show: {
                                    y: 0,
                                    x: 0,
                                    opacity: 1,
                                    transition:{
                                        duration: 0.8,
                                        delay: 0.7,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }
                                }
                            }}
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                            initial={{ opacity: 0 }}
                            >
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-ungu3 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        MICS Dashboard
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300" >
                                        Application for Monitoring Traffic Data Charging Success Rate, Duration, and Call Success Rate
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full xl:mt-2 2xl:mt-7">
                                        <div className="h-15 bg-primary aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                            <div className="w-full h-full bg-[url('./assets/image/1.png')] bg-cover bg-center">
                                            </div>
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    </div>
                    <div className=' md:row-start-5 md:col-start-2 lg:row-start-3 lg:col-start-3 xl:row-start-3 xl:col-start-2 2xl:row-start-2 2xl:col-start-3'>
                        <motion.div
                            variants={{
                                animate:{opacity: 1 },
                                show: {
                                    y: 0,
                                    x: 0,
                                    opacity: 1,
                                    transition:{
                                        duration: 0.8,
                                        delay: 0.8,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }
                                }
                            }}
                            whileInView={"show"}
                            viewport={{once:false, amount:0.7}}
                            initial={{ opacity: 0 }}
                            >
                            <CardContainer className="inter-var">
                                <CardBody className=" bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-ungu3 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                        IPBB
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 lg:mb-2 xl:mb-7 2xl:mb-7" >
                                        Application for Monitoring Internet Data in Each Region
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full ">
                                        <div className="h-15 bg-primary aspect-[6/3] rounded-lg md:aspect-[6/3] xl:aspect-[6/3] overflow-hidden group relative ">
                                            <div className="w-full h-full bg-[url('./assets/image/6.png')] bg-cover bg-center">
                                            </div>
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>

                        </motion.div>
                    </div>
                    <div className='self-center row-start-2 col-start-1 md:row-start-2 md:col-start-2 lg:row-start-2 lg:col-start-2 xl:row-start-3 xl:col-start-3 2xl:row-start-2 2xl:col-start-4'>
                        <motion.div
                                variants={{
                                    animate:{opacity: 1, scale: 1 },
                                    show: {
                                        y: 9,
                                        x: 0,
                                        opacity: 1,
                                        transition:{
                                            duration: 0.8,
                                            delay: 0.9,
                                            ease: [0, 0.71, 0.2, 1.01],
                                        }
                                    },
                                    exit:{ 
                                        y: 0,
                                        x: 0,
                                    }
                                }}
                                whileInView={"show"}
                                viewport={{once:false, amount:0.7}}
                                initial={{ opacity: 0, scale: 1.1 }}
                            >
                                <h2 className="h-15 mb-3 text-xl text-center text-white italic ">".. Keep Learning "</h2>
                            </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project;