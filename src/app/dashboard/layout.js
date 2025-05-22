import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.png'
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
   <div className="h-screen flex">
    
      <div className="w-[14%]  md:w-[8%] lg:w-[16%] p-4">
      <Link href="/"
      className="flex items-center justify-center lg:justify-start gap-2">
      <Image src={logo} alt="logo" width={32} height={32} className="rounded-[15px]"/>
      <span className="hidden lg:block"> Dashboard</span>
      </Link>
      <Menu/>
      </div>

      <div className="w-[86%]  md:w-[92%] lg:w-[84%] bg-[#F7F8FA] y-overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
