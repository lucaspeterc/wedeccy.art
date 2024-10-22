'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import swork1 from "/public/images/stan/work/swork1.png";
import swork2 from "/public/images/stan/work/swork2.png";
import swork3 from "/public/images/stan/work/swork3.png";
import swork4 from "/public/images/stan/work/swork4.png";
import swork5 from "/public/images/stan/work/swork5.png";
import swork6 from "/public/images/stan/work/swork6.png";
import swork7 from "/public/images/stan/work/swork7.png";
import swork8 from "/public/images/stan/work/swork8.png";
import swork9 from "/public/images/stan/work/swork9.png";
import swork10 from "/public/images/stan/work/swork10.png";
import swork11 from "/public/images/stan/work/swork11.png";
import swork12 from "/public/images/stan/work/swork12.png";
import swork13 from "/public/images/stan/work/swork13.png";
import swork14 from "/public/images/stan/work/swork14.png";
import swork15 from "/public/images/stan/work/swork15.png";
import swork16 from "/public/images/stan/work/swork16.png";
import swork18 from "/public/images/stan/work/swork18.png";
import swork19 from "/public/images/stan/work/swork19.png";
import swork20 from "/public/images/stan/work/swork20.png";
import swork21 from "/public/images/stan/work/swork21.png";
import swork22 from "/public/images/stan/work/swork22.png";
import swork23 from "/public/images/stan/work/swork23.png";
import wwork1 from "/public/images/wanda/work/wwork1.png";
import wwork2 from "/public/images/wanda/work/wwork2.png";
import wwork3 from "/public/images/wanda/work/wwork3.png";
import wwork4 from "/public/images/wanda/work/wwork4.png";
import wwork5 from "/public/images/wanda/work/wwork5.png";
import wwork6 from "/public/images/wanda/work/wwork6.png";
import wwork7 from "/public/images/wanda/work/wwork7.png";
import wwork8 from "/public/images/wanda/work/wwork8.png";
import wwork9 from "/public/images/wanda/work/wwork9.png";
import wwork10 from "/public/images/wanda/work/wwork10.png";
import wwork11 from "/public/images/wanda/work/wwork11.png";
import wwork12 from "/public/images/wanda/work/wwork12.png";
import wwork13 from "/public/images/wanda/work/wwork13.png";
import wwork14 from "/public/images/wanda/work/wwork14.png";
import wwork15 from "/public/images/wanda/work/wwork15.png";
import wwork16 from "/public/images/wanda/work/wwork16.png";
import wwork17 from "/public/images/wanda/work/wwork17.png";
import wwork18 from "/public/images/wanda/work/wwork18.png";
import wwork19 from "/public/images/wanda/work/wwork19.png";
import wwork20 from "/public/images/wanda/work/wwork20.png";
import wwork21 from "/public/images/wanda/work/wwork21.png";
import wwork22 from "/public/images/wanda/work/wwork22.png";
import wwork23 from "/public/images/wanda/work/wwork23.png";


