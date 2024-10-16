"use client"

import { Navbar } from '/app/components/Navbar';
import Footer from '/app/components/Footer';
import { useParams } from 'next/navigation';


export default function BiographyPage () {
const { artist } = useParams();  // Dynamically gets 'wanda' or 'stan'

return (
    <div>
      <h1>{artist === 'wanda' ? "Wanda's Biography" : "Stan's Biography"}</h1>
    </div>
  );
}