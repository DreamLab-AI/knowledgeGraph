public:: true

# Hash Functions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ccb14b95b19ee307e220c674de40d11ab79866f6e02c85ee3cd9bb639f0ad551",
  "@type": "Page",
  "vc:slug": "hash-functions",
  "title": "Hash Functions",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:merkle-tree",
      "vc:label": "Merkle Tree"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:https-csrc-nist-gov-projects-hash-functions",
      "vc:label": "https://csrc.nist.gov/projects/hash-functions"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-cryptographic-hash-function",
      "vc:label": "https://en.wikipedia.org/wiki/Cryptographic_hash_function"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hash Functions"
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
  "@id": "urn:ngm:class:hash-functions",
  "@type": "Class",
  "label": "Hash Functions",
  "definition": "Hash functions are algorithms that map data of arbitrary size to a fixed-size output, with cryptographic hash functions designed to be one-way and collision resistant. They are central to security and blockchains.",
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
    "enables": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hash-functions:949aaccc30b0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ccb14b95b19ee307e220c674de40d11ab79866f6e02c85ee3cd9bb639f0ad551"
  },
  "vc:resolutions": [
    {
      "raw": "[[Merkle Tree]]",
      "resolved": "urn:visionflow:linked:merkle-tree",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://csrc.nist.gov/projects/hash-functions]]",
      "resolved": "urn:visionflow:linked:https-csrc-nist-gov-projects-hash-functions",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Cryptographic_hash_function]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-cryptographic-hash-function",
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
  - Hash functions are algorithms that map data of arbitrary size to a fixed-size output, with cryptographic hash functions designed to be one-way and collision resistant. They are central to security and blockchains.

- ### Semantic Classification
  - owl-class:: general:HashFunctions
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Hash Function]]
  - enables:: [[Merkle Tree]], [[Transaction Validation]]

- ### Content
  - A hash function takes an input of any length and produces a fixed-length digest. Cryptographic hash functions are designed so that it is infeasible to reverse the output or to find two inputs with the same digest.
  - Hash functions underpin digital signatures, data integrity checks, password storage, and the linking of blocks in a blockchain. The SHA-256 function, for example, is used in Bitcoin's proof of work and block structure.

- ### Provenance
  - sources:: [[https://csrc.nist.gov/projects/hash-functions]], [[https://en.wikipedia.org/wiki/Cryptographic_hash_function]]
  - migration-date:: 2026-05-29T00:00:00Z
