public:: true

# HSBC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0f4ca32b5b0662e95bc7893883898e5562ee80c1a0b82f59836cd48d348fa3a1",
  "@type": "Page",
  "vc:slug": "hsbc",
  "title": "HSBC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:traditional-banking",
      "vc:label": "Traditional Banking"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HSBC"
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
  "@id": "urn:ngm:class:hsbc",
  "@type": "Class",
  "label": "HSBC",
  "definition": "HSBC is a multinational banking and financial services group headquartered in London, providing retail, commercial, and investment banking across many countries.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:traditional-banking",
      "label": "Traditional Banking"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hsbc:ce749e840dca",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0f4ca32b5b0662e95bc7893883898e5562ee80c1a0b82f59836cd48d348fa3a1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Traditional Banking]]",
      "resolved": "urn:visionflow:linked:traditional-banking",
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
  - HSBC is a multinational banking and financial services group headquartered in London, providing retail, commercial, and investment banking across many countries.

- ### Semantic Classification
  - owl-class:: finance:HSBC
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Traditional Banking]]
  - bridges-to:: [[Traditional Banking]]
  - requires:: [[Financial Regulation]]

- ### Content
  - HSBC Holdings is one of the largest banking groups in the world by assets, with origins in the Hongkong and Shanghai Banking Corporation founded in 1865. It operates retail, commercial, and investment banking businesses across Asia, Europe, and the Americas.
  - The group has explored digital asset and tokenisation initiatives, including custody services and tokenised deposits, as established banks investigate distributed ledger technology.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
