export default function Login({ onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>HARDSYSTEM</h1>
        <h2>CONTROL</h2>
        <p>Sistema de gestión técnica</p>

        <input placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />

        <button onClick={onLogin}>Ingresar</button>
        <small>Administrador / Técnico</small>
      </div>
    </div>
  );
}