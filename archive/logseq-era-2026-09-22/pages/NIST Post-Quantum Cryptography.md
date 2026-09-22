public:: true

# NIST Post-Quantum Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:699f60fccf09df833887c763c7c5eaaff5288e1aa9d8f03ac22f03f83a3775de",
  "@type": "Page",
  "vc:slug": "nist-post-quantum-cryptography",
  "title": "NIST Post-Quantum Cryptography",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NIST Post-Quantum Cryptography"
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
  "@id": "urn:ngm:class:nist-post-quantum-cryptography",
  "@type": "Class",
  "label": "NIST Post-Quantum Cryptography",
  "definition": "A reference to NIST's programme and standards for cryptographic algorithms designed to resist attacks by quantum computers. It includes standardised key-establishment and digital signature schemes.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-post-quantum-cryptography:3eb2a9ab56ff",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:699f60fccf09df833887c763c7c5eaaff5288e1aa9d8f03ac22f03f83a3775de"
  },
  "vc:resolutions": [
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - A reference to NIST's programme and standards for cryptographic algorithms designed to resist attacks by quantum computers. It includes standardised key-establishment and digital signature schemes.

- ### Semantic Classification
  - owl-class:: standards:NISTPostQuantumCryptography
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A reference to NIST's programme and standards for cryptographic algorithms designed to resist attacks by quantum computers. It includes standardised key-establishment and digital signature schemes.
  - Topic area: post-quantum cryptography.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
