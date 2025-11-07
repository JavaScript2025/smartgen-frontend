import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import DeletarEmpresa from "./components/empresa/deletarEmpresa/DeletarEmpresa";
import FormEmpresa from "./components/empresa/formEmpresa/FormEmpresa";
import ListaPostagens from "./components/empresa/listaEmpresas/ListaEmpresas";

import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formCategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listaCategorias/ListaCategorias";

import Home from "./pages/home/Home";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* Categorias (Categoria) */}
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />

            {/* Empresas (Empresa) */}
            <Route path="/empresas" element={<ListaPostagens />} />
            <Route path="/cadastrarEmpresa" element={<FormEmpresa />} />
            <Route path="/editarEmpresa/:id" element={<FormEmpresa />} />
            <Route path="/deletarEmpresa/:id" element={<DeletarEmpresa />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
