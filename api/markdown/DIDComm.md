public:: true

# DIDComm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:didcomm",
  "@type": "Page",
  "vc:slug": "didcomm",
  "title": "DIDComm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:didcomm",
  "@type": "Class",
  "label": "DIDComm",
  "definition": "DIDComm (Decentralised Identifier Communication) is a secure, private messaging protocol built on top of the W3C Decentralised Identifiers specification, enabling peer-to-peer, end-to-end encrypted communication between parties whose identities are anchored to DIDs. The protocol specifies how messages are packaged, signed, and encrypted using keys derived from DID documents, without reliance on any central server or directory. DIDComm messages are transport-agnostic, operating over HTTP, Bluetooth, NFC, or any delivery mechanism, making the protocol suitable for both online and offline identity interactions. It forms the communication backbone of the self-sovereign identity ecosystem.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:w3-c-did-core", "label": "W3C DID Core"},
      {"@id": "urn:ngm:class:decentralized-identity-foundation", "label": "Decentralized Identity Foundation"},
      {"@id": "urn:ngm:class:hyperledger-aries", "label": "Hyperledger Aries"},
      {"@id": "urn:ngm:class:json-web-encryption", "label": "JSON Web Encryption"},
      {"@id": "urn:ngm:class:trust-over-ip", "label": "Trust over IP"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:jose-json-object-signing-and-encryption", "label": "JOSE (JSON Object Signing and Encryption)"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"},
      {"@id": "urn:ngm:class:did-resolution", "label": "DID Resolution"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:verifiable-credential-vc", "label": "Verifiable Credential (VC)"},
      {"@id": "urn:ngm:class:protocol-layer", "label": "Protocol Layer"},
      {"@id": "urn:ngm:class:credential-issuance", "label": "Credential Issuance"},
      {"@id": "urn:ngm:class:credential-presentation", "label": "Credential Presentation"},
      {"@id": "urn:ngm:class:agent-to-agent-communication", "label": "Agent-to-Agent Communication"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:did-resolver", "label": "DID Resolver"},
      {"@id": "urn:ngm:class:end-to-end-encryption", "label": "End-to-End Encryption"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:decentralized-identity-foundation", "label": "Decentralized Identity Foundation"},
      {"@id": "urn:ngm:class:w3-c-did-core", "label": "W3C DID Core"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:oauth2", "label": "OAuth2"},
      {"@id": "urn:ngm:class:openid-connect", "label": "OpenID Connect"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-to-machine-communication", "label": "Machine-to-Machine Communication"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:didcomm-messaging", "label": "DIDComm Messaging"},
    {"@id": "urn:ngm:class:decentralized-identifier-communication", "label": "Decentralized Identifier Communication"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - DIDComm is a transport-agnostic, end-to-end encrypted messaging protocol that enables [[Self Sovereign Identity]] holders to communicate securely using cryptographic keys embedded in their [[DID Document]], without reliance on centralised identity providers.
- ### Relationships
  - DIDComm is specified by the [[Decentralized Identity Foundation]] and depends directly on the [[W3C DID Core]] specification for identifier resolution. Messages can carry [[Verifiable Credentials]] as attachments, enabling credential issuance, presentation, and revocation workflows entirely over the [[Peer-to-Peer Network]] communication layer. The [[Protocol Layer]] design is intentionally transport-agnostic, so the same message envelope format works over HTTP, WebSockets, or out-of-band QR codes.
- ### Content
  - DIDComm emerged from the Hyperledger Aries project and was formalised by the Decentralised Identity Foundation's DIDComm working group, producing the DIDComm Messaging v2 specification. The core insight is that if two parties each possess a DID with published key material, they need no external infrastructure to establish a secure communication channel—keys are the identity, and the channel is derived from them. This eliminates dependencies on TLS certificate authorities, OAuth providers, or any other trusted third party for the communication layer.

  - The message format uses JOSE (JSON Object Signing and Encryption) standards—specifically JWM (JSON Web Messages)—for envelope construction. A sender encrypts and optionally signs the message payload using the recipient's public key found via DID resolution, producing an opaque encrypted envelope. Only the holder of the corresponding private key can decrypt it, and the DID-based signature proves authorship without revealing the sender's real-world identity unless explicitly disclosed.

  - DIDComm supports three message types that enable sophisticated interaction patterns: plaintext messages (for discovery and capability negotiation), signed messages (for non-repudiation), and encrypted messages (for confidential exchange). Higher-level protocols—called 'DIDComm protocols'—layer on top of these primitives to implement specific workflows: credential issuance (Aries RFC 0453), credential presentation (RFC 0454), and out-of-band invitation (RFC 0434). This separation of transport from application logic mirrors TCP/IP's layered architecture.

  - The practical significance of DIDComm extends beyond identity into agent-to-agent communication in AI and IoT contexts. Autonomous software agents equipped with DIDs can negotiate, authenticate, and exchange verifiable data without human intermediation, potentially underpinning machine-to-machine credentialing in robotics, supply chain, and agentic AI systems. Its integration with [[Verifiable Credentials]] makes it a foundational component of portable, privacy-preserving digital trust infrastructure.
