"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/src/lib/nav.lib";


export function MainNav() {
  return (
    <div className=" mx-10 hidden md:flex justify-between w-full">
      <Link href={"/"} className="flex items-center space-x-6 text-md font-medium">
        <Image
          src={"/resources/formal.jpeg"}
          alt="Enrique Piedra"
          width={60}
          height={60}
          className=" rounded-full"
        />
        <span className=" hover:text-indigo-500">Enrique Piedra</span>
      </Link>
      <nav className="flex items-center space-x-6 text-md font-medium">
        {navItems.map((item) => (
          <Link
            key={`${item.name}`} href={item.link} className=" hover:text-indigo-500"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}