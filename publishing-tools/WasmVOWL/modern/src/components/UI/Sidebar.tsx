/**
 * Sidebar component with node details, filters, and statistics
 */

import { useGraphStore } from '../../stores/useGraphStore';
import { useUIStore } from '../../stores/useUIStore';
import './Sidebar.css';

export function Sidebar() {
  const { sidebarOpen, sidebarTab, setSidebarTab } = useUIStore();
  const {
    selectedNode,
    nodes,
    edges,
    statistics,
    activeFilters,
    addFilter,
    removeFilter,
    clearFilters
  } = useGraphStore();

  if (!sidebarOpen) {
    return null;
  }

  const node = selectedNode ? nodes.get(selectedNode) : null;

  return (
    <aside className="sidebar">
      {/* Tab navigation */}
      <div className="sidebar-tabs">
        <button
          className={`sidebar-tab ${sidebarTab === 'details' ? 'active' : ''}`}
          onClick={() => setSidebarTab('details')}
        >
          Details
        </button>
        <button
          className={`sidebar-tab ${sidebarTab === 'filters' ? 'active' : ''}`}
          onClick={() => setSidebarTab('filters')}
        >
          Filters
        </button>
        <button
          className={`sidebar-tab ${sidebarTab === 'statistics' ? 'active' : ''}`}
          onClick={() => setSidebarTab('statistics')}
        >
          Statistics
        </button>
      </div>

      {/* Tab content */}
      <div className="sidebar-content">
        {sidebarTab === 'details' && (
          <div className="tab-panel">
            {node ? (
              <>
                <h3 className="panel-title">Node Details</h3>
                <div className="detail-item">
                  <span className="detail-label">ID:</span>
                  <span className="detail-value">{node.id}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value detail-type">{node.type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Label:</span>
                  <span className="detail-value">{node.label}</span>
                </div>
                {node.iri && (
                  <div className="detail-item">
                    <span className="detail-label">IRI:</span>
                    <span className="detail-value detail-iri">{node.iri}</span>
                  </div>
                )}
                {node.properties.instances !== undefined && (
                  <div className="detail-item">
                    <span className="detail-label">Instances:</span>
                    <span className="detail-value">{node.properties.instances}</span>
                  </div>
                )}

                <h4 className="subsection-title">Connections</h4>
                <div className="detail-item">
                  <span className="detail-label">Incoming:</span>
                  <span className="detail-value">
                    {Array.from(edges.values()).filter(e => e.target === node.id).length}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Outgoing:</span>
                  <span className="detail-value">
                    {Array.from(edges.values()).filter(e => e.source === node.id).length}
                  </span>
                </div>

                {node.properties.attributes && node.properties.attributes.length > 0 && (
                  <>
                    <h4 className="subsection-title">Attributes</h4>
                    <ul className="attributes-list">
                      {node.properties.attributes.map((attr, idx) => (
                        <li key={idx}>{attr}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <div className="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Select a node to view details</p>
              </div>
            )}
          </div>
        )}

        {sidebarTab === 'filters' && (
          <div className="tab-panel">
            <h3 className="panel-title">Active Filters</h3>

            {activeFilters.length > 0 ? (
              <>
                <div className="filters-list">
                  {activeFilters.map((filter, index) => (
                    <div key={index} className="filter-item">
                      <span className="filter-name">
                        {filter.type === 'nodeType' && `Type: ${filter.config.nodeType}`}
                        {filter.type === 'degree' && `Degree: ${filter.config.min || 0}-${filter.config.max || '∞'}`}
                        {filter.type === 'edgeType' && `Edge: ${filter.config.edgeType}`}
                      </span>
                      <button
                        onClick={() => removeFilter(index)}
                        className="filter-remove"
                        aria-label="Remove filter"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <button onClick={clearFilters} className="clear-filters-button">
                  Clear All Filters
                </button>
              </>
            ) : (
              <div className="empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <p>No active filters</p>
              </div>
            )}

            <h4 className="subsection-title">Add Filter</h4>

            <div className="filter-controls">
              <button
                onClick={() => addFilter({ type: 'nodeType', config: { nodeType: 'class' } })}
                className="add-filter-button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Filter by Class</span>
              </button>

              <button
                onClick={() => addFilter({ type: 'degree', config: { min: 2 } })}
                className="add-filter-button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Filter by Degree (min: 2)</span>
              </button>

              <button
                onClick={() => addFilter({ type: 'edgeType', config: { edgeType: 'objectProperty' } })}
                className="add-filter-button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Filter by Object Properties</span>
              </button>
            </div>
          </div>
        )}

        {sidebarTab === 'statistics' && statistics && (
          <div className="tab-panel">
            <h3 className="panel-title">Graph Statistics</h3>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{statistics.nodeCount}</div>
                <div className="stat-label">Total Nodes</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">{statistics.edgeCount}</div>
                <div className="stat-label">Total Edges</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">{statistics.maxDegree}</div>
                <div className="stat-label">Max Degree</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">{statistics.avgDegree.toFixed(2)}</div>
                <div className="stat-label">Avg Degree</div>
              </div>
            </div>

            <h4 className="subsection-title">Node Types</h4>
            <div className="type-breakdown">
              {Object.entries(statistics.classCounts).map(([type, count]) => (
                <div key={type} className="type-item">
                  <span className="type-name">{type}</span>
                  <span className="type-count">{count}</span>
                </div>
              ))}
            </div>

            <h4 className="subsection-title">Property Types</h4>
            <div className="type-breakdown">
              {Object.entries(statistics.propertyCounts).map(([type, count]) => (
                <div key={type} className="type-item">
                  <span className="type-name">{type}</span>
                  <span className="type-count">{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
