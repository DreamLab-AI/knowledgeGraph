public:: true

# Voronoi Diagram

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:voronoi-diagram",
  "@type": "Page",
  "title": "Voronoi Diagram",
  "vc:slug": "voronoi-diagram",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voronoi-diagram",
  "@type": "Class",
  "label": "Voronoi Diagram",
  "definition": "A Voronoi diagram is a partition of a plane (or higher-dimensional space) into regions based on proximity to a set of seed points, where each region contains all locations closer to its seed than to any other. It is a foundational structure in computational geometry, dual to the Delaunay triangulation, and supports nearest-neighbour queries, spatial interpolation and procedural generation. Voronoi tessellations appear across spatial analysis, graphics and natural sciences.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computational-geometry",
      "label": "Computational Geometry"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tessellation",
        "label": "Tessellation"
      },
      {
        "@id": "urn:ngm:class:nearest-neighbour",
        "label": "Nearest Neighbour"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:spatial-partitioning",
        "label": "Spatial Partitioning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:computational-geometry",
        "label": "Computational Geometry"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:geometry",
        "label": "Geometry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Nearest-Neighbour Search"
      },
      {
        "@id": "urn:ngm:class:procedural-generation",
        "label": "Procedural Generation"
      },
      {
        "@id": "urn:ngm:class:spatial-analysis",
        "label": "Spatial Analysis"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      },
      {
        "@id": "urn:ngm:class:geographic-information-system",
        "label": "Geographic Information System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:delaunay-triangulation",
        "label": "Delaunay Triangulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-data-structure",
        "label": "Spatial Data Structure"
      },
      {
        "@id": "urn:ngm:class:spatial-index",
        "label": "Spatial Index"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Voronoi Diagram]] partitions space into proximity cells around seed points, dual to the [[Delaunay Triangulation]] and core to [[Computational Geometry]] and [[Spatial Partitioning]].
- ### Overview
  - Each Voronoi cell is the set of all points nearer to its generating site than to any other site.
  - The diagram is the geometric dual of the Delaunay triangulation: connecting sites whose cells share an edge yields the triangulation.
  - Construction algorithms include Fortune's sweep line (O(n log n)) and incremental insertion.
  - Generalisations include weighted, higher-order and geodesic Voronoi diagrams.
- ### Key aspects
  - Cells, edges (equidistant boundaries) and vertices (equidistant to three or more sites).
  - Duality with Delaunay triangulation enabling mutual construction.
  - Sweep-line and divide-and-conquer construction algorithms.
  - Extensions to weighted (power) and Lloyd-relaxed centroidal diagrams.
  - Nearest-site query answering via point location in the cell structure.
- ### Applications
  - Nearest-neighbour and facility-location queries in geographic information systems.
  - Procedural terrain, biome and texture generation in graphics and games.
  - Spatial interpolation and natural-neighbour resampling in the sciences.
  - Mesh generation and pathfinding region decomposition.
- ### Relationships
  - hasPart:: [[Tessellation]]
  - hasPart:: [[Nearest Neighbour]]
  - implements:: [[Spatial Partitioning]]
  - partOf:: [[Computational Geometry]]
  - uses:: [[Geometry]]
  - enables:: [[Nearest-Neighbour Search]]
  - enables:: [[Procedural Generation]]
  - enables:: [[Spatial Analysis]]
  - supports:: [[Pathfinding]]
  - supports:: [[Geographic Information System]]
  - contrastsWith:: [[Delaunay Triangulation]]
  - relatedTo:: [[Spatial Data Structure]]
  - relatedTo:: [[Spatial Index]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
