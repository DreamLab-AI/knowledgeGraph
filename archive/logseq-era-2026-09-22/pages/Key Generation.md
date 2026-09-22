public:: true

# Key Generation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:key-generation", "@type":"Page", "title":"Key Generation", "vc:slug":"key-generation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:key-generation",
  "@type":"Class",
  "label":"Key Generation",
  "definition":"Key generation is the cryptographic process of creating the keys used by symmetric and asymmetric algorithms, deriving them from high-quality randomness so that they are unpredictable to an adversary. For symmetric schemes it produces a single secret value, while for public-key schemes it produces a mathematically linked private and public key pair. The security of every downstream cryptographic operation rests on the entropy and correctness of this step.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:cryptographic-key-management","label":"Cryptographic Key Management"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:random-number-generation","label":"Random Number Generation"},
      {"@id":"urn:ngm:class:entropy","label":"Entropy"},
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:cryptographic-key-management","label":"Cryptographic Key Management"},
      {"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:entropy","label":"Entropy"},
      {"@id":"urn:ngm:class:random-number-generation","label":"Random Number Generation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:encryption","label":"Encryption"},
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},
      {"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:random-number-generation","label":"Random Number Generation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:elliptic-curve-cryptography","label":"Elliptic Curve Cryptography"},
      {"@id":"urn:ngm:class:hardware-security-module","label":"Hardware Security Module"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"},
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:private-key","label":"Private Key"},
      {"@id":"urn:ngm:class:public-key","label":"Public Key"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Key generation creates cryptographic keys from high-quality randomness and is a core stage of [[Cryptographic Key Management]].
  - It consumes [[Entropy]] via [[Random Number Generation]] to produce unpredictable secrets, including a [[Private Key]] and [[Public Key]] pair for asymmetric schemes.
  - It underpins [[Cryptography]] by ensuring keys cannot be guessed or reproduced.

- ### Overview
  - The process draws on a source of entropy, expands or conditions it, and maps it to a key of the required length and structure for the chosen algorithm.
  - Asymmetric generation runs a mathematical procedure, such as elliptic-curve point selection or prime generation, to derive a linked key pair.
  - Weak randomness is the classic failure mode, allowing attackers to reconstruct keys regardless of algorithm strength.

- ### Mechanisms
  - Collection of entropy from hardware and operating-system sources.
  - Cryptographically secure random number generation seeded from that entropy.
  - Key derivation functions that stretch passwords or seeds into keys.
  - Algorithm-specific parameter selection for symmetric and asymmetric keys.

- ### Applications
  - Provisioning keys inside a [[Hardware Security Module]] for tamper resistance.
  - Issuing certificates within a [[Public Key Infrastructure]].
  - Establishing session secrets ahead of [[Key Exchange]].
  - Producing signing keys for [[Digital Signature]] and wallets.

- ### Relationships
  - subClassOf:: [[Cryptographic Key Management]]
  - hasPart:: [[Random Number Generation]]
  - hasPart:: [[Entropy]]
  - hasPart:: [[Key Derivation Function]]
  - partOf:: [[Cryptographic Key Management]]
  - partOf:: [[Public Key Infrastructure]]
  - dependsOn:: [[Entropy]]
  - dependsOn:: [[Random Number Generation]]
  - enables:: [[Encryption]]
  - enables:: [[Digital Signature]]
  - enables:: [[Key Exchange]]
  - requires:: [[Random Number Generation]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Hardware Security Module]]
  - supports:: [[Public-Key Cryptography]]
  - supports:: [[Symmetric Encryption]]
  - relatedTo:: [[Private Key]]
  - relatedTo:: [[Public Key]]
  - relatedTo:: [[Cryptography]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
