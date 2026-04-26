iri:: http://narrativegoldmine.com/blockchain#NostrProtocol
uri:: urn:visionclaw:concept:blockchain:nostr-protocol
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:nostr-protocol
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Nostr Protocol
content-hash:: sha256-12-7d3e9f2a1b8c
status:: complete
maturity:: established
quality-score:: 0.70
authority-score:: 0.80
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - Nostr (Notes and Other Stuff Transmitted by Relays) is a minimalist open protocol for censorship-resistant, decentralised messaging and identity, in which clients sign events with [[Schnorr Signatures|Schnorr signatures]] over the [[secp256k1]] elliptic curve and broadcast them to any number of stateless relay servers, so that no single entity can deplatform a user without their private key being lost; the protocol's NIP (Nostr Implementation Possibility) architecture allows feature extension whilst preserving a small, auditable core that integrates natively with [[Bitcoin Lightning Network]] payments and serves as a decentralised identity and communication layer for [[VisionClaw Agentic Container]] agent-to-agent messaging and [[DID Nostr Identity]] resolution.

- ### Semantic Classification
  - owl-class:: blockchain:NostrProtocol
  - owl-role:: Process
  - owl-inferred:: blockchain:DecentralisedMessagingProtocol
  - belongs-to-domain:: [[Blockchain Domain]], [[NGM Domain]]
  - implemented-in-layer:: [[ProtocolLayer]], [[IdentityLayer]]

