import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePage } from '../../hooks/usePage';
import './WikiLink.css';

interface WikiLinkProps {
  pageName: string;
  children?: React.ReactNode;
  href?: string;
}

export function WikiLink({ pageName, children, href, ...props }: WikiLinkProps) {
  const [showPreview, setShowPreview] = useState(false);
  const { data: page } = usePage(pageName);
  const displayName = children || pageName;
  const linkPath = `/page/${encodeURIComponent(pageName)}`;

  return (
    <span className="wiki-link-wrapper">
      <Link
        to={linkPath}
        className="wiki-link"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        {...props}
      >
        {displayName}
      </Link>
      {showPreview && page && (
        <div className="wiki-link-preview">
          <h4>{page.title}</h4>
          <p className="preview-excerpt">
            {page.content.substring(0, 200)}...
          </p>
          {page.ontology && (
            <div className="preview-ontology">
              <span className="ontology-badge">{page.ontology.term_id}</span>
              <span className="domain-badge">{page.ontology.source_domain}</span>
            </div>
          )}
        </div>
      )}
    </span>
  );
}
