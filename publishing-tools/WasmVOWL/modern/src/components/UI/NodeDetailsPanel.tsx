/**
 * Node Details Panel - Displays detailed information about selected node
 */

import { useGraphStore } from '../../stores/useGraphStore';
import './NodeDetailsPanel.css';

export function NodeDetailsPanel() {
  const { selectedNode, nodes, selectNode } = useGraphStore();

  if (!selectedNode) {
    return null;
  }

  const node = nodes.get(selectedNode);

  if (!node) {
    return null;
  }

  // Extract metadata from node properties
  const metadata = {
    term_id: node.id,
    label: node.label,
    type: node.type,
    iri: node.iri || 'N/A',
    // Mock data for ontology metadata (will be populated from actual data in Phase 4)
    preferred_term: node.label,
    domain: node.properties?.domain || 'General',
    maturity: node.properties?.maturity || 'Stable',
    status: node.properties?.status || 'Active',
    authority_score: node.properties?.authority_score || 0.85,
    instances: node.properties?.instances || 0,
  };

  const handleClose = () => {
    selectNode(null);
  };

  const handleViewPage = () => {
    // Convert node label to Logseq page URL format
    const pageName = encodeURIComponent(node.label.toLowerCase());
    const logseqUrl = `https://narrativegoldmine.com/#/page/${pageName}`;
    window.open(logseqUrl, '_blank');
  };

  // Domain color mapping
  const getDomainColor = (domain: string): string => {
    const colors: Record<string, string> = {
      'AI/ML': '#8b5cf6',
      'Mathematics': '#3b82f6',
      'Physics': '#06b6d4',
      'Biology': '#10b981',
      'Chemistry': '#f59e0b',
      'General': '#6b7280',
    };
    return colors[domain] || colors['General'];
  };

  // Maturity level indicator
  const getMaturityColor = (maturity: string): string => {
    const colors: Record<string, string> = {
      'Experimental': '#f59e0b',
      'Beta': '#3b82f6',
      'Stable': '#10b981',
      'Deprecated': '#ef4444',
    };
    return colors[maturity] || colors['Stable'];
  };

  return (
    <div className="node-details-panel">
      <div className="panel-header">
        <h2 className="panel-title">Node Details</h2>
        <button
          className="close-button"
          onClick={handleClose}
          aria-label="Close panel"
        >
          ×
        </button>
      </div>

      <div className="panel-content">
        {/* Node Label */}
        <div className="detail-section">
          <h3 className="node-label">{metadata.label}</h3>
          <p className="node-type">{metadata.type}</p>
        </div>

        {/* Metadata */}
        <div className="detail-section">
          <div className="detail-row">
            <span className="detail-label">Term ID:</span>
            <span className="detail-value">{metadata.term_id}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">IRI:</span>
            <span className="detail-value iri-value" title={metadata.iri}>
              {metadata.iri}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Domain:</span>
            <span
              className="domain-badge"
              style={{ backgroundColor: getDomainColor(metadata.domain) }}
            >
              {metadata.domain}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Maturity:</span>
            <span
              className="maturity-badge"
              style={{ backgroundColor: getMaturityColor(metadata.maturity) }}
            >
              {metadata.maturity}
            </span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value status-value">{metadata.status}</span>
          </div>

          {metadata.instances > 0 && (
            <div className="detail-row">
              <span className="detail-label">Instances:</span>
              <span className="detail-value">{metadata.instances}</span>
            </div>
          )}
        </div>

        {/* Authority Score */}
        <div className="detail-section">
          <div className="detail-row">
            <span className="detail-label">Authority Score:</span>
            <span className="detail-value">
              {(metadata.authority_score * 100).toFixed(0)}%
            </span>
          </div>
          <div className="authority-bar">
            <div
              className="authority-fill"
              style={{ width: `${metadata.authority_score * 100}%` }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="panel-actions">
          <button
            className="primary-button"
            onClick={handleViewPage}
          >
            View Full Page
          </button>
        </div>
      </div>
    </div>
  );
}
