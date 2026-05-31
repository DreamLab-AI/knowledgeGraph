public:: true

# Quantum Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quantum-cryptography",
  "@type": "Page",
  "vc:slug": "quantum-cryptography",
  "title": "Quantum Cryptography",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quantum-cryptography",
  "@type": "Class",
  "label": "Quantum Cryptography",
  "definition": "Quantum cryptography uses principles of quantum mechanics, such as the no-cloning theorem and measurement disturbance, to perform cryptographic tasks whose security rests on physical law rather than computational hardness. Its best-known application, quantum key distribution, lets two parties establish a shared secret with detectable eavesdropping. It is distinct from post-quantum cryptography, which is classical algorithms resistant to quantum attack.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:quantum-network-node", "label": "Quantum Network Node"},
      {"@id": "urn:ngm:class:cryptography-security-and-privacy", "label": "Cryptography Security and Privacy"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Quantum cryptography secures communication using quantum-mechanical properties, most notably quantum key distribution. It is enabled by a [[Quantum Network Node]] and is closely related to broader [[Cryptography Security and Privacy]] practice.
- ### Content
  - QKD protocols such as BB84 detect interception because measuring a quantum state perturbs it. Practical deployment requires specialised photonic hardware, trusted nodes or quantum repeaters over distance, and integration with classical authentication. It complements rather than replaces classical and post-quantum schemes used for bulk encryption and integrity.
