public:: true

# Oracle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:35dc61fea3cf79782819482db05ba38a7326f7e12a6f6b3b9884ef3a477f9a69",
  "@type": "Page",
  "vc:slug": "oracle",
  "title": "Oracle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:chainlink",
      "vc:label": "Chainlink"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-developers-docs-oracles",
      "vc:label": "https://ethereum.org/en/developers/docs/oracles/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Oracle"
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
  "@id": "urn:ngm:class:oracle",
  "@type": "Class",
  "label": "Oracle",
  "definition": "In blockchain systems, a mechanism that brings external off-chain information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles form the trust boundary between deterministic on-chain logic and the variable outside world, and may be centralised reporters or decentralised aggregation networks.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:blockchain-infrastructure",
    "label": "Blockchain Infrastructure"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      },
      {
        "@id": "urn:ngm:class:data-feed",
        "label": "Data Feed"
      },
      {
        "@id": "urn:ngm:class:oracle-node",
        "label": "Oracle Node"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Blockchain Middleware"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:prediction-markets",
        "label": "Prediction Market"
      },
      {
        "@id": "urn:ngm:class:parametric-insurance",
        "label": "Parametric Insurance"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:external-data-source",
        "label": "External Data Source"
      },
      {
        "@id": "urn:ngm:class:provider",
        "label": "API Provider"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:oracle-network",
        "label": "Decentralised Oracle Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:chainlink",
        "label": "Chainlink"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-oracle",
        "label": "Centralised Oracle"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:real-world-data",
        "label": "Real-World Data"
      },
      {
        "@id": "urn:ngm:class:iot-sensor",
        "label": "IoT Sensor"
      },
      {
        "@id": "urn:ngm:class:supply-chain-data",
        "label": "Supply Chain Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:blockchain-oracle",
      "label": "Blockchain Oracle"
    },
    {
      "@id": "urn:ngm:class:data-oracle",
      "label": "Data Oracle"
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
  "@id": "urn:visionflow:annotation:link-resolutions:oracle:9202af6ce925",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:35dc61fea3cf79782819482db05ba38a7326f7e12a6f6b3b9884ef3a477f9a69"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Chainlink]]",
      "resolved": "urn:visionflow:linked:chainlink",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/developers/docs/oracles/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-developers-docs-oracles",
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
  - In blockchain systems, a mechanism that brings external information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles are the boundary between deterministic on-chain logic and the variable outside world.

- ### Semantic Classification
  - owl-class:: blockchain:Oracle
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Price Oracle]], [[Chainlink]]
  - requires:: [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - An oracle is the component that feeds off-chain data, such as asset prices, weather or event outcomes, into smart contracts. Since a blockchain is deterministic and isolated, it cannot fetch external data on its own, so the oracle performs that role.
  - Centralised oracles rely on a single trusted reporter, while decentralised oracle networks aggregate many sources and add economic penalties to discourage false reporting. Contract correctness depends heavily on the accuracy and tamper resistance of the oracle.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/oracles/]]
  - migration-date:: 2026-05-29T00:00:00Z
