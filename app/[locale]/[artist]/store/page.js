"use client";

import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Store({ artist, locale }) {
  const { t } = useTranslation('store', { locale });

  const [paintings, setPaintings] = useState([]);

  // Fetch paintings data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/painting.json');
        const data = await response.json();
        setPaintings(data);
      } catch (error) {
        console.error('Error fetching paintings:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar artist={artist} locale={locale} />
      <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 sm:py-36 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {t('store:paintings_collection')}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {paintings.map((painting) => (
            <div key={painting.id} className="group relative">
              <Image
                alt={painting.imageAlt}
                src={painting.imageSrc}
                width={600}
                height={800}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white">
                    <a href={painting.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {painting.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white">{painting.artist}</p>
                </div>
                {/* <p className="text-sm font-medium text-white">
                  {painting.price}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer artist={artist} locale={locale} />
    </div>
  );
}
