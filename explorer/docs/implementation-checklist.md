# WebVOWL WASM - Implementation Checklist

**Status**: November 23, 2025
**Target**: Feature parity with legacy WebVOWL

---

## PHASE 1: CRITICAL FILTERS (Week 1-2) ⚡

### Node Filtering
- [ ] **Node Degree Filter Enhancement** (3h) 🔴 CRITICAL
  - [ ] Add `filter_by_degree(min_degree: usize)` to VowlGraph
  - [ ] Exclude datatype properties from degree calculation
  - [ ] Add UI slider for dynamic threshold
  - [ ] Auto-enable for graphs >50 nodes
  - **Files**: `graph/mod.rs`, `bindings/mod.rs`, React UI

- [ ] **Datatype Filter** (2h) 🔴 CRITICAL
  - [ ] Add `toggle_datatypes(visible: bool)` method
  - [ ] Hide/show nodes where `node_type == NodeType::Datatype`
  - [ ] Auto-hide connected datatype properties
  - [ ] Add UI toggle button
  - **Files**: `graph/mod.rs`, `bindings/mod.rs`, React UI

- [ ] **Set Operator Filter** (2h) 🟡 HIGH
  - [ ] Extend `NodeType` enum with `SetOperator(SetOperator)`
  - [ ] Add `toggle_set_operators(visible: bool)` method
  - [ ] Add UI toggle button
  - **Files**: `graph/mod.rs`, `ontology/model.rs`, `bindings/mod.rs`

- [ ] **Object Property Filter** (2h) 🟡 HIGH
  - [ ] Add `filter_by_edge_type(edge_type: EdgeType, visible: bool)`
  - [ ] Add multi-select UI for property types
  - **Files**: `graph/mod.rs`, `bindings/mod.rs`, React UI

- [ ] **Disjoint Filter** (2h) 🟢 MEDIUM
  - [ ] Add `toggle_disjoint_properties(visible: bool)`
  - [ ] Filter edges where `relation_type == DisjointWith`
  - [ ] Add UI toggle
  - **Files**: `graph/mod.rs`, `bindings/mod.rs`

- [ ] **Empty Literal Filter** (2h) 🟢 MEDIUM
  - [ ] Detect empty literals in parser
  - [ ] Add `toggle_empty_literals(visible: bool)`
  - [ ] Add UI toggle
  - **Files**: `ontology/parser.rs`, `graph/mod.rs`

**Phase 1 Total**: 15 hours

---

## PHASE 2: INTERACTIVE FEATURES (Week 3-4) 🎯

### Selection & Focus
- [ ] **Enhanced Focus/Selection** (4h) 🔴 CRITICAL
  - [ ] Add `focused: bool` to `VisualAttributes`
  - [ ] Add `highlight_level: u8` (0=none, 1=direct, 2=indirect)
  - [ ] Implement `focus_node(node_id: &str)`
  - [ ] Implement `clear_focus()`
  - [ ] Add property highlighting on node focus
  - [ ] Update sidebar with focused element details
  - **Files**: `graph/mod.rs`, `bindings/mod.rs`, React components

### Node Interaction
- [ ] **Node Collapsing/Expanding** (8h) 🔴 CRITICAL
  - [ ] Add `collapsed: bool` to Node struct
  - [ ] Add `children: Vec<String>` to Node struct
  - [ ] Implement `collapse_node(node_id: &str)`
    - [ ] Find all SubClassOf descendants (recursive)
    - [ ] Hide descendant nodes
    - [ ] Store children list
    - [ ] Add visual collapse indicator (+/- icon)
  - [ ] Implement `expand_node(node_id: &str)`
    - [ ] Show immediate children
    - [ ] Restore layout positions
  - [ ] Add UI controls (click to collapse/expand)
  - [ ] Preserve layout stability during collapse/expand
  - **Files**: `graph/mod.rs`, `graph/node.rs`, `bindings/mod.rs`, React components

**Phase 2 Total**: 12 hours

---

## PHASE 3: SUBCLASS FILTER (Week 4) 📊

