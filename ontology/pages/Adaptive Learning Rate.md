public:: true

# Adaptive Learning Rate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c72e5cc1211b71ac864de3b48bb7fbe604abfcc9499211ed9035cfa4ae0b4689",
  "@type": "Page",
  "vc:slug": "adaptive-learning-rate",
  "title": "Adaptive Learning Rate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:learning-rate",
      "vc:label": "Learning Rate"
    },
    {
      "@id": "urn:visionflow:linked:adam-optimiser",
      "vc:label": "Adam Optimiser"
    },
    {
      "@id": "urn:visionflow:linked:rmsprop",
      "vc:label": "RMSProp"
    },
    {
      "@id": "urn:visionflow:linked:gradient-descent",
      "vc:label": "Gradient Descent"
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
  "@id": "urn:ngm:class:adaptive-learning-rate",
  "@type": "Class",
  "label": "Adaptive Learning Rate",
  "definition": "A family of optimisation techniques in which the step size of gradient descent is adjusted automatically during training — typically per parameter, from running statistics of past gradients — so that parameters with large or frequent gradients take smaller steps and rarely-updated parameters take larger ones, as implemented by AdaGrad, RMSProp, and Adam, reducing sensitivity to the manually chosen global learning rate.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:learning-rate",
    "label": "Learning Rate"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:optimisation-algorithm",
        "label": "Optimisation Algorithm"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:adam-optimiser",
        "label": "Adam Optimiser"
      },
      {
        "@id": "urn:ngm:class:rmsprop",
        "label": "RMSProp"
      },
      {
        "@id": "urn:ngm:class:momentum",
        "label": "Momentum"
      },
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
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
  - "A family of optimisation techniques in which the step size of gradient descent is adjusted automatically during training — typically per parameter, from running statistics of past gradients — so that parameters with large or frequent gradients take smaller steps and rarely-updated parameters take larger ones, as implemented by AdaGrad, RMSProp, and Adam, reducing sensitivity to the manually chosen global learning rate."

- ### Semantic Classification
  - owl-class:: machine-learning:AdaptiveLearningRate
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Learning Rate]]
  - part-of:: [[Optimisation Algorithm]]
  - related-to:: [[Adam Optimiser]]
  - related-to:: [[RMSProp]]

- ### Content

  ## Definition

  An **adaptive learning rate** replaces the single, hand-tuned step size of vanilla [[Gradient Descent]] with step sizes that the optimiser computes for itself as training proceeds. The dominant approach maintains per-parameter statistics of past gradients and divides each update by a function of those statistics: a parameter that has recently seen large gradients gets a smaller effective step, while a parameter with small or infrequent gradients gets a larger one. This automatically compensates for poor conditioning — loss surfaces whose curvature differs wildly across dimensions — which would otherwise force the global learning rate down to the tolerance of the steepest direction.

  The lineage runs through three landmark methods. **AdaGrad** (Duchi, Hazan and Singer, 2011) divides by the square root of the *sum* of all past squared gradients, which suits sparse features but makes the effective rate decay monotonically toward zero. **[[RMSProp]]** (Hinton, 2012) fixes that decay by replacing the sum with an exponentially weighted moving average. **[[Adam Optimiser]]** (Kingma and Ba, 2014) combines RMSProp's second-moment scaling with [[Momentum]]-style first-moment averaging and bias correction, and remains the default optimiser for most deep learning workloads, including large-language-model training in its decoupled-weight-decay form, AdamW.

  Adaptive per-parameter scaling is complementary to, not a substitute for, learning-rate *scheduling*: modern training stacks layer warmup and cosine or linear decay schedules on top of Adam-family optimisers. The distinction matters — the schedule shapes the global step magnitude over time, while the adaptive statistics shape its distribution across parameters.

  ## Technical Details

  For gradient gₜ and small constant ε:

  - **AdaGrad**: accumulate Gₜ = Σ gᵢ²; update θₜ₊₁ = θₜ − (η / √(Gₜ + ε)) · gₜ
  - **RMSProp**: vₜ = γvₜ₋₁ + (1−γ)gₜ²; update θₜ₊₁ = θₜ − (η / √(vₜ + ε)) · gₜ
  - **Adam**: mₜ = β₁mₜ₋₁ + (1−β₁)gₜ; vₜ = β₂vₜ₋₁ + (1−β₂)gₜ²; bias-corrected m̂ₜ, v̂ₜ; update θₜ₊₁ = θₜ − η·m̂ₜ/(√v̂ₜ + ε)

  **Practical notes**:
  - Typical defaults: Adam with β₁ = 0.9, β₂ = 0.999, ε = 10⁻⁸; RMSProp with γ = 0.9.
  - Adaptive methods tolerate a wide range of base rates but still need one; η ≈ 10⁻³ (Adam) is the common starting point, far lower for fine-tuning.
  - Known caveats: convergence counterexamples for Adam (addressed by AMSGrad), and a generalisation gap versus tuned SGD with momentum on some vision tasks, which keeps plain [[Stochastic Gradient Descent]] competitive in image classification.
  - Recent variants — AdaFactor (memory-efficient second moments), LAMB (layer-wise adaptation for huge batches), Lion, and second-order-flavoured methods such as Shampoo/SOAP — continue the same design theme at larger scale.
