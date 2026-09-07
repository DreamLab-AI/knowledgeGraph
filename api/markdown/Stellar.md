```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3e29b19476b4294734808571ac517e5855091500899f6f7d0eeec8244fcee220",
  "@type": "Page",
  "vc:slug": "stellar",
  "title": "Stellar",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Stellar"
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
  "@id": "urn:ngm:class:stellar",
  "@type": "Class",
  "label": "Stellar",
  "definition": "Stellar is an open blockchain network and protocol designed for fast, low-cost transfer and exchange of digital representations of value, including fiat-backed tokens and stablecoins.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:layer-1-blockchain",
      "label": "Layer 1 Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
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

- ### Definition
  - Stellar is an open blockchain network and protocol designed for fast, low-cost transfer and exchange of digital representations of value, including fiat-backed tokens and stablecoins.

- ### Semantic Classification
  - owl-class:: metaverse:Stellar
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Stablecoin]], [[Payment Network]]
  - requires:: [[Blockchain]]
  - enables:: [[Cross-Border Payments]]

- ### Content
  - Stellar uses a federated agreement consensus mechanism to reach finality quickly without proof-of-work mining, and it includes a built-in decentralised exchange and asset issuance. Anchors connect on-chain tokens to off-chain currencies.
  - The network targets remittances and cross-border payments where speed and cost matter, and it has been used to issue fiat-backed stablecoins. It sits in the broader payment network and stablecoin space.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
