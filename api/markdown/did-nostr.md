did:nostr is a W3C DID Core-conformant decentralised identifier method that represents a Nostr public key as a universally resolvable DID of the form did:nostr:{pubkey}, where {pubkey} is the 64-character hex secp256k1 key already used by the Nostr protocol. Because the identifier is the key, no registration, server, or fee is required: anyone with a Nostr keypair already has a DID. Resolution degrades gracefully across three layers — HTTP fetch of a .well-known/did/nostr/{pubkey}.json document, relay-enhanced resolution from Nostr kind 0 (metadata) and kind 10002 (relay list) events, and an offline fallback that derives a minimal valid DID document from the key alone. Keys are expressed in W3C Multikey/Multibase form (secp256k1 multicodec), letting Nostr identities authenticate to any DID-aware system, including Solid login, SSO, and verifiable-credential flows.

### Overview

- A did:nostr document is a W3C DID document projected from Nostr data. Its `verificationMethod` carries the [[secp256k1]] key in W3C [[Multibase|Multikey]] form (a parity byte plus the `0xe7 0x01` secp256k1 multicodec, base16 multibase encoded); its `profile` is drawn from the Nostr kind 0 metadata event; and its `service` entries are derived from the kind 10002 relay-list event. This lets a single key act as both a Nostr identity and a portable web identity.

### Resolution (graceful degradation)

- **HTTP** — fetch `https://<host>/.well-known/did/nostr/{pubkey}.json`; benefits from HTTP caching and CDNs (~100× faster profile loads than relay queries, a real win on mobile).
- **Relay-enhanced** — query [[Nostr]] relays for kind 0 and kind 10002 events to enrich the document with full profile and service endpoints.
- **Offline fallback** — synthesise a minimal but valid DID document directly from the public key, so resolution always succeeds.

### Use cases

- Logging in to a [[Solid]] pod via [[Solid-OIDC]] using a Nostr key — the resolution path behind the DreamLab SSO stack and [[JavaScript Solid Server]].
- [[Single Sign-On]] across web services that understand DIDs.
- Anchoring [[W3C Verifiable Credentials]] to a self-sovereign identifier.
- Identifying parties and autonomous agents in [[Web Contracts]] and [[Block Trails]] (same secp256k1 key controls identity and on-chain state).

### Provenance

