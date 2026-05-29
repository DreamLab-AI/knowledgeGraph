public:: true

# ens
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d694d81e0716ed3837f317c1defe1747e30ef895531a772f621a908ca1a5d6b1",
  "@type": "Page",
  "vc:slug": "ens",
  "title": "ens",
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
  "@id": "urn:ngm:class:ens",
  "@type": "Class",
  "label": "ENS",
  "definition": "The Ethereum Name Service (ENS) is a decentralised, on-chain naming system that maps human-readable names ending in .eth to Ethereum addresses, content hashes, and other on-chain or off-chain resources via ERC-137 compliant smart contracts. It functions as the Web3 analogue of DNS, replacing hexadecimal addresses with memorable labels that are owned and controlled by the holder of the corresponding NFT. ENS resolvers extend the system to support IPFS content hashes, text records, and multi-chain addresses, making it a foundational identity and discoverability layer for the decentralised web.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Blockchain Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:decentralised-identity",
      "label": "Decentralised Identity"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The Ethereum Name Service (ENS) is a decentralised, on-chain naming system that maps human-readable names ending in .eth to Ethereum addresses, content hashes, and other on-chain or off-chain resources via ERC-137 compliant smart contracts. It functions as the Web3 analogue of DNS, replacing hexadecimal addresses with memorable labels that are owned and controlled by the holder of the corresponding NFT. ENS resolvers extend the system to support IPFS content hashes, text records, and multi-chain addresses, making it a foundational identity and discoverability layer for the decentralised web.

- ### Semantic Classification
  - owl-class:: ens:ENS
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[NFT]]
  - enables [[Decentralised Web]]
  - enables [[Self Sovereign Identity]]
  - relatedTo [[IPFS]]

- ### Content
  - ENS is deployed on Ethereum mainnet and operates through a registry smart contract that records the owner, resolver, and TTL for each name. Subnames are managed hierarchically: the .eth top-level domain is governed by a registrar contract that auctions names to bidders, whilst owners may freely create sub-names (e.g. payments.myname.eth) without any on-chain transaction from the parent registrar. Each registered name is backed by an ERC-721 NFT, giving it standard wallet portability and marketplace liquidity.
  - Resolvers are pluggable smart contracts that translate a name into one or more records. The public resolver supports Ethereum addresses (coin type 60), multi-coin addresses via SLIP-0044, IPFS CIDs via the contenthash field, and arbitrary text key-value pairs such as email or avatar. Off-chain resolution via CCIP-Read (EIP-3668) allows records to be stored on conventional servers with on-chain verification, reducing gas costs for high-update-frequency data.
  - ENS plays a critical role in decentralised identity and discoverability: wallets such as MetaMask and Rainbow resolve ENS names to addresses transparently, and services like IPFS-hosted websites become accessible via human-readable URLs. The ENS DAO, funded by a governance token airdrop, controls upgrades and treasury allocation, making the protocol a reference implementation of on-chain governance over naming infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
