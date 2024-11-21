export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="#">
          <strong className="font-semibold">Rodzinna Sztuka - Matka i Syn</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Relacja z wystawy w dniu 6.11.2024 Dom Volvo ul. Puławska 558/560 jest juz dostępna na stronie!
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        {/* <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
        </button> */}
      </div>
    </div>
  )
}
