public:: true

# PayPal
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:998403cbdd0b4406d57566493dfde3de2bef443385f1b3969c21f72a2a2d03cc",
  "@type": "Page",
  "vc:slug": "pay-pal",
  "title": "PayPal",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "PayPal"
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
  "@id": "urn:ngm:class:pay-pal",
  "@type": "Class",
  "label": "PayPal",
  "definition": "PayPal is a company that operates an online payments platform enabling money transfers and digital transactions between individuals and merchants.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-network",
      "label": "Payment Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:payment-network",
        "label": "Payment Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
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
  "@id": "urn:visionflow:annotation:link-resolutions:pay-pal:c8518ba80c70",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:998403cbdd0b4406d57566493dfde3de2bef443385f1b3969c21f72a2a2d03cc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:linked:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
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
  - PayPal is a company that operates an online payments platform enabling money transfers and digital transactions between individuals and merchants.

- ### Semantic Classification
  - owl-class:: general:PayPal
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Payment Network]]
  - bridges-to:: [[Stablecoin]]
  - requires:: [[Payment Network]]
  - enables:: [[Digital Asset]]

- ### Content
  - PayPal provides online and mobile payment services, allowing users to send and receive funds and merchants to accept digital payments.
  - The company has introduced features for buying, holding, and transacting in cryptocurrencies and has issued a US dollar stablecoin.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
