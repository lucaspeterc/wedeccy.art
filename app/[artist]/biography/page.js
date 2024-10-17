"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '/app/components/Navbar';
import Footer from '/app/components/Footer';
import Biography from '/app/components/Biography';

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
