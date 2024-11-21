import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Volvo from '/app/[locale]/components/Volvo';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';  // Adjust the path to your i18n setup

// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'footer', 'volvo'];

export default async function VolvoPage({ params }) {
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
      <Navbar artist={artist} locale={locale} />
      <div className="container mx-auto">
          <Volvo artist={artist} locale={locale} />
        </div>
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
