public:: true

# Filecoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:filecoin",
  "@type": "Page",
  "vc:slug": "filecoin",
  "title": "Filecoin",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:filecoin",
  "@type": "Class",
  "label": "Filecoin",
  "definition": "Filecoin is a decentralised storage network and blockchain protocol developed by Protocol Labs that creates a peer-to-peer marketplace for file storage and retrieval, using cryptographic proofs—Proof of Replication (PoRep) and Proof of Spacetime (PoSt)—to verifiably demonstrate that storage providers are dedicating physical disk space to client data over time. Storage providers earn FIL tokens by fulfilling storage deals and continuously proving their commitments on-chain, while clients pay FIL to store data with economic guarantees backed by the provider's staked collateral. Built on top of IPFS (InterPlanetary File System) for content-addressed data retrieval, Filecoin provides the economic incentive layer designed to make decentralised storage commercially viable, and has since expanded via the Filecoin Virtual Machine (FVM) to support programmable storage deals and decentralised autonomous organisations governing shared datasets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-storage",
      "label": "Decentralized Storage"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:libp2p",
        "label": "libp2p"
      },
      {
        "@id": "urn:ngm:class:content-addressed-storage",
        "label": "Content-Addressed Storage"
      },
      {
        "@id": "urn:ngm:class:proof-of-spacetime",
        "label": "Proof of Spacetime"
      },
      {
        "@id": "urn:ngm:class:proof-of-replication",
        "label": "Proof of Replication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "Data DAO"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:blockchain-protocol",
        "label": "Blockchain Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:arweave",
        "label": "Arweave"
      },
      {
        "@id": "urn:ngm:class:storj",
        "label": "Storj"
      },
      {
        "@id": "urn:ngm:class:cloud-storage",
        "label": "Centralised Cloud Storage"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-infrastructure",
        "label": "Machine Learning Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:fil-network",
      "label": "FIL Network"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Filecoin]] is a decentralised storage network and [[Blockchain Protocol]] built by Protocol Labs that introduces a cryptographically enforced peer-to-peer marketplace for file storage. Clients post storage deals on-chain; storage providers fulfil them by sealing data with [[Proof of Replication]] and repeatedly submitting [[Proof of Spacetime]] attestations, earning FIL tokens proportional to their committed capacity. The protocol sits atop [[IPFS]] for [[Content-Addressed Storage]] via CIDs, and extends that substrate with durable economic guarantees enforced through [[Token Economics]] and collateral slashing. The 2023 launch of the Filecoin Virtual Machine (FVM) added [[Smart Contract]] programmability, enabling [[Data DAO]] governance of shared datasets and composable storage primitives.

- ### Overview
  - Filecoin was conceived by Juan Benet—creator of [[IPFS]]—as the incentive layer that the base protocol lacked. IPFS enables content-addressed retrieval but provides no persistence guarantee; nodes only retain content they have chosen to pin. Filecoin fills this gap by creating a two-sided market in which storage providers compete on price and reliability, and the blockchain itself acts as an impartial arbiter enforcing deal terms through cryptographic proofs rather than legal contracts.
  - Protocol Labs raised capital in a 2017 token sale to fund multi-year engineering work on novel proof systems. Mainnet launched in October 2020 after extensive development and auditing of the Lotus client and proof circuits. Since launch, the network has grown substantially in committed storage capacity and provider count, positioning Filecoin as one of the largest operational distributed storage systems.
  - The network's native token FIL serves three roles simultaneously: (1) payment currency for storage and retrieval deals; (2) collateral that providers must stake, aligning incentives for uptime; (3) block reward for storage miners (called storage providers) who contribute capacity. This triple-role design creates tight coupling between network security and storage utility.

- ### Key Mechanisms
  - **Proof of Replication (PoRep)**
    - Demonstrates at deal inception that a provider has created a unique, physically distinct copy of client data. Prevents a single physical disk from fraudulently satisfying multiple storage deals simultaneously. Output is a sealed sector—a cryptographically transformed representation of the original data—and a proof submitted on-chain.
  - **Proof of Spacetime (PoSt)**
    - A recurring challenge–response protocol that requires providers to prove possession of sealed data throughout the deal's lifetime. Window PoSt operates over 24-hour proving windows; failure to submit a valid proof triggers automatic slashing of the provider's staked [[Token Economics]] collateral.
  - **Sectors and Deals**
    - Data is aggregated into fixed-size sectors (e.g. 32 GiB or 64 GiB). Storage deals are negotiated off-chain via the Boost client and then published on-chain. Sector sealing is computationally intensive, creating a natural rate-limiting mechanism that discourages frivolous storage commitments.
  - **Filecoin Virtual Machine (FVM)**
    - Launched in 2023, the FVM brings EVM-compatible [[Smart Contract]] execution to Filecoin, enabling programmable storage deals, [[Data DAO]] structures, data bounties, perpetual storage endowments, and integration with other [[Decentralized Application]] ecosystems via cross-chain bridges.
  - **Retrieval Market**
    - Distinct from the storage market, the retrieval market incentivises nodes to serve data quickly. The Saturn CDN network and Lassie retrieval client aim to provide competitive latency, moving Filecoin toward hot-storage use cases alongside its established archival role.
  - **Content Addressing via IPFS**
    - All data stored on Filecoin is referenced by a Content Identifier (CID)—a multihash derived from the data itself—ensuring retrieval integrity regardless of which physical provider serves the data. This inherits directly from [[IPFS]] and [[Content-Addressed Storage]] principles.
  - **Networking Layer**
    - The [[libp2p]] modular networking stack underpins peer discovery, deal negotiation, and data transfer across the Filecoin network, providing protocol-agnostic transport and multiplexed stream handling.

