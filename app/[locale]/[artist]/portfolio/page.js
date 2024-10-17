"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '/app/components/Navbar';
import Footer from '/app/components/Footer';
import Portfolio from '/app/components/Portfolio';

export default function PortfolioPage() {
  const { artist } = useParams();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Portfolio artist={artist} />
      </div>
      <Footer />
    </div>
  );
}
