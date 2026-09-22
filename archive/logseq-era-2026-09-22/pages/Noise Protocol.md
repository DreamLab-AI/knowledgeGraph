public:: true

# Noise Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:noise-protocol",
  "@type": "Page",
  "vc:slug": "noise-protocol",
  "title": "Noise Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:noise-protocol",
  "@type": "Class",
  "label": "Noise Protocol",
  "definition": "The Noise Protocol Framework is a toolkit for building secure cryptographic handshake protocols based on Diffie-Hellman key agreement. Rather than a single fixed protocol, it defines a set of composable handshake patterns from which designers select to obtain specific authentication, confidentiality, and forward-secrecy properties. Its simplicity and clear security properties have made it the basis for transport security in messaging and peer-to-peer systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:signal-protocol", "label": "Signal Protocol"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Noise Protocol is a framework for composing Diffie-Hellman-based secure handshakes. It is related to the [[Signal Protocol]] and is used to secure peer connections in a [[Blockchain Network]].
- ### Content
  - Handshake patterns (such as XX, IK, and NK) encode which keys are exchanged and authenticated, yielding a transport channel with chosen properties. Noise underpins WireGuard, the Lightning Network transport, and WhatsApp, demonstrating its appeal for systems that need analysable, low-overhead encrypted channels without the complexity of TLS.
