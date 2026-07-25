public:: true

# Belief Propagation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:belief-propagation", "@type":"Page", "title":"Belief Propagation", "vc:slug":"belief-propagation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:belief-propagation",
  "@type":"Class",
  "label":"Belief Propagation",
  "definition":"Belief propagation is a message-passing algorithm for performing inference on graphical models by iteratively exchanging local messages between nodes representing variables and the factors that relate them. On tree-structured graphs it computes exact marginal distributions; on graphs with cycles, loopy belief propagation provides an approximate inference scheme that often works well in practice. It is the basis of efficient decoding for modern error-correcting codes and of probabilistic reasoning over structured domains.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:graphical-model","label":"Graphical Model"},{"@id":"urn:ngm:class:probabilistic-inference","label":"Probabilistic Inference"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:probability-theory","label":"Probability Theory"},
      {"@id":"urn:ngm:class:markov-chain","label":"Markov Chain"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:graphical-model","label":"Graphical Model"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:probabilistic-inference","label":"Probabilistic Inference"},
      {"@id":"urn:ngm:class:inference","label":"Inference"},
      {"@id":"urn:ngm:class:reasoning","label":"Reasoning"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:probabilistic-model","label":"Probabilistic Model"},
      {"@id":"urn:ngm:class:statistical-inference","label":"Statistical Inference"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:variational-inference","label":"Variational Inference"},
      {"@id":"urn:ngm:class:probabilistic-reasoning","label":"Probabilistic Reasoning"},
      {"@id":"urn:ngm:class:error-correcting-code","label":"Error Correcting Code"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:markov-chain-monte-carlo","label":"Markov Chain Monte Carlo"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Belief propagation performs inference on a [[Graphical Model]] by passing local messages between variables and factors.
	- It relies on [[Message Passing]] and elementary [[Probability Theory]] to combine evidence.
	- On trees it is exact; on loopy graphs it gives a practical approximation.
- ### Overview
	- Each node sends a summary of its current belief to neighbours, who fold it into their own estimate.
	- After convergence the product of incoming messages yields the marginal distribution at each variable.
	- The algorithm is also called the sum-product algorithm when computing marginals and max-product for most-probable explanations.
	- Loopy belief propagation runs the same updates on cyclic graphs, accepting approximation for tractability.
- ### Mechanisms
	- Variable-to-factor messages collect beliefs from all other connected factors.
	- Factor-to-variable messages marginalise the local factor over its other arguments.
	- Scheduling and damping control convergence behaviour on cyclic structures.
	- Normalisation keeps messages numerically stable across iterations.
- ### Applications
	- Decoding low-density parity-check and turbo [[Error Correcting Code]] families near channel capacity.
	- [[Probabilistic Inference]] over [[Probabilistic Model]] structures in vision and language.
	- [[Probabilistic Reasoning]] in sensor fusion and constraint networks.
	- Approximate marginal computation where exact [[Inference]] is intractable.
- ### Relationships
	- subClassOf:: [[Graphical Model]]
	- uses:: [[Message Passing]]
	- uses:: [[Probability Theory]]
	- uses:: [[Markov Chain]]
	- hasPart:: [[Message Passing]]
	- hasPart:: [[Graphical Model]]
	- enables:: [[Probabilistic Inference]]
	- enables:: [[Inference]]
	- enables:: [[Reasoning]]
	- supports:: [[Probabilistic Model]]
	- supports:: [[Statistical Inference]]
	- relatedTo:: [[Variational Inference]]
	- relatedTo:: [[Probabilistic Reasoning]]
	- relatedTo:: [[Error Correcting Code]]
	- contrastsWith:: [[Markov Chain Monte Carlo]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
