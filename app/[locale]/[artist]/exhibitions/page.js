"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Exhibitions from '/app/[locale]/components/Exhibitions';

export default function ExhibitionsPage() {
  const { artist } = useParams();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Exhibitions artist={artist} />
      </div>
      <Footer />
    </div>
  );
}
