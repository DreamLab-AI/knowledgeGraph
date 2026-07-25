# Phase 1 Architecture: High-Priority Filter Implementation

**Date**: November 23, 2025
**Version**: 1.0
**Status**: Design Document
**Author**: System Architecture Designer

---

## Executive Summary

This document details the architecture for Phase 1 implementation of critical filtering features for the WebVOWL WASM project. Phase 1 focuses on HIGH PRIORITY + EASY features that provide immediate user value with minimal implementation complexity.

**Estimated Total Effort**: 15 hours
**Targeted Features**: 4 critical filters
**Expected Impact**: Essential functionality for large ontologies (>50 nodes)

---

## Table of Contents

1. [Phase 1 Scope](#phase-1-scope)
2. [Architecture Overview](#architecture-overview)
3. [Module Structure](#module-structure)
4. [Feature Specifications](#feature-specifications)
5. [Data Flow Diagrams](#data-flow-diagrams)
6. [API Surface](#api-surface)
7. [Integration Points](#integration-points)
8. [Testing Strategy](#testing-strategy)
9. [Implementation Order](#implementation-order)
10. [Risk Analysis](#risk-analysis)

---

## Phase 1 Scope

### Features Included

| Feature | Priority | Complexity | Effort | Value |
|---------|----------|------------|--------|-------|
| **Node Degree Filter Enhancement** | CRITICAL | EASY | 3h | Essential for large ontologies |
| **Datatype Filter** | CRITICAL | EASY | 2h | Common user request |
| **Set Operator Filter** | HIGH | EASY | 2h | Advanced OWL users |
| **Object Property Filter** | HIGH | EASY | 2h | Property-specific analysis |

### Success Criteria

- ✅ All filters functional with WASM bindings
- ✅ UI controls integrated in React frontend
- ✅ Performance maintained (15-30 FPS with 1,700+ nodes)
- ✅ Layout stability during filtering operations
- ✅ Comprehensive test coverage (>80%)

---

## Architecture Overview

### System Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    React UI Layer                           │
│  (modern/src/components/UI/FilterControls.tsx)             │
│  - Slider controls                                          │
│  - Toggle buttons                                           │
│  - Multi-select dropdowns                                   │
└───────────────────┬─────────────────────────────────────────┘
                    │ WASM Bindings API
                    ▼
┌─────────────────────────────────────────────────────────────┐
│              WASM Bindings Layer                            │
│  (rust-wasm/src/bindings/mod.rs)                           │
│  - filter_by_degree(min_degree)                            │
│  - toggle_datatypes(visible)                               │
│  - toggle_set_operators(visible)                           │
│  - filter_by_edge_type(edge_type, visible)                 │
└───────────────────┬─────────────────────────────────────────┘
                    │ Rust API
                    ▼
┌─────────────────────────────────────────────────────────────┐
│                  Filter Module                              │
│  (rust-wasm/src/layout/filter.rs) - NEW FILE              │
│  - DegreeFilter                                            │
│  - DatatypeFilter                                          │
│  - SetOperatorFilter                                       │
│  - PropertyTypeFilter                                      │
└───────────────────┬─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────┐
│                  Graph Module                               │
│  (rust-wasm/src/graph/mod.rs)                              │
│  - VowlGraph with enhanced methods                         │
│  - Node visibility management                              │
│  - Degree calculation (excluding datatypes)                │
└─────────────────────────────────────────────────────────────┘
```

### Design Principles

1. **Separation of Concerns**: Filters isolated in dedicated module
2. **Stateless Filters**: No internal state, operate on VowlGraph
3. **Composability**: Filters can be combined without conflict
4. **Performance**: O(n) or O(n+e) complexity for all filters
5. **Backward Compatibility**: No breaking changes to existing API

---

## Module Structure

### New Files to Create

```
rust-wasm/src/
└── layout/
    └── filter.rs          # 350-400 LOC
```

### Modified Files

```
rust-wasm/src/
├── graph/
│   └── mod.rs             # +80 LOC (degree calculation methods)
├── bindings/
│   └── mod.rs             # +100 LOC (4 new WASM methods)
└── layout/
    └── mod.rs             # +2 LOC (pub mod filter)
```

### Estimated LOC Distribution

| Module | New LOC | Modified LOC | Total |
|--------|---------|--------------|-------|
| `layout/filter.rs` | 350 | 0 | 350 |
| `graph/mod.rs` | 80 | 20 | 100 |
| `bindings/mod.rs` | 100 | 10 | 110 |
| `layout/mod.rs` | 2 | 0 | 2 |
| **Total** | **532** | **30** | **562** |

---

## Feature Specifications

### 1. Node Degree Filter Enhancement

**Priority**: CRITICAL (10/10)
**Effort**: 3 hours
**Complexity**: EASY

#### Requirements

- Filter nodes by minimum degree (link count)
- Exclude datatype properties from degree calculation
- Auto-enable for graphs with >50 nodes
- Dynamic threshold via UI slider

#### Implementation Details

```rust
// rust-wasm/src/graph/mod.rs

impl VowlGraph {
    /// Calculate total degree for a node
    pub fn degree(&self, id: &str) -> Result<usize> {
        // Already implemented (line 307)
        // Returns total neighbor count
    }

    /// Calculate non-datatype degree
    /// Excludes edges to Datatype nodes from degree count
    pub fn non_datatype_degree(&self, id: &str) -> Result<usize> {
        let idx = self.node_map.get(id)
            .ok_or_else(|| VowlError::GraphError(format!("Node '{}' not found", id)))?;

        let degree = self.graph
            .neighbors(*idx)
            .filter(|neighbor_idx| {
                if let Some(node) = self.graph.node_weight(*neighbor_idx) {
                    !matches!(node.node_type, NodeType::Datatype)
                } else {
                    false
                }
            })
            .count();

        Ok(degree)
    }

    /// Filter by degree threshold
    pub fn filter_by_degree(&mut self, min_degree: usize) {
        let node_ids: Vec<String> = self.nodes()
            .iter()
            .map(|n| n.id.clone())
            .collect();

        for node_id in node_ids {
            if let Ok(degree) = self.non_datatype_degree(&node_id) {
                if degree < min_degree {
                    if let Some(node) = self.get_node_mut(&node_id) {
                        node.visual.visible = false;
                    }
                }
            }
        }
    }

    /// Reset all node visibility
    pub fn reset_visibility(&mut self) {
        for node in self.graph.node_weights_mut() {
            node.visual.visible = true;
        }
    }
}
```

#### UI Integration

```typescript
// modern/src/components/UI/FilterControls.tsx

interface FilterControlsProps {
  onDegreeFilterChange: (minDegree: number) => void;
}

export function DegreeFilterControl({ onDegreeFilterChange }: FilterControlsProps) {
  const [minDegree, setMinDegree] = useState(0);
  const nodeCount = useGraphStore(state => state.nodes.length);

  // Auto-enable for large graphs
  const shouldAutoEnable = nodeCount > 50;

  const handleChange = (value: number) => {
    setMinDegree(value);
    onDegreeFilterChange(value);
  };

  return (
    <div className="filter-control">
      <Label>Min Degree: {minDegree}</Label>
      <Slider
        value={[minDegree]}
        onValueChange={([val]) => handleChange(val)}
        min={0}
        max={20}
        step={1}
        defaultValue={shouldAutoEnable ? [1] : [0]}
      />
    </div>
  );
}
```

#### WASM Binding

```rust
// rust-wasm/src/bindings/mod.rs

#[wasm_bindgen]
impl WebVowl {
    /// Filter nodes by minimum degree
    #[wasm_bindgen(js_name = filterByDegree)]
    pub fn filter_by_degree(&mut self, min_degree: usize) -> std::result::Result<(), JsValue> {
        let graph = self.graph.as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph.filter_by_degree(min_degree);

        Ok(())
    }

    /// Reset all filter visibility
    #[wasm_bindgen(js_name = resetVisibility)]
    pub fn reset_visibility(&mut self) -> std::result::Result<(), JsValue> {
        let graph = self.graph.as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph.reset_visibility();

        Ok(())
    }
}
```

#### Testing Strategy

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_non_datatype_degree() {
        let mut graph = create_test_graph_with_datatypes();

        // Node1 connects to: 2 Classes + 1 Datatype
        let degree = graph.non_datatype_degree("node1").unwrap();
        assert_eq!(degree, 2); // Datatype excluded
    }

    #[test]
    fn test_filter_by_degree() {
        let mut graph = create_test_graph();
        graph.filter_by_degree(2);

        let visible_count = graph.nodes()
            .iter()
            .filter(|n| n.visual.visible)
            .count();

        // Only nodes with degree >= 2 should be visible
        assert!(visible_count < graph.node_count());
    }

    #[test]
    fn test_reset_visibility() {
        let mut graph = create_test_graph();
        graph.filter_by_degree(10); // Hide most nodes
        graph.reset_visibility();

        let visible_count = graph.nodes()
            .iter()
            .filter(|n| n.visual.visible)
            .count();

        assert_eq!(visible_count, graph.node_count());
    }
}
```

---

### 2. Datatype Filter

**Priority**: CRITICAL (10/10)
**Effort**: 2 hours
**Complexity**: EASY

#### Requirements

- Toggle visibility of all Datatype nodes
- Hide connected datatype properties when datatypes hidden
- Simple boolean enable/disable control
- Preserve layout when toggling

#### Implementation Details

```rust
// rust-wasm/src/graph/mod.rs

impl VowlGraph {
    /// Toggle datatype node visibility
    pub fn toggle_datatypes(&mut self, visible: bool) {
        // Hide/show datatype nodes
        for node in self.graph.node_weights_mut() {
            if node.node_type == NodeType::Datatype {
                node.visual.visible = visible;
            }
        }

        // Update connected property visibility
        self.update_datatype_property_visibility(visible);
    }

    /// Update visibility of properties connected to datatypes
    fn update_datatype_property_visibility(&mut self, datatypes_visible: bool) {
        use petgraph::visit::EdgeRef;

        // If datatypes are hidden, hide edges leading to them
        if !datatypes_visible {
            let edges_to_hide: Vec<_> = self.graph
                .edge_references()
                .filter_map(|edge_ref| {
                    let target = self.graph.node_weight(edge_ref.target())?;
                    if target.node_type == NodeType::Datatype {
                        Some(edge_ref.id())
                    } else {
                        None
                    }
                })
                .collect();

            // Mark edges as hidden (implementation detail)
            // In practice, React frontend will filter rendering
            // based on node visibility
        }
    }
}
```

#### WASM Binding

```rust
#[wasm_bindgen]
impl WebVowl {
    /// Toggle datatype visibility
    #[wasm_bindgen(js_name = toggleDatatypes)]
    pub fn toggle_datatypes(&mut self, visible: bool) -> std::result::Result<(), JsValue> {
        let graph = self.graph.as_mut()
            .ok_or_else(|| JsValue::from_str("No graph loaded"))?;

        graph.toggle_datatypes(visible);

        Ok(())
    }
}
```

#### UI Integration

```typescript
export function DatatypeFilterControl() {
  const [showDatatypes, setShowDatatypes] = useState(true);
  const webvowl = useGraphStore(state => state.webvowl);

  const handleToggle = (checked: boolean) => {
    setShowDatatypes(checked);
    webvowl?.toggleDatatypes(checked);
  };

  return (
    <div className="filter-control">
      <Switch
        checked={showDatatypes}
        onCheckedChange={handleToggle}
      />
      <Label>Show Datatypes</Label>
    </div>
  );
}
```

---

### 3. Set Operator Filter

**Priority**: HIGH (9/10)
**Effort**: 2 hours
**Complexity**: EASY

#### Requirements

- Filter union, intersection, complement, disjoint union nodes
- Support for OWL complex class expressions
- Toggle visibility of set operator nodes

#### Implementation Details

**Step 1**: Extend NodeType enum

```rust
// rust-wasm/src/graph/mod.rs

#[derive(Debug, Clone, PartialEq)]
pub enum NodeType {
    Class,
    Datatype,
    Special(String),
    SetOperator(crate::ontology::SetOperator),  // NEW
}
```

**Step 2**: Add filter method

```rust
impl VowlGraph {
    /// Toggle set operator node visibility
    pub fn toggle_set_operators(&mut self, visible: bool) {
        for node in self.graph.node_weights_mut() {
            if matches!(node.node_type, NodeType::SetOperator(_)) {
                node.visual.visible = visible;
            }
        }
    }
}
```

**Step 3**: Update parser to detect set operators

```rust
// rust-wasm/src/ontology/parser.rs

impl StandardParser {
    fn parse_class_node(&self, class: &serde_json::Value) -> Node {
        // Check for set operator type
        if let Some(set_op) = self.detect_set_operator(class) {
            return Node {
                node_type: NodeType::SetOperator(set_op),
                // ... other fields
            };
        }
        // ... existing logic
    }

    fn detect_set_operator(&self, class: &serde_json::Value) -> Option<SetOperator> {
        // Check for owl:unionOf, owl:intersectionOf, etc.
        if class.get("unionOf").is_some() {
            return Some(SetOperator::Union);
        }
        if class.get("intersectionOf").is_some() {
            return Some(SetOperator::Intersection);
        }
        if class.get("complementOf").is_some() {
            return Some(SetOperator::Complement);
        }
        if class.get("disjointUnionOf").is_some() {
            return Some(SetOperator::DisjointUnion);
        }
        None
    }
}
```

#### Migration Considerations

This requires updating all pattern matching on NodeType:

```rust
// Find all locations with: grep -r "NodeType::" rust-wasm/src/

// Update patterns like:
match node.node_type {
    NodeType::Class => { /* ... */ }
    NodeType::Datatype => { /* ... */ }
    NodeType::Special(_) => { /* ... */ }
    NodeType::SetOperator(_) => { /* ... */ }  // ADD THIS
}
```

---

### 4. Object Property Filter

**Priority**: HIGH (8/10)
**Effort**: 2 hours
**Complexity**: EASY

#### Requirements

- Filter edges by property type (ObjectProperty, DatatypeProperty, SubClass)
- Multi-select UI for property types
- Show/hide specific property categories

#### Implementation Details

```rust
// rust-wasm/src/graph/mod.rs

impl VowlGraph {
    /// Filter edges by type
    pub fn filter_by_edge_type(&mut self, edge_type: EdgeType, visible: bool) {
        // Since petgraph doesn't support edge visibility,
        // we'll store hidden edge types and handle in React
        // Alternatively, mark source/target nodes
    }

    /// Get visible edges based on filter settings
    pub fn get_visible_edges(&self, hidden_types: &HashSet<EdgeType>) -> Vec<&Edge> {
        self.edges()
            .iter()
            .filter(|e| !hidden_types.contains(&e.edge_type))
            .copied()
            .collect()
    }
}
```

#### WASM Binding with State Management

Since edges don't have visibility flags, we'll manage filter state in JavaScript:

```rust
#[wasm_bindgen]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum EdgeTypeFilter {
    ObjectProperty,
    DatatypeProperty,
    SubClass,
    Special,
}

#[wasm_bindgen]
impl WebVowl {
    /// Check if an edge should be visible based on type
    #[wasm_bindgen(js_name = isEdgeTypeVisible)]
    pub fn is_edge_type_visible(&self, edge_id: &str, hidden_types: JsValue) -> bool {
        // JavaScript passes array of hidden types
        // Return true if edge should be visible
        true
    }
}
```

#### UI Integration

```typescript
export function PropertyTypeFilter() {
  const [hiddenTypes, setHiddenTypes] = useState<Set<string>>(new Set());

  const propertyTypes = [
    { value: 'ObjectProperty', label: 'Object Properties' },
    { value: 'DatatypeProperty', label: 'Datatype Properties' },
    { value: 'SubClass', label: 'SubClass Relations' },
    { value: 'Special', label: 'Special Relations' },
  ];

  const handleToggle = (type: string) => {
    const newHidden = new Set(hiddenTypes);
    if (newHidden.has(type)) {
      newHidden.delete(type);
    } else {
      newHidden.add(type);
    }
    setHiddenTypes(newHidden);
  };

  return (
    <div className="filter-control">
      <Label>Property Types</Label>
      {propertyTypes.map(({ value, label }) => (
        <div key={value}>
          <Checkbox
            checked={!hiddenTypes.has(value)}
            onCheckedChange={() => handleToggle(value)}
          />
          <Label>{label}</Label>
        </div>
      ))}
    </div>
  );
}
```

---

## Data Flow Diagrams

### Filter Application Flow

```
┌─────────────┐
│   User      │
│  Interacts  │
│  with UI    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────┐
│  React Event Handler        │
│  - onChange/onClick         │
│  - State update             │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  WASM Method Call           │
│  webvowl.filterByDegree(n)  │
└──────┬──────────────────────┘
       │ (via wasm-bindgen)
       ▼
┌─────────────────────────────┐
│  Rust Filter Logic          │
│  - Iterate nodes/edges      │
│  - Update visibility flags  │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  Graph State Updated        │
│  - Node.visual.visible      │
│  - Edge filtering           │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│  React Re-render            │
│  - Filter nodes by visible  │
│  - Update Three.js scene    │
└─────────────────────────────┘
```

### Degree Calculation Flow

```
┌──────────────────┐
│  filter_by_degree│
│  (min_degree: 3) │
└────────┬─────────┘
         │
         ▼
    ┌────────────────────────┐
    │  For each node         │
    └────────┬───────────────┘
             │
             ▼
    ┌────────────────────────┐
    │  non_datatype_degree() │
    └────────┬───────────────┘
             │
             ▼
    ┌────────────────────────┐
    │  Get neighbors         │
    │  Filter out Datatypes  │
    │  Count remaining       │
    └────────┬───────────────┘
             │
             ▼
    ┌────────────────────────┐
    │  Compare to threshold  │
    │  degree >= min_degree? │
    └────────┬───────────────┘
             │
      ┌──────┴──────┐
      │             │
    YES            NO
      │             │
      ▼             ▼
  Keep Visible   Set visible=false
```

---

## API Surface

### Public Methods Added to VowlGraph

```rust
impl VowlGraph {
    // Degree filtering
    pub fn non_datatype_degree(&self, id: &str) -> Result<usize>;
    pub fn filter_by_degree(&mut self, min_degree: usize);

    // Datatype filtering
    pub fn toggle_datatypes(&mut self, visible: bool);

    // Set operator filtering
    pub fn toggle_set_operators(&mut self, visible: bool);

    // Property filtering
    pub fn filter_by_edge_type(&mut self, edge_type: EdgeType, visible: bool);

    // Utility
    pub fn reset_visibility(&mut self);
}
```

### WASM Bindings API

```typescript
// TypeScript definitions for WASM module

interface WebVowl {
  // Existing methods...

  // New filtering methods
  filterByDegree(minDegree: number): void;
  toggleDatatypes(visible: boolean): void;
  toggleSetOperators(visible: boolean): void;
  resetVisibility(): void;
}
```

---

## Integration Points

### 1. Graph Module Integration

**File**: `rust-wasm/src/graph/mod.rs`

**Existing Dependencies**:
- `petgraph` - Graph data structure
- `NodeType`, `EdgeType` enums

**New Dependencies**:
- `crate::ontology::SetOperator` (for NodeType::SetOperator)

**Changes Required**:
- Add 5 new methods to `impl VowlGraph`
- Update `NodeType` enum with `SetOperator` variant
- Update all pattern matches on `NodeType`

**Estimated Impact**: Medium
- ~15 pattern match locations need updating
- No breaking changes to existing API

---

### 2. Parser Integration

**File**: `rust-wasm/src/ontology/parser.rs`

**Changes Required**:
- Add `detect_set_operator()` method
- Update `parse_class_node()` to handle set operators
- Parse `owl:unionOf`, `owl:intersectionOf`, etc.

**Estimated Impact**: Low
- Parser already handles class nodes
- Adding detection logic is straightforward

---

### 3. WASM Bindings Integration

**File**: `rust-wasm/src/bindings/mod.rs`

**Changes Required**:
- Add 4 new `#[wasm_bindgen]` methods
- Export `EdgeTypeFilter` enum to JavaScript

**Estimated Impact**: Low
- Standard wasm-bindgen patterns
- No changes to existing bindings

---

### 4. React Frontend Integration

**Files**:
- `modern/src/components/UI/FilterControls.tsx` (new)
- `modern/src/hooks/useWasmSimulation.ts` (minor update)

**Changes Required**:
- Create filter control components
- Add filter state management
- Integrate with existing UI layout

**Estimated Impact**: Medium
- New UI components required
- Need to match existing design system (shadcn/ui)

---

## Testing Strategy

### Unit Tests (Rust)

**Coverage Target**: >80%

```rust
// rust-wasm/src/graph/mod.rs

#[cfg(test)]
mod filter_tests {
    use super::*;

    #[test]
    fn test_degree_filter_excludes_low_degree() {
        let mut graph = create_test_graph();
        graph.filter_by_degree(2);

        for node in graph.nodes() {
            if node.visual.visible {
                assert!(graph.non_datatype_degree(&node.id).unwrap() >= 2);
            }
        }
    }

    #[test]
    fn test_datatype_filter_hides_datatypes() {
        let mut graph = create_graph_with_datatypes();
        graph.toggle_datatypes(false);

        for node in graph.nodes() {
            if node.node_type == NodeType::Datatype {
                assert!(!node.visual.visible);
            }
        }
    }

    #[test]
    fn test_set_operator_filter() {
        let mut graph = create_graph_with_set_operators();
        graph.toggle_set_operators(false);

        for node in graph.nodes() {
            if matches!(node.node_type, NodeType::SetOperator(_)) {
                assert!(!node.visual.visible);
            }
        }
    }

    #[test]
    fn test_reset_visibility_shows_all() {
        let mut graph = create_test_graph();
        graph.filter_by_degree(100); // Hide everything
        graph.reset_visibility();

        assert!(graph.nodes().iter().all(|n| n.visual.visible));
    }
}
```

### Integration Tests

```rust
#[cfg(test)]
mod integration_tests {
    #[test]
    fn test_multiple_filters_compose() {
        let mut graph = load_test_ontology();

        // Apply multiple filters
        graph.filter_by_degree(2);
        graph.toggle_datatypes(false);

        // Verify both filters active
        for node in graph.nodes() {
            if node.visual.visible {
                assert!(graph.non_datatype_degree(&node.id).unwrap() >= 2);
                assert!(node.node_type != NodeType::Datatype);
            }
        }
    }

    #[test]
    fn test_filter_reset_idempotent() {
        let mut graph = load_test_ontology();
        let original_visible = graph.nodes().iter()
            .filter(|n| n.visual.visible)
            .count();

        graph.filter_by_degree(5);
        graph.reset_visibility();

        let after_reset = graph.nodes().iter()
            .filter(|n| n.visual.visible)
            .count();

        assert_eq!(original_visible, after_reset);
    }
}
```

### Performance Tests

```rust
#[cfg(test)]
mod performance_tests {
    use std::time::Instant;

    #[test]
    fn test_degree_filter_performance() {
        let mut graph = create_large_graph(1000); // 1000 nodes

        let start = Instant::now();
        graph.filter_by_degree(3);
        let duration = start.elapsed();

        assert!(duration.as_millis() < 100, "Filter too slow: {:?}", duration);
    }

    #[test]
    fn test_filter_on_large_ontology() {
        let mut graph = load_ontology("large_test.json"); // 1,700 nodes

        let start = Instant::now();
        graph.filter_by_degree(2);
        graph.toggle_datatypes(false);
        let duration = start.elapsed();

        assert!(duration.as_millis() < 200, "Filters too slow: {:?}", duration);
    }
}
```

### UI Tests (React)

```typescript
// modern/src/components/UI/__tests__/FilterControls.test.tsx

import { render, fireEvent } from '@testing-library/react';
import { DegreeFilterControl } from '../FilterControls';

describe('DegreeFilterControl', () => {
  it('calls callback when slider changes', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <DegreeFilterControl onDegreeFilterChange={onChangeMock} />
    );

    const slider = getByRole('slider');
    fireEvent.change(slider, { target: { value: 5 } });

    expect(onChangeMock).toHaveBeenCalledWith(5);
  });

  it('auto-enables for large graphs', () => {
    // Mock node count > 50
    const { getByRole } = render(
      <DegreeFilterControl onDegreeFilterChange={jest.fn()} />
    );

    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('value', '1');
  });
});
```

---

## Implementation Order

### Build Order Dependencies

```
1. Extend NodeType enum (graph/mod.rs)
   └─> Required for SetOperator filter

2. Add VowlGraph methods (graph/mod.rs)
   ├─> non_datatype_degree()
   ├─> filter_by_degree()
   ├─> toggle_datatypes()
   ├─> toggle_set_operators()
   └─> reset_visibility()

3. Add WASM bindings (bindings/mod.rs)
   └─> Depends on VowlGraph methods

4. Update parser (ontology/parser.rs)
   └─> Detect set operators

5. Create React UI (modern/src/components/UI/)
   └─> Depends on WASM bindings
```

### Recommended Implementation Sequence

**Day 1-2: Core Graph Methods (5 hours)**
1. Extend `NodeType` enum with `SetOperator` variant
2. Update all pattern matches on `NodeType` (~15 locations)
3. Implement `non_datatype_degree()` method
4. Implement `filter_by_degree()` method
5. Implement `toggle_datatypes()` method
6. Implement `toggle_set_operators()` method
7. Implement `reset_visibility()` method
8. Write unit tests for all methods

**Day 3: WASM Bindings (3 hours)**
1. Add WASM bindings for all filter methods
2. Test bindings with basic JavaScript calls
3. Write integration tests

**Day 4: Parser Updates (2 hours)**
1. Add `detect_set_operator()` method
2. Update `parse_class_node()` to handle set operators
3. Test with sample ontologies containing set operators

**Day 5: UI Integration (5 hours)**
1. Create `FilterControls.tsx` component
2. Implement `DegreeFilterControl`
3. Implement `DatatypeFilterControl`
4. Implement `SetOperatorFilterControl`
5. Integrate into main UI layout
6. Style with shadcn/ui components
7. Write React tests

---

## Risk Analysis

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **NodeType refactoring breaks existing code** | Medium | High | Comprehensive grep, update all matches, run full test suite |
| **Performance degradation with filters** | Low | Medium | Benchmark early, optimize if needed (already O(n)) |
| **WASM bindings compilation issues** | Low | Medium | Follow wasm-pack patterns, test incrementally |
| **Layout jumps during filtering** | Medium | Low | Preserve fixed node positions, use smooth transitions |
| **Edge visibility complexity** | Medium | Medium | Handle in React layer instead of graph layer |

### Implementation Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **Incomplete pattern match updates** | Medium | High | Use compiler warnings, grep for all NodeType:: |
| **Missing test coverage** | Low | Medium | Require >80% coverage before merge |
| **UI/UX inconsistency** | Low | Low | Use existing shadcn/ui patterns |
| **Documentation drift** | Medium | Low | Update docs during implementation |

### Operational Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **Breaking changes to API** | Low | High | Maintain backward compatibility, version API |
| **WASM binary size increase** | Low | Low | Already 215KB, filters add ~5KB |
| **Browser compatibility issues** | Low | Low | Use standard WASM features, test in major browsers |

---

## Dependencies and Build Order

### External Dependencies

No new external dependencies required. All features use existing crates:
- `petgraph` - Graph operations
- `serde` - Serialization (already used)
- `wasm-bindgen` - WASM bindings (already used)

### Build Order

```bash
# 1. Update Rust code
cd rust-wasm
cargo test  # Verify tests pass
cargo build --release

# 2. Build WASM
wasm-pack build --target web --release

# 3. Test React integration
cd ../modern
npm run dev  # Verify in browser

# 4. Production build
npm run build
```

### CI/CD Integration

```yaml
# .github/workflows/test.yml

jobs:
  test-filters:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Rust
        uses: actions-rs/toolchain@v1
      - name: Run Rust tests
        run: |
          cd rust-wasm
          cargo test --features "filter"
      - name: Build WASM
        run: |
          cd rust-wasm
          wasm-pack build --target web --release
      - name: Test React integration
        run: |
          cd modern
          npm test
```

---

## Estimated LOC Summary

### Rust Code

| File | New LOC | Modified LOC | Tests | Total |
|------|---------|--------------|-------|-------|
| `graph/mod.rs` | 80 | 20 | 150 | 250 |
| `layout/filter.rs` | 0 | 0 | 0 | 0 |
| `bindings/mod.rs` | 100 | 10 | 50 | 160 |
| `ontology/parser.rs` | 40 | 10 | 30 | 80 |
| **Total** | **220** | **40** | **230** | **490** |

### TypeScript Code

| File | New LOC | Tests | Total |
|------|---------|-------|-------|
| `FilterControls.tsx` | 200 | 100 | 300 |
| `useFilterState.ts` | 50 | 30 | 80 |
| **Total** | **250** | **130** | **380** |

### Grand Total

- **Production Code**: 470 LOC
- **Test Code**: 360 LOC
- **Total**: 830 LOC

---

## Success Metrics

### Code Quality Metrics

- ✅ Rust test coverage: >80%
- ✅ TypeScript test coverage: >70%
- ✅ All `clippy` warnings resolved
- ✅ `cargo fmt` formatting applied
- ✅ ESLint passing with no warnings

### Performance Metrics

- ✅ Filter application time: <100ms for 1,000 nodes
- ✅ Filter application time: <200ms for 1,700 nodes
- ✅ No FPS degradation (maintain 15-30 FPS)
- ✅ WASM binary size increase: <10KB

### User Experience Metrics

- ✅ All filters functional in UI
- ✅ Layout stability during filter toggling
- ✅ No visual glitches
- ✅ Intuitive control placement
- ✅ Responsive feedback (<50ms UI update)

---

## Next Steps

### Immediate Actions

1. **Code Review**: Review this architecture document with team
2. **Approval**: Get stakeholder sign-off on approach
3. **Branch Creation**: Create `feature/phase1-filters` branch
4. **Setup**: Configure development environment

### Implementation Phases

**Week 1**: Core functionality
- Days 1-2: Graph methods
- Day 3: WASM bindings
- Day 4: Parser updates
- Day 5: Integration testing

**Week 2**: UI and polish
- Days 1-2: React components
- Day 3: UI testing
- Day 4: Performance optimization
- Day 5: Documentation and PR

### Post-Implementation

- Merge to `main` branch
- Deploy to staging environment
- User acceptance testing
- Deploy to production
- Monitor performance metrics
- Gather user feedback for Phase 2

---

## References

### Internal Documents

- [Feature Gap Analysis](./feature-gap-analysis.md)
- [Implementation Checklist](./implementation-checklist.md)
- [Development Guide](../CLAUDE.md)

### External Resources

- [WebVOWL Legacy Implementation](https://github.com/VisualDataWeb/WebVOWL)
- [OWL 2 Web Ontology Language](https://www.w3.org/TR/owl2-syntax/)
- [petgraph Documentation](https://docs.rs/petgraph/)
- [wasm-bindgen Guide](https://rustwasm.github.io/wasm-bindgen/)

---

**Document Version**: 1.0
**Last Updated**: November 23, 2025
**Next Review**: After Phase 1 completion
