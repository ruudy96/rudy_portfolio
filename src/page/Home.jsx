import React from 'react';
import gambar from '../assets/image/State2.png'
import { TextGenerateEffect  } from '../components/TypeWriter';
import { Vortex } from '../components/Vortex';
import { ButtonsCard } from '../components/tailwindButton';
import cv from "../assets/CV.pdf"

const Home = () => {

    const word = "Hi..,I'm Rudy Setyawan A Front End Developer"
    const buttons = [
        {
            name: "Border Magic",
            description: "Border Magic button for your website",
            showDot: false,
            component: (
              <a href={cv} target='_blank' className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Download CV
                </span>
              </a>
            )
        },
    ]


    return (
        <div id="home" className="home mt-14 md:mt-0 lg:mt-0 xl:mt-1 2xl:mt-1" name="home">
            <div className="container mx-auto">
                <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[50rem] overflow-hidden">
                    <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-[650px] md:h-full">
                        
                    <div className=" md:mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="w-full self-center px-2 md:pl-14 lg:pl-12 xl:pl-28 2xl:pl-40">
                            <TextGenerateEffect duration={2} filter={false} words={word} />
                            {buttons.map((button,idx) => (
                                <ButtonsCard key={idx}>
                                    { button.component }
                                </ButtonsCard>
                            ))}
                        </div>

                        <div className="w-full self-end px-2">
                            <div className="relative ">
                                <img  src={gambar} alt="" className="object-cover aspect-[6/6] rounded-full border-[10px] border-ungu6"/>
                            </div>
                        </div> 

                    </div>

                    </Vortex>
                </div>
            </div>
        </div>

    );
};

export default Home;