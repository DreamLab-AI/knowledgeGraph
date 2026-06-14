public:: true

# Financial Infrastructure Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff0ae35ed260e71f2fe268ccf04684429aa79eda6db863f0c1200cf837e27595",
  "@type": "Page",
  "vc:slug": "financial-infrastructure-domain",
  "title": "Financial Infrastructure Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-rail",
      "vc:label": "Payment Rail"
    },
    {
      "@id": "urn:visionflow:linked:settlement",
      "vc:label": "Settlement"
    },
    {
      "@id": "urn:visionflow:linked:clearing",
      "vc:label": "Clearing"
    },
    {
      "@id": "urn:visionflow:linked:messaging-standard",
      "vc:label": "Messaging Standard"
    },
    {
      "@id": "urn:visionflow:linked:central-counterparty",
      "vc:label": "Central Counterparty"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems-domain",
      "vc:label": "Distributed Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:security-domain",
      "vc:label": "Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:value-transfer",
      "vc:label": "Value Transfer"
    },
    {
      "@id": "urn:visionflow:linked:real-time-settlement",
      "vc:label": "Real Time Settlement"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation-domain",
      "vc:label": "Financial Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
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
      "vc:value": "Financial Infrastructure Domain"
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
  "@id": "urn:ngm:class:financial-infrastructure-domain",
  "@type": "Class",
  "label": "Financial Infrastructure Domain",
  "definition": "The Financial Infrastructure Domain classifies concepts concerning the systems that move, clear and settle value between parties. It covers payment rails, settlement, clearing and the messaging standards that connect institutions. As a top-level subject axis it provides the operational substrate on which financial services and markets depend.",
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-rail",
        "label": "Payment Rail"
      },
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      },
      {
        "@id": "urn:ngm:class:clearing",
        "label": "Clearing"
      },
      {
        "@id": "urn:ngm:class:messaging-standard",
        "label": "Messaging Standard"
      },
      {
        "@id": "urn:ngm:class:central-counterparty",
        "label": "Central Counterparty"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-systems-domain",
        "label": "Distributed Systems Domain"
      },
      {
        "@id": "urn:ngm:class:security-domain",
        "label": "Security Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:value-transfer",
        "label": "Value Transfer"
      },
      {
        "@id": "urn:ngm:class:real-time-settlement",
        "label": "Real Time Settlement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:financial-infrastructure-domain:7ea341b4cc86",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff0ae35ed260e71f2fe268ccf04684429aa79eda6db863f0c1200cf837e27595"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment Rail]]",
      "resolved": "urn:visionflow:linked:payment-rail",
      "kind": "StubLink"
    },
    {
      "raw": "[[Settlement]]",
      "resolved": "urn:visionflow:linked:settlement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Clearing]]",
      "resolved": "urn:visionflow:linked:clearing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Messaging Standard]]",
      "resolved": "urn:visionflow:linked:messaging-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Central Counterparty]]",
      "resolved": "urn:visionflow:linked:central-counterparty",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Systems Domain]]",
      "resolved": "urn:visionflow:linked:distributed-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Domain]]",
      "resolved": "urn:visionflow:linked:security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Value Transfer]]",
      "resolved": "urn:visionflow:linked:value-transfer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real Time Settlement]]",
      "resolved": "urn:visionflow:linked:real-time-settlement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation Domain]]",
      "resolved": "urn:visionflow:linked:financial-regulation-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Financial Infrastructure Domain classifies concepts concerning the systems that move, clear and settle value between parties. It covers payment rails, settlement, clearing and the messaging standards that connect institutions. As a top-level subject axis it provides the operational substrate on which financial services and markets depend.

- ### Semantic Classification
  - owl-class:: fininf:FinancialInfrastructureDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Blockchain Domain]], [[Financial Regulation Domain]]
  - has-part:: [[Payment Rail]], [[Settlement]], [[Clearing]], [[Messaging Standard]], [[Central Counterparty]]
  - requires:: [[Distributed Systems Domain]], [[Security Domain]]
  - enables:: [[Value Transfer]], [[Real Time Settlement]]

- ### Content
  - Financial infrastructure comprises the systems through which obligations between parties are recorded, netted and discharged. Payment rails transmit instructions, clearing determines net positions, and settlement transfers final value to extinguish obligations. These functions must be highly available, consistent and resilient to failure.
  - The domain relies on standardised messaging so that institutions can exchange instructions unambiguously across borders and systems. Central counterparties and settlement systems concentrate and manage risk, applying collateral and netting to limit exposure. Finality, the point at which a transfer becomes irrevocable, is a defining concern.
  - Financial infrastructure bridges to blockchain, which proposes alternative settlement models, and to financial regulation that supervises systemically important systems. It depends on distributed systems for consistency under failure and on security to protect high-value transfers.

- ### Provenance
  - sources:: [[ISO 20022]], [[CPMI-IOSCO PFMI]]
  - migration-date:: 2026-05-29T00:00:00Z
