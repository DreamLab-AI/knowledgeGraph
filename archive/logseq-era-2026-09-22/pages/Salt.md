public:: true

# Salt
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3333098ba7b9190776e96ad8ee2451c6b0c0fd2079c32cbb20dc5d1d6b6fd3b",
  "@type": "Page",
  "vc:slug": "salt",
  "title": "Salt",
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
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0049"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Salt"
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
  "@id": "urn:ngm:class:salt",
  "@type": "Class",
  "label": "Salt",
  "definition": "A Salt is a randomly generated value appended or prepended to input data before it is processed by a cryptographic hash function, ensuring that two identical inputs produce distinct hash outputs. Salts defeat precomputed dictionary and rainbow-table attacks on hashed credentials and commitments by making each hash unique even when the underlying plaintext is shared. In blockchain contexts, salts appear in commitment schemes, zero-knowledge proofs, and password-based key derivation functions, where they guarantee that a hash reveals no information about the original value to an observer who does not know the salt.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"},
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"},
      {"@id": "urn:ngm:class:cryptographic-security", "label": "Cryptographic Security"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"},
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:salt:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d3333098ba7b9190776e96ad8ee2451c6b0c0fd2079c32cbb20dc5d1d6b6fd3b"
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
  A Salt is a randomly generated value appended or prepended to input data before processing by a cryptographic hash function, ensuring that identical inputs produce distinct hash outputs. Salts defeat precomputed dictionary and rainbow-table attacks on hashed credentials and commitments.

- ### Relationships
  Salt requires a Cryptographic Hash Function to be meaningful: the salt is concatenated with the input and the combined value is hashed. It is closely related to the Nonce, which similarly provides uniqueness but is typically sequential rather than random and serves replay-prevention rather than brute-force resistance. Salt enables Cryptographic Verification by making stored commitments non-invertible without the salt, and supports Differential Privacy by introducing controlled noise into anonymisation pipelines. It is a constituent of Cryptographic Protocols for key derivation (e.g. PBKDF2, scrypt, Argon2) and is part of the broader Cryptography domain. Cryptographic Commitment schemes such as hash-then-reveal depend on salted hashes to prevent commitment forgery.

- ### Content

  The threat model that motivates salt usage is straightforward. If a system stores unsalted password hashes, an attacker who obtains the hash database can compare each hash against a pre-built table of common password hashes (a rainbow table) and recover many passwords in seconds. By prepending a unique, randomly generated salt to each password before hashing, the attacker must compute a separate hash table for every distinct salt value, making precomputation attacks infeasible even for weak passwords.

  In blockchain commitment schemes, a party wishing to commit to a value v without revealing it broadcasts H(v ∥ salt), where H is a collision-resistant hash function and salt is a large random value kept secret. Later, the party reveals both v and salt; any observer can verify the commitment by recomputing the hash. Without the salt, an attacker who knows the space of possible values could hash all candidates and compare against the commitment, breaking the hiding property.

  Salt requirements vary by context. For password hashing, cryptographic standards such as NIST SP 800-63b recommend at least 32 bits of salt entropy generated by a cryptographically secure pseudorandom number generator, with each credential receiving a fresh, independent salt. For commitment schemes in zero-knowledge proof systems, 128–256 bits of salt are typical to maintain security commensurate with the hash function's output size. For key derivation, PBKDF2 specifies at least 128-bit random salts per the recommendations of RFC 8018.

  The term should be distinguished from a Nonce, which in proof-of-work mining is an incrementing counter iterated by miners seeking a valid block hash—a different primitive with a different threat model.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
