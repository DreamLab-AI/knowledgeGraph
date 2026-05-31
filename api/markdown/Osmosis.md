public:: true

# Osmosis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2073c4c4348d4dd3e16fb3540334dcc9d487b204f7f419bc98b1355de51f1ee0",
  "@type": "Page",
  "vc:slug": "osmosis",
  "title": "Osmosis",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cosmos",
      "vc:label": "Cosmos"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Osmosis"
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
  "@id": "urn:ngm:class:osmosis",
  "@type": "Class",
  "label": "Osmosis",
  "definition": "A decentralised exchange and automated market maker built in the Cosmos ecosystem that allows cross-chain token swaps and customisable liquidity pools using the Inter-Blockchain Communication protocol.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-exchange",
      "label": "Decentralized Exchange"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
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
  "@id": "urn:visionflow:annotation:link-resolutions:osmosis:a08ebfb6519e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2073c4c4348d4dd3e16fb3540334dcc9d487b204f7f419bc98b1355de51f1ee0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cosmos]]",
      "resolved": "urn:visionflow:linked:cosmos",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:linked:decentralized-exchange",
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
  - A decentralised exchange and automated market maker built in the Cosmos ecosystem that allows cross-chain token swaps and customisable liquidity pools using the Inter-Blockchain Communication protocol.

- ### Semantic Classification
  - owl-class:: blockchain:Osmosis
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Exchange]]
  - bridges-to:: [[Liquidity Pool]]
  - requires:: [[Cosmos]], [[Automated Market Maker]]
  - enables:: [[DeFi]]

- ### Content
  - Osmosis is an application-specific blockchain in the Cosmos ecosystem that operates as a decentralised exchange built around automated market makers. It supports customisable liquidity pools with adjustable parameters and uses the Inter-Blockchain Communication protocol to enable swaps of assets from connected chains.
  - Liquidity providers deposit assets into pools to earn fees and incentives, while traders swap against those pools. Its design illustrates how interchain interoperability can underpin decentralised finance across multiple sovereign blockchains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
