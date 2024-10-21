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
import swork17 from "/public/images/stan/work/swork17.png";
import swork18 from "/public/images/stan/work/swork18.png";
import swork19 from "/public/images/stan/work/swork19.png";
import swork20 from "/public/images/stan/work/swork20.png";
import swork21 from "/public/images/stan/work/swork21.png";
import swork22 from "/public/images/stan/work/swork22.png";
import swork23 from "/public/images/stan/work/swork23.png";

// stansislaw sketches import

import s1 from "/public/images/stan/sketch/s1.png";
import s2 from "/public/images/stan/sketch/s2.png";
import s3 from "/public/images/stan/sketch/s3.png";
import s4 from "/public/images/stan/sketch/s4.png";
import s5 from "/public/images/stan/sketch/s5.png";
import s6 from "/public/images/stan/sketch/s6.png";
import s7 from "/public/images/stan/sketch/s7.png";
import s8 from "/public/images/stan/sketch/s8.png";
import s9 from "/public/images/stan/sketch/s9.png";
import s10 from "/public/images/stan/sketch/s10.png";
import s11 from "/public/images/stan/sketch/s11.png";
import s12 from "/public/images/stan/sketch/s12.png";
import s13 from "/public/images/stan/sketch/s13.png";
import s14 from "/public/images/stan/sketch/s14.png";


// wandas portfolio import
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

import initTranslations from '/app/i18n.js';


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
      { id: 11, name: 'Destiny', href: '#', imageSrc: swork13, imageAlt: "Destiny", width: 600, height: 800 },
      { id: 12, name: 'Tricinum', href: '#', imageSrc: swork1, imageAlt: "Tricinum", width: 600, height: 800 },
      { id: 13, name: 'Rhapsody', href: '#', imageSrc: swork16, imageAlt: "Rhapsody", width: 600, height: 800 },
      { id: 14, name: 'Esperanza', href: '#', imageSrc: swork10, imageAlt: "Esperanza", width: 600, height: 800 },
      { id: 15, name: 'Water plants', href: '#', imageSrc: swork9, imageAlt: "Water plants", width: 600, height: 800 },
      { id: 16, name: 'Time stopped', href: '#', imageSrc: swork6, imageAlt: "Time Stopped", width: 600, height: 800 },
      { id: 17, name: 'Little Angel', href: '#', imageSrc: swork15, imageAlt: "Little Angel", width: 600, height: 800 },
      { id: 18, name: 'Fandom', href: '#', imageSrc: swork5, imageAlt: "Fandom", width: 600, height: 800 },
      { id: 19, name: 'Maestro', href: '#', imageSrc: swork4, imageAlt: "Maestro", width: 600, height: 800 },
      { id: 20, name: 'Afternoon', href: '#', imageSrc: swork12, imageAlt: "Afternoon", width: 600, height: 800 },
      { id: 21, name: 'Grenn Silence', href: '#', imageSrc: swork7, imageAlt: "Green Silence", width: 600, height: 800 },
      { id: 22, name: 'Image 17', href: '#', imageSrc: swork17, imageAlt: "Artwork 17", width: 600, height: 800 },
      { id: 23, name: 'Image 20', href: '#', imageSrc: swork20, imageAlt: "Artwork 20", width: 600, height: 800 },
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

const stanSketches = [
  { id: 1, imageSrc: s1, imageAlt: "Sketch 1" },
  { id: 2, imageSrc: s2, imageAlt: "Sketch 2" },
  { id: 3, imageSrc: s3, imageAlt: "Sketch 3" },
  { id: 4, imageSrc: s4, imageAlt: "Sketch 4" },
  { id: 5, imageSrc: s5, imageAlt: "Sketch 5" },
  { id: 6, imageSrc: s6, imageAlt: "Sketch 6" },
  { id: 7, imageSrc: s7, imageAlt: "Sketch 7" },
  { id: 8, imageSrc: s8, imageAlt: "Sketch 8" },
  { id: 9, imageSrc: s9, imageAlt: "Sketch 9" },
  { id: 10, imageSrc: s10, imageAlt: "Sketch 10" },
  { id: 11, imageSrc: s11, imageAlt: "Sketch 11" },
  { id: 12, imageSrc: s12, imageAlt: "Sketch 12" },
  { id: 13, imageSrc: s13, imageAlt: "Sketch 13" },
  { id: 14, imageSrc: s14, imageAlt: "Sketch 14" },
  ];

export default async function Portfolio({ locale, artist }) {
  const { t } = await initTranslations(locale, ['portfolio']);
  const works = worksForArtist(artist);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        {artist === 'stan' ? t('portfolio1') : t('portfolio:portfolio2')}
      </h2>

      {/* Display the works (paintings) */}
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {works.map((work) => (
          <div key={work.id} className="group relative">
            <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
              <Image
                alt={work.imageAlt}
                src={work.imageSrc}
                width={work.width}
                height={work.height}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  <a href={work.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {work.name}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display sketches for Stanislaw */}
      {artist === 'stan' && (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-12">{t('portfolio:portfolio3')}</h2>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {stanSketches.map((sketch) => (
              <div key={sketch.id} className="group relative">
                <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <Image
                    alt={sketch.imageAlt}
                    src={sketch.imageSrc}
                    width={600}
                    height={800}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}