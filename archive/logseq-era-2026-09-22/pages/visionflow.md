public:: true

# visionflow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:edc0e271beb985fcc5584ab399824e08343eda11222ea899a5c64d162798327e",
  "@type": "Page",
  "vc:slug": "visionflow",
  "title": "visionflow",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:data-aggregation",
      "vc:label": "Data Aggregation"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "visionflow"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:visionflow",
  "@type": "Class",
  "label": "visionflow",
  "definition": "visionflow is a project for rendering and interacting with knowledge graphs in a 3D, GPU-accelerated environment, including extended reality interfaces. It combines graph layout computation with real-time visualisation.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-graph",
      "label": "Knowledge Graph"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-aggregation",
        "label": "Data Aggregation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:visionflow:a58880191470",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:edc0e271beb985fcc5584ab399824e08343eda11222ea899a5c64d162798327e"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Aggregation]]",
      "resolved": "urn:visionflow:linked:data-aggregation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - visionflow is a project for rendering and interacting with knowledge graphs in a 3D, GPU-accelerated environment, including extended reality interfaces. It combines graph layout computation with real-time visualisation.

- ### Semantic Classification
  - owl-class:: computer-graphics:visionflow
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Knowledge Graph]]
  - bridges-to:: [[Computer Graphics]]
  - requires:: [[GPU]], [[Real-Time Rendering]]
  - enables:: [[Data Aggregation]]

- ### Content
  - visionflow is a system for visualising knowledge graphs in interactive three-dimensional space, using GPU-accelerated layout and rendering to handle large node and edge sets. It targets exploration of graph structure through real-time navigation and extended reality interfaces.
  - By coupling force-directed and physics-based layout with GPU rendering, it presents relationships among many entities at interactive frame rates. The approach supports analysis tasks such as inspecting clusters and tracing connections across a graph.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
