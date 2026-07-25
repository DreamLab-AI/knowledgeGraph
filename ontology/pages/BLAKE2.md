public:: true

# BLAKE2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fd3ca58621fe1804c6e79f179c4420714f2c490374382787a5af61dc7c299935",
  "@type": "Page",
  "vc:slug": "blake2",
  "title": "BLAKE2",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-primitive",
      "vc:label": "CryptographicPrimitive"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0043"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "BLAKE2"
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
  "@id": "urn:ngm:class:blake2",
  "@type": "Class",
  "label": "BLAKE2",
  "definition": "BLAKE2 is a high-performance cryptographic hash function designed as a faster, simpler alternative to SHA-2 and SHA-3 while preserving equivalent security guarantees. Introduced in 2012 by Jean-Philippe Aumasson, Samuel Neves, Zooko Wilcox-O'Hearn, and Christian Winnerlein, it produces digests of up to 512 bits (BLAKE2b) or 256 bits (BLAKE2s) and is widely adopted in blockchain systems, password-hashing schemes, and data integrity verification due to its speed advantage over SHA-256 on modern 64-bit processors. Its resistance to length-extension attacks and configurability—including personalisation, salting, and variable digest length—make it a versatile drop-in for many cryptographic protocol requirements.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:digital-signatures", "label": "Digital Signatures"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"},
      {"@id": "urn:ngm:class:blockchain-infrastructure", "label": "Blockchain Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:blake2:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fd3ca58621fe1804c6e79f179c4420714f2c490374382787a5af61dc7c299935"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicPrimitive]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
      "kind": "ResolvedLink"
    }
  ],
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
  BLAKE2 is a high-performance cryptographic hash function designed as a faster, simpler alternative to SHA-2 and SHA-3 while preserving equivalent security guarantees. Introduced in 2012 by Jean-Philippe Aumasson, Samuel Neves, Zooko Wilcox-O'Hearn, and Christian Winnerlein, it produces digests of up to 512 bits (BLAKE2b) or 256 bits (BLAKE2s) and is widely adopted in blockchain systems, password-hashing schemes, and data integrity verification due to its speed advantage over SHA-256 on modern 64-bit processors. Its resistance to length-extension attacks and configurability—including personalisation, salting, and variable digest length—make it a versatile drop-in for many cryptographic protocol requirements.

- ### Semantic Classification
  - owl-class:: blockchain:BLAKE2
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]
  - relatedTo:: [[Cryptographic Hash Function]], [[SHA-256]], [[Cryptographic Hash]], [[Merkle Tree]], [[Digital Signatures]]
  - enables:: [[Data Integrity]], [[Blockchain Infrastructure]]
  - uses:: [[Hash Function]]
  - partOf:: [[CryptographicPrimitive]]
  - contrastsWith:: [[SHA-256]]

- ### Content

  ## Class Declaration
  Declaration(Class(:BLAKE2))

  ## Subclass Relationships
  SubClassOf(:BLAKE2 :CryptographicPrimitive)
  SubClassOf(:BLAKE2 :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BLAKE2
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BLAKE2
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BLAKE2 "BC-0043"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BLAKE2 "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BLAKE2 "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BLAKE2 :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BLAKE2 :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BLAKE2 "BLAKE2"@en)
  AnnotationAssertion(rdfs:comment :BLAKE2
    "Cryptographic hash function"@en)
  AnnotationAssertion(dct:description :BLAKE2
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BLAKE2 "BC-0043")
  AnnotationAssertion(:priority :BLAKE2 "1"^^xsd:integer)
  AnnotationAssertion(:category :BLAKE2 "cryptographic-foundations"@en)
  )
      ```

  - ## About BLAKE2

  BLAKE2 is built on the BLAKE hash function that was a finalist in the NIST SHA-3 competition (won by Keccak), but BLAKE2 is a distinct redesign prioritising speed and simplicity over competition compliance. The two principal variants are BLAKE2b, optimised for 64-bit platforms and producing digests up to 512 bits, and BLAKE2s, optimised for 8-to-32-bit platforms and producing digests up to 256 bits. A parallel variant, BLAKE2bp/BLAKE2sp, supports multi-core parallelism for hashing large inputs across multiple CPU threads.

  Performance benchmarks consistently place BLAKE2b faster than MD5, SHA-1, SHA-256, and SHA-512 on x86-64 hardware without hardware acceleration. On a modern Intel Core processor BLAKE2b achieves roughly 1 GB/s throughput per core compared to approximately 500 MB/s for SHA-256 without AES-NI assistance. This speed advantage makes BLAKE2 attractive in blockchain contexts where hash computation is on the critical path—for example, in Merkle tree construction over transaction batches, content-addressed storage (used by IPFS and Zcash), and password hashing in combination with a memory-hard function.

  Zcash adopted BLAKE2b as its primary hash function for commitments and nullifiers, citing its speed and the absence of length-extension vulnerabilities that affect SHA-256 without HMAC wrapping. The Decred and Nano (formerly RaiBlocks) cryptocurrencies also employ BLAKE2. Beyond blockchain, BLAKE2 is used by libsodium, WireGuard, Cargo (Rust package manager), and numerous file integrity tools.

  Unlike SHA-3/Keccak, BLAKE2 is not an ISO standard, though it is specified in RFC 7693 published by the IETF in 2015. The absence of formal standardisation has not significantly impeded adoption, but means that compliance-sensitive deployments—such as those requiring FIPS 140 certification—must use SHA-2 or SHA-3 variants instead.
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
