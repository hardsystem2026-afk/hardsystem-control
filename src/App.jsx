function App() {
  return (
    <div
      style={{
        background: "#111827",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: 420,
          background: "#1f2937",
          padding: 40,
          borderRadius: 15,
          boxShadow: "0 0 30px rgba(255,0,0,.2)"
        }}
      >
        <h1 style={{ color: "#ef4444", textAlign: "center" }}>
          HARDSYSTEM CONTROL
        </h1>

        <p style={{ textAlign: "center", color: "#d1d5db" }}>
          Sistema de Gestión
        </p>

        <input
          placeholder="Usuario"
          style={{
            width: "100%",
            padding: 12,
            marginTop: 20,
            borderRadius: 8
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{
            width: "100%",
            padding: 12,
            marginTop: 15,
            borderRadius: 8
          }}
        />

        <button
          style={{
            width: "100%",
            padding: 12,
            marginTop: 20,
            background: "#dc2626",
            color: "white",
            border: 0,
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 16
          }}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default App;