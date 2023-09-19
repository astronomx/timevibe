import React from "react";
import Link from "next/link";
import Dropdown from "@/components/elements/Dropdown";
import MyPopover from "@/components/elements/Popover";

export default function Navbar() {

    return(
    <nav className="flex items-center justify-between p-4 bg-white text-green-400 flex-wrap">
        <div className="sm:flex flex-row xl:flex items-center mr-6">
          <Link href="/">
            <p className="font-bold text-2xl">Stagelogboek</p>
          </Link>
          <div className="sm:flex justify-center ml-36 xl:hidden">
                <Dropdown />
            </div>
        </div>
          
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto" id="navbarResponsive">
          <div className="text-sm md:flex-grow xl:flex justify-center">
            <Link href="/">
              <p className="sm:hidden xl:flex px-6 py-2 hover:bg-slate-100 text-lg rounded-lg">Home</p>
            </Link>
        
            <Link href="/">
              <p className="sm:hidden xl:flex px-6 py-2 hover:bg-slate-100 text-lg rounded-lg">Logboek</p>
            </Link>
        
            <Link href="/">
              <p className="sm:hidden xl:flex px-6 py-2 hover:bg-slate-100 text-lg rounded-lg">Over ons</p>
            </Link>
          </div>
        </div> 

        <div className="text-sm items-center xl:flex flex-row mr-5">
            <div className="sm:flex flex-row items-center">
                <Link href="/">
                    <p className="block mr-2 rounded-lg">Log in</p>
                </Link>
                <p>|</p>
                <Link href="/">
                    <p className="block ml-2 rounded-lg">Registreer</p>
                </Link>
            </div>
        </div>
    </nav>
    )
}