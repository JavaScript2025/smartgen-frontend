import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-[#FFFAFA] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <Link to="/home" className="text-2xl font-bold text-gray-500">SmartGen</Link>

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
