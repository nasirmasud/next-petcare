"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const routs = [
  { label: "Dashboard", path: "/app/dashboard" },
  { label: "Account", path: "/app/account" },
];

export default function AppHeader() {
  const activePathName = usePathname();

  return (
    <header className='flex items-center justify-between p-4 border-b-2 border-gray-800 px-10'>
      <Logo />
      <nav>
        <ul className='flex space-x-4'>
          {routs.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-white/70  rounded-md px-2 py-1 hover:text-white focus:text-white transition",
                  { "bg-black/10 text-white": activePathName === route.path }
                )}
                href={route.path}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
