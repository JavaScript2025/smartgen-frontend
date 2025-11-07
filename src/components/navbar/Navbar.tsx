import { Link } from "react-router-dom";
import logo from "../../utils/imgs/logo/logo.svg";

function Navbar() {
  return (
    <div className="w-full bg-[#FFFAFA] text-white">
<div className="container mx-auto px-4 py-2 flex h-14 items-center justify-between">
        <Link to="/home" aria-label="SmartGen - Home" className="shrink-0"><img src={logo} alt="Logo" className="w-25 h-25" /></Link>

        <nav className="flex gap-6 text-gray-500">
          <Link to="/empresas" className="hover:underline">Empresas</Link>
          <Link to="/categorias" className="hover:underline">Categorias</Link>
          <Link to="/dev" className="hover:underline">Desenvolvedores</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
