/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../utils/U_boxes";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion"
// import Link from "next/link"
import { Link as ScrollLink } from "react-scroll";
import { useRef, useState } from "react"
import { Link } from "react-router";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
    </>
  )
}

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={cn("relative block md:hidden", className)}>
    {/* <div className={cn("relative block md:hidden sm:hidden", className)}> */}
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05
                  }
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >

                {/* <ScrollLink
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    key={item.title}
                    ClassName="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                    >
                    <p className="pointer">{item.icon}</p>
                </ScrollLink> */}

                <Link
                  href={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full flex items-center justify-center sm:bg-transparent"
        // className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center sm:bg-transparent"
      >
        <IconLayoutNavbarCollapse className="hidden" />
        {/* <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" /> */}
      </button>
    </div>
  )
}

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      onMouseMove={e => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto lg:mx[300px] 2lg:mx-[400px] xl:mx-[510px] 2xl:mx-[700px] hidden md:flex h-16 gap-4 items-end justify-center mt-11 rounded-3xl bg-ungu3 px-4 pb-3 sm:hidden ",
        className
      )}
    >
      {items.map(item => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}



function handleSubmit(name) {
  // console.log('first', name)

  if(name=='About'){
    document.getElementById("Nav_about").classList.add("text-orange-400")
    document.getElementById("Nav_about").classList.remove("text-white");

    document.getElementById("Nav_home").classList.remove("text-orange-400")
    document.getElementById("Nav_home").classList.add("text-white");

    document.getElementById("Nav_project").classList.remove("text-orange-400")
    document.getElementById("Nav_project").classList.add("text-white")

    document.getElementById("Nav_contact").classList.remove("text-orange-400")
    document.getElementById("Nav_contact").classList.add("text-white")
  }

  if(name=='Home'){
    document.getElementById("Nav_home").classList.add("text-orange-400")
    document.getElementById("Nav_home").classList.remove("text-white");

    document.getElementById("Nav_about").classList.remove("text-orange-400")
    document.getElementById("Nav_about").classList.add("text-white")

    document.getElementById("Nav_project").classList.remove("text-orange-400")
    document.getElementById("Nav_project").classList.add("text-white")

    document.getElementById("Nav_contact").classList.remove("text-orange-400")
    document.getElementById("Nav_contact").classList.add("text-white")

  }

  if(name=='Project'){

    document.getElementById("Nav_project").classList.add("text-orange-400")
    document.getElementById("Nav_project").classList.remove("text-white")

    document.getElementById("Nav_home").classList.remove("text-orange-400")
    document.getElementById("Nav_home").classList.add("text-white");

    document.getElementById("Nav_about").classList.remove("text-orange-400")
    document.getElementById("Nav_about").classList.add("text-white")

    document.getElementById("Nav_contact").classList.remove("text-orange-400")
    document.getElementById("Nav_contact").classList.add("text-white")

  }

  if(name=='Contact'){

    document.getElementById("Nav_contact").classList.add("text-orange-400")
    document.getElementById("Nav_contact").classList.remove("text-white")

    document.getElementById("Nav_home").classList.remove("text-orange-400")
    document.getElementById("Nav_home").classList.add("text-white");

    document.getElementById("Nav_about").classList.remove("text-orange-400")
    document.getElementById("Nav_about").classList.add("text-white")

    document.getElementById("Nav_project").classList.remove("text-orange-400")
    document.getElementById("Nav_project").classList.add("text-white")

  }

}

const handleSetActive = (to) => {

  if(to=='about'){
    document.getElementById("Nav_about").classList.add("text-orange-400")
    document.getElementById("Nav_about").classList.remove("text-white");

    document.getElementById("Nav_home").classList.remove("text-orange-400")
    document.getElementById("Nav_home").classList.add("text-white");

    document.getElementById("Nav_project").classList.remove("text-orange-400")
    document.getElementById("Nav_project").classList.add("text-white")

    document.getElementById("Nav_contact").classList.remove("text-orange-400")
    document.getElementById("Nav_contact").classList.add("text-white")
  }

  if(to=='home'){
    document.getElementById("Nav_home").classList.add("text-orange-400")
    document.getElementById("Nav_home").classList.remove("text-white");

    document.getElementById("Nav_about").classList.remove("text-orange-400")
    document.getElementById("Nav_about").classList.add("text-white")

    document.getElementById("Nav_project").classList.remove("text-orange-400")
    document.getElementById("Nav_project").classList.add("text-white")

    document.getElementById("Nav_contact").classList.remove("text-orange-400")
    document.getElementById("Nav_contact").classList.add("text-white")

  }

  if(to=='project'){

    document.getElementById("Nav_project").classList.add("text-orange-400")
    document.getElementById("Nav_project").classList.remove("text-white")

    document.getElementById("Nav_home").classList.remove("text-orange-400")
    document.getElementById("Nav_home").classList.add("text-white");

    document.getElementById("Nav_about").classList.remove("text-orange-400")
    document.getElementById("Nav_about").classList.add("text-white")

    document.getElementById("Nav_contact").classList.remove("text-orange-400")
    document.getElementById("Nav_contact").classList.add("text-white")

  }

  if(to=='contact'){

    document.getElementById("Nav_contact").classList.add("text-orange-400")
    document.getElementById("Nav_contact").classList.remove("text-white")

    document.getElementById("Nav_home").classList.remove("text-orange-400")
    document.getElementById("Nav_home").classList.add("text-white");

    document.getElementById("Nav_about").classList.remove("text-orange-400")
    document.getElementById("Nav_about").classList.add("text-white")

    document.getElementById("Nav_project").classList.remove("text-orange-400")
    document.getElementById("Nav_project").classList.add("text-white")

  }
};


function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null)

  let distance = useTransform(mouseX, val => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })

  const [hovered, setHovered] = useState(false)

  return (

    <ScrollLink 
    to={href} 
    spy={true}
    smooth={true}
    offset={-75}
    duration={500}
    activeClass='active'
    onClick={() => handleSubmit(title)}
    id={'SC'+title}
    onSetActive={handleSetActive}
    key={title}>
      <motion.div
        ref={ref}
        to={href} 
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white dark:bg-ungu6 flex items-center justify-center relative pointer" data-index={title}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              data-index={title}
              // className="px-2 py-0.5 whitespace-pre rounded-md  bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-ungu1 absolute left-1/2 -translate-x-1/2 top-20 w-fit text-xs"
              className="px-2 py-0.5 whitespace-pre rounded-md  bg-white border dark:bg-ungu6 dark:border-ungu6 dark:text-white border-gray-200 text-ungu1 absolute left-1/2 -translate-x-1/2 top-20 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
          data-index={title}
        >
          {icon}
        </motion.div>
      </motion.div>
    </ScrollLink>
  )
}
