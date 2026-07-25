public:: true
alias:: PublicBlockchain

# Public Blockchain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8d9d5fd1b78c2959638c769d97645ada9c9319be4a9f79b3040144f9656cf77f",
  "@type": "Page",
  "vc:slug": "public-blockchain",
  "title": "Public Blockchain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:user-sovereignty",
      "vc:label": "User Sovereignty"
    },
    {
      "@id": "urn:visionflow:linked:user-sovereignty",
      "vc:label": "UserSovereignty"
    },
    {
      "@id": "urn:visionflow:owl:class:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:owl:class:cardano",
      "vc:label": "Cardano"
    },
    {
      "@id": "urn:visionflow:owl:class:censorship-resistance",
      "vc:label": "Censorship Resistance"
    },
    {
      "@id": "urn:visionflow:owl:class:censorship-resistance",
      "vc:label": "CensorshipResistance"
    },
    {
      "@id": "urn:visionflow:owl:class:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:owl:class:immutability",
      "vc:label": "Immutability"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:permissioned-blockchain",
      "vc:label": "PermissionedBlockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-3030"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Public Blockchain"
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
  "@id": "urn:ngm:class:public-blockchain",
  "@type": "Class",
  "label": "Public Blockchain",
  "definition": "A permissionless, decentralised distributed ledger network in which any party may participate, validate transactions, and inspect the chain state without requiring authorisation. Public blockchains such as Bitcoin and Ethereum achieve censorship resistance and immutability through global state replication and open consensus mechanisms, at the cost of reduced transaction throughput and higher energy consumption relative to permissioned alternatives.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-ledger-technology",
    "label": "Distributed Ledger Technology"
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
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
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:user-sovereignty",
        "label": "User Sovereignty"
      },
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Blockchain"
      },
      {
        "@id": "urn:ngm:class:private-blockchain",
        "label": "Private Blockchain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:permissionless-blockchain",
      "label": "Permissionless Blockchain"
    },
    {
      "@id": "urn:ngm:class:open-blockchain",
      "label": "Open Blockchain"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:public-blockchain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8d9d5fd1b78c2959638c769d97645ada9c9319be4a9f79b3040144f9656cf77f"
  },
  "vc:resolutions": [
    {
      "raw": "[[User Sovereignty]]",
      "resolved": "urn:visionflow:linked:user-sovereignty",
      "kind": "StubLink"
    },
    {
      "raw": "[[UserSovereignty]]",
      "resolved": "urn:visionflow:linked:user-sovereignty",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:owl:class:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cardano]]",
      "resolved": "urn:visionflow:owl:class:cardano",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Censorship Resistance]]",
      "resolved": "urn:visionflow:owl:class:censorship-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CensorshipResistance]]",
      "resolved": "urn:visionflow:owl:class:censorship-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:owl:class:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immutability]]",
      "resolved": "urn:visionflow:owl:class:immutability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PermissionedBlockchain|permissioned alternatives]]",
      "resolved": "urn:visionflow:owl:class:permissioned-blockchain",
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
  - Permissionless, decentralised blockchain networks enabling unrestricted transaction participation and transparent validation without centralised authority, including [[Bitcoin Proof-of-Work Protocol]], [[Ethereum Smart Contract Platform]], and [[Cardano]], providing [[Censorship Resistance]], [[Immutability]], and [[User Sovereignty]] whilst sacrificing scalability and energy efficiency compared to private alternatives.

- ### Semantic Classification
  - owl-class:: infrastructure:PublicBlockchain
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Has part [[Consensus Mechanism]], [[Smart Contract]]
  - Enables [[Censorship Resistance]], [[Immutability]], [[Cryptocurrency]]
  - Contrasts with [[Permissioned Blockchain]]
  - Related to [[Distributed Ledger Technology]], [[Blockchain Governance]]

