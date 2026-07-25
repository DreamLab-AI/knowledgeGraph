public:: true

# Connext
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:de88a03f440ca3ec7b93292120b23d66b12ff9fa5ee5e56e9f1ab5e7f914a7e6",
  "@type": "Page",
  "vc:slug": "connext",
  "title": "Connext",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Connext"
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
  "@id": "urn:ngm:class:connext",
  "@type": "Class",
  "label": "Connext",
  "definition": "A cross-chain interoperability protocol that enables fast transfers and contract calls between Ethereum-compatible blockchains and Layer 2 networks without relying on a single trusted custodian, coordinating liquidity routers and a verification layer to achieve trust-minimised cross-chain composability.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-chain-bridge",
      "label": "Cross-Chain Bridge"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:squid-router",
        "label": "Router"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:cross-chain-messaging",
        "label": "Cross-Chain Messaging"
      },
      {
        "@id": "urn:ngm:class:cross-chain-composability",
        "label": "Cross-Chain Composability"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hashed-timelock-contract",
        "label": "Hashed Timelock Contract"
      },
      {
        "@id": "urn:ngm:class:optimistic-verification",
        "label": "Optimistic Verification"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:trusted-bridge",
        "label": "Trusted Bridge"
      },
      {
        "@id": "urn:ngm:class:wrapped-token",
        "label": "Wrapped Token"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:evm-compatibility",
        "label": "EVM Compatibility"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      },
      {
        "@id": "urn:ngm:class:intent-based-bridging",
        "label": "Intent-Based Bridging"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:nxtp-protocol",
      "label": "NXTP Protocol"
    },
    {
      "@id": "urn:ngm:class:everclear",
      "label": "Everclear"
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
  "@id": "urn:visionflow:annotation:link-resolutions:connext:4a4ca0f18078",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:de88a03f440ca3ec7b93292120b23d66b12ff9fa5ee5e56e9f1ab5e7f914a7e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:linked:cross-chain-bridge",
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
  - A cross-chain interoperability protocol that enables fast transfers and contract calls between Ethereum-compatible blockchains and Layer 2 networks without relying on a single trusted custodian.

- ### Semantic Classification
  - owl-class:: blockchain:Connext
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Cross-Chain Bridge]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Liquidity Pool]]
  - enables:: [[Interoperability]]

- ### Content
  - Connext is a protocol for moving value and messages between Ethereum-compatible chains and Layer 2 rollups. It uses liquidity provided by routers together with a verification layer to transfer assets and trigger cross-chain contract calls, aiming to minimise trust in any single intermediary.
  - By coordinating local liquidity pools across networks, Connext supports cross-chain transfers and composable interactions that let applications span multiple chains while preserving the security assumptions of the underlying networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
