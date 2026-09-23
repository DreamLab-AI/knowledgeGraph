
Keccak-256 is a cryptographic hash function from the Keccak family, producing a fixed 256-bit digest using a sponge construction. It is the specific variant adopted by Ethereum, distinct from the later NIST-standardised SHA3-256 due to a difference in padding. Keccak-256 provides collision and preimage resistance for addresses, transaction hashes and message commitments in blockchain systems.

- ### Content
  - The sponge design absorbs input into a large internal state and squeezes out a 256-bit digest, offering strong resistance to collisions and preimages. In off-chain voting platforms, Keccak-256 generates the deterministic message hashes that voters sign, allowing tamper-evident tallies to be verified on-chain without paying gas for every vote.

