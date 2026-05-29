public:: true

# Knowledge Management System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09bef2106ac4fc3043b770e0accc7711abfd68f1839333bb5db095c3ab406657",
  "@type": "Page",
  "vc:slug": "knowledge-management-system",
  "title": "Knowledge Management System",
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
      "vc:value": "MV-9643"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Knowledge Management System"
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
  "@id": "urn:ngm:class:knowledge-management-system",
  "@type": "Class",
  "label": "Knowledge Management System",
  "definition": "A Knowledge Management System (KMS) is a platform that captures, organises, retrieves, and shares structured and unstructured knowledge across an organisation or community. In spatial computing contexts, a KMS may underpin documentation of 3D assets, ontologies, and procedural content, integrating knowledge graphs, semantic search, and metadata management to make information discoverable and actionable.",
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
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:knowledge-management-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:09bef2106ac4fc3043b770e0accc7711abfd68f1839333bb5db095c3ab406657"
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
  - A Knowledge Management System (KMS) captures, organises, retrieves, and shares structured and unstructured knowledge across an organisation, integrating knowledge graphs, ontologies, semantic search, and metadata management to make information discoverable and actionable across spatial computing workflows.

- ### Semantic Classification
  - owl-class:: spatial-computing:KnowledgeManagementSystem
  - owl-role:: concept

- ### Relationships
  - uses [[Knowledge Graph]]
  - uses [[Ontology]]
  - enables [[Information Retrieval]]
  - enables [[Knowledge Representation]]
  - relatedTo [[Metadata Management]]
  - relatedTo [[Knowledge Base]]

- ### Content

  ## Overview

  Knowledge Management System represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
