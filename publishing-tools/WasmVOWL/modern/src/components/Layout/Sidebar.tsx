import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [pages] = useState<string[]>([
    'AI Alignment',
    'Smart Contracts',
    'Robotics',
    'Virtual Worlds',
    'Disruptive Technologies',
  ]);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>Pages</h3>
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      {!isCollapsed && (
        <nav className="sidebar-nav">
          <ul>
            {pages.map((page) => (
              <li key={page}>
                <Link to={`/page/${encodeURIComponent(page)}`}>
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}
