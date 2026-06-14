public:: true

# Bitcoin Core
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-core",
  "@type": "Page",
  "vc:slug": "bitcoin-core",
  "title": "Bitcoin Core",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-core",
  "@type": "Class",
  "label": "Bitcoin Core",
  "definition": "Bitcoin Core is the canonical, open-source reference implementation of the Bitcoin protocol, written primarily in C++, which full nodes run to independently validate transactions, enforce consensus rules, and maintain a complete local copy of the blockchain. Originally released by Satoshi Nakamoto in January 2009 and subsequently maintained by a global community of contributors, it establishes the authoritative behaviour of the Bitcoin network through its codebase. The software bundles a peer-to-peer networking layer, a UTXO-based scripting engine, a deterministic wallet, a mining interface, and a JSON-RPC API for integration with higher-level applications. Protocol changes are introduced exclusively via Bitcoin Improvement Proposals, requiring broad community review and backward-compatible soft-fork activation to preserve network cohesion.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:bitcoin-wallet", "label": "Bitcoin Wallet"},
      {"@id": "urn:ngm:class:bitcoin-scripting-language", "label": "Bitcoin Scripting Language"},
      {"@id": "urn:ngm:class:json-rpc-interface", "label": "JSON-RPC Interface"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:full-node", "label": "Full Node"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:digital-asset-custody", "label": "Digital Asset Custody"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network", "label": "Bitcoin Network"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals", "label": "Bitcoin Improvement Proposals"},
      {"@id": "urn:ngm:class:segregated-witness", "label": "Segregated Witness"},
      {"@id": "urn:ngm:class:taproot", "label": "Taproot"},
      {"@id": "urn:ngm:class:soft-fork", "label": "Soft Fork"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:bitcoin-reference-implementation", "label": "Bitcoin Reference Implementation"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Bitcoin Core is the canonical [[Open-Source Software]] reference implementation of the [[Bitcoin Network]] protocol, enforcing [[Nakamoto Consensus]] rules and maintaining the full [[Distributed Ledger]] on every node that runs it. It was originally authored by Satoshi Nakamoto and released in January 2009; since then a decentralised contributor community maintains the codebase on GitHub under the MIT licence. The software is the authoritative arbiter of consensus: what Bitcoin Core accepts is, by convention, what the Bitcoin protocol defines. Its architecture combines a [[Peer-to-Peer Network]] layer, a [[UTXO Model]] transaction engine, a [[Bitcoin Scripting Language]], and a deterministic [[Bitcoin Wallet]], bound together under a well-documented [[JSON-RPC Interface]].

- ### Overview
  - Bitcoin Core is the software that instantiates the Bitcoin full node. Running it means independently downloading, parsing, and verifying every block from the genesis block onward, without trusting any third party. This trustless verification model is the foundation of Bitcoin's security guarantees: no external authority can alter the supply schedule or rewrite transaction history on a node running Bitcoin Core.
  - The project ships as `bitcoind` (the daemon), `bitcoin-cli` (the command-line client), `bitcoin-qt` (the Qt GUI), and a set of test utilities. The main repository is hosted at github.com/bitcoin/bitcoin and maintained through a rigorous code-review and pull-request process.
  - Releases follow a versioning scheme with roughly six-month major release cycles. Long-term support (LTS) branches receive backported security fixes. The release process includes deterministic, Gitian-based builds so that multiple contributors can independently reproduce binary hashes.
  - Why Bitcoin Core matters: it is the only implementation that can safely define new consensus rules (via soft forks); alternative implementations must track it precisely to avoid chain splits. This gives Bitcoin Core an outsized governance role: whoever can merge code into its consensus layer effectively sets protocol policy.

- ### Key Components
  - **Peer-to-Peer Networking**
    - Implements the Bitcoin wire protocol over TCP, managing inbound and outbound connections to peers on the [[Bitcoin Network]].
    - Uses an address-relay gossip system to propagate unconfirmed transactions and new block announcements.
    - Compact block relay (BIP 152) reduces bandwidth by sending only short transaction identifiers for blocks whose transactions a peer likely already holds.
  - **Consensus Engine**
    - Enforces [[Nakamoto Consensus]]: the longest chain (highest accumulated [[Proof Of Work]]) is valid.
    - Block validation checks include the [[Cryptographic Hash Function]] (SHA-256d) proof-of-work target, transaction signature validity via [[Elliptic Curve Cryptography]] (secp256k1), and script evaluation via the [[Bitcoin Scripting Language]].
    - Blocks are organised into a [[Merkle Tree]] of transactions; the Merkle root is committed in each block header, enabling efficient transaction inclusion proofs (SPV).
  - **UTXO Set**
    - Maintains the Unspent Transaction Output set — the in-memory and on-disk database of all spendable coins — using LevelDB.
    - The [[UTXO Model]] is fundamentally different from an account-based model: each coin is a discrete output locked by a script, not a balance increment on an address.
    - As of recent versions the UTXO set contains hundreds of millions of entries; efficient caching is critical for IBD (Initial Block Download) performance.
  - **Scripting Engine**
    - Interprets Bitcoin Script, a stack-based, intentionally non-Turing-complete language, to evaluate spending conditions.
    - Supports P2PK, P2PKH, P2SH, P2WPKH, P2WSH (via [[Segregated Witness]]), and P2TR (via [[Taproot]]) output types.
    - [[Segregated Witness]] (SegWit, BIP 141) moved signature data outside the transaction ID computation, fixing transaction malleability and enabling second-layer protocols such as the [[Lightning Network]].
    - [[Taproot]] (BIP 341/342) introduced Schnorr signatures and Merklised Abstract Syntax Trees (MAST), improving privacy and efficiency for complex spending conditions.
  - **Wallet**
    - The integrated [[Bitcoin Wallet]] manages HD (hierarchical deterministic) key derivation (BIP 32/44/84/86), transaction construction, coin selection, fee estimation, and UTXO tracking.
    - Since version 23.0 the wallet has been separated into an optional component (`bitcoin-wallet` binary), decoupled from the node, reflecting an architectural push toward modularity.
    - Descriptor wallets (BIP 380) replaced the legacy wallet format, enabling precise and portable output-script descriptor expressions.
  - **JSON-RPC and REST API**
    - The [[JSON-RPC Interface]] exposes hundreds of methods covering block/transaction queries, wallet operations, mining control (`getblocktemplate`), and network diagnostics.
    - A subset of read-only calls is also available via a REST interface, useful for block explorers and analytics backends.
    - ZeroMQ notifications allow external processes to subscribe to real-time events (new blocks, new transactions).

- ### Mechanisms
  - **Initial Block Download (IBD)**
    - When a new node starts, it performs IBD, downloading and validating every block since genesis. Headers-first sync (introduced in 0.10) allows the node to fetch the full header chain before downloading block bodies, enabling parallel fetch and early orphan detection.
    - Assume-UTXO (BIP 317) allows nodes to bootstrap from a hardcoded UTXO snapshot, drastically reducing sync time whilst deferred full validation continues in the background.
  - **Soft Fork Activation**
    - Protocol upgrades are deployed as [[Soft Fork]] changes: rules are strictly tightened, making new blocks valid to old nodes. This preserves network cohesion across versions.
    - Speedy Trial (BIP 9 variant, used for Taproot) defines a signalling threshold: if 90% of blocks in a 2016-block retargeting period signal readiness, activation locks in.
    - Activation logic is codified in `src/deploymentinfo.cpp`; each deployment has a start time, timeout, and minimum activation height.
  - **Fee Estimation**
    - Bitcoin Core tracks historical confirmation times for transactions at various fee rates and uses a bucketed decay model to estimate the fee required to confirm within a target number of blocks.
    - Dynamic block-space demand makes accurate fee estimation a live research area; third-party estimators (mempool.space, etc.) often use richer mempool-depth signals.
  - **Mempool**
    - The memory pool (mempool) holds unconfirmed transactions awaiting inclusion in a block. Bitcoin Core enforces mempool policies — minimum relay fee, descendant limits, replace-by-fee (RBF, BIP 125) — which are distinct from consensus rules.
    - Package relay (in development as of 2024) will allow nodes to evaluate groups of parent-child transactions together, supporting CPFP (child-pays-for-parent) fee bumping at the network layer.

- ### Applications and Use Cases
  - **Full Node Operation**
    - Individuals and institutions run Bitcoin Core to self-validate their own transactions and holdings, eliminating reliance on third-party nodes or block explorers.
    - Sovereignty: a self-hosted node ensures the operator sees the canonical chain and is not misled by eclipse attacks or data manipulation by SPV servers.
  - **Exchange and Custodial Infrastructure**
    - Cryptocurrency exchanges use Bitcoin Core (or its [[JSON-RPC Interface]]) as the authoritative backend for deposit detection, withdrawal construction, and balance reconciliation.
    - Custodians rely on the node's deterministic block indexing (via the `-txindex` flag) to audit historical transaction paths.
  - **Lightning Network Backends**
    - [[Lightning Network]] implementations (LND, CLN, Eclair) require a trusted Bitcoin Core instance as their on-chain anchor. Bitcoin Core provides block and transaction data, UTXO proofs, and fee-rate signals to the layer-2 daemon.
  - **Research and Protocol Development**
    - Bitcoin Core's functional test framework (Python-based `test/functional/`) and `regtest` / `signet` modes provide sandboxed environments for protocol research, new BIP prototyping, and integration testing.
    - `signet` (BIP 325) is a centralised test network with deliberate block signing, enabling reproducible testing scenarios without the cost of `testnet` instability.
  - **Blockchain Analytics**
    - Analytics firms index the full Bitcoin blockchain via Bitcoin Core's block-reading interface and `-txindex` for transaction graph analysis, compliance screening (KYC/AML), and forensic tracing.
  - **Wallet Infrastructure**
    - Non-custodial wallets (hardware wallets, mobile wallets) often connect to a user's personal Bitcoin Core node via the [[JSON-RPC Interface]] or Electrum Server middleware, eliminating the need to trust a third-party server with address-level privacy data.

- ### Relationships
  - implements:: [[Nakamoto Consensus]]
  - implements:: [[Proof Of Work]]
  - implements:: [[Consensus Mechanism]]
  - implements:: [[UTXO Model]]
  - uses:: [[Cryptographic Hash Function]]
  - uses:: [[Peer-to-Peer Network]]
  - uses:: [[Digital Signature]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Merkle Tree]]
  - hasPart:: [[Bitcoin Wallet]]
  - hasPart:: [[Bitcoin Scripting Language]]
  - hasPart:: [[JSON-RPC Interface]]
  - requires:: [[Full Node]]
  - requires:: [[Distributed Ledger]]
  - enables:: [[Lightning Network]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Digital Asset Custody]]
  - dependsOn:: [[Bitcoin Network]]
  - dependsOn:: [[Open-Source Software]]
  - relatedTo:: [[Bitcoin Mining]]
  - relatedTo:: [[Bitcoin Improvement Proposals]]
  - relatedTo:: [[Segregated Witness]]
  - relatedTo:: [[Taproot]]
  - relatedTo:: [[Soft Fork]]
  - contrastsWith:: [[Ethereum]]
  - contrastsWith:: [[Proof Of Stake]]
  - bridges-to:: [[Distributed Systems]]
  - bridges-to:: [[Cryptography]]

