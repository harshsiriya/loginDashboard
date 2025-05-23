import Image from "next/image";
import Link from 'next/link';
import firstpageImg from "./images/onlinebanking.png";
import graph from "./images/graph.png";

export default function Home() {
  return (
    <div className=" relative bg-[#EAF5EF] ">
      <div className="flex h-screen w-full">
        <div className="w-[65%] h-full relative">
          <Image src={firstpageImg} alt="firstpageImg" fill className="object-contain max-width-[100%] bg-contain absolute left-0" />
        </div>
        <div className=" w-[30%] h-full flex flex-col items-center justify-center">
          <div className="flex items-center">
            <h1 className="text-6xl">Browse All</h1>
            <Image src={graph} alt="graph" width={100} height={100} />
          </div>
          <p className="text-justify text-xl font-light mt-3 p-8">From easy money management, to travel perks and investments.Open your account in a flash</p>
          <Link href="/signup">
            <button className="bg-black rounded-2xl text-xl text-white p-2">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex items-center">
        <Link href="/login">
          <button className="border-1 bg-[#5B9F86]  text-white text-xl mr-2 p-2 rounded-xl cursor-pointer">Log In</button>
        </Link>
        <Link href="/signup">
        <button className="border-1 bg-[#5B9F86]  text-white text-xl mr-2 p-2 rounded-xl cursor-pointer">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
