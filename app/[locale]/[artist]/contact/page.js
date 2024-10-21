import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';

// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'footer', 'contact'];

export default async function Contact({ params }) {
  const { artist, locale } = params;

  // Initialize translations for the page
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div>
        {/* Pass the artist and locale explicitly to the Navbar */}
        <Navbar artist={artist} locale={locale} />

        <div className="py-60 sm:py-44">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    {t('contact:get_in_touch')}
                  </h2>
                  <p className="mt-4 leading-7 text-white">
                    {t('contact:contact_description')}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-sm bg-gray-50 p-10 shadow-[8px_8px_0px] shadow-yellow-600">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Michal Gutt - {t('poland')}
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a href="mailto:michal.gutt@wp.pl" className="font-semibold text-black">
                            michal.gutt@wp.pl
                          </a>
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">{t('phone_number')}</dt>
                        <dd>+48 602 575 599</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-sm bg-gray-50 p-10 shadow-[8px_8px_0px] shadow-yellow-600">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Helga Wachsmuth-Wedecka - {t('germany')}
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a href="mailto:walliwach@gmail.de" className="font-semibold text-black">
                            walliwach@gmail.de
                          </a>
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">{t('phone_number')}</dt>
                        <dd>+49 17 647 019 574</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     {/* contact form */}

     <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('contact:form1')}</h2>
        <p className="mt-2 text-lg leading-8 text-white">
          {t('contact:form2')}
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form3')}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form4')}
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form5')}
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">

                </label>
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form6')}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            {t('contact:form7')}
          </button>
        </div>
      </form>
    </div>

        {/* Pass locale to Footer */}
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
