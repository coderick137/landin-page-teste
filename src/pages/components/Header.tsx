import Image from "next/image";

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#1C2C44]">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo HVEX"
          width={80}
          height={80}
        />
      </div>
      <nav className="flex items-center">
        <a href="#" className="mr-4 text-lg font-medium text-white">Home</a>
        <a href="#" className="mr-4 text-lg font-medium text-white">About</a>
        <a href="#" className="mr-4 text-lg font-medium text-white">Contact</a>
      </nav>
    </header>
  )
}