public:: true

# Inductive Bias
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:inductive-bias", "@type": "Page", "title": "Inductive Bias", "vc:slug": "inductive-bias", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inductive-bias",
  "@type": "Class",
  "label": "Inductive Bias",
  "definition": "Inductive bias is the set of assumptions a learning algorithm uses to generalise from finite training data to unseen inputs. Because infinitely many functions fit any finite sample, a learner must prefer some hypotheses over others, and that preference — encoded in model architecture, regularisation, priors, or the choice of hypothesis space — is its inductive bias. Appropriate inductive bias is what lets a model extrapolate sensibly rather than merely memorise.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hypothesis-space",
        "label": "Hypothesis Space"
      },
      {
        "@id": "urn:ngm:class:model-architecture",
        "label": "Model Architecture"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model-architecture",
        "label": "Model Architecture"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:generalisation",
        "label": "Generalisation"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:bias-variance-tradeoff",
        "label": "Bias-Variance Tradeoff"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:no-free-lunch-theorem",
        "label": "No Free Lunch Theorem"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bias-variance-tradeoff",
        "label": "Bias-Variance Tradeoff"
      },
      {
        "@id": "urn:ngm:class:generalisation",
        "label": "Generalisation"
      },
      {
        "@id": "urn:ngm:class:hypothesis-space",
        "label": "Hypothesis Space"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:learning-bias",
      "label": "Learning Bias"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Inductive Bias]] is defined in relation to [[Machine Learning]], [[Generalisation]], [[Model Architecture]], [[Regularisation]], building on [[Machine Learning]].
  - Inductive bias is the set of assumptions a learning algorithm uses to generalise from finite training data to unseen inputs. Because infinitely many functions fit any finite sample, a learner must prefer some hypotheses over others, and that preference — encoded in model architecture, regularisation, priors, or the choice of hypothesis space — is its inductive bias. Appropriate inductive bias is what lets a model extrapolate sensibly rather than merely memorise.

- ### Overview
  - Without bias, learning is impossible: a hypothesis consistent with all observed labels can disagree arbitrarily on every unobserved point. Inductive bias resolves this underdetermination by restricting or weighting the space of candidate functions, expressing prior belief about which solutions are plausible.
  - The No Free Lunch theorem formalises why bias is unavoidable: averaged over all possible problems, no learner beats random guessing, so any practical advantage comes from assumptions matched to the structure of real-world tasks.

- ### Mechanisms
  - Architectural bias: convolution encodes translation equivariance, recurrence and attention encode sequence structure, graph networks encode relational structure.
  - Regularisation and priors: weight decay, dropout, and Bayesian priors bias learning toward simpler or smoother functions.
  - Hypothesis-space restriction: choosing linear models, decision trees, or kernels constrains what can be expressed and thereby what is learned.

- ### Applications
  - Convolutional networks exploit spatial locality for image tasks; transformers exploit long-range token interactions for language.
  - Choosing regularisation strength to trade variance for bias and control the bias-variance tradeoff.
  - Designing data augmentations that inject invariances as a soft inductive bias.

- ### Relationships
  - subClassOf:: [[Machine Learning]]
  - requires:: [[Hypothesis Space]]
  - requires:: [[Model Architecture]]
  - dependsOn:: [[Model Architecture]]
  - dependsOn:: [[Regularisation]]
  - enables:: [[Generalisation]]
  - enables:: [[Supervised Learning]]
  - uses:: [[Regularisation]]
  - uses:: [[Bias-Variance Tradeoff]]
  - supports:: [[Deep Learning]]
  - supports:: [[Neural Network]]
  - contrastsWith:: [[Overfitting]]
  - partOf:: [[Machine Learning]]
  - bridgesTo:: [[No Free Lunch Theorem]]
  - relatedTo:: [[Bias-Variance Tradeoff]]
  - relatedTo:: [[Generalisation]]
  - relatedTo:: [[Hypothesis Space]]
  - relatedTo:: [[Deep Learning]]
  - sameAs:: [[Learning Bias]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
