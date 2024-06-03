const Nav = () => {
  return (
    <nav className="">
      <ul className=" space-x-6 flex justify-between items-center text-sm uppercase">
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
  );
};

export default Nav;
