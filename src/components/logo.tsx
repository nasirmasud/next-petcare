import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icon.svg";

export default function Logo() {
  return (
    <Link href='/'>
      <Image src={logo} alt='NextPetCare Logo' height={48} width={48} />
    </Link>
  );
}
