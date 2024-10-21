'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';


const wandaImages = [
  '/images/wanda/work/wwork1.png',  // Nostalgia
  '/images/wanda/work/wwork2.png',  // Martwa natura z jabłkami
  '/images/wanda/work/wwork3.png',  // Martwa Natura - Water Melon
  '/images/wanda/work/wwork6.png',  // Pejzaż
  '/images/wanda/work/wwork17.png', // Martwa natura - Requiem
  '/images/wanda/work/wwork19.png', // Martwa natura - Symphonia
  '/images/wanda/work/wwork4.png',  // Red Tulip
  '/images/wanda/work/wwork9.png',  // Romanca
  '/images/wanda/work/wwork20.png', // Espresivo
  '/images/wanda/work/wwork16.png', // Concerto Grosso
  '/images/wanda/work/wwork15.png', // Paradisum
  '/images/wanda/work/wwork21.png', // Capricio
  '/images/wanda/work/wwork23.png', // Oratorium
  '/images/wanda/work/wwork22.png', // Etiuda
  '/images/wanda/work/wwork18.png', // Helga
  '/images/wanda/work/wwork5.png',  // Image 5
  '/images/wanda/work/wwork7.png',  // Image 7
  '/images/wanda/work/wwork8.png',  // Image 8
  '/images/wanda/work/wwork10.png', // Image 10
  '/images/wanda/work/wwork11.png', // Image 11
  '/images/wanda/work/wwork12.png', // Image 12
  '/images/wanda/work/wwork13.png', // Image 13
  '/images/wanda/work/wwork14.png', // Image 14
]

const stanImages = [
  '/images/stan/work/swork8.png',   // Men in red
  '/images/stan/work/swork21.png',  // Phantasmagoria
  '/images/stan/work/swork22.png',  // Aqua misterium
  '/images/stan/work/swork11.png',  // Fantasy
  '/images/stan/work/swork14.png',  // Mistic
  '/images/stan/work/swork3.png',   // Podwodny świat
  '/images/stan/work/swork2.png',   // Black birds
  '/images/stan/work/swork23.png',  // Exodus
  '/images/stan/work/swork19.png',  // Callis on the Fields
  '/images/stan/work/swork18.png',  // Picnic in N.Y.
  '/images/stan/work/swork13.png',  // Destiny
  '/images/stan/work/swork1.png',   // Tricinum
  '/images/stan/work/swork16.png',  // Rhapsody
  '/images/stan/work/swork10.png',  // Esperanza
  '/images/stan/work/swork9.png',   // Water plants
  '/images/stan/work/swork6.png',   // Time stopped
  '/images/stan/work/swork15.png',  // Little Angel
  '/images/stan/work/swork5.png',   // Fandom
  '/images/stan/work/swork4.png',   // Maestro
  '/images/stan/work/swork12.png',  // Afternoon
  '/images/stan/work/swork7.png',   // Green Silence
  '/images/stan/work/swork17.png',  // Image 17
  '/images/stan/work/swork20.png',  // Image 20
]

export default function Hero({ artist, locale }) {
  const { t } = useTranslation('hero', { locale });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Dynamically set images based on the chosen artist
  const images = artist === 'wanda' ? wandaImages : stanImages;

  // Dynamically set the header text based on the chosen artist
  const headerText = artist === 'wanda' 
    ? t('hero1')  // Translation key for Wanda
    : t('hero2'); // Translation key for Stan

  // Effect to rotate images every 5 seconds with fade-out and fade-in
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Trigger fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);  // Trigger fade-in
      }, 500);  // Wait for fade-out before changing the image
    }, 5000); // Time between changes

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl text-center font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
            {headerText}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-white">
              {/* Adjust the text here */}
              {artist === 'wanda' 
                ? t('descriptionWanda') 
                : t('descriptionStan')}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
            <a
                href="/presentation.pdf"  // This links to the PDF in the public folder
                className="rounded-sm bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                target="_blank" // This opens the PDF in a new tab
                rel="noopener noreferrer"
              >
                {t('getStarted')}
              </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                {t('learnMore')} <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <img
            alt={`${artist}'s work`}
            src={images[currentImageIndex]}
            className={`mt-10 w-full max-w-lg rounded-2xl object-cover transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36`}
          />
        </div>
      </div>
    </div>
  );
}