public:: true

# Bitcoin Script
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-script",
  "@type": "Page",
  "vc:slug": "bitcoin-script",
  "title": "Bitcoin Script",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-script",
  "@type": "Class",
  "label": "Bitcoin Script",
  "definition": "Bitcoin Script is a non-Turing-complete, stack-based scripting language embedded in every Bitcoin transaction that defines the conditions under which unspent transaction outputs (UTXOs) may be spent. It consists of a constrained set of opcodes operating on a last-in-first-out (LIFO) stack, deliberately designed without loops or unbounded recursion to ensure guaranteed termination and predictable resource consumption. Script programs are expressed as paired locking scripts (scriptPubKey) and unlocking scripts (scriptSig or SegWit witness data) that encode spending conditions including digital signature verification, multisignature requirements, hash pre-image revelation, and time locks. Standard output templates — P2PKH, P2SH, P2WPKH, P2WSH, and P2TR — formalise the most common spending patterns used across the Bitcoin network.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:scripting-language",
      "label": "Scripting Language"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-scripting-language",
      "label": "Bitcoin Scripting Language"
    },
    {
      "@id": "urn:ngm:class:forth-like-script",
      "label": "Forth-like Script"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:witness-data",
        "label": "Witness Data"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-core",
        "label": "Bitcoin Core"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:opcodes",
        "label": "Opcodes"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-ordinals",
        "label": "Bitcoin Ordinals"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
      },
      {
        "@id": "urn:ngm:class:multisignature-wallets",
        "label": "Multisignature Wallet"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin Covenant"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-transaction",
        "label": "Bitcoin Transaction"
      },
      {
        "@id": "urn:ngm:class:stack-machine",
        "label": "Stack Machine"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:pay-to-public-key-hash",
        "label": "Pay-to-Public-Key-Hash"
      },
      {
        "@id": "urn:ngm:class:pay-to-script-hash",
        "label": "Pay-to-Script-Hash"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
        "label": "Bitcoin Improvement Proposal"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:turing-complete-language",
        "label": "Turing Complete Language"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:programming-language",
        "label": "Forth Programming Language"
      },
      {
        "@id": "urn:ngm:class:merklised-abstract-syntax-tree",
        "label": "Merklised Abstract Syntax Tree"
      },
      {
        "@id": "urn:ngm:class:segregated-witness",
        "label": "Segregated Witness"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Bitcoin Script]] is the programmable spending-condition language that governs every output in the [[UTXO Model]] underlying the Bitcoin network. It is a Forth-like, [[Stack Machine]]-oriented language composed of [[Opcodes]] that push data and execute operations — notably `OP_DUP`, `OP_HASH160`, `OP_CHECKSIG`, `OP_CHECKMULTISIG`, and `OP_CHECKLOCKTIMEVERIFY`. The deliberate omission of loops makes Script provably terminating and resistant to denial-of-service through computational exhaustion. Spending a previous output requires supplying a [[ScriptSig]] (or [[Witness Data]] in [[Segregated Witness]]) that, when executed together with the locking [[ScriptPubKey]], leaves a non-zero value on the stack, satisfying the spending condition and authorising the transfer of value.

- ### Overview
  - Bitcoin Script was designed by Satoshi Nakamoto as part of Bitcoin's original architecture released in January 2009. The language underpins every value transfer in the Bitcoin protocol, encoding the exact conditions that must be fulfilled before funds locked in a UTXO can be moved.
  - The key design choice is deliberate non-Turing-completeness: without loops, recursive calls, or dynamic jumps, every Bitcoin Script programme terminates in a bounded number of steps. This makes fee estimation deterministic, enables full static analysis of spending conditions, and eliminates whole classes of smart-contract vulnerabilities endemic to [[Turing Complete Language]] platforms.
  - The language operates on a LIFO (last-in, first-out) stack. Literals are pushed; opcodes consume operands from the stack and push results. A transaction is valid when the combined execution of the unlocking and locking scripts leaves a truthy (non-zero, non-empty) value on top of the stack.
  - Bitcoin Script has been deliberately conservative in scope, with the opcode set kept stable since 2010 and new capabilities introduced via carefully reviewed [[Bitcoin Improvement Proposal]] (BIP) soft forks rather than arbitrary extensions.

