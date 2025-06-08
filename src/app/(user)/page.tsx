import Logo from "@/components/logo";
import Image from "next/image";
import previewImage from "../../../public/PCC.jpg";

export default function Home() {
  return (
    <main className='bg-[#0f5b72] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10'>
      <Image
        src={previewImage}
        alt='Preview of Next petCare'
        width={520}
        height={470}
        priority
      />
      <div>
        <Logo />
        <h1 className='text-3xl font-bold text-center text-slate-900'>
          Welcome to Pet Care
        </h1>
        <p className='text-center text-slate-700'>
          Your one-stop solution for all your pet care needs.
        </p>
        <div>
          <button>SignUp</button>
        </div>
      </div>
    </main>
  );
}
