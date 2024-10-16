import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/estado/SemEstado";
import { ComEstado } from "./pages/estado/ComEstado";
import { CampoTexto } from "./pages/estado/CampoTexto";
import { Contador } from "./pages/estado/Contador";
import { ComunicacaoDireta } from "./pages/comunicacao/ComunicacaoDireta";
import { ComunicacaoIndireta } from "./pages/comunicacao/ComunicacaoIndireta";
import { UseRef } from "./pages/hooksBasicos/UseRef";
import { UseEffect } from "./pages/hooksBasicos/UseEffect";
import { Tradutor } from "./pages/estado/Tradutor";

// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="SemEstado" element={<SemEstado />} />
      <Route path="ComEstado" element={<ComEstado />} />
      <Route path="CampoTexto" element={<CampoTexto />} />
      <Route path="Contador" element={<Contador />} />
      <Route path="ComunicacaoDireta" element={<ComunicacaoDireta />} />
      <Route path="ComunicacaoIndireta" element={<ComunicacaoIndireta />} />
      <Route path="Tradutor" element={<Tradutor />} />
      <Route path="UseRef" element={<UseRef />} />
      <Route path="UseEffect" element={<UseEffect />} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
