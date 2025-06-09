import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import HeaderPattern from "@/components/HeaderPattern";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPattern />
      <div className='flex flex-col min-h-screen mx-auto px-4'>
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
