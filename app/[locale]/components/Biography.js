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
import initTranslations from '/app/i18n.js';



export default async function Biography({ locale, artist }) {
  const { t } = await initTranslations(locale, ['biography']); 
  return (
    <section className="my-10">
      {/* Example for Wanda's biography */}
      {artist === 'wanda' && (
        <>
          <h2 className="text-2xl mb-4">Wanda Early Life</h2>
          <p>Wanda Wedecka urodziła się w 1919 roku w Homlu. Zmarła w 2011 roku w Warszawie.
          W latach 1945 – 1951 studiowała na Wydziale Sztuk Pięknych Uniwersytetu Mikołaja Kopernika w Toruniu pod kierunkiem Tymona Niesiołowskiego.
          </p>
          <img src="/images/wanda/earlyLife.png" alt="Wanda's Early Life" />
          <h2 className="text-2xl mb-4">Career Highlights</h2>
          <p>Brała udział w wystawach okręgowych i ogólnopolskich, m.in.:
          Wystawa Młodej Plastyki, Arsenał 1955 r.
          Wystawa Malarstwa XV-lecie PRL Warszawa 1961 r.
          I Festiwal Malarstwa Współczesnego, Szczecin 1962 r.
          Warszawa w Sztuce 1962 r., 1964 r.
          Wystawy indywidualne:
          Warszawa 1958 r., Toruń 1959 r., Warszawskie Zakłady Pracy 1960 r., 1963 r.
          Warszawa Kordegarda 1964 r., Toruń 1965 r., Płock 1966 r.
          Aula Uniwersytecka Gandawa 1967 r., Galeria d’Art. Tamara Pfeiffer Bruksela 1968 r.
          </p>
          <img src="/images/wanda/career.png" alt="Wanda's Career" />
        </>
      )}

      {/* Example for Stan's biography */}
      {artist === 'stan' && (
        <>
      <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-base leading-7 text-white">
        <p className="text-base font-semibold leading-7 text-yellow-600">{t('stan_b1')}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Stanisław Maria Wedecki</h1>
        <p className="mt-6 text-xl leading-8">
        {t('stan_b2')}
        </p>

        {/* pictures */}

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

        <div className="mt-10 text-xl max-w-7xl">
          <p>
          {t('stan_b3')}
          </p>
        </div>

         {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div><div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
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
        <p className="text-base mt-6 font-semibold leading-7 text-white">Roman Dmochowski</p>

        {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan8}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan9}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

         {/* memories two */}

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
        <p className="text-base mt-6 font-semibold leading-7 text-white">Jan Maria Tomaszewski</p>

         {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

        {/* memories three */}

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
        <p className="text-base mt-6 font-semibold leading-7 text-white">Michał Gutt</p>

          {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
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
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

      </div>

      </div>
        </>
      )}
    </section>
  );
}
