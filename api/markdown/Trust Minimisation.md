public:: true

# Trust Minimisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trust-minimisation", "@type":"Page", "title":"Trust Minimisation", "vc:slug":"trust-minimisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:trust-minimisation",
  "@type":"Class",
  "label":"Trust Minimisation",
  "definition":"Trust minimisation is a design principle for distributed and decentralised systems that aims to reduce the degree to which participants must rely on any single party's honesty or competence for the system to function correctly. It is typically achieved through cryptographic proofs that let one party verify a claim without trusting the claimant, and through decentralised architectures that remove single points of control. It is a foundational goal of blockchain and decentralised web design.",
  "domain":"distributed-systems",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:decentralisation","label":"Decentralisation"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:cryptographic-proofs","label":"Cryptographic Proofs"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Trust Minimisation]] Trust minimisation is a design principle for distributed and decentralised systems that aims to reduce the degree to which participants must rely on any single party's honesty or competence for the system to function correctly. It is typically achieved through cryptographic proofs that let one party verify a claim without trusting the claimant, and through decentralised architectures that remove single points of control. It is a foundational goal of blockchain and decentralised web design.
- ### Relationships
	- subClassOf:: [[Decentralisation]]
	- requires:: [[Cryptographic Proofs]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
