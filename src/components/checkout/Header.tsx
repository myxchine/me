import Link from "next/link";

const Header = () => {
  return (
    <header className="text-xl font-bold w-full h-[20px] max-w-4xl mx-auto">
      <Link href="/home">
        <div className="fixed top-0 left-0 p-4 w-full bg-white">DUALITY</div>
      </Link>
    </header>
  );
};

export default Header;
