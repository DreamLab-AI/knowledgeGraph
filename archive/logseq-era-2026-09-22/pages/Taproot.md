public:: true

# Taproot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:taproot",
  "@type": "Page",
  "vc:slug": "taproot",
  "title": "Taproot",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:taproot",
  "@type": "Class",
  "label": "Taproot",
  "definition": "Taproot is a soft-fork upgrade to the Bitcoin protocol, activated at block 709,632 in November 2021, comprising BIPs 340, 341, and 342. It introduces Schnorr signatures (BIP 340), Pay-to-Taproot (P2TR) outputs with Merkelised Abstract Syntax Tree (MAST) spending-condition commitments (BIP 341), and Tapscript — an updated Bitcoin Script dialect (BIP 342). Together these improvements enhance transaction privacy by making complex multi-condition spends indistinguishable from simple key-path spends, improve efficiency via Schnorr signature aggregation, and expand smart-contract expressiveness on Bitcoin's base layer.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:schnorr-signatures",
        "label": "Schnorr Signatures"
      },
      {
        "@id": "urn:ngm:class:merkelised-abstract-syntax-tree",
        "label": "Merkelised Abstract Syntax Tree"
      },
      {
        "@id": "urn:ngm:class:bip-342-tapscript",
        "label": "Tapscript"
      },
      {
        "@id": "urn:ngm:class:pay-to-taproot",
        "label": "Pay-to-Taproot"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview",
        "label": "Bitcoin Technical Overview"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:soft-fork",
        "label": "Soft Fork"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:taproot-assets",
        "label": "Taproot Assets"
      },
      {
        "@id": "urn:ngm:class:mu-sig-2",
        "label": "MuSig2"
      },
      {
        "@id": "urn:ngm:class:bit-vm",
        "label": "BitVM"
      },
      {
        "@id": "urn:ngm:class:point-time-locked-contracts",
        "label": "Point Time-Locked Contracts"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:secp256k1",
        "label": "secp256k1"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
        "label": "Bitcoin Improvement Proposals"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:transaction-privacy",
        "label": "Transaction Privacy"
      },
      {
        "@id": "urn:ngm:class:signature-aggregation",
        "label": "Signature Aggregation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
        "label": "Bitcoin Improvement Proposals"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:pay-to-script-hash",
        "label": "Pay-to-Script-Hash"
      },
      {
        "@id": "urn:ngm:class:segregated-witness",
        "label": "Segregated Witness"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:pay-to-taproot",
      "label": "Pay-to-Taproot"
    },
    {
      "@id": "urn:ngm:class:bip-341",
      "label": "BIP-341"
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

- ### Definition
  - [[Taproot]] is a soft-fork upgrade to the [[Bitcoin Network]] activated at block 709,632 in November 2021, comprising three [[Bitcoin Improvement Proposals]]: BIP 340 ([[Schnorr Signatures]]), BIP 341 ([[Pay-to-Taproot]] outputs with [[Merkelised Abstract Syntax Tree]] spending conditions), and BIP 342 ([[Tapscript]]). By encoding all possible spending paths in a MAST commitment and revealing only the executed branch, Taproot makes complex multi-condition spends indistinguishable from simple single-key spends, advancing [[Transaction Privacy]] on the base layer. The use of [[Schnorr Signatures]] instead of [[ECDSA]] enables linear [[Signature Aggregation]], compressing n-of-n [[Multi-Signature]] schemes into a single key-sized witness and reducing transaction weight.

- ### Overview
  - Taproot is widely regarded as Bitcoin's most impactful protocol upgrade since [[Segregated Witness]] (SegWit, 2017). Its development was initiated by Gregory Maxwell's 2018 proposal, synthesising years of prior discussion around Schnorr signatures and the MAST concept (first introduced by Johnson Lau in 2016). The three BIPs were refined through 2019–2020 with broad developer participation, and the Speedy Trial activation mechanism achieved miner lock-in in June 2021 ahead of November activation.
  - The central motivation was twofold: privacy and efficiency. Before Taproot, a multi-signature or time-locked output broadcast its entire script on-chain when spent, leaking structural information. With Taproot, cooperative spends — where all participants agree on the outcome — appear identical to ordinary single-key spends, regardless of the complexity of the underlying spending conditions. Uncooperative spends must reveal only the executed script branch, not all branches.
  - Taproot was also notable for its governance significance: unlike the contentious 2017 SegWit activation and the ensuing User Activated Soft Fork (UASF), the Taproot upgrade proceeded with minimal controversy, serving as a reference for future Bitcoin soft-fork governance.

- ### Key Components
  - **[[Schnorr Signatures]] (BIP 340)**
    - Replace [[ECDSA]] as the default signature scheme for P2TR outputs.
    - Mathematically linear, enabling [[Signature Aggregation]]: multiple parties can produce a single aggregate signature indistinguishable from a single-party signature.
    - Based on the [[secp256k1]] elliptic curve, the same curve used for all prior [[Bitcoin Network]] signatures.
    - Enable [[MuSig2]], the two-round interactive protocol for key aggregation, building [[Multi-Signature]] schemes without on-chain indication of the number of participants.
  - **[[Pay-to-Taproot]] (P2TR) and [[Merkelised Abstract Syntax Tree]] (BIP 341)**
    - A P2TR output commits to a tweaked public key: Q = P + H(P, m)G, where P is the internal (aggregate) key and m is the root of a [[Merkle Tree]] over all alternative script spending conditions.
    - Key-path spending: all parties sign with the aggregate key, producing a Schnorr signature. On-chain appearance is identical to a simple single-key spend, providing maximum [[Transaction Privacy]].
    - Script-path spending: if key-path cooperation fails, the spender reveals only the specific script branch executed and its Merkle proof, not all branches. Unused conditions remain private.
    - Outputs are SegWit version 1 (bc1p… addresses), building on [[Segregated Witness]] infrastructure.
  - **[[Tapscript]] (BIP 342)**
    - A successor scripting language to the existing [[Bitcoin Script]], tuned for Taproot spending conditions.
    - Redefines opcode semantics for Schnorr signature checking (OP_CHECKSIG, OP_CHECKMULTISIG replaced with OP_CHECKSIGADD).
    - Enables future script upgrades via OP_SUCCESS opcodes, which always succeed in current execution but can be redefined by future soft forks without breaking existing scripts.
    - Powers [[Point Time-Locked Contracts]] (PTLCs) as a privacy-preserving alternative to [[Hash Time-Locked Contracts]] (HTLCs) in [[Lightning Network]] payments.

- ### Applications and Use Cases
  - **[[Lightning Network]] Enhancement**
    - Taproot channels (announced and deployed incrementally by Lightning implementations) reduce the on-chain footprint of channel open and close transactions by using P2TR outputs.
    - [[Point Time-Locked Contracts]] replace HTLCs in payment routing, removing the linkability of payments across hops and improving routing privacy.
  - **[[Taproot Assets]] Protocol**
    - Developed by Lightning Labs (formerly called Taro), [[Taproot Assets]] leverages MAST commitments to issue fungible tokens and NFTs on Bitcoin, with Lightning-routable transfers.
    - Anchors asset state in Taproot outputs, inheriting Bitcoin's security model.
    - Enables stablecoins and other tokenised assets to settle on the [[Lightning Network]].
  - **[[BitVM]] Computation**
    - The BitVM paradigm (2023–2024) uses Tapscript's expressiveness to encode arbitrary computation as large Taproot script trees.
    - Enables optimistic verification of off-chain computations on Bitcoin without a consensus-level hard fork, significantly expanding [[Smart Contracts]] capabilities on the base layer.
    - Serves as the verification layer for Bitcoin bridges and zkVM rollups.
  - **[[Multi-Signature]] and Treasury Management**
    - Enterprises and DAOs use [[MuSig2]] over P2TR outputs for k-of-n co-signers with a single on-chain key, reducing fees and concealing custody architecture.
    - Hardware wallets (Ledger, Trezor, Coldcard) and software wallets (Bitcoin Core, Sparrow, Wasabi) have progressively adopted P2TR support.
  - **Privacy-Preserving DeFi Bridges**
    - Taproot's uniform output appearance reduces heuristic chain-analysis effectiveness, supporting [[Decentralised Finance]] use cases where participants wish to protect their on-chain footprint.

- ### Mechanisms
  - **Key Tweaking**
    - The tweaking formula Q = P + H(P, m)G binds a public key to a MAST root without revealing m unless necessary.
    - Uses tagged hashes (domain-separated SHA-256 applications) defined in BIP 340 to prevent cross-protocol hash collisions.
  - **Signature Aggregation via [[MuSig2]]**
    - Two-round interactive signing: in round one, each signer commits a nonce; in round two, each produces a partial signature. Partial signatures sum to a valid Schnorr aggregate signature.
    - Reduces n-of-n multisig from n signatures and n public keys to one aggregate key and one signature on-chain.
  - **MAST Merkle Proof Verification**
    - Script-path spends include the script leaf, its hash siblings up the [[Merkle Tree]], and the internal key P.
    - Verification reconstructs the expected tweak and checks that P + H(P, m)G matches the output's key Q.
  - **OP_SUCCESS Extensibility**
    - Opcodes in the range 0x50–0xfe that are currently undefined in Tapscript are defined as OP_SUCCESS, making any script containing them immediately valid.
    - Future soft forks can assign semantics to OP_SUCCESS opcodes (e.g., implementing [[Zero-Knowledge Proof]] verifiers as native opcodes without breaking existing scripts).

- ### Relationships
  - hasPart:: [[Schnorr Signatures]]
  - hasPart:: [[Merkelised Abstract Syntax Tree]]
  - hasPart:: [[Tapscript]]
  - hasPart:: [[Pay-to-Taproot]]
  - partOf:: [[Bitcoin Technical Overview]]
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Merkle Tree]]
  - requires:: [[Soft Fork]]
  - enables:: [[Taproot Assets]]
  - enables:: [[MuSig2]]
  - enables:: [[Taproot Channels]]
  - enables:: [[BitVM]]
  - enables:: [[Point Time-Locked Contracts]]
  - uses:: [[Cryptographic Signature]]
  - uses:: [[Hash Function]]
  - uses:: [[secp256k1]]
  - supports:: [[Lightning Network]]
  - supports:: [[Transaction Privacy]]
  - supports:: [[Signature Aggregation]]
  - standardizedBy:: [[Bitcoin Improvement Proposals]]
  - contrastsWith:: [[ECDSA]]
  - contrastsWith:: [[Pay-to-Script-Hash]]
  - contrastsWith:: [[Segregated Witness]]
  - relatedTo:: [[Bitcoin Network]]
  - relatedTo:: [[Bitcoin Script]]
  - relatedTo:: [[Smart Contracts]]
  - relatedTo:: [[Multi-Signature]]
  - relatedTo:: [[Bitcoin Governance]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Decentralised Finance]]

