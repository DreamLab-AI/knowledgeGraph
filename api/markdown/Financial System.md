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
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:bc-defi-and-economics",
    "label": "DeFi and Economics"
  },
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
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
      },
      {
        "@id": "urn:ngm:class:banking-system",
        "label": "Banking System"
      },
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
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
      },
      {
        "@id": "urn:ngm:class:cross-border-settlement",
        "label": "Cross-Border Settlement"
      },
      {
        "@id": "urn:ngm:class:digital-asset-custody",
        "label": "Digital Asset Custody"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:trust-infrastructure",
        "label": "Trust Infrastructure"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptographic-security",
        "label": "Cryptographic Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:shadow-banking",
        "label": "Shadow Banking"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:token-economy",
        "label": "Tokenised Economy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-stability-board",
        "label": "Financial Stability Board"
      },
      {
        "@id": "urn:ngm:class:basel-accords",
        "label": "Basel Accords"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:economic-systems",
        "label": "Economic System"
      },
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
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:monetary-system",
      "label": "Monetary System"
    },
    {
      "@id": "urn:ngm:class:financial-architecture",
      "label": "Financial Architecture"
    }
  ]
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
