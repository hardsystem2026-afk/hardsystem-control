import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Laptop,
  ClipboardList,
  FileText,
  DollarSign,
  Package,
  Settings,
  LogOut,
} from "lucide-react";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  if (!isLogged) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>HARDSYSTEM</h1>
          <h2>CONTROL</h2>
          <p>Sistema de gestión técnica</p>

          <input placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />

          <button onClick={() => setIsLogged(true)}>Ingresar</button>

          <small>Administrador / Técnico</small>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <h2>HARDSYSTEM</h2>
          <span>CONTROL</span>
        </div>

        <nav>
          <a className="active"><LayoutDashboard /> Dashboard</a>
          <a><Users /> Clientes</a>
          <a><Laptop /> Equipos</a>
          <a><ClipboardList /> Pendientes</a>
          <a><FileText /> Presupuestos</a>
          <a><DollarSign /> Ventas</a>
          <a><Package /> Stock</a>
          <a><Settings /> Configuración</a>
        </nav>

        <button className="logout" onClick={() => setIsLogged(false)}>
          <LogOut /> Salir
        </button>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>Bienvenido, Administrador</p>
          </div>
          <button className="new-btn">+ Nueva orden</button>
        </header>

        <section className="cards">
          <div className="card">
            <span>Equipos en taller</span>
            <strong>12</strong>
          </div>
          <div className="card">
            <span>Pendientes</span>
            <strong>8</strong>
          </div>
          <div className="card">
            <span>Presupuestos</span>
            <strong>5</strong>
          </div>
          <div className="card">
            <span>Ventas del día</span>
            <strong>$18.250</strong>
          </div>
        </section>

        <section className="panel">
          <h2>Actividad reciente</h2>

          <div className="table">
            <div className="row head">
              <span>Orden</span>
              <span>Cliente</span>
              <span>Equipo</span>
              <span>Estado</span>
            </div>

            <div className="row">
              <span>HS-000001</span>
              <span>Juan Pérez</span>
              <span>Notebook HP</span>
              <span className="status yellow">Diagnosticando</span>
            </div>

            <div className="row">
              <span>HS-000002</span>
              <span>María González</span>
              <span>PC Gamer</span>
              <span className="status green">Listo</span>
            </div>

            <div className="row">
              <span>HS-000003</span>
              <span>Carlos Díaz</span>
              <span>Notebook Lenovo</span>
              <span className="status red">Esperando repuesto</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;