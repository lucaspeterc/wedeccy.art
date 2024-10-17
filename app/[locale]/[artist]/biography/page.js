import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Biography from '/app/[locale]/components/Biography';

export default function BiographyPage({ params }) {
  const { artist, locale } = params;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
      <Biography artist={artist} locale={locale} />
      </div>
      <Footer />
    </div>
  );
}
