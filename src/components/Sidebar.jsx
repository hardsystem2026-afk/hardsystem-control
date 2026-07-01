import logo from "../assets/logo.png";
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

export default function Sidebar({ page, setPage, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h2>HARDSYSTEM</h2>
        <span>CONTROL</span>
      </div>

      <nav>
        <button className={page === "dashboard" ? "active" : ""} onClick={() => setPage("dashboard")}>
          <LayoutDashboard /> Dashboard
        </button>
        <button className={page === "clientes" ? "active" : ""} onClick={() => setPage("clientes")}>
          <Users /> Clientes
        </button>
        <button
  className={page === "equipos" ? "active" : ""}
  onClick={() => setPage("equipos")}
>
  <Laptop /> Equipos
</button>
        <button><ClipboardList /> Órdenes de Trabajo</button>
        <button><FileText /> Presupuestos</button>
        <button><DollarSign /> Ventas</button>
        <button><Package /> Stock</button>
        <button><Settings /> Configuración</button>
      </nav>

      <button className="logout" onClick={onLogout}>
        <LogOut /> Salir
      </button>
    </aside>
  );
}