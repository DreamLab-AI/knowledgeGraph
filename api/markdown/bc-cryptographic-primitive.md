public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c6cb8725762dd0c5ee10aea05a640de55461676e5620dee2a71f70715a7bb9ea",
  "@type": "Page",
  "vc:slug": "bc-cryptographic-primitive",
  "title": "Cryptographic Primitive",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:bc-cryptographic-primitive",
  "label": "Cryptographic Primitive",
  "definition": "Taxonomy hub for the foundational cryptographic building blocks underpinning blockchain systems, including hash functions, digital signatures, asymmetric encryption, zero-knowledge proofs, and cryptographic commitments. These primitives collectively provide the security properties of integrity, authenticity, and privacy that make distributed ledger technology trustworthy.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:asymmetric-encryption", "label": "Asymmetric Encryption"},
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:random-number-generation", "label": "Random Number Generation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:homomorphic-encryption", "label": "Homomorphic Encryption"}
    ]
  },
  "qualityScore": 0.8,
  "quality": 0.8,
  "maturity": "established"
}
```
