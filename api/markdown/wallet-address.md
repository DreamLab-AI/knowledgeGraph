- ### Definition
  - [[Wallet Address]] is defined in relation to [[Cryptocurrency Wallet]], [[Public-Key Cryptography]], [[Private Key]], [[Hash Function]], building on [[Blockchain]].
  - A wallet address is a public, shareable identifier on a blockchain network to which assets can be sent and from which ownership is asserted. It is typically derived deterministically from a public key by hashing and encoding, allowing anyone to send funds to it while only the holder of the corresponding private key can authorise outgoing transactions. Addresses are network-specific in format and serve as the destination in transactions and the anchor for on-chain balance accounting.

- ### Overview
  - A wallet address is the public face of a key pair. The private key is the secret that authorises spending; the public key is derived from it; and the address is a compact, error-checked encoding derived from the public key, suitable for sharing in QR codes or copy-paste. Revealing an address exposes no ability to spend.
  - Address formats differ by network: Bitcoin uses Base58Check and Bech32 (SegWit) encodings, while Ethereum uses a 20-byte hex string with an EIP-55 mixed-case checksum. Both bake in checksums so that mistyped addresses are rejected rather than silently losing funds.

- ### Key aspects
  - Derivation: hash a public key (e.g. RIPEMD-160 of SHA-256, or Keccak-256) then apply a checksum and encoding scheme.
  - One-way relationship: an address cannot reveal its public or private key, and many addresses can be generated from one seed via HD derivation.
  - Reuse and privacy: reusing an address links transactions; hierarchical deterministic wallets generate fresh addresses to improve privacy.

- ### Applications
  - Receiving payments, payroll, and donations on public blockchains.
  - Identifying accounts and contracts in block explorers and analytics.
  - Whitelisting destinations in custody, exchange, and treasury workflows.

- ### Relationships
  - subClassOf:: [[Blockchain]]
  - relatedTo:: [[Cryptocurrency Wallet]]
  - relatedTo:: [[Transaction]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Bitcoin]]
  - requires:: [[Public-Key Cryptography]]
  - requires:: [[Hash Function]]
  - uses:: [[Public Key]]
  - uses:: [[Hash Function]]
  - dependsOn:: [[Private Key]]
  - dependsOn:: [[Digital Signature]]
  - enables:: [[Transaction]]
  - partOf:: [[Cryptocurrency Wallet]]
  - supports:: [[Ethereum]]
  - supports:: [[Bitcoin]]
  - bridgesTo:: [[Digital Signature]]
  - contrastsWith:: [[Private Key]]
  - sameAs:: [[Blockchain Address]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation