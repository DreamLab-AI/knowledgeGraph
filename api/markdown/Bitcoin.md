public:: true

# Bitcoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bitcoin",
  "@type": "Page",
  "title": "Bitcoin",
  "vc:slug": "bitcoin",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin",
  "@type": "Class",
  "label": "Bitcoin",
  "definition": "Bitcoin is the first decentralised, permissionless, peer-to-peer electronic cash system, introduced by the pseudonymous Satoshi Nakamoto in a 2008 whitepaper and launched as open-source software in January 2009. It maintains a globally shared, tamper-evident ledger — the blockchain — through a proof-of-work consensus mechanism called Nakamoto Consensus, in which miners compete to extend the chain by finding nonces satisfying a difficulty-adjusted SHA-256 hash target, earning new bitcoin and transaction fees as reward. The monetary supply is strictly bounded by a 21 million coin cap enforced deterministically via a halving schedule that reduces the block subsidy approximately every four years, conferring programmatic scarcity and censorship-resistant value transfer without reliance on any trusted intermediary. Bitcoin's UTXO model, Script-based transaction authorisation, and secp256k1 elliptic-curve cryptography together form the foundational substrate upon which Lightning Network payment channels, Taproot smart contracting, and a growing ecosystem of Layer 2 protocols are built.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency",
      "label": "Cryptocurrency"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
      "label": "Bitcoin Proof-of-Work Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2",
        "label": "Bitcoin Layer 2"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-halving",
        "label": "Bitcoin Halving"
      },
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:nakamoto-consensus",
        "label": "Nakamoto Consensus"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:sound-money",
        "label": "Sound Money"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
        "label": "Bitcoin Improvement Proposals"
      },
      {
        "@id": "urn:ngm:class:bip-341-taproot",
        "label": "BIP-341 Taproot"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:solana",
        "label": "Solana"
      },
      {
        "@id": "urn:ngm:class:digital-currency",
        "label": "Digital Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mining-pool",
        "label": "Mining Pool"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      },
      {
        "@id": "urn:ngm:class:fedimint",
        "label": "Fedimint"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "GapFillAuthored"
  }
}
```

- ### Definition
  - [[Bitcoin]] is the first decentralised, permissionless [[Peer-to-Peer Network|peer-to-peer]] electronic cash system, specified by [[Satoshi Nakamoto]] in the 2008 [[Bitcoin Whitepaper]] and launched in January 2009. Its core innovation is a [[Blockchain]] ledger maintained by [[Proof Of Work]] [[Nakamoto Consensus]], securing a fixed monetary supply capped at 21 million coins through a programmatic [[Bitcoin Halving]] schedule. All value transfer is expressed through the [[UTXO Model]] and authorised using [[Bitcoin Script]] and [[Elliptic Curve Cryptography]] over the secp256k1 curve, with cryptographic commitments chained via [[Merkle Tree]] roots in each block header. [[Bitcoin Core]] is the canonical reference implementation; protocol evolution is governed by the [[Bitcoin Improvement Proposals]] process, with [[BIP-341 Taproot]] being a landmark upgrade adding Schnorr signature aggregation and enhanced scripting expressivity.

- ### Overview
  - Bitcoin emerged from the cypherpunk tradition of cryptographic privacy tools, drawing on Adam Back's [[Hashcash]] proof-of-work scheme, Hal Finney's RPOW, and Wei Dai's b-money concept. Satoshi Nakamoto's key breakthrough was resolving the double-spend problem for digital cash without a trusted third party, using a [[Consensus Mechanism]] in which the longest chain of accumulated proof-of-work is treated as the canonical transaction history.
  - The network operates as a fully decentralised [[Peer-to-Peer Network]] of nodes that independently validate all transactions against [[Consensus Rule|consensus rules]] enforced by [[Bitcoin Core]] and its compatible implementations. Full nodes download and validate the entire blockchain from genesis; lightweight SPV clients use [[Merkle Proof]] inclusion proofs for payment verification without storing the full chain.
  - Bitcoin's monetary policy is entirely predetermined: the genesis block rewarded 50 BTC per block; the [[Bitcoin Halving]] reduces this subsidy by half approximately every 210,000 blocks (roughly four years), continuing until the subsidy rounds to zero around 2140. At that point, miners are compensated solely by transaction fees, aligning long-term security incentives with user demand for block space.
  - The [[Blockchain]] is a sequence of blocks each containing: a block header (previous block hash, Merkle root, timestamp, difficulty target, nonce), a [[Coinbase Transaction]] claiming the block reward, and a set of validated user transactions. Miners race to find a nonce producing a block hash below the current difficulty target — a computation bottleneck that makes re-writing history exponentially expensive as chain depth grows, the foundation of [[Blockchain Security]].
  - [[Bitcoin Mining]] has evolved from CPU to GPU to FPGA and now exclusively to application-specific integrated circuits ([[ASIC]] hardware), which achieve orders-of-magnitude better energy efficiency per hash. [[Mining Pool]] coordination aggregates hashrate across many participants to smooth reward variance, though it introduces centralisation pressure that is an active area of [[Bitcoin Centralisation Risks]] research.

- ### Key Components
  - **[[UTXO Model]]** — Bitcoin tracks ownership through an Unspent Transaction Output set rather than account balances. Each transaction consumes one or more UTXOs as inputs and creates one or more UTXOs as outputs. This model enables parallel validation and simplifies double-spend detection: a UTXO can be spent exactly once. The global UTXO set is the minimal state required to validate new transactions.
  - **[[Bitcoin Script]]** — a stack-based, intentionally non-Turing-complete scripting language embedded in transaction inputs and outputs. Standard output types include Pay-to-Public-Key-Hash (P2PKH), Pay-to-Script-Hash (P2SH), Pay-to-Witness-Public-Key-Hash (P2WPKH, SegWit v0), and Pay-to-Taproot (P2TR, SegWit v1). Script's limited expressivity was a deliberate design choice to bound validation cost and attack surface.
  - **[[BIP-341 Taproot]]** — the 2021 soft-fork upgrade (activating at block 709,632) combining Schnorr signatures (BIP-340), Tapscript (BIP-342), and Merkelised Alternative Script Trees (MAST). Taproot allows complex multi-condition spending policies to be committed to in a single public key, revealing only the executed branch on-chain, improving privacy and reducing transaction size for cooperative spending paths. Schnorr signatures enable key and signature aggregation via MuSig2.
  - **[[Bitcoin Halving]]** — the deterministic halving of the block subsidy every 210,000 blocks encodes Bitcoin's disinflationary monetary schedule. The four halvings to date (2012, 2016, 2020, 2024) have reduced the subsidy from 50 BTC to 3.125 BTC. The mechanism is enforced by every full node as a consensus rule, making the issuance schedule effectively immutable without a supermajority network upgrade.
  - **[[Proof Of Work]] and Difficulty Adjustment** — miners must find a block header whose SHA-256 double-hash is numerically below a target value. The network recalculates this target every 2,016 blocks to maintain an average ten-minute block interval, regardless of total network hashrate. This self-regulating [[Consensus Mechanism]] is the basis of Nakamoto Consensus security.
  - **[[Merkle Tree]] Commitment** — each block header commits to the set of included transactions via a binary [[Merkle Tree]] root. This enables [[Merkle Proof]] inclusion proofs of logarithmic size, allowing lightweight clients to verify transaction inclusion without downloading the full block, and is reused in [[Bitcoin Layer 2]] constructions such as payment channels.
  - **[[Elliptic Curve Cryptography]]** — Bitcoin uses the secp256k1 elliptic curve for key generation and transaction signing. Pre-Taproot transactions use ECDSA; post-Taproot P2TR outputs use BIP-340 Schnorr signatures over the same curve. Key pairs determine address ownership; private keys must be kept secret, giving rise to the [[Self-Custody]] and key management discipline.
  - **[[Nakamoto Consensus]]** — the combination of proof-of-work block production and the "longest chain" fork-choice rule, in which nodes always extend the chain with the greatest cumulative work. This emergent consensus is probabilistic: transactions gain finality as subsequent blocks are added above them, with six confirmations being the traditional threshold for high-value transactions. The mechanism is sybil-resistant because adding hashrate requires real capital expenditure.
  - **[[Bitcoin Core]]** — the reference implementation, maintained by a distributed group of contributors under open-source governance. It enforces all consensus rules and is the de facto standard against which all other implementations must remain compatible. Soft-fork activations since 2012 have used a variety of signalling mechanisms; BIP-9 (version bits) and BIP-8 (timeout-and-activate) are the primary governance primitives.

- ### Mechanisms
  - **Transaction Lifecycle** — a spending wallet constructs a transaction referencing input UTXOs, signs each input with the corresponding private key, broadcasts it to the [[Peer-to-Peer Network]], and waits for miner inclusion in a block. Nodes validate script execution, signature correctness, UTXO existence, and fee adequacy. Miners select transactions from the mempool, typically by fee rate (sat/vbyte), and include them in candidate blocks.
  - **Block Propagation** — once a valid block is found, the miner broadcasts a compact block announcement; peers request missing transactions and validate the full block. Propagation speed matters for mining revenue: a block unseen by competitors is orphaned if a competing valid block at the same height is accepted first. The selfish-mining literature analyses incentives around withholding strategies.
  - **SegWit (Segregated Witness)** — activated via soft fork in 2017 (BIP-141), SegWit moves signature data outside the base transaction, resolving transaction malleability and enabling the Lightning Network. It introduces a block weight limit (replacing the block size limit) and discounted witness data pricing to incentivise UTXO consolidation.
  - **Replace-by-Fee (RBF)** — allows a sender to replace an unconfirmed transaction with a higher-fee version, improving fee-estimation flexibility and enabling payment channel constructions that require time-sensitive transaction replacement.

- ### Applications and Use Cases
  - **Store of Value and Digital Gold** — Bitcoin's fixed supply schedule and censorship-resistant settlement are the basis of the [[Store of Value]] narrative. Institutional adoption of Bitcoin ETFs (e.g., spot Bitcoin ETFs approved in the US in 2024) has expanded exposure to traditional finance portfolios without requiring direct custody.
  - **[[Self-Custody]] and Sovereign Wealth** — individuals can hold bitcoin without any custodian using hardware wallets or air-gapped signing devices, realising the cypherpunk ideal of bearer digital money. The [[Bitcoin Standard]] thesis posits Bitcoin as a macro-level monetary system for sovereign wealth preservation.
  - **[[Lightning Network]] Micropayments** — the Bitcoin Layer 2 [[Lightning Network]] enables near-instant, near-zero-fee micropayments by routing value through bi-directional payment channels that settle on-chain only on open and close. This addresses Bitcoin's constrained base-layer transaction throughput for everyday payment use cases.
  - **[[Decentralised Finance]]** — the emergence of [[Bitcoin DeFi]] through Taproot-enabled contracting, [[Bitcoin Layer 2]] platforms, and [[Bitcoin Ordinals]] inscriptions has expanded Bitcoin's expressive surface. Federated custodians such as [[Fedimint]] bring privacy-preserving community banking to bitcoin. [[Nostr]] integrates Lightning zap payments as a native value layer for social media interactions.
  - **[[Bitcoin Mining]] and Energy Markets** — Bitcoin mining serves as a flexible, location-independent load that can co-locate with stranded or renewable energy, creating demand-response relationships with power grids. This positions Bitcoin mining within the [[Blockchain Energy Consumption]] and sustainability discourse, with proponents arguing it can accelerate renewable energy development.
  - **[[Financial Inclusion]]** — Bitcoin provides access to global settlement without bank account requirements, relevant for populations in countries with limited banking access or hyperinflationary currencies. The [[Lightning Network]] reduces the cost of small-value transfers to enable practical daily commerce.
  - **Cross-Protocol Foundation** — Bitcoin's cryptographic primitives (secp256k1, SHA-256, Schnorr signatures) are foundational to adjacent protocols. [[Nostr]] uses the same key pairs for decentralised identity; [[Fedimint]] uses Bitcoin as its reserve asset; the broader [[Blockchain Technology]] ecosystem treats Bitcoin as the security-maximised base settlement layer.

- ### Relationships
  - hasPart:: [[Bitcoin Mining]]
  - hasPart:: [[Bitcoin Layer 2]]
  - hasPart:: [[Bitcoin Halving]]
  - hasPart:: [[Bitcoin Script]]
  - hasPart:: [[Bitcoin Whitepaper]]
  - hasPart:: [[Bitcoin Core]]
  - uses:: [[Proof Of Work]]
  - uses:: [[Cryptographic Hash Function]]
  - uses:: [[Merkle Tree]]
  - uses:: [[UTXO Model]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Nakamoto Consensus]]
  - uses:: [[Peer-to-Peer Network]]
  - enables:: [[Lightning Network]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Self-Custody]]
  - enables:: [[Censorship Resistance]]
  - enables:: [[Store of Value]]
  - enables:: [[Financial Inclusion]]
  - implements:: [[Blockchain]]
  - implements:: [[Distributed Ledger Technology]]
  - implements:: [[Sound Money]]
  - implements:: [[Consensus Mechanism]]
  - standardizedBy:: [[Bitcoin Improvement Proposals]]
  - standardizedBy:: [[BIP-341 Taproot]]
  - contrastsWith:: [[Ethereum Smart Contract Platform]]
  - contrastsWith:: [[Solana]]
  - contrastsWith:: [[Digital Currency]]
  - contrastsWith:: [[Monetary System]]
  - relatedTo:: [[Mining Pool]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[Blockchain Scalability]]
  - bridgesTo:: [[Nostr]]
  - bridgesTo:: [[Fedimint]]
  - bridgesTo:: [[Decentralised Identity]]

- ### Standards and Context
  - The [[Bitcoin Improvement Proposals]] (BIPs) process is the primary governance mechanism for protocol changes. BIPs are numbered documents covering standards (consensus rules, peer protocol, API), informational content, and process documentation. Major categories include BIP-32 (HD wallet derivation), BIP-39 (mnemonic seed phrases), BIP-44 (derivation path convention), BIP-141 (SegWit), BIP-340/341/342 (Schnorr/Taproot/Tapscript).
  - **[[BIP-341 Taproot]]** is the most significant upgrade since SegWit, combining Schnorr signatures, MAST (Merkelised Abstract Syntax Trees), and Tapscript into a unified output type that improves scripting privacy, reduces on-chain footprint for complex scripts, and enables key aggregation for multisig via MuSig2 (BIP-327/BIP-328).
  - **SegWit (BIP-141)** resolved transaction malleability, enabling the [[Lightning Network]] and introducing the witness discount that restructures block space economics. Block weight (max 4 million weight units) replaced the prior 1 MB block size limit.
  - **Consensus and Node Diversity** — unlike Ethereum's multi-client strategy, Bitcoin's node ecosystem is heavily weighted towards [[Bitcoin Core]], with Bitcoin Knots as the primary alternative. The community debate around client diversity, miner extractable value, and Ordinals-driven inscription activity reflects ongoing [[Bitcoin Governance]] tension between extensibility and base-layer conservatism.
  - **Regulatory Environment** — Bitcoin is classified as a commodity by the US CFTC and has received spot ETF approval from the US SEC for certain fund structures. Its regulatory status varies by jurisdiction; El Salvador adopted Bitcoin as legal tender in 2021, while multiple jurisdictions have imposed mining restrictions. The [[Blockchain Compliance]] and [[AML/KYC]] landscape for Bitcoin on-ramps is governed primarily through exchange-level regulation rather than protocol-level controls.
  - **Energy and Environmental Context** — Bitcoin's proof-of-work energy use has been characterised both as an environmental concern and as a potential mechanism for grid balancing with renewable energy. The [[Bitcoin Environmental Issues]] discourse involves metrics such as the Cambridge Bitcoin Electricity Consumption Index (CBECI) and debate over energy mix composition.

- ### Provenance
  - sources:: Nakamoto 2008 Bitcoin whitepaper; Bitcoin Core documentation (bitcoincore.org); Andreas Antonopoulos — Mastering Bitcoin (3rd ed.); BIP repository (github.com/bitcoin/bips); Cambridge Centre for Alternative Finance CBECI; Lightning Network BOLTs specification
  - updated:: 2026-06-13
