public:: true

# Shapley Value

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:shapley-value", "@type":"Page", "title":"Shapley Value", "vc:slug":"shapley-value", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:shapley-value",
  "@type":"Class",
  "label":"Shapley Value",
  "definition":"The Shapley Value is a solution concept from cooperative game theory that fairly allocates a total payoff among players according to their average marginal contribution across every possible coalition. In machine learning it is repurposed to attribute a model's prediction to individual input features, treating each feature as a player contributing to the model's output. This attribution use underlies explainability methods such as SHAP.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- The Shapley Value is a solution concept from cooperative game theory that fairly allocates a total payoff among players according to their average marginal contribution across every possible coalition. In machine learning it is repurposed to attribute a model's prediction to individual input features, treating each feature as a player contributing to the model's output. This attribution use underlies explainability methods such as SHAP.
- ### Relationships
	- subClassOf:: [[Game Theory]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
