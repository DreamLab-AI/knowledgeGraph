import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import './AppLayout.css';

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="app-layout">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
