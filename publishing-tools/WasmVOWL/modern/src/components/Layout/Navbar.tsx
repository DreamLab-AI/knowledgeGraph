import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from '../Search/SearchBar';
import './Navbar.css';

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">🧠</span>
        Narrative Goldmine
      </Link>
      <div className="nav-links">
        <Link
          to="/"
          className={isActive('/') && location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link
          to="/ontology"
          className={isActive('/ontology') ? 'active' : ''}
        >
          Ontology Graph
        </Link>
        <Link
          to="/search"
          className={isActive('/search') ? 'active' : ''}
        >
          Search
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
}
