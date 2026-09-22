public:: true

# Softmax Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:softmax-function",
  "@type": "Page",
  "title": "Softmax Function",
  "vc:slug": "softmax-function",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:softmax-function",
  "@type": "Class",
  "label": "Softmax Function",
  "definition": "The softmax function is a normalising transformation that maps a vector of real-valued scores (logits) into a probability distribution, where each output lies in the open interval (0, 1) and the outputs sum to one. It exponentiates each input and divides by the sum of all exponentials, amplifying larger scores while preserving rank order. Softmax is ubiquitous in machine learning as the final layer of multi-class classifiers and as the normalisation step inside attention mechanisms, and it pairs naturally with the cross-entropy loss whose gradient simplifies to the difference between predicted and target distributions.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:activation-function",
      "label": "Activation Function"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:activation-function",
        "label": "Activation Function"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:cross-entropy-loss",
        "label": "Cross-Entropy Loss"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cross-entropy-loss",
        "label": "Cross-Entropy Loss"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The softmax function is a normalising transformation that maps a vector of real-valued scores, or logits, into a probability distribution whose elements lie in (0, 1) and sum to one. It is a member of the [[Activation Function]] family and is most commonly applied at the output of a [[Neural Network]] to produce class probabilities.
  - It pairs naturally with [[Cross-Entropy Loss]], because the combined gradient simplifies elegantly, making the pair efficient to train with [[Gradient Descent]] and [[Backpropagation]].

- ### Overview
  - Softmax generalises the logistic sigmoid to more than two classes. Given inputs z₁ … zₙ, it computes exp(zᵢ) divided by the sum over all j of exp(zⱼ). The exponential makes every output positive, and the normalisation forces the outputs to form a valid probability distribution.
  - Because the exponential amplifies differences between scores, softmax tends to assign most of the probability mass to the largest logit while still retaining a smooth, differentiable gradient. A temperature parameter can sharpen or soften this distribution, which is useful for sampling and knowledge distillation.
  - Numerical stability is a practical concern: naive computation of exp(z) can overflow. The standard implementation subtracts the maximum logit before exponentiating, which leaves the result unchanged mathematically but keeps the values in a safe range.

- ### Mechanisms
  - **Exponentiation and normalisation** — Each logit is exponentiated and divided by the sum of all exponentials, producing a normalised probability vector. This is the defining operation.
  - **Rank preservation** — Softmax is monotonic in each input relative to the others, so the index of the maximum logit equals the index of the maximum probability; it never reorders the classes.
  - **Temperature scaling** — Dividing logits by a temperature T before softmax controls entropy: high T yields a near-uniform distribution, low T approaches a one-hot vector. This is central to sampling strategies and to calibration.
  - **Gradient with cross-entropy** — When combined with [[Cross-Entropy Loss]], the gradient with respect to the logits reduces to the predicted probability minus the target, a simple and numerically benign expression that accelerates [[Backpropagation]].
  - **Attention normalisation** — Inside an [[Attention Mechanism]], softmax converts raw query-key similarity scores into attention weights that sum to one, determining how much each value contributes to the output.

- ### Applications
  - **Multi-class classification** — Softmax is the canonical output layer for [[Classification]] networks, turning logits into class probabilities for tasks from image recognition to language modelling.
  - **Transformer attention** — Every [[Transformer]] layer applies softmax to scaled dot-product scores, the mechanism that lets the model focus on relevant tokens.
  - **Language model decoding** — Softmax over the vocabulary produces the next-token distribution; temperature and top-k/top-p sampling operate on this distribution.
  - **Reinforcement learning** — Policy networks often use softmax to convert action preferences into a stochastic policy.
  - **Knowledge distillation** — Temperature-scaled softmax produces soft targets that transfer richer information from a teacher to a student model.

- ### Relationships
  - subClassOf:: [[Activation Function]]
  - requires:: [[Activation Function]]
  - dependsOn:: [[Neural Network]]
  - hasPart:: [[Cross-Entropy Loss]]
  - uses:: [[Gradient Descent]]
  - uses:: [[Backpropagation]]
  - enables:: [[Classification]]
  - enables:: [[Attention Mechanism]]
  - supports:: [[Transformer]]
  - relatedTo:: [[Deep Learning]]
  - bridgesTo:: [[Transformer]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
