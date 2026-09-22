public:: true

# Symmetric Key
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:symmetric-key", "@type":"Page", "title":"Symmetric Key", "vc:slug":"symmetric-key", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:symmetric-key",
  "@type":"Class",
  "label":"Symmetric Key",
  "definition":"A symmetric key is a single shared secret used by both the sender and receiver to encrypt and decrypt data in symmetric-key cryptography. Because the same key performs both operations, it must be kept secret and distributed securely between the communicating parties. Symmetric-key algorithms such as AES are fast and efficient for bulk data encryption, which makes them the workhorse of confidentiality in practice, often combined with asymmetric techniques that solve the problem of securely exchanging the shared key.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:cryptographic-key","label":"Cryptographic Key"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:block-cipher","label":"Block Cipher"},
      {"@id":"urn:ngm:class:stream-cipher","label":"Stream Cipher"}
    ],
    "partOf":[{"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}],
    "requires":[
      {"@id":"urn:ngm:class:key-management","label":"Key Management"},
      {"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:aes","label":"AES"},
      {"@id":"urn:ngm:class:cipher","label":"Cipher"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:encryption","label":"Encryption"},
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:tls","label":"TLS"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:public-key","label":"Public Key"},
      {"@id":"urn:ngm:class:asymmetric-encryption","label":"Asymmetric Encryption"}
    ],
    "dependsOn":[{"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:hash-function","label":"Hash Function"},
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A symmetric key is the single shared secret that both encrypts and decrypts data in [[Symmetric Encryption]]. As a kind of [[Cryptographic Key]] it powers fast bulk [[Encryption]] using algorithms like [[AES]], and it contrasts sharply with the [[Public Key]] approach where two different keys are used.
- ### Overview
- Symmetric cryptography is efficient because the same operation, run in reverse with the same key, recovers the plaintext. The cost is the key-distribution problem: the secret must reach both parties without interception, which is why symmetric keys are commonly established through [[Key Exchange]] protocols or wrapped by [[Asymmetric Encryption]].
- In real systems such as [[TLS]], asymmetric techniques negotiate a fresh symmetric session key, and that key then protects the bulk of the traffic, combining the security of public-key exchange with the speed of symmetric ciphers.
- ### Key aspects
- A shared secret of fixed length, e.g. 128 or 256 bits for [[AES]].
- Realisation through a [[Block Cipher]] or [[Stream Cipher]] mode of operation.
- Strong dependence on secure [[Key Management]] and rotation.
- The key-distribution problem resolved via [[Key Exchange]].
- Speed advantage over public-key operations for large payloads.
- ### Applications
- Bulk confidentiality of data in transit within [[TLS]] sessions.
- Encryption of data at rest on disks and databases.
- Session protection after a [[Key Exchange]] handshake.
- Authenticated encryption when combined with a [[Hash Function]].
- ### Relationships
- hasPart:: [[Block Cipher]]
- hasPart:: [[Stream Cipher]]
- partOf:: [[Symmetric Encryption]]
- requires:: [[Key Management]]
- requires:: [[Key Exchange]]
- implements:: [[AES]]
- implements:: [[Cipher]]
- enables:: [[Encryption]]
- enables:: [[Symmetric Encryption]]
- supports:: [[TLS]]
- supports:: [[Cryptography]]
- contrastsWith:: [[Public Key]]
- contrastsWith:: [[Asymmetric Encryption]]
- dependsOn:: [[Key Exchange]]
- relatedTo:: [[Hash Function]]
- relatedTo:: [[Digital Signature]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
