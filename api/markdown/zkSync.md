public:: true

# zkSync
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e704b7567069cb6cabdc2b757a9a6dad6fb32032e7a8c1ba22d9e43e15438929",
  "@type": "Page",
  "vc:slug": "zk-sync",
  "title": "zkSync",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
    },
    {
      "@id": "urn:visionflow:linked:arbitrum",
      "vc:label": "Arbitrum"
    },
    {
      "@id": "urn:visionflow:linked:polygon",
      "vc:label": "Polygon"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "zkSync"
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
  "@id": "urn:ngm:class:zk-sync",
  "@type": "Class",
  "label": "zkSync",
  "definition": "zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactions is valid, the network achieves Ethereum-level settlement security without an optimistic challenge period. zkSync is part of a broader effort to scale Ethereum through zero-knowledge cryptography.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero Knowledge Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance-domain",
        "label": "Decentralised Finance Domain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:zk-sync:5dd5631330aa",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e704b7567069cb6cabdc2b757a9a6dad6fb32032e7a8c1ba22d9e43e15438929"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Arbitrum]]",
      "resolved": "urn:visionflow:linked:arbitrum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Polygon]]",
      "resolved": "urn:visionflow:linked:polygon",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactions is valid, the network achieves Ethereum-level settlement security without an optimistic challenge period. zkSync is part of a broader effort to scale Ethereum through zero-knowledge cryptography.

- ### Semantic Classification
  - owl-class:: bc:ZkSync
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Optimism]], [[Arbitrum]], [[Polygon]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Rollup]], [[Zero Knowledge Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - zkSync scales Ethereum using the zero-knowledge rollup model, in which transactions are executed off-chain and a succinct validity proof is generated attesting that the resulting state transition is correct. The proof is verified on Ethereum, so the network does not need the multi-day challenge windows associated with optimistic rollups before funds can be withdrawn securely.
  - zkSync Era provides an EVM-compatible environment, letting developers deploy Solidity contracts and use familiar tooling while the underlying system handles proof generation. This compatibility lowers the barrier to porting existing Ethereum applications onto the layer-2.
  - Matter Labs has also developed the ZK Stack, a framework for launching custom zk-powered chains, reflecting a wider trend toward modular rollup ecosystems. zkSync is one of several leading zk-rollups competing to scale Ethereum through validity proofs rather than fraud proofs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
