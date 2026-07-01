import { useState } from "react";
import { Plus, Search, Trash2 } from "lucide-react";

export default function Clientes() {
  const [search, setSearch] = useState("");

  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      telefono: "099 123 456",
      email: "juan@email.com",
      direccion: "Parque del Plata",
      documento: "12345678",
      observaciones: "Cliente frecuente",
    },
  ]);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    documento: "",
    observaciones: "",
  });

  const agregarCliente = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.telefono) {
      alert("Nombre y teléfono son obligatorios");
      return;
    }

    setClientes([...clientes, { id: Date.now(), ...form }]);

    setForm({
      nombre: "",
      telefono: "",
      email: "",
      direccion: "",
      documento: "",
      observaciones: "",
    });
  };

  const eliminarCliente = (id) => {
    if (confirm("¿Eliminar este cliente?")) {
      setClientes(clientes.filter((cliente) => cliente.id !== id));
    }
  };

  const clientesFiltrados = clientes.filter((cliente) =>
    `${cliente.nombre} ${cliente.telefono} ${cliente.email} ${cliente.documento}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <header className="topbar">
        <div>
          <h1>Clientes</h1>
          <p>Alta, búsqueda y control de clientes</p>
        </div>
      </header>

      <section className="client-grid">
        <form className="form-card" onSubmit={agregarCliente}>
          <h2>Nuevo cliente</h2>

          <input
            placeholder="Nombre completo *"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />

          <input
            placeholder="Teléfono / WhatsApp *"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="Dirección"
            value={form.direccion}
            onChange={(e) => setForm({ ...form, direccion: e.target.value })}
          />

          <input
            placeholder="Cédula / RUT"
            value={form.documento}
            onChange={(e) => setForm({ ...form, documento: e.target.value })}
          />

          <textarea
            placeholder="Observaciones"
            value={form.observaciones}
            onChange={(e) =>
              setForm({ ...form, observaciones: e.target.value })
            }
          />

          <button>
            <Plus size={18} /> Guardar cliente
          </button>
        </form>

        <section className="panel">
          <div className="panel-header">
            <h2>Lista de clientes</h2>

            <div className="search-box">
              <Search size={18} />
              <input
                placeholder="Buscar cliente..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="clients-list">
            {clientesFiltrados.map((cliente) => (
              <div className="client-card" key={cliente.id}>
                <div>
                  <h3>{cliente.nombre}</h3>
                  <p>{cliente.telefono}</p>
                  <small>{cliente.email || "Sin email"}</small>
                  <small>{cliente.direccion || "Sin dirección"}</small>
                  <small>{cliente.documento || "Sin documento"}</small>
                  <small>{cliente.observaciones}</small>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => eliminarCliente(cliente.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            {clientesFiltrados.length === 0 && (
              <p className="empty">No se encontraron clientes.</p>
            )}
          </div>
        </section>
      </section>
    </>
  );
}