public:: true

# sBTC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2cc8de3a0e13eea20ccdb7cf41feff90ef617f012a9b329dd26b0473e20e11d7",
  "@type": "Page",
  "vc:slug": "s-btc",
  "title": "sBTC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    },
    {
      "@id": "urn:visionflow:linked:stacks",
      "vc:label": "Stacks"
    },
    {
      "@id": "urn:visionflow:linked:https-www-stacks-co-sbtc",
      "vc:label": "https://www.stacks.co/sbtc"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-stacks-co",
      "vc:label": "https://docs.stacks.co"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "sBTC"
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
  "@id": "urn:ngm:class:s-btc",
  "@type": "Class",
  "label": "sBTC",
  "definition": "sBTC is an asset on the Stacks blockchain designed to represent Bitcoin in a decentralised manner so that it can be used in smart contracts. It is backed by bitcoin held under the protocol.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stacks",
      "label": "Stacks"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:s-btc:73a57f753f00",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2cc8de3a0e13eea20ccdb7cf41feff90ef617f012a9b329dd26b0473e20e11d7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stacks]]",
      "resolved": "urn:visionflow:linked:stacks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.stacks.co/sbtc]]",
      "resolved": "urn:visionflow:linked:https-www-stacks-co-sbtc",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.stacks.co]]",
      "resolved": "urn:visionflow:linked:https-docs-stacks-co",
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
  - sBTC is an asset on the Stacks blockchain designed to represent Bitcoin in a decentralised manner so that it can be used in smart contracts. It is backed by bitcoin held under the protocol.

- ### Semantic Classification
  - owl-class:: blockchain:sBTC
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Stacks]]
  - bridges-to:: [[Layer 2 Scaling]]
  - requires:: [[Bitcoin Network]], [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - sBTC is intended to let users move bitcoin into the Stacks environment, where it can be used in programmable applications, and later redeem it for bitcoin on the main chain. The mechanism aims to maintain a one-to-one relationship with the underlying bitcoin.
  - By representing bitcoin on a layer that supports smart contracts, sBTC seeks to enable lending, trading, and other applications that use bitcoin as collateral or settlement. Its security depends on the design of the peg and the validators who maintain it.

- ### Provenance
  - sources:: [[https://www.stacks.co/sbtc]], [[https://docs.stacks.co]]
  - migration-date:: 2026-05-29T00:00:00Z
