public:: true

# Cryptographic Key Pair
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cryptographic-key-pair", "@type":"Page", "title":"Cryptographic Key Pair", "vc:slug":"cryptographic-key-pair", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cryptographic-key-pair",
  "@type":"Class",
  "label":"Cryptographic Key Pair",
  "definition":"A cryptographic key pair is a mathematically linked pair of keys, a public key and a private key, used in asymmetric cryptography. The private key is kept secret by its owner while the public key may be distributed openly, and operations performed with one key can only be reversed or verified with the other. Key pairs underpin encryption to a recipient, digital signatures that prove authorship, and key agreement, making them foundational to secure communication, authentication and decentralised identity.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public Key Cryptography"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:private-key","label":"Private Key"}],
    "partOf":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public Key Cryptography"}],
    "uses":[{"@id":"urn:ngm:class:asymmetric-cryptography","label":"Asymmetric Cryptography"}],
    "enables":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
    "supports":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},{"@id":"urn:ngm:class:did-method","label":"DID Method"}],
    "requires":[{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "dependsOn":[{"@id":"urn:ngm:class:asymmetric-cryptography","label":"Asymmetric Cryptography"},{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "implements":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public Key Cryptography"}],
    "relatedTo":[{"@id":"urn:ngm:class:encryption","label":"Encryption"},{"@id":"urn:ngm:class:cryptography","label":"Cryptography"},{"@id":"urn:ngm:class:private-key","label":"Private Key"}],
    "bridgesTo":[{"@id":"urn:ngm:class:did-method","label":"DID Method"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Cryptographic Key Pair]] is a linked public and [[Private Key]] used in [[Asymmetric Cryptography]].
  - The private key stays secret while the public key is shared freely; each undoes operations of the other.
  - Key pairs enable [[Encryption]], [[Digital Signature]] and key agreement, forming the basis of [[Public Key Cryptography]].
- ### Overview
  - Symmetric ciphers share one secret, which is hard to distribute safely; asymmetric key pairs solve this by separating roles.
  - Anyone can encrypt to a recipient using the public key, but only the holder of the private key can decrypt.
  - Conversely, the private key signs data and anyone can verify the signature with the public key, proving authorship.
  - The security rests on hard mathematical problems such as integer factorisation or the discrete logarithm.
- ### Key aspects
  - Asymmetry: distinct keys for inverse operations remove the shared-secret distribution problem.
  - Confidentiality and authenticity: encryption protects content, signatures bind identity to data.
  - Key generation and storage: secure randomness and protected private-key storage are critical.
  - Lifecycle: generation, rotation, revocation and recovery are governed by key management.
- ### Applications
  - TLS and secure messaging that establish encrypted channels.
  - Digital signatures for software, documents and blockchain transactions.
  - Decentralised identity, where a key pair anchors a DID and its verifiable credentials.
  - SSH and code-signing infrastructures authenticating users and artefacts.
- ### Relationships
  - hasPart:: [[Private Key]]
  - partOf:: [[Public Key Cryptography]]
  - uses:: [[Asymmetric Cryptography]]
  - enables:: [[Digital Signature]]
  - enables:: [[Encryption]]
  - supports:: [[DID Method]]
  - requires:: [[Key Management]]
  - dependsOn:: [[Asymmetric Cryptography]]
  - relatedTo:: [[Cryptography]]
  - bridgesTo:: [[DID Method]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
