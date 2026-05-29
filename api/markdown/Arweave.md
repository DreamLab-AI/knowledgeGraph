public:: true

# Arweave
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:arweave",
  "@type": "Page",
  "vc:slug": "arweave",
  "title": "Arweave",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arweave",
  "@type": "Class",
  "label": "Arweave",
  "definition": "Arweave is a decentralised, blockchain-like storage network that enables permanent, censorship-resistant archival of data through a novel proof-of-access consensus mechanism. It introduces the concept of the 'permaweb', a permanent layer of the web where data is stored indefinitely via a one-time payment model. The network is sustained by an endowment-based token economics model that ensures miners are incentivised to serve content far into the future. Arweave underpins a range of Web3 storage use cases, from NFT metadata permanence to decentralised application state.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-storage", "label": "Decentralized Storage"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"},
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-persistence", "label": "Data Persistence"},
      {"@id": "urn:ngm:class:digital-archive", "label": "Digital Archive"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Arweave is a [[Decentralized Storage]] protocol providing permanent, pay-once data persistence on a [[Blockchain]] network secured by a proof-of-access variant of [[Proof Of Work]], enabling the [[Digital Archive]] layer of Web3.
- ### Relationships
  - Arweave is architecturally related to [[IPFS]] and [[Distributed Storage]] systems but distinguishes itself through permanent [[Data Persistence]] funded by [[Token Economics]]. Its [[Content Addressing]] model means data is referenced by cryptographic hash, making content immutable once stored. The [[Cryptographic Hash Function]] at the core of its proof-of-access mechanism binds new blocks to random historic data, enforcing full storage replication.
- ### Content
  - Arweave was conceived in 2017 and launched its mainnet in 2018, pioneering the notion of pay-once, store-forever data storage. Unlike cloud object stores that require recurring subscription fees, Arweave users pay a single upfront cost denominated in AR tokens; a portion enters an endowment fund that compensates miners for centuries of storage, assuming token value appreciation keeps pace with declining hardware costs.

  - The protocol introduces a novel block structure called the 'blockweave', where each new block must include a proof-of-access demonstrating the miner has access to a randomly selected historic block. This design incentivises nodes to retain the full history of all data rather than pruning old content, which is the dominant weakness of general-purpose distributed storage systems. Data is replicated globally across an open peer set with no gating mechanism, making censorship or selective deletion extremely difficult.

  - The permaweb built atop Arweave hosts decentralised applications (dApps) whose front-end assets, smart contract state, and media attachments are all stored permanently on-chain. This is particularly significant for NFT collections, where the metadata and media files underpinning tokens are frequently stored off-chain on mutable servers; Arweave resolves the provenance risk. Projects in the Solana, Ethereum, and other blockchain ecosystems commonly use Arweave's Bundlr (now Irys) network layer for high-throughput, cheap data uploads.

  - From a governance and economic perspective, Arweave's endowment model introduces long-term sustainability questions that simpler fee-per-transaction models avoid. The protocol has evolved through multiple versions, with SmartWeave enabling Turing-complete smart contracts evaluated lazily on the client side, and the AO (Actor-Oriented) compute environment extending Arweave into a decentralised computing platform. These developments position Arweave not merely as a storage layer but as a foundation for permanent, verifiable computation.