- ### Key Components
  - **ScriptPubKey (Locking Script)**
    - Attached to each transaction output; specifies the conditions for spending that output.
    - Commonly expresses: "provide a signature from the key whose hash matches this value."
    - May encode complex conditions: multisig thresholds, hash pre-images, or time locks.
  - **ScriptSig (Unlocking Script)**
    - Supplied by the transaction spending a previous output; must satisfy the ScriptPubKey.
    - In [[Segregated Witness]] outputs (P2WPKH, P2WSH, P2TR), the unlocking data is carried in the [[Witness Data]] field outside the scriptSig, reducing transaction weight and fixing transaction malleability.
  - **Opcodes**
    - A defined set of single-byte instruction codes; each performs a specific stack operation.
    - Data-push opcodes: `OP_0` through `OP_16`, `OP_PUSHDATA1/2/4`.
    - Cryptographic opcodes: `OP_CHECKSIG`, `OP_CHECKMULTISIG`, `OP_CHECKDATASIG` (in extensions).
    - Flow-control: `OP_IF` / `OP_ELSE` / `OP_ENDIF` (the only branching permitted; no loops).
    - Time-lock opcodes: `OP_CHECKLOCKTIMEVERIFY` (BIP 65), `OP_CHECKSEQUENCEVERIFY` (BIP 112).
    - Arithmetic: `OP_ADD`, `OP_SUB`, `OP_EQUAL`, `OP_EQUALVERIFY`, `OP_NUMEQUAL`.
    - Hash opcodes: `OP_SHA256`, `OP_HASH160`, `OP_HASH256`, `OP_SHA1` (deprecated).
  - **Standard Output Templates**
    - P2PKH (Pay-to-Public-Key-Hash) — the original and most widely used template.
    - P2SH (Pay-to-Script-Hash) — introduced by BIP 16; hides complex redeem scripts until spend time.
    - P2WPKH / P2WSH — native SegWit outputs introduced by BIP 141; move witness data outside the transaction.
    - P2TR (Pay-to-Taproot) — introduced by BIP 341 (Taproot); combines key-path and script-path spending via [[Merklised Abstract Syntax Tree]].
  - **Stack Machine Execution Model**
    - Two stacks: the main stack and an alt stack (`OP_TOALTSTACK` / `OP_FROMALTSTACK`).
    - Scripts execute left-to-right; nodes serialise and evaluate them deterministically.
    - Consensus nodes reject any script that causes a stack underflow, returns false, or executes a disabled opcode.

- ### Mechanisms
  - **Two-Phase Execution**
    - Phase 1: the scriptSig (or witness) is pushed onto the stack without execution of code-like push operations.
    - Phase 2: the scriptPubKey is executed in context; the combined state determines validity.
    - For P2SH and P2WSH, an additional deserialisation step evaluates the redeem script or witness script.
  - **Transaction Malleability Fix (SegWit)**
    - Prior to [[Segregated Witness]], scriptSig data was part of the transaction hash, allowing third parties to mutate it without invalidating the signature. Segregated Witness moves witness data outside the txid computation, enabling reliable transaction identifiers and enabling the [[Lightning Network]].
  - **Taproot and MAST**
    - [[Taproot]] (activated November 2021 via BIP 340/341/342 — Schnorr, MAST, Tapscript) allows a UTXO to be spent either by a single key (appearing on-chain as a simple key-path spend) or by revealing one branch of a [[Merklised Abstract Syntax Tree]] of alternative spending conditions.
    - Key-path spends are indistinguishable from ordinary payments on-chain, improving privacy.
    - [[Schnorr Signature]] support (BIP 340) enables key aggregation (MuSig2), making n-of-n multisig appear as a single signature on-chain.
  - **Time Locks**
    - Absolute lock: `OP_CHECKLOCKTIMEVERIFY` (BIP 65) checks that the current block height or UNIX time exceeds a threshold encoded in the script.
    - Relative lock: `OP_CHECKSEQUENCEVERIFY` (BIP 112) enforces a minimum number of blocks or seconds since the UTXO was confirmed.
    - Time locks are essential to [[Lightning Network]] channel construction and unilateral-close safety.
  - **Hash Time-Locked Contracts (HTLCs)**
    - [[Hash Time-Locked Contract]] (HTLC) patterns encode a two-branch spending condition: reveal a hash pre-image within a time window, or reclaim funds after the window expires.
    - HTLCs are the fundamental primitive enabling cross-channel routed payments in the Lightning Network and cross-chain [[Atomic Swap]] operations.

