public:: true

# Quantum Key Distribution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9114e6a5b85f5f691f49c3e9f8205bd05d843eae7d6fcb5f8d79b476ea00254d",
  "@type": "Page",
  "vc:slug": "quantum-key-distribution",
  "title": "Quantum Key Distribution",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:quantum-computing",
      "vc:label": "Quantum Computing"
    },
    {
      "@id": "urn:visionflow:linked:post-quantum-cryptography",
      "vc:label": "Post-Quantum Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Quantum Key Distribution"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quantum-key-distribution",
  "@type": "Class",
  "label": "Quantum Key Distribution",
  "definition": "A method of securely sharing cryptographic keys using the principles of quantum mechanics, such that any eavesdropping disturbs the transmission and can be detected. It provides key exchange whose security rests on physics rather than computational hardness.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:quantum-computation-paradigm",
      "label": "Quantum Computing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:quantum-computation-paradigm",
        "label": "Quantum Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:quantum-key-distribution:c5dfa24eeab6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9114e6a5b85f5f691f49c3e9f8205bd05d843eae7d6fcb5f8d79b476ea00254d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Quantum Computation Paradigm]]",
      "resolved": "urn:visionflow:linked:quantum-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Post-Quantum Cryptography]]",
      "resolved": "urn:visionflow:linked:post-quantum-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A method of securely sharing cryptographic keys using the principles of quantum mechanics, such that any eavesdropping disturbs the transmission and can be detected. It provides key exchange whose security rests on physics rather than computational hardness.

- ### Semantic Classification
  - owl-class:: cryptography:QuantumKeyDistribution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Quantum Computation Paradigm]]
  - bridges-to:: [[Cryptography]]
  - requires:: [[Quantum Computation Paradigm]]
  - enables:: [[Post-Quantum Cryptography]]

- ### Content
  - Quantum key distribution lets two parties produce a shared secret key by sending quantum states such as polarised photons. Because measuring an unknown quantum state disturbs it, an eavesdropper introduces detectable errors.
  - The BB84 protocol, proposed by Charles Bennett and Gilles Brassard in 1984, is the best-known scheme. The technique secures key exchange but still relies on classical channels for the remainder of communication.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
