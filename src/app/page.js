import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Login Here
      <br />
      <Link href="/login">
        <button className="border-1 border-amber-500 p-2 rounded-xl cursor-pointer">Login</button>
      </Link>
    </div>
  );
}
