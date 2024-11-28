import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as ScrollLink } from "react-scroll";

import { AiOutlineHome } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { GoFileCode } from "react-icons/go";
import { FaListAlt } from "react-icons/fa";

// import {
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2
// } from "@tabler/icons-react"

import { FloatingDock } from './NavbarFrame';

export default function Navigation() {

  const handleSetActive = (to) => {

    console.log('to', to)

    if(to=='about'){
      document.getElementById("Mb_about").classList.add("text-orange-400")
      document.getElementById("Mb_about").classList.remove("text-white");
  
      document.getElementById("Mb_home").classList.remove("text-orange-400")
      document.getElementById("Mb_home").classList.add("text-white");
  
      document.getElementById("Mb_project").classList.remove("text-orange-400")
      document.getElementById("Mb_project").classList.add("text-white")
  
      document.getElementById("Mb_contact").classList.remove("text-orange-400")
      document.getElementById("Mb_contact").classList.add("text-white")
    }
  
    if(to=='home'){
      document.getElementById("Mb_home").classList.add("text-orange-400")
      document.getElementById("Mb_home").classList.remove("text-white");
  
      document.getElementById("Mb_about").classList.remove("text-orange-400")
      document.getElementById("Mb_about").classList.add("text-white")
  
      document.getElementById("Mb_project").classList.remove("text-orange-400")
      document.getElementById("Mb_project").classList.add("text-white")
  
      document.getElementById("Mb_contact").classList.remove("text-orange-400")
      document.getElementById("Mb_contact").classList.add("text-white")
  
    }
  
    if(to=='project'){
  
      document.getElementById("Mb_project").classList.add("text-orange-400")
      document.getElementById("Mb_project").classList.remove("text-white")
  
      document.getElementById("Mb_home").classList.remove("text-orange-400")
      document.getElementById("Mb_home").classList.add("text-white");
  
      document.getElementById("Mb_about").classList.remove("text-orange-400")
      document.getElementById("Mb_about").classList.add("text-white")
  
      document.getElementById("Mb_contact").classList.remove("text-orange-400")
      document.getElementById("Mb_contact").classList.add("text-white")
  
    }
  
    if(to=='contact'){
  
      document.getElementById("Mb_contact").classList.add("text-orange-400")
      document.getElementById("Mb_contact").classList.remove("text-white")
  
      document.getElementById("Mb_home").classList.remove("text-orange-400")
      document.getElementById("Mb_home").classList.add("text-white");
  
      document.getElementById("Mb_about").classList.remove("text-orange-400")
      document.getElementById("Mb_about").classList.add("text-white")
  
      document.getElementById("Mb_project").classList.remove("text-orange-400")
      document.getElementById("Mb_project").classList.add("text-white")
  
    }
  }

  const links = [
    {
      title: "Home",
      icon: (
        <AiOutlineHome data-index="home" className="h-full w-full text-white " id="Nav_home" />
      ),
      href: "home"
    },

    {
      title: "About",
      icon: (
        <FaListAlt data-index="about" className="h-full w-full text-white" id="Nav_about"/>
      ),
      href: "about"
    },
    {
      title: "Project",
      icon: (
        <GoFileCode data-index="project" className="h-full w-full text-white" id="Nav_project"/>
      ),
      href: "project"
    },
    {
      title: "Contact",
      icon: (
        <RiUserFollowLine data-index="contact" className="h-full w-full text-white" id="Nav_contact"/>
      ),
      href: "contact"
    }
  ]

  return (
    // <Disclosure as="nav" className="with-blur-backdrop fixed top-0 left-0 z-10 ">
    <Disclosure as="nav" className="with-blur-backdrop fixed top-0 left-0 z-10 w-full md:-top-3 md:mx-72 md:w-[300px] lg:mx-[350px] lg:w-[300px] 2lg:mx-0 2lg:w-full xl:mx-0 xl:w-full 2xl:mx-0 2xl:w-full  ">
      <div className="sm:mx-auto sm:max-w-7xl px-2 sm:px-6 lg:px-8 md:hidden 2lg:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex shrink-0 items-center">
                <img alt="Your Company" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto"/>
            </div> */}

            {/* <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                    <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    >
                    <p className="pointer">Home</p>
                    </ScrollLink>

                    <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    >
                    <p className="pointer">About</p>
                    </ScrollLink>


                    <ScrollLink
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    >
                    <p className="pointer">Project</p>
                    </ScrollLink>


                    <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    >
                    <p className="pointer">Contact</p>

                    </ScrollLink>


                </div>
            </div> */}
          </div>
        
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 text-center">

                <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                onSetActive={handleSetActive}
                >
                <p className="pointer flex justify-center" id="Mb_home"><AiOutlineHome className=" text-white mt-1 mr-2" />Home</p>
                </ScrollLink>


                <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                onSetActive={handleSetActive}
                >
                <p className="pointer flex justify-center" id="Mb_about"><FaListAlt  className=" text-white mt-1 mr-2" />About</p>
                </ScrollLink>


                <ScrollLink
                to="project"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                onSetActive={handleSetActive}
                >
                <p className="pointer flex justify-center" id="Mb_project"><GoFileCode  className=" text-white mt-1 mr-2" />Project</p>
                </ScrollLink>

                <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                onSetActive={handleSetActive}
                >
                <p className="pointer flex justify-center" id="Mb_contact"><RiUserFollowLine  className=" text-white mt-1 mr-2" />Contact</p>

                </ScrollLink>

          
        </div>
      </DisclosurePanel>

      <FloatingDock desktopClassName="" items={links} className="sm:hidden"/>

      
    </Disclosure>
  )
}
