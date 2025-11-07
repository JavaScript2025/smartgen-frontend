import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import DeletarPostagem from "./components/postagem/deletarpostagem/DeletarPostagem";
import FormPostagem from "./components/postagem/formpostagem/FormPostagem";
import ListaPostagens from "./components/postagem/listapostagens/ListaPostagens";

import DeletarTema from "./components/tema/deletartema/DeletarTema";
import FormTema from "./components/tema/formtema/FormTema";
import ListaTemas from "./components/tema/listatemas/ListaTemas";

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

            {/* Categorias (Tema) */}
            <Route path="/categorias" element={<ListaTemas />} />
            <Route path="/cadastrarCategoria" element={<FormTema />} />
            <Route path="/editarCategoria/:id" element={<FormTema />} />
            <Route path="/deletarCategoria/:id" element={<DeletarTema />} />

            {/* Empresas (Postagem) */}
            <Route path="/empresas" element={<ListaPostagens />} />
            <Route path="/cadastrarEmpresa" element={<FormPostagem />} />
            <Route path="/editarEmpresa/:id" element={<FormPostagem />} />
            <Route path="/deletarEmpresa/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
