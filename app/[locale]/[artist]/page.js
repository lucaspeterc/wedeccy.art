import { Navbar } from '/app/[locale]/components/Navbar';
import Hero from '/app/[locale]/components/Hero';
import Footer from '/app/[locale]/components/Footer';
import Banner from '/app/[locale]/components/Banner';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';  // Adjust the path to your i18n setup

// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'hero', 'footer', 'banner'];

export default async function ArtistPage({ params }) {
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
        <Banner artist={artist} locale={locale} />
        <Navbar artist={artist} locale={locale} />
        <Hero artist={artist} locale={locale} />
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
