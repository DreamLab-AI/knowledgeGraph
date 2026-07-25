public:: true

# Password Hashing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:password-hashing", "@type":"Page", "title":"Password Hashing", "vc:slug":"password-hashing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:password-hashing",
  "@type":"Class",
  "label":"Password Hashing",
  "definition":"Password hashing is the practice of transforming user passwords into fixed-length irreversible digests before storage, so that a breach of the credential store does not directly reveal the underlying secrets. Secure schemes deliberately use slow, memory-hard functions combined with a unique per-user salt to defeat precomputation and brute-force attacks. Established algorithms such as Argon2, scrypt, bcrypt and PBKDF2 expose tunable cost parameters that can be raised as hardware improves. Password hashing is a specialised application of key derivation functions oriented towards verifying human-chosen secrets.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"},
      {"@id":"urn:ngm:class:pseudorandom-function","label":"Pseudorandom Function"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:authentication-protocol","label":"Authentication Protocol"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:entropy","label":"Entropy"},
      {"@id":"urn:ngm:class:random-number-generation","label":"Random Number Generation"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:security","label":"Security"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"},
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Password Hashing]] converts a user's password into an irreversible digest for storage, so that compromise of the credential database does not expose the plaintext secrets.
- It is a specialised form of [[Key Derivation Function]] built on a [[Cryptographic Hash Function]] and depends on per-user randomness from [[Random Number Generation]].
- Secure schemes are deliberately slow and memory-hard to make brute-force and precomputation attacks costly, supporting [[Authentication]].
- ### Overview
- Storing passwords in plaintext or under fast general-purpose hashes is dangerous because attackers can mount dictionary, brute-force and rainbow-table attacks after a breach.
- Password hashing instead applies slow, parameterised functions whose cost can be tuned upward over time to track advances in attacker hardware.
- A unique random salt is concatenated with each password before hashing, ensuring identical passwords produce distinct digests and defeating precomputed tables.
- Verification re-derives the digest from a submitted password and compares it, never recovering or storing the original secret.
- ### Mechanisms
- Salting introduces per-user entropy so that precomputation cannot be amortised across accounts.
- Work factors, memory cost and parallelism parameters make each guess expensive, throttling offline attacks.
- Memory-hard designs such as Argon2 and scrypt resist acceleration on GPUs and custom hardware by demanding large working memory.
- PBKDF2 and bcrypt remain widely deployed, iterating a pseudorandom function many times to raise the cost per guess.
- ### Applications
- Protecting stored credentials in web and enterprise authentication systems.
- Underpinning login flows and authentication protocols against offline cracking.
- Deriving encryption keys from human-memorable passphrases for at-rest data protection.
- Hardening single-sign-on and identity platforms against credential-stuffing fallout.
- ### Relationships
- implements:: [[Key Derivation Function]]
- uses:: [[Cryptographic Hash Function]]
- uses:: [[Pseudorandom Function]]
- supports:: [[Authentication]]
- supports:: [[Authentication Protocol]]
- enables:: [[Authentication]]
- requires:: [[Entropy]]
- requires:: [[Random Number Generation]]
- dependsOn:: [[Cryptographic Hash Function]]
- partOf:: [[Security]]
- relatedTo:: [[Symmetric Encryption]]
- contrastsWith:: [[Symmetric Encryption]]
- bridgesTo:: [[Authentication]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
