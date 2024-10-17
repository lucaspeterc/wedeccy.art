"use client";

import { useParams } from 'next/navigation'; // Correct hook to use for dynamic route parameters in Next.js 14
import { Navbar } from '/app/[locale]/components/Navbar';
import Hero from '/app/[locale]/components/Hero';
import Footer from '/app/[locale]/components/Footer';
import Banner from '/app/[locale]/components/Banner';

export default function ArtistPage() {
  const { artist } = useParams();  // Extract the 'artist' parameter from the dynamic route

  return (
    <div>
      <Banner />
      <Navbar artist={artist} />
      <Hero artist={artist}/>
      <Footer />
    </div>
  );
}
