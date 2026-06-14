public:: true

# MuSig2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:744515476e155384699c796ed40329585dabfe9b9c46379cb8c08424590ef86a",
  "@type": "Page",
  "vc:slug": "mu-sig-2",
  "title": "MuSig2",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:schnorr-signatures",
      "vc:label": "Schnorr Signatures"
    },
    {
      "@id": "urn:visionflow:linked:taproot",
      "vc:label": "Taproot"
    },
    {
      "@id": "urn:visionflow:linked:schnorr-signature",
      "vc:label": "Schnorr Signature"
    },
    {
      "@id": "urn:visionflow:linked:multisignature",
      "vc:label": "Multisignature"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MuSig2"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mu-sig-2",
  "@type": "Class",
  "label": "MuSig2",
  "definition": "MuSig2 is a two-round multi-signature protocol for the Schnorr signature scheme, enabling a group of signers to collaboratively produce a single aggregate signature and a single aggregate public key that are indistinguishable on-chain from a standard single-signer Schnorr signature. It improves upon the original MuSig (three-round) by eliminating one communication round without sacrificing security, using a technique of committing to multiple nonces per signer and computing a linear combination of those nonces after seeing all co-signers' commitments. The scheme is proven secure in the random oracle model under the discrete logarithm assumption and is resistant to the rogue-key and Wagner attacks that affect naive key-aggregation approaches.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multisignature",
      "label": "Multisignature"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:schnorr-signatures",
        "label": "Schnorr Signatures"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-aggregation",
        "label": "Key Aggregation"
      },
      {
        "@id": "urn:ngm:class:nonce-commitment",
        "label": "Nonce Commitment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:threshold-signatures",
        "label": "Threshold Signatures"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-transactions",
        "label": "Privacy-Preserving Transactions"
      },
      {
        "@id": "urn:ngm:class:collaborative-custody",
        "label": "Collaborative Custody"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bip-327",
        "label": "BIP-327"
      },
      {
        "@id": "urn:ngm:class:key-aggregation-protocol",
        "label": "Key Aggregation Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:secp256k1",
        "label": "secp256k1"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:random-oracle-model",
        "label": "Random Oracle Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:musig",
        "label": "MuSig"
      },
      {
        "@id": "urn:ngm:class:frost",
        "label": "FROST"
      },
      {
        "@id": "urn:ngm:class:ecdsa-multisig",
        "label": "ECDSA Multisig"
      },
      {
        "@id": "urn:ngm:class:shamir-secret-sharing",
        "label": "Shamir Secret Sharing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bitcoin-improvement-proposal",
        "label": "Bitcoin Improvement Proposal"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:script-less-contracts",
        "label": "Script-less Contracts"
      },
      {
        "@id": "urn:ngm:class:adaptor-signatures",
        "label": "Adaptor Signatures"
      },
      {
        "@id": "urn:ngm:class:discrete-logarithm",
        "label": "Discrete Logarithm"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:musig2-protocol",
      "label": "MuSig2 Protocol"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mu-sig-2:4cec89920522",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:744515476e155384699c796ed40329585dabfe9b9c46379cb8c08424590ef86a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Schnorr Signatures]]",
      "resolved": "urn:visionflow:linked:schnorr-signatures",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Taproot]]",
      "resolved": "urn:visionflow:linked:taproot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Schnorr Signature]]",
      "resolved": "urn:visionflow:linked:schnorr-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multisignature]]",
      "resolved": "urn:visionflow:linked:multisignature",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - MuSig2 is a two-round interactive [[Multisignature]] protocol based on [[Schnorr Signatures]], designed to allow a group of independent signers to collaboratively generate a single aggregate [[Digital Signature]] and a single aggregate public key. The protocol was proposed by Jonas Nick, Tim Ruffing, and Yannick Seurin in 2020 as a successor to the original [[MuSig]] scheme, reducing the required communication rounds from three to two by introducing a technique of committing to two nonces per signer and computing a linear combination of those nonces post-commitment. The resulting signature is cryptographically identical to a standard single-signer Schnorr signature, making it compatible with [[Taproot]] and enabling substantial on-chain privacy improvements for [[Bitcoin]] multi-party arrangements.

