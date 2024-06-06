import Link from "next/link";

interface MobileMenuProps {
  handleClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleClose }) => {
  return (
    <div className="h-screen w-screen fixed top-[41px] left-0 z-50 bg-white bg-opacity-100 backdrop-blur">
      <nav className="p-4 pl-8">
        <ul className="space-y-6">
          <li onClick={handleClose}>
            <Link href="/home">Home</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/home/store">Loja</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/home/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
