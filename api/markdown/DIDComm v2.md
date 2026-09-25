DIDComm v2 is a transport-agnostic, end-to-end encrypted messaging protocol that lets two or more parties communicate securely using their Decentralized Identifiers. Messages are signed and encrypted with keys discovered from DID documents, providing confidentiality, authenticity, and mutual authentication independent of any central server or transport. It is the secure communication layer underpinning self-sovereign identity interactions such as verifiable credential exchange.

### Content

- Messages use JWM/JWE envelopes with anoncrypt or authcrypt modes and can route through mediators for offline delivery. DIDComm v2 supports protocol-defined message types for credential issuance, presentation, and trust establishment, enabling interoperable agent-to-agent communication across vendors.