- ### Overview
  - MuSig2 addresses the fundamental problem of distributing signing authority across multiple parties while maintaining on-chain efficiency and privacy. In traditional [[ECDSA Multisig]] schemes (such as Bitcoin's native OP_CHECKMULTISIG), each signer's public key and signature is visible on-chain, revealing the multisig structure and increasing transaction size and cost. MuSig2 eliminates this exposure by producing output that is indistinguishable from a single-signer [[Schnorr Signature]].
  - The protocol builds on [[Key Aggregation]] using the MuSig coefficient technique (also called the KeyAgg algorithm), which assigns each signer a hash-derived coefficient to prevent [[Rogue-Key Attack]]s. In a rogue-key attack, a malicious participant could claim a public key crafted to cancel out other participants' keys, effectively seizing sole control of the aggregate key.
  - Two-round structure: the protocol requires only two communication rounds (nonce exchange, then partial signature exchange), as opposed to the three rounds (commitment, nonce, signature) needed by the original [[MuSig]]. This makes MuSig2 compatible with a broader range of hardware security modules and [[Hardware Wallet]] implementations where stateful multi-round protocols are difficult.
  - Security proof: MuSig2 is proven secure in the random oracle model (ROM) under the [[Discrete Logarithm]] assumption. A subsequent analysis also provided security proofs in the algebraic group model (AGM), giving stronger confidence in the construction. The proofs account for concurrent session attacks and handle the two-nonce technique rigorously.
  - Standardisation: MuSig2 was formally standardised as [[BIP-327]] within the [[Bitcoin Improvement Proposal]] process, providing a complete specification for implementers including key aggregation, nonce generation, signing, and verification algorithms.

- ### Key Mechanisms
  - **Key Aggregation (KeyAgg)**
    - Each signer contributes their individual public key. A hash-based coefficient is computed for each key over the entire set of public keys. The aggregate public key is the sum of all individual keys multiplied by their respective coefficients, expressed over the [[secp256k1]] elliptic curve.
    - uses:: [[Elliptic Curve Cryptography]]
    - requires:: [[Key Aggregation]]
  - **Nonce Generation**
    - Each signer generates two random secret nonces per signing session and computes the corresponding public nonce pair. Generating nonces from a [[Cryptographically Secure Pseudorandom Number Generator]] (CSPRNG) with additional entropy inputs (secret key, message, extra randomness) is required to prevent nonce reuse, which would catastrophically expose the private key.
    - Nonce reuse is a critical vulnerability: if two different messages are signed with the same nonce, the private key can be algebraically recovered. [[Hardware Wallet]] implementations must handle stateful nonce management carefully.
    - requires:: [[Nonce Commitment]]
  - **Round 1 — Nonce Commitment Exchange**
    - Each signer broadcasts their pair of public nonces. No aggregation happens yet. This round is non-interactive with respect to the message being signed and can be pre-computed for performance.
  - **Round 2 — Partial Signing and Aggregation**
    - Once all public nonces are collected, each signer computes a challenge hash using the aggregate nonce (derived as a linear combination of the two nonces weighted by a session-specific hash), the aggregate public key, and the message. Each signer then produces a partial Schnorr signature. The coordinator aggregates all partial signatures by simple scalar addition, yielding a single aggregate signature.
    - uses:: [[Hash Function]]
  - **Verification**
    - Verification is identical to standard [[Schnorr Signature]] verification using the aggregate public key. No special multi-party verification logic is needed, making MuSig2 signatures drop-in compatible with any Schnorr-aware system, including [[Taproot]] outputs on [[Bitcoin]].

- ### Security Properties
  - **Rogue-Key Resistance** — The KeyAgg coefficient construction prevents any single participant from choosing a key that cancels or subverts the keys of other participants.
  - **Concurrent Session Security** — The two-nonce technique was specifically designed to remain secure when multiple signing sessions run in parallel (a weakness exploited by the Wagner attack against naive two-round schemes).
  - **Unforgeability** — Under the [[Discrete Logarithm]] assumption, no adversary controlling a strict subset of signers can forge a valid aggregate signature without cooperation from at least one honest signer.
  - **Key Indistinguishability** — The aggregate public key is computationally indistinguishable from a random key in the group, providing privacy against third-party observers.
  - **Non-Interactivity of Round 1** — Because Round 1 is message-independent, nonces can be pre-shared before the message is known, enabling efficient implementations in constrained environments.

- ### Applications and Use Cases
  - **Bitcoin Collaborative Custody**
    - MuSig2 enables 2-of-2, 2-of-3, and n-of-n [[Multisignature]] arrangements that appear on-chain as a single key, reducing transaction fees and concealing custody structure. Custodians like exchanges and self-custody setups using [[Taproot]] can deploy MuSig2 to improve both cost-efficiency and privacy.
    - supports:: [[Collaborative Custody]]
  - **Taproot and Tapscript Integration**
    - [[Taproot]] (BIP-341) activates Schnorr signatures on [[Bitcoin]], and its key-path spend uses a single key that can itself be a MuSig2 aggregate. This means that even complex n-of-n arrangements look identical to single-key payments at the key-path spend level.
    - enables:: [[Taproot]]
  - **Lightning Network Channel Management**
    - [[Lightning Network]] channel opens and closes involve two parties jointly controlling funds. MuSig2 replaces the visible 2-of-2 multisig with a single aggregate key, reducing on-chain footprint and improving channel privacy.
    - supports:: [[Lightning Network]]
  - **Hardware Security Module Integration**
    - Because MuSig2 reduces to two rounds and allows pre-sharing of nonces, [[Hardware Wallet]] manufacturers (e.g., Ledger, Coldcard) can implement it without complex state machines. BIP-327 provides the exact specification they need.
    - supports:: [[Hardware Wallet]]
  - **Script-less Contracts and Adaptor Signatures**
    - MuSig2 composes with [[Adaptor Signatures]] to create cryptographic conditions (e.g., atomic swaps, payment channels) where the release of a signature reveals a secret, enabling trustless cross-chain protocols without on-chain script exposure.
    - relatedTo:: [[Adaptor Signatures]]
  - **Decentralised Key Management**
    - In [[Decentralised Autonomous Organisation]] (DAO) governance contexts, MuSig2 can serve as a threshold signing layer where a quorum of key holders must approve a transaction, bridging blockchain security with governance workflows.
    - bridgesTo:: [[Decentralised Autonomous Organisation]]
  - **Secure Multi-Party Computation Integration**
    - MuSig2 can be viewed as a special case of [[Secure Multi-Party Computation]] for the specific function of Schnorr signing, and it can be embedded into more general MPC frameworks to achieve threshold variants.
    - bridgesTo:: [[Secure Multi-Party Computation]]

- ### Comparison with Related Schemes
  - **MuSig vs MuSig2**
    - The original [[MuSig]] required three rounds (commitment to nonces, reveal of nonces, partial signatures). MuSig2 eliminates the commitment round using the two-nonce linear combination technique, achieving two-round signing at the cost of a slightly more complex nonce aggregation step.
    - contrastsWith:: [[MuSig]]
  - **MuSig2 vs FROST**
    - [[FROST]] (Flexible Round-Optimised Schnorr Threshold signatures) is a threshold signature scheme where t-of-n signers (t < n) can produce a valid signature, whereas MuSig2 requires all n signers to participate (n-of-n). FROST is more flexible for settings where signer availability cannot be guaranteed.
    - contrastsWith:: [[FROST]]
  - **MuSig2 vs ECDSA Multisig**
    - Native [[ECDSA Multisig]] on Bitcoin exposes all public keys and requires all partial signatures on-chain, increasing size and cost. MuSig2 produces a constant-size aggregate signature identical in format to a single-signer output.
    - contrastsWith:: [[ECDSA Multisig]]
  - **MuSig2 vs Shamir Secret Sharing**
    - [[Shamir Secret Sharing]] splits a private key into shares, reconstructing the key at signing time — inherently centralised and risky. MuSig2 never reconstructs a joint private key, keeping each signer's key private throughout.
    - contrastsWith:: [[Shamir Secret Sharing]]

- ### Relationships
  - subClassOf:: [[Multisignature]]
  - requires:: [[Schnorr Signatures]]
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Key Aggregation]]
  - requires:: [[Nonce Commitment]]
  - enables:: [[Taproot]]
  - enables:: [[Threshold Signatures]]
  - enables:: [[Privacy-Preserving Transactions]]
  - enables:: [[Collaborative Custody]]
  - implements:: [[BIP-327]]
  - uses:: [[secp256k1]]
  - uses:: [[Hash Function]]
  - uses:: [[Random Oracle Model]]
  - supports:: [[Bitcoin]]
  - supports:: [[Lightning Network]]
  - supports:: [[Hardware Wallet]]
  - contrastsWith:: [[MuSig]]
  - contrastsWith:: [[FROST]]
  - contrastsWith:: [[ECDSA Multisig]]
  - contrastsWith:: [[Shamir Secret Sharing]]
  - standardizedBy:: [[Bitcoin Improvement Proposal]]
  - relatedTo:: [[Digital Signature]]
  - relatedTo:: [[Adaptor Signatures]]
  - relatedTo:: [[Discrete Logarithm]]
  - relatedTo:: [[Script-less Contracts]]
  - bridgesTo:: [[Decentralised Autonomous Organisation]]
  - bridgesTo:: [[Secure Multi-Party Computation]]

