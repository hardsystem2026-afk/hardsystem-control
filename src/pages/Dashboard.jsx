import { Plus } from "lucide-react";
import StatCard from "../components/StatCard";

export default function Dashboard({ setPage }) {
  return (
    <>
      <header className="topbar">
        <div>
          <h1>Dashboard</h1>
          <p>Bienvenido, Administrador</p>
        </div>

        <button className="new-btn" onClick={() => setPage("clientes")}>
          <Plus size={18} /> Nuevo cliente
        </button>
      </header>

      <section className="cards">
        <StatCard title="Clientes" value="1" />
        <StatCard title="Equipos en taller" value="12" />
        <StatCard title="Pendientes" value="8" />
        <StatCard title="Ventas del día" value="$18.250" />
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
    </>
  );
}