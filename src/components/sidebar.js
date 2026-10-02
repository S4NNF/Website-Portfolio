import { profile, navItems } from "../data";

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside className={`sidenav ${open ? "show" : ""}`}>
      <h1 className="brand">{profile.name}</h1>
      <nav className="nav flex-column">
        {navItems.map((n) => (
          <a key={n.id} href={`#${n.id}`} className="nav-link"
             onClick={(e) => { e.preventDefault(); onNavigate(n.id); }}>
            {n.label}
          </a>
        ))}
      </nav>
      <small className="sidenav-foot">© {new Date().getFullYear()} {profile.name}</small>
    </aside>
  );
}