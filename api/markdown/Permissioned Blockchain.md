public:: true
alias:: BC-0029-permissioned-blockchain, BC-0429-permissioned-blockchain, PermissionedBlockchain

# Permissioned Blockchain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:19c6a790aa4c8f946d79c28ef559b03773f9cd7c17e5fe8dab6c579c5547d6ac",
  "@type": "Page",
  "vc:slug": "permissioned-blockchain",
  "title": "Permissioned Blockchain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bc-0001-blockchain",
      "vc:label": "BC-0001-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:bc-0120-consensus-mechanism",
      "vc:label": "BC-0120-consensus-mechanism"
    },
    {
      "@id": "urn:visionflow:linked:bc-0245-proof-of-authority",
      "vc:label": "BC-0245-proof-of-authority"
    },
    {
      "@id": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
      "vc:label": "BC-0426-hyperledger-fabric"
    },
    {
      "@id": "urn:visionflow:linked:bc-0427-hyperledger-besu",
      "vc:label": "BC-0427-hyperledger-besu"
    },
    {
      "@id": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "vc:label": "BC-0428-enterprise-blockchain-architecture"
    },
    {
      "@id": "urn:visionflow:linked:bc-0430-private-channels",
      "vc:label": "BC-0430-private-channels"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "Hyperledger Fabric"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "HyperledgerFabric"
    },
    {
      "@id": "urn:visionflow:owl:class:private-channels",
      "vc:label": "PrivateChannels"
    },
    {
      "@id": "urn:visionflow:owl:class:quorum-blockchain",
      "vc:label": "Quorum Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:quorum-blockchain",
      "vc:label": "QuorumBlockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:r3-corda",
      "vc:label": "R3 Corda"
    },
    {
      "@id": "urn:visionflow:owl:class:r3-corda",
      "vc:label": "R3Corda"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "SmartContract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0429"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Permissioned Blockchain"
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
  "@id": "urn:ngm:class:permissioned-blockchain",
  "@type": "Class",
  "label": "Permissioned Blockchain",
  "definition": "A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable consensus mechanisms, enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintaining regulatory compliance and business confidentiality. Access control is enforced at multiple layers—node permissioning restricting which organisations participate, account permissioning controlling transaction submission, and private channels enabling confidential subsets of participants to conduct transactions invisibly to others.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-ledger",
    "label": "Distributed Ledger"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:private-channels",
        "label": "Private Channels"
      },
      {
        "@id": "urn:ngm:class:membership-service-provider",
        "label": "Membership Service Provider"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:enterprise-blockchain-architecture",
        "label": "Enterprise Blockchain Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:proof-of-authority",
        "label": "Proof of Authority"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:auditability",
        "label": "Auditability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:hyperledger-fabric",
        "label": "Hyperledger Fabric"
      },
      {
        "@id": "urn:ngm:class:hyperledger-besu",
        "label": "Hyperledger Besu"
      },
      {
        "@id": "urn:ngm:class:quorum-blockchain",
        "label": "Quorum Blockchain"
      },
      {
        "@id": "urn:ngm:class:r3-corda",
        "label": "R3 Corda"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hashing"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      },
      {
        "@id": "urn:ngm:class:trade-finance",
        "label": "Trade Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:public-blockchain",
        "label": "Public Blockchain"
      },
      {
        "@id": "urn:ngm:class:private-blockchain",
        "label": "Private Blockchain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-consensus",
        "label": "Distributed Consensus"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:consortium-blockchain",
      "label": "Consortium Blockchain"
    },
    {
      "@id": "urn:ngm:class:enterprise-blockchain",
      "label": "Enterprise Blockchain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:permissioned-blockchain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:19c6a790aa4c8f946d79c28ef559b03773f9cd7c17e5fe8dab6c579c5547d6ac"
  },
  "vc:resolutions": [
    {
      "raw": "[[BC-0001-blockchain]]",
      "resolved": "urn:visionflow:linked:bc-0001-blockchain",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0120-consensus-mechanism]]",
      "resolved": "urn:visionflow:linked:bc-0120-consensus-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0245-proof-of-authority]]",
      "resolved": "urn:visionflow:linked:bc-0245-proof-of-authority",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0426-hyperledger-fabric]]",
      "resolved": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0427-hyperledger-besu]]",
      "resolved": "urn:visionflow:linked:bc-0427-hyperledger-besu",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0428-enterprise-blockchain-architecture]]",
      "resolved": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0430-private-channels]]",
      "resolved": "urn:visionflow:linked:bc-0430-private-channels",
      "kind": "StubLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism|consensus mechanisms]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hyperledger Fabric]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HyperledgerFabric]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PrivateChannels]]",
      "resolved": "urn:visionflow:owl:class:private-channels",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quorum Blockchain]]",
      "resolved": "urn:visionflow:owl:class:quorum-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[QuorumBlockchain]]",
      "resolved": "urn:visionflow:owl:class:quorum-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[R3 Corda]]",
      "resolved": "urn:visionflow:owl:class:r3-corda",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[R3Corda]]",
      "resolved": "urn:visionflow:owl:class:r3-corda",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SmartContract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable [[Consensus Mechanism|consensus mechanisms]], enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintaining regulatory compliance and business confidentiality. Permissioned blockchains implement access control at multiple layers—node permissioning restricting which organisations participate, account permissioning controlling transaction submission, and [[PrivateChannels]] enabling confidential subsets of participants to conduct transactions invisibly to others—deployed extensively in enterprise contexts including [[Hyperledger Fabric]], [[Quorum Blockchain]], and [[R3 Corda]] supporting supply chain, trade finance, healthcare, and financial services applications.

