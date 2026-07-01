import Sidebar from "../components/Sidebar";

export default function MainLayout({ children, page, setPage, onLogout }) {
  return (
    <div className="app">
      <Sidebar page={page} setPage={setPage} onLogout={onLogout} />
      <main className="main">{children}</main>
    </div>
  );
}