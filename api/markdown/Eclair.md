
Eclair is an open-source, production-grade implementation of the Bitcoin Lightning Network protocol, written in Scala and developed by ACINQ. It implements the full BOLT specification suite, enabling trustless off-chain payment channels, multi-hop routing, and peer-to-peer gossip between Lightning nodes. Eclair serves as the backend engine for ACINQ's Phoenix mobile wallet and is widely deployed as a routing node by businesses and individuals seeking high-throughput, low-latency Bitcoin micropayments. It is interoperable with other conformant Lightning implementations such as LND and Core Lightning through shared adherence to the BOLT standards.

- ### Overview
  - Eclair (the name is French for "lightning") emerged as one of the earliest production Lightning Network node implementations, developed by ACINQ from around 2016 onwards.
  - It targets operators running [[Bitcoin Node]] infrastructure who wish to participate in the [[Payment Channel Network]] as routing nodes, merchants, or mobile wallet backends.
  - The choice of [[Scala Programming Language]] and the [[Akka Framework]] gives Eclair strong concurrency and actor-model semantics, well-suited to managing large numbers of concurrent channel state machines.
  - Eclair's architecture separates core Lightning logic from Bitcoin blockchain interaction, communicating with a [[Bitcoin Node]] (typically [[Bitcoin Core]]) via its JSON-RPC interface to watch for on-chain events such as channel opens, closures, and [[HTLC]] timeouts.
  - As a conformant [[BOLT Specification]] implementation, Eclair nodes can establish [[Payment Channel]] connections with nodes running [[LND]], [[Core Lightning]], or any other compliant software, making the [[Lightning Network]] a multi-implementation ecosystem.

- ### Key Components
  - **Channel State Machine**
    - Manages the full lifecycle of a [[Payment Channel]]: funding, normal operation, cooperative close, and forced unilateral close.
    - Channels are backed by 2-of-2 multi-signature outputs on the [[Bitcoin]] base layer.
    - Each commitment transaction embeds [[HTLC]] outputs representing in-flight payments.
  - **Payment Router**
    - Implements [[Payment Routing]] via a shortest-path algorithm (Dijkstra-based) over the local view of the [[Lightning Network]] graph.
    - Applies fee and channel-capacity heuristics to select viable paths.
    - Produces onion-encrypted payloads using [[Onion Routing]] (Sphinx packet format) to ensure intermediate routing nodes cannot identify the origin or destination of a payment.
  - **Gossip Protocol Engine**
    - Propagates [[Channel Announcement]], [[Node Announcement]], and [[Channel Update]] messages across the network.
    - Maintains a [[Network Topology]] graph used by the payment router.
    - Rate-limits gossip to protect against spam, in accordance with [[BOLT 7]].
  - **HTLC Management**
    - Handles [[Hash Time-Locked Contract]] creation, forwarding, settlement, and failure across multi-hop routes.
    - Enforces [[Timelock]] constraints to ensure atomic payment delivery.
  - **Watcher**
    - Monitors the [[Bitcoin Blockchain]] for relevant on-chain events using the connected [[Bitcoin Node]].
    - Triggers penalty transactions ([[Justice Transaction]]) if a counterparty attempts to broadcast a revoked commitment transaction.
  - **Plugin Architecture**
    - Eclair exposes a plugin API allowing operators to extend functionality without forking the core codebase.
    - Used by ACINQ to integrate features such as [[Phoenix Wallet]] backend logic and trampoline routing.
  - **Trampoline Routing**
    - Eclair pioneered and implemented [[Trampoline Routing]], an extension allowing lightweight clients (such as [[Phoenix Wallet]]) to delegate route-finding to a capable routing node without revealing full payment paths.
    - Proposed as a [[BOLT Specification]] extension.

- ### Applications and Use Cases
  - **Phoenix Wallet Backend**
    - ACINQ runs Eclair nodes as the server-side routing infrastructure for [[Phoenix Wallet]], a non-custodial [[Lightning Network]] mobile wallet for Android and iOS.
    - Phoenix users maintain their own channels with ACINQ's Eclair nodes via trampoline routing.
  - **Merchant Payment Processing**
    - Businesses integrating [[Bitcoin]] payments via the [[Lightning Network]] can run Eclair as their routing node, accepting [[Micropayment]] settlements in milliseconds.
  - **Routing Node Operation**
    - Independent operators deploy Eclair to earn routing fees by forwarding payments between other [[Lightning Network]] participants.
    - Eclair's fee configuration and channel management tools support professional routing node operation.
  - **Developer Testing and Integration**
    - Eclair's modular architecture and comprehensive API make it a reference platform for developers building Lightning-aware applications and testing interoperability against [[LND]] and [[Core Lightning]].
  - **Research into Payment Channel Networks**
    - The open-source codebase is used by academic and industry researchers studying [[Payment Channel Network]] topology, routing efficiency, and [[Privacy]] properties.

- ### Standards and Context
  - **BOLT Specifications**
    - Eclair implements the full suite of [[BOLT Specification]] documents (Basis of Lightning Technology), maintained collaboratively by the Lightning development community.
    - Key BOLTs relevant to Eclair include [[BOLT 2]] (channel establishment and operation), [[BOLT 4]] (onion routing), [[BOLT 7]] (gossip), and [[BOLT 11]] (payment invoice format).
  - **SegWit Dependency**
    - Eclair requires [[SegWit]] (Segregated Witness) activation on the [[Bitcoin]] network, as Lightning channels use SegWit transaction formats to fix transaction malleability — a prerequisite for safe channel construction.
  - **Taproot and Future Upgrades**
    - The Lightning development community, including ACINQ, is working towards [[Taproot]]-based channel constructions (often called "Taproot Channels") that improve privacy and reduce on-chain footprint.
    - Eclair tracks these protocol evolution discussions and periodically merges new features as BOLTs are finalised.
  - **Interoperability**
    - The [[Lightning Network]] specification process ensures that [[LND]], [[Core Lightning]], and Eclair remain interoperable; joint interoperability testing ("spec testing") is a standard practice across implementations.
  - **ACINQ as Steward**
    - [[ACINQ]] is the primary commercial entity behind Eclair. The company contributes to the [[BOLT Specification]] process, maintains the open-source repository, and funds ongoing Lightning Network research and development.

- ### Provenance