const worksForArtist = (artist) => {
  const works = {
    stan: [
      { id: 1, name: 'Men in red', href: '#', imageSrc: swork8, imageAlt: "Men in red", width: 600, height: 800 },
      { id: 2, name: 'Phantasmagoria', href: '#', imageSrc: swork21, imageAlt: "Phantasmagoria", width: 600, height: 800 },
      { id: 3, name: 'Aqua misterium', href: '#', imageSrc: swork22, imageAlt: "Aqua misterium", width: 600, height: 800 },
      { id: 4, name: 'Fantasy', href: '#', imageSrc: swork11, imageAlt: "Fantasy", width: 600, height: 800 },
      { id: 5, name: 'Mistic', href: '#', imageSrc: swork14, imageAlt: "Mistic", width: 600, height: 800 },
      { id: 6, name: 'Podwodny świat', href: '#', imageSrc: swork3, imageAlt: "Podwodny świat", width: 600, height: 800 },
      { id: 7, name: 'Black birds', href: '#', imageSrc: swork2, imageAlt: "Black birds", width: 600, height: 800 },
      { id: 8, name: 'Exodus', href: '#', imageSrc: swork23, imageAlt: "Exodus", width: 600, height: 800 },
      { id: 9, name: 'Callis on the Fields', href: '#', imageSrc: swork19, imageAlt: "Callis on the Fields", width: 600, height: 800 },
      { id: 10, name: 'Picnic in N.Y.', href: '#', imageSrc: swork18, imageAlt: "Picnic in N.Y.", width: 600, height: 800 },
      // { id: 11, name: 'Destiny', href: '#', imageSrc: swork13, imageAlt: "Destiny", width: 600, height: 800 },
      { id: 12, name: 'Tricinum', href: '#', imageSrc: swork1, imageAlt: "Tricinum", width: 600, height: 800 },
      { id: 13, name: 'Rhapsody', href: '#', imageSrc: swork16, imageAlt: "Rhapsody", width: 600, height: 800 },
      { id: 14, name: 'Esperanza', href: '#', imageSrc: swork10, imageAlt: "Esperanza", width: 600, height: 800 },
      { id: 15, name: 'Water plants', href: '#', imageSrc: swork9, imageAlt: "Water plants", width: 600, height: 800 },
      { id: 16, name: 'Time stopped', href: '#', imageSrc: swork6, imageAlt: "Time Stopped", width: 600, height: 800 },
      // { id: 17, name: 'Little Angel', href: '#', imageSrc: swork15, imageAlt: "Little Angel", width: 300, height: 400 },
      { id: 18, name: 'Fandom', href: '#', imageSrc: swork5, imageAlt: "Fandom", width: 600, height: 800 },
      { id: 19, name: 'Maestro', href: '#', imageSrc: swork4, imageAlt: "Maestro", width: 600, height: 800 },
      { id: 20, name: 'Afternoon', href: '#', imageSrc: swork12, imageAlt: "Afternoon", width: 600, height: 800 },
      { id: 21, name: 'Grenn Silence', href: '#', imageSrc: swork7, imageAlt: "Green Silence", width: 600, height: 800 },
      { id: 23, name: 'Helga', href: '#', imageSrc: swork20, imageAlt: "Artwork 20", width: 600, height: 800 },
    ],
    wanda: [
      { id: 1, name: 'Nostalgia', href: '#', imageSrc: wwork1, imageAlt: "Nostalgia", width: 600, height: 800 },
      { id: 2, name: 'Martwa natura z jabłkami', href: '#', imageSrc: wwork2, imageAlt: "Martwa natura z jabłkami", width: 600, height: 800 },
      { id: 3, name: 'Martwa Natura - Water Melon', href: '#', imageSrc: wwork3, imageAlt: "Martwa Natura - Water Melon", width: 600, height: 800 },
      { id: 4, name: 'Pejzaż', href: '#', imageSrc: wwork6, imageAlt: "Pejzaż", width: 600, height: 800 },
      { id: 5, name: 'Martwa natura - Requiem', href: '#', imageSrc: wwork17, imageAlt: "Martwa natura - Requiem", width: 600, height: 800 },
      { id: 6, name: 'Martwa natura - Symphonia', href: '#', imageSrc: wwork19, imageAlt: "Martwa natura - Symphonia", width: 600, height: 800 },
      { id: 7, name: 'Red Tulip', href: '#', imageSrc: wwork4, imageAlt: "Red Tulip", width: 600, height: 800 },
      { id: 8, name: 'Romanca', href: '#', imageSrc: wwork9, imageAlt: "Romanca", width: 600, height: 800 },
      { id: 9, name: 'Espresivo', href: '#', imageSrc: wwork20, imageAlt: "Espresivo", width: 600, height: 800 },
      { id: 10, name: 'Concerto Grosso', href: '#', imageSrc: wwork16, imageAlt: "Concerto Grosso", width: 600, height: 800 },
      { id: 11, name: 'Paradisum', href: '#', imageSrc: wwork15, imageAlt: "Paradisum", width: 600, height: 800 },
      { id: 12, name: 'Capricio', href: '#', imageSrc: wwork21, imageAlt: "Capricio", width: 600, height: 800 },
      { id: 13, name: 'Oratorium', href: '#', imageSrc: wwork23, imageAlt: "Oratorium", width: 600, height: 800 },
      { id: 14, name: 'Etiuda', href: '#', imageSrc: wwork22, imageAlt: "Etiuda", width: 600, height: 800 },
      { id: 15, name: 'Helga', href: '#', imageSrc: wwork18, imageAlt: "Helga", width: 600, height: 800 },
      { id: 16, name: 'Image 5', href: '#', imageSrc: wwork5, imageAlt: "Artwork 5", width: 600, height: 800 },
      { id: 17, name: 'Image 7', href: '#', imageSrc: wwork7, imageAlt: "Artwork 7", width: 600, height: 800 },
      { id: 18, name: 'Image 8', href: '#', imageSrc: wwork8, imageAlt: "Artwork 8", width: 600, height: 800 },
      { id: 19, name: 'Image 10', href: '#', imageSrc: wwork10, imageAlt: "Artwork 10", width: 600, height: 800 },
      { id: 20, name: 'Image 11', href: '#', imageSrc: wwork11, imageAlt: "Artwork 11", width: 600, height: 800 },
      { id: 21, name: 'Image 12', href: '#', imageSrc: wwork12, imageAlt: "Artwork 12", width: 600, height: 800 },
      { id: 22, name: 'Image 13', href: '#', imageSrc: wwork13, imageAlt: "Artwork 13", width: 600, height: 800 },
      { id: 23, name: 'Image 14', href: '#', imageSrc: wwork14, imageAlt: "Artwork 14", width: 600, height: 800 },
    ]
  };
  return works[artist];
};

