public:: true

# BIP-340 Schnorr Keypair
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bip-340-schnorr-keypair",
  "@type": "Page",
  "vc:slug": "bip-340-schnorr-keypair",
  "title": "BIP-340 Schnorr Keypair",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bip-340-schnorr-keypair",
  "@type": "Class",
  "label": "BIP-340 Schnorr Keypair",
  "definition": "A BIP-340 Schnorr Keypair is the 32-byte public key and associated private key pairing defined by Bitcoin Improvement Proposal 340, which introduced Schnorr signature support to Bitcoin via the Taproot upgrade activated in November 2021. Unlike the earlier ECDSA scheme used in Bitcoin, BIP-340 uses x-only public keys — just the x-coordinate of the secp256k1 curve point — reducing on-chain byte footprint and simplifying key aggregation. The scheme is provably secure under the discrete logarithm assumption and supports native key and signature aggregation via protocols such as MuSig2, enabling multi-party signing that is indistinguishable from single-party signing on-chain. BIP-340 keypairs are the cryptographic foundation for Taproot outputs, Tapscript, and the Nostr identity protocol.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"},
      {"@id": "urn:ngm:class:secp256k1", "label": "secp256k1"},
      {"@id": "urn:ngm:class:bip-340", "label": "BIP-340"},
      {"@id": "urn:ngm:class:bip-341", "label": "BIP-341"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:taproot-assets", "label": "Taproot Assets"},
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi Sig Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:bitcoin-improvement-proposals", "label": "Bitcoin Improvement Proposals"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A BIP-340 Schnorr Keypair is the x-only 32-byte public key and private key pair standardised in [[BIP-340]], forming the cryptographic foundation for [[Taproot Assets]] and enabling efficient multi-party signing on the [[Bitcoin Network]] via the [[secp256k1]] curve.

- ### Relationships
  - The keypair specification is inseparable from [[Schnorr Signature]] mathematics: where ECDSA produced malleable signatures, BIP-340 Schnorr signatures are provably non-malleable and support linear aggregation. The x-only public key encoding was a deliberate design choice to save one byte per output and to simplify the [[BIP-341]] Taproot commitment structure. [[Multi Sig Governance]] schemes benefit enormously because MuSig2 key aggregation produces a single keypair indistinguishable from a solo key, preserving privacy. The [[Elliptic Curve Cryptography]] underpinning uses the same [[secp256k1]] curve as earlier Bitcoin keys, ensuring no new cryptographic assumptions are introduced.

- ### Content
  - BIP-340 was authored by Pieter Wuille, Jonas Nick, and Tim Ruffing and was activated on the Bitcoin mainnet as part of the Taproot soft fork in block 709,632 (November 2021). The motivation was threefold: improve signature security properties, reduce transaction weight, and enable practical threshold and multi-party signing without leaking policy details to blockchain observers.

  - The x-only public key encoding is the most distinctive feature of BIP-340. A secp256k1 curve point has two possible y-coordinates for any given x; BIP-340 implicitly assumes the even y-coordinate, so only the 32-byte x value needs to be stored or transmitted. This contrasts with the 33-byte compressed public key format used in legacy ECDSA, saving one byte per key in every Taproot output — a meaningful saving at scale given Bitcoin's millions of UTXOs.

  - Signature aggregation is the most consequential capability unlocked by BIP-340 keypairs. MuSig2, standardised in BIP-327, allows n-of-n signatories to produce a single 64-byte Schnorr signature that verifies against a single aggregated public key. From the blockchain's perspective the transaction is indistinguishable from a single-signer transaction, conferring both fee savings and privacy benefits. This makes [[Multi Sig Governance]] setups — such as corporate treasury controls or exchange hot-wallet management — both cheaper and more private than equivalent ECDSA multisig constructions.

  - The [[Taproot Assets]] protocol, formerly known as Taro, extends BIP-340 keypairs to represent arbitrary asset commitments on-chain, embedding asset metadata in Tapscript branches while keeping the key path spend equivalent to a normal Bitcoin payment. This architecture relies entirely on BIP-340's x-only key encoding and the homomorphic properties of Schnorr signatures to construct blinded asset proofs that can be verified off-chain by asset holders.

  - Security analysis of BIP-340 operates in the random oracle model and relies on the hardness of the discrete logarithm problem on secp256k1. The scheme provides 128-bit security against classical computers. Post-quantum concerns are acknowledged in the BIP itself: Schnorr signatures, like ECDSA, are vulnerable to Shor's algorithm on a sufficiently powerful quantum computer, motivating ongoing research into hybrid classical-quantum signature schemes for future Bitcoin versions.
