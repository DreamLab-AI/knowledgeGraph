public:: true

# F2Pool
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8cfc0ecc5b4e1b85e9d3d376bbaff490dd70ddcd2fbdf91d8748d16026d080b7",
  "@type": "Page",
  "vc:slug": "f-2-pool",
  "title": "F2Pool",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:mining-pool",
      "vc:label": "Mining Pool"
    },
    {
      "@id": "urn:visionflow:linked:https-www-f-2-pool-com",
      "vc:label": "https://www.f2pool.com"
    },
    {
      "@id": "urn:visionflow:linked:https-www-f-2-pool-com-help",
      "vc:label": "https://www.f2pool.com/help"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "F2Pool"
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
  "@id": "urn:ngm:class:f-2-pool",
  "@type": "Class",
  "label": "F2Pool",
  "definition": "F2Pool is one of the oldest Bitcoin mining pools, allowing miners to combine hash power and share block rewards. It also supports mining for other cryptocurrencies.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mining-pool",
      "label": "Mining Pool"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-mining",
        "label": "Bitcoin Mining"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:f-2-pool:39f7c6cd9f29",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8cfc0ecc5b4e1b85e9d3d376bbaff490dd70ddcd2fbdf91d8748d16026d080b7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mining Pool]]",
      "resolved": "urn:visionflow:linked:mining-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.f2pool.com]]",
      "resolved": "urn:visionflow:linked:https-www-f-2-pool-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.f2pool.com/help]]",
      "resolved": "urn:visionflow:linked:https-www-f-2-pool-com-help",
      "kind": "StubLink"
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
  - F2Pool is one of the oldest Bitcoin mining pools, allowing miners to combine hash power and share block rewards. It also supports mining for other cryptocurrencies.

- ### Semantic Classification
  - owl-class:: blockchain:F2Pool
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Mining Pool]]
  - bridges-to:: [[Bitcoin Network]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[Transaction Validation]]

- ### Content
  - F2Pool aggregates the hash power of many miners so that they receive more regular payouts than they would mining alone. The pool coordinates work assignment and distributes rewards according to contributed shares.
  - Operating since the early years of large-scale Bitcoin mining, F2Pool has been a consistent contributor to network hash rate. It supports several proof-of-work cryptocurrencies in addition to Bitcoin.

- ### Provenance
  - sources:: [[https://www.f2pool.com]], [[https://www.f2pool.com/help]]
  - migration-date:: 2026-05-29T00:00:00Z
