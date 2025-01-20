import Image from "next/image";
import Link from "next/link";
import StanProfile from "/public/images/stan/stanProfile.png"
import WandaProfile from "/public/images/wanda/wandaProfile.png"
import initTranslations from '../i18n';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import LanguageChanger from '/app/[locale]/components/LanguageChanger.js';


// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'footer', 'contact', 'cart'];

export default async function Home({ params }) {
  const { artist, locale } = params;

  // Initialize translations for the page
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
    <div className="flex flex-col items-center justify-center h-screen">
    <LanguageChanger />
      <div className="flex gap-10">
        <Link href="/wanda">
          <div>
            <Image src={WandaProfile} alt="Wanda" className="md:h-96 md:w-96 sm:h-60 sm:w-60 my-4 mx-auto object-cover shadow-[8px_8px_0px] shadow-white hover:shadow-yellow-500" />
            <h2 className="text-2xl text-center mt-6 hover:text-yellow-500">Wanda Wedecka</h2>
          </div>
        </Link>
        <Link href="/stan">
          <div>
            <Image src={StanProfile} alt="Stan" className="md:h-96 md:w-96 sm:h-60 sm:w-60 my-4 mr-4s object-cover shadow-[8px_8px_0px] shadow-white hover:shadow-yellow-500" />
            <h2 className="text-2xl text-center mt-6 hover:text-yellow-500">Stanisław Maria Wedecki</h2>
          </div>
        </Link>
      </div>
    </div>
    </TranslationsProvider>
  );
}
