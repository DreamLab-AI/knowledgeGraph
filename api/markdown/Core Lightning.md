Core Lightning (formerly c-lightning) is a specification-compliant, production-grade implementation of the Bitcoin Lightning Network protocol written in C and maintained by Blockstream. It provides a lightweight, modular node daemon that enables off-chain Bitcoin micropayments through bidirectional payment channels anchored on the Bitcoin blockchain. The implementation adheres to the BOLT (Basis of Lightning Technology) specification suite, ensuring interoperability with other Lightning implementations such as LND and Eclair. A distinguishing feature is its plugin architecture, which allows operators to extend node behaviour in arbitrary programming languages via a JSON-RPC interface.

### Overview

- Core Lightning is one of several production-grade implementations of the [[Lightning Network Protocol]] that compete on the same open specification, the [[BOLT Specification]] (Basis of Lightning Technology). Originally released as **c-lightning** by [[Blockstream]] in 2018, it was renamed to Core Lightning (CLN) in 2022 to reflect its maturity and broader community governance.
- The implementation targets **resource efficiency** — the C codebase keeps memory and CPU footprint minimal, making it suitable for low-power hardware such as Raspberry Pi nodes and embedded systems. Its modular design separates protocol state-machine logic from higher-level wallet and routing features, which can be provided by plugins.
- Core Lightning participates in the same [[Peer-to-Peer Network]] of Lightning nodes as [[LND]] (Lightning Network Daemon by Lightning Labs) and [[Eclair]] (by ACINQ). All compliant implementations interoperate because they adhere to the same BOLT documents (BOLT 1 through BOLT 12).
- As of mid-2024 the Core Lightning project is hosted at `github.com/ElementsProject/lightning` under an Apache 2.0 / MIT dual licence. Releases are community-driven with Blockstream engineers as primary maintainers.

### Key Components

- **lightningd daemon** — the main process managing channel state, routing, and the Bitcoin RPC connection. It interfaces with a local [[Bitcoin]] node (bitcoind) via the JSON-RPC API.
- **hsmd (hardware signing module)** — isolated sub-daemon holding private key material, supporting hardware security modules for production deployments.
- **Plugin system** — a first-class IPC mechanism allowing external processes (written in Python, Rust, Go, etc.) to hook into node lifecycle events, add RPC commands, and intercept payment flows. The `pyln-client` Python library simplifies plugin authoring.
- **`lightning-cli`** — command-line interface for operator interaction with the running daemon.
- **Channel management** — implements [[BOLT Specification]] BOLT-2 for channel establishment, updates, and cooperative or forced closure, including anchor outputs and zero-reserve channels.
- **[[Onion Routing]]** — payment packets are source-routed using a Sphinx-based onion-encryption scheme (BOLT-4) that hides sender/receiver identity from intermediate routing nodes.
- **[[Gossip Protocol]]** — BOLT-7 defines the peer gossip mechanism Core Lightning uses to disseminate channel announcements and routing policies across the network.
- **BOLT-12 Offers** — Core Lightning was the first major implementation to support BOLT-12 Offers, a reusable, static payment request format that supersedes invoices for many use cases.
- **[[Splicing]]** — allows in-place resizing of channel capacity without closing and reopening channels, reducing on-chain footprint.
- **[[Taproot]] / [[Schnorr Signature]]** — CLN supports MuSig2-based Taproot channel types introduced with the P2TR output format, improving privacy and fee efficiency.

### Mechanisms

- **Channel lifecycle** — a channel is opened by publishing a 2-of-2 multisig funding transaction to the [[Bitcoin]] blockchain. Subsequent off-chain updates are signed state-machine transitions. Closure can be cooperative (single on-chain tx) or unilateral (time-locked outputs via CSV).
- **[[Hashed Timelock Contract]]** — HTLCs are the atomic unit of in-flight payments. A sender locks funds conditional on a pre-image reveal and a timelock, enabling trustless multi-hop routing.
- **Pathfinding** — Core Lightning uses a modified Dijkstra algorithm over the gossip-derived channel graph, with probabilistic success scoring based on observed payment failures (Pickhardt-Richter payment optimisation can be enabled via a plugin).
- **Invoice flow** — payees generate BOLT-11 invoices (or BOLT-12 Offer invoices) encoding amount, description, and payment hash. Payers route an HTLC along a path to the payee who reveals the pre-image to claim funds.
- **Watchtower support** — external plugins (e.g. `rust-teos`) can act as breach-remedy watchtowers, monitoring the chain for revoked state publications.

### Applications / Use Cases

- **Retail and e-commerce micropayments** — merchants integrate Core Lightning via the REST/JSON-RPC API (or BTCPay Server which supports CLN as a backend) to accept sub-cent Bitcoin payments instantly.
- **[[Streaming Payments]]** — time-value streaming (pay-per-second APIs, podcast monetisation via Podcasting 2.0 / Value4Value) is straightforward with Core Lightning's keysend and BOLT-12 support.
- **[[Machine Payments]]** — IoT and autonomous agent scenarios where devices settle micro-transactions without human intermediation. Core Lightning's small footprint is advantageous here, bridging to the concept of [[Decentralised Finance]] infrastructure for machines.
- **Exchange and custodial liquidity** — LSPs (Lightning Service Providers) use Core Lightning to manage large routing node infrastructure, using its plugin system for custom liquidity management policies.
- **Research and protocol development** — the clean separation of concerns in CLN's architecture makes it the preferred implementation for Lightning protocol researchers experimenting with new channel types and payment schemes.
- **Self-hosted nodes** — privacy-conscious users run CLN on personal hardware (RaspiBlitz, Umbrel, Start9 Embassy) as part of sovereign Bitcoin infrastructure stacks.

### Standards & Context

- **BOLT Specifications** — the Basis of Lightning Technology documents (BOLT-1 through BOLT-12) are the authoritative protocol standard for Lightning Network implementations. Core Lightning's conformance is tested via the `lnprototest` test suite.
- **BOLT-12 Offers** — a stateless, reusable payment-request protocol that Core Lightning pioneered; other implementations (LND, Eclair) have progressively adopted it.
- **Interoperability testing** — cross-implementation compatibility is continuously verified by the community through the `lnprototest` and `lnregtest` frameworks, ensuring CLN channels can be opened with and payments routed through LND and Eclair nodes.
- **Regulatory context** — Lightning Network transactions are off-chain and thus not individually broadcast to the Bitcoin blockchain. Regulatory treatment varies by jurisdiction; the self-custodial nature of Core Lightning nodes (users control their own private keys) contrasts with custodial exchange-based Lightning wallets.
- **Open-source governance** — Core Lightning is dual-licensed (Apache 2.0 / MIT) and governed via GitHub pull requests; Blockstream engineers act as maintainers but external contributions are significant.

### Provenance

