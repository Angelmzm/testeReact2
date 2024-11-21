import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdmMainPage from "./pages/admMainPage";
import LoginPage from "./pages/loginPage";
import CadastroPage from "./pages/cadastroPage";
import LancamentoPage from "./pages/lancamentoPage";
import MaisVendidosPage from "./pages/maisVendidosPage";
import MaquiagemPage from "./pages/maquiagemPage";
import UnhasPage from "./pages/unhasPage";
import CabeloPage from "./pages/cabeloPage";
import PerfumePage from "./pages/perfumePage";
import ProdutoPage from "./pages/produtoPage";
import AdmProdutoPage from "./pages/admProdutoPage";
import MainPage from "./pages/mainPage";
import CarrinhoPage from "./pages/carrinhoPage";


function App() {
  return (
      <Routes>
        
        <Route path="/testeReact2" element={<MainPage />} />
        <Route path="/testeReact2/admMainPage" element={<AdmMainPage />} />
        <Route path="/testeReact2/loginPage" element={<LoginPage />} />
        <Route path="/testeReact2/cadastroPage" element={<CadastroPage />} />
        <Route path="/testeReact2/lancamentoPage" element={<LancamentoPage />} />
        <Route path="/testeReact2/maisVendidosPage" element={<MaisVendidosPage />} />
        <Route path="/testeReact2/maquiagemPage" element={<MaquiagemPage />} />
        <Route path="/testeReact2/unhasPage" element={<UnhasPage />} />
        <Route path="/testeReact2/cabeloPage" element={<CabeloPage />} />
        <Route path="/testeReact2/perfumePage" element={<PerfumePage />} />
        <Route path="/testeReact2/produtoPage/:id" element={<ProdutoPage />} />
        <Route path="/testeReact2/admProdutoPage/:id" element={<AdmProdutoPage />} />
        <Route path="/testeReact2/carrinhoPage" element={<CarrinhoPage />} />
        
      </Routes>
  );
}

export default App;
