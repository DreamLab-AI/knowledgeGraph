public:: true

# Data Access Interface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d04fe10c7eb8472ec6c7a0bbc94b84991861d0bc9888e8ce55a4af632fb68e66",
  "@type": "Page",
  "vc:slug": "data-access-interface",
  "title": "Data Access Interface",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9548"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Access Interface"
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
  "@id": "urn:ngm:class:data-access-interface",
  "@type": "Class",
  "label": "Data Access Interface",
  "definition": "A Data Access Interface is a formalised contract—such as a REST API, GraphQL endpoint, or SPARQL query service—that mediates structured access to data stores, registries, or knowledge graphs. It enforces authentication, authorisation, and schema validation, decoupling data consumers from underlying storage implementations. In metaverse and spatial computing contexts, data access interfaces expose asset repositories, user identity records, and scene graphs to applications and AI agents.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:data-interoperability", "label": "Data Interoperability"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:data-registry", "label": "Data Registry"},
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:digital-infrastructure", "label": "Digital Infrastructure"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-access-interface:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d04fe10c7eb8472ec6c7a0bbc94b84991861d0bc9888e8ce55a4af632fb68e66"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
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
  A Data Access Interface is a formalised contract—such as a REST API, GraphQL endpoint, or SPARQL query service—that mediates structured access to data stores, registries, or knowledge graphs. It enforces authentication, authorisation, and schema validation, decoupling consumers from underlying storage. In metaverse and spatial computing contexts, data access interfaces expose asset repositories, user identity records, and scene graphs to applications and AI agents.

- ### Semantic Classification
  - owl-class:: infrastructure:DataAccessInterface
  - owl-role:: concept

- ### Relationships
  - **enables**: Data Interoperability, Data Governance (structured interfaces make cross-system data exchange tractable)
  - **uses**: Digital Identity (authentication and authorisation rely on identity primitives)
  - **supports**: Data Registry, AI Agent System (provides the query layer for registries and agent data needs)
  - **partOf**: Digital Infrastructure (a component of the broader infrastructure stack)

- ### Content

  ## Overview

  A Data Access Interface provides a stable, schema-validated boundary between data consumers and storage backends. It centralises access control, version management, and observability, enabling heterogeneous clients to query and mutate data without knowledge of backend technology.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
