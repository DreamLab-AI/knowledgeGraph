public:: true

# BTC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5e4d69ee4387a036bb1887a0abe1c9c80b7334e865319bba6b7b4b561117cc50",
  "@type": "Page",
  "vc:slug": "btc",
  "title": "BTC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:store-of-value",
      "vc:label": "Store of Value"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BTC"
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
  "@id": "urn:ngm:class:btc",
  "@type": "Class",
  "label": "BTC",
  "definition": "The ticker for bitcoin, the native unit of the Bitcoin network and the first widely adopted decentralised digital currency.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency",
      "label": "Cryptocurrency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:btc:e40605e6a262",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5e4d69ee4387a036bb1887a0abe1c9c80b7334e865319bba6b7b4b561117cc50"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Store of Value]]",
      "resolved": "urn:visionflow:linked:store-of-value",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
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
  - The ticker for bitcoin, the native unit of the Bitcoin network and the first widely adopted decentralised digital currency.

- ### Semantic Classification
  - owl-class:: blockchain:BTC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]], [[Store of Value]]
  - requires:: [[Bitcoin Network]]

- ### Content
  - BTC is the standard ticker symbol for bitcoin, the unit of account on the Bitcoin network. Balances are recorded on a public ledger secured by proof-of-work mining, and the total issuance is bounded by the protocol's fixed supply schedule.
  - BTC is used as a medium of exchange, a settlement asset between participants, and a held reserve. In digital asset markets it serves as a major quote and reference currency alongside the dollar, and it is frequently represented on other ledgers through wrapped or bridged tokens.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