- ### Standards and Context
  - **Bitcoin Improvement Proposals (BIPs)**
    - All consensus-critical changes to Bitcoin Core are formalised as [[Bitcoin Improvement Proposals]] before implementation. BIPs cover consensus rules, peer protocol messages, wallet formats, and application-layer standards.
    - Notable BIPs implemented in Bitcoin Core: BIP 9 (version-bits deployment), BIP 32 (HD wallets), BIP 141/143 ([[Segregated Witness]]), BIP 340-342 ([[Taproot]] / Schnorr), BIP 152 (Compact Blocks), BIP 174 (PSBT — Partially Signed Bitcoin Transactions), BIP 380 (Descriptor Wallets).
  - **Licensing and Governance**
    - Bitcoin Core is licensed under the MIT licence; contributions require code review and maintainer merge approval. There are no corporate owners; the project is maintained by volunteer and sponsored contributors.
    - Governance is informal: there is no formal voting mechanism. Rough consensus among active contributors and the broader ecosystem (miners, exchanges, users) determines whether a change is deployed.
  - **Security Practices**
    - Responsible disclosure is coordinated via `security@bitcoincore.org`. CVEs affecting consensus or denial-of-service are patched in coordinated releases across active branches.
    - The codebase undergoes continuous fuzz testing (libFuzzer), static analysis (Clang, Coverity), and extensive unit and functional test coverage enforced in CI pipelines.
  - **Relationship to the Broader Ecosystem**
    - Bitcoin Core's consensus rules are the de facto standard for the Bitcoin protocol. Alternative implementations (btcd in Go, libbitcoin in C++) must precisely replicate consensus behaviour or risk chain splits.
    - Layer-2 protocols ([[Lightning Network]], sidechains such as Liquid) anchor their security to Bitcoin Core's consensus guarantees, using Script primitives like hash-locks and timelocks.

- ### Provenance
  - sources:: Bitcoin Core GitHub repository (github.com/bitcoin/bitcoin); Bitcoin Wiki; Bitcoin Improvement Proposals repository (github.com/bitcoin/bips); Mastering Bitcoin (Antonopoulos); Bitcoin Developer Documentation (developer.bitcoin.org)
  - updated:: 2026-06-13
