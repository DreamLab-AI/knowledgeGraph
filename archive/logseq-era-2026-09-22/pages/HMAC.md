public:: true

# HMAC

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hmac", "@type":"Page", "title":"HMAC", "vc:slug":"hmac", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hmac",
  "@type":"Class",
  "label":"HMAC",
  "definition":"HMAC (hash-based message authentication code) is a construction that combines a cryptographic hash function with a secret key to produce a fixed-length tag verifying both the integrity and the authenticity of a message. It applies the underlying hash twice with key-derived inner and outer padding, providing security that does not depend on the hash being collision-resistant in the same way a plain hash would. HMAC is widely used to authenticate API requests, tokens, and protocol messages.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "uses":[{"@id":"urn:ngm:class:sha-256","label":"SHA-256"}],
    "requires":[{"@id":"urn:ngm:class:sha-256","label":"SHA-256"}],
    "dependsOn":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
    "enables":[{"@id":"urn:ngm:class:security","label":"Security"}],
    "supports":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:tls","label":"TLS"}
    ],
    "hasPart":[{"@id":"urn:ngm:class:sha-256","label":"SHA-256"}],
    "bridgesTo":[{"@id":"urn:ngm:class:token","label":"Token"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "contrastsWith":[{"@id":"urn:ngm:class:authorization","label":"Authorization"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:sha-256","label":"SHA-256"},
      {"@id":"urn:ngm:class:tls","label":"TLS"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[HMAC]] is a keyed message authentication code built on a [[Cryptography]] hash function such as [[SHA-256]]. It implements message [[Authentication]] and integrity, supports protocols like [[TLS]], and underpins signing of a [[Token]] by binding a secret key to message content.
- ### Overview
- HMAC combines a secret key with a cryptographic hash to yield a tag that proves a message was produced by a party holding the key and was not altered.
- The construction hashes the message together with key-derived inner and outer pad values, which strengthens it against certain attacks on the bare hash.
- Verification recomputes the tag from the received message and key and compares it in constant time to the supplied tag.
- HMAC can be instantiated with different hash functions, with HMAC-SHA-256 being a common choice.
- ### Mechanisms
- Keying: a shared secret key parameterises the computation.
- Double hashing: inner and outer applications of the hash with padded keys.
- Tag generation: output is a fixed-length authentication tag.
- Constant-time verification: comparison avoids timing side channels.
- ### Applications
- Authenticating API requests by signing payloads or headers.
- Signing and verifying tokens such as JWTs using the HS family of algorithms.
- Message integrity within TLS and other transport security protocols.
- Deriving and verifying webhooks and inter-service messages.
- ### Relationships
- subClassOf:: [[Cryptography]]
- implements:: [[Authentication]]
- uses:: [[SHA-256]]
- requires:: [[SHA-256]]
- dependsOn:: [[Cryptography]]
- enables:: [[Security]]
- supports:: [[TLS]]
- hasPart:: [[SHA-256]]
- bridgesTo:: [[Token]]
- contrastsWith:: [[Authorization]]
- relatedTo:: [[TLS]]
- relatedTo:: [[Authentication]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
