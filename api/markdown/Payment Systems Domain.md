public:: true

# Payment Systems Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:58f2f137ca97be6a199c285c01669285a739bf16cda35a1ca20403c5226273c1",
  "@type": "Page",
  "vc:slug": "payment-systems-domain",
  "title": "Payment Systems Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:settlement-layer",
      "vc:label": "Settlement Layer"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:clearing-mechanism",
      "vc:label": "Clearing Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    },
    {
      "@id": "urn:visionflow:linked:value-transfer",
      "vc:label": "Value Transfer"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-settlement",
      "vc:label": "Cross-Border Settlement"
    },
    {
      "@id": "urn:visionflow:linked:micropayments",
      "vc:label": "Micropayments"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation-domain",
      "vc:label": "Financial Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:capital-markets-domain",
      "vc:label": "Capital Markets Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-20022",
      "vc:label": "ISO 20022"
    },
    {
      "@id": "urn:visionflow:linked:cpmi-iosco-pfmi",
      "vc:label": "CPMI-IOSCO PFMI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Payment Systems Domain"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-systems-domain",
  "@type": "Class",
  "label": "Payment Systems Domain",
  "definition": "The Payment Systems Domain classifies concepts concerned with the transfer and settlement of monetary value between parties. It covers payment instruments, clearing and settlement arrangements, and the rails over which value moves, including both ledger-based and conventional channels. As a subject classification under the Blockchain Domain, it scopes the movement and finality of value rather than the assets themselves or the regulation that governs them.",
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:settlement-layer",
        "label": "Settlement Layer"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:clearing-mechanism",
        "label": "Clearing Mechanism"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:digital-asset-domain",
        "label": "Digital Asset Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:value-transfer",
        "label": "Value Transfer"
      },
      {
        "@id": "urn:ngm:class:cross-border-settlement",
        "label": "Cross-Border Settlement"
      },
      {
        "@id": "urn:ngm:class:micropayments",
        "label": "Micropayments"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:payment-systems-domain:2538f3dbdd00",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:58f2f137ca97be6a199c285c01669285a739bf16cda35a1ca20403c5226273c1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Settlement Layer]]",
      "resolved": "urn:visionflow:linked:settlement-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Clearing Mechanism]]",
      "resolved": "urn:visionflow:linked:clearing-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:linked:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Value Transfer]]",
      "resolved": "urn:visionflow:linked:value-transfer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Settlement]]",
      "resolved": "urn:visionflow:linked:cross-border-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Micropayments]]",
      "resolved": "urn:visionflow:linked:micropayments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Regulation Domain]]",
      "resolved": "urn:visionflow:linked:financial-regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Capital Markets Domain]]",
      "resolved": "urn:visionflow:linked:capital-markets-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 20022]]",
      "resolved": "urn:visionflow:linked:iso-20022",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CPMI-IOSCO PFMI]]",
      "resolved": "urn:visionflow:linked:cpmi-iosco-pfmi",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Payment Systems Domain classifies concepts concerned with the transfer and settlement of monetary value between parties. It covers payment instruments, clearing and settlement arrangements, and the rails over which value moves, including both ledger-based and conventional channels. As a subject classification under the Blockchain Domain, it scopes the movement and finality of value rather than the assets themselves or the regulation that governs them.

- ### Semantic Classification
  - owl-class:: pay:PaymentSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Decentralised Finance Domain]], [[Financial Regulation Domain]], [[Capital Markets Domain]]
  - has-part:: [[Settlement Layer]], [[Payment Channel]], [[Stablecoin]], [[Central Bank Digital Currency]], [[Clearing Mechanism]]
  - requires:: [[Distributed Ledger]], [[Consensus Mechanism]], [[Digital Asset Domain]]
  - enables:: [[Value Transfer]], [[Cross-Border Settlement]], [[Micropayments]]

- ### Content
  - The Payment Systems Domain describes how value is moved and made final. Settlement layers record the definitive transfer of ownership, while payment channels and second-layer arrangements batch or net interactions to reduce cost and latency. Instruments such as stablecoins and central bank digital currencies provide units of account that participants accept for everyday transactions.
  - Settlement finality is the central property of the domain: a payment is complete only when it cannot be reversed under the system's rules. Distributed ledgers achieve finality through consensus, whereas conventional rails rely on clearing and settlement institutions. Throughput, fees, and confirmation time determine which mechanism suits retail, wholesale, or cross-border use.
  - Sitting beneath the Blockchain Domain, payment systems consume the digital assets defined elsewhere and provide the rails on which decentralised finance and commerce operate. The domain bridges to financial regulation because payment activity attracts anti-money-laundering and consumer-protection obligations. Separating the movement of value from the asset and the rulebook keeps each concern independently describable.

- ### Provenance
  - sources:: [[ISO 20022]], [[CPMI-IOSCO PFMI]]
  - migration-date:: 2026-05-29T00:00:00Z
