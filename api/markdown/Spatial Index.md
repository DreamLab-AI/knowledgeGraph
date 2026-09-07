```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:87e134c26b99f088f559551a76aa16067c8cb6a96a0abac5ad55a1c6137bde45",
  "@type": "Page",
  "vc:slug": "spatial-index",
  "title": "Spatial Index",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bounding-box",
      "vc:label": "Bounding Box"
    },
    {
      "@id": "urn:visionflow:linked:computational-geometry",
      "vc:label": "Computational Geometry"
    },
    {
      "@id": "urn:visionflow:linked:distance-metric",
      "vc:label": "Distance Metric"
    },
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:geometric-primitives",
      "vc:label": "Geometric Primitives"
    },
    {
      "@id": "urn:visionflow:linked:grid-based-index",
      "vc:label": "Grid-based Index"
    },
    {
      "@id": "urn:visionflow:linked:i-physical-layer",
      "vc:label": "I) Physical Layer"
    },
    {
      "@id": "urn:visionflow:linked:iv-data-layer",
      "vc:label": "IV) Data Layer"
    },
    {
      "@id": "urn:visionflow:linked:level-of-detail-selection",
      "vc:label": "Level of Detail Selection"
    },
    {
      "@id": "urn:visionflow:linked:octree",
      "vc:label": "Octree"
    },
    {
      "@id": "urn:visionflow:linked:quadtree",
      "vc:label": "Quadtree"
    },
    {
      "@id": "urn:visionflow:linked:r-tree-structure",
      "vc:label": "R-tree Structure"
    },
    {
      "@id": "urn:visionflow:linked:view-frustum-culling",
      "vc:label": "View Frustum Culling"
    },
    {
      "@id": "urn:visionflow:owl:class:bounding-volume-hierarchy",
      "vc:label": "Bounding Volume Hierarchy"
    },
    {
      "@id": "urn:visionflow:owl:class:collision-detection",
      "vc:label": "Collision Detection"
    },
    {
      "@id": "urn:visionflow:owl:class:coordinate-system",
      "vc:label": "Coordinate System"
    },
    {
      "@id": "urn:visionflow:owl:class:data-structure",
      "vc:label": "Data Structure"
    },
    {
      "@id": "urn:visionflow:owl:class:fast-spatial-queries",
      "vc:label": "Fast Spatial Queries"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:nearest-neighbor-search",
      "vc:label": "Nearest Neighbor Search"
    },
    {
      "@id": "urn:visionflow:owl:class:proximity-search",
      "vc:label": "Proximity Search"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-database",
      "vc:label": "Spatial Database"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world-infrastructure",
      "vc:label": "Virtual World Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20249"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Index"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spatial-index",
  "@type": "Class",
  "label": "Spatial Index",
  "definition": "Data structure optimized for efficient storage, retrieval, and querying of 3D spatial objects within virtual worlds using hierarchical geometric partitioning.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-data-structure",
        "label": "Spatial Data Structure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:octree-spatial-index",
        "label": "Octree"
      },
      {
        "@id": "urn:ngm:class:quadtree",
        "label": "Quadtree"
      },
      {
        "@id": "urn:ngm:class:bounding-volume-hierarchy",
        "label": "Bounding Volume Hierarchy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distance-metric",
        "label": "Distance Metric"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail Selection"
      },
      {
        "@id": "urn:ngm:class:frustum-culling",
        "label": "View Frustum Culling"
      },
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:fast-spatial-queries",
        "label": "Fast Spatial Queries"
      },
      {
        "@id": "urn:ngm:class:proximity-search",
        "label": "Proximity Search"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:spatial-database",
        "label": "Spatial Database"
      },
      {
        "@id": "urn:ngm:class:virtual-world-infrastructure",
        "label": "Virtual World Infrastructure"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Data structure optimized for efficient storage, retrieval, and querying of 3D spatial objects within virtual worlds using hierarchical geometric partitioning.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialIndex
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[I) Physical Layer]], [[IV) Data Layer]]

- ### Relationships
  - has-part:: [[R-tree Structure]], [[Quadtree]], [[Octree]], [[Bounding Volume Hierarchy]], [[Grid-based Index]]
  - is-part-of:: [[Virtual World Infrastructure]], [[Spatial Database]]
  - requires:: [[Geometric Primitives]], [[Bounding Box]], [[Coordinate System]], [[Distance Metric]]
  - enables:: [[Fast Spatial Queries]], [[Collision Detection]], [[Proximity Search]], [[View Frustum Culling]], [[Level of Detail Selection]]
  - depends-on:: [[Data Structure]], [[Computational Geometry]], [[Nearest Neighbor Search]]

- ### Content
  Spatial Index — content pending enrichment.

- ### Provenance
  - sources:: [[EWG/MSF taxonomy]]
  - migration-date:: 2026-04-26T00:00:00Z
