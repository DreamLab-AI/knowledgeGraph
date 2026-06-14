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
      "@id": "urn:visionflow:linked:payment-systems-domain",
      "vc:label": "Payment Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-20022",
      "vc:label": "ISO 20022"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure-domain",
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
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure-domain",
      "label": "Financial Infrastructure Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:correspondent-banking",
        "label": "Correspondent Banking"
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
      "resolved": "urn:visionflow:linked:payment-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 20022]]",
      "resolved": "urn:visionflow:linked:iso-20022",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure-domain",
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
