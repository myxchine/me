import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 px-8 max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
      <Image
        src="/images/hero.webp"
        alt="hero"
        width={700}
        quality={50}
        height={500}
        placeholder="empty"
        className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover"
        priority
      />

      <div className="w-full text-center space-y-4 py-8">
        <h1 className="text-2xl font-bold">BRINGING SPEED & EFFIECENCY</h1>

        <div className="flex space-x-4 items-center justify-center  w-full">
          <Link href="/home/store">
            <button className="border border-black bg-black p-2 w-[120px] text-sm text-white hover:bg-white hover:text-black">
              SHOP
            </button>
          </Link>
          <Link href="/home/about">
            <button className="border border-black p-2 px-6 w-[120px] text-sm hover:bg-black hover:text-white">
              ABOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
