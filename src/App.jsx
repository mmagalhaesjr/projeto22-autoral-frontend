import TelaInicial from "./pages/TelaInicial/TelaInicial";
import TelaQuadras from "./pages/TelaQuadras/TelaQuadras";
import TelaReservas from "./pages/TelaReservas/TelaReservas";
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro";
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaReservar from "./pages/TelaReservar/TelaReservar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";



export default function App() {

  return (

    <BrowserRouter>

      <UserProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<TelaInicial />} />
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path="/login" element={<TelaLogin />} />
            <Route path="/quadras" element={<TelaQuadras />} />
            <Route path="/reservas" element={<TelaReservas />} />
            <Route path="/reservar/:id" element={<TelaReservar />} />
          </Routes>
        </div>
      </UserProvider>

    </BrowserRouter>

  )
}
