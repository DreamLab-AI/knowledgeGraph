public:: true

# Quantexa
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:62b621f2d78c491bf01f38f3eb8341cdfa631ce11631909f430c3c50f88ae53a",
  "@type": "Page",
  "vc:slug": "quantexa",
  "title": "Quantexa",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-analytics",
      "vc:label": "Data Analytics"
    },
    {
      "@id": "urn:visionflow:linked:fraud-detection",
      "vc:label": "Fraud Detection"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Quantexa"
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
  "@id": "urn:ngm:class:quantexa",
  "@type": "Class",
  "label": "Quantexa",
  "definition": "Quantexa is a company that provides data analytics software for connecting and analysing data to support decision intelligence, including fraud and financial crime detection.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-analytics",
      "label": "Data Analytics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:quantexa:c3d2fc7362f6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:62b621f2d78c491bf01f38f3eb8341cdfa631ce11631909f430c3c50f88ae53a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Analytics]]",
      "resolved": "urn:visionflow:linked:data-analytics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fraud Detection]]",
      "resolved": "urn:visionflow:linked:fraud-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
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
  - Quantexa is a company that provides data analytics software for connecting and analysing data to support decision intelligence, including fraud and financial crime detection.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Quantexa
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Data Analytics]]
  - bridges-to:: [[Anti-Money Laundering]]
  - requires:: [[Data Analytics]]
  - enables:: [[Fraud Detection]]

- ### Content
  - Quantexa develops analytics software that links disparate data sources to build a connected view used for decision-making.
  - Its platform is applied to financial crime detection, fraud investigation, and anti-money laundering compliance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
