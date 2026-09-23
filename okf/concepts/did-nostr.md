---
okf_version: "0.2"
type: Class
title: did:nostr
resource: urn:ngm:class:did-nostr
domain: security
description: "did:nostr is a W3C DID Core-conformant decentralised identifier method that represents a Nostr public key as a universally resolvable DID of the form did:nostr:{pubkey}, where {pubkey} is the 64-character hex secp256k1 key already used by the Nostr protocol. Because the identifier is the key, no registration, server, or fee is required: anyone with a Nostr keypair already has a DID. Resolution deg"
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:did-method
enables:
  - urn:ngm:class:solid-oidc
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:w3-c-verifiable-credentials
  - urn:ngm:class:self-sovereign-identity
dependsOn:
  - urn:ngm:class:did-resolution
implements:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:decentralised-identifier
contrastsWith:
  - urn:ngm:class:did-web
bridgesTo:
  - urn:ngm:class:solid
  - urn:ngm:class:webid-decentralised-identity-uri
  - urn:ngm:class:javascript-solid-server
  - urn:ngm:class:block-trails
uses:
  - urn:ngm:class:nostr
  - urn:ngm:class:secp256k1
  - urn:ngm:class:multibase
  - urn:ngm:class:schnorr-signature
relatedTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:web-authn
  - urn:ngm:class:web-contracts
---

# did:nostr

did:nostr is a W3C DID Core-conformant decentralised identifier method that represents a Nostr public key as a universally resolvable DID of the form did:nostr:{pubkey}, where {pubkey} is the 64-character hex secp256k1 key already used by the Nostr protocol. Because the identifier is the key, no registration, server, or fee is required: anyone with a Nostr keypair already has a DID. Resolution degrades gracefully across three layers — HTTP fetch of a .well-known/did/nostr/{pubkey}.json document, relay-enhanced resolution from Nostr kind 0 (metadata) and kind 10002 (relay list) events, and an offline fallback that derives a minimal valid DID document from the key alone. Keys are expressed in W3C Multikey/Multibase form (secp256k1 multicodec), letting Nostr identities authenticate to any DID-aware system, including Solid login, SSO, and verifiable-credential flows.
