import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 pb-0 md:pb-4  max-w-[1100px] mx-auto md:py-8">
      <Image
        src="/imagens/shiba/home/portrait.jpg"
        alt="hero"
        width={400}
        quality={50}
        height={400}
        className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover md:pb-4"
        priority
      />

      <div className="w-full text-center space-y-4 p-4">
        <h1 className="text-xl font-bold">
          INSPIRADO EM CABRAS DESENHADO PARA PILOTOS
        </h1>

        <div className="flex space-x-4 items-center justify-center  w-full p-4">
          <Link href="/home/store">
            <button className="border border-black bg-black p-2 w-[120px] text-sm text-white hover:bg-white hover:text-black">
              SHOP
            </button>
          </Link>
          <Link href="/home/about">
            <button className="border border-black p-2 px-6 w-[120px] text-sm hover:bg-black hover:text-white">
              SOBRE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
