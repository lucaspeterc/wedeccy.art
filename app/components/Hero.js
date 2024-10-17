'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const wandaImages = [
  '/images/wanda/work/wwork1.png',
  '/images/wanda/work/wwork2.png',
  '/images/wanda/work/wwork3.png',
  '/images/wanda/work/wwork4.png',
  '/images/wanda/work/wwork5.png',
  '/images/wanda/work/wwork6.png',
]

const stanImages = [
  '/images/stan/work/swork1.png',
  '/images/stan/work/swork2.png',
  '/images/stan/work/swork3.png',
  '/images/stan/work/swork4.png',
  '/images/stan/work/swork5.png',
  '/images/stan/work/swork6.png',
  '/images/stan/work/swork7.png',
  '/images/stan/work/swork8.png',
  '/images/stan/work/swork9.png',
  '/images/stan/work/swork10.png',
]

export default function Hero() {
  const { artist } = useParams();  // Extract the 'artist' parameter from the dynamic route
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Dynamically set images based on the chosen artist
  const images = artist === 'wanda' ? wandaImages : stanImages

  // Dynamically set the header text based on the chosen artist
  const headerText = artist === 'wanda' 
    ? "Explore Wanda's Artistic World"
    : "Discover Stan's Creative Journey"

  // Effect to rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    },5000)
    
    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [images.length])

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl text-center font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
            {headerText}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-White">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <img
            alt={`${artist}'s work`}
            src={images[currentImageIndex]}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
    </div>
  )
}
