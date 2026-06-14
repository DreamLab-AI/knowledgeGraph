public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f4ead10a1b8289cd4f5cbe3cd62fdefd80e4c4f56a0e04733c9aaa25432b93e",
  "@type": "Page",
  "vc:slug": "infra-security-and-identity",
  "title": "Security and Identity",
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
  "@id": "urn:ngm:class:infra-security-and-identity",
  "label": "Security and Identity",
  "definition": "A taxonomy hub encompassing the cryptographic primitives, authentication mechanisms, access control systems, and identity management frameworks that protect infrastructure components and verify principals. This category includes digital signatures, certificate authorities, encryption protocols, zero-trust architectures, and decentralised identity systems that collectively secure networked systems and digital interactions.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:digital-identity-management", "label": "Digital Identity Management"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"},
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:confidential-computing", "label": "Confidential Computing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"}
    ]
  },
  "qualityScore": 0.8,
  "maturity": "established"
}
```
