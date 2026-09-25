JavaScript Solid Server (JSS) is a Solid-protocol personal-data-server implementation that extends standard Solid with Nostr-native identity, positioning it as a practical superset of Solid. Alongside conventional Solid Pod storage and Linked Data Platform semantics, it adds did:nostr resolution for login, NIP-07/NIP-98 Nostr authentication, and WebAuthn PRF key management, so a single secp256k1 keypair serves both as a Nostr identity and as the credential controlling a Solid Pod. In the DreamLab single-sign-on stack it is realised by the JavaScriptSolidServer organisation's components: the PodKey browser extension (window.nostr / NIP-98 headers), an SSO redirect service that resolves did:nostr, and a Rust pod backend (solid-pod-rs); it fronts services such as the Nostr BBS forum and the VisionClaw knowledge-graph governance layer.

### Overview

- Standard Solid authenticates with [[Solid-OIDC]] and [[WebID]]. JSS keeps those and layers Nostr on top: login resolves a `did:nostr:<pubkey>` to a [[WebID]]/Pod, and requests are authorised with NIP-98 signed HTTP events rather than (or in addition to) bearer tokens. This removes the registrar/identity-provider dependency that ordinary Solid deployments carry.

### Architecture (DreamLab SSO stack)

- **PodKey** — browser extension providing `window.nostr` (NIP-07) and automatic NIP-98 `Authorization` headers; the key-management boundary between users and backends. Maintained by the JavaScriptSolidServer organisation.
- **SSO service** — handles the Solid Pod login redirect flow via [[did:nostr]] resolution.
- **solid-pod-rs** — the [[Rust]] Pod storage backend.
- JSS fronts the Nostr BBS forum and the VisionClaw knowledge-graph governance layer, and interoperates with [[WebAuthn]] PRF for hardware-backed keys.

### Why a superset

- Conventional Solid: pods + WebID + Solid-OIDC.
- JSS adds: [[did:nostr]] identity, NIP-07/NIP-98 auth, [[WebAuthn]] PRF, Rust storage, and a path to anchor pod documents to Bitcoin via [[Block Trails]] and [[Web Contracts]] — making the same key a unit of identity, authorisation, and provenance.

### Provenance

