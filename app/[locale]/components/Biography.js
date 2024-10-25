import Image from 'next/image'
import stan1 from "/public/images/stan/personal/stan1.png";
import stan2 from "/public/images/stan/personal/stan2.png";
import stan3 from "/public/images/stan/personal/stan3.png";
import stan4 from "/public/images/stan/personal/stan4.png";
import stan5 from "/public/images/stan/personal/stan5.png";
import stan6 from "/public/images/stan/personal/stan6.png";
import stan7 from "/public/images/stan/personal/stan7.png";
import stan8 from "/public/images/stan/personal/stan8.png";
import stan9 from "/public/images/stan/personal/stan9.png";
import stan10 from "/public/images/stan/personal/stan10.png";
import stan11 from "/public/images/stan/personal/stan11.png";
import stan12 from "/public/images/stan/personal/stan12.png";
import stan13 from "/public/images/stan/personal/stan13.png";
import stan14 from "/public/images/stan/personal/stan14.png";
import stan15 from "/public/images/stan/personal/stan15.png";
import stan16 from "/public/images/stan/personal/stan16.png";
import stan17 from "/public/images/stan/personal/stan17.png";
import stan18 from "/public/images/stan/personal/stan18.png";
import stan19 from "/public/images/stan/personal/stan19.png";
import stan20 from "/public/images/stan/personal/stan20.png";
import stan21 from "/public/images/stan/personal/stan21.png";
import stan22 from "/public/images/stan/personal/stan22.png";
import stan23 from "/public/images/stan/personal/stan23.png";
import stan24 from "/public/images/stan/personal/stan24.png";
import stan25 from "/public/images/stan/personal/stan25.png";
import stan26 from "/public/images/stan/personal/stan26.png";
import stan27 from "/public/images/stan/personal/stan27.png";
import stan28 from "/public/images/stan/personal/stan28.png";
import stan29 from "/public/images/stan/personal/stan29.png";
import stan30 from "/public/images/stan/personal/stan30.png";
import stan31 from "/public/images/stan/personal/stan31.png";
import stan32 from "/public/images/stan/personal/stan32.png";
import stan33 from "/public/images/stan/personal/stan33.png";
import stan34 from "/public/images/stan/personal/stan34.png";
import stan35 from "/public/images/stan/personal/stan35.png";
import stan36 from "/public/images/stan/personal/stan36.png";
import stan37 from "/public/images/stan/personal/stan37.png";
import stan38 from "/public/images/stan/personal/stan38.png";
import wa1 from "/public/images/wanda/personal/wa1.png";
import wa2 from "/public/images/wanda/personal/wa2.png";
import wa3 from "/public/images/wanda/personal/wa3.png";
import wa4 from "/public/images/wanda/personal/wa4.png";
import wa5 from "/public/images/wanda/personal/wa5.png";
import wa6 from "/public/images/wanda/personal/wa6.png";
import wa7 from "/public/images/wanda/personal/wa7.png";
import wa8 from "/public/images/wanda/personal/wa8.png";
import wa9 from "/public/images/wanda/personal/wa9.png";
import wa10 from "/public/images/wanda/personal/wa10.png";
import wa11 from "/public/images/wanda/personal/wa11.png";
import wa12 from "/public/images/wanda/personal/wa12.png";
import wa13 from "/public/images/wanda/personal/wa13.png";
import wa14 from "/public/images/wanda/personal/wa14.png";
import wa15 from "/public/images/wanda/personal/wa15.png";
import wa16 from "/public/images/wanda/personal/wa16.png";
import wa17 from "/public/images/wanda/personal/wa17.png";
import wa18 from "/public/images/wanda/personal/wa18.png";
import wa19 from "/public/images/wanda/personal/wa19.png";
import wa20 from "/public/images/wanda/personal/wa20.png";
import wa21 from "/public/images/wanda/personal/wa21.png";
import wa22 from "/public/images/wanda/personal/wa22.png";
import wa23 from "/public/images/wanda/personal/wa23.png";
import rd from "/public/images/testimonials/rd.png";
import jmt from "/public/images/testimonials/jmt.png";
import mg from "/public/images/testimonials/mg.png";
import initTranslations from '/app/i18n.js';



