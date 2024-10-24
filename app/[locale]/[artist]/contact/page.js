import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';
import mg from "/public/images/testimonials/mg.png";
import hww from "/public/images/testimonials/hww.png";
import Image from 'next/image'
import { ContactForm } from '../../components/ContactForm';


// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'footer', 'contact'];

export default async function Contact({ params }) {
  const { artist, locale } = params;
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

        <div className="py-60 sm:py-60">
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
                <figcaption className="mt-4 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={mg}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-black">Michał Gutt - Poland</div>
                </div>
                </figcaption>
  
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
                  <figcaption className="mt-4 flex items-center gap-x-6">
                <Image
                  alt=""
                  src={hww}
                  className="h-14 w-14 rounded-full bg-white"
                />
                <div className="text-base">
                  <div className="font-semibold text-black">Helga Wachsmuth-Wedecki - Germany</div>
                </div>
                </figcaption>
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
        <ContactForm artist={artist} locale={locale} />
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
