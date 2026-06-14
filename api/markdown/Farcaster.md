public:: true

# Farcaster
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7da6a1e81fe5ea8f94127b0368b538abde5b7657c115b3cf00073c67f1853acc",
  "@type": "Page",
  "vc:slug": "farcaster",
  "title": "Farcaster",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Farcaster"
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
  "@id": "urn:ngm:class:farcaster",
  "@type": "Class",
  "label": "Farcaster",
  "definition": "Farcaster is a sufficiently decentralised social networking protocol built on Ethereum and Optimism that anchors user identity and account data on-chain while storing social graph content and messages off-chain across a peer-to-peer network of Hubs. It separates identity (Farcaster ID, FID) from the client application layer, enabling permissionless third-party clients such as Warpcast to build on shared social data without platform lock-in. The protocol specifies message encoding via a data availability layer called Hubs and enforces message ordering through a CRDT-based conflict resolution mechanism, making it a credibly neutral substrate for decentralised social applications.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Bc Network Component"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:farcaster-protocol",
      "label": "Farcaster Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:farcaster-hub",
        "label": "Farcaster Hub"
      },
      {
        "@id": "urn:ngm:class:farcaster-id",
        "label": "Farcaster ID"
      },
      {
        "@id": "urn:ngm:class:warpcast",
        "label": "Warpcast"
      },
      {
        "@id": "urn:ngm:class:farcaster-frames",
        "label": "Farcaster Frames"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:open-social-graph",
        "label": "Open Social Graph"
      },
      {
        "@id": "urn:ngm:class:portable-identity",
        "label": "Portable Identity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:crdt",
        "label": "CRDT"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralised-social-protocol",
        "label": "Decentralised Social Protocol"
      },
      {
        "@id": "urn:ngm:class:open-protocol",
        "label": "Open Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum-name-service",
        "label": "Ethereum Name Service"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:activitypub",
        "label": "ActivityPub"
      },
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      },
      {
        "@id": "urn:ngm:class:bluesky-at-protocol",
        "label": "Bluesky AT Protocol"
      },
      {
        "@id": "urn:ngm:class:centralised-social-media",
        "label": "Centralised Social Media"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lens-protocol",
        "label": "Lens Protocol"
      },
      {
        "@id": "urn:ngm:class:did-decentralised-identifier",
        "label": "DID Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:farcaster:2ca68b4eceeb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7da6a1e81fe5ea8f94127b0368b538abde5b7657c115b3cf00073c67f1853acc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - Farcaster is a sufficiently decentralised [[Decentralised Social Protocol]] built on [[Ethereum]] and [[Optimism]] that anchors user identity on-chain while propagating social content off-chain across a peer-to-peer network of Hubs. It provides users with [[Portable Identity]] and [[Open Social Graph]] access, allowing them to move freely between client applications without losing followers or history. The protocol is distinguished by its hybrid on-chain/off-chain architecture, message-level [[CRDT]] conflict resolution, and a composable extension mechanism called [[Farcaster Frames]] that embeds interactive mini-applications directly within social posts.

- ### Overview
  - Farcaster was conceived by Dan Romero and Varun Srinivasan (formerly of Coinbase) and launched its mainnet protocol in 2023, reaching an established maturity level as an alternative to centralised social media platforms.
  - The core insight is "sufficient decentralisation": identity must be decentralised (no single party can remove a user's account), but message propagation can tolerate semi-trusted infrastructure for performance reasons.
  - Users register a **Farcaster ID (FID)** — a numeric identifier — via a smart contract called the ID Registry deployed on [[Optimism]], an [[Ethereum]] Layer 2 network.
  - A separate **Key Registry** contract associates signing keys (Ed25519 key pairs) with each FID, enabling users to authorise client applications without giving them custody of the account.
  - Social content (casts, reactions, links, profile data) is stored as signed [[Protocol Buffer]] messages in a [[Peer-to-Peer Network]] of **Hubs** — nodes that replicate data and enforce the protocol rules.
  - The separation of identity (on-chain) from content (off-chain Hubs) makes Farcaster more scalable than fully on-chain approaches while remaining censorship-resistant at the account layer.
  - [[Warpcast]] is the primary client application built by the Farcaster team, but the open protocol enables any developer to build alternative clients reading from the same Hub network.

- ### Key Components
  - **Farcaster ID (FID)**
    - A unique numeric identifier anchored to the ID Registry [[Smart Contract]] on [[Optimism]].
    - Ownership is controlled by an Ethereum address; custody can be transferred without losing the social graph.
  - **Key Registry**
    - An on-chain registry that maps FIDs to authorised Ed25519 signing keys.
    - Clients request key authorisation rather than receiving the user's primary custody key, enabling fine-grained revocation.
  - **Hubs**
    - Peer-to-peer nodes that store, validate, and replicate signed social messages.
    - Any party can operate a Hub; Hubs synchronise via a gossip protocol and replicate the full message set.
    - Hub operators enforce the [[CRDT]] rules that resolve conflicts (e.g. duplicate reactions, message ordering).
  - **Casts**
    - The primary message type — analogous to posts or tweets.
    - Casts may reference other casts (replies), embed URLs, or link to on-chain assets.
  - **Farcaster Frames**
    - An extension of the [[Open Graph Protocol]] standard that turns any cast URL into an interactive mini-application.
    - Frames enable voting, minting [[NFT]]s, purchasing tokens, and running arbitrary web interactions inline within social clients.
    - Frames communicate via signed payloads, making them composable with [[Smart Contract]] transactions.
  - **Channels**
    - Topic-specific sub-feeds (similar to subreddits) that aggregate casts by subject using a shared parent-cast convention.
    - Warpcast hosts channel directories, though channels are protocol-level constructs.
  - **FName (Farcaster Name)**
    - A human-readable username anchored via the FName Registry, governed off-chain but linked to an FID.
    - Optionally resolved via [[Ethereum Name Service]] (ENS) for cross-ecosystem interoperability.

- ### Mechanisms
  - **Hybrid On-Chain/Off-Chain Architecture**
    - Identity and key management live on [[Optimism]] (Layer 2 [[Ethereum]]) for security and permanence.
    - Message content lives off-chain on Hubs, enabling high throughput without expensive gas costs per post.
  - **CRDT-Based Conflict Resolution**
    - Each Hub independently applies [[CRDT]] rules to arrive at the same canonical state without coordination.
    - Message ordering uses a combination of timestamp and hash to break ties deterministically.
  - **Ed25519 Signatures**
    - All social messages are signed with Ed25519 keys registered in the Key Registry.
    - Hubs reject messages with invalid or unregistered signatures, maintaining integrity without a central arbiter.
  - **Storage Units**
    - Users purchase on-chain "storage units" that entitle them to store a fixed number of messages on Hubs.
    - Storage limits bound Hub resource requirements and create a sustainable economic model for operators.
  - **Frame Signature Packets**
    - When a user interacts with a [[Farcaster Frames]] frame, Warpcast (or another client) constructs a signed payload (trustedData and untrustedData) sent to the frame server, enabling verified user interactions with external services.

- ### Applications and Use Cases
  - **Decentralised Twitter Alternative**
    - Social microblogging with portable accounts, enabling users to switch clients (Warpcast, Supercast, Neynar clients) without losing their social graph.
  - **On-Chain Social Commerce**
    - [[Farcaster Frames]] enable direct [[NFT]] minting, token swaps, and DeFi interactions embedded in posts, bridging social media and [[Decentralised Finance]].
  - **AI Agent Social Presence**
    - [[AI Agent]]s can register FIDs and post autonomously, as seen in agent-centric channels where bots interact with human users under the same protocol rules.
  - **DAO Coordination**
    - [[Decentralised Autonomous Organisation]]s use Farcaster channels for governance discussion and proposal sharing, linking social discourse to on-chain voting systems.
  - **Developer Ecosystem and Mini-Apps**
    - Frame-compatible mini-applications (polls, games, minting UIs) proliferate across the network, making Farcaster a platform for lightweight [[Web3]] app distribution.
  - **Content Discovery and Curation**
    - Open Hub access means third parties can build recommendation algorithms, archival tools, and analytics dashboards on top of the public social graph without API gatekeeping.
  - **Identity Bridging**
    - FIDs link to ENS names and verified Ethereum addresses, enabling cross-ecosystem identity claims and reputation portability between Web3 applications.

- ### Relationships
  - hasPart:: [[Farcaster Hub]]
  - hasPart:: [[Farcaster ID]]
  - hasPart:: [[Warpcast]]
  - hasPart:: [[Farcaster Frames]]
  - requires:: [[Decentralised Identity]]
  - requires:: [[Ethereum]]
  - requires:: [[Optimism]]
  - enables:: [[Web3]]
  - enables:: [[Open Social Graph]]
  - enables:: [[Portable Identity]]
  - dependsOn:: [[Smart Contract]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - dependsOn:: [[CRDT]]
  - implements:: [[Decentralised Social Protocol]]
  - implements:: [[Open Protocol]]
  - uses:: [[Ethereum Name Service]]
  - uses:: [[Content Addressing]]
  - contrastsWith:: [[ActivityPub]]
  - contrastsWith:: [[Nostr]]
  - contrastsWith:: [[Bluesky AT Protocol]]
  - contrastsWith:: [[Centralised Social Media]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[AI Agent]]
  - relatedTo:: [[Lens Protocol]]
  - relatedTo:: [[DID Decentralised Identifier]]
  - relatedTo:: [[Data Availability]]

- ### Comparison with Peer Protocols
  - **vs [[ActivityPub]] (Mastodon, Threads)**
    - ActivityPub is server-federated without a blockchain; identity is tied to the server domain.
    - Farcaster stores identity on-chain, enabling true portability independent of any server operator.
  - **vs [[Nostr]]**
    - Nostr relies on cryptographic key pairs without on-chain identity anchoring; keys are identity.
    - Farcaster adds on-chain key rotation and account recovery, reducing the catastrophic-loss problem of key exposure.
    - Nostr has no built-in storage economy; Farcaster's storage units create sustainable Hub incentives.
  - **vs [[Bluesky AT Protocol]]**
    - AT Protocol uses a DNS-based Decentralised Identifier (DID:PLC) rather than a blockchain registry.
    - Both share the goal of portable identity and open social graphs, but take different trust-architecture approaches.
  - **vs [[Lens Protocol]]**
    - Lens stores social graph data (follows, posts) on-chain via [[NFT]]s on [[Polygon]], making it fully on-chain.
    - Farcaster's hybrid model trades on-chain completeness for lower gas costs and higher message throughput.

- ### Standards and Context
  - The Farcaster protocol specification is maintained as an open-source repository and versioned via Farcaster Improvement Proposals (FIPs).
  - The ID Registry and Key Registry smart contracts are deployed on [[Optimism]] (OP Mainnet), an [[EVM]]-compatible Layer 2 scaling solution.
  - [[Farcaster Frames]] extend the [[Open Graph Protocol]] metadata standard (og:image, og:title) with additional fc:frame tags, making frames backwards-compatible with standard link previews.
  - Hub communication uses [[gRPC]] and [[Protocol Buffer]]s for efficient serialisation of signed messages.
  - The protocol aligns with [[W3C]] [[Decentralised Identifier]] (DID) concepts in spirit, though FIDs are a custom numeric scheme rather than full DID:* compliance.
  - Storage unit economics were introduced as a mechanism to align Hub operator incentives and prevent spam, inspired by similar resource-constraint models in other decentralised storage systems.

- ### Governance
  - Protocol development is led by Merkle Manufactory (the company behind Farcaster and Warpcast).
  - Farcaster Improvement Proposals (FIPs) provide a structured process for protocol changes, open to community input.
  - The protocol is intentionally permissive at the Hub layer — any party can run a Hub — while changes to the on-chain contracts require a more controlled upgrade process.
  - The tension between "sufficient decentralisation" and the team's ability to ship improvements quickly is an acknowledged trade-off in the protocol's design philosophy.

- ### Provenance
  - sources:: Farcaster protocol documentation (farcaster.xyz/docs); open-source Hub and contract repositories (github.com/farcasterxyz); established public knowledge as of June 2026
  - updated:: 2026-06-13
