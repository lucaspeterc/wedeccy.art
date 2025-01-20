import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Cart from '/app/[locale]/components/Cart';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';

const i18nNamespaces = ['navbar', 'footer', 'cart']; // Add relevant namespaces

export default async function CartPage({ params }) {
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
          <Cart artist={artist} locale={locale} />
        </div>
        <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
