public:: true

# Stripe
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c844fc67f5e04ed581a7042fef714c4c91a9e8cc0ac3175cf6a1d74bcd2a71b1",
  "@type": "Page",
  "vc:slug": "stripe",
  "title": "Stripe",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
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
      "vc:value": "Stripe"
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
  "@id": "urn:ngm:class:stripe",
  "@type": "Class",
  "label": "Stripe",
  "definition": "Stripe is a company that provides payment processing infrastructure and software for online and in-person transactions.",
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
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
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
  "@id": "urn:visionflow:annotation:link-resolutions:stripe:2bed2032ed3d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c844fc67f5e04ed581a7042fef714c4c91a9e8cc0ac3175cf6a1d74bcd2a71b1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
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
  - Stripe is a company that provides payment processing infrastructure and software for online and in-person transactions.

- ### Semantic Classification
  - owl-class:: general:Stripe
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Payment Network]]
  - bridges-to:: [[Stablecoin]]
  - requires:: [[Payment Network]]
  - enables:: [[Financial Services]]

- ### Content
  - Stripe offers programmable payment infrastructure that lets businesses accept payments and manage financial operations through software interfaces.
  - The company supports a range of payment methods and has added capabilities related to stablecoin transactions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
