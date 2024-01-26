import { Heading } from "@medusajs/ui"
import Link from "next/link"

import Image from "next/image"
import cover from "../../../../../public/1.png"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center text-center small:p-12 gap-6 justify-center">
        {/* <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-normal uppercase"
          >
            Welcome to
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            mimiblooms
          </Heading>
        </span> */}
        <Link href="/store">
          <Image src={cover} alt="cover" layout="fill" objectFit="cover" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