- ### Applications and Use Cases
  - **Simple Payments** — P2PKH and P2WPKH scripts are used for the vast majority of ordinary peer-to-peer Bitcoin transfers, requiring only a single [[Digital Signature]] and public key.
  - **Multisignature Wallets** — P2SH-multisig and P2WSH-multisig templates allow M-of-N spending conditions, used widely by exchanges, custodians, and corporate treasuries as a security policy.
  - **Lightning Network** — the [[Lightning Network]] uses 2-of-2 multisig funding outputs, HTLCs, and SegWit transaction identifiers to create a network of bidirectional payment channels, enabling near-instant micropayments off-chain.
  - **Atomic Swaps** — HTLC pairs on two blockchains enable trustless cross-chain asset exchange without a centralised counterparty, bridging Bitcoin to other cryptocurrency networks.
  - **Time-Locked Vaults** — absolute and relative time locks allow self-custody schemes where keys are locked for a period, providing protection against theft or coercion.
  - **Ordinal Inscriptions** — [[Bitcoin Ordinals]] exploit the expanded SegWit witness capacity (introduced by Taproot) to inscribe arbitrary data (images, text, code) into satoshi-level UTXOs, creating NFT-like digital artefacts entirely within Bitcoin Script.
  - **Discreet Log Contracts** — [[Discreet Log Contract]] (DLC) schemes use adaptor signatures built atop Script's cryptographic primitives to create oracle-based financial contracts without on-chain oracle calls.
  - **Bitcoin Covenants (Proposed)** — proposed opcode extensions, particularly re-enabling `OP_CAT` and introducing `OP_CHECKTEMPLATEVERIFY` (BIP 119), would allow [[Bitcoin Covenant]] patterns where a script constrains not only the current spend but also the form of future transactions, enabling programmable vaults and novel layer-2 constructions.

- ### Relationships
  - uses:: [[Opcodes]]
  - uses:: [[Digital Signature]]
  - uses:: [[Cryptographic Hash Function]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Schnorr Signature]]
  - enables:: [[Lightning Network]]
  - enables:: [[Hash Time-Locked Contract]]
  - enables:: [[Multisignature Wallet]]
  - enables:: [[Atomic Swap]]
  - enables:: [[Bitcoin Ordinals]]
  - enables:: [[Bitcoin Covenant]]
  - requires:: [[Bitcoin Transaction]]
  - requires:: [[Stack Machine]]
  - hasPart:: [[ScriptPubKey]]
  - hasPart:: [[ScriptSig]]
  - hasPart:: [[Witness Data]]
  - partOf:: [[Bitcoin Core]]
  - partOf:: [[UTXO Model]]
  - implements:: [[Pay-to-Public-Key-Hash]]
  - implements:: [[Pay-to-Script-Hash]]
  - implements:: [[Taproot]]
  - standardizedBy:: [[Bitcoin Improvement Proposal]]
  - contrastsWith:: [[Ethereum Virtual Machine]]
  - contrastsWith:: [[Solidity]]
  - contrastsWith:: [[Turing Complete Language]]
  - relatedTo:: [[Forth Programming Language]]
  - relatedTo:: [[Merklised Abstract Syntax Tree]]
  - relatedTo:: [[Segregated Witness]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Formal Verification]]

- ### Standards and Context
  - Bitcoin Script's behaviour is governed by a series of [[Bitcoin Improvement Proposal]] documents that have refined the language over time:
    - BIP 11 — M-of-N standard transaction types (multisig).
    - BIP 16 — Pay-to-Script-Hash (P2SH).
    - BIP 65 — `OP_CHECKLOCKTIMEVERIFY` (absolute time locks).
    - BIP 112 — `OP_CHECKSEQUENCEVERIFY` (relative time locks).
    - BIP 141 — [[Segregated Witness]] (SegWit); separates witness data from the transaction body.
    - BIP 340 — Schnorr Signatures for Bitcoin.
    - BIP 341 — Taproot: SegWit version 1 spending rules and MAST.
    - BIP 342 — Tapscript: validation rules for Taproot script paths.
    - BIP 119 — `OP_CHECKTEMPLATEVERIFY` (CTV) — proposed covenant opcode (under review).
  - The Bitcoin Core reference implementation maintains the canonical opcode evaluation logic. Changes require supermajority miner activation via the BIP 9 or BIP 8 soft-fork signalling mechanisms.
  - The `OP_CAT` re-enablement debate (active 2024–2025, formalised as BIP 347) centres on whether concatenation of stack elements opens excessive attack surface or provides necessary covenant expressiveness. The outcome will shape Bitcoin's programmability trajectory through the late 2020s.
  - Unlike the [[Ethereum Virtual Machine]], which permits arbitrary computation bounded only by gas, Bitcoin Script's bounded opcode set means its security properties can be fully enumerated and verified through [[Formal Verification]] techniques, an active area of academic research.

