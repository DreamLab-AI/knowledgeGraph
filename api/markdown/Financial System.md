public:: true

# Financial System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c714b48f5fa637461856abe03de3db9819b8af0fec6dfda78283dfd43779f190",
  "@type": "Page",
  "vc:slug": "financial-system",
  "title": "Financial System",
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
      "vc:value": "MV-9613"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Financial System"
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
  "@id": "urn:ngm:class:financial-system",
  "@type": "Class",
  "label": "Financial System",
  "definition": "The network of institutions, markets, instruments, and infrastructure that facilitate the creation, transfer, and management of financial value. In the context of the metaverse and blockchain ecosystems, financial systems include both traditional payment rails and decentralised protocols enabling programmable value exchange, digital asset custody, and cross-border settlement.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-transactions",
        "label": "Financial Transactions"
      },
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:financial-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c714b48f5fa637461856abe03de3db9819b8af0fec6dfda78283dfd43779f190"
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
  - The network of institutions, markets, instruments, and infrastructure that facilitate the creation, transfer, and management of financial value. In the context of the metaverse and blockchain ecosystems, financial systems include both traditional payment rails and decentralised protocols enabling programmable value exchange, digital asset custody, and cross-border settlement.

- ### Semantic Classification
  - owl-class:: spatial-computing:FinancialSystem
  - owl-role:: concept

- ### Relationships
  - Has Part [[Payment System]]
  - Has Part [[Financial Infrastructure]]
  - Enables [[Financial Transactions]]
  - Enables [[Financial Inclusion]]
  - Related To [[Blockchain Economics]]
  - Related To [[Financial Regulation]]
  - Related To [[Decentralised Finance]]

- ### Content

  ## Overview

  A financial system encompasses the institutions, markets, instruments, and infrastructure that enable value creation, transfer, and management. In metaverse and blockchain contexts this extends to programmable protocols for digital asset exchange, decentralised custody, and permissionless settlement. Key components include payment systems, financial infrastructure, regulatory frameworks, and decentralised finance primitives.

  #### Related Concepts
  - [[Payment System]]
  - [[Decentralised Finance]]
  - [[Financial Regulation]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
