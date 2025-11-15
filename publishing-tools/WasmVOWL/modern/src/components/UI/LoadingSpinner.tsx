import './LoadingSpinner.css';

export function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