- ### Semantic Classification
  - owl-class:: blockchain:PermissionedBlockchain
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - requires:: [[BC-0120-consensus-mechanism]]

- ### Content
  - Restricted-access distributed ledgers controlled by known participants implementing access control at multiple layers—node permissioning restricting participant organisations, account permissioning controlling transaction submission, and [[PrivateChannels]] enabling confidential transaction subsets. Permissioned blockchains maintain blockchain's immutability, transparency, and [[SmartContract]] capabilities whilst enabling regulatory compliance and business confidentiality unsuitable for public networks, deployed across enterprise contexts including [[HyperledgerFabric]], [[QuorumBlockchain]], and [[R3Corda]] supporting supply chain, trade finance, healthcare, and financial services.

- ### Current Landscape (2026)
  - Hyperledger Fabric 3.0 (2025) replaced the crash-tolerant Raft default with a production Byzantine-fault-tolerant ordering service built on the SmartBFT library, and added Ed25519 credential support; Fabric 3.1 followed with chaincode read/write batching, benchmarked around 2,000 TPS on a four-node deployment.
  - IBM Research's clean-room re-architecture, Hyperledger Fabric-X, was presented at the SIGMOD 2026 Industry Track: it unbundles the monolithic peer into microservices with an Arma BFT ordering service reaching roughly 430,000 TPS across four shards, was open-sourced under Linux Foundation Decentralised Trust, and is tracking a V1.0 release around May 2026 with EVM/Solidity compatibility added in Q2 2026 (preview-grade, not yet recommended for regulated production).
  - The governing body rebranded from the Hyperledger Foundation to LF Decentralised Trust, and Hyperledger Cacti (cross-chain interoperability, formerly Cactus) reached production-ready status in 2025 supporting Fabric-to-Besu, Fabric-to-Ethereum and Besu-to-Ethereum asset transfers.
  - Regulated-asset tokenisation is now the dominant enterprise driver: DTCC and Digital Asset received an SEC no-action letter in December 2025 and are deploying a DTC-custodied US Treasury tokenisation MVP on the Canton Network in H1 2026, while Broadridge's Distributed Ledger Repo platform on Canton settled roughly USD 368 billion per day (about USD 7.7 trillion monthly) as of April 2026.
  - The competitive set has consolidated around Canton Network/DAML, Hyperledger Fabric 3.x, R3 Corda 5, and Quorum/Besu; Fabric still underpins 500+ known production networks and, per Gartner's 2025 market guide, permissioned deployments account for around 68% of enterprise blockchain revenue against IDC's projected USD 19.9 billion 2026 blockchain spend.
  - Regulatory frameworks have moved from uncertainty to operational: the EU's MiCA, the US GENIUS Act (stablecoins, July 2025), and Singapore's MAS Project Guardian now shape design, with compliance-by-code token standards such as ERC-3643 (T-REX) embedding KYC/eligibility on-chain.
  - A key frontier is the Basel BCBS capital treatment, under which permissionless exposures can attract risk weights up to 1,250%; this is pushing institutions toward "public permissioned" structures and hybrid architectures that keep sensitive workflows on permissioned rails (e.g. HSBC Orion combining Canton and Hyperledger Fabric) while selectively bridging to public networks for liquidity.
  - Open challenges as of 2026 remain transaction-level privacy at scale, atomic cross-ledger settlement, predictable storage growth and operability, and completing the security audits required before high-throughput systems like Fabric-X are cleared for regulated production.

- ### References
  - 1. ChainLaunch (2026). 8 Permissioned Blockchain Trends Shipping in 2026. https://chainlaunch.dev/blog/permissioned-blockchain-trends-2026
  - 2. Androulaki, E. et al., IBM Research / LF Decentralised Trust (2026). Scaling up the digital asset ecosystem through Hyperledger Fabric-X. https://www.lfdecentralizedtrust.org/blog/the-hyperledger-fabric-x-roadmap
  - 3. IBM Research (2026). Fabric-X: Scaling Ledgers for Regulated Assets (SIGMOD 2026 Industry Track). https://community.ibm.com/community/user/blogs/sadie-revercomb/2026/06/23/fabric-x-scaling-ledgers-for-regulated-assets
  - 4. Aegas.io (2026). Private Blockchain Development for Enterprise (2026). https://aegas.io/blog/private-blockchain-development
  - 5. Tiger Research (2026). Institutional RWA Adoption Moves On-Chain. https://www.aol.com/articles/tiger-research-report-institutional-rwa-230000000.html
  - 6. AInvest (2025). Tokenized Asset Infrastructure in 2025: Regulatory Adoption and Blockchain Ecosystem Selection. https://www.ainvest.com/news/tokenized-asset-infrastructure-2025-regulatory-adoption-blockchain-ecosystem-selection-institutional-investors-2511/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
