public:: true

# Non-Convex Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2728d8f653dd2294456f5b11f719fba7a463262c466f923c533b586781e8621b",
  "@type": "Page",
  "vc:slug": "non-convex-optimisation",
  "title": "Non-Convex Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:convex-optimisation",
      "vc:label": "Convex Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-gradient-descent",
      "vc:label": "Stochastic Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:loss-landscape",
      "vc:label": "Loss Landscape"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:non-convex-optimisation",
  "@type": "Class",
  "label": "Non-Convex Optimisation",
  "definition": "The minimisation of objective functions that are not convex, so the loss surface may contain multiple local minima, saddle points, plateaus, and ravines, and no general guarantee links a local solution to the global optimum. Non-convex optimisation is the actual setting of deep learning—neural network training landscapes are highly non-convex—and of many engineering problems, tackled in practice with stochastic gradient methods, momentum, restarts, relaxations, and problem-specific structure rather than the clean certificates available in the convex case.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:mathematical-optimisation",
    "label": "Mathematical Optimisation"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:gradient-based-optimisation",
        "label": "Gradient-Based Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:loss-landscape",
        "label": "Loss Landscape"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The minimisation of objective functions that are not convex, so the loss surface may contain multiple local minima, saddle points, plateaus, and ravines, and no general guarantee links a local solution to the global optimum. Non-convex optimisation is the actual setting of deep learning—neural network training landscapes are highly non-convex—and of many engineering problems, tackled in practice with stochastic gradient methods, momentum, restarts, relaxations, and problem-specific structure rather than the clean certificates available in the convex case."

- ### Semantic Classification
  - owl-class:: machine-learning:NonConvexOptimisation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Mathematical Optimisation]]
  - contrasts-with:: [[Convex Optimisation]]
  - uses:: [[Stochastic Gradient Descent]]

- ### Content

  ## Definition

  **Non-convex optimisation** is the deliberate opposite of [[Convex Optimisation]]. In the convex world, every local minimum is global, the feasible region has no hidden pockets, and efficient algorithms come with certificates of optimality. Drop convexity and all of that vanishes: a non-convex objective can harbour exponentially many local minima, wide plateaus where gradients vanish, saddle points that masquerade as minima in high dimensions, and narrow ravines that make step-size selection treacherous. Finding the global optimum of a general non-convex function is NP-hard; the practical discipline is about finding *good enough* solutions reliably.

  The field owes its modern prominence to [[Deep Learning]]. A neural network's training objective—the empirical loss as a function of millions or billions of weights—is profoundly non-convex, thanks to weight-space symmetries, nonlinear activations, and layer composition. Yet [[Stochastic Gradient Descent]] and its variants (momentum, Adam, learning-rate schedules) train these models to excellent solutions daily. Reconciling worst-case hardness with routine empirical success has reshaped optimisation theory: in overparameterised networks, research on the [[Loss Landscape]] indicates that most local minima found in practice are nearly as good as the global one and are connected by low-loss paths, and that in high dimensions saddle points, not poor minima, are the dominant obstacle—one that gradient noise helps escape.

  Beyond deep learning, non-convexity is the norm wherever problems involve discrete choices relaxed to continuous ones, bilinear or rational terms, trigonometric kinematics, or spectral constraints: portfolio problems with cardinality limits, optimal power flow, sensor placement, matrix factorisation, and trajectory optimisation in robotics all live here.

  ## Technical Details

  Practical strategies fall into a few families. **Local search with restarts** accepts local convergence and samples many initialisations. **Stochastic first-order methods** exploit gradient noise as an implicit regulariser and saddle-escape mechanism; almost all large-scale learning uses them because per-iteration cost, not iteration count, dominates. **Relaxation and lifting** replace the non-convex problem with a tractable convex surrogate—semidefinite relaxations, convex envelopes—whose solution bounds or seeds the original. **Global methods** (branch-and-bound, interval arithmetic) certify optimality but scale poorly beyond modest dimensions. **Structure exploitation** is often decisive: problems such as low-rank matrix recovery and phase retrieval are non-convex yet provably solvable by gradient descent under statistical assumptions, a landmark line of results from the 2015–2020 literature.

  The theoretical benchmarks also differ from the convex case: instead of convergence to the global optimum, guarantees are typically stated as convergence to ε-stationary points (‖∇f‖ ≤ ε), with second-order methods or noise injection ruling out saddles. The gap between such worst-case statements and observed behaviour on real problems—especially in overparameterised regimes—remains one of the most active questions in optimisation and learning theory.