- [ ] **Subclass Filter** (6h) 🔴 CRITICAL
  - [ ] Implement `filter_subclasses_without_properties()`
  - [ ] Implement `is_subclass_without_own_properties(node_id: &str) -> bool`
    - [ ] Check if node has only SubClassOf edges
    - [ ] Recursively check descendants
    - [ ] Handle multiple inheritance cases
  - [ ] Implement `get_relevant_connected_properties(node_id: &str) -> Vec<Edge>`
  - [ ] Add UI toggle for subclass filter
  - [ ] Test with complex hierarchies
  - **Files**: `graph/mod.rs`, `bindings/mod.rs`, React UI

**Phase 3 Total**: 6 hours

---

## PHASE 4: SET OPERATORS (Week 5-6) 🔷

### Type System Updates
- [ ] **Extend NodeType Enum** (2h) 🔴 CRITICAL
  ```rust
  pub enum NodeType {
      Class,
      Datatype,
      Special(SpecialNodeType),
      SetOperator(SetOperator),  // NEW
  }

  pub enum SpecialNodeType {
      Thing,
      Nothing,
      Deprecated,
      External,
  }
  ```
  - [ ] Update all pattern matching
  - [ ] Update serialization
  - **Files**: `graph/mod.rs`, `graph/node.rs`

### Set Operator Nodes
- [ ] **Parse Set Operators** (4h) 🔴 CRITICAL
  - [ ] Parse `owl:unionOf` in JSON-LD
  - [ ] Parse `owl:intersectionOf` in JSON-LD
  - [ ] Parse `owl:complementOf` in JSON-LD
  - [ ] Parse `owl:disjointUnionOf` in JSON-LD
  - [ ] Create SetOperator nodes in graph
  - **Files**: `ontology/parser.rs`

- [ ] **Render Set Operator Nodes** (4h) 🔴 CRITICAL
  - [ ] Create distinct visual style (hexagonal nodes)
  - [ ] Add set operator labels (∪, ∩, ¬, ⊕)
  - [ ] Implement hover highlighting
  - [ ] Add to node legend
  - **Files**: React `SetOperatorNode` component

### Set Operator Properties
- [ ] **Set Operator Edges** (6h) 🔴 CRITICAL
  - [ ] Create `EdgeType::SetMembership` variant
  - [ ] Implement BoxArrowLink equivalent
    - [ ] Dashed line style
    - [ ] Arrow pointing to set members
  - [ ] Connect set operators to member classes
  - [ ] Add hover highlighting for connected members
  - **Files**: `graph/edge.rs`, React edge components

**Phase 4 Total**: 16 hours

---

## PHASE 5: PROPERTY ENHANCEMENTS (Week 7-8) 🔗

### Property Restrictions
- [ ] **Extend EdgeType** (3h) 🟡 HIGH
  ```rust
  pub enum EdgeType {
      ObjectProperty,
      DatatypeProperty,
      SubClass,
      Restriction(RestrictionType),  // NEW
      Special(String),
  }

  pub enum RestrictionType {
      SomeValuesFrom,
      AllValuesFrom,
      HasValue,
      MinCardinality(u32),
      MaxCardinality(u32),
      ExactCardinality(u32),
  }
  ```
  - [ ] Update parser
  - [ ] Update rendering
  - **Files**: `graph/edge.rs`, `ontology/parser.rs`

- [ ] **Parse Restrictions** (3h) 🟡 HIGH
  - [ ] Parse `owl:someValuesFrom`
  - [ ] Parse `owl:allValuesFrom`
  - [ ] Parse cardinality constraints
  - [ ] Create restriction edges
  - **Files**: `ontology/parser.rs`

### Equivalent Properties
- [ ] **Equivalent Property Support** (3h) 🟡 HIGH
  - [ ] Add `equivalent: Vec<String>` to Edge struct
  - [ ] Implement `merge_equivalent_properties()`
  - [ ] Group equivalent properties in UI
  - [ ] Show all IRIs in sidebar
  - **Files**: `graph/edge.rs`, `graph/mod.rs`, React UI

**Phase 5 Total**: 9 hours

---

## PHASE 6: VISUAL ENHANCEMENTS (Week 9) 🎨

- [ ] **Prefix Representation** (2h) 🟢 MEDIUM
  - [ ] Parse namespace prefixes from ontology
  - [ ] Store prefix map
  - [ ] Display shortened IRIs (e.g., `ex:Person` instead of full URI)
  - [ ] Add UI toggle for full/prefixed display
  - **Files**: `ontology/parser.rs`, React UI

