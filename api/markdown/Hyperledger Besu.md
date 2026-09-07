```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d049053df1cf9b4d57ee78bd9af6401b7b156825db3ed717c54ec02cdcee358f",
  "@type": "Page",
  "vc:slug": "hyperledger-besu",
  "title": "Hyperledger Besu",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bc-0001-blockchain",
      "vc:label": "BC-0001-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:bc-0142-smart-contract",
      "vc:label": "BC-0142-smart-contract"
    },
    {
      "@id": "urn:visionflow:linked:bc-0315-zero-knowledge-proof",
      "vc:label": "BC-0315-zero-knowledge-proof"
    },
    {
      "@id": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
      "vc:label": "BC-0426-hyperledger-fabric"
    },
    {
      "@id": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "vc:label": "BC-0428-enterprise-blockchain-architecture"
    },
    {
      "@id": "urn:visionflow:linked:bc-0429-permissioned-blockchain",
      "vc:label": "BC-0429-permissioned-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:bc-0431-privacy-preserving-blockchain",
      "vc:label": "BC-0431-privacy-preserving-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:hyperledger-foundation",
      "vc:label": "Hyperledger Foundation"
    },
    {
      "@id": "urn:visionflow:linked:hyperledger-foundation",
      "vc:label": "HyperledgerFoundation"
    },
    {
      "@id": "urn:visionflow:linked:interledger-protocol",
      "vc:label": "InterledgerProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-protocol",
      "vc:label": "ConsensusProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "Hyperledger Fabric"
    },
    {
      "@id": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "vc:label": "Practical Byzantine Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:owl:class:private-channels",
      "vc:label": "PrivateChannels"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-of-authority",
      "vc:label": "ProofOfAuthority"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-of-work",
      "vc:label": "ProofOfWork"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0427"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hyperledger Besu"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hyperledger-besu",
  "@type": "Class",
  "label": "Hyperledger Besu",
  "definition": "Enterprise-grade Ethereum client developed by the Hyperledger Foundation supporting both public and permissioned private blockchain deployments with pluggable consensus mechanisms including Proof of Work, Proof of Authority (Clique/IBFT), and Practical Byzantine Fault Tolerance (PBFT). Besu provides full EVM compatibility, privacy extensions via private transaction groups, permissioning, and a JSON-RPC/WebSocket API surface, making it suitable for enterprise consortia, regulated financial networks, and cross-chain interoperability scenarios.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-network-component",
    "label": "Network Component"
  },
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:proof-of-authority",
        "label": "Proof of Authority"
      },
      {
        "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
        "label": "Practical Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-rpc",
        "label": "JSON-RPC"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:hyperledger-foundation",
        "label": "Hyperledger Foundation"
      },
      {
        "@id": "urn:ngm:class:enterprise-blockchain-architecture",
        "label": "Enterprise Blockchain Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-blockchain",
        "label": "Privacy Preserving Blockchain"
      },
      {
        "@id": "urn:ngm:class:private-transaction",
        "label": "Private Transaction"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:private-channels",
        "label": "Private Channels"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hyperledger-fabric",
        "label": "Hyperledger Fabric"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consortium-blockchain",
        "label": "Consortium Blockchain"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:hyperledger-foundation",
        "label": "Hyperledger Foundation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:enterprise-blockchain",
        "label": "Enterprise Blockchain Client"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:besu-ethereum-client",
      "label": "Besu Ethereum Client"
    },
    {
      "@id": "urn:ngm:class:pantheon",
      "label": "Pantheon"
    }
  ],
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Enterprise-grade Ethereum client developed by [[Hyperledger Foundation]] supporting both public and private blockchain deployments with multiple consensus mechanisms—[[ProofOfWork]], [[ProofOfAuthority]], [[Practical Byzantine Fault Tolerance|PBFT]]. Besu provides full Ethereum compatibility whilst enabling permissioned networks through identity verification and privacy features like [[PrivateChannels]], making it suitable for enterprise consortia and regulatory compliance. The client integrates with [[Hyperledger Fabric]] and [[InterledgerProtocol]] for cross-chain interoperability.

- ### Semantic Classification
  - owl-class:: blockchain:HyperledgerBesu
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - implements:: [[ConsensusProtocol]] (domain: blockchain, type: consensus)
  - part-of:: [[HyperledgerFoundation]] (domain: blockchain, type: organization)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
