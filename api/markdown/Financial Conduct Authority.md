public:: true

# Financial Conduct Authority
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ceb261b46e0285f07625d15d2b5ba218ef6123856482a0f007768f737edb280",
  "@type": "Page",
  "vc:slug": "financial-conduct-authority",
  "title": "Financial Conduct Authority",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:securities-regulation",
      "vc:label": "Securities Regulation"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:fca",
      "vc:label": "FCA"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Financial Conduct Authority"
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
  "@id": "urn:ngm:class:financial-conduct-authority",
  "@type": "Class",
  "label": "Financial Conduct Authority",
  "definition": "The conduct regulator for financial services firms and markets in the United Kingdom, responsible for protecting consumers, maintaining market integrity and promoting competition.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:financial-conduct-authority:bcd7abd8bfba",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4ceb261b46e0285f07625d15d2b5ba218ef6123856482a0f007768f737edb280"
  },
  "vc:resolutions": [
    {
      "raw": "[[Securities Regulation]]",
      "resolved": "urn:visionflow:linked:securities-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[FCA]]",
      "resolved": "urn:visionflow:linked:fca",
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
  - The conduct regulator for financial services firms and markets in the United Kingdom, responsible for protecting consumers, maintaining market integrity and promoting competition.

- ### Semantic Classification
  - owl-class:: governance:FinancialConductAuthority
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Financial Regulation]], [[FCA]]
  - enables:: [[Securities Regulation]]

- ### Content
  - The Financial Conduct Authority is the United Kingdom body that regulates the conduct of financial services firms and oversees the operation of financial markets. It authorises firms, sets conduct rules, supervises compliance and can take enforcement action to protect consumers and ensure market integrity.
  - Its remit covers areas including investment, banking conduct, payments and increasingly cryptoasset promotions and registration, making it a central reference point for firms operating in or marketing to the UK market.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
