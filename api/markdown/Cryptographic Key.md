public:: true

# Cryptographic Key
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b894413392657ae5acc21d62b8c291bb544fbdfd1f6590857efe3bf95ae1f340",
  "@type": "Page",
  "vc:slug": "cryptographic-key",
  "title": "Cryptographic Key",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:https-csrc-nist-gov-glossary-term-cryptographic-key",
      "vc:label": "https://csrc.nist.gov/glossary/term/cryptographic_key"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Key"
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
  "@id": "urn:ngm:class:cryptographic-key",
  "@type": "Class",
  "label": "Cryptographic Key",
  "definition": "A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-key:b00a39e87803",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b894413392657ae5acc21d62b8c291bb544fbdfd1f6590857efe3bf95ae1f340"
  },
  "vc:resolutions": [
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:linked:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:linked:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://csrc.nist.gov/glossary/term/cryptographic_key]]",
      "resolved": "urn:visionflow:linked:https-csrc-nist-gov-glossary-term-cryptographic-key",
      "kind": "StubLink"
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
  - A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.

- ### Semantic Classification
  - owl-class:: cryptographic:CryptographicKey
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Private Key]], [[Key Management]]
  - requires:: [[Encryption]]
  - enables:: [[Digital Signature]], [[Public Key Infrastructure]]

- ### Content
  - A cryptographic key controls the behaviour of an algorithm so that the same operation produces different results for different keys. Symmetric schemes use one shared key for both encryption and decryption, while asymmetric schemes use a paired public and private key.
  - The security of a cryptographic system depends on the secrecy of private or symmetric keys and on sufficient key length to resist exhaustive search. Generation, storage, distribution and revocation of keys are handled by key management processes and supporting infrastructure.

- ### Provenance
  - sources:: [[https://csrc.nist.gov/glossary/term/cryptographic_key]]
  - migration-date:: 2026-05-29T00:00:00Z
