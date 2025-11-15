import { Link } from 'react-router-dom';
import './BacklinksPanel.css';

interface BacklinksPanelProps {
  backlinks: string[];
}

export function BacklinksPanel({ backlinks }: BacklinksPanelProps) {
  // Safely handle backlinks that might not be an array
  const backlinksArray = Array.isArray(backlinks) ? backlinks : [];

  if (backlinksArray.length === 0) {
    return null;
  }

  return (
    <div className="backlinks-panel">
      <h3>
        <span className="backlink-icon">←</span>
        Linked References ({backlinksArray.length})
      </h3>
      <ul className="backlinks-list">
        {backlinksArray.map((backlink) => (
          <li key={backlink}>
            <Link to={`/page/${encodeURIComponent(backlink)}`}>
              {backlink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
