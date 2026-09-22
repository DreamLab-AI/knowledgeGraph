public:: true

# Statistical Model

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:statistical-model", "@type":"Page", "title":"Statistical Model", "vc:slug":"statistical-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:statistical-model",
  "@type":"Class",
  "label":"Statistical Model",
  "definition":"A statistical model is a formal mathematical representation of a data-generating process, expressed as a set of probability distributions over observed and latent variables. It provides the foundation for Bayesian inference, where prior distributions are updated with observed evidence, and for behavioural modelling, where such models describe patterns in agent or system behaviour. Statistical models range from simple parametric forms to complex hierarchical and graphical structures.",
  "domain":"artificial-intelligence",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:probabilistic-model","label":"Probabilistic Model"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:bayesian-inference","label":"Bayesian Inference"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Statistical Model]] A statistical model is a formal mathematical representation of a data-generating process, expressed as a set of probability distributions over observed and latent variables. It provides the foundation for Bayesian inference, where prior distributions are updated with observed evidence, and for behavioural modelling, where such models describe patterns in agent or system behaviour. Statistical models range from simple parametric forms to complex hierarchical and graphical structures.
- ### Relationships
	- subClassOf:: [[Probabilistic Model]]
	- enables:: [[Bayesian Inference]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
