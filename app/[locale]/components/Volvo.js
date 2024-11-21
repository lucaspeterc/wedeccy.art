import Image from "next/image";
import ik from "/public/images/testimonials/ik.png";
import volvo from '/public/images/exhibitions/volvo.png';

const exhibitionsImages = [
  { id: 1, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195297/Wernisaz_Dom_Volvo_035_IG_ljougy.jpg", imageAlt: "Exhibition Image 1" },
  { id: 2, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195318/Wernisaz_Dom_Volvo_038_IG_ritdpd.jpg", imageAlt: "Exhibition Image 2" },
  { id: 3, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195299/Wernisaz_Dom_Volvo_036_IG_dbibfb.jpg", imageAlt: "Exhibition Image 3" },
  { id: 4, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195296/Wernisaz_Dom_Volvo_027_IG_mt10lv.jpg", imageAlt: "Exhibition Image 4" },
  { id: 5, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195294/Wernisaz_Dom_Volvo_024_IG_jgf9og.jpg", imageAlt: "Exhibition Image 5" },
  { id: 6, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195294/Wernisaz_Dom_Volvo_032_IG_jk7rjj.jpg", imageAlt: "Exhibition Image 6" },
  { id: 7, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195293/Wernisaz_Dom_Volvo_031_IG_pgwtcq.jpg", imageAlt: "Exhibition Image 7" },
  { id: 8, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195292/Wernisaz_Dom_Volvo_029_IG_spvghe.jpg", imageAlt: "Exhibition Image 8" },
  { id: 9, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195292/Wernisaz_Dom_Volvo_025_IG_bvz9je.jpg", imageAlt: "Exhibition Image 9" },
  { id: 10, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195288/Wernisaz_Dom_Volvo_028_IG_ziiy07.jpg", imageAlt: "Exhibition Image 10" },
  { id: 11, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195286/Wernisaz_Dom_Volvo_022_IG_s9vtwk.jpg", imageAlt: "Exhibition Image 11" },
  { id: 12, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195286/Wernisaz_Dom_Volvo_021_IG_rjv1w1.jpg", imageAlt: "Exhibition Image 12" },
  { id: 13, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195285/Wernisaz_Dom_Volvo_019_IG_lqkbfp.jpg", imageAlt: "Exhibition Image 13" },
  { id: 14, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195285/Wernisaz_Dom_Volvo_020_IG_uxnnq2.jpg", imageAlt: "Exhibition Image 14" },
  { id: 15, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195282/Wernisaz_Dom_Volvo_015_IG_huaiuy.jpg", imageAlt: "Exhibition Image 15" },
  { id: 16, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195282/Wernisaz_Dom_Volvo_017_IG_zvbkkv.jpg", imageAlt: "Exhibition Image 16" },
  { id: 17, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195280/Wernisaz_Dom_Volvo_007_IG_lc7kzs.jpg", imageAlt: "Exhibition Image 17" },
  { id: 18, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195279/Wernisaz_Dom_Volvo_016_IG_zod3lo.jpg", imageAlt: "Exhibition Image 18" },
  { id: 19, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195276/Wernisaz_Dom_Volvo_013_IG_jo3orb.jpg", imageAlt: "Exhibition Image 19" },
  { id: 20, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195275/Wernisaz_Dom_Volvo_012_IG_s4tllb.jpg", imageAlt: "Exhibition Image 20" },
  { id: 21, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195273/Wernisaz_Dom_Volvo_008_IG_fajhak.jpg", imageAlt: "Exhibition Image 21" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732195269/Wernisaz_Dom_Volvo_004_IG_yrzwav.jpg", imageAlt: "Exhibition Image 22" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209512/Untitled_design_10_ob5km1.png", imageAlt: "Exhibition Image 23" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209512/Untitled_design_12_bgwaem.png", imageAlt: "Exhibition Image 24" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209514/Untitled_design_14_n08zpt.png", imageAlt: "Exhibition Image 25" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209516/Untitled_design_13_gzj68g.png", imageAlt: "Exhibition Image 26" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209516/Untitled_design_16_it9y7b.png", imageAlt: "Exhibition Image 27" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209517/Untitled_design_17_dqn4kd.png", imageAlt: "Exhibition Image 28" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209518/Untitled_design_19_z2t7xy.png", imageAlt: "Exhibition Image 29" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209518/Untitled_design_15_iwm7zp.png", imageAlt: "Exhibition Image 30" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209521/Untitled_design_18_kurv33.png", imageAlt: "Exhibition Image 31" },
  { id: 22, imageSrc: "https://res.cloudinary.com/dkuen1y4x/image/upload/v1732209522/Untitled_design_11_lwdsf4.png", imageAlt: "Exhibition Image 32" },
];

import initTranslations from '/app/i18n.js';

export default async function Volvo ({ locale, artist }) {
  const { t } = await initTranslations(locale, ['rodzinnasztuka', 'exhibitions']);

  return (
    <div className="mx-auto max-w-7xl px-4 py-60 sm:px-6 sm:py-40 lg:max-w-7xl lg:px-8">
      {/* Display content based on the artist */}
      {artist === 'wanda' ? (
        <>
          <h2 className="text-2xl font-bold mb-10 tracking-tight text-white">{t('common_exhibition2')}</h2>
          <div className="max-w-7xl overflow-hidden bg-black">
              <Image
                alt="Image 1"
                src={volvo}
                className="object-cover w-full"
              />
          </div>
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
          <h2 className="text-2xl font-bold mb-10 tracking-tight text-white">{t('common_exhibition2')}</h2>
          <div className="max-w-7xl overflow-hidden bg-black">
              <Image
                alt="Image 1"
                src={volvo}
                className="object-cover w-full"
              />
          </div>
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
              <img
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