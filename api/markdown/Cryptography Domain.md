public:: true

# Cryptography Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9fe9e1ba741d227fd5ad0a94983d145cf0aa2f8751aaee24272d5fe8b613422b",
  "@type": "Page",
  "vc:slug": "cryptography-domain",
  "title": "Cryptography Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-key-cryptography",
      "vc:label": "Public-Key Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:symmetric-encryption",
      "vc:label": "Symmetric Encryption"
    },
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-primitive",
      "vc:label": "Cryptographic Primitive"
    },
    {
      "@id": "urn:visionflow:linked:random-number-generation",
      "vc:label": "Random Number Generation"
    },
    {
      "@id": "urn:visionflow:linked:data-confidentiality",
      "vc:label": "Data Confidentiality"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-computation",
      "vc:label": "Verifiable Computation"
    },
    {
      "@id": "urn:visionflow:linked:information-security-domain",
      "vc:label": "Information Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:privacy-domain",
      "vc:label": "Privacy Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-domain",
      "vc:label": "Cryptographic Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-18033",
      "vc:label": "ISO/IEC 18033"
    },
    {
      "@id": "urn:visionflow:linked:nist-fips-186",
      "vc:label": "NIST FIPS 186"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptography Domain"
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
  "@id": "urn:ngm:class:cryptography-domain",
  "@type": "Class",
  "label": "Cryptography Domain",
  "definition": "The Cryptography Domain classifies concepts concerned with the mathematical and computational techniques that secure information and authenticate parties. It covers primitives (encryption, hashing, signatures), protocols built from those primitives, and the assumptions that underpin their security. As a subject classification under the Cryptographic Domain, it scopes the theory and algorithms rather than the wider security operations or governance that consume them.",
  "domain": "cryptography",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-domain",
      "label": "Cryptographic Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-confidentiality",
        "label": "Data Confidentiality"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cryptography-domain:8294d092b9a6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9fe9e1ba741d227fd5ad0a94983d145cf0aa2f8751aaee24272d5fe8b613422b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Public-Key Cryptography]]",
      "resolved": "urn:visionflow:linked:public-key-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Symmetric Encryption]]",
      "resolved": "urn:visionflow:linked:symmetric-encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Primitive]]",
      "resolved": "urn:visionflow:linked:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Random Number Generation]]",
      "resolved": "urn:visionflow:linked:random-number-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Confidentiality]]",
      "resolved": "urn:visionflow:linked:data-confidentiality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Computation]]",
      "resolved": "urn:visionflow:linked:verifiable-computation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Information Security Domain]]",
      "resolved": "urn:visionflow:linked:information-security-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Domain]]",
      "resolved": "urn:visionflow:linked:privacy-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Domain]]",
      "resolved": "urn:visionflow:linked:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 18033]]",
      "resolved": "urn:visionflow:linked:iso-iec-18033",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST FIPS 186]]",
      "resolved": "urn:visionflow:linked:nist-fips-186",
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
  - The Cryptography Domain classifies concepts concerned with the mathematical and computational techniques that secure information and authenticate parties. It covers primitives (encryption, hashing, signatures), protocols built from those primitives, and the assumptions that underpin their security. As a subject classification under the Cryptographic Domain, it scopes the theory and algorithms rather than the wider security operations or governance that consume them.

- ### Semantic Classification
  - owl-class:: crypto:CryptographyDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Cryptographic Domain]]
  - bridges-to:: [[Information Security Domain]], [[Privacy Domain]], [[Blockchain Domain]]
  - has-part:: [[Public-Key Cryptography]], [[Hash Function]], [[Digital Signature]], [[Symmetric Encryption]], [[Zero-Knowledge Proof]]
  - requires:: [[Cryptographic Primitive]], [[Random Number Generation]]
  - enables:: [[Data Confidentiality]], [[Authentication]], [[Verifiable Computation]]

- ### Content
  - The Cryptography Domain organises the building blocks from which secure systems are assembled. Symmetric encryption and hash functions provide confidentiality and integrity, while public-key cryptography supports key exchange and the binding of identities to keys. Digital signatures allow a recipient to verify origin and detect tampering without sharing a secret. These primitives are selected and combined according to threat models and performance constraints.
  - Beyond classical primitives, the domain includes advanced constructions such as zero-knowledge proofs, threshold schemes, and homomorphic encryption that enable computation over protected data. Security rests on stated hardness assumptions, for example the difficulty of factoring or computing discrete logarithms, and on careful parameter selection. Standards bodies publish vetted algorithms and key lengths so that implementations can be assessed against a common baseline.
  - In knowledge-graph terms the Cryptography Domain sits beneath the Cryptographic Domain and feeds directly into blockchain, identity, and privacy work. Consensus mechanisms, addressing schemes, and tokenised assets all depend on the signatures and hashes catalogued here. Treating cryptography as a distinct subject axis keeps the underlying mathematics separable from the operational security and regulatory layers that apply it.

- ### Provenance
  - sources:: [[ISO/IEC 18033]], [[NIST FIPS 186]]
  - migration-date:: 2026-05-29T00:00:00Z
