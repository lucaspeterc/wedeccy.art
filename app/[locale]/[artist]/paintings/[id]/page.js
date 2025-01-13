import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import ProductPage from '/app/[locale]/components/ProductPage';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';

const i18nNamespaces = ['navbar', 'biography', 'footer']; // Add relevant namespaces

export default async function Page({ params }) {
  const { artist, locale, id } = params;

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
          <ProductPage params={{ id }}/>
        </div>
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
