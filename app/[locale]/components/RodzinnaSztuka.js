import Image from "next/image";
import ex1 from "/public/images/exhibitions/101/ex1.png";
import ex2 from "/public/images/exhibitions/101/ex2.png";
import ex3 from "/public/images/exhibitions/101/ex3.png";
import ex4 from "/public/images/exhibitions/101/ex4.png";
import ex5 from "/public/images/exhibitions/101/ex5.png";
import ex6 from "/public/images/exhibitions/101/ex6.png";
import ex7 from "/public/images/exhibitions/101/ex7.png";
import ex8 from "/public/images/exhibitions/101/ex8.png";
import ex9 from "/public/images/exhibitions/101/ex9.png";
import ex10 from "/public/images/exhibitions/101/ex10.png";
import ex11 from "/public/images/exhibitions/101/ex11.png";
import ex12 from "/public/images/exhibitions/101/ex12.png";
import ex13 from "/public/images/exhibitions/101/ex13.png";
import ex14 from "/public/images/exhibitions/101/ex14.png";
import ex15 from "/public/images/exhibitions/101/ex15.png";
import ex16 from "/public/images/exhibitions/101/ex16.png";
import ex17 from "/public/images/exhibitions/101/ex17.png";
import ex18 from "/public/images/exhibitions/101/ex18.png";
import ex19 from "/public/images/exhibitions/101/ex19.png";
import ex20 from "/public/images/exhibitions/101/ex20.png";
import ex21 from "/public/images/exhibitions/101/ex21.png";
import ex22 from "/public/images/exhibitions/101/ex22.png";
import ex23 from "/public/images/exhibitions/101/ex23.png";
import ik from "/public/images/testimonials/ik.png";

const exhibitionsImages = [
  { id: 1, imageSrc: ex1, imageAlt: "Exhibition Image 1" },
  { id: 2, imageSrc: ex2, imageAlt: "Exhibition Image 2" },
  { id: 3, imageSrc: ex3, imageAlt: "Exhibition Image 3" },
  { id: 4, imageSrc: ex4, imageAlt: "Exhibition Image 4" },
  { id: 5, imageSrc: ex5, imageAlt: "Exhibition Image 5" },
  { id: 6, imageSrc: ex6, imageAlt: "Exhibition Image 6" },
  { id: 7, imageSrc: ex7, imageAlt: "Exhibition Image 7" },
  { id: 8, imageSrc: ex8, imageAlt: "Exhibition Image 8" },
  { id: 9, imageSrc: ex9, imageAlt: "Exhibition Image 9" },
  { id: 10, imageSrc: ex10, imageAlt: "Exhibition Image 10" },
  { id: 11, imageSrc: ex11, imageAlt: "Exhibition Image 11" },
  { id: 12, imageSrc: ex12, imageAlt: "Exhibition Image 12" },
  { id: 13, imageSrc: ex13, imageAlt: "Exhibition Image 13" },
  { id: 14, imageSrc: ex14, imageAlt: "Exhibition Image 14" },
  { id: 15, imageSrc: ex15, imageAlt: "Exhibition Image 15" },
  { id: 16, imageSrc: ex16, imageAlt: "Exhibition Image 16" },
  { id: 17, imageSrc: ex17, imageAlt: "Exhibition Image 17" },
  { id: 18, imageSrc: ex18, imageAlt: "Exhibition Image 18" },
  { id: 19, imageSrc: ex19, imageAlt: "Exhibition Image 19" },
  { id: 20, imageSrc: ex20, imageAlt: "Exhibition Image 20" },
  { id: 21, imageSrc: ex21, imageAlt: "Exhibition Image 21" },
  { id: 22, imageSrc: ex22, imageAlt: "Exhibition Image 22" },
  { id: 23, imageSrc: ex23, imageAlt: "Exhibition Image 23" },
];

import initTranslations from '/app/i18n.js';

export default async function RodzinnaSztuka({ locale, artist }) {
  const { t } = await initTranslations(locale, ['rodzinnasztuka']);

  return (
    <div className="mx-auto max-w-7xl px-4 py-60 sm:px-6 sm:py-40 lg:max-w-7xl lg:px-8">
      {/* Display content based on the artist */}
      {artist === 'wanda' ? (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-white">{t('wanda_m1')}</h2>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>{t('wanda_m2')}</p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>{t('wanda_m3')}</p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>{t('wanda_m4')}</p>
          </div>
          <figcaption className="mt-4 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={ik}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Iwona Kozicka {t('wanda_m5')}</div>
                </div>
                </figcaption>
        </>
      ) : artist === 'stan' ? (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-white">{t('wanda_m1')}</h2>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>{t('stan_m2')}</p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>{t('stan_m3')}</p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>{t('stan_m4')}</p>
          </div>
          <figcaption className="mt-4 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={ik}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Iwona Kozicka {t('wanda_m5')}</div>
                </div>
                </figcaption>
        </>
      ) : (
        <p>{t('artist_not_found')}</p>
      )}

      {/* Images Section */}
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {exhibitionsImages.map((image) => (
          <div key={image.id} className="group relative">
            <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
              <Image
                alt={image.imageAlt}
                src={image.imageSrc}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}