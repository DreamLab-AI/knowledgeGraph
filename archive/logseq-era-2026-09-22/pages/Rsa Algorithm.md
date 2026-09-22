public:: true

# Rsa Algorithm

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:rsa-algorithm", "@type":"Page", "title":"Rsa Algorithm", "vc:slug":"rsa-algorithm", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:rsa-algorithm",
  "@type":"Class",
  "label":"Rsa Algorithm",
  "definition":"The RSA algorithm is a public-key cryptosystem whose security rests on the practical difficulty of factoring the product of two large prime numbers. A public key derived from this product encrypts data or verifies signatures, while the corresponding private key, recoverable only with knowledge of the prime factors, decrypts or signs. RSA was among the first practical asymmetric schemes and remains widely used for key exchange, digital signatures, and certificate-based authentication.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"}],
    "implements":[{"@id":"urn:ngm:class:asymmetric-encryption","label":"Asymmetric Encryption"}],
    "uses":[{"@id":"urn:ngm:class:one-way-function","label":"One Way Function"},{"@id":"urn:ngm:class:modular-arithmetic","label":"Modular Arithmetic"}],
    "dependsOn":[{"@id":"urn:ngm:class:trapdoor-function","label":"Trapdoor Function"},{"@id":"urn:ngm:class:one-way-function","label":"One Way Function"}],
    "requires":[{"@id":"urn:ngm:class:key-pair","label":"Key Pair"}],
    "enables":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},{"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}],
    "supports":[{"@id":"urn:ngm:class:ssl-tls","label":"SSL/TLS"}],
    "relatedTo":[{"@id":"urn:ngm:class:public-key","label":"Public Key"},{"@id":"urn:ngm:class:private-key","label":"Private Key"}],
    "contrastsWith":[{"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cryptographic-algorithm","label":"Cryptographic Algorithm"}],
    "hasPart":[{"@id":"urn:ngm:class:key-pair","label":"Key Pair"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The RSA algorithm is a [[Public-Key Cryptography]] scheme whose security rests on the difficulty of factoring the product of two large primes.
- It implements [[Asymmetric Encryption]] using a [[Key Pair]]: a public key to encrypt or verify and a private key to decrypt or sign.
- RSA relies on a [[Trapdoor Function]] built from [[Modular Arithmetic]] and is the basis for much [[Digital Signature]] and certificate-based authentication.
- ### Overview
- RSA, named after Rivest, Shamir, and Adleman, was one of the first practical public-key cryptosystems.
- Key generation multiplies two large secret primes to form a modulus and derives matched public and private exponents from it.
- Encryption and verification use the public exponent; decryption and signing use the private exponent, which only the holder of the prime factors can compute.
- The system is a [[One Way Function]] with a trapdoor: easy to compute forwards, infeasible to invert without the secret.
- Security depends on sufficiently large keys, since advances in factoring and the prospect of quantum computers erode shorter key strengths.
- ### Mechanisms
- Key generation — choosing primes, forming the modulus, and deriving exponents.
- Modular exponentiation — the core operation for encryption, decryption, and signing.
- Padding schemes — OAEP and PSS that prevent structural attacks on raw RSA.
- Trapdoor structure — factorisation difficulty makes inversion infeasible without the private key.
- Key size — larger moduli trade performance for stronger security margins.
- ### Applications
- Establishing session keys during [[SSL/TLS]] handshakes.
- Signing software, documents, and certificates for authenticity.
- Authenticating identities in public-key infrastructure.
- Encrypting small payloads such as symmetric keys for hybrid encryption.
- ### Relationships
- partOf:: [[Public-Key Cryptography]]
- implements:: [[Asymmetric Encryption]]
- uses:: [[One Way Function]]
- uses:: [[Modular Arithmetic]]
- dependsOn:: [[Trapdoor Function]]
- dependsOn:: [[One Way Function]]
- requires:: [[Key Pair]]
- enables:: [[Digital Signature]]
- enables:: [[Key Exchange]]
- supports:: [[SSL/TLS]]
- relatedTo:: [[Public Key]]
- relatedTo:: [[Private Key]]
- contrastsWith:: [[Symmetric Encryption]]
- bridgesTo:: [[Cryptographic Algorithm]]
- hasPart:: [[Key Pair]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
