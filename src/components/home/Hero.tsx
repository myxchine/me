import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 pb-0 md:pb-4 md:pt-0 max-w-[1600px] mx-auto">
      <Image
        src="/images/hero.webp"
        alt="hero"
        width={700}
        quality={50}
        height={500}
        placeholder="empty"
        className="h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover md:pb-4"
        priority
      />

      <div className="w-full text-center space-y-4 p-4">
        <h1 className="text-2xl font-bold">BRINGING SPEED & EFFIECENCY</h1>
        <p className="text-sm px-4 text-center text-black text-opacity-50">
          The digital commerce solution you've been looking for
        </p>

        <div className="flex space-x-4 items-center justify-center  w-full p-4">
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
