public:: true

# Nostr
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nostr",
  "@type": "Page",
  "vc:slug": "nostr",
  "title": "Nostr",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nostr",
  "@type": "Class",
  "label": "Nostr",
  "definition": "Nostr (Notes and Other Stuff Transmitted by Relays) is an open, censorship-resistant social-messaging protocol in which user identity is a secp256k1 cryptographic key pair and all user activity consists of signed JSON events published to one or more relay servers over WebSocket connections. The protocol has no central authority: identity is purely the public key, relays are interchangeable infrastructure that store and forward events without requiring account registration, and clients subscribe using filter objects to receive matching events. Nostr Improvement Proposals (NIPs) extend the core event-kind system to cover short-form notes, long-form articles, encrypted direct messages, Lightning Network zap payments, community moderation, and decentralised identity verification. Its radical simplicity, cryptographic self-sovereignty, and tight integration with the Bitcoin and Lightning ecosystem have made Nostr the dominant open social layer for value-aligned decentralised communication.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communication"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:web-socket", "label": "WebSocket"},
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"},
      {"@id": "urn:ngm:class:secp256k1", "label": "secp256k1"},
      {"@id": "urn:ngm:class:json", "label": "JSON"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:social-network-graph", "label": "Social Network Graph"},
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:micropayment", "label": "Micropayment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:relay-server", "label": "Relay Server"},
      {"@id": "urn:ngm:class:event-signing", "label": "Event Signing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:open-protocol", "label": "Open Protocol"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:nostr-improvement-proposal", "label": "Nostr Improvement Proposal"},
      {"@id": "urn:ngm:class:nostr-event", "label": "Nostr Event"},
      {"@id": "urn:ngm:class:nostr-relay", "label": "Nostr Relay"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:activitypub", "label": "ActivityPub"},
      {"@id": "urn:ngm:class:matrix-protocol", "label": "Matrix Protocol"},
      {"@id": "urn:ngm:class:federated-social-network", "label": "Federated Social Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:did-nostr-identity", "label": "DID Nostr Identity"},
      {"@id": "urn:ngm:class:value-for-value", "label": "Value-for-Value"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:decentralised-protocol", "label": "Decentralised Protocol"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:agent-to-agent-communication", "label": "Agent-to-Agent Communication"},
      {"@id": "urn:ngm:class:decentralised-ai", "label": "Decentralised AI"},
      {"@id": "urn:ngm:class:did-nostr", "label": "did:nostr"},
      {"@id": "urn:ngm:class:block-trails", "label": "Block Trails"},
      {"@id": "urn:ngm:class:web-contracts", "label": "Web Contracts"},
      {"@id": "urn:ngm:class:javascript-solid-server", "label": "JavaScript Solid Server"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:notes-and-other-stuff-transmitted-by-relays", "label": "Notes and Other Stuff Transmitted by Relays"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Nostr (Notes and Other Stuff Transmitted by Relays) is an open, censorship-resistant messaging protocol in which every user is identified solely by a [[secp256k1]] cryptographic key pair, all activity is expressed as signed [[JSON]] event objects published to relay servers over [[WebSocket]] connections, and [[Self-Sovereign Identity]] is achieved without any central account authority. The protocol's radical simplicity — a single event schema, a filter-based subscription model, and interchangeable [[Relay Server]] infrastructure — distinguishes it from both federated alternatives such as [[ActivityPub]] and permissioned blockchain social layers.

- ### Overview
  - Nostr was conceived in 2020 by the pseudonymous developer fiatjaf as a response to the structural censorship vulnerabilities of both centralised platforms and federated networks. Its core insight is that censorship-resistance requires identity to be cryptographically owned by the user rather than delegated to any server, and that relay infrastructure should be commoditised and replaceable.
  - Unlike [[Federated Social Network]] architectures (Mastodon, Diaspora), Nostr does not route through a home server that controls the account. A user's keypair is the identity; moving to a different relay is as simple as publishing an updated relay list (NIP-65), and all prior events already signed with the key remain valid wherever they are stored.
  - Unlike [[Blockchain]] social layers, Nostr stores no data on-chain and incurs no transaction fees for publishing. The protocol intentionally keeps on-chain settlement out of scope, delegating value transfer to the [[Lightning Network]] via the zap mechanism (NIP-57).
  - The result is an extremely low-barrier-to-entry protocol: a relay can be implemented in under 1,000 lines of code; a client in a few hundred. This has produced a rich ecosystem of implementations across Go, Rust, TypeScript, Swift, and Kotlin.

- ### Key Components
  - **Event Object** — the atomic unit. A fixed-schema [[JSON]] object with seven fields: `id` (SHA-256 hash of the canonical serialisation), `pubkey` (hex-encoded 32-byte author public key), `created_at` (Unix timestamp), `kind` (integer classifying event semantics), `tags` (array-of-arrays for references, mentions, replies), `content` (arbitrary UTF-8 string), and `sig` ([[Schnorr Signature]] over the event id). All relay and client logic is derived from this single data structure.
  - **[[Nostr Relay]]** — a server accepting WebSocket connections from clients. Relays receive events (CLIENT→RELAY: `EVENT` message), store them, and answer subscription queries (CLIENT→RELAY: `REQ` message with filter JSON). Relay policies (spam filtering, paid access, whitelist, proof-of-work) are entirely out-of-protocol and set operator autonomy.
  - **[[Nostr Event]] Kinds** — the integer `kind` field segments the event space. Kind 0: metadata (profile); Kind 1: short-form note; Kind 3: contact/follow list; Kind 4: encrypted DM (deprecated in favour of NIP-44 gift wrap); Kind 6: repost; Kind 7: reaction; Kind 9735: zap receipt; Kind 30023: long-form article; Kind 5300+: NIP-90 data-vending-machine jobs.
  - **[[Nostr Improvement Proposal]] (NIP) Process** — the decentralised specification mechanism. NIPs are markdown documents in the `nostr-protocol/nostr` GitHub repository. They are numbered, status-tracked (draft/final), and opt-in: clients and relays signal support via `NIP-11` relay information documents. Key NIPs include: NIP-01 (core protocol), NIP-04 (legacy DM encryption), NIP-05 (DNS-based identity verification), NIP-19 (`bech32`-encoded entities: `npub`, `nsec`, `note`, `nprofile`, `nevent`), NIP-44 (versioned encryption), NIP-57 (Lightning zaps), NIP-65 (outbox relay model), NIP-90 (Data Vending Machines for AI task delegation).
  - **[[secp256k1]] Key Pair** — the cryptographic root of identity. The 32-byte private key (nsec) generates a 32-byte public key (npub) using the same elliptic curve as [[Bitcoin]]. [[Schnorr Signature]]s (BIP-340) are used for event signing, enabling batch verification and key aggregation. The key pair is portable across all Nostr clients and relays with no registration step.
  - **Relay Filter Subscriptions** — clients open subscriptions with `REQ <subscription-id> <filter>` messages. A filter is a JSON object selecting by `ids`, `authors`, `kinds`, `#e` (event tag), `#p` (pubkey tag), `since`, `until`, and `limit`. Relays respond with matching stored events followed by an `EOSE` (End Of Stored Events) marker, after which new matching events are streamed in real time.
  - **Outbox / Inbox Model (NIP-65)** — a relay list event (Kind 10002) announces a user's preferred write relays and read relays. Clients use this to implement a gossip-style routing model: publishing to the author's write relays and fetching from the read relays of followed users, reducing full-mesh fan-out.

- ### Applications and Use Cases
  - **Decentralised Social Networking** — short-form notes, thread replies, reposts, and reactions constitute the core social layer. Clients such as Damus (iOS), Primal (web/mobile), Amethyst (Android), and Snort (web) provide Twitter/X-like interfaces over open relay data, with client-side algorithm transparency absent from closed platforms.
  - **[[Lightning Network]] Payments and [[Value-for-Value]]** — NIP-57 zaps attach BOLT-11 Lightning invoices to events, allowing instant micro-tipping and subscription-free content monetisation. Zap splits (NIP-57 extensions) route fractions of a zap to multiple recipients (e.g., article co-authors or relay operators).
  - **Long-Form Publishing** — Kind 30023 parameterised replaceable events support Markdown-formatted articles with title, summary, and published-at metadata, positioning Nostr as a censorship-resistant alternative to Medium or Substack.
  - **Encrypted Direct Messaging** — NIP-44 versioned encryption (ChaCha20-Poly1305 with ECDH-derived key and HKDF) supersedes the deprecated NIP-04 ECDH+AES scheme. NIP-17 gift-wrap DMs seal the sender/recipient metadata by wrapping the ciphertext in a sealed rumour structure visible only to the private key holder.
  - **[[Decentralised Identity]] and Verification** — NIP-05 maps an npub to a DNS-controlled JSON file at `/.well-known/nostr.json`, providing a human-readable handle (user@domain.tld). NIP-39 (External Identities) allows attaching and cryptographically claiming GitHub accounts, Telegram handles, or other service identifiers to a Nostr key. [[DID Nostr Identity]] (did:nostr) maps Nostr keys into the W3C [[Decentralised Identity]] framework.
  - **AI and Agent Communication (NIP-90 Data Vending Machines)** — NIP-90 defines a marketplace protocol for computational tasks: a requester publishes a job-request event (Kind 5000–5999); AI service providers ("Data Vending Machines") pick up the request, process it, and return results (Kind 6000–6999) as signed events. This enables [[Agent-to-Agent Communication]] and [[Decentralised AI]] inference coordination without centralised APIs.
  - **Community and Moderation** — NIP-72 (Moderated Communities), NIP-29 (Relay-based Groups), and NIP-28 (Public Chat Channels) extend Nostr into community discussion spaces with optional relay-enforced moderation, preserving opt-in censorship controls without protocol-level authority.
  - **Marketplace and Commerce** — NIP-15 (Nostr Marketplace) and NIP-99 (Classified Listings) define product and listing events, enabling peer-to-peer commerce with Lightning payment settlement.
  - **Session Mirroring and Notification** — the NIP-59 gift-wrap pattern is widely used for private notification channels where only the holder of a specific private key can decrypt the message stream, used in AI agent session-mirroring architectures.

- ### Relationships
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[WebSocket]]
  - uses:: [[Schnorr Signature]]
  - uses:: [[secp256k1]]
  - uses:: [[JSON]]
  - enables:: [[Censorship Resistance]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[Social Network Graph]]
  - enables:: [[Decentralised Web]]
  - enables:: [[Micropayment]]
  - requires:: [[Relay Server]]
  - requires:: [[Event Signing]]
  - dependsOn:: [[Lightning Network]]
  - dependsOn:: [[Bitcoin]]
  - implements:: [[Self-Sovereign Identity]]
  - implements:: [[Open Protocol]]
  - hasPart:: [[Nostr Improvement Proposal]]
  - hasPart:: [[Nostr Event]]
  - hasPart:: [[Nostr Relay]]
  - contrastsWith:: [[ActivityPub]]
  - contrastsWith:: [[Matrix Protocol]]
  - contrastsWith:: [[Federated Social Network]]
  - relatedTo:: [[DID Nostr Identity]]
  - relatedTo:: [[Value-for-Value]]
  - relatedTo:: [[Peer-to-Peer Network]]
  - bridges-to:: [[Agent-to-Agent Communication]]
  - bridges-to:: [[Decentralised AI]]

- ### Standards and Context
  - The Nostr specification is maintained as a community repository at `github.com/nostr-protocol/nostr`. There is no formal standards body; governance is informal, driven by rough consensus among client and relay implementers. NIP authors propose changes as pull requests; a NIP reaching "final" status indicates widespread implementation support.
  - The protocol deliberately avoids [[Blockchain]] data structures to remain fee-free and high-throughput. Event immutability is enforced by cryptographic signatures rather than consensus chains.
  - [[ActivityPub]] (the W3C Recommendation underpinning Mastodon and the Fediverse) federates through server-controlled actor accounts, making it structurally censurable at the server level. Nostr's key-centric model is considered a more robust censorship-resistance guarantee by its proponents.
  - [[Matrix Protocol]] (Element/Matrix.org) targets encrypted team messaging with room-based federation and complex state resolution. Nostr's event model is simpler but less suited to large multi-party encrypted rooms.
  - BIP-340 (Schnorr Signatures for secp256k1) and BIP-341/342 (Taproot) are the Bitcoin Improvement Proposals that standardise the cryptographic primitives Nostr reuses, ensuring interoperability with Bitcoin tooling.
  - NIP-90 Data Vending Machines intersect with emerging [[Decentralised AI]] inference markets and [[Agent-to-Agent Communication]] patterns, positioning Nostr as potential coordination infrastructure for autonomous AI agents operating without centralised API gatekeepers.

- ### Provenance
  - sources:: Nostr protocol specification (github.com/nostr-protocol/nostr), NIP repository, fiatjaf blog posts, Bitcoin Magazine Nostr coverage, Primal and Damus client documentation, NIP-90 DVM specification.
  - updated:: 2026-06-13
