public:: true

# Ontology Structure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f30ae378c8f55bae14721651e5e15a96af9567d3a79e3a3f211a2598d2a514b0",
  "@type": "Page",
  "vc:slug": "ontology-structure",
  "title": "Ontology Structure",
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
      "vc:value": "MV-9658"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Ontology Structure"
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
  "@id": "urn:ngm:class:ontology-structure",
  "@type": "Class",
  "label": "Ontology Structure",
  "definition": "The formal organisation of an ontology into classes, properties, axioms, and inter-concept relationships expressed in a logic-based language such as OWL or RDFS. Ontology Structure defines the hierarchy and constraint patterns that make machine-readable knowledge graphs queryable, inferable, and interoperable across domains.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ontology-definition", "label": "Ontology Definition"},
      {"@id": "urn:ngm:class:owl-class-hierarchy", "label": "OWL Class Hierarchy"},
      {"@id": "urn:ngm:class:ontology-property-definitions", "label": "Ontology Property Definitions"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:controlled-vocabulary", "label": "Controlled Vocabulary"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:ontology-structure:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f30ae378c8f55bae14721651e5e15a96af9567d3a79e3a3f211a2598d2a514b0"
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
  - The formal organisation of an ontology into classes, properties, axioms, and inter-concept relationships expressed in a logic-based language such as OWL or RDFS. Ontology Structure defines the hierarchy and constraint patterns that make machine-readable knowledge graphs queryable, inferable, and interoperable across domains.

- ### Semantic Classification
  - owl-class:: spatial-computing:OntologyStructure
  - owl-role:: concept

- ### Relationships
  - **hasPart**: Ontology Definition, OWL Class Hierarchy, Ontology Property Definitions — these are constituent elements that together specify a complete ontology.
  - **enables**: Knowledge Graph, Linked Data — a well-formed ontology structure is the backbone that makes graph traversal and semantic queries possible.
  - **uses**: Controlled Vocabulary — ontologies depend on a curated vocabulary of terms to name their classes and properties precisely.

- ### Content

  ## Overview

  Ontology Structure represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
