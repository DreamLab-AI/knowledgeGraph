public:: true

# Aztec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec3d155457fd47ac1f199db85bcc7eaf319693f0b35963c087251ded1bcf3ce1",
  "@type": "Page",
  "vc:slug": "aztec",
  "title": "Aztec",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:aztec-protocol",
      "vc:label": "Aztec Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aztec"
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
  "@id": "urn:ngm:class:aztec",
  "@type": "Class",
  "label": "Aztec",
  "definition": "A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution, supporting encrypted notes, private state transitions, and programmable privacy at the application layer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-2-networks",
      "label": "Layer 2 Networks"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:confidential-transaction",
        "label": "Confidential Transaction"
      },
      {
        "@id": "urn:ngm:class:private-smart-contract",
        "label": "Private Smart Contract"
      },
      {
        "@id": "urn:ngm:class:programmable-privacy",
        "label": "Programmable Privacy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:encrypted-note",
        "label": "Encrypted Note"
      },
      {
        "@id": "urn:ngm:class:aztec-protocol",
        "label": "Aztec Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum-ecosystem",
        "label": "Ethereum Ecosystem"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:noir-programming-language",
        "label": "Noir Programming Language"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:transparent-blockchain",
        "label": "Transparent Blockchain"
      },
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      },
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:starknet",
        "label": "StarkNet"
      },
      {
        "@id": "urn:ngm:class:polygon-zkevm",
        "label": "Polygon zkEVM"
      },
      {
        "@id": "urn:ngm:class:tornado-cash",
        "label": "Tornado Cash"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aztec-network",
      "label": "Aztec Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aztec:4fcd983f1118",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ec3d155457fd47ac1f199db85bcc7eaf319693f0b35963c087251ded1bcf3ce1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Aztec Protocol]]",
      "resolved": "urn:visionflow:linked:aztec-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
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
  - A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution.

- ### Semantic Classification
  - owl-class:: blockchain:Aztec
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Aztec Protocol]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Privacy]]

- ### Content
  - Aztec applies zero-knowledge proofs so that transaction amounts and participants can remain hidden while still being verifiable. The network aims to bring confidential state and private contract logic to an Ethereum rollup.
  - Encrypted notes represent value, and proofs attest that state transitions are valid without revealing their contents. This combines the scaling benefits of a rollup with privacy at the application layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