export default function Hero({ artist, locale }) {
  const { t } = useTranslation('hero', { locale });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const images = worksForArtist(artist);
  const fileToDownload = getPresentationFile(artist, locale);

  const headerText = artist === 'wanda' 
    ? t('hero1')  // Translation key for Wanda
    : t('hero2'); // Translation key for Stan

    useEffect(() => {
      const fadeDuration = 500;  // Duration of fade-out and fade-in in milliseconds
      const changeInterval = 5000;  // Time between changes (including fade durations)
    
      const interval = setInterval(() => {
        setIsVisible(false); // Trigger fade-out
    
        // Wait for the fade-out to complete before changing the image
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
          setIsVisible(true);  // Trigger fade-in after image is changed
        }, fadeDuration);  // Wait for fade-out duration before changing the image
      }, changeInterval);  // Change the image every 5 seconds
    
      return () => clearInterval(interval);  // Cleanup on component unmount
    }, [images.length]);

    function getPresentationFile(artist, locale) {
      const validArtists = ["wanda", "stan"];
      const validLocales = ["de", "en", "pl"];

      artist = artist.toLowerCase();
      locale = locale.toLowerCase();
    
      // If artist or locale is invalid, fallback to defaults
      if (!validArtists.includes(artist)) {
        artist = validArtists[0];  // Default to Wanda
      }
    
      if (!validLocales.includes(locale)) {
        locale = validLocales[0];  // Default to DE
      }
    
      // Construct and return the correct file path
      return `/presentations/${artist}_${locale}.pdf`;
    }


  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-60 sm:py-36 lg:px-8">
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
              href={fileToDownload}  // Use the generated file path
              className="rounded-sm bg-yellow-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              target="_blank" // Opens the PDF in a new tab
              rel="noopener noreferrer"
            >
              {t('getStarted')}
            </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                {t('learnMore')} <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          <Image
            alt={images[currentImageIndex].imageAlt}
            src={images[currentImageIndex].imageSrc}
            width={images[currentImageIndex].width}
            height={images[currentImageIndex].height}
            className={`mt-10 w-full max-w-lg rounded-sm object-cover transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36`}
          />
          <h2 className="text-white text-xl font-semibold text-right"></h2>

          <h2 className="text-white text-xl font-semibold text-right">{images[currentImageIndex].name}</h2>
          </div>
      </div>
    </div>
  );
}