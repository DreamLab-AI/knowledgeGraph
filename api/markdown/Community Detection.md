public:: true

# Community Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f39a66cd234dfa92e58cfd3ebda12c768818d4c033f809a1060be202c0a1460",
  "@type": "Page",
  "vc:slug": "community-detection",
  "title": "Community Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graph-theory",
      "vc:label": "Graph Theory"
    },
    {
      "@id": "urn:visionflow:linked:data-aggregation",
      "vc:label": "Data Aggregation"
    },
    {
      "@id": "urn:visionflow:linked:network-analysis",
      "vc:label": "Network Analysis"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Community Detection"
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
  "@id": "urn:ngm:class:community-detection",
  "@type": "Class",
  "label": "Community Detection",
  "definition": "Community detection is the task of partitioning a network into groups of nodes that are more densely connected internally than with the rest of the graph. It is a core method in network analysis.",
  "domain": "graph-theory",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-analysis",
      "label": "Network Analysis"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
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
  "@id": "urn:visionflow:annotation:link-resolutions:community-detection:9cdc7f1820e4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4f39a66cd234dfa92e58cfd3ebda12c768818d4c033f809a1060be202c0a1460"
  },
  "vc:resolutions": [
    {
      "raw": "[[Graph Theory]]",
      "resolved": "urn:visionflow:linked:graph-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Aggregation]]",
      "resolved": "urn:visionflow:linked:data-aggregation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Analysis]]",
      "resolved": "urn:visionflow:linked:network-analysis",
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
  - Community detection is the task of partitioning a network into groups of nodes that are more densely connected internally than with the rest of the graph. It is a core method in network analysis.

- ### Semantic Classification
  - owl-class:: graph-theory:CommunityDetection
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Analysis]]
  - bridges-to:: [[Network Analysis]]
  - requires:: [[Graph Theory]]
  - enables:: [[Data Aggregation]]

- ### Content
  - Community detection identifies clusters of nodes with dense internal connections and sparser links to other clusters, revealing modular structure in networks. Common approaches optimise modularity, use spectral methods, or apply label propagation and hierarchical algorithms such as Louvain and Leiden.
  - Detected communities help interpret social, biological and information networks by grouping related entities. The results support tasks such as recommendation, anomaly detection and summarising large graphs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
