public:: true

# Blockchain Transaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:878ffdd88a80fa9e38e3367b1ef01ca82b5fa7eebb7a59af75ef45cef2071e73",
  "@type": "Page",
  "vc:slug": "blockchain-transaction",
  "title": "Blockchain Transaction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "vc:label": "IEEE (Institute of Electrical and Electronics Engineers)"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Blockchain Transaction"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blockchain-transaction",
  "@type": "Class",
  "label": "Blockchain Transaction",
  "definition": "A Blockchain Transaction is an atomic, cryptographically signed instruction that encodes a state-change on a distributed ledger — such as a transfer of digital assets, invocation of a smart contract function, or mutation of on-chain data. Transactions are broadcast to a peer-to-peer network, validated against protocol rules and the active consensus mechanism, and permanently recorded in an ordered block once accepted. The transaction model differs fundamentally between UTXO-based chains (e.g. Bitcoin) and account-based chains (e.g. Ethereum), affecting parallelism, privacy, and composability.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:transaction-input",
        "label": "Transaction Input"
      },
      {
        "@id": "urn:ngm:class:transaction-output",
        "label": "Transaction Output"
      },
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Transaction Nonce"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Database Transaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:block",
        "label": "Block"
      },
      {
        "@id": "urn:ngm:class:layer-2-protocol",
        "label": "Layer-2 Protocol"
      },
      {
        "@id": "urn:ngm:class:transaction-throughput",
        "label": "Transaction Throughput"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:on-chain-transaction",
      "label": "On-Chain Transaction"
    }
  ],
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:blockchain-transaction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:878ffdd88a80fa9e38e3367b1ef01ca82b5fa7eebb7a59af75ef45cef2071e73"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE (Institute of Electrical and Electronics Engineers)]]",
      "resolved": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A Blockchain Transaction is the fundamental unit of state change in a [[Blockchain]] network — an atomic, cryptographically signed instruction broadcast to a [[Peer-to-Peer Network]] that encodes a transfer of digital assets, invocation of a [[Smart Contract]], or mutation of on-chain data. Transactions are verified by network participants using a [[Consensus Algorithm]], ordered into [[Block]]s, and made practically irreversible through the cumulative work or stake secured in the chain. The structure and semantics of transactions differ materially between [[UTXO (Unspent Transaction Output)]]-based systems (such as [[Bitcoin]]) and account-model chains (such as [[Ethereum]]), with direct consequences for privacy, parallelism, and [[Decentralised Finance]] composability.

- ### Overview
  - Blockchain Transactions serve as the indivisible record of intent in any distributed ledger protocol. Without valid, ordered transactions there is no shared state and no meaningful [[Blockchain]].
  - A transaction is initiated off-chain: a user constructs a data structure specifying source of funds, destination, amount or calldata, and pays a [[Transaction Fee]] to incentivise block producers to include the instruction. The transaction is then cryptographically signed with the user's private key (see [[Public-Key Cryptography]]) to prove authorisation.
  - Once broadcast, the transaction enters a [[Mempool]] — a node-local queue of unconfirmed operations. Miners or validators select transactions (commonly by fee-per-byte or gas price) and package them into a candidate [[Block]]. When the block is confirmed and propagated, the transaction achieves on-chain finality — the degree of which varies between probabilistic finality (proof-of-work chains) and deterministic finality (BFT-based [[Consensus Algorithm]]s).
  - Blockchain transactions differ fundamentally from [[Database Transaction]]s: they require no trusted central coordinator, are publicly auditable, and cannot be reversed by any single party.

- ### Key Components
  - #### UTXO Model (Bitcoin et al.)
    - [[UTXO (Unspent Transaction Output)]] — each transaction consumes one or more unspent outputs from prior transactions and creates new outputs, forming a directed acyclic graph of value flows.
    - [[Transaction Input]] — references a previous output (txid + output index) and supplies an unlocking script (scriptSig or witness) proving the right to spend.
    - [[Transaction Output]] — specifies amount and a locking script (scriptPubKey, e.g. P2PKH, P2SH, P2WPKH) defining conditions for future spending.
    - Enables deterministic verification and natural parallelism; state of every UTXO can be checked independently.
  - #### Account Model (Ethereum et al.)
    - Global state maps account addresses to balances and contract storage.
    - [[Transaction Nonce]] — a monotonically incrementing counter per sender preventing replay and enforcing ordering.
    - Transactions target either externally owned accounts (value transfer) or contract accounts (function invocations with calldata).
    - [[Gas]] — an internal metering unit capping computation and storage consumption; the fee = gas used × gas price.
  - #### Cryptographic Components
    - [[Digital Signature]] (ECDSA over secp256k1 in Bitcoin; ECDSA and BLS in Ethereum post-Merge) authenticates the sender and prevents tampering.
    - [[Elliptic Curve Cryptography]] underpins key generation and signature schemes.
    - [[Cryptographic Hash Function]] (SHA-256, Keccak-256) creates the txid/hash that uniquely identifies each transaction and is embedded in the block's [[Merkle Tree]].
    - [[Zero-Knowledge Proof]]s (zk-SNARKs, zk-STARKs) enable private transactions (Zcash shielded transfers, zkEVM rollup proofs).
  - #### Lifecycle Stages
    - Construction → Signing → Broadcast → [[Mempool]] queuing → Block inclusion → Confirmation accumulation → Finality.
    - Finality depth (e.g. 6 blocks on Bitcoin for high-value transfers) reflects the economic cost to reorganise the chain.

