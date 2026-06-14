public:: true

# Central Bank Digital Currency (CBDC)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef6ef3ee700f8f7c5d9ce378f3c78aced9384e669fd9ef8f133e0bb5f4be117d",
  "@type": "Page",
  "vc:slug": "central-bank-digital-currency-cbdc",
  "title": "Central Bank Digital Currency (CBDC)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:banking-infrastructure",
      "vc:label": "Banking Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:bis-cbdc-blueprint",
      "vc:label": "BIS CBDC Blueprint"
    },
    {
      "@id": "urn:visionflow:linked:central-bank",
      "vc:label": "Central Bank"
    },
    {
      "@id": "urn:visionflow:linked:digital-currency-ledger",
      "vc:label": "Digital Currency Ledger"
    },
    {
      "@id": "urn:visionflow:linked:financial-inclusion",
      "vc:label": "Financial Inclusion"
    },
    {
      "@id": "urn:visionflow:linked:identity-system",
      "vc:label": "Identity System"
    },
    {
      "@id": "urn:visionflow:linked:imf-cbdc-notes",
      "vc:label": "IMF CBDC Notes"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:payment-infrastructure",
      "vc:label": "Payment Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:payment-protocol",
      "vc:label": "Payment Protocol"
    },
    {
      "@id": "urn:visionflow:linked:programmable-money",
      "vc:label": "Programmable Money"
    },
    {
      "@id": "urn:visionflow:linked:settlement-system",
      "vc:label": "Settlement System"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validator",
      "vc:label": "Transaction Validator"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-protocol",
      "vc:label": "Cryptographic Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:owl:class:financial-system",
      "vc:label": "Financial System"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:monetary-policy-implementation",
      "vc:label": "Monetary Policy Implementation"
    },
    {
      "@id": "urn:visionflow:owl:class:monetary-system",
      "vc:label": "Monetary System"
    },
    {
      "@id": "urn:visionflow:owl:class:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:owl:class:protocol-layer",
      "vc:label": "ProtocolLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-framework",
      "vc:label": "Regulatory Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20131"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Central Bank Digital Currency (CBDC)"
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
  "@id": "urn:ngm:class:central-bank-digital-currency-cbdc",
  "@type": "Class",
  "label": "Central Bank Digital Currency (CBDC)",
  "definition": "Sovereign digital currency issued and backed by a central bank for use in retail or wholesale payment systems, functioning as legal tender in digital form.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-currency-ledger",
        "label": "Digital Currency Ledger"
      },
      {
        "@id": "urn:ngm:class:identity-systems",
        "label": "Identity System"
      },
      {
        "@id": "urn:ngm:class:payment-protocol",
        "label": "Payment Protocol"
      },
      {
        "@id": "urn:ngm:class:transaction-validator",
        "label": "Transaction Validator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      },
      {
        "@id": "urn:ngm:class:digital-payments",
        "label": "Digital Payments"
      },
      {
        "@id": "urn:ngm:class:monetary-policy-implementation",
        "label": "Monetary Policy Implementation"
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
        "@id": "urn:ngm:class:payment-infrastructure",
        "label": "Payment Infrastructure"
      },
      {
        "@id": "urn:ngm:class:financial-system",
        "label": "Financial System"
      },
      {
        "@id": "urn:ngm:class:monetary-system",
        "label": "Monetary System"
      }
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
  "@id": "urn:visionflow:annotation:link-resolutions:central-bank-digital-currency-cbdc:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef6ef3ee700f8f7c5d9ce378f3c78aced9384e669fd9ef8f133e0bb5f4be117d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Banking Infrastructure]]",
      "resolved": "urn:visionflow:linked:banking-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[BIS CBDC Blueprint]]",
      "resolved": "urn:visionflow:linked:bis-cbdc-blueprint",
      "kind": "StubLink"
    },
    {
      "raw": "[[Central Bank]]",
      "resolved": "urn:visionflow:linked:central-bank",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Currency Ledger]]",
      "resolved": "urn:visionflow:linked:digital-currency-ledger",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Inclusion]]",
      "resolved": "urn:visionflow:linked:financial-inclusion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity System]]",
      "resolved": "urn:visionflow:linked:identity-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[IMF CBDC Notes]]",
      "resolved": "urn:visionflow:linked:imf-cbdc-notes",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 24165]]",
      "resolved": "urn:visionflow:linked:iso-24165",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Infrastructure]]",
      "resolved": "urn:visionflow:linked:payment-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Protocol]]",
      "resolved": "urn:visionflow:linked:payment-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Programmable Money]]",
      "resolved": "urn:visionflow:linked:programmable-money",
      "kind": "StubLink"
    },
    {
      "raw": "[[Settlement System]]",
      "resolved": "urn:visionflow:linked:settlement-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Validator]]",
      "resolved": "urn:visionflow:linked:transaction-validator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Protocol]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Payments]]",
      "resolved": "urn:visionflow:owl:class:digital-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:owl:class:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial System]]",
      "resolved": "urn:visionflow:owl:class:financial-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:owl:class:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy Implementation]]",
      "resolved": "urn:visionflow:owl:class:monetary-policy-implementation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary System]]",
      "resolved": "urn:visionflow:owl:class:monetary-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:owl:class:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ProtocolLayer]]",
      "resolved": "urn:visionflow:owl:class:protocol-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Framework]]",
      "resolved": "urn:visionflow:owl:class:regulatory-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - Sovereign digital currency issued and backed by a central bank for use in retail or wholesale payment systems, functioning as legal tender in digital form.

- ### Semantic Classification
  - owl-class:: infrastructure:CBDC
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]], [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[DataLayer]], [[ProtocolLayer]]

- ### Relationships
  - has-part:: [[Digital Currency Ledger]], [[Payment Protocol]], [[Identity System]], [[Transaction Validator]]
  - is-part-of:: [[Monetary System]], [[Payment Infrastructure]], [[Financial System]]
  - requires:: [[Central Bank]], [[Digital Wallet]], [[Distributed Ledger]], [[Identity Verification]], [[Regulatory Framework]]
  - enables:: [[Digital Payments]], [[Financial Inclusion]], [[Monetary Policy Implementation]], [[Programmable Money]]
  - implements:: [[Payment System]]
  - depends-on:: [[Banking Infrastructure]], [[Settlement System]], [[Cryptographic Protocol]]
  - bridges-to:: [[Blockchain]]

- ### Content
  Central Bank Digital Currency (CBDC) — content pending enrichment.

- ### Provenance
  - sources:: [[BIS CBDC Blueprint]], [[IMF CBDC Notes]], [[ISO 24165]]
  - migration-date:: 2026-04-26T00:00:00Z
