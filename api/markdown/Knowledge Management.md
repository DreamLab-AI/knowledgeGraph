public:: true

# Knowledge Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e308a3d2a0b379832300fb2a5cd5f65e85a4a65a02b531e444ac1115c4adafcb",
  "@type": "Page",
  "vc:slug": "knowledge-management",
  "title": "Knowledge Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9642"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Knowledge Management"
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
  "@id": "urn:ngm:class:knowledge-management",
  "@type": "Class",
  "label": "Knowledge Management",
  "definition": "Knowledge Management is the systematic practice of capturing, organising, sharing, and applying the collective knowledge of an organisation or platform to improve decision-making and innovation. In AI-augmented and spatial computing contexts it encompasses knowledge graphs, ontologies, semantic search, and retrieval-augmented generation pipelines that make tacit and explicit knowledge discoverable and reusable by both human users and autonomous agents.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:knowledge-management:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e308a3d2a0b379832300fb2a5cd5f65e85a4a65a02b531e444ac1115c4adafcb"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Knowledge Management is the systematic practice of capturing, organising, sharing, and applying the collective knowledge of an organisation or platform to improve decision-making and innovation. In AI-augmented and spatial computing contexts it encompasses knowledge graphs, ontologies, semantic search, and retrieval-augmented generation pipelines that make tacit and explicit knowledge discoverable and reusable by both human users and autonomous agents.

- ### Semantic Classification
  - owl-class:: spatial-computing:KnowledgeManagement
  - owl-role:: concept

- ### Relationships
  - uses [[Knowledge Graph]]
  - uses [[Knowledge Representation]]
  - enables [[Retrieval-Augmented Generation]]
  - enables [[Semantic Web]]
  - relatedTo [[Ontology]]

- ### Content

  ## Overview

  Knowledge Management represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
