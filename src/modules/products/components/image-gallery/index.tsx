"use client"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react" // import from 'keen-slider/react.es' for to get an ES module

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
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
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <Container className="aspect-square w-full overflow-hidden relative bg-ui-bg-subtle">
          <div className="absolute inset-0 flex flex-col items-center">
            <div ref={ref} className="keen-slider">
              {images.map((image, index) => {
                return (
                  <div className="keen-slider__slide" key={image.id}>
                    <Image
                      src={image.url} // Default image
                      priority={true}
                      className="rounded-rounded"
                      alt={`Product image ${index + 1}`}
                      width={800}
                      height={800}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ImageGallery
