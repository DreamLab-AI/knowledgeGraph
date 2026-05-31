public:: true

# Coinbase
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dea5fd255c1c5814283904e976f177caaf0c58b32ac07aaed76d264ab3d8ff77",
  "@type": "Page",
  "vc:slug": "coinbase",
  "title": "Coinbase",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:binance",
      "vc:label": "Binance"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Coinbase"
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
  "@id": "urn:ngm:class:coinbase",
  "@type": "Class",
  "label": "Coinbase",
  "definition": "Coinbase is a United States cryptocurrency exchange and custody company founded in 2012 by Brian Armstrong and Fred Ehrsam. It provides retail and institutional trading, custody, staking and payment services, and operates one of the largest regulated crypto platforms in the country. The company listed on the Nasdaq through a direct listing in 2021, becoming the first major crypto exchange to go public in the United States. Coinbase also develops the Base layer-2 network and supports a self-custody wallet alongside its hosted services.",
  "domain": "coinbase",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset-domain",
      "label": "Digital Asset Domain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:coinbase:f80f21938e52",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dea5fd255c1c5814283904e976f177caaf0c58b32ac07aaed76d264ab3d8ff77"
  },
  "vc:resolutions": [
    {
      "raw": "[[Binance]]",
      "resolved": "urn:visionflow:linked:binance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
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
  - Coinbase is a United States cryptocurrency exchange and custody company founded in 2012 by Brian Armstrong and Fred Ehrsam. It provides retail and institutional trading, custody, staking and payment services, and operates one of the largest regulated crypto platforms in the country. The company listed on the Nasdaq through a direct listing in 2021, becoming the first major crypto exchange to go public in the United States. Coinbase also develops the Base layer-2 network and supports a self-custody wallet alongside its hosted services.

- ### Semantic Classification
  - owl-class:: org:Coinbase
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Digital Asset Domain]]
  - bridges-to:: [[Binance]], [[Optimism]]

- ### Content
  - Coinbase operates as a centralised exchange where users buy, sell and hold a range of cryptocurrencies, with the company acting as custodian for most retail balances. It serves both individual customers through consumer products and institutions through prime brokerage, custody and trading services.
  - The firm has positioned itself around regulatory compliance in the United States, obtaining licences and engaging with supervisors, which differentiated it from offshore competitors. Its 2021 direct listing on Nasdaq marked a milestone for the sector's integration with public capital markets.
  - Beyond exchange services, Coinbase has expanded into infrastructure. It launched Base, an Ethereum layer-2 network built on the OP Stack, and offers a self-custody wallet, reflecting a strategy that spans both hosted custody and user-controlled on-chain activity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
