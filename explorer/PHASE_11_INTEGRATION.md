# Phase 11 WASM Integration Guide

Quick reference for integrating Phase 11 WASM updates into the React/Three.js frontend.

## TypeScript Type Definitions

### Update Node Type

```typescript
// modern/src/types/graph.ts

export interface GraphNode {
  id: string;              // Slug-based ID (e.g., "knowledge-management")
  label: string;
  x: number;
  y: number;
  node_type: string;
  visible: boolean;
  term_id?: string;        // Term ID (e.g., "AI-0850")
  iri?: string;            // Full IRI (e.g., "http://narrativegoldmine.com/ai#KnowledgeManagement")
}

export interface GraphEdge {
  id: string;
  label: string;
  source: string;          // Node slug ID
  target: string;          // Node slug ID
  edge_type: string;
  inverse_of?: string;     // NEW: Inverse property ID
  equivalent_to: string[]; // NEW: Equivalent property IDs
  disjoint_with: string[]; // NEW: Disjoint property IDs
}
```

## Node Click Handling

### Update Click Handler

```typescript
// modern/src/components/Canvas/ClassNode.tsx

import { useNavigate } from 'react-router-dom';

function ClassNode({ node }: { node: GraphNode }) {
  const navigate = useNavigate();

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();

    // Navigate to ontology page using slug
    // The slug is already in node.id!
    navigate(`/docs/ontology/${node.id}`);

    console.log(`Navigating to: /docs/ontology/${node.id}`);
    console.log(`IRI: ${node.iri}`);
    console.log(`Term ID: ${node.term_id}`);
  };

  return (
    <mesh onClick={handleClick}>
      {/* ... mesh geometry */}
    </mesh>
  );
}
```

## Edge Tooltips

### Show Relationship Metadata

```typescript
// modern/src/components/Canvas/EdgeLine.tsx

function EdgeTooltip({ edge }: { edge: GraphEdge }) {
  const relationships = [];

  if (edge.inverse_of) {
    relationships.push(`Inverse of: ${edge.inverse_of}`);
  }

  if (edge.equivalent_to.length > 0) {
    relationships.push(`Equivalent to: ${edge.equivalent_to.join(', ')}`);
  }

  if (edge.disjoint_with.length > 0) {
    relationships.push(`Disjoint with: ${edge.disjoint_with.join(', ')}`);
  }

  if (relationships.length === 0) return null;

  return (
    <Html>
      <div className="edge-tooltip">
        <h4>{edge.label}</h4>
        <ul>
          {relationships.map((rel, i) => (
            <li key={i}>{rel}</li>
          ))}
        </ul>
      </div>
    </Html>
  );
}
```

## Bidirectional Edge Rendering

### Visual Indicator for Inverse Properties

```typescript
// modern/src/components/Canvas/EdgeLine.tsx

function EdgeLine({ edge, sourcePos, targetPos }: EdgeProps) {
  const isBidirectional = !!edge.inverse_of;

  return (
    <group>
      <Line
        points={[sourcePos, targetPos]}
        color={isBidirectional ? "#00ff00" : "#ffffff"}
        lineWidth={isBidirectional ? 2 : 1}
        dashed={isBidirectional}
      />

      {isBidirectional && (
        <ArrowHelper
          // Show double-headed arrow for bidirectional edges
          origin={sourcePos}
          dir={targetPos.sub(sourcePos).normalize()}
          length={targetPos.distanceTo(sourcePos)}
          color="#00ff00"
        />
      )}
    </group>
  );
}
```

## WASM API Usage

### Load Ontology with Phase 11

```typescript
// modern/src/hooks/useWasmSimulation.ts

import init, { WebVowl } from '../../../rust-wasm/pkg/webvowl_wasm';

export function useWasmSimulation() {
  const [webvowl, setWebvowl] = useState<WebVowl | null>(null);

  useEffect(() => {
    async function initialize() {
      await init();
      const wv = new WebVowl();

      // Load ontology (JSON already has Phase 11 fields)
      await wv.loadOntology(JSON.stringify(ontologyData));

      // Initialize simulation
      await wv.initSimulation();

      setWebvowl(wv);
    }

    initialize();
  }, []);

  const getGraphData = () => {
    if (!webvowl) return { nodes: [], edges: [] };

    // Returns data with Phase 11 fields
    const data = webvowl.getGraphData();

    // Type-safe: TypeScript knows about inverse_of, equivalent_to, disjoint_with
    return data;
  };

  return { webvowl, getGraphData };
}
```

## Search Integration

### Link Node Clicks to Search Results

```typescript
// modern/src/components/Search/SearchResults.tsx

function SearchResults({ results }: { results: SearchResult[] }) {
  const navigate = useNavigate();

  const handleResultClick = (result: SearchResult) => {
    // Search results use document ID (which is the slug)
    navigate(`/docs/ontology/${result.id}`);
  };

  return (
    <div className="search-results">
      {results.map(result => (
        <div key={result.id} onClick={() => handleResultClick(result)}>
          <h3>{result.title}</h3>
          <p>{result.excerpt}</p>
          <span className="term-id">{result.metadata?.term_id}</span>
        </div>
      ))}
    </div>
  );
}
```

