public:: true

# One Way Function

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:one-way-function", "@type":"Page", "title":"One Way Function", "vc:slug":"one-way-function", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:one-way-function",
  "@type":"Class",
  "label":"One Way Function",
  "definition":"A one-way function is a function that is easy to compute on any input but computationally infeasible to invert, meaning that recovering the input from a typical output is practically impossible with available resources. One-way functions are a foundational primitive of modern cryptography, underpinning hashing, password storage, and the trapdoor constructions used in public-key schemes. Their existence is conjectured rather than proven, and it is closely tied to open questions in computational complexity.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
    "implements":[{"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"}],
    "enables":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"},{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
    "requires":[{"@id":"urn:ngm:class:preimage-resistance","label":"Preimage Resistance"}],
    "dependsOn":[{"@id":"urn:ngm:class:modular-arithmetic","label":"Modular Arithmetic"}],
    "uses":[{"@id":"urn:ngm:class:hash-function","label":"Hash Function"}],
    "supports":[{"@id":"urn:ngm:class:password-hashing","label":"Password Hashing"},{"@id":"urn:ngm:class:proof-of-work","label":"Proof of Work"}],
    "relatedTo":[{"@id":"urn:ngm:class:trapdoor-function","label":"Trapdoor Function"},{"@id":"urn:ngm:class:pseudorandom-function","label":"Pseudorandom Function"}],
    "contrastsWith":[{"@id":"urn:ngm:class:trapdoor-function","label":"Trapdoor Function"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cryptographic-algorithm","label":"Cryptographic Algorithm"}],
    "underpins":[{"@id":"urn:ngm:class:collision-resistance","label":"Collision Resistance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A one-way function is easy to evaluate forwards but computationally infeasible to invert, a property at the heart of [[Cryptography]].
- It is the primitive behind a [[Cryptographic Hash Function]], password storage, and the trapdoor constructions of [[Public-Key Cryptography]].
- Its core security guarantee is [[Preimage Resistance]]: given an output, no efficient method recovers a matching input.
- ### Overview
- One-way functions formalise the asymmetry that makes cryptography possible, where the legitimate direction is cheap and the adversarial direction is prohibitively expensive.
- Their existence is conjectured but unproven, and it would imply that certain hard problems remain intractable, linking cryptography to open questions in computational complexity.
- Candidate constructions draw on number-theoretic problems such as factoring and discrete logarithms, and on the diffusion properties of hash functions.
- A trapdoor variant adds secret information that makes inversion easy for an authorised party, which is what distinguishes public-key encryption from plain hashing.
- ### Mechanisms
- Forward ease — efficient computation of the output for any input.
- Inversion hardness — no feasible algorithm to recover inputs from outputs.
- Preimage and collision resistance — strengthened properties for cryptographic hashes.
- Trapdoor extension — optional secret enabling authorised inversion.
- Complexity grounding — security tied to conjectured intractable problems.
- ### Applications
- Hashing passwords so stored values cannot be reversed to plaintext.
- Building digital signatures and public-key encryption.
- Securing blockchain proof-of-work and commitment schemes.
- Deriving keys and pseudorandom values from secrets.
- ### Relationships
- partOf:: [[Cryptography]]
- implements:: [[Cryptographic Hash Function]]
- enables:: [[Public-Key Cryptography]]
- enables:: [[Digital Signature]]
- requires:: [[Preimage Resistance]]
- dependsOn:: [[Modular Arithmetic]]
- uses:: [[Hash Function]]
- supports:: [[Password Hashing]]
- supports:: [[Proof of Work]]
- relatedTo:: [[Trapdoor Function]]
- relatedTo:: [[Pseudorandom Function]]
- contrastsWith:: [[Trapdoor Function]]
- bridgesTo:: [[Cryptographic Algorithm]]
- underpins:: [[Collision Resistance]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
