public:: true

# SWIFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9f45d2c81caa7d1dd751ba58c456306eebae2a8f25aa7e355f3540333f1a1c0",
  "@type": "Page",
  "vc:slug": "swift",
  "title": "SWIFT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:correspondent-banking",
      "vc:label": "Correspondent Banking"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    },
    {
      "@id": "urn:visionflow:linked:interbank-settlement",
      "vc:label": "Interbank Settlement"
    },
    {
      "@id": "urn:visionflow:linked:bc-defi-and-economics",
      "vc:label": "Payment Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-20022",
      "vc:label": "ISO 20022"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure",
      "vc:label": "Financial Infrastructure Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SWIFT"
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
  "@id": "urn:ngm:class:swift",
  "@type": "Class",
  "label": "SWIFT",
  "definition": "SWIFT, the Society for Worldwide Interbank Financial Telecommunication, is a cooperative that operates a secure messaging network used by banks and other financial institutions to exchange payment and securities instructions. It does not move money itself but standardises the messages that instruct transfers between institutions, which then settle through correspondent banking relationships or payment systems. Founded in 1973 and based in Belgium, it connects thousands of institutions across most countries.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:financial-infrastructure",
    "label": "Financial Infrastructure"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:swift-messaging-network",
        "label": "SWIFT Messaging Network"
      },
      {
        "@id": "urn:ngm:class:business-identifier-code",
        "label": "Business Identifier Code"
      },
      {
        "@id": "urn:ngm:class:swift-gpi",
        "label": "SWIFT GPI"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:global-payment-infrastructure",
        "label": "Global Payment Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:correspondent-banking",
        "label": "Correspondent Banking"
      },
      {
        "@id": "urn:ngm:class:financial-institution-membership",
        "label": "Financial Institution Membership"
      },
      {
        "@id": "urn:ngm:class:secure-messaging-protocol",
        "label": "Secure Messaging Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
      },
      {
        "@id": "urn:ngm:class:interbank-settlement",
        "label": "Interbank Settlement"
      },
      {
        "@id": "urn:ngm:class:securities-settlement",
        "label": "Securities Settlement"
      },
      {
        "@id": "urn:ngm:class:trade-finance",
        "label": "Trade Finance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bc-defi-and-economics",
        "label": "DeFi and Economics"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-20022",
        "label": "ISO 20022"
      },
      {
        "@id": "urn:ngm:class:mt-message-format",
        "label": "MT Message Format"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-9362",
        "label": "ISO 9362"
      },
      {
        "@id": "urn:ngm:class:bank-for-international-settlements",
        "label": "Bank for International Settlements"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:financial-sanctions-compliance",
        "label": "Financial Sanctions Compliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ripple-net",
        "label": "RippleNet"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain-based-settlement",
        "label": "Blockchain-Based Settlement"
      },
      {
        "@id": "urn:ngm:class:geopolitical-financial-sanctions",
        "label": "Geopolitical Financial Sanctions"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nostro-vostro-accounts",
        "label": "Nostro Vostro Accounts"
      },
      {
        "@id": "urn:ngm:class:real-time-gross-settlement",
        "label": "Real-Time Gross Settlement"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:society-for-worldwide-interbank-financial-telecommunication",
      "label": "Society for Worldwide Interbank Financial Telecommunication"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:swift:a33603bf79f7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a9f45d2c81caa7d1dd751ba58c456306eebae2a8f25aa7e355f3540333f1a1c0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Correspondent Banking]]",
      "resolved": "urn:visionflow:linked:correspondent-banking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Border Payments]]",
      "resolved": "urn:visionflow:linked:cross-border-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interbank Settlement]]",
      "resolved": "urn:visionflow:linked:interbank-settlement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Systems Domain]]",
      "resolved": "urn:visionflow:linked:bc-defi-and-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 20022]]",
      "resolved": "urn:visionflow:linked:iso-20022",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure",
      "kind": "ResolvedLink"
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
  - SWIFT, the Society for Worldwide Interbank Financial Telecommunication, is a cooperative that operates a secure messaging network used by banks and other financial institutions to exchange payment and securities instructions. It does not move money itself but standardises the messages that instruct transfers between institutions, which then settle through correspondent banking relationships or payment systems. Founded in 1973 and based in Belgium, it connects thousands of institutions across most countries.

- ### Semantic Classification
  - owl-class:: fininfra:SWIFT
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Financial Infrastructure Domain]]
  - bridges-to:: [[Payment Systems Domain]], [[ISO 20022]]
  - requires:: [[Correspondent Banking]]
  - enables:: [[Cross-Border Payments]], [[Interbank Settlement]]

- ### Content
  - SWIFT provides a standardised, authenticated messaging layer over which institutions send instructions such as customer transfers, interbank transfers and securities trades. Each member is identified by a Business Identifier Code, and messages follow defined formats that are migrating toward the richer ISO 20022 standard.
  - Because SWIFT only conveys instructions, actual settlement occurs through accounts that banks hold with one another or through national and regional payment systems. Cross-border payments therefore often traverse a chain of correspondent banks, each relaying SWIFT messages and adjusting account balances.
  - Its central role in global finance gives SWIFT geopolitical significance, as exclusion from the network can substantially impede a country's international transactions. This has prompted interest in alternative messaging systems and in blockchain-based settlement as potential complements or competitors.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
