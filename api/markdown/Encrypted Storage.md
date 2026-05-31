public:: true

# Encrypted Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:encrypted-storage",
  "@type": "Page",
  "vc:slug": "encrypted-storage",
  "title": "Encrypted Storage",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:encrypted-storage",
  "@type": "Class",
  "label": "Encrypted Storage",
  "definition": "Encrypted Storage is the protection of data at rest by transforming it with cryptographic algorithms so that it is unreadable without the corresponding decryption keys. It can operate at the disk, filesystem, database, or object level, and is essential for confidentiality of sensitive data such as biometric templates. Proper key management, including secure key generation, rotation, and access control, is critical to its effectiveness.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:biometric-binding-mechanism", "label": "Biometric Binding Mechanism"}, {"@id": "urn:ngm:class:etsi-domain-data-management-security", "label": "ETSI Domain Data Management Security"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Encrypted Storage protects data at rest by encrypting it so that it is unreadable without the decryption keys. It is required by a [[Biometric Binding Mechanism]] and is a component of [[ETSI Domain Data Management Security]].
- ### Content
  - Encryption may be applied at disk, filesystem, database, or application level, often using AES with keys held in hardware security modules or key-management services. The security of stored data depends as much on key lifecycle management and access control as on the cipher strength itself.
