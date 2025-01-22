"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Store ({ artist, locale }) {
  const { t } = useTranslation('store', { locale });

  const [paintings, setPaintings] = useState([]);

  // Fetch paintings data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/paintingStore.json');
        const data = await response.json();

        // Sort paintings based on the artist parameter
        const sortedPaintings = data.sort((a, b) => {
          if (artist === 'stan') {
            if (a.artist.includes('Stanislaw') && !b.artist.includes('Stanislaw')) {
              return -1;
            } else if (!a.artist.includes('Stanislaw') && b.artist.includes('Stanislaw')) {
              return 1;
            }
          } else if (artist === 'wanda') {
            if (a.artist.includes('Wanda') && !b.artist.includes('Wanda')) {
              return -1;
            } else if (!a.artist.includes('Wanda') && b.artist.includes('Wanda')) {
              return 1;
            }
          }
          return 0;
        });

        setPaintings(sortedPaintings);
      } catch (error) {
        console.error('Error fetching paintings:', error);
      }
    };

    fetchData();
  }, [artist]);

  const router = useRouter();
  const handleProductClick = (painting) => {
    console.log('Routing Debug:');
    console.log('Locale:', locale);
    console.log('Artist:', artist);
    console.log('Painting ID:', painting.id);

    if (!locale) {
      console.error('Error: Locale is undefined.');
    }
    if (!artist) {
      console.error('Error: Artist is undefined.');
    }
    if (!painting.id) {
      console.error('Error: Painting ID is undefined.');
    }

    if (locale && artist && painting.id) {
      router.push(`/${locale}/${artist}/paintings/${painting.id}`);
    } else {
      console.error('Routing aborted due to missing parameters.');
    }
  };

  const stanPaintings = paintings.filter((painting) =>
    painting.artist.includes('Stanislaw')
  );
  const wandaPaintings = paintings.filter((painting) =>
    painting.artist.includes('Wanda')
  );

  const topArtist = artist === 'wanda' ? wandaPaintings : stanPaintings;
  const bottomArtist = artist === 'wanda' ? stanPaintings : wandaPaintings;

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 sm:py-36 lg:px-8">
        {topArtist === wandaPaintings && (
          <>
            <h2 className="text-3xl font-bold tracking-tight text-white">Wanda Wedecka</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {wandaPaintings.map((painting) => (
                <div key={painting.id} className="group relative">
                  <Image
                    alt={painting.imageAlt}
                    src={painting.imageSrc}
                    width={600}
                    height={800}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    onClick={() => handleProductClick(painting)}
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        <a
                          href={painting.href}
                          style={{ pointerEvents: 'none' }}
                        >
                          <span aria-hidden="true" className="absolute inset-0" />
                          {painting.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-white">
                        {painting.artist}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {painting.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {topArtist === stanPaintings && (
          <>
            <h2 className="text-3xl font-bold tracking-tight text-white">Stanislaw Maria Wedecki</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {stanPaintings.map((painting) => (
                <div key={painting.id} className="group relative">
                  <Image
                    alt={painting.imageAlt}
                    src={painting.imageSrc}
                    width={600}
                    height={800}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    onClick={() => handleProductClick(painting)}
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        <a
                          href={painting.href}
                          style={{ pointerEvents: 'none' }}
                        >
                          <span aria-hidden="true" className="absolute inset-0" />
                          {painting.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-white">
                        {painting.artist}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {painting.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {bottomArtist === wandaPaintings && (
          <>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-12">Wanda Wedecka</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {wandaPaintings.map((painting) => (
                <div key={painting.id} className="group relative">
                  <Image
                    alt={painting.imageAlt}
                    src={painting.imageSrc}
                    width={600}
                    height={800}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    onClick={() => handleProductClick(painting)}
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        <a
                          href={painting.href}
                          style={{ pointerEvents: 'none' }}
                        >
                          <span aria-hidden="true" className="absolute inset-0" />
                          {painting.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-white">
                        {painting.artist}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {painting.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {bottomArtist === stanPaintings && (
          <>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-12">Stanislaw Maria Wedecki</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {stanPaintings.map((painting) => (
                <div key={painting.id} className="group relative">
                  <Image
                    alt={painting.imageAlt}
                    src={painting.imageSrc}
                    width={600}
                    height={800}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    onClick={() => handleProductClick(painting)}
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        <a
                          href={painting.href}
                          style={{ pointerEvents: 'none' }}
                        >
                          <span aria-hidden="true" className="absolute inset-0" />
                          {painting.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-white">
                        {painting.artist}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {painting.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
