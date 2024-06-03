const MobileMenu = () => {
  return (
    <div className="h-screen w-screen fixed top-[41px] left-0 z-50 bg-white bg-opacity-100 backdrop-blur">
      <nav className="p-4 pl-8">
        <ul className=" space-y-6">
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li className="">
            <a href="#about">Portfolio</a>
          </li>
          <li className="">
            <a href="#services">About</a>
          </li>
          <li className="">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
