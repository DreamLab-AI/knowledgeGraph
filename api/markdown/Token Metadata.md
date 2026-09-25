Token metadata is the structured descriptive data associated with a blockchain token, typically including attributes such as name, description, image references, traits, and provenance. For non-fungible tokens it is commonly stored as a JSON document referenced by a tokenURI and often hosted on decentralised storage such as IPFS to preserve immutability and addressability.

### Content

- Metadata schemas such as the ERC-721 and ERC-1155 metadata standards define expected fields so that marketplaces and wallets can render tokens consistently. Because on-chain storage is costly, metadata is frequently kept off-chain on IPFS or Arweave with the chain holding only a content hash or URI for verifiable integrity.

