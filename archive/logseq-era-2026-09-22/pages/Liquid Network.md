public:: true

# Liquid Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:08db2cd5ba086000f42340eaf2240c38c9da92b7d4c5d957b091c8861cd35a86",
  "@type": "Page",
  "vc:slug": "liquid-network",
  "title": "Liquid Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:federation",
      "vc:label": "Federation"
    },
    {
      "@id": "urn:visionflow:linked:confidential-transactions",
      "vc:label": "Confidential Transactions"
    },
    {
      "@id": "urn:visionflow:linked:asset-issuance",
      "vc:label": "Asset Issuance"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-lightning-network",
      "vc:label": "Bitcoin Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset Domain"
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
      "vc:value": "Liquid Network"
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
  "@id": "urn:ngm:class:liquid-network",
  "@type": "Class",
  "label": "Liquid Network",
  "definition": "The Liquid Network is a Bitcoin sidechain developed by Blockstream that provides faster settlement and confidential transactions for exchanges, traders and institutions. Bitcoin is moved onto the network by locking it on the main chain and issuing an equivalent pegged asset, Liquid Bitcoin, which can later be redeemed. The network is operated by a federation of functionaries who produce blocks and manage the peg, trading some decentralisation for performance and privacy features.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component (Blockchain)"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation"
      },
      {
        "@id": "urn:ngm:class:two-way-peg",
        "label": "Two-Way Peg"
      },
      {
        "@id": "urn:ngm:class:functionary",
        "label": "Functionary"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:confidential-transactions",
        "label": "Confidential Transactions"
      },
      {
        "@id": "urn:ngm:class:asset-issuance",
        "label": "Asset Issuance"
      },
      {
        "@id": "urn:ngm:class:real-time-settlement",
        "label": "Fast Settlement"
      },
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2",
        "label": "Bitcoin Layer-2 Ecosystem"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:confidential-transactions",
        "label": "Confidential Assets Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elements-project",
        "label": "Elements Project"
      },
      {
        "@id": "urn:ngm:class:multisig",
        "label": "Script Multisig"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network",
        "label": "Bitcoin Lightning Network"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:institutional-finance",
        "label": "Institutional Finance"
      },
      {
        "@id": "urn:ngm:class:exchange-infrastructure",
        "label": "Exchange Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockstream",
        "label": "Blockstream"
      },
      {
        "@id": "urn:ngm:class:peg-mechanism",
        "label": "Peg Mechanism"
      },
      {
        "@id": "urn:ngm:class:transaction-privacy",
        "label": "Transaction Privacy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:liquid-sidechain",
      "label": "Liquid Sidechain"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:liquid-network:50c5068b5460",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:08db2cd5ba086000f42340eaf2240c38c9da92b7d4c5d957b091c8861cd35a86"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Federation]]",
      "resolved": "urn:visionflow:linked:federation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Confidential Transactions]]",
      "resolved": "urn:visionflow:linked:confidential-transactions",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Issuance]]",
      "resolved": "urn:visionflow:linked:asset-issuance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Lightning Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - The Liquid Network is a Bitcoin sidechain developed by Blockstream that provides faster settlement and confidential transactions for exchanges, traders and institutions. Bitcoin is moved onto the network by locking it on the main chain and issuing an equivalent pegged asset, Liquid Bitcoin, which can later be redeemed. The network is operated by a federation of functionaries who produce blocks and manage the peg, trading some decentralisation for performance and privacy features.

- ### Semantic Classification
  - owl-class:: blockchain:LiquidNetwork
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Bitcoin Lightning Network]], [[Digital Asset Domain]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]], [[Federation]]
  - enables:: [[Confidential Transactions]], [[Asset Issuance]]

- ### Content
  - Liquid uses a two-way peg in which bitcoin is locked on the main chain and a corresponding amount of Liquid Bitcoin is created on the sidechain. Blocks are produced on a fixed schedule by a federation, which gives faster and more predictable settlement than waiting for Bitcoin confirmations.
  - The network supports Confidential Transactions, which hide transaction amounts and asset types from public view while still allowing the network to verify that no value is created or destroyed. It also supports issuing other assets, such as stablecoins and security tokens, alongside Liquid Bitcoin.
  - The federated model means that the network's security and liveness depend on the honesty and availability of its functionaries, a deliberate trade-off aimed at institutional users who prioritise speed, privacy and asset issuance over the trust-minimisation of the base chain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
