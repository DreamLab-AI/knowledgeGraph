public:: true

# Arbitrum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94f78bf12e5c8627c90f6d955e94cd5339ac5de4454d1ed41056c46ca4d080da",
  "@type": "Page",
  "vc:slug": "arbitrum",
  "title": "Arbitrum",
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
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
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
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Arbitrum"
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
  "@id": "urn:ngm:class:arbitrum",
  "@type": "Class",
  "label": "Arbitrum",
  "definition": "Arbitrum is a family of Ethereum layer-2 scaling solutions developed by Offchain Labs that use optimistic rollup technology to increase transaction throughput and reduce fees. Its flagship network, Arbitrum One, launched on mainnet in 2021 and executes transactions in a custom virtual machine while posting transaction data and state commitments to Ethereum. Arbitrum's interactive multi-round fraud-proof protocol distinguishes it from other optimistic rollups by narrowing disputes to a single instruction before on-chain resolution. The ARB token governs the network through the Arbitrum DAO, and Arbitrum Nitro and Orbit extend the technology to custom chains.",
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
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
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
  "@id": "urn:visionflow:annotation:link-resolutions:arbitrum:143b9b70edf7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94f78bf12e5c8627c90f6d955e94cd5339ac5de4454d1ed41056c46ca4d080da"
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
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
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
  - Arbitrum is a family of Ethereum layer-2 scaling solutions developed by Offchain Labs that use optimistic rollup technology to increase transaction throughput and reduce fees. Its flagship network, Arbitrum One, launched on mainnet in 2021 and executes transactions in a custom virtual machine while posting transaction data and state commitments to Ethereum. Arbitrum's interactive multi-round fraud-proof protocol distinguishes it from other optimistic rollups by narrowing disputes to a single instruction before on-chain resolution. The ARB token governs the network through the Arbitrum DAO, and Arbitrum Nitro and Orbit extend the technology to custom chains.

- ### Semantic Classification
  - owl-class:: bc:Arbitrum
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Optimism]], [[zkSync]], [[Polygon]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Rollup]], [[Fraud Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - Arbitrum scales Ethereum by moving computation and state off the base layer while still settling on it. Transactions are sequenced and executed off-chain, and batches of data are posted to Ethereum so that the layer-2 state can be reconstructed and verified by anyone. Because the system is optimistic, results are accepted unless a validator submits a fraud proof during the challenge window.
  - Its dispute mechanism uses interactive bisection: when two parties disagree about a computation, they repeatedly narrow the disagreement until it concerns a single virtual-machine step, which Ethereum then adjudicates cheaply. The Nitro upgrade replaced the original custom VM stack with a system that compiles to WebAssembly and reuses the standard Geth execution engine for closer Ethereum compatibility.
  - Arbitrum is one of the largest layer-2 networks by total value locked and hosts many decentralised finance protocols. The Orbit framework lets developers deploy application-specific chains that settle to Arbitrum One or Nova, extending the rollup design to bespoke environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
