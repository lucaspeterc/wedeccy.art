"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Biography from '/app/[locale]/components/Biography';

export default function BiographyPage() {
  const { artist } = useParams();  // Dynamically gets 'wanda' or 'stan'

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Biography artist={artist} />
      </div>
      <Footer />
    </div>
  );
}
