import Image from "next/image";

export default function PetList() {
  return (
    <ul className='bg-white border-b border-black/[0.08]'>
      <li>
        <button className='flex w-full cursor-pointer px-3 text-base gap-3 py-2 items-center hover:bg-slate-300 focus:bg-slate-300 transition'>
          <Image
            src='/placeholder.jpg'
            alt='Pet Image'
            width={45}
            height={45}
            className='rounded-full object-cover'
          />
          <p className='font-semibold text-slate-900'>Benjamin</p>
        </button>
      </li>
    </ul>
  );
}
