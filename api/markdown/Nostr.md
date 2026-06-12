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
  "definition": "Nostr (Notes and Other Stuff Transmitted by Relays) is an open, censorship-resistant social-messaging protocol built around a minimal event model in which users identify themselves by a secp256k1 cryptographic key pair and publish signed JSON events to one or more relay servers over WebSocket connections. The protocol has no central server: identity is purely the public key, and relays are interchangeable infrastructure that store and forward events without requiring accounts or trust; clients subscribe to relays using filter objects and receive matching events. Nostr Improvement Proposals (NIPs) extend the core event kind system to cover short-form notes, long-form articles, direct messages (encrypted with NIP-04/NIP-44), zap payments (Lightning Network), community moderation, and identity verification. Its radical simplicity and cryptographic self-sovereignty have made Nostr the primary decentralised social-layer for the Bitcoin and Lightning ecosystem.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:did-nostr-identity", "label": "DID Nostr Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:web-socket", "label": "WebSocket"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key", "label": "Public Key"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:social-network-graph", "label": "Social Network Graph"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Nostr is a minimalist open protocol for censorship-resistant social messaging in which user identity is a [[Public Key]] on the secp256k1 curve, messages are signed JSON events published to relay servers over [[WebSocket]] connections, and [[Self Sovereign Identity]] is achieved without any central account authority.

- ### Relationships
  - Nostr is an instance of the [[Nostr Protocol]] specification and its principal motivation is [[Censorship Resistance]] — any relay can be replaced and a user's identity (keypair) persists independent of any server. [[Public-Key Cryptography]] underpins both identity and message integrity: each event carries a signature verifiable against the author's public key. The protocol supports [[Decentralised Identity]] and has been mapped to [[DID Nostr Identity]] (NIP-39), enabling integration with W3C DID infrastructure. It enables a distributed [[Social Network Graph]] discoverable through follow lists and enables the [[Decentralised Web]] vision by providing open social infrastructure beyond platform silos. [[WebSocket]] is the sole transport primitive.

- ### Content
  - The Nostr protocol's entire data model centres on the Event object, a JSON structure with a fixed schema: `id` (SHA-256 hash of the event contents), `pubkey` (author's hex-encoded 32-byte public key), `created_at` (Unix timestamp), `kind` (integer classifying the event type), `tags` (array of arrays for references, replies, mentions), `content` (arbitrary string), and `sig` (Schnorr signature over the event id). This simplicity means any conforming relay can store events without understanding their semantics, and any conforming client can verify event authenticity without trusting the relay.

  - Relay operators run simple servers (most implementations are under 1,000 lines of code) that accept signed events over WebSocket and answer REQ subscription filters from clients. Filters specify combinations of pubkeys, event kinds, time ranges, and tag values. Relays may impose spam-protection measures — proof-of-work requirements, paid access, whitelist policies — without protocol-level coordination. Clients manage their own relay lists (NIP-65 outbox model), publishing to write relays and reading from configured read relays.

  - The NIP (Nostr Implementation Possibilities) process extends the protocol in a decentralised, opt-in manner. Key NIPs include NIP-01 (core protocol), NIP-04 and NIP-44 (encrypted direct messages using ECDH-derived shared secrets), NIP-57 (Lightning zaps — attaching value transfers to events using BOLT-11 invoices), NIP-05 (DNS-based identity verification mapping npubs to human-readable addresses), and NIP-90 (data vending machines for AI task requests). This extensibility allows Nostr to evolve rapidly without hard forks.

  - The intersection of Nostr and the Lightning Network has created a programmable social-payment layer: users can attach zap receipts to notes, enabling micro-tipping and value-for-value content monetisation without platform intermediaries. Projects such as Primal and Damus demonstrate client-side algorithms built on open relay data, offering algorithm transparency absent from closed platforms. Nostr's key-centric model is also being explored for agent-to-agent communication in decentralised AI systems.

