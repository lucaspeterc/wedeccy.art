"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '/app/components/Navbar';
import Footer from '/app/components/Footer';
import Exhibitions from '/app/components/Exhibitions';

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
