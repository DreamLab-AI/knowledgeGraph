public:: true

# Ergodicity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ergodicity", "@type":"Page", "title":"Ergodicity", "vc:slug":"ergodicity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ergodicity",
  "@type":"Class",
  "label":"Ergodicity",
  "definition":"Ergodicity is the property of a stochastic process whereby its long-run time average, computed along a single sufficiently long trajectory, converges to its ensemble average across all possible states. It is a required condition for Markov chain Monte Carlo methods to converge to the target distribution, since it guarantees that a chain will eventually visit all reachable states in proportion to their stationary probability. Non-ergodic chains can become trapped in subsets of the state space and yield biased samples.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:stochastic-process","label":"Stochastic Process"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:stochastic-process","label":"Stochastic Process"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Ergodicity is the property of a stochastic process whereby its long-run time average, computed along a single sufficiently long trajectory, converges to its ensemble average across all possible states. It is a required condition for Markov chain Monte Carlo methods to converge to the target distribution, since it guarantees that a chain will eventually visit all reachable states in proportion to their stationary probability. Non-ergodic chains can become trapped in subsets of the state space and yield biased samples.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
