# VOWL v2 Specification Reference

This document provides a reference to the VOWL (Visual Notation for OWL Ontologies) version 2 specification, which defines the visual standards and data format for WasmVOWL.

## Specification Source

**VOWL v2 Specification** (April 7, 2014)
- **Authors:** Stefan Negru, Steffen Lohmann, Florian Haag
- **Recovered from:** [PR #210](https://github.com/VisualDataWeb/WebVOWL/pull/210)
- **Local archive:** `reference/vowl_v2/index.html`
- **Original URL:** http://purl.org/vowl/spec/v2/ (may be offline)

## Visual Standards

### Color Scheme

VOWL v2 defines semantic colors for ontology elements:

| Element Type | Color | Hex Code | CSS Variable |
|--------------|-------|----------|--------------|
| owl:Class, owl:Thing | Light Blue | `#acf` | `--vowl-class` |
| Datatypes (xsd:*) | Orange | `#fc3` | `--vowl-datatype` |
| Datatype Labels | Light Green | `#9c6` | `--vowl-datatype-label` |
| RDF/RDFS | Pink | `#c9c` | `--vowl-rdf` |
| External Classes | Blue | `#36c` | `--vowl-external` |
| Deprecated | Gray | `#ccc` | `--vowl-deprecated` |
| Symbols | Light Blue | `#69c` | `--vowl-symbol` |
| Focused/Hovered | Red | `#f00` | `--vowl-focused` |
| Indirect Highlight | Orange | `#f90` | `--vowl-indirect` |
| Disjoint Classes | Light Blue | `#acf` | `--vowl-disjoint` |

**Implementation:** All colors are defined as CSS custom properties in `modern/src/index.css` and as TypeScript constants in `modern/src/types/vowl.ts`.

### Layout Constants

| Constant | Value | Description | CSS Variable |
|----------|-------|-------------|--------------|
| `CLASS_RADIUS` | 50px | Radius for class circles | `--vowl-class-radius` |
| `THING_RADIUS` | 30px | Radius for owl:Thing | `--vowl-thing-radius` |
| `LITERAL_WIDTH` | 60px | Width of literal rectangles | `--vowl-literal-width` |
| `LITERAL_HEIGHT` | 20px | Height of literal rectangles | `--vowl-literal-height` |
| `LINK_DISTANCE` | 160px | Default edge length | `--vowl-link-distance` |
| `CHARGE` | -1000 | Force-directed charge strength | `--vowl-charge` |

**Implementation:** Constants are defined in TypeScript at `modern/src/types/vowl.ts` as `VOWLLayout`.

### Graphical Primitives

1. **Circle** - Classes (owl:Class, owl:Thing)
2. **Rectangle** - Properties and datatypes
3. **Arrow** - Property relations (solid line + arrowhead)
4. **Dashed Line** - Special relations (subClassOf, etc.)
5. **Dotted Line** - Alternative relations

### Stroke Styles

| Style | Width | Pattern | Use Case |
|-------|-------|---------|----------|
| Default | 2px | Solid | Classes, properties |
| Fine | 1px | Solid | Secondary elements |
| Focused | 4px | Solid | Selected/hovered |
| Special | 2px | Dashed (8px) | Inheritance |
| Dotted | 2px | Dotted (3px) | Alternatives |

## VOWL JSON Format

### Root Structure

```typescript
interface VOWLData {
  info?: VOWLMetadata[];      // Ontology metadata
  nodes: VOWLNode[];          // Classes, datatypes, etc.
  properties?: VOWLProperty[]; // Relations between nodes
  namespace?: Record<string, string>; // Prefix mappings
}
```

### Metadata Block

```json
{
  "info": [{
    "title": "Friend of a Friend (FOAF) vocabulary",
    "url": "http://xmlns.com/foaf/0.1/",
    "version": "0.99 (Jan 2014)",
    "authors": "Dan Brickley, Libby Miller",
    "description": "The FOAF vocabulary..."
  }]
}
```

### Node Structure

```json
{
  "id": "node_0",
  "name": "Person",
  "type": "class",
  "uri": "http://xmlns.com/foaf/0.1/Person",
  "attributes": ["external"],
  "instances": 42,
  "comment": "A person",
  "label": {
    "en": "Person",
    "de": "Person"
  }
}
```

**Node Types:**
- `class` - owl:Class
- `datatype` - rdfs:Datatype
- `literal` - Literal values
- `external` - External/imported
- `deprecated` - Deprecated classes
- `thing` - owl:Thing
- `nothing` - owl:Nothing

### Property Structure

```json
{
  "id": "prop_0",
  "name": "knows",
  "type": "objectProperty",
  "uri": "http://xmlns.com/foaf/0.1/knows",
  "domain": "node_0",
  "range": "node_0",
  "functional": false,
  "inverse": "prop_1",
  "attributes": ["symmetric"]
}
```

**Property Types:**
- `objectProperty` - owl:ObjectProperty
- `datatypeProperty` - owl:DatatypeProperty
- `annotationProperty` - owl:AnnotationProperty
- `subClassOf` - rdfs:subClassOf
- `disjointWith` - owl:disjointWith

## Implementation in WasmVOWL

### TypeScript Types

All VOWL v2 structures are defined in `modern/src/types/vowl.ts`:

```typescript
import { VOWLData, VOWLNode, VOWLProperty, VOWLColors, VOWLLayout } from './types/vowl';

// Get color for a node
const color = getNodeColor(node);

// Get radius for a node type
const radius = getNodeRadius(node);
```

### CSS Variables

Access VOWL colors in stylesheets:

```css
.my-class-node {
  background: var(--vowl-class);
  border: 2px solid var(--vowl-stroke);
}

.my-class-node:hover {
  background: var(--vowl-focused);
  border-width: 4px;
}
```

### Rust Layout Engine

Layout constants are used in `rust-wasm/src/layout.rs`:

```rust
const CLASS_RADIUS: f32 = 50.0;
const LINK_DISTANCE: f32 = 160.0;
const CHARGE: f32 = -1000.0;
```

## Differences from Legacy WebVOWL

| Aspect | Legacy (D3.js) | WasmVOWL (Rust/Three.js) |
|--------|---------------|--------------------------|
| Rendering | SVG | WebGL (Three.js) |
| Layout | D3 force | Rust petgraph |
| Colors | Inline CSS | CSS Variables |
| Performance | ~200 nodes @ 60fps | ~500+ nodes @ 60fps |
| 3D Support | No | Yes (optional) |

**Migration Notes:**
- WebGL allows for more nodes with higher performance
- Three.js mesh materials replace SVG fill colors
- Z-axis available for 3D layouts (not in original spec)

## References

1. **VOWL v2 Spec:** `reference/vowl_v2/index.html`
2. **Reference Implementation:** `reference/vowl_v2/data/webVOWLGraph.js`
3. **Original CSS:** `reference/vowl_v2/data/vowl.css`
4. **Sample Data:** `reference/vowl_v2/js/data/foaf_spec.json`
5. **Upstream Issues:** See `mainKnowledgeGraph/pages/webvowl-upstream/`

## Compliance Checklist

- [x] Color scheme matches v2 spec
- [x] Layout constants defined
- [x] TypeScript interfaces for VOWL JSON
- [x] CSS variables for semantic colors
- [ ] Stroke styles fully implemented
- [ ] All OWL constructs supported
- [ ] Annotation properties visualization
- [ ] Datatype hierarchy rendering

## Future Work

Based on [upstream issues analysis](../../mainKnowledgeGraph/pages/webvowl-upstream/high-value-issues.md):

1. **Large ontology handling** (#156) - Already improved with Rust/WASM
2. **Export functionality** (#121, #125) - SVG/PNG export needed
3. **Long label truncation** (#82) - Implement ellipsis + tooltip
4. **Annotation properties** (#89) - Add visual treatment
5. **API documentation** (#90) - Document VOWL JSON format

## Contributing

When adding new visual elements, ensure compliance with VOWL v2 specification:

1. Use semantic color variables from `--vowl-*`
2. Match layout constants (radii, distances)
3. Follow stroke width conventions
4. Maintain VOWL JSON format compatibility
5. Reference specification for ambiguous cases

## License

VOWL specification is used under the original WebVOWL MIT License.
