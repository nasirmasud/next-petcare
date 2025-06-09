import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import previewImage from "../../../public/PCC.jpg";

export default function Home() {
  return (
    <main className='bg-[#0691408e] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10'>
      <Image
        src={previewImage}
        alt='Preview of Next petCare'
        width={520}
        height={470}
        priority
        className='rounded-md border-4 border-amber-500'
      />
      <div>
        <Logo />
        <h1 className='text-3xl font-bold text-center text-slate-900 mt-10'>
          Welcome to Pet Care
        </h1>
        <p className='text-center'>
          Your one-stop solution for all your pet care needs.
        </p>
        <div className='mt-10 space-x-3'>
          <Button asChild>
            <Link href='/signup'>Get Started</Link>
          </Button>
          <Button asChild variant='secondary'>
            <Link href='/signin'>Log In</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