export default async function Biography({ locale, artist }) {
  const { t } = await initTranslations(locale, ['biography']); 
  return (
    <section className="my-20">
      {/* Example for Wanda's biography */}
      {artist === 'wanda' && (
        <div className="px-6 py-40 lg:px-8">
        <div className="mx-auto max-w-7xl text-base leading-7 text-white">
          <p className="text-base font-semibold leading-7 text-yellow-600">{t('stan_b1')}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xl">Wanda Wedecka</h1>
          <p className="mt-6 text-2xl leading-8">
          {t('wanda_b2')}
          </p>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_b3')}
            </p>
          </div>
  
          {/* pictures */}
  
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa8}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>  
           <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa6}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
           </div>
  
          {/* memories one */}
          <p className="text-base mt-6 font-semibold leading-7 text-yellow-600">{t('wanda_m1')}</p>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m2')}
            </p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m3')}
            </p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m4')}
            </p>
          </div> 
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m5')}
            </p>
          </div> 
          <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={mg}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Michał Gutt</div>
                </div>
              </figcaption>  
          {/* pictures */}
  
           <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa7}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa14}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
           </div>
  
           {/* memories two */}
           <p className="text-base mt-6 font-semibold leading-7 text-yellow-600">{t('wanda_m6')}</p>
           <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m7')}
            </p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m8')}
            </p>
          </div>
          <div className="mt-10 text-2xl max-w-7xl">
            <p>
            {t('wanda_m9')}
            </p>
          </div>
          <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={rd}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Rafał Dmochowski</div>
                </div>
              </figcaption>
  
           {/* pictures */}
  
           <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa9}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa13}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa10}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa16}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa17}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa15}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
                <p className='text-white ml-14'>Mama Malarki - Wandy Wedeckiej</p>

              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa2}
                  width={600}
                  height={800}
                  className="object-fill object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa3}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa4}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa5}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="my-4 text-2xl max-w-7xl">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">{t('press')}</h1>
            </div>

            <div className="group col-span-full relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa11}
                  width={600}
                  height={800}
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group col-span-full relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa21}
                  width={600}
                  height={800}
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group col-span-full relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa22}
                  width={600}
                  height={800}
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa23}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa20}
                  width={600}
                  height={800}
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa12}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa1}
                  width={600}
                  height={800}
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group col-span-full relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa19}
                  width={600}
                  height={800}
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="group col-span-full relative">
              <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
                <Image
                  alt="Image 1"
                  src={wa18}
                  width={600}
                  height={800}
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    
                  </h3>
                </div>
              </div>
            </div>
           </div>
           </div>
        </div>
      )}

      {/* Example for Stan's biography */}
      {artist === 'stan' && (
        <>
      <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-base leading-7 text-white">
        <p className="text-base font-semibold leading-7 text-yellow-600">{t('stan_b1')}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-4xl">Stanisław Maria Wedecki</h1>
        <p className="mt-6 text-2xl leading-8">
        {t('stan_b2')}
        </p>

        {/* pictures */}

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan3}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan4}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan15}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan14}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
         </div>

        <div className="mt-10 text-2xl max-w-7xl">
          <p>
          {t('stan_b3')}
          </p>
        </div>

         {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan1}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan2}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan5}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan6}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan7}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan32}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
         </div>

        {/* memories */}
        <p className="text-base mt-6 font-semibold leading-7 text-yellow-600">{t('stan_m1')}</p>
        {/* memories one */}
        <div className="mt-10 text-xl max-w-7xl">
          <p>
          {t('stan_m2')}
          </p>
        </div>
        <div className="mt-10 text-xl max-w-7xl">
          <p>
          {t('stan_m3')}
          </p>
        </div>
        <div className="mt-10 text-xl max-w-7xl">
          <p>
          {t('stan_m4')}
          </p>
        </div> <div className="mt-10 text-xl max-w-7xl">
          <p>
          {t('stan_m5')}
          </p>
        </div>
        <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={rd}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Rafał Dmochowski</div>
                </div>
              </figcaption>
        {/* pictures */}

        <div className="mt-6 grid gap-x-6 gap-y-10 xl:gap-x-8">
          <div className="group col-span-full relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan38}
                width={600}
                height={800}
                className="object-cover w-full object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan9}
                className="object-contain w-full bg-black object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
         </div>

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan26}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan27}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan28}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan29}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan30}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan31}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan17}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan16}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan33}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan34}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan35}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan36}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
         </div>

         {/* memories two */}
         <p className="text-base mt-6 font-semibold leading-7 text-yellow-600">{t('stan_m14')}</p>
         <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m6')}
          </p>
        </div>
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m7')}
          </p>
        </div>
        <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={jmt}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Jan Maria Tomaszewski</div>
                </div>
              </figcaption>
         {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan18}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan19}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan20}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan13}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
         </div>

        {/* memories three */}
        <p className="text-base mt-6 font-semibold leading-7 text-yellow-600">{t('stan_m15')}</p>
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m8')}
          </p>
        </div>
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m9')}
          </p>
        </div>
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m10')}
          </p>
        </div> 
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m11')}
          </p>
        </div>
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m12')}
          </p>
        </div>
        <div className="mt-10 max-w-7xl">
          <p>
          {t('stan_m13')}
          </p>
        </div>
        <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={mg}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Michał Gutt</div>
                </div>
              </figcaption>
          {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan10}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan11}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan23}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan12}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan24}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan25}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div>

          {/* <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-black group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan37}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  
                </h3>
              </div>
            </div>
          </div> */}
         </div>

      </div>
      </div>
        </>
      )}
    </section>
  );
}
