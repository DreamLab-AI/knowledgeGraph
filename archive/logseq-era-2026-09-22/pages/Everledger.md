public:: true

# Everledger
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6e3dbd4f83fe339d793b67402c1148014bf69b45f19e6a696a42c33ffd53396",
  "@type": "Page",
  "vc:slug": "everledger",
  "title": "Everledger",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:provenance",
      "vc:label": "Provenance"
    },
    {
      "@id": "urn:visionflow:linked:permissioned-blockchain",
      "vc:label": "Permissioned Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:https-everledger-io",
      "vc:label": "https://everledger.io/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Everledger"
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
  "@id": "urn:ngm:class:everledger",
  "@type": "Class",
  "label": "Everledger",
  "definition": "A technology company that built a blockchain-based registry for tracking the provenance of high-value physical assets such as diamonds and gemstones. The registry links a unique digital record to each physical item to support authenticity and ownership claims.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain",
      "label": "Supply Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:everledger:91eb90f6be6a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6e3dbd4f83fe339d793b67402c1148014bf69b45f19e6a696a42c33ffd53396"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance]]",
      "resolved": "urn:visionflow:linked:provenance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Permissioned Blockchain]]",
      "resolved": "urn:visionflow:linked:permissioned-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://everledger.io/]]",
      "resolved": "urn:visionflow:linked:https-everledger-io",
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
  - A technology company that built a blockchain-based registry for tracking the provenance of high-value physical assets such as diamonds and gemstones. The registry links a unique digital record to each physical item to support authenticity and ownership claims.

- ### Semantic Classification
  - owl-class:: blockchain:Everledger
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Supply Chain]]
  - bridges-to:: [[Permissioned Blockchain]], [[Distributed Ledger]]
  - requires:: [[Distributed Ledger Technology]]
  - enables:: [[Provenance]]

- ### Content
  - Everledger created a digital ledger that records the characteristics and history of individual assets, most prominently diamonds, to deter fraud and support ethical sourcing claims. Each item is given a tamper-evident record that follows it through the supply chain.
  - By recording provenance on a shared ledger, the system lets insurers, buyers and certifiers verify an asset's history without relying on a single intermediary's database. The same approach was extended to other categories of high-value goods.

- ### Provenance
  - sources:: [[https://everledger.io/]]
  - migration-date:: 2026-05-29T00:00:00Z
