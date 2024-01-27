"use client"

import { Heading } from "@medusajs/ui"
import Link from "next/link"

import Image from "next/image"
import cover1 from "../../../../../public/1.png"
import coverMobile1 from "../../../../../public/a.png"
import cover2 from "../../../../../public/2.png"
import coverMobile2 from "../../../../../public/b.png"
import cover3 from "../../../../../public/3.png"
import coverMobile3 from "../../../../../public/c.png"
import "./style.css"

import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react" // import from 'keen-slider/react.es' for to get an ES module

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className="h-[80vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center text-center gap-6 justify-center">
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide">
            <Link href="/store">
              <picture>
                <source media="(max-width: 768px)" srcSet={coverMobile1.src} />
                <Image
                  src={cover1} // Default image
                  alt="cover"
                  layout="fill"
                  objectFit="cover"
                />
              </picture>
            </Link>
          </div>
          <div className="keen-slider__slide">
            <Link href="/store">
              <picture>
                <source media="(max-width: 768px)" srcSet={coverMobile2.src} />
                <Image
                  src={cover2} // Default image
                  alt="cover"
                  layout="fill"
                  objectFit="cover"
                />
              </picture>
            </Link>
          </div>
          <div className="keen-slider__slide">
            <Link href="/store">
              <picture>
                <source media="(max-width: 768px)" srcSet={coverMobile3.src} />
                <Image
                  src={cover3} // Default image
                  alt="cover"
                />
              </picture>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-2">
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                // @ts-ignore
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
