public:: true

# Polygon
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f8f58647742e8cca5fe188731b0862d68bd74efe4d45948e70906f3f38535112",
  "@type": "Page",
  "vc:slug": "polygon",
  "title": "Polygon",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:zk-sync",
      "vc:label": "zkSync"
    },
    {
      "@id": "urn:visionflow:linked:arbitrum",
      "vc:label": "Arbitrum"
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
      "vc:value": "Polygon"
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
  "@id": "urn:ngm:class:polygon",
  "@type": "Class",
  "label": "Polygon",
  "definition": "Polygon is a set of Ethereum scaling protocols and a development platform, originally launched as Matic Network in 2017 and rebranded to Polygon in 2021. It began as a proof-of-stake sidechain that runs in parallel to Ethereum and has expanded into zero-knowledge rollup technology, notably Polygon zkEVM, which executes Ethereum-compatible transactions with validity proofs. The architecture aims to offer lower fees and higher throughput while keeping compatibility with Ethereum tooling. The network's token, originally MATIC and migrating to POL, is used for staking and fees across Polygon chains.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      },
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zk-evm",
        "label": "zkEVM"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:validity-proof",
        "label": "Validity Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      },
      {
        "@id": "urn:ngm:class:zk-sync",
        "label": "zkSync"
      },
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:matic-network",
      "label": "Matic Network"
    },
    {
      "@id": "urn:ngm:class:polygon-pos",
      "label": "Polygon PoS"
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
  "@id": "urn:visionflow:annotation:link-resolutions:polygon:2b3b18120924",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f8f58647742e8cca5fe188731b0862d68bd74efe4d45948e70906f3f38535112"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "StubLink"
    },
    {
      "raw": "[[zkSync]]",
      "resolved": "urn:visionflow:linked:zk-sync",
      "kind": "StubLink"
    },
    {
      "raw": "[[Arbitrum]]",
      "resolved": "urn:visionflow:linked:arbitrum",
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
  - Polygon is a set of Ethereum scaling protocols and a development platform, originally launched as Matic Network in 2017 and rebranded to Polygon in 2021. It began as a proof-of-stake sidechain that runs in parallel to Ethereum and has expanded into zero-knowledge rollup technology, notably Polygon zkEVM, which executes Ethereum-compatible transactions with validity proofs. The architecture aims to offer lower fees and higher throughput while keeping compatibility with Ethereum tooling. The network's token, originally MATIC and migrating to POL, is used for staking and fees across Polygon chains.

- ### Semantic Classification
  - owl-class:: bc:Polygon
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Rollup]], [[zkSync]], [[Arbitrum]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Proof of Stake]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - The original Polygon PoS chain is a sidechain secured by its own validator set rather than directly by Ethereum, with periodic checkpoints committed to the Ethereum mainnet. This design trades some of Ethereum's security guarantees for substantially lower transaction costs, which made it a popular venue for gaming, payments and decentralised finance applications.
  - Polygon has since invested heavily in zero-knowledge cryptography. Polygon zkEVM is a zk-rollup that produces succinct validity proofs of correct execution and posts them to Ethereum, so the base layer can verify state transitions without re-running every transaction. The wider Polygon 2.0 roadmap describes a network of zk-powered chains connected through a shared interoperability layer.
  - The transition from the MATIC token to POL accompanies this shift, with POL intended to secure multiple Polygon chains through restaking. The platform also provides software development kits and a chain-deployment framework so teams can launch their own networks within the Polygon family.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
