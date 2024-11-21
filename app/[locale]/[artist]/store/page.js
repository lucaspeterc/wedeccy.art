import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import TranslationsProvider from '/app/[locale]/components/TranslationsProvider.js';
import initTranslations from '/app/i18n';

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
      <Navbar artist={artist} locale={locale} />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-center text-5xl text-white">Pracujemy nad sklepem online z obrazami artystów</h1>
        </div>
      <Footer artist={artist} locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
