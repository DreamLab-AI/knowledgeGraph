public:: true

# Revolut
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8a47e5cb7d553bae5df0a9ae1368c70e34c1557150a2d4840756a074426c06d",
  "@type": "Page",
  "vc:slug": "revolut",
  "title": "Revolut",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Revolut"
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
  "@id": "urn:ngm:class:revolut",
  "@type": "Class",
  "label": "Revolut",
  "definition": "Revolut is a British financial technology company offering banking, payments, currency exchange and investment services through a mobile app. It holds banking licences in several jurisdictions.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-services",
      "label": "Financial Services"
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
  "@id": "urn:visionflow:annotation:link-resolutions:revolut:a5c1835f2f1f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e8a47e5cb7d553bae5df0a9ae1368c70e34c1557150a2d4840756a074426c06d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
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
  - Revolut is a British financial technology company offering banking, payments, currency exchange and investment services through a mobile app. It holds banking licences in several jurisdictions.

- ### Semantic Classification
  - owl-class:: fintech:Revolut
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Financial Services]]
  - bridges-to:: [[Cryptocurrency]]
  - requires:: [[Payment System]]

- ### Content
  - Revolut is a London-based fintech company that provides current accounts, card payments, multi-currency exchange, savings, stock and cryptocurrency trading through a mobile application. Founded in 2015, it grew rapidly across Europe and other markets as a digital alternative to traditional banks.
  - The company has obtained banking licences in several jurisdictions, allowing it to offer regulated deposit and lending products in those markets. Its offering spans everyday payments, foreign exchange and access to investment and crypto assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
