import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Exhibitions from '/app/[locale]/components/Exhibitions';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';  // Adjust the path to your i18n setup

// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'exhibitions', 'footer'];

export default async function ExhibitionsPage({ params }) {
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
        <div className="container mx-auto">
          <Exhibitions artist={artist} locale={locale} />
        </div>
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
