import { useState } from "react";
import { Plus, Search, Trash2 } from "lucide-react";

export default function Equipos() {
  const [search, setSearch] = useState("");

  const [equipos, setEquipos] = useState([
    {
      id: 1,
      orden: "HS-000001",
      cliente: "Juan Pérez",
      tipo: "Notebook",
      marca: "HP",
      modelo: "15",
      falla: "No enciende",
      estado: "Diagnosticando",
      fecha: "2026-07-01",
    },
  ]);

  const [form, setForm] = useState({
    cliente: "",
    tipo: "",
    marca: "",
    modelo: "",
    serie: "",
    accesorios: "",
    falla: "",
    diagnostico: "",
    estado: "Recibido",
  });

  const generarOrden = () => {
    const numero = equipos.length + 1;
    return `HS-${String(numero).padStart(6, "0")}`;
  };

  const agregarEquipo = (e) => {
    e.preventDefault();

    if (!form.cliente || !form.tipo || !form.falla) {
      alert("Cliente, tipo de equipo y falla son obligatorios");
      return;
    }

    setEquipos([
      ...equipos,
      {
        id: Date.now(),
        orden: generarOrden(),
        fecha: new Date().toISOString().slice(0, 10),
        ...form,
      },
    ]);

    setForm({
      cliente: "",
      tipo: "",
      marca: "",
      modelo: "",
      serie: "",
      accesorios: "",
      falla: "",
      diagnostico: "",
      estado: "Recibido",
    });
  };

  const eliminarEquipo = (id) => {
    if (confirm("¿Eliminar esta orden?")) {
      setEquipos(equipos.filter((equipo) => equipo.id !== id));
    }
  };

  const equiposFiltrados = equipos.filter((equipo) =>
    `${equipo.orden} ${equipo.cliente} ${equipo.tipo} ${equipo.marca} ${equipo.modelo} ${equipo.estado}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <header className="topbar">
        <div>
          <h1>Equipos</h1>
          <p>Recepción y control de equipos en taller</p>
        </div>
      </header>

      <section className="client-grid">
        <form className="form-card" onSubmit={agregarEquipo}>
          <h2>Nueva orden</h2>

          <input
            placeholder="Cliente *"
            value={form.cliente}
            onChange={(e) => setForm({ ...form, cliente: e.target.value })}
          />

          <input
            placeholder="Tipo de equipo *"
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          />

          <input
            placeholder="Marca"
            value={form.marca}
            onChange={(e) => setForm({ ...form, marca: e.target.value })}
          />

          <input
            placeholder="Modelo"
            value={form.modelo}
            onChange={(e) => setForm({ ...form, modelo: e.target.value })}
          />

          <input
            placeholder="Número de serie"
            value={form.serie}
            onChange={(e) => setForm({ ...form, serie: e.target.value })}
          />

          <input
            placeholder="Accesorios"
            value={form.accesorios}
            onChange={(e) => setForm({ ...form, accesorios: e.target.value })}
          />

          <textarea
            placeholder="Falla declarada *"
            value={form.falla}
            onChange={(e) => setForm({ ...form, falla: e.target.value })}
          />

          <textarea
            placeholder="Diagnóstico"
            value={form.diagnostico}
            onChange={(e) => setForm({ ...form, diagnostico: e.target.value })}
          />

          <select
            value={form.estado}
            onChange={(e) => setForm({ ...form, estado: e.target.value })}
          >
            <option>Recibido</option>
            <option>Diagnosticando</option>
            <option>Esperando aprobación</option>
            <option>Esperando repuesto</option>
            <option>Reparando</option>
            <option>Listo para entregar</option>
            <option>Entregado</option>
            <option>Cancelado</option>
          </select>

          <button>
            <Plus size={18} /> Guardar orden
          </button>
        </form>

        <section className="panel">
          <div className="panel-header">
            <h2>Órdenes de trabajo</h2>

            <div className="search-box">
              <Search size={18} />
              <input
                placeholder="Buscar orden..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="clients-list">
            {equiposFiltrados.map((equipo) => (
              <div className="client-card" key={equipo.id}>
                <div>
                  <h3>{equipo.orden} - {equipo.cliente}</h3>
                  <p>{equipo.tipo} {equipo.marca} {equipo.modelo}</p>
                  <small>Falla: {equipo.falla}</small>
                  <small>Diagnóstico: {equipo.diagnostico || "Sin diagnóstico"}</small>
                  <small>Estado: {equipo.estado}</small>
                  <small>Fecha: {equipo.fecha}</small>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => eliminarEquipo(equipo.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}