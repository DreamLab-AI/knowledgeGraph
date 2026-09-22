public:: true

# Data Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1db8920716c2fed990810796788a92470391fcf43d0e1e1851ac171eebacbd93",
  "@type": "Page",
  "vc:slug": "data-registry",
  "title": "Data Registry",
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
      "vc:value": "MV-9556"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Registry"
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
  "@id": "urn:ngm:class:data-registry",
  "@type": "Class",
  "label": "Data Registry",
  "definition": "A Data Registry is a centralised or federated catalogue that maintains authoritative records of data assets, their schemas, provenance, ownership, and access policies. In digital and metaverse infrastructure, registries track digital assets, avatar identities, spatial anchors, and ontological terms, enabling discovery, governance, and interoperability across distributed systems. Blockchain-anchored registries provide tamper-evident provenance and decentralised control.",
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
    "uses": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:data-interoperability", "label": "Data Interoperability"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:data-access-interface", "label": "Data Access Interface"},
      {"@id": "urn:ngm:class:digital-asset-management", "label": "Digital Asset Management"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1db8920716c2fed990810796788a92470391fcf43d0e1e1851ac171eebacbd93"
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
  A Data Registry is a centralised or federated catalogue that maintains authoritative records of data assets, their schemas, provenance, ownership, and access policies. In digital and metaverse infrastructure, registries track digital assets, avatar identities, and ontological terms, enabling discovery, governance, and interoperability. Blockchain-anchored registries provide tamper-evident provenance and decentralised control.

- ### Semantic Classification
  - owl-class:: infrastructure:DataRegistry
  - owl-role:: concept

- ### Relationships
  - **uses**: Blockchain, Digital Identity (tamper-evident anchoring and identity-bound ownership)
  - **enables**: Data Governance, Data Interoperability (registries are the foundation for policy enforcement and cross-system data sharing)
  - **supports**: Data Access Interface, Digital Asset Management (registries expose metadata consumed by these downstream systems)

- ### Content

  ## Overview

  A Data Registry maintains authoritative, versioned records of data assets, schemas, and access policies. It is a prerequisite for trustworthy data governance across distributed platforms.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