- ### Mechanisms
  - #### Fee Markets
    - Miner/validator selection is primarily fee-driven; during congestion, a fee auction emerges.
    - [[Ethereum]] EIP-1559 introduced a base fee (burned) plus optional tip (priority fee to validators), creating more predictable pricing.
    - Bitcoin's fee market is purely competitive; SegWit introduced the concept of virtual bytes to normalise witness data discount.
  - #### Transaction Types
    - **Standard value transfer** — move native currency between accounts.
    - **Smart contract deployment** — includes bytecode payload; creates a new contract account.
    - **Smart contract call** — calldata encodes function selector and ABI-encoded arguments for [[Smart Contract]] execution.
    - **Multi-signature transactions** — require m-of-n cryptographic authorisations (P2MS, Schnorr MuSig) for enhanced security.
    - **Confidential transactions** — use [[Zero-Knowledge Proof]]s or Pedersen commitments to hide amounts while proving solvency.
    - **Atomic swaps** — [[Atomic Swap]] via hash-time-locked contracts (HTLCs) enables trustless cross-chain exchanges without an intermediary.
  - #### Batching and Compression
    - [[Layer-2 Protocol]]s (Optimistic Rollups, ZK-Rollups) batch hundreds or thousands of transactions into a single on-chain proof, dramatically increasing [[Transaction Throughput]] while inheriting base-layer security.
    - Signature aggregation (BLS, Schnorr) reduces on-chain footprint for multi-input or multi-participant transactions.
    - Payment channels (Lightning Network) allow off-chain bilateral transaction streams, settling the net result on-chain.

- ### Applications / Use Cases
  - **Cryptocurrency payments** — peer-to-peer transfer of [[Bitcoin]], ETH, stablecoins, or other tokens without banks or clearinghouses.
  - **[[Decentralised Finance]]** — lending, borrowing, decentralised exchange (DEX swaps), yield farming, and derivatives, all encoded as sequences of [[Smart Contract]] calls.
  - **[[Tokenisation]]** — issuance and transfer of NFTs, security tokens, and real-world asset representations; each transfer is a transaction modifying token ownership state.
  - **[[Supply Chain Traceability]]** — recording provenance events (manufacture, shipment, customs clearance) as immutable transactions on a permissioned or public ledger.
  - **[[Digital Identity]]** — credential issuance and revocation anchored as transactions on-chain (DID documents, verifiable credential registries).
  - **Cross-border remittance** — low-cost, near-instant settlement reducing correspondent banking friction, especially for corridors lacking domestic clearing infrastructure.
  - **Governance voting** — on-chain DAO proposals, weighted votes, and fund disbursements encoded as transactions on a [[Distributed Ledger]].
  - **Gaming and virtual economies** — in-game asset trades, marketplace settlements, and reward distributions in blockchain-native games and metaverse platforms.

- ### Relationships
  - partOf:: [[Blockchain]]
  - partOf:: [[Distributed Ledger]]
  - hasPart:: [[UTXO (Unspent Transaction Output)]]
  - hasPart:: [[Transaction Input]]
  - hasPart:: [[Transaction Output]]
  - hasPart:: [[Transaction Nonce]]
  - hasPart:: [[Merkle Tree]]
  - requires:: [[Digital Signature]]
  - requires:: [[Public-Key Cryptography]]
  - requires:: [[Consensus Algorithm]]
  - requires:: [[Cryptographic Hash Function]]
  - requires:: [[Transaction Fee]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Mempool]]
  - enables:: [[Smart Contract]]
  - enables:: [[Payment System]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Tokenisation]]
  - enables:: [[Atomic Swap]]
  - contrastsWith:: [[Database Transaction]]
  - contrastsWith:: [[Traditional Payment]]
  - relatedTo:: [[Block]]
  - relatedTo:: [[Layer-2 Protocol]]
  - relatedTo:: [[Transaction Throughput]]
  - bridges-to:: [[Supply Chain Traceability]]
  - bridges-to:: [[Digital Identity]]

- ### Standards & Context
  - [[Bitcoin]] transactions follow the original Nakamoto specification (Bitcoin Core BIPs: BIP-141 SegWit, BIP-340 Schnorr, BIP-341 Taproot).
  - [[Ethereum]] transaction encoding is defined in the Yellow Paper (RLP serialisation) and updated via EIPs (EIP-2930 access lists, EIP-1559 fee market, EIP-4844 blob-carrying transactions for rollup data).
  - [[IEEE (Institute of Electrical and Electronics Engineers)]] and ISO/TC 307 (Blockchain and DLT) publish standards relevant to transaction security and interoperability.
  - FATF (Financial Action Task Force) Recommendation 16 (Travel Rule) governs information accompanying virtual asset transfers, influencing how transaction metadata is structured for regulatory compliance.
  - W3C Decentralised Identifiers (DIDs) and Verifiable Credentials specifications intersect with [[Digital Identity]] anchoring via blockchain transactions.

- ### Provenance
  - sources:: [[IEEE (Institute of Electrical and Electronics Engineers)]]
  - updated:: 2026-06-13
