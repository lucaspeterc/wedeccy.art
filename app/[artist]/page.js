"use client";

import { useParams } from 'next/navigation'; // Correct hook to use for dynamic route parameters in Next.js 14
import { Navbar } from '/app/components/Navbar';
import Hero from '/app/components/Hero';
import Footer from '/app/components/Footer';
import Banner from '/app/components/Banner';

export default function ArtistPage() {
  const { artist } = useParams();  // Extract the 'artist' parameter from the dynamic route

  return (
    <div>
      <Banner />
      <Navbar artist={artist} />
      <main className="container mx-auto mt-8">
      </main>
      <Hero artist={artist}/>
      <Footer />
    </div>
  );
}
