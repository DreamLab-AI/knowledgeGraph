- ### Definition
  - JavaScript Solid Server (JSS) is a [[Solid]] personal-data-server that is a *superset of Solid*: it speaks the standard Solid Pod and [[Linked Data]] protocols, and adds [[Nostr]]-native identity via [[did:nostr]], so a user's secp256k1 key both signs Nostr events and authenticates to their [[Solid Pod]].

- ### Overview
  - Standard Solid authenticates with [[Solid-OIDC]] and [[WebID]]. JSS keeps those and layers Nostr on top: login resolves a `did:nostr:<pubkey>` to a [[WebID]]/Pod, and requests are authorised with NIP-98 signed HTTP events rather than (or in addition to) bearer tokens. This removes the registrar/identity-provider dependency that ordinary Solid deployments carry.

- ### Architecture (DreamLab SSO stack)
  - **PodKey** — browser extension providing `window.nostr` (NIP-07) and automatic NIP-98 `Authorization` headers; the key-management boundary between users and backends. Maintained by the JavaScriptSolidServer organisation.
  - **SSO service** — handles the Solid Pod login redirect flow via [[did:nostr]] resolution.
  - **solid-pod-rs** — the [[Rust]] Pod storage backend.
  - JSS fronts the Nostr BBS forum and the VisionClaw knowledge-graph governance layer, and interoperates with [[WebAuthn]] PRF for hardware-backed keys.

- ### Why a superset
  - Conventional Solid: pods + WebID + Solid-OIDC.
  - JSS adds: [[did:nostr]] identity, NIP-07/NIP-98 auth, [[WebAuthn]] PRF, Rust storage, and a path to anchor pod documents to Bitcoin via [[Block Trails]] and [[Web Contracts]] — making the same key a unit of identity, authorisation, and provenance.

- ### Relationships
  - is-subclass-of:: [[Solid]]
  - implements:: [[Solid-OIDC]]
  - implements:: [[Solid Pod]]
  - uses:: [[did:nostr]]
  - uses:: [[Nostr]]
  - uses:: [[WebID]]
  - uses:: [[Rust]]
  - has-part:: [[PodKey]]
  - enables:: [[Data Sovereignty]]
  - enables:: [[Personal Data Store]]
  - bridges-to:: [[Nostr]]
  - related-to:: [[Web Contracts]]
  - related-to:: [[AT Protocol]]

- ### Provenance
  - sources:: github.com/JavaScriptSolidServer (PodKey, sso, solid-pod-rs); Solid Protocol specification
  - updated:: 2026-06-14