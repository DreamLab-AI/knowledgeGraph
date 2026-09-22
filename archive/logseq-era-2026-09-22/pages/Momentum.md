public:: true

# Momentum

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:momentum", "@type":"Page", "title":"Momentum", "vc:slug":"momentum", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:momentum",
  "@type":"Class",
  "label":"Momentum",
  "definition":"Momentum is an optimisation technique that accelerates gradient descent by accumulating an exponentially weighted moving average of past gradients and using it to update parameters. By carrying velocity from prior steps, it damps oscillations across steep directions and speeds progress along consistent ones, improving convergence on ill-conditioned loss surfaces. Momentum underlies many modern optimisers, with Nesterov's variant and adaptive methods such as Adam building directly on its formulation.",
  "domain":"machine-learning",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:optimisation-algorithm","label":"Optimization Algorithm"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:optimisation-algorithm","label":"Optimization Algorithm"}],
    "hasPart":[
      {"@id":"urn:ngm:class:gradient","label":"Gradient"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:gradient","label":"Gradient"},
      {"@id":"urn:ngm:class:learning-rate","label":"Learning Rate"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:convergence","label":"Convergence"},
      {"@id":"urn:ngm:class:neural-network-training","label":"Neural Network Training"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:adam-optimiser","label":"Adam Optimiser"},
      {"@id":"urn:ngm:class:weight-decay","label":"Weight Decay"},
      {"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Momentum is an [[Optimisation Algorithm]] enhancement that accumulates a moving average of past gradients to accelerate [[Gradient Descent]]. It uses the current [[Gradient]] and a [[Learning Rate]] together with a velocity term to make smoother, faster parameter updates.
- By carrying inertia between steps, it damps oscillation and improves [[Convergence]] on ill-conditioned [[Loss Function]] landscapes.
- ### Overview
- Plain gradient descent can zig-zag across narrow valleys and crawl along shallow directions. Momentum addresses both: it builds velocity in directions where gradients consistently point, while averaging out noisy, oscillating components.
- The update maintains a velocity vector that blends the previous velocity (scaled by a momentum coefficient, often around 0.9) with the current gradient. Parameters move according to this velocity rather than the raw gradient.
- Nesterov accelerated gradient refines this by evaluating the gradient at a look-ahead position, often yielding better convergence. Adaptive optimisers such as Adam combine momentum on the first moment with per-parameter scaling.
- ### Mechanisms
- Velocity accumulation: an exponentially weighted average of gradients.
- Momentum coefficient: controls how much past velocity persists.
- Update rule: parameters step along the velocity vector scaled by the learning rate.
- Nesterov look-ahead: gradient evaluated at the anticipated next position.
- ### Applications
- Training deep neural networks where loss surfaces are highly non-convex.
- Stochastic gradient descent with momentum as a robust default optimiser.
- Foundation for adaptive optimisers such as Adam and RMSProp variants.
- Accelerating convergence in large-scale and distributed training.
- ### Relationships
- partOf:: [[Optimisation Algorithm]]
- hasPart:: [[Gradient]]
- uses:: [[Gradient]]
- uses:: [[Learning Rate]]
- requires:: [[Gradient Descent]]
- requires:: [[Loss Function]]
- enables:: [[Convergence]]
- enables:: [[Neural Network Training]]
- supports:: [[Stochastic Gradient Descent]]
- relatedTo:: [[Adam Optimiser]]
- relatedTo:: [[Weight Decay]]
- relatedTo:: [[Backpropagation]]
- contrastsWith:: [[Gradient Descent]]
- bridgesTo:: [[Machine Learning]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
