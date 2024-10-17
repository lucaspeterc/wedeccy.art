"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '/app/[locale]/components/Navbar';
import Footer from '/app/[locale]/components/Footer';
import Portfolio from '/app/[locale]/components/Portfolio';

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