- ### Relationships
  - is-subclass-of:: [[Decentralised Communication Protocol]], [[Cryptographic Identity System]]
  - has-part:: [[Nostr Event]], [[Nostr Relay]], [[Nostr Client]], [[NIP Architecture]], [[WebID Profile]], [[Schnorr Signatures]]
  - is-part-of:: [[Decentralised Social Web]], [[Bitcoin Ecosystem]]
  - requires:: [[secp256k1 Elliptic Curve]], [[WebSocket Protocol]], [[JSON Serialisation]], [[Schnorr Signatures]]
  - enables:: [[Censorship-Resistant Messaging]], [[Decentralised Identity], [[Agent-to-Agent Communication]], [[Data Vending Machine]], [[Lightning Zap Payments]]
  - implements:: [[NIP-01 Core Protocol]], [[NIP-05 Identity Verification]], [[NIP-47 Wallet Connect]], [[NIP-90 Data Vending Machines]]
  - bridges-to:: [[DID Nostr Identity]] (domain: ngm), [[Bitcoin Lightning Network]] (domain: bc), [[Model Context Protocol]] (domain: ai), [[Solid Pod]] (domain: ngm)
  - depends-on:: [[WebSocket Protocol]], [[eProsima Fast DDS]], [[secp256k1 Library]]

- ### Content

  The Nostr protocol was published in 2020 by the pseudonymous developer fiatjaf as perhaps the simplest possible architecture for censorship-resistant global communication. Rather than federating servers (like ActivityPub) or building a peer-to-peer DHT (like Secure Scuttlebutt), Nostr adopts a relay model: clients are fully sovereign, holding their own keypairs, and relay servers are deliberately kept "dumb" — they store and forward signed events without understanding their content. This means a relay can be added or discarded at will; if one censors a user, the client switches to another relay, and the user's identity (their keypair) travels with them unchanged.

  #### Key Characteristics

  - **Event-Centric Data Model**: All data is encapsulated in a signed [[Nostr Event]] JSON object with fields: `id` (SHA-256 of the canonical serialisation), `pubkey` (author's secp256k1 public key), `created_at` (Unix timestamp), `kind` (integer event type), `tags` (key-value metadata), `content` (payload string), and `sig` (64-byte Schnorr signature).
  - **NIP Architecture**: Nostr Implementation Possibilities (NIPs) extend the base protocol without breaking backward compatibility. NIP-01 defines the core event flow; NIP-04/44 specify encrypted DMs; NIP-05 maps npub keys to DNS-verified identities; NIP-47 defines Nostr Wallet Connect for Lightning payments; NIP-90 specifies Data Vending Machines for AI services.
  - **Relay Agnosticism**: Clients connect to multiple relays simultaneously; event delivery is probabilistic but highly resilient. Popular events propagate across the relay network via client cross-posting.
  - **Schnorr Signature Security**: The same cryptographic primitive ([[BIP-340 Schnorr Keypair|BIP-340]] Schnorr over secp256k1) underpins both Nostr identity and Bitcoin [[Taproot]] transactions, enabling the same keypair to serve dual identity and payment purposes.
  - **Lightning Integration**: NIP-57 Zaps allow users and agents to attach [[Bitcoin Lightning Network]] micropayments to any event, creating a native attention economy and enabling machine-to-machine payment rails for [[AI agent]] services.

  #### How It Works

  A Nostr client generates a secp256k1 keypair: the 32-byte private key (`nsec`) and 32-byte public key (`npub`). To publish a note, the client constructs an event JSON, computes its SHA-256 hash as the `id`, signs the hash with the private key to produce `sig`, and sends the serialised event over a WebSocket connection to one or more relays using the `["EVENT", event]` JSON-RPC message. Relays store the event and broadcast it to any connected client with a matching subscription filter.

  Subscriptions are expressed as JSON filters (`kinds`, `authors`, `since`, `until`, `#e` for event tags, `#p` for pubkey tags). A client subscribing to a relay with filter `{"kinds":[1], "authors":["<pubkey>"]}` receives all kind-1 (short text note) events from that author stored on that relay. Relay software (StrFry, Nostr.rs, Bostr) handles storage, filtering, and NIP-11 capability advertisement.

  Within [[VisionClaw Agentic Container]], each agent is provisioned with a `did:nostr:<pubkey>` identity generated by the [[DID Nostr Identity]] system. Agent-to-agent messages are exchanged as NIP-44 encrypted direct messages routed through a private relay hosted inside the container's network namespace. The [[URI Canonicaliser]] mints agent URIs from their Nostr pubkeys, ensuring stable cross-system identity even if the agent migrates to a different pod.

  #### Current Landscape

  As of 2026, the Nostr network has grown to over 34 million registered public keys, approximately 1,200 active relay servers, and a rich application ecosystem spanning social clients (Damus, Primal, Nostrudel), marketplaces (LnBits Nostr Market), mapping (Yonder), and AI service brokers (NIP-90 DVMs). The StrFry relay (C++, LMDB backend) has become the performance reference implementation, handling millions of events per day. AI integration has accelerated significantly: Data Vending Machines (DVMs, NIP-90) create a permissionless marketplace where [[Large Language Model]] inference, image generation, and federated learning are offered as Nostr-native services paid via Lightning. The [[W3C Nostr Community Group]] published the `did:nostr` DID method specification in 2024, formalising Nostr keypairs as W3C-compliant Decentralised Identifiers.

  #### Cross-Domain Applications

  In the [[AI Domain]], Nostr provides the decentralised communication and identity backbone for [[Model Context Protocol]] agents: agents advertise capabilities as kind-31990 events, discover peers through relay subscriptions, and exchange tasks as NIP-90 DVM jobs. In the [[NGM Domain]], [[Solid Pod]] providers can use Nostr as an out-of-band notification channel for pod access events. In the [[Metaverse Domain]], Nostr events carry spatial presence signals and avatar state updates between metaverse nodes. In the [[Telecollaboration Domain]], Nostr's encrypted DMs (NIP-44) provide an alternative to WebSocket-based signalling for [[WebRTC]] session establishment that does not require a centralised signalling server.

  #### Standards and References

  - fiatjaf. (2020). *Nostr Protocol — Notes and Other Stuff Transmitted by Relays*. https://github.com/nostr-protocol/nostr
  - W3C Nostr Community Group. (2024). *did:nostr DID Method Specification*. https://nostrcg.github.io/did-nostr/
  - Dorsey, J. (2023). *Bitcoin's censorship-resistant potential and Nostr*. https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana
  - Skywork AI. (2024). "Unlocking Agentic AI: Nostr and Lightning MCP Servers." https://skywork.ai/
  - Arxiv. (2024). "FEDSTR: Money-In AI-Out — A Decentralised Marketplace for Federated Learning on Nostr." arXiv:2404.15834.

- ### Provenance
  - sources:: [[Nostr Protocol GitHub]], [[W3C Nostr Community Group]], [[NIP-01 Core Specification]], [[NIP-90 Data Vending Machines]], [[did:nostr DID Method]]
  - migration-date:: 2026-04-26T00:00:00Z
