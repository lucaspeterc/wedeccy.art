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



const worksForArtist = (artist) => {
  const works = {
    stan: [
      { id: 1, name: 'Image 1', href: '#', imageSrc: swork1, imageAlt: "Artwork 1", width: 600, height: 800 },
      { id: 2, name: 'Image 2', href: '#', imageSrc: swork2, imageAlt: "Artwork 2", width: 600, height: 800 },
      { id: 3, name: 'Image 3', href: '#', imageSrc: swork3, imageAlt: "Artwork 3", width: 600, height: 800 },
      { id: 4, name: 'Image 4', href: '#', imageSrc: swork4, imageAlt: "Artwork 4", width: 600, height: 800 },
      { id: 5, name: 'Image 5', href: '#', imageSrc: swork5, imageAlt: "Artwork 5", width: 600, height: 800 },
      { id: 6, name: 'Image 6', href: '#', imageSrc: swork6, imageAlt: "Artwork 6", width: 600, height: 800 },
      { id: 7, name: 'Image 7', href: '#', imageSrc: swork7, imageAlt: "Artwork 7", width: 600, height: 800 },
      { id: 8, name: 'Image 8', href: '#', imageSrc: swork8, imageAlt: "Artwork 8", width: 600, height: 800 },
      { id: 9, name: 'Image 9', href: '#', imageSrc: swork9, imageAlt: "Artwork 9", width: 600, height: 800 },
      { id: 10, name: 'Image 10', href: '#', imageSrc: swork10, imageAlt: "Artwork 10", width: 600, height: 800 },
      { id: 11, name: 'Image 11', href: '#', imageSrc: swork11, imageAlt: "Artwork 11", width: 600, height: 800 },
      { id: 12, name: 'Image 12', href: '#', imageSrc: swork12, imageAlt: "Artwork 12", width: 600, height: 800 },
      { id: 13, name: 'Image 13', href: '#', imageSrc: swork13, imageAlt: "Artwork 13", width: 600, height: 800 },
      { id: 14, name: 'Image 14', href: '#', imageSrc: swork14, imageAlt: "Artwork 14", width: 600, height: 800 },
      { id: 15, name: 'Image 15', href: '#', imageSrc: swork15, imageAlt: "Artwork 15", width: 600, height: 800 },
      { id: 16, name: 'Image 16', href: '#', imageSrc: swork16, imageAlt: "Artwork 16", width: 600, height: 800 },
      { id: 17, name: 'Image 17', href: '#', imageSrc: swork17, imageAlt: "Artwork 17", width: 600, height: 800 },
      { id: 18, name: 'Image 18', href: '#', imageSrc: swork18, imageAlt: "Artwork 18", width: 600, height: 800 },
      { id: 19, name: 'Image 19', href: '#', imageSrc: swork19, imageAlt: "Artwork 19", width: 600, height: 800 },
      { id: 20, name: 'Image 20', href: '#', imageSrc: swork20, imageAlt: "Artwork 20", width: 600, height: 800 },
      { id: 21, name: 'Image 21', href: '#', imageSrc: swork21, imageAlt: "Artwork 21", width: 600, height: 800 },
    ],
    wanda: [
      { id: 1, name: 'Nostalgia', href: '#', imageSrc: wwork1, imageAlt: "Nostalgia", width: 600, height: 800 },
      { id: 2, name: 'Martwa natura z jabłkami', href: '#', imageSrc: wwork2, imageAlt: "Martwa natura z jabłkami", width: 600, height: 800 },
      { id: 3, name: 'Martwa Natura - Water Melon', href: '#', imageSrc: wwork3, imageAlt: "Artwork 3", width: 600, height: 800 },
      { id: 4, name: 'Pejzaż', href: '#', imageSrc: wwork6, imageAlt: "Artwork 4", width: 600, height: 800 },
      { id: 5, name: 'Martwa natura - Requiem', href: '#', imageSrc: wwork17, imageAlt: "Artwork 5", width: 600, height: 800 },
      { id: 6, name: 'Martwa natura - Symphonia', href: '#', imageSrc: wwork19, imageAlt: "Artwork 6", width: 600, height: 800 },
      { id: 7, name: 'Red Tulip', href: '#', imageSrc: wwork4, imageAlt: "Artwork 7", width: 600, height: 800 },
      { id: 8, name: 'Romanca', href: '#', imageSrc: wwork9, imageAlt: "Artwork 8", width: 600, height: 800 },
      { id: 9, name: 'Espresivo', href: '#', imageSrc: wwork20, imageAlt: "Artwork 9", width: 600, height: 800 },
      { id: 10, name: 'Concerto Grosso', href: '#', imageSrc: wwork16, imageAlt: "Artwork 10", width: 600, height: 800 },
      { id: 11, name: 'Paradisum', href: '#', imageSrc: wwork15, imageAlt: "Artwork 11", width: 600, height: 800 },
      { id: 12, name: 'Image 12', href: '#', imageSrc: wwork12, imageAlt: "Artwork 12", width: 600, height: 800 },
      { id: 13, name: 'Image 13', href: '#', imageSrc: wwork13, imageAlt: "Artwork 13", width: 600, height: 800 },
      { id: 14, name: 'Image 14', href: '#', imageSrc: wwork14, imageAlt: "Artwork 14", width: 600, height: 800 },
      { id: 15, name: 'Image 15', href: '#', imageSrc: wwork15, imageAlt: "Artwork 15", width: 600, height: 800 },
      { id: 16, name: 'Image 16', href: '#', imageSrc: wwork16, imageAlt: "Artwork 16", width: 600, height: 800 },
      { id: 17, name: 'Image 17', href: '#', imageSrc: wwork17, imageAlt: "Artwork 17", width: 600, height: 800 },
      { id: 18, name: 'Image 18', href: '#', imageSrc: wwork18, imageAlt: "Artwork 18", width: 600, height: 800 },
    ]
  };
  return works[artist];
};

export default function Portfolio({ artist }) {
  const works = worksForArtist(artist);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        {artist === 'stan' ? 'Ostatnie prace Stanisława Marii Wedeckiego' : 'Ostatnie prace Wandy Wedeckiej'}
      </h2>

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
    </div>
  );
}
