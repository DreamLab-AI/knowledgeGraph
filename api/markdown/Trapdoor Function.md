public:: true

# Trapdoor Function

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trapdoor-function", "@type":"Page", "title":"Trapdoor Function", "vc:slug":"trapdoor-function", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:trapdoor-function",
  "@type":"Class",
  "label":"Trapdoor Function",
  "definition":"A trapdoor function is a one-way function that is easy to compute in the forward direction but computationally infeasible to invert, except for a party holding a secret piece of information called the trapdoor. This asymmetry between forward computation and inversion underpins public-key cryptography, where the public key enables encryption or verification and the private trapdoor enables decryption or signing. Candidate trapdoor functions rest on conjectured hard problems such as integer factorisation and the discrete logarithm.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptographic-primitive","label":"Cryptographic Primitive"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"},{"@id":"urn:ngm:class:asymmetric-encryption","label":"Asymmetric Encryption"}],
    "requires":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"},{"@id":"urn:ngm:class:key-generation","label":"Key Generation"}],
    "uses":[{"@id":"urn:ngm:class:cryptographic-primitive","label":"Cryptographic Primitive"}],
    "enables":[{"@id":"urn:ngm:class:rsa","label":"RSA"},{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
    "supports":[{"@id":"urn:ngm:class:key-exchange","label":"Key Exchange"}],
    "relatedTo":[{"@id":"urn:ngm:class:elliptic-curve-cryptography","label":"Elliptic Curve Cryptography"},{"@id":"urn:ngm:class:hash-function","label":"Hash Function"},{"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero-Knowledge Proof"}],
    "contrastsWith":[{"@id":"urn:ngm:class:hash-function","label":"Hash Function"}],
    "partOf":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Trapdoor Function]] is a one-way function that is easy to evaluate forward but infeasible to invert without a secret trapdoor.
- It is the foundational [[Cryptographic Primitive]] of [[Public-Key Cryptography]] and [[Asymmetric Encryption]].
- Its security rests on conjectured hard problems studied in [[Cryptography]].
- ### Overview
- A trapdoor function combines two properties: it is efficiently computable in the forward direction for everyone, yet inverting it is believed to be computationally infeasible unless one holds an additional secret. That secret, the trapdoor, makes inversion easy for its possessor, creating the asymmetry that public-key schemes exploit.
- The classic example is the function behind RSA, where multiplying two large primes is easy but recovering the factors from the product is hard; knowledge of the primes serves as the trapdoor. Other constructions rely on the difficulty of the discrete logarithm in finite groups or on elliptic curves.
- Trapdoor functions are distinct from plain one-way functions, which have no inversion shortcut at all, and from hash functions, which are deliberately not invertible by anyone. The trapdoor is precisely what lets a key holder reverse the operation, enabling decryption and signing.
- ### Mechanisms
- Forward direction: anyone can apply the function using the public key or public parameters.
- Hard inversion: without the trapdoor, reversing the function reduces to a presumed-intractable problem.
- Secret trapdoor: the private key encodes structure that makes inversion tractable.
- Hardness assumptions: security depends on problems such as integer factorisation and discrete logarithms remaining hard.
- Key generation: the trapdoor and its public counterpart are produced together during setup.
- ### Applications
- Underpinning [[RSA]] encryption and [[Digital Signature]] schemes.
- Realising [[Asymmetric Encryption]] and [[Encryption]] where public and private operations differ.
- Supporting [[Key Exchange]] protocols built on [[Elliptic Curve Cryptography]].
- Providing structure used in advanced protocols such as [[Zero-Knowledge Proof]] systems.
- ### Relationships
- implements:: [[Public-Key Cryptography]]
- implements:: [[Asymmetric Encryption]]
- requires:: [[Cryptography]]
- requires:: [[Key Generation]]
- uses:: [[Cryptographic Primitive]]
- enables:: [[RSA]]
- enables:: [[Digital Signature]]
- enables:: [[Encryption]]
- supports:: [[Key Exchange]]
- relatedTo:: [[Elliptic Curve Cryptography]]
- relatedTo:: [[Hash Function]]
- relatedTo:: [[Zero-Knowledge Proof]]
- contrastsWith:: [[Hash Function]]
- partOf:: [[Cryptography]]
- ### Provenance
- updated:: 2026-06-15
