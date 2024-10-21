import Link from "next/link";
import initTranslations from '/app/i18n.js';

export default async function Exhibitions({ locale, artist }) {
  const { t } = await initTranslations(locale, ['exhibitions']);

  // Common exhibition as a link
  const commonExhibition = (artist) => ({
    name: t('common_exhibition'),
    href: `/${artist}/rodzinna-sztuka`
  });

  // Wanda's Exhibitions
  const wandaExhibitions = [
    t('ex1'), // "Wystawa Młodej Plastyki, Arsenał 1955 r."
    t('ex2'), // "Wystawa Malarstwa XV-lecie PRL Warszawa 1961 r."
    t('ex3'), // "I Festiwal Malarstwa Współczesnego, Szczecin 1962 r."
    t('ex4'), // "Warszawa w Sztuce 1962 r., 1964 r."
    t('ex5'), // "Warszawa 1958 r., Toruń 1959 r., Warszawskie Zakłady Pracy 1960 r., 1963 r."
    t('ex6'), // "Warszawa Kordegarda 1964 r., Toruń 1965 r., Płock 1966 r."
    t('ex7')  // "Aula Uniwersytecka Gandawa 1967 r., Galeria d’Art. Tamara Pfeiffer Bruksela 1968 r."
  ].reverse();

  // Stanisław's Exhibitions
  const stanExhibitions = [
    t('ex8'),  // "Wystawa grafiki ASP Warszawa Ursus 1975 r."
    t('ex9'),  // "Wystawa „Debiuty 77” Warszawa 1977 r."
    t('ex10'), // "Sztuka młodego pokolenia Warszexpo 79 Warszawa 1979 r."
    t('ex11'), // "Galeria Sztuki Współczesnej w Staromiejskim Domu Kultury Warszawa 1980 r."
    t('ex12'), // "Galeria Eppendorf Hamburg 1983 r."
    t('ex13'), // "Galeria Witteker Düsseldorf 1985 r., 1986 r., 1988 r."
    t('ex14'), // "Galeria Raum und Kunst Hamburg 1986 r."
    t('ex15'), // "Centrum Sztuki Glinde/Hamburg 1990 r."
    t('ex16')  // "Wystawa „Statek Marzeń Ziemia”, Hamburg, Hanover, Dusseldorf, Berlin, Moskwa 1990/1991 r."
  ].reverse();

  const auctions = [
    {
      date: '23.09.2024',
      auctionHouse: '101 Project',
      sold: [
        t('auction.phantasmagoria'),
        t('auction.nostalgia'),
      ]
    },
    {
      date: '09.10.2024',
      auctionHouse: 'Sopocki Dom Aukcyjny',
      sold: [
        t('auction.maestro'),
        t('auction.red_tulip'),
      ]
    }
  ];

  return (
    <section className="py-60">
      {/* Wanda's Exhibitions */}
      {artist === 'wanda' && (
        <>
          <h2 className="text-4xl mb-4">{t('wanda_exhibitions_title')}</h2>
          <ul className="list-disc text-3xl pl-5">
            {/* Link at the top */}
            <li>
              <Link href={commonExhibition(artist).href}>
                <div className="text-yellow-600 hover:underline">
                  {commonExhibition(artist).name}
                </div>
              </Link>
            </li>
            {/* Wanda's reversed exhibitions */}
            {wandaExhibitions.map((exhibition, index) => (
              <li key={index}>{exhibition}</li>
            ))}
          </ul>
        </>
      )}

      {/* Stanisław's Exhibitions */}
      {artist === 'stan' && (
        <>
          <h2 className="text-4xl mb-4">{t('stan_exhibitions_title')}</h2>
          <ul className="list-disc text-3xl pl-5">
            {/* Link at the top */}
            <li>
              <Link href={commonExhibition(artist).href}>
                <div className="text-yellow-600 hover:underline">
                  {commonExhibition(artist).name}
                </div>
              </Link>
            </li>
            {/* Stanisław's reversed exhibitions */}
            {stanExhibitions.map((exhibition, index) => (
              <li key={index}>{exhibition}</li>
            ))}
          </ul>
        </>
      )}

      {/* Auction Section */}
      <section className="mt-10">
        <h2 className="text-4xl mb-4">{t('auctions_title')}</h2>
        {auctions.map((auction, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold">{t('auction_house', { house: auction.auctionHouse, date: auction.date })}</h3>
            <p>{t('sold')}</p>
            <ul className="list-disc text-2xl pl-5">
              {auction.sold.map((artwork, idx) => (
                <li key={idx}>{artwork}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
}