- ### Content
  - Permissionless, decentralised blockchain networks enabling unrestricted transaction participation and transparent validation without centralised authority or permission requirements. Public blockchains—[[Bitcoin Proof-of-Work Protocol]], [[Ethereum Smart Contract Platform]], [[Cardano]]—provide [[CensorshipResistance]], [[Immutability]], and [[UserSovereignty]] through global state replication and permissionless consensus whilst sacrificing scalability, privacy, and energy efficiency compared to [[PermissionedBlockchain|permissioned alternatives]]. Tradeoffs enable censorship-resistant financial systems but inhibit enterprise adoption requiring confidentiality and regulatory compliance.

  ## Academic Context

  - Brief contextual overview
  - Public blockchains are decentralised, permissionless digital ledgers that enable transparent, secure, and immutable record-keeping across distributed networks
  - They form the foundational architecture for cryptocurrencies and decentralised applications (dApps), underpinning much of the metaverse and Web3 ecosystems
  - Key developments and current state
  - Since their inception with Bitcoin in 2009, public blockchains have evolved to support smart contracts, tokenisation, and complex decentralised protocols
  - The technology is now widely studied in computer science, economics, and law, with ongoing research into scalability, privacy, and governance
  - Academic foundations
  - The core principles derive from distributed systems theory, cryptography, and game theory
  - Early academic work includes Nakamoto’s Bitcoin whitepaper and subsequent research on consensus algorithms and decentralised governance

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Public blockchains are widely used for cryptocurrencies, decentralised finance (DeFi), non-fungible tokens (NFTs), and supply chain tracking
  - Notable platforms include Bitcoin, Ethereum, Litecoin, and emerging Layer 2 solutions such as Arbitrum and Optimism
  - UK and North England examples where relevant
		- Manchester-based fintech startups are exploring public blockchain for cross-border payments and digital identity
		- Leeds and Newcastle universities host blockchain research groups focusing on decentralised governance and smart contract security
		- Sheffield’s Advanced Manufacturing Research Centre (AMRC) investigates blockchain for supply chain transparency in advanced manufacturing
  - Technical capabilities and limitations
  - Capabilities
		- Permissionless participation: anyone with internet access can join, transact, and validate
		- Decentralisation: no single entity controls the network
		- Immutability: once data is recorded, it cannot be altered
		- Transparency: all transactions are publicly verifiable
  - Limitations
		- Scalability: transaction throughput remains a challenge for some networks
		- Energy consumption: proof-of-work blockchains like Bitcoin require significant computational resources
		- Regulatory uncertainty: evolving legal frameworks impact adoption and innovation
  - Standards and frameworks
  - Common consensus algorithms include proof-of-work (PoW) and proof-of-stake (PoS)
  - Open-source protocols and standards are maintained by global developer communities
  - Interoperability frameworks such as Polkadot and Cosmos enable cross-chain communication

  ## Research & Literature

  - Key academic papers and sources
  - Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
  - Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform. https://ethereum.org/en/whitepaper/
  - Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Ethereum Yellow Paper. https://ethereum.github.io/yellowpaper/paper.pdf
  - Zohar, A. (2015). Bitcoin: Under the Hood. Communications of the ACM, 58(9), 104–113. https://doi.org/10.1145/2792882
  - Cachin, C., & Vukolić, M. (2017). Blockchain Consensus Protocols in the Wild. arXiv:1707.01873. https://arxiv.org/abs/1707.01873
  - Ongoing research directions
  - Scalability solutions such as sharding and Layer 2 protocols
  - Privacy-preserving technologies like zero-knowledge proofs
  - Decentralised governance and tokenomics

  ## UK Context

  - British contributions and implementations
  - UK universities and research institutions are active in blockchain research, with notable work at Imperial College London, University College London, and the Alan Turing Institute
  - The UK government supports innovation in digital assets and blockchain through funding and regulatory sandboxes
  - North England innovation hubs (if relevant)
  - Manchester’s Digital Innovation Factory fosters blockchain startups and collaborates with local universities
  - Leeds Blockchain Lab conducts research on decentralised finance and smart contract security
  - Newcastle’s Centre for Cyber Security and Resilience explores blockchain for secure digital identity
  - Regional case studies
  - Manchester-based startup ChainGuardian uses public blockchain for secure digital identity solutions
  - Leeds University’s Blockchain Research Group collaborates with local businesses on supply chain transparency projects

  ## Future Directions

  - Emerging trends and developments
  - Increased adoption of proof-of-stake and energy-efficient consensus mechanisms
  - Growth of decentralised autonomous organisations (DAOs) and community-driven governance
  - Integration of blockchain with artificial intelligence and the Internet of Things
  - Anticipated challenges
  - Regulatory compliance and legal clarity
  - Balancing privacy with transparency
  - Ensuring network security and resilience
  - Research priorities
  - Scalability and interoperability
  - Privacy-preserving technologies
  - Decentralised governance and tokenomics

  ## References

  1. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. https://bitcoin.org/bitcoin.pdf
  2. Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform. https://ethereum.org/en/whitepaper/
  3. Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. Ethereum Yellow Paper. https://ethereum.github.io/yellowpaper/paper.pdf
  4. Zohar, A. (2015). Bitcoin: Under the Hood. Communications of the ACM, 58(9), 104–113. https://doi.org/10.1145/2792882
  5. Cachin, C., & Vukolić, M. (2017). Blockchain Consensus Protocols in the Wild. arXiv:1707.01873. https://arxiv.org/abs/1707.01873
  6. UK Government. (2023). Digital Assets and Blockchain Innovation. https://www.gov.uk/government/publications/digital-assets-and-blockchain-innovation
  7. Manchester Digital Innovation Factory. (2025). Blockchain Startups and Research. https://manchesterdigitalinnovationfactory.org.uk
  8. Leeds Blockchain Lab. (2025). Decentralised Finance and Smart Contract Security. https://leedsblockchainlab.ac.uk
  9. Newcastle Centre for Cyber Security and Resilience. (2025). Blockchain for Secure Digital Identity. https://newcastlecybersecurity.ac.uk


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
