public:: true

# KZG Commitment
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:kzg-commitment", "@type":"Page", "title":"KZG Commitment", "vc:slug":"kzg-commitment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:kzg-commitment",
  "@type":"Class",
  "label":"KZG Commitment",
  "definition":"A KZG commitment is a polynomial commitment scheme, named after Kate, Zaverucha and Goldberg, that lets a prover commit to a polynomial with a single constant-size group element and later open it at any point with a constant-size proof. Its security rests on elliptic-curve pairings and a structured reference string produced by a trusted setup. It is central to modern data-availability and scaling designs on Ethereum, including proto-danksharding and danksharding.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:polynomial-commitment","label":"Polynomial Commitment"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:cryptographic-commitment","label":"Cryptographic Commitment"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:polynomial-commitment","label":"Polynomial Commitment"},
      {"@id":"urn:ngm:class:danksharding","label":"Danksharding"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:elliptic-curve-cryptography","label":"Elliptic Curve Cryptography"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:elliptic-curve-cryptography","label":"Elliptic Curve Cryptography"},
      {"@id":"urn:ngm:class:cryptographic-commitment","label":"Cryptographic Commitment"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:data-availability-sampling","label":"Data Availability Sampling"},
      {"@id":"urn:ngm:class:danksharding","label":"Danksharding"},
      {"@id":"urn:ngm:class:data-availability","label":"Data Availability"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:rollup","label":"Rollup"},
      {"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero-Knowledge Proof"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:polynomial-commitment","label":"Polynomial Commitment"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:merkle-tree","label":"Merkle Tree"},
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"},
      {"@id":"urn:ngm:class:data-availability","label":"Data Availability"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:danksharding","label":"Danksharding"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A KZG commitment is a [[Polynomial Commitment]] scheme that commits to a polynomial with a single short group element and opens it with a constant-size proof.
  - It is a form of [[Cryptographic Commitment]] whose security relies on [[Elliptic Curve Cryptography]] and pairings.
  - It underpins Ethereum scaling through [[Danksharding]] and blob-based [[Data Availability]].

- ### Overview
  - The scheme encodes data as the coefficients of a polynomial, then commits to that polynomial as one curve point.
  - A verifier can check that a claimed evaluation at a point is correct using a succinct proof and a pairing check.
  - A one-time trusted setup ceremony produces the structured reference string that the scheme depends on.

- ### Mechanisms
  - Commitment to a polynomial as a single group element.
  - Opening proofs that are constant-size regardless of polynomial degree.
  - Pairing-based verification of evaluations.
  - A structured reference string from a multi-party trusted setup.

- ### Applications
  - Blob commitments enabling [[Data Availability Sampling]] in [[Danksharding]].
  - Compact data availability proofs for a [[Rollup]].
  - A building block in some [[Zero-Knowledge Proof]] systems.
  - An alternative to [[Merkle Tree]] inclusion proofs for large data sets.

- ### Relationships
  - subClassOf:: [[Polynomial Commitment]]
  - hasPart:: [[Cryptographic Commitment]]
  - partOf:: [[Polynomial Commitment]]
  - partOf:: [[Danksharding]]
  - requires:: [[Elliptic Curve Cryptography]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Cryptographic Commitment]]
  - enables:: [[Data Availability Sampling]]
  - enables:: [[Danksharding]]
  - enables:: [[Data Availability]]
  - supports:: [[Rollup]]
  - supports:: [[Zero-Knowledge Proof]]
  - implements:: [[Polynomial Commitment]]
  - relatedTo:: [[Merkle Tree]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Data Availability]]
  - bridgesTo:: [[Danksharding]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
