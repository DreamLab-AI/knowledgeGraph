public:: true

# Organisational Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c455946ca6f02a13e56f172269b034b7e3c42a5e137e41916a4890e0398daa79",
  "@type": "Page",
  "vc:slug": "organisational-theory",
  "title": "Organisational Theory",
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
      "vc:value": "TC-9507"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Organisational Theory"
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
  "@id": "urn:ngm:class:organisational-theory",
  "@type": "Class",
  "label": "Organisational Theory",
  "definition": "The study of structural, behavioural, and governance patterns within organisations as they adopt distributed collaboration and immersive technologies. Organisational theory examines how hierarchies, communication channels, decision-making processes, and incentive structures must adapt to support decentralised, asynchronous, and spatially distributed teams operating within metaverse and mixed-reality workspaces.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-protocol-and-infra",
      "label": "Protocol and Infrastructure"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:collaboration", "label": "Collaboration"},
      {"@id": "urn:ngm:class:governance-model", "label": "Governance Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:community-governance", "label": "Community Governance"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:organisational-theory:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c455946ca6f02a13e56f172269b034b7e3c42a5e137e41916a4890e0398daa79"
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
  - The study of structural, behavioural, and governance patterns within organisations as they adopt distributed collaboration and immersive technologies. Organisational theory examines how hierarchies, communication channels, decision-making processes, and incentive structures must adapt to support decentralised, asynchronous, and spatially distributed teams operating within metaverse and mixed-reality workspaces.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:OrganisationalTheory
  - owl-role:: concept

- ### Relationships
  - supports: [[Collaboration]], [[Governance Model]]
  - enables: [[Community Governance]], [[Decentralized Governance]]
  - relatedTo: [[Collaboration Platform]], [[Knowledge Management]]

- ### Content

  ## Overview

  Organisational Theory represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
