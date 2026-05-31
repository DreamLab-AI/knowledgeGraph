public:: true
alias:: Public-Key Infrastructure, PublicKeyInfrastructure

# Public Key Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e48a6ab33dd8de744f97576eac42dfa9fcfa6603208671b1a7c082a260b04cfb",
  "@type": "Page",
  "vc:slug": "public-key-infrastructure",
  "title": "Public Key Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9207"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Public Key Infrastructure"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:public-key-infrastructure",
  "@type": "Class",
  "label": "Public Key Infrastructure",
  "definition": "Public Key Infrastructure (PKI) is the set of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption. PKI binds public keys to the identities of entities such as persons and organisations through a trust hierarchy of certificate authorities, enabling secure authentication, data integrity, and confidential communication across distributed systems. It underpins TLS/HTTPS, code signing, email encryption, and decentralised identity frameworks.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:public-key-infrastructure:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e48a6ab33dd8de744f97576eac42dfa9fcfa6603208671b1a7c082a260b04cfb"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Public Key Infrastructure (PKI) is the set of roles, policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption. PKI binds public keys to the identities of entities such as persons and organisations through a trust hierarchy of certificate authorities, enabling secure authentication, data integrity, and confidential communication across distributed systems. It underpins TLS/HTTPS, code signing, email encryption, and decentralised identity frameworks.

- ### Semantic Classification
  - owl-class:: blockchain/PublicKeyInfrastructure
  - owl-role:: Concept

- ### Relationships
  - requires:: [[Cryptographic Keys]]
  - requires:: [[Digital Signature]]
  - hasPart:: [[Certificate Authority]]
  - enables:: [[Digital Identity]]
  - enables:: [[Encryption]]
  - relatedTo:: [[Cybersecurity]]

- ### Content
  # PublicKeyInfrastructure
  Public Key Infrastructure (PKI) — digital certificates, encryption keys, trust chains
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
