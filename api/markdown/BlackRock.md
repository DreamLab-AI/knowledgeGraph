public:: true

# BlackRock
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6aad8363169adbb9075aa5b9675b23091444efd441310d19beec0f4642c9556e",
  "@type": "Page",
  "vc:slug": "black-rock",
  "title": "BlackRock",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:investment-management",
      "vc:label": "Investment Management"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-etf",
      "vc:label": "Bitcoin ETF"
    },
    {
      "@id": "urn:visionflow:linked:asset-management",
      "vc:label": "Asset Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BlackRock"
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
  "@id": "urn:ngm:class:black-rock",
  "@type": "Class",
  "label": "BlackRock",
  "definition": "BlackRock is an investment management company that provides asset management, advisory, and risk management services to institutional and retail clients.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asset-management",
      "label": "Asset Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:investment-management",
        "label": "Investment Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:black-rock:b4ab3e423436",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6aad8363169adbb9075aa5b9675b23091444efd441310d19beec0f4642c9556e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Investment Management]]",
      "resolved": "urn:visionflow:linked:investment-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin ETF]]",
      "resolved": "urn:visionflow:linked:bitcoin-etf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Management]]",
      "resolved": "urn:visionflow:linked:asset-management",
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
  - BlackRock is an investment management company that provides asset management, advisory, and risk management services to institutional and retail clients.

- ### Semantic Classification
  - owl-class:: general:BlackRock
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Asset Management]]
  - bridges-to:: [[Bitcoin ETF]]
  - requires:: [[Risk Management]]
  - enables:: [[Investment Management]]

- ### Content
  - BlackRock manages investment portfolios across asset classes and operates risk analytics platforms used by institutional investors. Its product range includes index funds and exchange-traded products.
  - The firm has entered digital asset markets through regulated investment vehicles, including products providing exposure to cryptocurrencies.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
