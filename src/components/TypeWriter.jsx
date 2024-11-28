"use client"

import { cn } from "../utils/U_boxes"
import { motion, stagger, useAnimate } from "framer-motion"
import { useEffect } from "react"

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5
  }) => {
    const [scope, animate] = useAnimate()
    let wordsArray = words.split(" ")
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none"
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2)
        }
      )
    }, [scope.current])
  
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {

            return (
                idx>2?
                <motion.span
                    key={word + idx}
                    className="dark:text-orange-400 text-black opacity-0 xl:text-xl 2xl:text-2xl"
                    style={{
                    filter: filter ? "blur(10px)" : "none"
                    }}
                >
                 {idx==3?<p className="break-words"></p>:''}{word}{" "}
                </motion.span>:
                <motion.span
                    key={word + idx}
                    className="dark:text-white text-black opacity-0 xl:text-md text-3xl 2xl:text-5xl"
                    style={{
                        filter: filter ? "blur(10px)" : "none"
                    }}
                    >
                    {word}{" "}
                </motion.span>
            )
          })}
        </motion.div>
      )
    }
  
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className=" dark:text-white text-black text-2xl xl:text-4xl 2xl:text-5xl leading-snug tracking-wide mb-5">
            {renderWords()}
          </div>
        </div>
      </div>
    )
  }
  