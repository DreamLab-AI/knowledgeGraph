public:: true

# Diffie-Hellman Key Exchange
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:diffie-hellman-key-exchange", "@type":"Page", "title":"Diffie-Hellman Key Exchange", "vc:slug":"diffie-hellman-key-exchange", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:diffie-hellman-key-exchange",
  "@type":"Class",
  "label":"Diffie-Hellman Key Exchange",
  "definition":"Diffie-Hellman Key Exchange is a cryptographic method by which two parties establish a shared secret over an insecure channel without ever transmitting the secret itself. Each party combines its private value with the other party's public value such that both arrive at the same key, which an eavesdropper cannot feasibly compute. Its security rests on the difficulty of the discrete logarithm problem, with elliptic-curve variants offering equivalent strength at smaller key sizes. It underpins forward-secret session establishment in protocols such as Transport Layer Security.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:public-key","label":"Public Key"},
      {"@id":"urn:ngm:class:private-key","label":"Private Key"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:key-agreement","label":"Key Agreement"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:discrete-logarithm-problem","label":"Discrete Logarithm Problem"},
      {"@id":"urn:ngm:class:modular-arithmetic","label":"Modular Arithmetic"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:perfect-forward-secrecy","label":"Perfect Forward Secrecy"},
      {"@id":"urn:ngm:class:secure-channel","label":"Secure Channel"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:transport-layer-security","label":"Transport Layer Security"},
      {"@id":"urn:ngm:class:tls-handshake","label":"TLS Handshake"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:asymmetric-cryptography","label":"Asymmetric Cryptography"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:elliptic-curve-cryptography","label":"Elliptic Curve Cryptography"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:dh-key-exchange","label":"DH Key Exchange"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Diffie-Hellman Key Exchange lets two parties derive a shared secret over an insecure channel using [[Public Key]] and [[Private Key]] values, a foundational form of [[Key Exchange]] grounded in the [[Discrete Logarithm Problem]] within [[Cryptography]].

- ### Overview
  - Introduced in 1976, Diffie-Hellman was the first published method for establishing a shared key without a prior secure channel, founding the field of public-key cryptography. Each party publishes a value derived from a private exponent and a common base, then combines its own private value with the peer's public value.
  - The result is a key both parties share but no eavesdropper can compute, because reversing the operation requires solving the discrete logarithm problem, which is computationally infeasible at adequate parameter sizes.

- ### Mechanisms
  - The parties agree on public parameters: a large prime modulus and a generator.
  - Each party chooses a secret exponent and transmits the generator raised to that exponent modulo the prime.
  - Each party raises the received value to its own secret exponent, and both arrive at the same shared key.
  - Ephemeral variants generate fresh exponents per session, providing perfect forward secrecy so past sessions stay secure even if long-term keys are later compromised.

- ### Applications
  - Session key establishment in Transport Layer Security and SSH.
  - VPN and IPsec key negotiation.
  - Elliptic-curve Diffie-Hellman in modern protocols for compact, efficient agreement.
  - Secure messaging protocols providing forward secrecy.

- ### Relationships
  - subClassOf:: [[Key Exchange]]
  - hasPart:: [[Public Key]]
  - hasPart:: [[Private Key]]
  - implements:: [[Key Agreement]]
  - uses:: [[Discrete Logarithm Problem]]
  - uses:: [[Modular Arithmetic]]
  - enables:: [[Perfect Forward Secrecy]]
  - enables:: [[Secure Channel]]
  - supports:: [[Transport Layer Security]]
  - supports:: [[TLS Handshake]]
  - dependsOn:: [[Asymmetric Cryptography]]
  - relatedTo:: [[Elliptic Curve Cryptography]]
  - relatedTo:: [[Cryptography]]
  - contrastsWith:: [[Symmetric Encryption]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
