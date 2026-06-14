public:: true
alias:: did:nostr, DID Nostr, nostr-did, DID-Nostr

# did:nostr
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:did-nostr",
  "@type": "Page",
  "title": "did:nostr",
  "vc:slug": "did-nostr",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:did-nostr",
  "@type": "Class",
  "label": "did:nostr",
  "definition": "did:nostr is a W3C DID Core-conformant decentralised identifier method that represents a Nostr public key as a universally resolvable DID of the form did:nostr:{pubkey}, where {pubkey} is the 64-character hex secp256k1 key already used by the Nostr protocol. Because the identifier is the key, no registration, server, or fee is required: anyone with a Nostr keypair already has a DID. Resolution degrades gracefully across three layers — HTTP fetch of a .well-known/did/nostr/{pubkey}.json document, relay-enhanced resolution from Nostr kind 0 (metadata) and kind 10002 (relay list) events, and an offline fallback that derives a minimal valid DID document from the key alone. Keys are expressed in W3C Multikey/Multibase form (secp256k1 multicodec), letting Nostr identities authenticate to any DID-aware system, including Solid login, SSO, and verifiable-credential flows.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:did-method", "label": "DID Method"}],
  "sameAs": [
    {"@id": "urn:ngm:class:nostr-did", "label": "Nostr DID"}
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:w3c-did-core", "label": "W3C DID Core"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:nostr", "label": "Nostr"},
      {"@id": "urn:ngm:class:secp256k1", "label": "secp256k1"},
      {"@id": "urn:ngm:class:multibase", "label": "Multibase"},
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:solid-oidc", "label": "Solid-OIDC"},
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"},
      {"@id": "urn:ngm:class:w3c-verifiable-credentials", "label": "W3C Verifiable Credentials"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:did-resolution", "label": "DID Resolution"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:solid", "label": "Solid"},
      {"@id": "urn:ngm:class:web-id", "label": "WebID"},
      {"@id": "urn:ngm:class:javascript-solid-server", "label": "JavaScript Solid Server"},
      {"@id": "urn:ngm:class:block-trails", "label": "Block Trails"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:did-web", "label": "did:web"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:webauthn", "label": "WebAuthn"},
      {"@id": "urn:ngm:class:web-contracts", "label": "Web Contracts"}
    ]
  },
  "quality": 0.74,
  "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-14T00:00:00Z", "inferenceRule": "ResearchAuthored"}
}
```

- ### Definition
  - did:nostr is a [[Decentralised Identifier]] (DID) method that turns a [[Nostr]] public key into a [[W3C DID Core]]-conformant identifier: `did:nostr:<hex-pubkey>`. If you have a Nostr `npub`, you already have a DID — no registrar, server, or fee.

- ### Overview
  - A did:nostr document is a W3C DID document projected from Nostr data. Its `verificationMethod` carries the [[secp256k1]] key in W3C [[Multibase|Multikey]] form (a parity byte plus the `0xe7 0x01` secp256k1 multicodec, base16 multibase encoded); its `profile` is drawn from the Nostr kind 0 metadata event; and its `service` entries are derived from the kind 10002 relay-list event. This lets a single key act as both a Nostr identity and a portable web identity.

- ### Resolution (graceful degradation)
  - **HTTP** — fetch `https://<host>/.well-known/did/nostr/{pubkey}.json`; benefits from HTTP caching and CDNs (~100× faster profile loads than relay queries, a real win on mobile).
  - **Relay-enhanced** — query [[Nostr]] relays for kind 0 and kind 10002 events to enrich the document with full profile and service endpoints.
  - **Offline fallback** — synthesise a minimal but valid DID document directly from the public key, so resolution always succeeds.

- ### Use cases
  - Logging in to a [[Solid]] pod via [[Solid-OIDC]] using a Nostr key — the resolution path behind the DreamLab SSO stack and [[JavaScript Solid Server]].
  - [[Single Sign-On]] across web services that understand DIDs.
  - Anchoring [[W3C Verifiable Credentials]] to a self-sovereign identifier.
  - Identifying parties and autonomous agents in [[Web Contracts]] and [[Block Trails]] (same secp256k1 key controls identity and on-chain state).

- ### Relationships
  - is-subclass-of:: [[DID Method]]
  - implements:: [[W3C DID Core]]
  - uses:: [[Nostr]]
  - uses:: [[secp256k1]]
  - enables:: [[Solid-OIDC]]
  - enables:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Solid]]
  - bridges-to:: [[WebID]]
  - bridges-to:: [[JavaScript Solid Server]]
  - contrasts-with:: [[did:web]]
  - related-to:: [[WebAuthn]]

- ### Provenance
  - sources:: https://nostr-labs.github.io/did-nostr-primer/ ; W3C DID Core specification
  - updated:: 2026-06-14
