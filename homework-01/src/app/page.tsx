import Image from "next/image";
import Header from "../components/layout/Header";
import { languagesItems, webProgrammingItems, mobileProgrammingItems, virtualRealityItems, frameworksItems, databasesItems, developerToolsItems } from "../lib/skills.lib";
import { CartSkill } from "../components/carts/CartSkill";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex items-center">
          <Image
            src="/resources/icons8-habilidad-de-desarrollo-100.png"
            alt="Enrique Piedra"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="ml-4">
            <p className="text-4xl font-bold">I'M</p>
            <p className="text-4xl font-bold text-indigo-500">ENRIQUE PIEDRA</p>
            <p className="text-lg">A developer who creates websites</p>
          </div>
        </div>
      </div>


      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 py-40" id="about-me">
        <p className=" text-4xl font-medium">About me</p>

        <p className=" text-lg w-[60%]">Hi! I am Enrique, a computer science engineer with a passion for web development. I try to create innovative and scalable solutions using JavaScript, React and Node.js. My goal is to contribute to the success of challenging projects while continuing to learn and grow professionally.</p>


        <div>
          <CartSkill title={"Programming Languages"} items={languagesItems} />
          <CartSkill title={"Web Programming"} items={webProgrammingItems} />
          <CartSkill title={"Mobile Programming"} items={mobileProgrammingItems} />
          <CartSkill title={"Virtual Reality"} items={virtualRealityItems} />
          <CartSkill title={"Frameworks"} items={frameworksItems} />
          <CartSkill title={"Databases"} items={databasesItems} />
          <CartSkill title={"Developer Tools"} items={developerToolsItems} />
        </div>

      </div>


      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-40" id="contact">
        <p className=" text-4xl font-medium">Contact</p>

        <p className="text-lg w-[60%]">
          I am open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, please do not hesitate to contact me.
        </p>
      </div>


      





    </div>


  );
}
