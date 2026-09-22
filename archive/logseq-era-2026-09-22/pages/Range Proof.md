public:: true

# Range Proof
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:range-proof", "@type":"Page", "title":"Range Proof", "vc:slug":"range-proof", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:range-proof",
  "@type":"Class",
  "label":"Range Proof",
  "definition":"A range proof is a cryptographic zero-knowledge protocol that allows a prover to convince a verifier that a committed secret value lies within a specified numeric interval, without revealing the value itself. It is essential to confidential transaction systems, where amounts are hidden inside commitments yet must be proven non-negative to prevent inflation via negative-value forgery. Modern constructions such as Bulletproofs achieve compact, logarithmic-sized proofs without a trusted setup, making range proofs practical for on-chain privacy.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero-Knowledge Proof"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:confidential-transactions","label":"Confidential Transactions"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:commitment-scheme","label":"Commitment Scheme"},
      {"@id":"urn:ngm:class:pedersen-commitment","label":"Pedersen Commitment"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:pedersen-commitment","label":"Pedersen Commitment"},
      {"@id":"urn:ngm:class:cryptographic-primitive","label":"Cryptographic Primitive"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:confidential-transactions","label":"Confidential Transactions"},
      {"@id":"urn:ngm:class:privacy","label":"Privacy"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:bulletproofs","label":"Bulletproofs"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:monero","label":"Monero"},
      {"@id":"urn:ngm:class:liquid-network","label":"Liquid Network"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"},
      {"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero-Knowledge Proof"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:privacy","label":"Privacy"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Range Proof]] is a [[Zero-Knowledge Proof]] that a hidden committed value lies within a bounded interval, without disclosing the value.
	- It builds on a [[Commitment Scheme]] such as a [[Pedersen Commitment]] to bind the secret while keeping it confidential.
	- It is the cryptographic guarantee that makes [[Confidential Transactions]] sound by preventing negative-amount forgery.
- ### Overview
	- In confidential ledger designs, transaction amounts are concealed inside additively homomorphic commitments so that balances can be checked without revealing values. A malicious party could otherwise commit to a negative amount and mint money out of thin air.
	- A range proof closes this attack surface by demonstrating, in zero knowledge, that each committed amount falls in a valid range such as [0, 2^64).
	- Early designs based on bit decomposition produced large proofs that scaled linearly with the bit-width. Bulletproofs reduced proof size to logarithmic scale and removed any trusted setup requirement.
	- Verification cost and proof aggregation are central engineering concerns, since a block may contain thousands of range proofs.
- ### Mechanisms
	- Commit to the value with a [[Pedersen Commitment]] that hides the amount and binds the prover.
	- Express the range constraint as an inner-product or arithmetic-circuit relation over the committed bits.
	- Produce a succinct, non-interactive argument via the Fiat-Shamir transform.
	- Aggregate multiple proofs to amortise size and verification work across outputs.
- ### Applications
	- Hiding amounts in [[Confidential Transactions]] on Bitcoin sidechains and privacy coins.
	- Underpinning amount privacy in [[Monero]] and the [[Liquid Network]].
	- Proving solvency or reserve bounds without revealing exact holdings.
	- Validating bounded inputs in privacy-preserving smart contracts.
- ### Relationships
	- partOf:: [[Confidential Transactions]]
	- requires:: [[Commitment Scheme]]
	- requires:: [[Pedersen Commitment]]
	- requires:: [[Cryptography]]
	- uses:: [[Pedersen Commitment]]
	- uses:: [[Cryptographic Primitive]]
	- enables:: [[Confidential Transactions]]
	- enables:: [[Privacy]]
	- implements:: [[Bulletproofs]]
	- supports:: [[Monero]]
	- supports:: [[Liquid Network]]
	- relatedTo:: [[Cryptographic Proof]]
	- relatedTo:: [[Zero-Knowledge Proof]]
	- bridgesTo:: [[Privacy]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