### Consistency Check

All three systems use the same identifier:

1. **Search Index**: Document ID = `"knowledge-management"`
2. **Graph Node**: `node.id = "knowledge-management"`
3. **URL**: `/docs/ontology/knowledge-management`

✅ Perfect consistency!

## Edge Filtering by Relationship

### Filter Graph by Edge Type

```typescript
// modern/src/stores/graphStore.ts

export const useGraphStore = create<GraphStore>((set) => ({
  showInverseOnly: false,
  showEquivalentOnly: false,

  toggleInverseFilter: () => set((state) => ({
    showInverseOnly: !state.showInverseOnly
  })),

  filterEdges: (edges: GraphEdge[]) => {
    return edges.filter(edge => {
      if (state.showInverseOnly && !edge.inverse_of) return false;
      if (state.showEquivalentOnly && edge.equivalent_to.length === 0) return false;
      return true;
    });
  }
}));
```

## UI Controls

### Add Relationship Filter Buttons

```typescript
// modern/src/components/UI/FilterControls.tsx

export function FilterControls() {
  const { showInverseOnly, toggleInverseFilter } = useGraphStore();

  return (
    <div className="filter-controls">
      <button
        onClick={toggleInverseFilter}
        className={showInverseOnly ? 'active' : ''}
      >
        Show Inverse Properties Only
      </button>

      <button onClick={toggleEquivalentFilter}>
        Show Equivalent Properties Only
      </button>

      <button onClick={resetFilters}>
        Show All Edges
      </button>
    </div>
  );
}
```

## Testing

### Unit Test for Node Click

```typescript
// modern/src/components/Canvas/__tests__/ClassNode.test.tsx

import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ClassNode from '../ClassNode';

test('clicking node navigates to ontology page', () => {
  const node = {
    id: 'knowledge-management',
    label: 'Knowledge Management',
    iri: 'http://narrativegoldmine.com/ai#KnowledgeManagement',
    term_id: 'AI-0850',
    // ... other fields
  };

  const navigate = vi.fn();
  vi.mock('react-router-dom', () => ({
    useNavigate: () => navigate
  }));

  const { getByRole } = render(
    <BrowserRouter>
      <ClassNode node={node} />
    </BrowserRouter>
  );

  fireEvent.click(getByRole('mesh'));

  expect(navigate).toHaveBeenCalledWith('/docs/ontology/knowledge-management');
});
```

## Example Data Flow

### Complete Flow from JSON to Page Navigation

```
1. WebVOWL JSON (from Logseq export):
   {
     "class": [{ "id": "knowledge-management", ... }],
     "property": [{ "inverseOf": "is-enabled-by", ... }]
   }

2. WASM Parser:
   - Parses inverse_of, equivalent_to, disjoint_with
   - Creates bidirectional edges automatically
   - Stores slug in node.id

3. React State:
   - useWasmSimulation() fetches graph data
   - Type-safe GraphNode and GraphEdge interfaces
   - Stores in Zustand store

4. 3D Rendering:
   - ClassNode uses node.id for click handling
   - EdgeLine shows visual indicators for inverse properties
   - Tooltips display relationship metadata

5. User Interaction:
   - User clicks node in 3D graph
   - onClick handler extracts node.id
   - navigate('/docs/ontology/' + node.id)
   - Router loads /docs/ontology/knowledge-management.md

6. Page Display:
   - Markdown renderer shows ontology page
   - Consistent with search results
   - Same slug used everywhere
```

## Checklist

- [ ] Update TypeScript types for GraphEdge
- [ ] Add node click handler with slug-based navigation
- [ ] Implement edge tooltips with Phase 11 metadata
- [ ] Add visual indicators for bidirectional edges
- [ ] Test node click → page navigation flow
- [ ] Verify consistency: graph slug === search ID === URL slug
- [ ] Add filter controls for edge relationships
- [ ] Update documentation

## Common Issues

### Issue: Node click doesn't navigate

**Solution**: Ensure `node.id` contains the slug, not the IRI
```typescript
// ❌ Wrong
navigate(`/docs/ontology/${node.iri}`);

// ✅ Correct
navigate(`/docs/ontology/${node.id}`);
```

### Issue: Bidirectional edges render twice

**Solution**: Filter out inverse edges created by GraphBuilder
```typescript
const uniqueEdges = edges.filter((edge, idx, arr) => {
  // Keep original edge, skip auto-generated inverse
  return !edge.id.includes('(inverse)');
});
```

### Issue: Edge tooltips don't show Phase 11 data

**Solution**: Check that WebVOWL JSON includes the fields
```json
{
  "property": [{
    "inverseOf": "property-id",  // ✅ Correct field name
    "inverse_of": "property-id"  // ✅ Also supported
  }]
}
```

---

**Ready to integrate!** The WASM module is built and all types are ready.
