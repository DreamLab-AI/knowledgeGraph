public:: true

# Automatic Differentiation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:automatic-differentiation",
  "@type": "Page",
  "vc:slug": "automatic-differentiation",
  "title": "Automatic Differentiation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automatic-differentiation",
  "@type": "Class",
  "label": "Automatic Differentiation",
  "definition": "Automatic differentiation (AD) is a family of computational techniques for evaluating the derivative of a function specified by a computer program, by systematically applying the chain rule to elementary arithmetic operations rather than through symbolic algebra or finite-difference approximation. It operates in two principal modes: forward mode, which propagates tangent values alongside primal values, and reverse mode (backpropagation), which accumulates gradients in a backward pass over a recorded computation graph. AD produces machine-precision derivatives at a cost linear in the number of program operations, making it the computational backbone of modern deep learning frameworks.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:ai-technique", "label": "Ai Technique"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:forward-mode-differentiation", "label": "Forward Mode Differentiation"},
      {"@id": "urn:ngm:class:reverse-mode-differentiation", "label": "Reverse Mode Differentiation"},
      {"@id": "urn:ngm:class:computation-graph", "label": "Computation Graph"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:chain-rule", "label": "Chain Rule"},
      {"@id": "urn:ngm:class:elementary-arithmetic-operation", "label": "Elementary Arithmetic Operation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:differentiable-programming", "label": "Differentiable Programming"},
      {"@id": "urn:ngm:class:neural-ordinary-differential-equation", "label": "Neural Ordinary Differential Equation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:machine-learning-framework", "label": "Machine Learning Framework"},
      {"@id": "urn:ngm:class:vectorised-jacobian-product", "label": "Vectorised Jacobian Product"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:scientific-machine-learning", "label": "Scientific Machine Learning"},
      {"@id": "urn:ngm:class:probabilistic-programming", "label": "Probabilistic Programming"},
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:symbolic-differentiation", "label": "Symbolic Differentiation"},
      {"@id": "urn:ngm:class:numerical-differentiation", "label": "Numerical Differentiation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"},
      {"@id": "urn:ngm:class:stochastic-gradient-descent", "label": "Stochastic Gradient Descent"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"},
      {"@id": "urn:ngm:class:just-in-time-compilation", "label": "Just-In-Time Compilation"},
      {"@id": "urn:ngm:class:numerical-method", "label": "Numerical Method"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"},
      {"@id": "urn:ngm:class:robotics-control", "label": "Robotics Control"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:algorithmic-differentiation", "label": "Algorithmic Differentiation"},
    {"@id": "urn:ngm:class:computational-differentiation", "label": "Computational Differentiation"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Automatic Differentiation]] is the algorithmic computation of exact derivatives of programs by decomposing computation into elementary operations and applying the chain rule, underpinning [[Backpropagation]] in [[Deep Learning]] through its efficient reverse-mode accumulation of gradients.

- ### Relationships
  - Automatic differentiation directly enables [[Backpropagation]], which drives [[Gradient Descent]] and [[Stochastic Gradient Descent]] for training [[Neural Network|neural networks]]. Every major [[Machine Learning Framework]] — including TensorFlow, PyTorch, and JAX — implements reverse-mode AD as its core differentiation engine, making it foundational to [[Deep Learning]] and [[Optimisation]] research more broadly.

- ### Content
  - The theoretical foundations of automatic differentiation trace to the 1960s and 1970s through work by R.E. Wengert and later formalised in the Soviet and European numerical analysis communities. The technique distinguishes itself sharply from symbolic differentiation (which manipulates algebraic expressions and suffers expression swell) and from numerical finite-difference approximation (which introduces truncation error and scales poorly). AD exploits the fact that any program is a composition of elementary functions whose derivatives are known, enabling systematic application of the chain rule at execution time.

  - In forward mode AD, each computation step simultaneously computes a primal value and its directional derivative with respect to one input variable. This mode is efficient when the number of inputs is small relative to outputs. Reverse mode AD records the computation in a "tape" or dynamic graph during a forward pass, then executes a backward pass to accumulate partial derivatives from outputs back to inputs. Because neural network training involves many parameters (inputs) and a scalar loss (output), reverse mode is O(1) in gradient cost relative to the number of parameters, making it uniquely suited to deep learning.

  - Modern AD systems such as those in PyTorch (autograd), JAX (grad/jit), and TensorFlow implement higher-order differentiation, vectorised Jacobian products (vjp/jvp), and just-in-time compilation, enabling not just gradient-based optimisation but also physics simulation, scientific computing, and differentiable programming paradigms. JAX's functional AD design has catalysed research in neural ODEs, differentiable rendering, and probabilistic programming.

  - As of 2024-2025, automatic differentiation has expanded beyond neural networks into scientific machine learning (SciML), where AD-based solvers learn physics from data. Second-order methods exploiting Hessian-vector products via AD are seeing renewed interest for optimisation research, and hardware-specific AD compilers are emerging for TPUs, neuromorphic chips, and FPGAs, pointing to AD as a permanent infrastructure layer of computational science.