- ### Current Landscape (2026)
  - The dominant 2024-2026 theme is the covenant debate: proposals to extend Bitcoin Script with opcodes that constrain not just who or when, but where a UTXO can be spent. As of mid-2026 no covenant opcode has been merged into Bitcoin Core or activated on mainnet, though several are live on the Bitcoin Inquisition signet.
  - OP_CAT (BIP-347, Ethan Heilman and Armin Sabouri) was assigned its BIP number in April 2024, activated on signet via Bitcoin Inquisition 25.2 on 30 April 2024, and reached "Complete" (finalised) specification status on 1 March 2026 — but no mainnet activation client has been released.
  - OP_CHECKTEMPLATEVERIFY (CTV, BIP-119, Jeremy Rubin) got its first concrete activation client in early 2026, with parameters proposing a 30 March 2026 signalling start, a 30 March 2027 timeout and a 90% miner threshold (1,815 of 2,016 blocks); as of late May 2026 miner signalling stood at 0%.
  - Bundled approaches have become the frontrunners: CTV+CSFS (BIP-119 + BIP-348, with CHECKSIGFROMSTACKVERIFY merged into Inquisition in November 2024) is widely seen as the likely first soft fork, packaged by Brandon Black's LNHANCE (adding OP_INTERNALKEY / BIP-349) to target Lightning use cases such as LN-Symmetry, timeout trees and PTLCs.
  - The proposal field kept churning: BIP-345 OP_VAULT (O'Beirne, Sanders) was formally withdrawn in May 2025, superseded by Salvatore Ingala's more general OP_CHECKCONTRACTVERIFY (BIP-443); and in March 2026 a competing Taproot-native bundle, BIP-446 (OP_TEMPLATEHASH) plus BIP-448, emerged from Greg Sanders, Antoine Poinsot and Steven Roose.
  - Rusty Russell's "Great Script Restoration" (Bitcoin-Dev, October 2025) proposes a tapscript v2 that reinstates opcodes disabled in 2010 behind a new "varops" validation-cost budget, adds a general introspection opcode OP_TX, and introduces OP_MULTI and OP_SEGMENT — a broader alternative to narrowly scoped covenant opcodes.
  - A parallel track sidesteps consensus change entirely: BitVM2 needs no soft fork and is already in production, powering Citrea's mainnet bridge which launched in January 2026, demonstrating covenant-like enforcement via fraud proofs rather than new script opcodes.
  - Open challenges as of 2026 include the lack of activation consensus (the "bundle problem" of overlapping CTV+CSFS, LNHANCE and BIP-446+448 proposals), a growing institutional camp arguing Bitcoin's consensus rules should be treated as effectively immutable, and forward-looking work such as Winternitz signatures over OP_CAT for quantum resistance at roughly 2,000 vbytes per input.

- ### References
  - 1. Spark (2026). Bitcoin Covenant Activation: Navigating the Path Forward After Years of Debate. https://www.spark.money/research/bitcoin-covenant-activation-path-forward
  - 2. Spark (2026). OP_CAT and the Great Covenant Debate: Bitcoin's Most Contentious Upgrade. https://www.spark.money/research/bitcoin-op-cat-covenant-debate
  - 3. Bitcoin Optech (2025). Newsletter #374 — Draft BIPs for Script Restoration (tapscript v2). https://bitcoinops.org/en/newsletters/2025/10/03/
  - 4. Bitcoin Optech (2025). Newsletter #385: 2025 Year-in-Review Special. https://bitcoinops.org/en/newsletters/2025/12/19/
  - 5. BlockEden (2026). Bitcoin's Covenant Renaissance: How OP_CTV, LNHANCE, OP_CAT, and BitVM2 Could Reshape Bitcoin. https://blockeden.xyz/blog/2026/04/21/bitcoin-covenant-renaissance-op-ctv-lnhance-cat-bitvm2/

- ### Provenance
  - sources:: Satoshi Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System (2008); Bitcoin Core documentation; BIP 11, 16, 65, 112, 141, 340, 341, 342; Bitcoin Optech newsletter series.
  - updated:: 2026-06-13
