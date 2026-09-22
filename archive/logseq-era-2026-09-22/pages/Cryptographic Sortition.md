public:: true

# Cryptographic Sortition

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cryptographic-sortition", "@type":"Page", "title":"Cryptographic Sortition", "vc:slug":"cryptographic-sortition", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cryptographic-sortition",
  "@type":"Class",
  "label":"Cryptographic Sortition",
  "definition":"Cryptographic sortition is a technique for randomly and unpredictably selecting a subset of participants from a larger population to perform a role such as block proposal or committee membership, using a verifiable random function so the outcome cannot be predicted or manipulated in advance. Each participant can privately determine whether they were selected and prove it to others without revealing information that would let an adversary target them beforehand. It underpins consensus protocols such as Algorand's, allowing large validator populations to reach agreement with low communication overhead and strong resistance to targeted attacks.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[
      {"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Cryptographic sortition is a technique for randomly and unpredictably selecting a subset of participants from a larger population to perform a role such as block proposal or committee membership, using a verifiable random function so the outcome cannot be predicted or manipulated in advance. Each participant can privately determine whether they were selected and prove it to others without revealing information that would let an adversary target them beforehand. It underpins consensus protocols such as Algorand's, allowing large validator populations to reach agreement with low communication overhead and strong resistance to targeted attacks.
- ### Relationships
	- subClassOf:: [[Consensus Mechanism]]
	- requires:: [[Consensus Mechanism]]
