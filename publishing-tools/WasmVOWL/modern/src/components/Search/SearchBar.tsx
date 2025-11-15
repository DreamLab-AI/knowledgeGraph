import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { search, type SearchResult } from '../../services/searchService';
import './SearchBar.css';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const debounceTimer = setTimeout(() => {
      try {
        const searchResults = search(query, 10);
        setResults(searchResults);
        setIsOpen(searchResults.length > 0);
        setSelectedIndex(0);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    navigate(`/page/${encodeURIComponent(result.title)}`);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleBlur = () => {
    // Delay to allow click events on results
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="Search pages and ontology..."
          className="search-input"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div ref={resultsRef} className="search-results-dropdown">
          {results.map((result, index) => (
            <div
              key={result.id}
              className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleSelect(result)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="result-header">
                <span className="result-title">{result.title}</span>
                <span className={`result-badge ${result.type}`}>
                  {result.type === 'ontology' ? '🏷️' : '📄'}
                </span>
              </div>
              <p className="result-excerpt">{result.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
