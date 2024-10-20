import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import RodzinnaSztuka from '/app/[locale]/components/RodzinnaSztuka';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';  // Adjust the path to your i18n setup

// Define the relevant namespaces for translation
const i18nNamespaces = ['navbar', 'footer', 'rodzinnaSztuka'];

export default async function RodzinnaSztukaPage({ params }) {
  const { locale } = params;

  // Initialize translations for the page
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div>
        <Navbar locale={locale} />
        <div className="container mx-auto">
          <RodzinnaSztuka locale={locale} />
        </div>
        <Footer locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
