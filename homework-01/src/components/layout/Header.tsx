
import Image from "next/image";
import { MainNav } from "./MainNavbar";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b py-2 bg-black backdrop-blur text-white">
            <div className="container flex justify-between h-14 items-center">
                <MainNav />
            </div>
        </header>
    );
}