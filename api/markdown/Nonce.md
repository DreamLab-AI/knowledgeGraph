public:: true

# Nonce
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91956993e21efa7f96be87d5ae064f7d1d2be3af7e9ef01f3a76e8526049b647",
  "@type": "Page",
  "vc:slug": "nonce",
  "title": "Nonce",
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
      "@id": "urn:visionflow:owl:class:cryptographic-domain",
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
      "vc:value": "BC-0034"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Nonce"
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
  "@id": "urn:ngm:class:nonce",
  "@type": "Class",
  "label": "Nonce",
  "definition": "A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners increment a 32-bit nonce in the block header repeatedly until the SHA-256 hash of the header falls below the current difficulty target, thereby expending computational work proportional to the difficulty. In communications protocols, nonces ensure that each session or message produces a unique ciphertext, preventing an attacker from replaying a previously captured message.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.70,
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:random-number-generator", "label": "Random Number Generator"},
      {"@id": "urn:ngm:class:entropy-source", "label": "Entropy Source"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"},
      {"@id": "urn:ngm:class:replay-attack-prevention", "label": "Replay Attack Prevention"},
      {"@id": "urn:ngm:class:challenge-response-authentication", "label": "Challenge-Response Authentication"},
      {"@id": "urn:ngm:class:authenticated-encryption", "label": "Authenticated Encryption"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"},
      {"@id": "urn:ngm:class:extranonce", "label": "ExtraNonce"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:counter-mode", "label": "Counter Mode"},
      {"@id": "urn:ngm:class:aes-gcm", "label": "AES-GCM"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:difficulty-target", "label": "Difficulty Target"},
      {"@id": "urn:ngm:class:merkle-root", "label": "Merkle Root"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:salt", "label": "Salt"},
      {"@id": "urn:ngm:class:initialization-vector", "label": "Initialization Vector"},
      {"@id": "urn:ngm:class:timestamp", "label": "Timestamp"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:salt", "label": "Salt"},
      {"@id": "urn:ngm:class:mining", "label": "Mining"},
      {"@id": "urn:ngm:class:block", "label": "Block"},
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"},
      {"@id": "urn:ngm:class:cryptographic-security", "label": "Cryptographic Security"},
      {"@id": "urn:ngm:class:session-token", "label": "Session Token"},
      {"@id": "urn:ngm:class:message-authentication-code", "label": "Message Authentication Code"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:freshness-guarantee", "label": "Freshness Guarantee"},
      {"@id": "urn:ngm:class:uniqueness-constraint", "label": "Uniqueness Constraint"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:tls-handshake", "label": "TLS Handshake"},
      {"@id": "urn:ngm:class:oauth-state-parameter", "label": "OAuth State Parameter"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cryptographic-nonce", "label": "Cryptographic Nonce"},
    {"@id": "urn:ngm:class:number-used-once", "label": "Number Used Once"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:nonce:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91956993e21efa7f96be87d5ae064f7d1d2be3af7e9ef01f3a76e8526049b647"
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
      "resolved": "urn:visionflow:owl:class:cryptographic-domain",
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
  A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners iterate the nonce in the block header until the resulting hash falls below the difficulty target. In communications protocols, nonces prevent ciphertext replay.

- ### Relationships
  The Nonce is the variable field that miners iterate in Proof Of Work, so it requires both Proof Of Work as its operational context and a Cryptographic Hash Function to evaluate each candidate. It is closely related to the Salt, which serves an analogous uniqueness function in password hashing but with a random rather than sequential generation strategy. The Nonce is embedded in the Block Header and is integral to the Mining process; monitoring the nonce space exhaustion is part of Bitcoin Mining difficulty adjustment. It enables Cryptographic Verification of block validity and is part of the Cryptography domain.

- ### Content

  In Bitcoin's block header, the nonce occupies a 32-bit field that miners increment from 0 to 2^32−1 searching for a header hash (double SHA-256) that starts with a sufficient number of leading zero bits as determined by the current difficulty target. A Bitcoin block header is only 80 bytes and is hashed approximately 10^18 times per second by the combined mining network, exhausting the 32-bit nonce space in microseconds. When nonce space is exhausted, miners modify the extraNonce field in the coinbase transaction—which changes the Merkle root in the header—effectively extending the search space beyond 32 bits.

  In symmetric encryption and authenticated encryption schemes (AES-GCM, ChaCha20-Poly1305), a nonce is a unique value—typically 96 or 128 bits—that must never be reused with the same key. Nonce reuse in GCM is catastrophic: an attacker who observes two ciphertexts encrypted under the same key-nonce pair can recover the authentication key and forge arbitrary messages. Protocols that risk nonce collision under random generation use deterministic nonce generation (e.g. counter-based) or nonce misuse-resistant modes such as AES-GCM-SIV.

  In challenge-response authentication, a verifier issues a fresh random nonce to a claimant, who must sign or hash it to prove possession of a private credential. The nonce's freshness prevents an adversary from replaying a previously recorded valid response to a different challenge session.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
