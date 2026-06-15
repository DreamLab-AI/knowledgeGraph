public:: true

# BLS Signature
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bls-signature",
  "@type": "Page",
  "vc:slug": "bls-signature",
  "title": "BLS Signature",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bls-signature",
  "@type": "Class",
  "label": "BLS Signature",
  "definition": "A BLS Signature (Boneh–Lynn–Shacham signature) is a cryptographic signature scheme built on bilinear pairings over elliptic curves that permits multiple individual signatures to be aggregated into a single constant-size signature, which can be verified against the aggregate of the corresponding public keys in a single pairing operation. This aggregation property drastically reduces bandwidth and verification cost when many parties must co-sign a message or attest to a block.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:bilinear-pairing", "label": "Bilinear Pairing"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:threshold-signature-scheme", "label": "Threshold Signature Scheme"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:distributed-validator-technology", "label": "Distributed Validator Technology"},
      {"@id": "urn:ngm:class:signature-aggregation", "label": "Signature Aggregation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:pairing-friendly-elliptic-curve", "label": "Pairing-Friendly Elliptic Curve"},
      {"@id": "urn:ngm:class:proof-of-possession", "label": "Proof of Possession"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:validator-attestation", "label": "Validator Attestation"},
      {"@id": "urn:ngm:class:distributed-key-generation", "label": "Distributed Key Generation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:discrete-logarithm-problem", "label": "Discrete Logarithm Problem"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ecdsa", "label": "ECDSA"},
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"},
      {"@id": "urn:ngm:class:multi-party-computation", "label": "Multi-Party Computation"},
      {"@id": "urn:ngm:class:snark", "label": "SNARK"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"},
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:boneh-lynn-shacham-signature", "label": "Boneh-Lynn-Shacham Signature"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[BLS Signature]] (Boneh–Lynn–Shacham) is a [[Digital Signature]] scheme that exploits the properties of bilinear pairings on [[Elliptic Curve Cryptography]] groups to achieve signature aggregation. Given n signers each producing a signature on the same or different messages, BLS allows combining all n signatures into one signature of fixed, small size. A verifier can then check the aggregate signature against the aggregate public key with a single bilinear pairing check, rather than performing n separate verifications. This makes [[BLS Signature]] schemes uniquely suited to large-scale distributed systems where many validators must co-sign blocks.

- ### Relationships
  - [[BLS Signature]] is grounded in [[Elliptic Curve Cryptography]] and [[Public-Key Cryptography]], relying on the hardness of the discrete logarithm problem in pairing-friendly curve groups (BLS12-381 is the standard). It enables efficient [[Threshold Signature Scheme]] constructions, since t-of-n threshold schemes can be built natively from BLS key shares without complex multi-round protocols. It is the signature scheme underpinning Ethereum's proof-of-stake [[Consensus Mechanism]], allowing hundreds of thousands of validator attestations to be compressed per epoch. Its non-interactivity and short signature size also make it attractive for [[Zero-Knowledge Proof]] aggregation pipelines.

- ### Content
  - The BLS signature scheme was introduced by Dan Boneh, Ben Lynn, and Hovav Shacham in 2001, building on the bilinear Weil and Tate pairing constructions that had been developed for cryptographic applications in the late 1990s. The initial motivation was short signatures—BLS produces 48-byte signatures over BLS12-381, compared to 64 bytes for ECDSA. The aggregation breakthrough became apparent later: because pairing bilinearity implies e(aG, bH) = e(G, H)^{ab}, signatures from multiple signers collapse into a single verifiable element.

  - Technically, BLS operates over a pairing-friendly elliptic curve. The BLS12-381 curve, defined by the Zcash team in 2017 and now standard across Ethereum and Filecoin, has a 381-bit prime field. A private key is a scalar; a public key is a curve point; a signature is the hash-to-curve of the message multiplied by the private key. Aggregation simply sums the signature curve points (and public key points) via elliptic curve addition. The pairing-based verification equation e(sig, G) = e(H(m), pk) holds for the aggregate as for any individual signer, provided the Proof of Possession protocol is followed to prevent rogue-key attacks.

  - Ethereum's Beacon Chain, launched in 2020, uses BLS12-381 signatures throughout: each validator signs attestations and block proposals with BLS, and the chain aggregates thousands of attestations per slot into a few hundred bytes. Filecoin similarly uses BLS for message signing. Outside blockchains, BLS is being adopted in threshold cryptography libraries (e.g., BLST, MCL), distributed key generation protocols (DKG), and privacy-preserving systems where succinct multi-party authentication is needed.

  - In 2024–2025 BLS signatures are becoming a standard primitive across the proof-of-stake ecosystem. Ethereum's Pectra upgrade introduced EIP-2537 (BLS12-381 precompile), reducing gas cost of on-chain BLS verification by roughly 10×. Work on BLS-based distributed validator technology (DVT) by projects such as Obol and SSV Network enables fault-tolerant validator clusters without custodial risk. Research into BLS-based recursive SNARK aggregation and post-quantum hybrid schemes is active, though BLS itself is vulnerable to sufficiently large quantum computers, prompting work on migration paths.

