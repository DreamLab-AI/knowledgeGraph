public:: true

# LND
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a2541c7a3b2b0b1083fcd53965ce0c022500f561ae182347c231398072c7be7",
  "@type": "Page",
  "vc:slug": "lnd",
  "title": "LND",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "LND"
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
  "@id": "urn:ngm:class:lnd",
  "@type": "Class",
  "label": "LND",
  "definition": "LND (Lightning Network Daemon) is a production-grade, open-source implementation of a Bitcoin Lightning Network node developed by Lightning Labs. It manages the full lifecycle of payment channels — from on-chain funding and cooperative or force-close settlement to off-chain routing of multi-hop payments — exposing a gRPC and REST API that downstream wallets, exchanges, and applications consume. LND implements the BOLT (Basis of Lightning Technology) protocol specifications and employs Hash Time-Locked Contracts (HTLCs) to ensure atomic, trust-minimised payment routing across a peer-to-peer mesh of channels anchored to the Bitcoin base layer.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:bolt-specifications",
        "label": "BOLT Protocol"
      },
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:g-rpc",
        "label": "gRPC"
      },
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:streaming-payments",
        "label": "Streaming Payments"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:watchtower",
        "label": "Watchtower"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:core-lightning",
        "label": "Core Lightning"
      },
      {
        "@id": "urn:ngm:class:eclair",
        "label": "Eclair"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:taproot-assets",
        "label": "Taproot Assets"
      },
      {
        "@id": "urn:ngm:class:loop",
        "label": "Lightning Loop"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:layer-2-protocol",
        "label": "Layer 2 Protocol"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lightning-network-daemon",
      "label": "Lightning Network Daemon"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lnd:f9b46588efba",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a2541c7a3b2b0b1083fcd53965ce0c022500f561ae182347c231398072c7be7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - LND (Lightning Network Daemon) is a full-featured, open-source implementation of a [[Lightning Network]] node developed and maintained by Lightning Labs, written primarily in Go. It manages the complete lifecycle of [[Payment Channel]]s anchored to the [[Bitcoin]] base layer — from on-chain channel funding through cooperative or unilateral force-close — and routes off-chain payments across a peer-to-peer mesh using [[Hash Time-Locked Contract]]s. LND exposes a [[gRPC]] and REST API consumed by downstream wallets, payment processors, and decentralised applications, making it the most widely deployed [[Lightning Network]] implementation in production infrastructure.

- ### Overview
  - LND sits at the intersection of [[Bitcoin]] Layer 1 security and [[Layer 2 Protocol]] scalability. Rather than settling every payment on-chain, LND allows two parties to open a shared [[Payment Channel]] by committing funds in a 2-of-2 multisignature on-chain transaction, then route arbitrarily many payments off-chain at near-zero cost and sub-second latency.
  - Payments traverse multi-hop paths through the channel network, with each intermediate hop's forwarding incentivised by a small routing fee. The underlying [[BOLT Protocol]] (Basis of Lightning Technology) specifications ensure interoperability across all compliant implementations including [[Core Lightning]] and [[Eclair]].
  - Lightning Labs first released LND in alpha in 2017 and has since shipped multiple major versions covering anchor outputs, [[Taproot]] channel types, [[Multi-Path Payment]]s, and the [[Taproot Assets]] protocol layer.
  - LND's Go implementation benefits from the language's concurrency model (goroutines) to handle thousands of concurrent channels and routing decisions without blocking.

- ### Key Components
  - **Channel Manager** — opens, closes, and monitors the on-chain state of [[Payment Channel]]s, managing commitment transactions and revocation secrets to prevent fraud.
  - **Router** — implements pathfinding algorithms (modified Dijkstra with probabilistic success estimation) over the [[Channel Graph]] to find optimal multi-hop routes through the network.
  - **[[Channel Graph]]** — an in-memory and on-disk graph of the gossip-announced network topology, continuously updated via the [[Gossip Protocol]] from connected peers.
  - **[[HTLC]] Engine** — enforces [[Hash Time-Locked Contract]]s at each hop, ensuring atomicity: a payment either succeeds end-to-end or fully reverts, removing counterparty trust requirements.
  - **[[Watchtower]] Client** — delegates responsibility for monitoring on-chain breach attempts to a remote [[Watchtower]] node, enabling LND to operate safely without continuous uptime.
  - **[[Macaroon Authentication]]** — uses layered, delegatable capability tokens (macaroons) for API authorisation, allowing fine-grained permission scopes without exposing raw credentials.
  - **[[lncli]]** — the command-line interface for interacting with a running LND instance, covering all operational tasks from peer management to invoice creation.
  - **[[Autopilot]]** — an optional module that suggests or automatically opens new channels to well-connected peers based on configurable heuristics, improving routing capacity.
  - **[[Loop]] Integration** — Lightning Loop (a separate Lightning Labs service) uses LND's API to perform submarine swaps between on-chain and off-chain funds, managing liquidity.

- ### Mechanisms
  - **Channel Funding** — both parties exchange public keys; LND constructs and broadcasts a funding transaction to Bitcoin, locking liquidity into a 2-of-2 multisig output.
  - **Commitment Transactions** — each state update replaces the prior commitment with a new asymmetric transaction signed by both parties; the revocation secret from old states prevents cheating.
  - **[[Onion Routing]]** — LND wraps payment payloads in nested encryption layers (Sphinx packet format) so each intermediate node learns only its predecessor and successor, preserving payment privacy.
  - **[[Multi-Path Payment]] (MPP)** — large payments can be split across multiple independent routes and reassembled at the destination, improving success rates for high-value transfers.
  - **Anchor Outputs** — a channel format that introduces a small on-chain anchor allowing either party to fee-bump their commitment transaction via [[Child-Pays-For-Parent]] (CPFP), increasing resilience to fee spikes.
  - **[[Taproot]] Channels** — newer channel format using [[Schnorr Signature]]s and [[Tapscript]], reducing on-chain footprint and improving privacy by making cooperative closes indistinguishable from ordinary transactions.
  - **[[Keysend]]** — a push-payment extension allowing a sender to push value directly to a node's public key without a pre-issued invoice, enabling spontaneous payments.

- ### Applications and Use Cases
  - **Retail and point-of-sale payments** — merchants integrate LND-backed wallets (e.g. BTCPay Server) to accept [[Bitcoin]] payments with instant finality and negligible fees.
  - **[[Micropayment]] streaming** — content platforms and APIs gate access by the millisecond or per-request, streaming satoshis continuously via the LND API.
  - **Machine-to-machine payments** — autonomous agents and IoT devices route payments over LND for pay-per-use services without requiring trusted accounts.
  - **Exchange and custodial services** — large exchanges use LND to provide Lightning withdrawal and deposit corridors, offloading settlement volume from the [[Bitcoin]] base chain.
  - **[[Atomic Swap]]s** — LND facilitates cross-chain atomic swaps using shared HTLC timelock logic, enabling trustless exchange between [[Bitcoin]] and compatible assets.
  - **[[Taproot Assets]] issuance** — Lightning Labs' Taproot Assets protocol is built on LND, enabling stablecoins and other assets to be issued and transferred over the Lightning network.
  - **VPN and bandwidth markets** — services such as [[Lightning Pool]] allow node operators to monetise inbound liquidity, creating a marketplace for routing capacity.
  - **[[Streaming Payments]] for podcasting** — the Podcasting 2.0 ecosystem uses LND-compatible nodes to stream micropayments per-minute to content creators via [[Value4Value]] apps.

- ### Relationships
  - implements:: [[BOLT Protocol]], [[Hash Time-Locked Contract]]
  - requires:: [[Lightning Network]], [[Payment Channel]], [[Bitcoin]], [[Bitcoin Core]]
  - uses:: [[gRPC]], [[Macaroon Authentication]], [[Onion Routing]], [[Gossip Protocol]]
  - enables:: [[Micropayment]], [[Atomic Swap]], [[Streaming Payments]], [[Keysend]]
  - hasPart:: [[Watchtower]], [[Channel Graph]], [[lncli]]
  - contrastsWith:: [[Core Lightning]], [[Eclair]]
  - relatedTo:: [[Taproot Assets]], [[Lightning Loop]], [[Lightning Pool]], [[Multi-Path Payment]], [[Autopilot]]
  - bridges-to:: [[Layer 2 Protocol]], [[Decentralised Finance]]

- ### Standards and Context
  - LND implements the **BOLT (Basis of Lightning Technology)** specifications maintained collectively by [[Core Lightning]], [[Eclair]], and [[LND]] developers via the [[Lightning Network]] specification repository.
  - Key BOLTs relevant to LND include: BOLT-01 (base protocol), BOLT-02 (channel establishment), BOLT-03 (bitcoin transaction and script formats), BOLT-04 (onion routing), BOLT-05 (recommendations for on-chain transaction handling), BOLT-07 (P2P node and channel discovery), BOLT-08 (cryptographic messaging transport), BOLT-09 (assigned feature flags), BOLT-11 (payment protocol / invoice format).
  - The [[gRPC]] API surface is versioned; downstream developers consume `lnrpc`, `routerrpc`, `chainrpc`, `walletrpc`, and other sub-packages, with protobuf definitions published in the `lnrpc` directory.
  - [[Macaroon Authentication]] follows the cryptographic macaroon paper by Google, adapted for Lightning API delegation.
  - The Lightning Network and LND interact with the [[Bitcoin]] blockchain through either [[Bitcoin Core]] (`bitcoind`) directly or via the [[Neutrino]] lightweight client protocol, enabling resource-constrained deployments.
  - LND is licensed under the MIT licence and hosted at github.com/lightningnetwork/lnd.

- ### Provenance
  - sources:: Lightning Labs documentation, BOLT specification repository (github.com/lightning/bolts), LND GitHub repository
  - updated:: 2026-06-13
