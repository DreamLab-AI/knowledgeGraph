public:: true

# Starknet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0b7812ac5c5825bb16efebbbba8241e0a4744575f54c3d0a83d1e6efb9d83406",
  "@type": "Page",
  "vc:slug": "starknet",
  "title": "Starknet",
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
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
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
      "vc:value": "Starknet"
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
  "@id": "urn:ngm:class:starknet",
  "@type": "Class",
  "label": "Starknet",
  "definition": "A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written in the Cairo programming language, enabling high-throughput, low-cost transactions while inheriting Ethereum's settlement security.",
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
        "@id": "urn:ngm:class:cairo-programming-language",
        "label": "Cairo Programming Language"
      },
      {
        "@id": "urn:ngm:class:proof-generation",
        "label": "Proof Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:provable-computation",
        "label": "Provable Computation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:stark-proof",
        "label": "STARK Proof"
      },
      {
        "@id": "urn:ngm:class:sequencer",
        "label": "Sequencer"
      },
      {
        "@id": "urn:ngm:class:prover",
        "label": "Prover"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:ethereum-ecosystem",
        "label": "Ethereum Ecosystem"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:validity-proof",
        "label": "Validity Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zkrollup",
        "label": "ZK Rollup"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zksync",
        "label": "ZKSync"
      },
      {
        "@id": "urn:ngm:class:polygon-zkevm",
        "label": "Polygon zkEVM"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:starkware-starknet",
      "label": "StarkWare Starknet"
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
  "@id": "urn:visionflow:annotation:link-resolutions:starknet:fd187671a1d5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0b7812ac5c5825bb16efebbbba8241e0a4744575f54c3d0a83d1e6efb9d83406"
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
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
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
  - A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written for the Cairo virtual machine.

- ### Semantic Classification
  - owl-class:: blockchain:Starknet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Scalability]]

- ### Content
  - Starknet batches transactions off-chain and posts a succinct STARK proof to Ethereum attesting that the batch executed correctly. Validity proofs let the network inherit Ethereum settlement security without re-executing each transaction on the base layer.
  - Programs on Starknet are written in Cairo, a language designed for provable computation. The approach reduces per-transaction cost by amortising proof generation across many transactions while keeping data and proof verification on the main chain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
