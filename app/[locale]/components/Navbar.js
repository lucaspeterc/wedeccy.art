'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useParams } from 'next/navigation';  // To get the artist dynamically from the URL
import LanguageChanger from './LanguageChanger';


export function Navbar() {
  const params = useParams();  // Get the artist from the URL
  const artist = params.artist;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Biography', href: `/${artist}/biography` },
    { name: 'Portfolio', href: `/${artist}/portfolio` },
    { name: 'Exhibitions', href: `/${artist}/exhibitions` },
    { name: 'Contact', href: `/${artist}/contact` },
  ];


  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href={`/`} className="text-2xl font-semibold leading-6 hover:text-yellow-600">
            {artist === 'wanda' ? "Wanda Wedecka" : "Stanisław Maria Wedecki"}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-yellow-600"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-2xl font-semibold leading-6 hover:text-yellow-600">
              {item.name}
            </a>
          ))}
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div> */}
        <LanguageChanger />

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-yellow-600"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
