public:: true

# Aztec Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2bec496484a28b5f78e66e697e0cc4ff4825383796aee1e70852336cfa929d8a",
  "@type": "Page",
  "vc:slug": "aztec-protocol",
  "title": "Aztec Protocol",
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
      "@id": "urn:visionflow:linked:aztec-network",
      "vc:label": "Aztec Network"
    },
    {
      "@id": "urn:visionflow:linked:aztec",
      "vc:label": "Aztec"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aztec Protocol"
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
  "@id": "urn:ngm:class:aztec-protocol",
  "@type": "Class",
  "label": "Aztec Protocol",
  "definition": "The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private smart contracts on Ethereum, enabling programmable privacy through a UTXO-style note commitment scheme verified by recursive ZK rollup proofs.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:aztec",
      "label": "Aztec"
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
        "label": "Recursive SNARK"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Note Commitment Scheme"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:confidential-transactions",
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
    "implements": [
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK Rollup"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:plonk",
        "label": "PLONK Proof System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:noir",
        "label": "Noir Programming Language"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:aztec-network",
        "label": "Aztec Network"
      },
      {
        "@id": "urn:ngm:class:aztec",
        "label": "Aztec Connect"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tornado-cash",
        "label": "Tornado Cash"
      },
      {
        "@id": "urn:ngm:class:zcash",
        "label": "Zcash"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aztec-zk-rollup",
      "label": "Aztec ZK Rollup"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aztec-protocol:dd586b97f09c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2bec496484a28b5f78e66e697e0cc4ff4825383796aee1e70852336cfa929d8a"
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
      "raw": "[[Aztec Network]]",
      "resolved": "urn:visionflow:linked:aztec-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Aztec]]",
      "resolved": "urn:visionflow:linked:aztec",
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
  - The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private contracts on Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain:AztecProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Aztec]]
  - bridges-to:: [[Aztec Network]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Privacy]]

- ### Content
  - The Aztec protocol represents value as encrypted notes and uses zero-knowledge proofs to show that spends and state updates are valid without exposing amounts or parties. Proofs are verified on Ethereum to anchor the rollup.
  - By keeping computation private while still provable, the protocol supports application logic that handles confidential data. It targets use cases where on-chain transparency would otherwise leak sensitive information.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
