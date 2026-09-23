
Multicodec is a self-describing data encoding scheme, part of the Multiformats family, that prefixes a binary value with a compact varint code identifying the codec used to interpret the bytes that follow. By making the encoding explicit and machine-readable, multicodec lets systems handle many data formats and hash algorithms without out-of-band agreement, supporting future-proof, agile interoperability across content-addressed systems.

- ### Overview
  - Multicodec assigns each known data format and algorithm a small integer code, registered in a public table. A value is made self-describing by prepending the unsigned-varint encoding of its codec code; readers consult the table to dispatch the correct parser, avoiding fragile assumptions about format.
  - It is one of several Multiformats specifications — alongside Multihash, Multibase, and Multiaddr — created so that content-addressed and peer-to-peer systems can evolve their cryptographic and serialisation choices without breaking older data or peers.

- ### Key aspects
  - Varint-prefixed codes drawn from a shared registry of formats and algorithms.
  - Composability with Multihash and Multibase to build Content Identifiers (CIDs).
  - Agility: new codecs can be added without changing the wrapping convention.

- ### Applications
  - Constructing CIDs in IPFS and IPLD so that the hash and codec are unambiguous.
  - Identifying key types and protocols in libp2p peer identities and addresses.
  - Storage layers in Filecoin and other content-addressed networks.

- ### Provenance

