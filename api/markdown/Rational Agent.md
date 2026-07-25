public:: true

# Rational Agent

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:rational-agent", "@type":"Page", "title":"Rational Agent", "vc:slug":"rational-agent", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:rational-agent",
  "@type":"Class",
  "label":"Rational Agent",
  "definition":"A rational agent is an agent that selects actions expected to maximise its performance measure given its knowledge, percept history and available actions, a foundational concept in decision theory and classical AI. Rationality is typically formalised through an explicit utility function over outcomes, and mechanism design and multi-agent systems often assume agents behave rationally when reasoning about incentives. The concept contrasts with agents that act on fixed rules or bounded heuristics rather than expected-utility optimisation.",
  "domain":"artificial-intelligence",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:agent","label":"Agent"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:utility-theory","label":"Utility Theory"}],
    "enables":[{"@id":"urn:ngm:class:decision-theory","label":"Decision Theory"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Rational Agent]] A rational agent is an agent that selects actions expected to maximise its performance measure given its knowledge, percept history and available actions, a foundational concept in decision theory and classical AI. Rationality is typically formalised through an explicit utility function over outcomes, and mechanism design and multi-agent systems often assume agents behave rationally when reasoning about incentives. The concept contrasts with agents that act on fixed rules or bounded heuristics rather than expected-utility optimisation.
- ### Relationships
	- subClassOf:: [[Agent]]
	- requires:: [[Utility Theory]]
	- enables:: [[Decision Theory]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
