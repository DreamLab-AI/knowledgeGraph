public:: true

# Secure Messaging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:secure-messaging",
  "@type": "Page",
  "vc:slug": "secure-messaging",
  "title": "Secure Messaging",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:secure-messaging",
  "@type": "Class",
  "label": "Secure Messaging",
  "definition": "Secure messaging is the exchange of messages protected by cryptography so that only intended participants can read or authenticate them. It typically provides end-to-end encryption, forward secrecy, and integrity, often through ratcheting key-agreement protocols. It underpins privacy-preserving communication in consumer apps, enterprise systems, and decentralised networks.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptography-security-and-privacy", "label": "Cryptography, Security and Privacy"},
      {"@id": "urn:ngm:class:signal-protocol", "label": "Signal Protocol"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Secure messaging is cryptographically protected communication, a topic within [[Cryptography, Security and Privacy]] that is realised by protocols such as the [[Signal Protocol]].
- ### Content
  - End-to-end designs encrypt at the endpoints so intermediaries cannot read content, while double-ratchet key management provides forward secrecy and post-compromise security. Additional properties such as deniability, metadata minimisation, and verified safety numbers distinguish stronger implementations.
