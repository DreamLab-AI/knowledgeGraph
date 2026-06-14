public:: true

# Key Exchange
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0af3401543579535326e5922de9eacef629bc040e86691c0d15b15d999ea99e",
  "@type": "Page",
  "vc:slug": "key-exchange",
  "title": "Key Exchange",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:symmetric-encryption",
      "vc:label": "Symmetric Encryption"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-protocol",
      "vc:label": "Cryptographic Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Key Exchange"
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
  "@id": "urn:ngm:class:key-exchange",
  "@type": "Class",
  "label": "Key Exchange",
  "definition": "Key exchange is a cryptographic procedure by which two parties establish a shared secret over an insecure channel for use in subsequent encrypted communication.",
  "domain": "security",
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
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
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
  "@id": "urn:visionflow:annotation:link-resolutions:key-exchange:7206a7eaf387",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0af3401543579535326e5922de9eacef629bc040e86691c0d15b15d999ea99e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Symmetric Encryption]]",
      "resolved": "urn:visionflow:linked:symmetric-encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Protocol]]",
      "resolved": "urn:visionflow:linked:cryptographic-protocol",
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
  - Key exchange is a cryptographic procedure by which two parties establish a shared secret over an insecure channel for use in subsequent encrypted communication.

- ### Semantic Classification
  - owl-class:: cryptography:KeyExchange
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Cryptographic Protocol]]
  - requires:: [[Cryptography]]
  - enables:: [[Symmetric Encryption]]

- ### Content
  - Key exchange protocols allow two parties to agree on a shared key without transmitting the key itself. The Diffie-Hellman protocol does this using modular exponentiation, and elliptic curve variants achieve the same with smaller keys.
  - The agreed key is typically used for symmetric encryption of the session. Authenticated key exchange combines this with identity verification to resist interception by an active attacker.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
