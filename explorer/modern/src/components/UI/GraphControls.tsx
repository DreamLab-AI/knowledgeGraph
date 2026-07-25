/**
 * GraphControls — zoom in / zoom out / fit (PRD-NG-001 §9a surviving controls).
 * These mirror the keyboard bindings (+/- zoom, f fit) so pointer users have a
 * discoverable path. The renderer owns the camera; these only emit intent.
 */

interface Props {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFit: () => void;
}

export function GraphControls({ onZoomIn, onZoomOut, onFit }: Props) {
  return (
    <div className="ng-graph-controls" role="group" aria-label="Camera controls">
      <button type="button" className="ng-iconbtn" onClick={onZoomIn} aria-label="Zoom in" title="Zoom in (+)">
        <span aria-hidden="true">+</span>
      </button>
      <button type="button" className="ng-iconbtn" onClick={onZoomOut} aria-label="Zoom out" title="Zoom out (−)">
        <span aria-hidden="true">−</span>
      </button>
      <button type="button" className="ng-iconbtn" onClick={onFit} aria-label="Fit graph to view" title="Fit to view (f)">
        <span aria-hidden="true">⤢</span>
      </button>
    </div>
  );
}
