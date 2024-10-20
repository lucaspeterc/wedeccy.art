export default function Exhibitions({ artist }) {
    return (
      <section className="my-10">
        {/* Example for Wanda's Exhibitions */}
        {artist === 'wanda' && (
          <>
            <h2 className="text-4xl mb-4">Exhibitions for Wanda</h2>
            <ul className="list-disc text-3xl pl-5">
            <li>Wystawa Młodej Plastyki, Arsenał 1955 r.</li>
            <li>Wystawa Malarstwa XV-lecie PRL Warszawa 1961 r.</li>
            <li>I Festiwal Malarstwa Współczesnego, Szczecin 1962 r.</li>
            <li>Warszawa w Sztuce 1962 r., 1964 r.</li>
            <li>Warszawa 1958 r., Toruń 1959 r., Warszawskie Zakłady Pracy 1960 r., 1963 r.</li>
            <li>Warszawa Kordegarda 1964 r., Toruń 1965 r., Płock 1966 r.</li>
            <li>Aula Uniwersytecka Gandawa 1967 r., Galeria d’Art. Tamara Pfeiffer Bruksela 1968 r.</li>
          </ul>
          </>
        )}
  
        {/* Example for Stanisław's Exhibitions */}
        {artist === 'stan' && (
          <>
            <h2 className="text-4xl mb-4">Exhibitions for Stanisław</h2>
            <ul className="list-disc text-3xl pl-5">
            <li>Wystawa grafiki ASP Warszawa Ursus 1975 r.</li>
            <li>Wystawa „Debiuty 77” Warszawa 1977 r.</li>
            <li>Sztuka młodego pokolenia Warszexpo 79 Warszawa 1979 r.</li>
            <li>Galeria Sztuki Współczesnej w Staromiejskim Domu Kultury Warszawa 1980 r.</li>
            <li>Galeria Eppendorf Hamburg 1983 r.</li>
            <li>Galeria Witteker Düsseldorf 1985 r., 1986 r., 1988 r.</li>
            <li>Galeria Raum und Kunst Hamburg 1986 r.</li>
            <li>Centrum Sztuki Glinde/Hamburg 1990 r.</li>
            <li>Wystawa „Statek Marzeń Ziemia”, Hamburg, Hanover, Dusseldorf, Berlin, Moskwa 1990/1991 r.</li>
          </ul>
          </>
        )}
      </section>
    );
  }
  