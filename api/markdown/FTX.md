public:: true

# FTX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fffaaa7841def48220059d12027f91d4748cbe34a5bf2bbbc950ae287f53e76a",
  "@type": "Page",
  "vc:slug": "ftx",
  "title": "FTX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:coinbase",
      "vc:label": "Coinbase"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FTX"
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
  "@id": "urn:ngm:class:ftx",
  "@type": "Class",
  "label": "FTX",
  "definition": "A cryptocurrency exchange founded in 2019 that collapsed in November 2022 amid a liquidity crisis and revelations of misuse of customer funds. Its failure led to bankruptcy proceedings and criminal convictions of its leadership.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:ftx:972e481b1ad7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fffaaa7841def48220059d12027f91d4748cbe34a5bf2bbbc950ae287f53e76a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Coinbase]]",
      "resolved": "urn:visionflow:linked:coinbase",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - A cryptocurrency exchange founded in 2019 that collapsed in November 2022 amid a liquidity crisis and revelations of misuse of customer funds. Its failure led to bankruptcy proceedings and criminal convictions of its leadership.

- ### Semantic Classification
  - owl-class:: blockchain:FTX
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Coinbase]]

- ### Content
  - FTX was a cryptocurrency exchange founded by Sam Bankman-Fried in 2019 and based in the Bahamas. At its peak it was among the largest exchanges by trading volume and offered spot and derivatives trading.
  - In November 2022 the exchange faced a sudden withdrawal crisis and filed for bankruptcy after it emerged that customer funds had been improperly used. Bankman-Fried was subsequently convicted of fraud and related charges in 2023.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
