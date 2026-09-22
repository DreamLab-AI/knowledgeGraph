public:: true

# Encryption Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:encryption-protocol",
  "@type": "Page",
  "vc:slug": "encryption-protocol",
  "title": "Encryption Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:encryption-protocol",
  "@type": "Class",
  "label": "Encryption Protocol",
  "definition": "An Encryption Protocol is a defined set of rules and message exchanges that uses cryptographic algorithms to establish keys and protect the confidentiality and integrity of data in transit or at rest. It specifies handshakes, cipher negotiation, key exchange, and authentication so that interoperating parties can communicate securely. TLS 1.3 is a widely deployed example securing internet traffic.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:tls-1-3", "label": "TLS 1.3"}, {"@id": "urn:ngm:class:cybersecurity-standard", "label": "Cybersecurity Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Encryption Protocol is a rule set and message flow that uses cryptography to establish keys and protect data confidentiality and integrity. [[TLS 1.3]] is a leading example, and such protocols form part of any [[Cybersecurity Standard]].
- ### Content
  - Protocols define the handshake, cipher-suite negotiation, key-exchange method, and authentication needed for interoperable secure sessions. Modern designs favour forward secrecy, authenticated encryption, and reduced round trips, as exemplified by TLS 1.3's streamlined, more secure handshake.
