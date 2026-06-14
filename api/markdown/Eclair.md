public:: true

# Eclair
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:719a22c3492274348ba33849e02de4cdc8fefc0b3e8383560a3df6babcc2601f",
  "@type": "Page",
  "vc:slug": "eclair",
  "title": "Eclair",
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
      "vc:value": "Eclair"
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
  "@id": "urn:ngm:class:eclair",
  "@type": "Class",
  "label": "Eclair",
  "definition": "Eclair is an open-source, production-grade implementation of the Bitcoin Lightning Network protocol, written in Scala and developed by ACINQ. It implements the full BOLT specification suite, enabling trustless off-chain payment channels, multi-hop routing, and peer-to-peer gossip between Lightning nodes. Eclair serves as the backend engine for ACINQ's Phoenix mobile wallet and is widely deployed as a routing node by businesses and individuals seeking high-throughput, low-latency Bitcoin micropayments. It is interoperable with other conformant Lightning implementations such as LND and Core Lightning through shared adherence to the BOLT standards.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:bolt-specification",
        "label": "BOLT Specification"
      },
      {
        "@id": "urn:ngm:class:lightning-network-protocol",
        "label": "Lightning Network Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:bitcoin-node",
        "label": "Bitcoin Node"
      },
      {
        "@id": "urn:ngm:class:htlc",
        "label": "HTLC"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      },
      {
        "@id": "urn:ngm:class:scala-programming-language",
        "label": "Scala Programming Language"
      },
      {
        "@id": "urn:ngm:class:akka-framework",
        "label": "Akka Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      },
      {
        "@id": "urn:ngm:class:instant-bitcoin-payment",
        "label": "Instant Bitcoin Payment"
      },
      {
        "@id": "urn:ngm:class:payment-routing",
        "label": "Payment Routing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lnd",
        "label": "LND"
      },
      {
        "@id": "urn:ngm:class:core-lightning",
        "label": "Core Lightning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:phoenix-wallet",
        "label": "Phoenix Wallet"
      },
      {
        "@id": "urn:ngm:class:bitcoin-payment-network",
        "label": "Bitcoin Payment Network"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:segwit",
        "label": "SegWit"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:acinq",
        "label": "ACINQ"
      },
      {
        "@id": "urn:ngm:class:payment-channel-network",
        "label": "Payment Channel Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:eclair-lightning-node",
      "label": "Eclair Lightning Node"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:eclair:0556a43b215a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:719a22c3492274348ba33849e02de4cdc8fefc0b3e8383560a3df6babcc2601f"
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
  - Eclair is a production-ready, open-source implementation of the [[Lightning Network]] protocol, developed in [[Scala Programming Language]] by the French company [[ACINQ]]. It conforms to the full [[BOLT Specification]] suite — the set of interoperability standards that govern channel lifecycle, [[Payment Routing]], [[HTLC]] settlement, and peer-to-peer [[Gossip Protocol]] across heterogeneous Lightning implementations. Eclair is the engine behind ACINQ's [[Phoenix Wallet]] and is one of the three dominant Lightning node implementations alongside [[LND]] and [[Core Lightning]].

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

- ### Relationships
  - implements:: [[BOLT Specification]], [[Lightning Network Protocol]]
  - requires:: [[Payment Channel]], [[Bitcoin Node]], [[HTLC]]
  - uses:: [[Onion Routing]], [[Gossip Protocol]], [[Scala Programming Language]], [[Akka Framework]]
  - enables:: [[Micropayment]], [[Instant Bitcoin Payment]], [[Payment Routing]]
  - supports:: [[Phoenix Wallet]], [[Bitcoin Payment Network]]
  - contrastsWith:: [[LND]], [[Core Lightning]]
  - partOf:: [[Lightning Network]]
  - dependsOn:: [[Bitcoin]], [[SegWit]]
  - relatedTo:: [[ACINQ]], [[Payment Channel Network]]
  - bridges-to:: [[Decentralised Finance]]

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
  - sources:: ACINQ official documentation; Lightning Network BOLT specifications (github.com/lightning/bolts); Eclair GitHub repository (github.com/ACINQ/eclair); Phoenix Wallet documentation.
  - updated:: 2026-06-13