- [ ] **Color Externals** (1h) 🟢 LOW
  - [ ] Enhance external node coloring
  - [ ] Add UI toggle for external coloring
  - **Files**: React node components

- [ ] **Compact Notation** (2h) 🟢 MEDIUM
  - [ ] Implement compact display mode
  - [ ] Hide instance counts and subtext
  - [ ] Add UI toggle
  - **Files**: React node components

- [ ] **Node Scaling** (1h) 🟢 LOW
  - [ ] Add dynamic node sizing based on degree/importance
  - [ ] Add UI slider for scale factor
  - **Files**: React node components

**Phase 6 Total**: 6 hours

---

## PHASE 7: PARSER ENHANCEMENTS (Week 10-11) 📄

- [ ] **Multi-language Labels** (4h) 🟢 LOW
  - [ ] Parse `rdfs:label` with language tags
  - [ ] Store labels in map: `HashMap<String, String>` (lang -> label)
  - [ ] Add language selector UI
  - [ ] Display labels in selected language
  - **Files**: `ontology/parser.rs`, `graph/node.rs`, React UI

- [ ] **RDF/XML Parser** (10h) 🟢 MEDIUM
  - [ ] Integrate RDF parsing library (e.g., `sophia`)
  - [ ] Parse RDF/XML format
  - [ ] Convert to internal graph representation
  - [ ] Test with legacy ontologies
  - **Files**: New `ontology/rdf_parser.rs`

- [ ] **Turtle Parser** (10h) 🟢 MEDIUM
  - [ ] Parse Turtle format
  - [ ] Convert to internal graph representation
  - [ ] Test with modern ontologies
  - **Files**: New `ontology/turtle_parser.rs`

**Phase 7 Total**: 24 hours

---

## TESTING CHECKLIST 🧪

### Unit Tests
- [ ] Node degree filter tests
- [ ] Datatype filter tests
- [ ] Subclass filter tests
- [ ] Set operator parsing tests
- [ ] Collapse/expand tests
- [ ] Focus/selection tests
- [ ] Prefix representation tests

### Integration Tests
- [ ] Filter combinations
- [ ] Large graph performance (>1000 nodes)
- [ ] Complex class expressions
- [ ] Multi-level hierarchies

### UI Tests
- [ ] Filter controls
- [ ] Node interaction (click, hover, drag)
- [ ] Sidebar updates
- [ ] Layout stability

---

## DOCUMENTATION CHECKLIST 📚

- [ ] Update README with new features
- [ ] Document filter API
- [ ] Add examples for set operators
- [ ] Create migration guide from legacy
- [ ] Update architecture diagrams
- [ ] Add feature comparison table

---

## SUMMARY

### Total Estimated Time: 88 hours (~2.5 months part-time)

#### By Priority:
- 🔴 **CRITICAL** (47h): Filters, collapsing, set operators
- 🟡 **HIGH** (15h): Property restrictions, equivalent properties
- 🟢 **MEDIUM** (26h): Visual enhancements, parsers

#### By Phase:
- Phase 1 (Filters): 15h
- Phase 2 (Interactive): 12h
- Phase 3 (Subclass): 6h
- Phase 4 (Set Operators): 16h
- Phase 5 (Properties): 9h
- Phase 6 (Visual): 6h
- Phase 7 (Parsers): 24h

---

## QUICK START (First Week)

**Day 1-2: Node Degree Filter** (3h)
1. Add `filter_by_degree()` method
2. Add UI slider
3. Test with large graph

**Day 3: Datatype Filter** (2h)
1. Add `toggle_datatypes()` method
2. Add UI toggle
3. Test visibility toggling

**Day 4: Set Operator Filter** (2h)
1. Extend NodeType enum
2. Add filter method
3. Add UI toggle

**Day 5: Testing & Documentation** (2h)
1. Write unit tests
2. Update documentation
3. Create PR

**Week 1 Total**: 9 hours of high-impact work ✅

---

**Generated**: November 23, 2025
**Status**: Ready for implementation
**Next Action**: Start Phase 1, Task 1 (Node Degree Filter)
