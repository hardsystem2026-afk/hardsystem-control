import Equipos from "./pages/Equipos";
import { useState } from "react";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState("dashboard");

  if (!isLogged) {
    return <Login onLogin={() => setIsLogged(true)} />;
  }

  return (
    <MainLayout page={page} setPage={setPage} onLogout={() => setIsLogged(false)}>
      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "clientes" && <Clientes />}
      {page === "equipos" && <Equipos />}
    </MainLayout>
  );
}

export default App;