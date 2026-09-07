```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d283c8e166041f907a7aa5d1e8da9bb0d98030216edc49ed5818b22cd417e90",
  "@type": "Page",
  "vc:slug": "transaction-standard",
  "title": "Transaction Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:atomic-swaps",
      "vc:label": "Atomic Swaps"
    },
    {
      "@id": "urn:visionflow:linked:authentication-mechanism",
      "vc:label": "Authentication Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:data-persistence",
      "vc:label": "Data Persistence"
    },
    {
      "@id": "urn:visionflow:linked:economic-interoperability",
      "vc:label": "Economic Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:integrity-verification",
      "vc:label": "Integrity Verification"
    },
    {
      "@id": "urn:visionflow:linked:iso-20022",
      "vc:label": "ISO 20022"
    },
    {
      "@id": "urn:visionflow:linked:message-format",
      "vc:label": "Message Format"
    },
    {
      "@id": "urn:visionflow:linked:secure-asset-transfer",
      "vc:label": "Secure Asset Transfer"
    },
    {
      "@id": "urn:visionflow:linked:settlement-protocol",
      "vc:label": "Settlement Protocol"
    },
    {
      "@id": "urn:visionflow:linked:transaction-auditability",
      "vc:label": "Transaction Auditability"
    },
    {
      "@id": "urn:visionflow:linked:transaction-ledger",
      "vc:label": "Transaction Ledger"
    },
    {
      "@id": "urn:visionflow:linked:wallet-system",
      "vc:label": "Wallet System"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-key-management",
      "vc:label": "Cryptographic Key Management"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:multi-party-transactions",
      "vc:label": "Multi-Party Transactions"
    },
    {
      "@id": "urn:visionflow:owl:class:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy Domain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy-infrastructure",
      "vc:label": "Virtual Economy Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20113"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transaction Standard"
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
  "@id": "urn:ngm:class:transaction-standard",
  "@type": "Class",
  "label": "Transaction Standard",
  "definition": "A protocol defining secure exchange of digital assets and services within virtual economies, specifying message formats, authentication mechanisms, settlement procedures, and integrity guarantees.",
  "domain": "spatial-computing",
  "maturity": "established",
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:authentication-mechanism",
        "label": "Authentication Mechanism"
      },
      {
        "@id": "urn:ngm:class:integrity-verification",
        "label": "Integrity Verification"
      },
      {
        "@id": "urn:ngm:class:message-format",
        "label": "Message Format"
      },
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement Protocol"
      },
      {
        "@id": "urn:ngm:class:transaction-ledger",
        "label": "Transaction Ledger"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-persistence",
        "label": "Data Persistence"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:multi-party-transactions",
        "label": "Multi Party Transactions"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:virtual-economy-infrastructure",
        "label": "Virtual Economy Infrastructure"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ]
}
```

- ### Definition
  - A protocol defining secure exchange of digital assets and services within virtual economies, specifying message formats, authentication mechanisms, settlement procedures, and integrity guarantees.

- ### Semantic Classification
  - owl-class:: spatial-computing:TransactionStandard
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[Virtual Economy Domain]]
  - implemented-in-layer:: [[Middleware Layer]]

- ### Relationships
  - has-part:: [[Message Format]], [[Authentication Mechanism]], [[Settlement Protocol]], [[Integrity Verification]], [[Transaction Ledger]]
  - is-part-of:: [[Virtual Economy Infrastructure]], [[Payment System]]
  - requires:: [[Digital Identity]], [[Cryptographic Key Management]], [[Network Protocol]], [[Data Persistence]]
  - enables:: [[Secure Asset Transfer]], [[Atomic Swaps]], [[Multi-Party Transactions]], [[Transaction Auditability]], [[Economic Interoperability]]
  - depends-on:: [[Consensus Mechanism]], [[Smart Contract Platform]], [[Wallet System]]

- ### Content
  Transaction Standard — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]], [[ISO 20022]]
  - migration-date:: 2026-04-26T00:00:00Z
