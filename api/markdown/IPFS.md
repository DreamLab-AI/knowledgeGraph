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
  "definition": "The InterPlanetary File System (IPFS) is a peer-to-peer, content-addressed hypermedia protocol and distributed file system in which each piece of content is identified by a Content Identifier (CID) — a self-describing cryptographic hash — rather than by its network location. Nodes participating in the IPFS network store and serve blocks of data identified by their CIDs, enabling resilient, censorship-resistant content distribution without a single point of failure. IPFS underpins decentralised application storage for NFT metadata, Web3 front-ends, and distributed knowledge repositories.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "BC Network Component"
    },
    {
      "@id": "urn:ngm:class:decentralised-file-storage",
      "label": "Decentralised file storage"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The InterPlanetary File System (IPFS) is a peer-to-peer, content-addressed hypermedia protocol and distributed file system in which each piece of content is identified by a Content Identifier (CID) — a self-describing cryptographic hash — rather than by its network location. Nodes participating in the IPFS network store and serve blocks of data identified by their CIDs, enabling resilient, censorship-resistant content distribution without a single point of failure. IPFS underpins decentralised application storage for NFT metadata, Web3 front-ends, and distributed knowledge repositories.

- ### Semantic Classification
  - owl-class:: ipfs:IPFS
  - owl-role:: Concept

- ### Relationships
  - uses [[Content Addressing]]
  - uses [[Merkle Tree]]
  - enables [[Decentralised Web]]
  - enables [[NFT]]
  - relatedTo [[Peer-to-Peer Network]]

- ### Content
  - IPFS was designed by Protocol Labs as an alternative to HTTP's location-based web, replacing URLs with content-based identifiers. A CID is derived from the cryptographic hash (SHA-256 or BLAKE2 by default) of the content itself, encoded using multicodec and multibase for self-description. The underlying data structure is the IPLD (InterPlanetary Linked Data) Merkle DAG, which deduplicates identical blocks across the network and enables efficient versioning similar to Git.
  - Node discovery and routing use the Kademlia-based libp2p DHT (Distributed Hash Table), allowing any IPFS node to find peers that hold a given CID. Content is transferred via Bitswap, a block-exchange protocol similar to BitTorrent. For persistence, IPFS requires explicit pinning — either locally or through pinning services such as Pinata or Web3.Storage — because nodes only cache content they have recently accessed; without pinning, data is subject to garbage collection.
  - In the Web3 ecosystem, IPFS is the dominant storage layer for NFT metadata and assets: the ERC-721 and ERC-1155 token URI fields typically point to IPFS CIDs, ensuring metadata survives even if the minting platform shuts down. ENS domain contenthash fields support IPFS CIDs, enabling decentralised website hosting. Filecoin, also from Protocol Labs, provides a complementary incentive layer that pays storage providers to persist IPFS-hosted data over time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
