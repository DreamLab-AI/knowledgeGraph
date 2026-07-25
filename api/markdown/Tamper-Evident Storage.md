public:: true

# Tamper-Evident Storage

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:tamper-evident-storage",
  "@type": "Page",
  "title": "Tamper-Evident Storage",
  "vc:slug": "tamper-evident-storage",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tamper-evident-storage",
  "@type": "Class",
  "label": "Tamper-Evident Storage",
  "definition": "Tamper-evident storage is a data storage architecture designed so that any unauthorised modification of stored records leaves a detectable trace, typically achieved through cryptographic hash chaining, content addressing, or append-only write structures such as a Merkle DAG. It provides the storage-layer implementation of tamper evidence, ensuring that audit logs and other sensitive records can be verified for integrity after the fact rather than merely trusted. Tamper-evident storage is a foundational requirement for audit logs used in regulated or security-critical systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:tamper-evidence",
      "label": "Tamper Evidence"
    }
  ],
  "relations": {}
}
```
