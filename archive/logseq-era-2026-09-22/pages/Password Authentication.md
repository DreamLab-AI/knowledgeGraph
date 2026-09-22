public:: true

# Password Authentication

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:password-authentication", "@type":"Page", "title":"Password Authentication", "vc:slug":"password-authentication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:password-authentication",
  "@type":"Class",
  "label":"Password Authentication",
  "definition":"Password authentication is a knowledge-based method of verifying a user's identity by checking a secret string they supply against a stored credential. The stored credential is typically a salted cryptographic hash rather than the plaintext password, so that the secret is never recovered even if the store is compromised. As a single-factor mechanism it is widely deployed but vulnerable to guessing, reuse, phishing, and credential-stuffing attacks, motivating stronger or supplementary methods.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"},{"@id":"urn:ngm:class:salt","label":"Salt"}],
    "requires":[{"@id":"urn:ngm:class:identity-management","label":"Identity Management"},{"@id":"urn:ngm:class:session-management","label":"Session Management"}],
    "enables":[{"@id":"urn:ngm:class:access-control","label":"Access Control"},{"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}],
    "supports":[{"@id":"urn:ngm:class:single-sign-on","label":"Single Sign-On"}],
    "contrastsWith":[{"@id":"urn:ngm:class:biometric-authentication","label":"Biometric Authentication"},{"@id":"urn:ngm:class:multi-factor-authentication","label":"Multi-Factor Authentication"}],
    "dependsOn":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
    "relatedTo":[{"@id":"urn:ngm:class:privacy","label":"Privacy"},{"@id":"urn:ngm:class:data-protection","label":"Data Protection"},{"@id":"urn:ngm:class:security","label":"Security"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Password Authentication]] verifies identity by comparing a user-supplied secret against a stored credential, a form of [[Authentication]].
  - The stored value is a salted hash produced with [[Cryptography]] and a [[Salt]], never the plaintext.
  - It is the canonical knowledge-based factor and contrasts with [[Biometric Authentication]].
  - When supplemented it becomes one factor within [[Multi-Factor Authentication]].
- ### Overview
  - A user registers a password, which the system transforms into a salted, slow cryptographic hash for storage.
  - At login, the supplied password is hashed with the same parameters and compared to the stored digest.
  - On success the system establishes an authenticated session via [[Session Management]].
  - Because it relies on a memorised secret, security depends heavily on password strength, storage hygiene, and rate limiting.
- ### Mechanisms
  - Password hashing with adaptive functions such as bcrypt, scrypt, Argon2, or PBKDF2.
  - Per-user random salts to defeat precomputed (rainbow table) attacks.
  - Work-factor tuning to slow brute-force guessing.
  - Rate limiting, lockouts, and breach-list checks to resist [[credential]]-stuffing.
- ### Key aspects
  - Knowledge factor: something the user knows, distinct from possession or inherence factors.
  - Storage: never store plaintext; store only salted, peppered hashes.
  - Attack surface: phishing, reuse, weak passwords, and database leaks.
  - Usability: balance memorability against entropy, often aided by password managers.
- ### Applications
  - Primary login for web, mobile, and desktop applications.
  - First factor combined with a token or biometric in [[Multi-Factor Authentication]].
  - Credential basis for federated [[Single Sign-On]] flows.
  - Underpins [[Access Control]] decisions once identity is established.
- ### Relationships
  - uses:: [[Cryptography]]
  - uses:: [[Salt]]
  - requires:: [[Identity Management]]
  - requires:: [[Session Management]]
  - enables:: [[Access Control]]
  - enables:: [[Identity Verification]]
  - supports:: [[Single Sign-On]]
  - contrastsWith:: [[Biometric Authentication]]
  - contrastsWith:: [[Multi-Factor Authentication]]
  - dependsOn:: [[Cryptography]]
  - relatedTo:: [[Privacy]]
  - relatedTo:: [[Data Protection]]
  - relatedTo:: [[Security]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
