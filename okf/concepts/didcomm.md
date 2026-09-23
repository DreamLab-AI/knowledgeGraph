---
okf_version: "0.2"
type: Class
title: DIDComm
resource: urn:ngm:class:didcomm
domain: security
description: DIDComm (Decentralised Identifier Communication) is a secure, private messaging protocol built on top of the W3C Decentralised Identifiers specification, enabling peer-to-peer, end-to-end encrypted communication between parties whose identities are anchored to DIDs. The protocol specifies how messages are packaged, signed, and encrypted using keys derived from DID documents, without reliance on an
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:decentralized-identity-did
requires:
  - urn:ngm:class:did-resolver
  - urn:ngm:class:end-to-end-encryption
enables:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:protocol-layer
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:credential-presentation
  - urn:ngm:class:inter-agent-communication
contrastsWith:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
bridgesTo:
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:did-document
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:did-resolution
standardizedBy:
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:w3-c-did-core
relatedTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:decentralized-identity-foundation
  - urn:ngm:class:hyperledger-aries
  - urn:ngm:class:json-web-encryption
  - urn:ngm:class:trust-over-ip-stack
---

# DIDComm

DIDComm (Decentralised Identifier Communication) is a secure, private messaging protocol built on top of the W3C Decentralised Identifiers specification, enabling peer-to-peer, end-to-end encrypted communication between parties whose identities are anchored to DIDs. The protocol specifies how messages are packaged, signed, and encrypted using keys derived from DID documents, without reliance on any central server or directory. DIDComm messages are transport-agnostic, operating over HTTP, Bluetooth, NFC, or any delivery mechanism, making the protocol suitable for both online and offline identity interactions. It forms the communication backbone of the self-sovereign identity ecosystem.
