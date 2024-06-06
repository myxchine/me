import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-white h-[80px] bg-opacity-90 text-black border-b  border-gray-300 p-4 md:px-4 flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm">
      <div className="space-y-1">
        <h3 className="text-xl font-bold md:hidden block">DUALITY</h3>
        <h3 className="text-xl font-bold hidden md:block">
          CONTENT MANAGEMENT SYSTEM
        </h3>
      </div>
      <div className=" md:hidden">
        <MdAccountCircle className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
