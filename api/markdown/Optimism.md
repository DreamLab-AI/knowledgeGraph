public:: true

# Optimism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:628d9f74a2c65d77f4a23598df015a0e5077defc868cf6e3a03d6315e2800c51",
  "@type": "Page",
  "vc:slug": "optimism",
  "title": "Optimism",
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
      "@id": "urn:visionflow:linked:fraud-proof",
      "vc:label": "Fraud Proof"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:arbitrum",
      "vc:label": "Arbitrum"
    },
    {
      "@id": "urn:visionflow:linked:zk-sync",
      "vc:label": "zkSync"
    },
    {
      "@id": "urn:visionflow:linked:polygon",
      "vc:label": "Polygon"
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
      "vc:value": "Optimism"
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
  "@id": "urn:ngm:class:optimism",
  "@type": "Class",
  "label": "Optimism",
  "definition": "Optimism is an Ethereum layer-2 scaling network that uses optimistic rollup technology to process transactions off the main chain while inheriting Ethereum security. Launched on mainnet in late 2021 by OP Labs, it batches transactions and posts compressed data and state commitments to Ethereum, assuming validity unless challenged within a dispute window. It is closely associated with the OP Stack, a modular open-source framework for building rollup chains, and the broader Superchain concept that links such chains. The OP token governs the Optimism Collective and funds public-goods initiatives through retroactive funding rounds.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:blockchain",
    "label": "Blockchain"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      },
      {
        "@id": "urn:ngm:class:sequencer",
        "label": "Sequencer"
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
        "@id": "urn:ngm:class:superchain",
        "label": "Superchain"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-goods-funding",
        "label": "Public Goods Funding"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:op-stack",
        "label": "OP Stack"
      },
      {
        "@id": "urn:ngm:class:optimism-collective",
        "label": "Optimism Collective"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Ecosystem"
      },
      {
        "@id": "urn:ngm:class:superchain",
        "label": "Superchain"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM Equivalence"
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
        "@id": "urn:ngm:class:polygon",
        "label": "Polygon"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-rollup",
        "label": "Zero-Knowledge Rollup"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:eip-4844",
        "label": "EIP-4844"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:retroactive-public-goods-funding",
        "label": "Retroactive Public Goods Funding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:base",
        "label": "Base Chain"
      },
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:op-mainnet",
      "label": "OP Mainnet"
    },
    {
      "@id": "urn:ngm:class:optimism-network",
      "label": "Optimism Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:optimism:c9c3722d768c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:628d9f74a2c65d77f4a23598df015a0e5077defc868cf6e3a03d6315e2800c51"
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
      "kind": "StubLink"
    },
    {
      "raw": "[[Fraud Proof]]",
      "resolved": "urn:visionflow:linked:fraud-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Arbitrum]]",
      "resolved": "urn:visionflow:linked:arbitrum",
      "kind": "StubLink"
    },
    {
      "raw": "[[zkSync]]",
      "resolved": "urn:visionflow:linked:zk-sync",
      "kind": "StubLink"
    },
    {
      "raw": "[[Polygon]]",
      "resolved": "urn:visionflow:linked:polygon",
      "kind": "StubLink"
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
  - Optimism is an Ethereum layer-2 scaling network that uses optimistic rollup technology to process transactions off the main chain while inheriting Ethereum security. Launched on mainnet in late 2021 by OP Labs, it batches transactions and posts compressed data and state commitments to Ethereum, assuming validity unless challenged within a dispute window. It is closely associated with the OP Stack, a modular open-source framework for building rollup chains, and the broader Superchain concept that links such chains. The OP token governs the Optimism Collective and funds public-goods initiatives through retroactive funding rounds.

- ### Semantic Classification
  - owl-class:: bc:Optimism
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Arbitrum]], [[zkSync]], [[Polygon]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Rollup]], [[Fraud Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - Optimism follows the optimistic rollup model, in which transactions are executed off-chain and their results are presumed correct by default. Anyone may submit a fraud proof during a challenge period to contest an invalid state transition, and the protocol re-executes the disputed step on Ethereum to resolve the claim. This design lowers fees and increases throughput compared with executing every transaction on the base layer.
  - The network's software is packaged as the OP Stack, which standardises the components needed to launch a rollup, including the execution client, the rollup node and the settlement contracts on Ethereum. Several chains, including Base, are built on this stack, and the shared design is intended to allow interoperability across a family of related networks.
  - Governance operates through the Optimism Collective, split between a Token House of OP holders and a Citizens' House focused on funding public goods. This structure reflects the project's emphasis on directing protocol revenue toward open-source infrastructure that benefits the wider Ethereum community.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
