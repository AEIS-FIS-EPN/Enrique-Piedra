import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-black text-white flex flex-col justify-center items-center">
            <div className="flex justify-center items-center py-2 border-b-[1px] border-white w-[80%]">
                <a href="mailto:enrique_piedra2001@hotmail.com" className="mr-8">
                    <Image
                        src="/resources/icons8-nuevo-post.png"
                        alt="Email"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="https://www.linkedin.com/in/enrique-piedra-romero-414996275">
                    <Image
                        src="/resources/icons8-linkedin.png"
                        alt="LinkedIn"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
            <div className="text-center py-2">
                <p className="text-sm">© {new Date().getFullYear()} Enrique Piedra</p>
            </div>
        </footer>
    )
}
