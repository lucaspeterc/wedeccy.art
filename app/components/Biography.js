import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'


export default function Biography({ artist }) {
  return (
    <section className="my-10">
      {/* Example for Wanda's biography */}
      {artist === 'wanda' && (
        <>
          <h2 className="text-2xl mb-4">Wanda's Early Life</h2>
          <p>Wanda Wedecka urodziła się w 1919 roku w Homlu. Zmarła w 2011 roku w Warszawie.
          W latach 1945 – 1951 studiowała na Wydziale Sztuk Pięknych Uniwersytetu Mikołaja Kopernika w Toruniu pod kierunkiem Tymona Niesiołowskiego.
          </p>
          <img src="/images/wanda/earlyLife.png" alt="Wanda's Early Life" />
          <h2 className="text-2xl mb-4">Career Highlights</h2>
          <p>Brała udział w wystawach okręgowych i ogólnopolskich, m.in.:
          Wystawa Młodej Plastyki, Arsenał 1955 r.
          Wystawa Malarstwa XV-lecie PRL Warszawa 1961 r.
          I Festiwal Malarstwa Współczesnego, Szczecin 1962 r.
          Warszawa w Sztuce 1962 r., 1964 r.
          Wystawy indywidualne:
          Warszawa 1958 r., Toruń 1959 r., Warszawskie Zakłady Pracy 1960 r., 1963 r.
          Warszawa Kordegarda 1964 r., Toruń 1965 r., Płock 1966 r.
          Aula Uniwersytecka Gandawa 1967 r., Galeria d'Art. Tamara Pfeiffer Bruksela 1968 r.
          </p>
          <img src="/images/wanda/career.png" alt="Wanda's Career" />
        </>
      )}

      {/* Example for Stan's biography */}
      {artist === 'stan' && (
        <>
           <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-white">
        <p className="text-base font-semibold leading-7 text-yellow-600">Poznaj biografię artysty</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Stanisław Maria Wedecki</h1>
        <p className="mt-6 text-xl leading-8">
        Stanisław urodził się w 1951 roku w Bydgoszczy, zmarł w 2008 roku w Warszawie. Studiował grafikę na Akademii Sztuk Pięknych. Został mistrzem w pracowni plakatu prof. Henryka Tomaszewskiego. Ukończył jednak malarstwo na Akademii Sztuk Pięknych w pracowni prof. Henryka Chrostowskiego w Warszawie w roku 1976. Początkowo projektował plakaty dla Krajowej Agencji Wydawniczej oraz dla Federacji Polish Jazz, jednocześnie malując.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
          Stanisław Maria Wedecki przed wyjazdem z Polski (1982 r.) malował w kolorach raczej ciemnych (brązy, szarości, czerń) obrazy o tematyce bardzo pesymistycznej. Po ok. półrocznym pobycie w Wiedniu przeniósł się do Hamburga, gdzie na swojej wystawie w galerii poznał przyszłą swoją żonę Helgę Wachtmuth – Wedecką. Zmienia kompletnie swój styl malarski. Zaczyna malować w barwach bardziej optymistycznych (zieleń, błękity). Jego styl określają znawcy sztuki na surrealizm – (realizm magnetyczny). Jego obrazy cieszą się rosnącą popularnością w całych Niemczech. Zaczyna prezentować swoje obrazy na licznych wystawach i sprzedawać.
          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Stanisław Maria Wedecki przed wyjazdem z Polski (1982 r.) malował w kolorach raczej ciemnych (brązy, szarości, czerń) obrazy o tematyce bardzo pesymistycznej. Po ok. półrocznym pobycie w Wiedniu przeniósł się do Hamburga, gdzie na swojej wystawie w galerii poznał przyszłą swoją żonę Helgę Wachtmuth – Wedecką. Zmienia kompletnie swój styl malarski. Zaczyna malować w barwach bardziej optymistycznych (zieleń, błękity). Jego styl określają znawcy sztuki na surrealizm – (realizm magnetyczny). Jego obrazy cieszą się rosnącą popularnością w całych Niemczech. Zaczyna prezentować swoje obrazy na licznych wystawach i sprzedawać.
          </p>
        </div>
        <p className="text-base mt-6 font-semibold leading-7 text-yellow-600">Jak przyjaciele wspominają Staszka</p>
        {/* memories one */}
        <div className="mt-10 max-w-2xl">
          <p>
          Stasia Wedeckiego poznałem w ognisku plastycznym. Jakoś tak się złożyło, że natychmiast zaprzyjaźniliśmy się. Stasiek miał pięknego owczarka collie i często chodziliśmy z nim na spacery do Parku Saskiego. Kochał zwierzęta, to nas łączyło. Obaj dostaliśmy się na Akademię i byliśmy przez okres studiów na tym samym roku. Urządzaliśmy prywatki i bankiety, lataliśmy za dziewczynami i piliśmy hektolitry Patykiem Pisanego. Nasza młodość była, można powiedzieć, artystyczno-bankietowa. W pracowni prof. Tchórzewskiego malowaliśmy sztaluga w sztalugę. Z nami był Krzysiek Płóciennik, nasz serdeczny przyjaciel, i niemal codziennie zostawaliśmy po godzinach.          </p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Wtedy zaczynało się naprawdę malowanie. Konkurowaliśmy ze sobą, podziwialiśmy nawzajem nasze obrazy, ale to była fantastyczna rywalizacja, pozbawiona zazdrości. Każdy z nas malował inaczej. Przychodziło się i oglądało na początku, co namalował Krzysiek, co Stasiek, co ja. I widzieliśmy: „O kurczę, ale dał czadu, nie mogę być gorszy!” To niezwykle nas napędzało. Uwielbiałem to współzawodnictwo. Każdy z nas dawał z siebie wszystko i to przekładało się na jakość naszych obrazów. Potem Stasio wyjechał i kilka lat nie mieliśmy kontaktu. Wiedziałem, że maluje dużo, ale nic nie pokazywał, kiedy odwiedzał Warszawę. Bywał w Polsce coraz częściej, ale jego sztuka była dla nas, jego przyjaciół, niedostępna.</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Przyjaźniliśmy się do końca jego życia. Lubił przyjeżdżać do mnie do Podkowy i chyba był wzruszony, widząc mojego małoletniego syna. Bardzo go lubił. I to ciekawe, bo nigdy nie interesowały go dzieci, sam swoich nie miał, ale im był starszy, tym bardziej dzieci go poruszały. Gdy gruchnęła wiadomość o jego śmierci, wydawało nam się to niemożliwe, wręcz niedorzeczne. Przecież nie był stary, wszyscy byliśmy w jego wieku. Wtedy spotkaliśmy jego żonę Helgę, której przedtem nie udało nam się poznać. I wtedy, gdy Stasia już nie było między nami, wreszcie zobaczyliśmy jego malarstwo.</p>
        </div> <div className="mt-10 max-w-2xl">
          <p>
          Było to dla mnie porażające przeżycie. Nigdy czegoś takiego nie widziałem. Nostalgiczne, surrealistyczne pejzaże. Zamglone tajemnicze krajobrazy smutku i zadumy. Kształty wyobraźni w nastroju samotności i zamyślenia. Niesamowite malarstwo. I był tam jeden ostatni, niedokończony obraz. Zielonkawy pejzaż z parapetem, z zarysem jakby głowy. Może ducha. Wtedy pomyślałem, żeby dokończyć ten obraz. Za zgodą Helgi, w miejsce ducha namalowałem portret Stasia. Jestem szczęśliwy, że w ten sposób mogłem uhonorować mojego przyjaciela i wyrazić mu swój podziw i tęsknotę za naszymi wspólnymi latami.</p>
        </div>
        <p className="text-base mt-6 font-semibold leading-7 text-white">Roman Dmochowski</p>
      </div>
      </div>
        </>
      )}
    </section>
  );
}
