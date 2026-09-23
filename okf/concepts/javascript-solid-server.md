---
okf_version: "0.2"
type: Class
title: JavaScript Solid Server
resource: urn:ngm:class:javascript-solid-server
domain: infrastructure
description: JavaScript Solid Server (JSS) is a Solid-protocol personal-data-server implementation that extends standard Solid with Nostr-native identity, positioning it as a practical superset of Solid. Alongside conventional Solid Pod storage and Linked Data Platform semantics, it adds did:nostr resolution for login, NIP-07/NIP-98 Nostr authentication, and WebAuthn PRF key management, so a single secp256k1 k
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:solid
hasPart:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:podkey
enables:
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:personal-data-store
implements:
  - urn:ngm:class:solid
  - urn:ngm:class:solid-oidc
  - urn:ngm:class:solid-pod
bridgesTo:
  - urn:ngm:class:nostr
  - urn:ngm:class:did-nostr
uses:
  - urn:ngm:class:did-nostr
  - urn:ngm:class:nostr
  - urn:ngm:class:webid-decentralised-identity-uri
  - urn:ngm:class:rdf
  - urn:ngm:class:linked-data
  - urn:ngm:class:web-authn
  - urn:ngm:class:rust-systems-programming-language
  - urn:ngm:class:rust-systems-programming-language
relatedTo:
  - urn:ngm:class:at-protocol
  - urn:ngm:class:activity-pub
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:web-contracts
---

# JavaScript Solid Server

JavaScript Solid Server (JSS) is a Solid-protocol personal-data-server implementation that extends standard Solid with Nostr-native identity, positioning it as a practical superset of Solid. Alongside conventional Solid Pod storage and Linked Data Platform semantics, it adds did:nostr resolution for login, NIP-07/NIP-98 Nostr authentication, and WebAuthn PRF key management, so a single secp256k1 keypair serves both as a Nostr identity and as the credential controlling a Solid Pod. In the DreamLab single-sign-on stack it is realised by the JavaScriptSolidServer organisation's components: the PodKey browser extension (window.nostr / NIP-98 headers), an SSO redirect service that resolves did:nostr, and a Rust pod backend (solid-pod-rs); it fronts services such as the Nostr BBS forum and the VisionClaw knowledge-graph governance layer.
