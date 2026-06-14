public:: true

# Shared Knowledge Base
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f210535ab4af7262b4778baf05f3a6a9e32ba3c0e8b1cfb5ce99f1cd60eb4bd5",
  "@type": "Page",
  "vc:slug": "shared-knowledge-base",
  "title": "Shared Knowledge Base",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaborative-knowledge-discovery",
      "vc:label": "Collaborative Knowledge Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-management-system",
      "vc:label": "Knowledge Management System"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10041"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Knowledge Base"
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
  "@id": "urn:ngm:class:shared-knowledge-base",
  "@type": "Class",
  "label": "Shared Knowledge Base",
  "definition": "A collaborative knowledge repository enabling multiple agents or users to exchange, integrate, and query structured information using semantic web technologies, providing a common understanding of domain concepts through ontologies and linked data standards.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:knowledge-management-system", "label": "Knowledge Management System"}
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-knowledge-discovery",
        "label": "Collaborative Knowledge Discovery"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:shared-knowledge-base:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f210535ab4af7262b4778baf05f3a6a9e32ba3c0e8b1cfb5ce99f1cd60eb4bd5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaborative Knowledge Discovery]]",
      "resolved": "urn:visionflow:linked:collaborative-knowledge-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Management System]]",
      "resolved": "urn:visionflow:owl:class:knowledge-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A collaborative knowledge repository enabling multiple agents or users to exchange, integrate, and query structured information using semantic web technologies, providing a common understanding of domain concepts through ontologies and linked data standards.

- ### Semantic Classification
  - owl-class:: spatial-computing:SharedKnowledgeBase
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Knowledge Management System]]
  - enables:: [[Collaborative Knowledge Discovery]]

- ### Content

  - #### Key Features
		- Ontology-based knowledge representation
		- SPARQL query interface for retrieval
		- Cross-platform data integration
		- Semantic search capabilities
		- Version control for knowledge evolution
  - #### Applications
		- Computer-supported cooperative work
		- Enterprise knowledge management
		- AI agent coordination systems
		- Research collaboration platforms
		- Building information modelling integration

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
