public:: true

# Pseudorandom Function
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pseudorandom-function", "@type":"Page", "title":"Pseudorandom Function", "vc:slug":"pseudorandom-function", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:pseudorandom-function",
  "@type":"Class",
  "label":"Pseudorandom Function",
  "definition":"A pseudorandom function (PRF) is a keyed family of functions whose outputs are computationally indistinguishable from those of a truly random function to any adversary lacking the key. PRFs are a foundational primitive in modern cryptography, providing the security guarantee that underlies message authentication codes, key derivation, and many symmetric protocols. Given the same key and input a PRF is deterministic, yet without the key its outputs reveal no exploitable structure. Closely related is the pseudorandom permutation, which adds invertibility and models block ciphers.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:message-authentication-code","label":"Message Authentication Code"},
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:hmac","label":"HMAC"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"},
      {"@id":"urn:ngm:class:random-number-generation","label":"Random Number Generation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:entropy","label":"Entropy"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:security","label":"Security"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"},
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"},
      {"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero-Knowledge Proof"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Pseudorandom Function]] (PRF) is a keyed function family whose outputs are computationally indistinguishable from a truly random function without knowledge of the key.
- PRFs are a core building block for the [[Message Authentication Code]] and the [[Key Derivation Function]], and they relate closely to the [[Cryptographic Hash Function]].
- They provide deterministic-yet-unpredictable behaviour that depends on [[Entropy]] in the secret key, supporting [[Authentication]] and confidentiality.
- ### Overview
- The PRF abstraction formalises the intuition that a well-keyed cryptographic primitive should leak nothing about its key from its outputs.
- Security is defined through an indistinguishability game: an adversary with oracle access cannot reliably tell a PRF apart from a random function within feasible computation.
- PRFs are typically instantiated from block ciphers or keyed hash constructions, and their security reduces to the hardness assumptions of those primitives.
- A pseudorandom permutation strengthens the PRF to be invertible, which is the formal model for a block cipher.
- ### Mechanisms
- A PRF takes a secret key and a variable input and produces a fixed-length output that appears random to anyone without the key.
- HMAC realises a PRF by nesting a [[Cryptographic Hash Function]] with the key, yielding a keyed primitive suitable for authentication.
- Key derivation functions use PRFs to stretch and diversify a master secret into multiple subkeys with independent security.
- The strength of a PRF rests on adequate key length and the absence of structural weaknesses in its construction.
- ### Applications
- Authenticating messages and verifying integrity through HMAC and other MAC schemes.
- Deriving session and subkeys within key derivation functions and key schedules.
- Generating deterministic but unpredictable values for nonces, tokens and challenge-response protocols.
- Underpinning symmetric encryption modes and stream generators.
- ### Relationships
- enables:: [[Message Authentication Code]]
- enables:: [[Key Derivation Function]]
- implements:: [[HMAC]]
- uses:: [[Cryptographic Hash Function]]
- uses:: [[Random Number Generation]]
- supports:: [[Symmetric Encryption]]
- supports:: [[Authentication]]
- requires:: [[Entropy]]
- partOf:: [[Security]]
- relatedTo:: [[Zero-Knowledge Proof]]
- contrastsWith:: [[Cryptographic Hash Function]]
- bridgesTo:: [[Key Derivation Function]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