- ### Standards and Context
  - **BIP 340** — Schnorr Signatures for secp256k1 (Pieter Wuille, Jonas Nick, Tim Ruffing)
  - **BIP 341** — Taproot: SegWit version 1 spending rules (Pieter Wuille, Jonas Nick, Anthony Towns, et al.)
  - **BIP 342** — Validation of Taproot Scripts / Tapscript (same authors)
  - Activation: Speedy Trial mechanism (BIP 8 variant with a short signalling window), miner lock-in June 2021, activation November 2021 at block 709,632.
  - Bitcoin Core versions 0.21.1+ include Taproot activation logic; full wallet support from 22.0+.
  - The [[Bitcoin Improvement Proposals]] process served as the governance framework; no hard fork or contentious split occurred, distinguishing Taproot's activation from the 2017 SegWit/BCH fork.
  - Related to Ethereum's EIP process and similar smart-contract upgrade paths, but philosophically distinct: Taproot preserves Bitcoin's UTXO model and does not introduce a general-purpose VM at the consensus layer.

- ### Provenance
  - sources:: BIP 340 (Wuille, Nick, Ruffing), BIP 341, BIP 342; Gregory Maxwell's 2018 taproot proposal; Lightning Labs Taproot Assets documentation; BitVM whitepaper (Robin Linus, 2023)
  - updated:: 2026-06-13
