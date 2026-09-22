public:: true

# Password
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
  "@type": "Page",
  "vc:slug": "password",
  "title": "Password",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:authentication", "vc:label": "Authentication"},
    {"@id": "urn:visionflow:linked:multi-factor-authentication", "vc:label": "Multi-Factor Authentication"},
    {"@id": "urn:visionflow:linked:cryptographic-key", "vc:label": "Cryptographic Key"},
    {"@id": "urn:visionflow:linked:hardware-security-key", "vc:label": "Hardware Security Key"},
    {"@id": "urn:visionflow:linked:encryption", "vc:label": "Encryption"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:password",
  "@type": "Class",
  "label": "Password",
  "definition": "A memorised secret string presented by a user to prove identity during authentication — the archetypal 'something you know' factor. Passwords are cheap to deploy but structurally weak: they are guessable, reusable across services, phishable, and exposed en masse by database breaches, which is why modern security practice hashes them with slow salted algorithms, pairs them with additional factors, and increasingly replaces them with cryptographic credentials such as passkeys and hardware security keys.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:authentication",
    "label": "Authentication"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:cryptographic-key", "label": "Cryptographic Key"},
      {"@id": "urn:ngm:class:hardware-security-key", "label": "Hardware Security Key"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A memorised secret string presented by a user to prove identity during authentication — the archetypal 'something you know' factor. Passwords are cheap to deploy but structurally weak: they are guessable, reusable across services, phishable, and exposed en masse by database breaches, which is why modern security practice hashes them with slow salted algorithms, pairs them with additional factors, and increasingly replaces them with cryptographic credentials such as passkeys and hardware security keys."

- ### Semantic Classification
  - owl-class:: security:Password
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Authentication]]
  - part-of:: [[Multi-Factor Authentication]]
  - contrasts-with:: [[Cryptographic Key]]
  - contrasts-with:: [[Hardware Security Key]]

- ### Content

  ## Definition

  A **password** is a shared secret between a user and a verifier: the user memorises a string, the service stores a derived record of it, and [[Authentication]] succeeds when the presented value matches. It is the oldest and still the most widely deployed digital credential, dating to MIT's CTSS time-sharing system in the early 1960s, and it persists because it requires no hardware, no enrolment ceremony, and no client-side state.

  Its weaknesses are equally structural. Because the secret must be human-memorable it is drawn from a low-entropy space, making it vulnerable to dictionary and brute-force attack; because it is symmetric, every login discloses the full secret to whatever endpoint receives it, making phishing and credential-stuffing industrial-scale problems; and because users reuse passwords, a single breached database compromises accounts everywhere. This is the core contrast with a [[Cryptographic Key]]: asymmetric credentials never transmit the secret, bind challenges to an origin, and carry hundreds of bits of entropy. Phishing-resistant authenticators such as the [[Hardware Security Key]] and platform passkeys (FIDO2/WebAuthn) exploit exactly that asymmetry.

  Contemporary guidance therefore treats passwords as a component to be hardened and hedged rather than trusted alone: stored only as salted, slow hashes (argon2id, scrypt, bcrypt); checked against known-breach corpora; free of forced periodic rotation and arbitrary composition rules (per NIST SP 800-63B and NCSC guidance, which favour length over complexity); and always combined with a second factor in [[Multi-Factor Authentication]]. Password managers shift the memorability constraint into software, enabling unique high-entropy secrets per service.

  ## Current Landscape

  - **Policy is now final**: NIST published SP 800-63B-4 as a final standard on 31 July 2025, superseding the 2020 SP 800-63B in its entirety; it mandates rate-limiting and breach-list screening, and drops both forced periodic rotation and composition rules in favour of length.
  - **Passkeys standards-backed at AAL2**: NIST's 2024 supplement formally authorised syncable passkeys (cloud-backed FIDO2 credentials) at Authentication Assurance Level 2, while device-bound FIDO2 keys satisfy the phishing-resistant AAL3; Apple, Google and Microsoft ship passkeys at the platform level.
  - **FIDO2/WebAuthn as the reference for phishing resistance**: SP 800-63B-4 cites WebAuthn's verifier-name binding (origin binding) as the mechanism that defeats phishing, formalising the asymmetric-credential advantage over shared secrets.
  - **Storage practice**: argon2id is the current OWASP first choice for password hashing; unsalted fast hashes (MD5, SHA-1) are considered negligent, and breached-credential corpora in the billions continue to feed automated credential-stuffing.
  - **Enterprise reality**: passwords persist in legacy protocols (RADIUS, LDAP binds, service accounts), so vaulting and rotation of machine credentials remain necessary even in "passwordless" programmes.

  - **Sources**:
    - https://csrc.nist.gov/pubs/sp/800/63/b/4/final
    - https://pages.nist.gov/800-63-4/sp800-63b.html
