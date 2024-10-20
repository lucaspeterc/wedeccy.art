import Link from "next/link";

export default function Exhibitions({ artist }) {
  // Common exhibition as a link
  const commonExhibition = (artist) => ({
    name: "Rodzinna sztuka Matka i Syn - Wanda Wedecka Stanisław Maria Wedecki, 101 Projekt Galeria Sztuki Współczesnej i Dom Aukcyjny, 2024",
    href: `/${artist}/rodzinna-sztuka`
  });

  // Reverse the exhibition lists for Wanda and Stanisław
  const wandaExhibitions = [
    "Wystawa Młodej Plastyki, Arsenał 1955 r.",
    "Wystawa Malarstwa XV-lecie PRL Warszawa 1961 r.",
    "I Festiwal Malarstwa Współczesnego, Szczecin 1962 r.",
    "Warszawa w Sztuce 1962 r., 1964 r.",
    "Warszawa 1958 r., Toruń 1959 r., Warszawskie Zakłady Pracy 1960 r., 1963 r.",
    "Warszawa Kordegarda 1964 r., Toruń 1965 r., Płock 1966 r.",
    "Aula Uniwersytecka Gandawa 1967 r., Galeria d’Art. Tamara Pfeiffer Bruksela 1968 r."
  ].reverse(); // Reversed order

  const stanExhibitions = [
    "Wystawa grafiki ASP Warszawa Ursus 1975 r.",
    "Wystawa „Debiuty 77” Warszawa 1977 r.",
    "Sztuka młodego pokolenia Warszexpo 79 Warszawa 1979 r.",
    "Galeria Sztuki Współczesnej w Staromiejskim Domu Kultury Warszawa 1980 r.",
    "Galeria Eppendorf Hamburg 1983 r.",
    "Galeria Witteker Düsseldorf 1985 r., 1986 r., 1988 r.",
    "Galeria Raum und Kunst Hamburg 1986 r.",
    "Centrum Sztuki Glinde/Hamburg 1990 r.",
    "Wystawa „Statek Marzeń Ziemia”, Hamburg, Hanover, Dusseldorf, Berlin, Moskwa 1990/1991 r."
  ].reverse(); // Reversed order

  return (
    <section className="my-10">
      {/* Wanda's Exhibitions */}
      {artist === 'wanda' && (
        <>
          <h2 className="text-4xl mb-4">Exhibitions for Wanda</h2>
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
          <h2 className="text-4xl mb-4">Exhibitions for Stanisław</h2>
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
    </section>
  );
}
