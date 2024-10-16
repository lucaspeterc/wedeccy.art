"use client";

import { useParams } from 'next/navigation'; // Correct hook to use for dynamic route parameters in Next.js 14
import { Navbar } from '/app/components/Navbar';
import { Biography } from '/app/components/Biography';
import { Portfolio } from '/app/components/Portfolio';
import { Exhibitions } from '/app/components/Exhibitions';

export default function ArtistPage() {
  const { artist } = useParams();  // Extract the 'artist' parameter from the dynamic route

  return (
    <div>
      <Navbar artist={artist} />
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl text-center mb-8">
          {artist === 'wanda' ? 'Wanda’s Work' : 'Stan’s Work'}
        </h1>
      </main>
    </div>
  );
}
