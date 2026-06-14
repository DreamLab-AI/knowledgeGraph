public:: true

# ipfs
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b63927b164266bef454c8a79dac1ab43ade9916df33f25fc89ee3003dd5a0f5e",
  "@type": "Page",
  "vc:slug": "ipfs",
  "title": "ipfs",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ipfs",
  "@type": "Class",
  "label": "IPFS",
  "definition": "The InterPlanetary File System (IPFS) is a peer-to-peer, content-addressed hypermedia protocol and distributed file system in which each piece of content is identified by a Content Identifier (CID) — a self-describing cryptographic hash derived from the content itself — rather than by its network location. Nodes exchange data blocks via Bitswap and route lookups through a Kademlia-based Distributed Hash Table implemented in libp2p, while the underlying data model (IPLD) structures blocks as a Merkle DAG enabling deduplication and efficient versioning. IPFS operates as the primary off-chain storage layer for Web3 applications, decentralised websites, NFT metadata, and distributed knowledge repositories, complemented by Filecoin's incentive layer for long-term data persistence.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:peer-to-peer-network",
      "label": "Peer-to-Peer Network"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"},
      {"@id": "urn:ngm:class:merkle-dag", "label": "Merkle DAG"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:distributed-hash-table", "label": "Distributed Hash Table"},
      {"@id": "urn:ngm:class:libp2p", "label": "libp2p"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:decentralised-file-storage", "label": "Decentralised File Storage"},
      {"@id": "urn:ngm:class:web3", "label": "Web3"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:content-identifier", "label": "Content Identifier"},
      {"@id": "urn:ngm:class:pinning-service", "label": "Pinning Service"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:bitswap", "label": "Bitswap"},
      {"@id": "urn:ngm:class:ipld", "label": "IPLD"},
      {"@id": "urn:ngm:class:multicodec", "label": "Multicodec"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:kademlia-dht", "label": "Kademlia DHT"},
      {"@id": "urn:ngm:class:multihash", "label": "Multihash"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:filecoin", "label": "Filecoin"},
      {"@id": "urn:ngm:class:bittorrent", "label": "BitTorrent"},
      {"@id": "urn:ngm:class:git", "label": "Git"},
      {"@id": "urn:ngm:class:ens", "label": "ENS"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:hypertext-transfer-protocol", "label": "Hypertext Transfer Protocol"},
      {"@id": "urn:ngm:class:centralised-cloud-storage", "label": "Centralised Cloud Storage"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:decentralised-autonomous-organisation", "label": "Decentralised Autonomous Organisation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:interplanetary-file-system", "label": "InterPlanetary File System"}
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
  - The **InterPlanetary File System** (IPFS) is a peer-to-peer, content-addressed hypermedia protocol and [[Distributed File System]] that replaces location-based addressing (as used in [[Hypertext Transfer Protocol]]) with cryptographic [[Content Addressing]]. Each data block is identified by a [[Content Identifier]] (CID) — a self-describing hash derived from the block's contents — meaning the same content always has the same address regardless of where it is stored. The network is composed of nodes exchanging blocks via the [[Bitswap]] protocol over [[libp2p]], routed through a [[Kademlia DHT]] for peer and content discovery. IPFS underpins [[Web3]] infrastructure, providing off-chain storage for [[NFT]] metadata, [[Decentralised Web]] front-ends, and distributed knowledge repositories.

- ### Overview
  - IPFS was created by Protocol Labs (founded by Juan Benet) and first published as a whitepaper in 2014, with the public network launching in 2015. It draws inspiration from [[BitTorrent]] (block exchange), [[Git]] (content-addressed versioning via [[Merkle DAG]]), and [[Distributed Hash Table]] research (Kademlia routing).
  - Unlike HTTP, where content is retrieved from a fixed URL and becomes unavailable if the server goes down, IPFS retrieves content by *what it is* — its cryptographic hash — from whichever peer currently holds it. This design makes the network inherently resilient and potentially censorship-resistant: as long as at least one node pins a CID, the content remains accessible.
  - IPFS is the reference off-chain storage substrate for many [[Blockchain]] ecosystems. [[Smart Contract]] platforms store mutable state on-chain but use IPFS CIDs in token URI fields (ERC-721, ERC-1155) to point to large assets such as images and metadata JSON, keeping on-chain storage costs low.
  - The project is maintained by Protocol Labs and the broader open-source community under the IPFS GitHub organisation. The specification is governed through IPIP (IPFS Improvement Proposals).

- ### Key Components
  - **Content Identifier (CID)** — A self-describing, multihash-encoded identifier produced by hashing content. CIDv0 uses base58-encoded SHA-256; CIDv1 uses [[Multicodec]] and [[Multibase]] for codec and encoding agnosticism.
    - [[Content Identifier]] encodes both the hash algorithm used (via [[Multihash]]) and the codec (e.g. `dag-pb`, `dag-cbor`, `raw`) so CIDs are forward-compatible with future hash functions.
  - **IPLD (InterPlanetary Linked Data)** — The data model layer. [[IPLD]] represents all IPFS data as a [[Merkle DAG]] of typed blocks, enabling cross-protocol data linking between IPFS, [[Filecoin]], [[Ethereum]], and [[Git]] repositories.
  - **libp2p** — The modular networking stack underlying IPFS. [[libp2p]] provides transport-agnostic peer discovery, NAT traversal, multiplexing, and stream security (Noise, TLS 1.3). Nodes can communicate over TCP, QUIC, WebSockets, and WebRTC.
  - **Kademlia DHT** — IPFS uses a variant of the [[Kademlia DHT]] to store and look up provider records: mappings from CID to the set of peers that claim to hold it.
  - **Bitswap** — A [[BitTorrent]]-inspired block-exchange protocol that governs how nodes request and serve blocks. Nodes maintain a ledger of blocks sent and received per peer; a credit/debt mechanism discourages leeching.
  - **Pinning** — Because IPFS nodes garbage-collect blocks that are not actively requested, content must be explicitly *pinned* to persist. Pinning can be local (via `ipfs pin add`) or delegated to a [[Pinning Service]] (Pinata, Web3.Storage, nft.storage, Infura IPFS).
  - **Gateways** — HTTP-to-IPFS translation proxies (e.g. `https://ipfs.io/ipfs/<CID>`) that allow standard browsers to access IPFS content without running a local node. Trustless gateways (introduced in Kubo 0.14+) return verifiable CAR files, enabling client-side CID verification.
  - **Kubo** — The reference Go implementation of IPFS (formerly go-ipfs). Other implementations include js-ipfs (JavaScript), Helia (new TypeScript/JS client), and iroh (Rust, from n0).

- ### Mechanisms
  - **Content Routing** — When a node wants a CID, it first checks its local block store, then queries the DHT for providers, then fetches blocks from those providers via Bitswap. The DHT lookup may take multiple round trips; Delegated Routing (HTTP-based) was introduced to reduce latency.
  - **Pubsub (GossipSub)** — [[libp2p]] GossipSub enables IPFS nodes to subscribe to topic channels and broadcast messages. This powers Filecoin miner signalling and the IPNS (InterPlanetary Name System) over PubSub experiment.
  - **IPNS** — The InterPlanetary Name System resolves mutable pointers (signed by a keypair) to the current CID for a piece of content, enabling updateable "websites" over the otherwise immutable CID graph. [[ENS]] and other [[Naming System]] layers can wrap IPNS or raw CIDs.
  - **UnixFS** — The default codec for representing files and directories in IPFS. Large files are chunked (default 256 KiB), each chunk becomes a block, and a parent [[Merkle DAG]] node references all chunks.
  - **CAR Files** — Content Addressable aRchives bundle a DAG of IPLD blocks into a single file for portable, verifiable export and import.

- ### Applications
  - **NFT Asset Storage** — ERC-721 and ERC-1155 [[Smart Contract]] tokenURI fields commonly store IPFS CIDs pointing to JSON metadata and media files, ensuring assets survive the demise of any individual hosting provider. Marketplaces such as OpenSea verify IPFS-hosted metadata.
  - **Decentralised Websites** — IPFS hosts static site bundles; [[ENS]] `contenthash` records link a human-readable `.eth` name to an IPFS CID. The Brave browser natively resolves `ipfs://` URIs.
  - **Scientific Data Archival** — Research institutions use IPFS for distributing large datasets under stable CIDs that can be cited in publications, complementing [[Linked Data]] workflows.
  - **Decentralised Application Front-ends** — Many [[Decentralised Autonomous Organisation]] front-ends and [[Web3]] dApps host their UI on IPFS to prevent single-point takedowns.
  - **Software Distribution** — Package managers and container registries (e.g. OpenContainers image distribution experiments) use IPFS for content-addressed artefact distribution.
  - **AI Model Distribution** — Emerging use: large [[Machine Learning]] model weights distributed via IPFS CIDs, enabling verifiable, deduplicated distribution across research networks.
  - **Filecoin Integration** — [[Filecoin]] provides a cryptoeconomic incentive layer atop IPFS: storage providers commit to storing CIDs for agreed durations and earn FIL tokens; retrieval miners earn fees for serving content quickly.

- ### Relationships
  - uses:: [[Content Addressing]]
  - uses:: [[Merkle DAG]]
  - uses:: [[Merkle Tree]]
  - uses:: [[Distributed Hash Table]]
  - uses:: [[libp2p]]
  - uses:: [[Cryptographic Hash]]
  - enables:: [[Decentralised Web]]
  - enables:: [[NFT]]
  - enables:: [[Decentralised File Storage]]
  - enables:: [[Web3]]
  - requires:: [[Content Identifier]]
  - requires:: [[Pinning Service]]
  - hasPart:: [[Bitswap]]
  - hasPart:: [[IPLD]]
  - hasPart:: [[Multicodec]]
  - dependsOn:: [[Kademlia DHT]]
  - dependsOn:: [[Multihash]]
  - relatedTo:: [[Filecoin]]
  - relatedTo:: [[BitTorrent]]
  - relatedTo:: [[Git]]
  - relatedTo:: [[ENS]]
  - contrastsWith:: [[Hypertext Transfer Protocol]]
  - contrastsWith:: [[Centralised Cloud Storage]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]

- ### Standards & Context
  - **IPIP (IPFS Improvement Proposals)** — Governance mechanism for protocol changes, analogous to BIPs (Bitcoin) or EIPs (Ethereum). Core specs are maintained at specs.ipfs.tech.
  - **Multiformats** — A collection of self-describing protocol standards (Multihash, Multiaddr, Multicodec, Multibase) that underpin CID construction and make IPFS interoperable with future hash algorithms and transports.
  - **IPLD Specifications** — Define the data model, codecs (dag-pb, dag-cbor, dag-json, raw), and traversal selectors used across IPFS, Filecoin, and compatible projects.
  - **libp2p Specifications** — Network layer standards maintained separately, now used by Ethereum (post-Merge consensus layer), Polkadot, and other ecosystems beyond IPFS.
  - **W3C / Distributed Web** — IPFS intersects with W3C's work on [[Decentralised Identifiers]] (DIDs) and [[Verifiable Credentials]] (VCs) where content integrity proofs anchor to IPFS CIDs.
  - Protocol Labs is a member of the InterPlanetary Alliance and contributes to [[Decentralised Web]] standards forums such as the Decentralised Web Summit.

- ### Semantic Classification
  - owl-class:: ngm:IPFS
  - owl-role:: Class
  - domain:: distributed-systems
  - maturity:: established

- ### Provenance
  - sources:: IPFS Whitepaper (Benet 2014); specs.ipfs.tech; Protocol Labs documentation; libp2p.io
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
