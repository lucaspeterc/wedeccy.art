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
            <Image src={WandaProfile} alt="Wanda" className="h-96 w-96 my-4 mx-4 object-cover shadow-[8px_8px_0px] shadow-white hover:shadow-yellow-100" />
            <h2 className="text-2xl text-center mt-6 hover:text-yellow-500">Wanda Wedecka</h2>
          </div>
        </Link>
        <Link href="/stan">
          <div>
            <Image src={StanProfile} alt="Stan" className="h-96 w-96 my-4 mx-4 object-cover shadow-[8px_8px_0px] shadow-white hover:shadow-yellow-100" />
            <h2 className="text-2xl text-center mt-6 hover:text-yellow-500">Stanisław Maria Wedecki</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
