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

export default function Portfolio() {
  const works = [
    { id: 1, name: 'Image 1', href: '#', imageSrc: swork1, imageAlt: "Artwork 1", width: 600, height: 800 },
    { id: 2, name: 'Image 2', href: '#', imageSrc: swork2, imageAlt: "Artwork 2", width: 600, height: 800 },
    { id: 3, name: 'Image 3', href: '#', imageSrc: swork3, imageAlt: "Artwork 3", width: 800, height: 600 },
    { id: 4, name: 'Image 4', href: '#', imageSrc: swork4, imageAlt: "Artwork 4", width: 800, height: 600 },
    { id: 5, name: 'Image 5', href: '#', imageSrc: swork5, imageAlt: "Artwork 5", width: 800, height: 600 },
    { id: 6, name: 'Image 6', href: '#', imageSrc: swork6, imageAlt: "Artwork 6", width: 800, height: 600 },
    { id: 7, name: 'Image 7', href: '#', imageSrc: swork7, imageAlt: "Artwork 7", width: 800, height: 600 },
    { id: 8, name: 'Image 8', href: '#', imageSrc: swork8, imageAlt: "Artwork 8", width: 800, height: 600 },
    { id: 9, name: 'Image 9', href: '#', imageSrc: swork9, imageAlt: "Artwork 9", width: 800, height: 600 },
    { id: 10, name: 'Image 10', href: '#', imageSrc: swork10, imageAlt: "Artwork 10", width: 800, height: 600 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Portfolio</h2>

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
