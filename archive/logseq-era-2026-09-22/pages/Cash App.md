public:: true

# Cash App
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5839c1f05fe47df782df3f7fffb1c64d11dd1902b2cee48a04f2f59547ed69a3",
  "@type": "Page",
  "vc:slug": "cash-app",
  "title": "Cash App",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:block",
      "vc:label": "Block"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cash App"
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
  "@id": "urn:ngm:class:cash-app",
  "@type": "Class",
  "label": "Cash App",
  "definition": "Cash App is a mobile payment service operated by Block, Inc. that lets users send money, hold balances, and buy and sell bitcoin and stocks.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-system",
      "label": "Payment System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cash-app:d2a7798cc635",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5839c1f05fe47df782df3f7fffb1c64d11dd1902b2cee48a04f2f59547ed69a3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Block]]",
      "resolved": "urn:visionflow:linked:block",
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
  - Cash App is a mobile payment service operated by Block, Inc. that lets users send money, hold balances, and buy and sell bitcoin and stocks.

- ### Semantic Classification
  - owl-class:: finance:CashApp
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Payment System]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]], [[Block]]
  - requires:: [[Payment System]]

- ### Content
  - Cash App launched in 2013 as Square Cash and is now part of Block, Inc. It provides peer-to-peer money transfers, a linked debit card, direct deposit, and investing features within a single mobile application.
  - The app added bitcoin purchases in 2018 and stock trading in 2019, making it one of the larger consumer on-ramps for buying small amounts of bitcoin in the United States.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
