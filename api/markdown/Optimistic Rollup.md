public:: true

# Optimistic Rollup
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57dc0db224135b593ef64e52bf8cec6db17924d94391a6bb472ee566dcad9dcd",
  "@type": "Page",
  "vc:slug": "optimistic-rollup",
  "title": "Optimistic Rollup",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    },
    {
      "@id": "urn:visionflow:linked:evm",
      "vc:label": "EVM"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Optimistic Rollup"
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
  "@id": "urn:ngm:class:optimistic-rollup",
  "@type": "Class",
  "label": "Optimistic Rollup",
  "definition": "A layer-two scaling design that posts transaction data to a base chain and assumes results are valid unless challenged within a dispute window through a fraud proof.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:rollup",
    "label": "Rollup"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      },
      {
        "@id": "urn:ngm:class:sequencer",
        "label": "Sequencer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:evm-compatibility",
        "label": "EVM Compatibility"
      },
      {
        "@id": "urn:ngm:class:transaction-throughput",
        "label": "Transaction Throughput"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:base-layer",
        "label": "Base Layer"
      },
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimistic-execution",
        "label": "Optimistic Execution"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:calldata",
        "label": "Calldata"
      },
      {
        "@id": "urn:ngm:class:state-root",
        "label": "State Root"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:defi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK Rollup"
      },
      {
        "@id": "urn:ngm:class:plasma",
        "label": "Plasma"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      },
      {
        "@id": "urn:ngm:class:arbitrum",
        "label": "Arbitrum"
      },
      {
        "@id": "urn:ngm:class:base",
        "label": "Base Chain"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:optimistic-rollup-protocol",
      "label": "Optimistic Rollup Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:optimistic-rollup:99b0f3f9e549",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57dc0db224135b593ef64e52bf8cec6db17924d94391a6bb472ee566dcad9dcd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EVM]]",
      "resolved": "urn:visionflow:linked:evm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
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
  - A layer-two scaling design that posts transaction data to a base chain and assumes results are valid unless challenged within a dispute window through a fraud proof.

- ### Semantic Classification
  - owl-class:: blockchain:OptimisticRollup
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Rollup]]
  - bridges-to:: [[EVM]], [[Optimism]]
  - requires:: [[Smart Contract]]
  - enables:: [[Layer 2 Scaling]]

- ### Content
  - An optimistic rollup executes transactions off the base chain and publishes the resulting state together with the underlying transaction data back to it. Results are presumed correct, which is why the approach is called optimistic, and no validity proof is supplied at the time of posting.
  - Correctness is enforced through a challenge period during which any party can submit a fraud proof demonstrating an invalid state transition, causing the disputed result to be reverted. This dispute window delays final withdrawal to the base chain but allows the rollup to reuse the base chain's data availability and security while reducing execution costs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