- ### Standards and Context
  - **BIP-327** — The official [[Bitcoin Improvement Proposal]] that codifies MuSig2. It specifies the exact byte-level serialisation of aggregate public keys and partial signatures, the nonce generation algorithm, and the signing and verification procedures. Published in 2022–2023.
    - standardizedBy:: [[Bitcoin Improvement Proposal]]
  - **BIP-340** ([[Schnorr Signatures]] for [[secp256k1]]) — MuSig2 builds directly on the Schnorr signature scheme as defined in BIP-340, which is the foundational primitive.
  - **BIP-341** ([[Taproot]]) — Introduces the key-path spend mechanism that MuSig2 aggregate keys are designed to fill. Together, BIP-327, BIP-340, and BIP-341 form a coherent stack for private, cost-efficient multi-party Bitcoin transactions.
  - **Academic Foundation** — The MuSig2 paper by Nick, Ruffing, and Seurin (2020/2021) provides the formal security proofs in the ROM and AGM. It was presented at CRYPTO 2021.
  - **Libsecp256k1** — The reference C library for [[secp256k1]] operations used in [[Bitcoin Core]] includes a MuSig2 module (experimental, then stabilised), making it the canonical implementation reference.

- ### Provenance
  - sources:: Nick, Ruffing, Seurin — "MuSig2: Simple Two-Round Schnorr Multi-Signatures" (CRYPTO 2021); BIP-327 specification; Bitcoin Optech documentation
  - updated:: 2026-06-13
