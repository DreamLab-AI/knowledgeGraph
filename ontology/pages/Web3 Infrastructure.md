public:: true

# Web3 Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48288d06bcb9a1172a94d4604571ebc39ff09d8bbc63a523018326264d0ecaea",
  "@type": "Page",
  "vc:slug": "web-3-infrastructure",
  "title": "Web3 Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-developers-docs",
      "vc:label": "https://ethereum.org/en/developers/docs/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-web-3",
      "vc:label": "https://en.wikipedia.org/wiki/Web3"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Web3 Infrastructure"
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
  "@id": "urn:ngm:class:web-3-infrastructure",
  "@type": "Class",
  "label": "Web3 Infrastructure",
  "definition": "Web3 infrastructure is the set of protocols, nodes, storage and tooling that supports decentralised applications built on blockchain networks, encompassing peer-to-peer communication layers, decentralised storage, indexing services, cross-chain bridges, and wallet primitives.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:blockchain",
    "label": "Blockchain"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:blockchain-node",
        "label": "Blockchain Node"
      },
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      },
      {
        "@id": "urn:ngm:class:blockchain-oracle",
        "label": "Blockchain Oracle"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-web",
        "label": "Decentralised Web"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Centralised Cloud Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentralised-network-infrastructure",
      "label": "Decentralised Network Infrastructure"
    },
    {
      "@id": "urn:ngm:class:blockchain-infrastructure",
      "label": "Blockchain Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-3-infrastructure:2c92c4123aa1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48288d06bcb9a1172a94d4604571ebc39ff09d8bbc63a523018326264d0ecaea"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/developers/docs/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-developers-docs",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Web3]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-web-3",
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
  - Web3 infrastructure is the set of protocols, nodes, storage and tooling that supports decentralised applications built on blockchain networks.

- ### Semantic Classification
  - owl-class:: distributed-systems:Web3Infrastructure
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Interoperability]]
  - requires:: [[Distributed Ledger Technology]]
  - enables:: [[Decentralised Identity]]

- ### Content
  - Web3 infrastructure includes blockchain nodes, remote procedure call endpoints, decentralised storage, indexing services and wallet tooling. These components allow applications to read from and write to distributed ledgers.
  - Providers operate node networks and indexing layers so that developers can build without running full chain infrastructure themselves. Cross-chain bridges and oracles extend connectivity between networks and external data.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/]], [[https://en.wikipedia.org/wiki/Web3]]
  - migration-date:: 2026-05-29T00:00:00Z
