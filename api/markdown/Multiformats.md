
Multiformats is a collection of self-describing protocol and value specifications designed to make data formats future-proof and interoperable across decentralised systems. Rather than hard-coding a single hash, encoding, or address scheme, each multiformat prefixes the value with a compact code declaring which algorithm or format it uses, so software can interpret it unambiguously and evolve without breaking. Components include multihash, multibase, multicodec, and multiaddr, and the family underpins content addressing in IPFS and libp2p.

- ### Overview
	- Distributed systems must agree on how to hash, encode, and address data, but hard-coding one algorithm makes upgrades impossible without breaking existing references.
	- Multiformats solves this by making every value self-describing: a short prefix names the algorithm or format, so the same parser handles old and new variants side by side.
	- The core members are multihash (self-describing cryptographic digests), multibase (self-describing text encodings), multicodec (self-describing serialisation/codec tags), and multiaddr (self-describing network addresses).
	- Together they let content-addressed systems remain agile in the face of evolving cryptography and transport layers.
- ### Mechanisms
	- Prefix each value with a varint code drawn from a shared codec table.
	- Compose codes to describe layered structures such as a CID wrapping a multihash and multicodec.
	- Parse generically by reading the prefix before the payload, never assuming a fixed algorithm.
	- Extend the registry to adopt new hashes or encodings without invalidating existing data.
- ### Applications
	- Building [[Content Identifier|content identifiers]] (CIDs) for [[IPFS]] and the broader IPLD data model.
	- Encoding peer and transport addresses in [[libp2p]] via multiaddr.
	- Representing cryptographic digests portably with [[Multihash]].
	- Enabling forward-compatible [[Decentralised file storage]] and naming.
- ### Provenance

