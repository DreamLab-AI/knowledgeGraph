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
  "definition": "Filecoin is a decentralised storage network and blockchain protocol developed by Protocol Labs that creates a peer-to-peer marketplace for file storage and retrieval, using cryptographic proofs—Proof of Replication (PoRep) and Proof of Spacetime (PoSt)—to verifiably demonstrate that storage providers are dedicating physical disk space to client data over time. Storage providers earn FIL tokens by fulfilling storage deals and continuously proving their commitments on-chain, while clients pay FIL to store data with economic guarantees backed by the provider's staked collateral. Filecoin is built on top of IPFS (InterPlanetary File System) for content-addressed data retrieval and represents the economic incentive layer designed to make decentralised storage commercially viable.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-storage", "label": "Decentralized Storage"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:libp2p", "label": "libp2p"},
      {"@id": "urn:ngm:class:content-addressed-storage", "label": "Content-Addressed Storage"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-application", "label": "Decentralized Application"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Filecoin]] is a [[Decentralized Storage]] protocol that uses cryptographic Proof of Replication and Proof of Spacetime to create a verifiable peer-to-peer storage marketplace on top of [[IPFS]] and [[libp2p]], incentivising storage providers through FIL [[Token Economics]] to reliably host client data with on-chain accountability backed by staked collateral.

- ### Relationships
  - [[Filecoin]] is a blockchain-based [[Decentralized Storage]] network that inherits its content-addressing layer from [[IPFS]] and networking stack from [[libp2p]], extending them with economic incentives absent in the base protocols. Data is referenced via [[Content-Addressed Storage]] content identifiers (CIDs) ensuring retrieval integrity regardless of physical storage location. It forms part of the broader [[Distributed Storage]] ecosystem alongside Arweave and Storj, and connects to [[Peer-to-Peer Network]] architectures for data propagation. The FIL token provides [[Token Economics]] that align storage provider and client incentives, enabling [[Decentralized Application]] developers to store persistent data without centralised cloud dependency.

- ### Content
  - Filecoin was conceived by Juan Benet, the creator of IPFS, and described in a 2014 whitepaper as the economic complement to the InterPlanetary File System. While IPFS provides the protocol for content-addressed peer-to-peer file transfer, it offers no persistence guarantee—nodes will only keep content they have explicitly chosen to pin. Filecoin adds a storage marketplace where clients negotiate deal terms with providers, and the blockchain enforces the deal through cryptographic proofs, providing the economic durability layer that IPFS alone cannot. Protocol Labs raised $257 million in a 2017 ICO—then one of the largest in history—to fund development. The mainnet launched in October 2020 after years of engineering work on the novel proof systems.

  - The technical architecture introduces two cryptographic proofs absent from prior blockchain systems. Proof of Replication (PoRep) demonstrates at deal creation that a provider has created a unique physical copy of the client's data, preventing sybil attacks where a single disk is claimed to satisfy multiple deals. Proof of Spacetime (PoSt) requires providers to repeatedly and efficiently prove possession of sealed data throughout the deal duration, with window PoSt challenges issued every 24-hour epoch. Storage providers who fail to submit valid proofs are penalised through "slashing"—a portion of their FIL collateral is burned—creating a strong economic incentive for reliable uptime. The Filecoin Virtual Machine (FVM), launched 2023, enables smart contracts and programmable storage deals, extending Filecoin from a pure storage market into a programmable computation layer.

  - Filecoin has attracted significant adoption as an archival and web3 storage layer. The Internet Archive, several national scientific datasets, and NFT metadata from major marketplaces including OpenSea have been stored on Filecoin as backup or primary storage. The network has grown to over 3,000 storage providers with approximately 20 exabytes of committed storage capacity, making it one of the largest distributed storage systems in operation. Integration with the Lotus and Boost client software has lowered the barrier to storage deal creation, and the Saturn retrieval network provides CDN-like fast retrieval alongside cryptographic proof of delivery.

  - In 2024-2025, Filecoin is evolving beyond archival into hot storage and AI use cases. The Filecoin Retrieval Market and Lassie retrieval client aim to deliver competitive latency against centralised cloud storage. Efforts to store and serve AI model weights and training datasets on Filecoin are gaining traction as a decentralised alternative to cloud model registries. The FVM enables data DAOs—decentralised autonomous organisations governing shared datasets—and data bounties that reward contributors to public datasets. Cross-chain bridges and Layer-2 developments are positioning Filecoin within the broader web3 ecosystem rather than as an isolated storage sidechain.

- ### See Also
  - [[IPFS]] | [[Decentralized Storage]] | [[libp2p]] | [[Content-Addressed Storage]] | [[Token Economics]]