- ### Applications and Use Cases
  - **Archival and Long-Term Preservation**
    - Organisations such as the Internet Archive and scientific data projects use Filecoin as a low-cost, geographically distributed archival layer that outlasts any single cloud provider. National libraries and open-data initiatives benefit from the cryptographic verifiability of continued storage.
  - **NFT and Web3 Asset Storage**
    - NFT metadata and media files for major marketplaces have been stored on Filecoin as durable alternatives to centralised servers, using [[NFT Storage]] wrappers that pin data to Filecoin and surface it via IPFS CIDs. This aligns with [[Web3 Storage]] best practices.
  - **AI and Machine Learning Datasets**
    - Filecoin is being positioned as a decentralised repository for AI training datasets and model weights, offering tamper-evident provenance via content addressing—a growing concern in [[AI Dataset Management]] as model supply chains come under scrutiny.
  - **Data DAOs**
    - The FVM enables [[Data DAO]] patterns in which on-chain governance controls access to, funding for, and distribution of shared datasets. Contributors earn tokens for adding valuable data; curators vote on dataset quality and access policies.
  - **Decentralised CDN**
    - The Saturn network incentivises cache nodes to serve Filecoin-resident content with CDN-like latency, bridging the gap between archival cold storage and hot data serving requirements for [[Decentralized Application]] frontends.
  - **Scientific Data and Open Datasets**
    - Research institutions use Filecoin for open-access publication of large experimental datasets, benefiting from permanent addressability via CID and independence from institutional infrastructure lifetimes.
  - **Backup and Disaster Recovery**
    - Enterprises and projects use Filecoin as a tertiary backup tier, exploiting the economic advantage of decentralised storage for rarely-accessed cold data while retaining access proofs for compliance purposes.

- ### Relationships
  - uses:: [[IPFS]]
  - uses:: [[libp2p]]
  - uses:: [[Content-Addressed Storage]]
  - uses:: [[Proof of Spacetime]]
  - uses:: [[Proof of Replication]]
  - requires:: [[Cryptographic Proof]]
  - requires:: [[Smart Contract]]
  - requires:: [[Staking]]
  - enables:: [[Decentralized Application]]
  - enables:: [[Data DAO]]
  - enables:: [[NFT Storage]]
  - enables:: [[Web3 Storage]]
  - implements:: [[Token Economics]]
  - relatedTo:: [[Distributed Storage]]
  - relatedTo:: [[Peer-to-Peer Network]]
  - relatedTo:: [[Decentralized Autonomous Organisation]]
  - relatedTo:: [[Blockchain Protocol]]
  - contrastsWith:: [[Arweave]]
  - contrastsWith:: [[Storj]]
  - contrastsWith:: [[Centralised Cloud Storage]]
  - bridges-to:: [[AI Dataset Management]]
  - bridges-to:: [[Machine Learning Infrastructure]]

- ### Standards and Context
  - **Protocol Labs Specifications**
    - Filecoin is governed by Filecoin Improvement Proposals (FIPs), analogous to Ethereum EIPs. Core FIPs define sector sizes, proof parameters, deal protocol versions, and FVM capabilities. The reference implementation is Lotus (Go) alongside the Forest (Rust) and Venus clients.
  - **IPFS and Multiformats**
    - Filecoin inherits the Multiformats suite—multihash, multicodec, multiaddr, CID—developed by Protocol Labs as shared infrastructure across the IPFS/Filecoin/libp2p ecosystem.
  - **EVM Compatibility via FVM**
    - The Filecoin EVM runtime allows Solidity smart contracts to be deployed on Filecoin, enabling reuse of tooling (Hardhat, Foundry, ethers.js) from the Ethereum ecosystem and facilitating cross-chain integration via bridges.
  - **Regulatory Context**
    - FIL token status under financial regulation varies by jurisdiction. The decentralised nature of storage provision and the utility-token design distinguish Filecoin's regulatory profile from pure investment tokens, though ongoing global crypto-asset regulation (e.g. EU MiCA) continues to shape its legal environment.
  - **Interoperability**
    - Cross-chain bridges (notably to Ethereum and Polygon) and the FVM's EVM compatibility position Filecoin within the broader multi-chain [[Blockchain Protocol]] landscape, allowing smart contracts on other chains to store data on Filecoin programmatically.

- ### Provenance
  - sources:: Protocol Labs Filecoin documentation, FIP repository, IPFS specifications, Filecoin mainnet explorer data, FVM launch materials
  - updated:: 2026-06-13
