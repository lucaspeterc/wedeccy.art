import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import stan1 from "/public/images/stan/personal/stan1.png";
import stan2 from "/public/images/stan/personal/stan2.png";
import stan3 from "/public/images/stan/personal/stan3.png";
import stan4 from "/public/images/stan/personal/stan4.png";
import stan5 from "/public/images/stan/personal/stan5.png";
import stan6 from "/public/images/stan/personal/stan6.png";
import stan7 from "/public/images/stan/personal/stan7.png";
import stan8 from "/public/images/stan/personal/stan8.png";
import stan9 from "/public/images/stan/personal/stan9.png";
import stan10 from "/public/images/stan/personal/stan10.png";
import stan11 from "/public/images/stan/personal/stan11.png";
import stan12 from "/public/images/stan/personal/stan12.png";
import stan13 from "/public/images/stan/personal/stan13.png";
import stan14 from "/public/images/stan/personal/stan14.png";
import stan15 from "/public/images/stan/personal/stan15.png";


export default function Biography({ artist }) {
  return (
    <section className="my-10">
      {/* Example for Wanda's biography */}
      {artist === 'wanda' && (
        <>
          <h2 className="text-2xl mb-4">Wanda Early Life</h2>
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

        {/* pictures */}

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan3}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan4}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan15}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan14}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

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

         {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan1}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan2}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan5}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan6}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div><div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan7}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

        {/* memories */}
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

        {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan8}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan9}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

         {/* memories two */}

         <div className="mt-10 max-w-2xl">
          <p>
          Stanisława poznałem na kółkach plastycznych, gdzie w tamtych czasach spotykała się młodzież chcąca zdawać na Akademię Sztuk Pięknych. Potem to już wspaniały czas, czas studiów na Akademii i chęć zdobywania świata. Gdzieś w połowie studiów założyliśmy wspólny tzw. własny interes i zajęliśmy się sitodrukiem. Drukowaliśmy różne rzeczy, niekoniecznie legalne dla ówczesnej władzy.</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Z końcem lat 70-tych były kłopoty z zakupem odpowiednich materiałów i farb do sitodruku. W celu ich pozyskiwania wyjeżdżałem do Austrii i tak stan wojenny — 13 grudnia tam mnie zastaje. Z dużą ilością farb zostaję w Wiedniu. Po jakimś czasie dojeżdża do mnie Stanisław i mieszkamy razem w mieszkaniu mojej świętej pamięci partnerki Heleny, która była pianistką. Artystyczna atmosfera domu, spotkania z muzykami i artystami wpłynęły na mnie i na Stanisława bardzo twórczo. W tym czasie obydwaj rysowaliśmy i malowaliśmy całymi dniami. Potem Stanisław wyjechał do Niemiec.</p>
        </div>
        <p className="text-base mt-6 font-semibold leading-7 text-white">Jan Maria Tomaszewski</p>

         {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan11}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan12}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

        {/* memories three */}

        <div className="mt-10 max-w-2xl">
          <p>
          Stasia poznałem około 1969 roku (czas Woodstocku), mieliśmy wówczas po 18 lat. Czasami spotykaliśmy się u niego w domu, gdzie pracownię malarską miała jego mama. Zapraszaliśmy tam ładne dziewczyny ze szkoły plastycznej w Łazienkach Królewskich, ja robiłem zdjęcia (opanowałem już wówczas arkana fotografii dosyć dobrze) w interesującej scenografii wśród sztalug z obrazami i antycznych mebli. Efekty były fantastyczne. Pamiętam, że raz mało tego nie przypłaciłem życiem, kiedy schowany w starej skrzyni zostałem przez Stasia zaatakowany szablą. Na szczęście skończyło się tylko lekkim draśnięciem.</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Staś był osobą niezwykle uroczą, lubił żartować, ale był też mocno roztargniony (artysta). Wspominam, jak byliśmy w kilka osób w kawiarni Europejska w Zakopanem, każdy z nas coś tam zamówił — kawę, coca-colę etc. Staś zamówił herbatę, wrzucił cytrynę, posłodził i mówi: „Ale, kurwa, lura”, a on po prostu nie wrzucił torebki z herbatą. Takich sytuacji było multum.</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Kilka lat później organizowałem jesienny pokaz mody dla Domów Towarowych Centrum, zatrudniłem Stasia jako scenografa. Pokaz odbywał się w Teatrze Małym w Warszawie. Staś zabrał mnie do parku łazienkowskiego, kazał zbierać liście. Kiedy wyraziłem zdziwienie, powiedział: „Przecież to pokaz jesiennej kolekcji, obsypiemy deski teatru zżółkłymi liśćmi, zawiesimy parasole i koniec scenografii.” Efekt był niesamowity, jakbyśmy byli w prawdziwym parku, wszystkim się podobało, takie proste.</p>
        </div> 
        <div className="mt-10 max-w-2xl">
          <p>
          Po przeprowadzce do większej pracowni na Sadybie kontynuowaliśmy spotkania, a raczej huczne imprezy. Staś wówczas coraz więcej malował, ale ciągle nosił się z zamiarem wyjazdu z tego komunistycznego kraju. Pamiętam też, że byliśmy na koncercie Steve’a Wondera na Stadionie Dziesięciolecia — co za atmosfera! Staś mówił, że ten teren przed drugą wojną należał do jego ojca, ale niektórym to przeszkadzało.</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Ponownie spotkaliśmy się już w Hamburgu w 1984 roku. Staś zaprosił mnie z moją ówczesną żoną do domu, przedstawił swojej żonie Heldze, i tak spędziliśmy wiele niezwykle sympatycznych chwil. Staś pokazał nam Hamburg, był wręcz dumny, że mieszka w tym industrialnym mieście. Pływaliśmy stateczkiem po Łabie, a wieczorem zabrał mnie do St. Pauli, żeby pokazać dzielnicę rozpusty — nie do pomyślenia w krajach Europy Wschodniej.</p>
        </div>
        <div className="mt-10 max-w-2xl">
          <p>
          Trudno jest opowiedzieć dużo więcej w takim krótkim wspomnieniu, ale chcę jeszcze powiedzieć, że był osobą bardzo ciekawą, bardzo uroczą i ogromnie zdolną. Im jestem starszy, tym bardziej „czytam” jego magiczne obrazy. Szkoda, że go już nie ma wśród nas i niczego więcej już nie namaluje.</p>
        </div>
        <p className="text-base mt-6 font-semibold leading-7 text-white">Michał Gutt</p>

          {/* pictures */}

         <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan10}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="w-full overflow-hidden rounded-sm bg-gray-200 group-hover:opacity-75">
              <Image
                alt="Image 1"
                src={stan13}
                width={600}
                height={800}
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  description
                </h3>
              </div>
            </div>
          </div>
         </div>

      </div>

      </div>
        </>
      )}
    </section>
  );
}
