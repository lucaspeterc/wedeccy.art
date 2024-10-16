import Image from "next/image";
import Link from "next/link";
import StanProfile from "/public/images/stan/stanProfile.png"
import WandaProfile from "/public/images/wanda/wandaProfile.png"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">Select an Artist</h1>
      <div className="flex gap-10">
        <Link href="/wanda">
          <div>
            <Image src={WandaProfile} alt="Wanda" className="h-64 w-64 object-cover" />
            <h2 className="text-xl text-center mt-2">Wanda Wedecka</h2>
          </div>
        </Link>
        <Link href="/stan">
          <div>
            <Image src={StanProfile} alt="Stan" className="h-64 w-64 object-cover" />
            <h2 className="text-xl text-center mt-2">Stanisław Maria Wedecki</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
