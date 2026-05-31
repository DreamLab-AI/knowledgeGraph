public:: true

# DIDComm v2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:didcomm-v2",
  "@type": "Page",
  "vc:slug": "didcomm-v2",
  "title": "DIDComm v2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:didcomm-v2",
  "@type": "Class",
  "label": "DIDComm v2",
  "definition": "DIDComm v2 is a transport-agnostic, end-to-end encrypted messaging protocol that lets two or more parties communicate securely using their Decentralized Identifiers. Messages are signed and encrypted with keys discovered from DID documents, providing confidentiality, authenticity, and mutual authentication independent of any central server or transport. It is the secure communication layer underpinning self-sovereign identity interactions such as verifiable credential exchange.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - DIDComm v2 is an encrypted, transport-independent messaging protocol keyed on DIDs, supporting [[Decentralized Identifiers]] interactions. It is a foundational protocol that implements secure exchange for [[Self-Sovereign Identity]] wallets and agents.
- ### Content
  - Messages use JWM/JWE envelopes with anoncrypt or authcrypt modes and can route through mediators for offline delivery. DIDComm v2 supports protocol-defined message types for credential issuance, presentation, and trust establishment, enabling interoperable agent-to-agent communication across vendors.
