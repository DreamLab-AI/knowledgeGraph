public:: true

# Kullback-Leibler Divergence
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:kullback-leibler-divergence",
  "@type": "Page",
  "title": "Kullback-Leibler Divergence",
  "vc:slug": "kullback-leibler-divergence",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kullback-leibler-divergence",
  "@type": "Class",
  "label": "Kullback-Leibler Divergence",
  "definition": "The Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how much one probability distribution differs from a second, reference distribution, expressed as the expected excess number of bits required to encode samples from the first using a code optimised for the second. It is non-negative, equal to zero only when the two distributions are identical, and is asymmetric, so it is a divergence rather than a true metric. KL divergence is central to machine learning, appearing in cross-entropy loss, variational inference, the evidence lower bound of variational autoencoders, and regularisation of policy updates in reinforcement learning.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-theory",
      "label": "Information Theory"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:entropy",
        "label": "Entropy"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - The Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how much one probability distribution differs from a second, reference distribution, expressed as the expected excess number of bits required to encode samples from the first using a code optimised for the second. It is non-negative, equal to zero only when the two distributions are identical, and is asymmetric, so it is a divergence rather than a true metric. KL divergence is central to machine learning, appearing in cross-entropy loss, variational inference, the evidence lower bound of variational autoencoders, and regularisation of policy updates in reinforcement learning.
  - Related core concepts: [[Information Theory]] [[Entropy]] [[Variational Autoencoder]] [[Machine Learning]]
- ### Overview
  - KL divergence measures the information lost when one distribution is used to approximate another reference distribution.
  - It is defined as the expectation, under the first distribution, of the logarithmic ratio of the two distributions.
  - Because it is asymmetric and does not satisfy the triangle inequality, it is a divergence rather than a true distance metric.
- ### Mechanisms
  - Non-negativity: KL divergence is always at least zero, equalling zero only when the distributions coincide (Gibbs' inequality).
  - Asymmetry: the divergence from P to Q generally differs from Q to P, so direction matters in optimisation.
  - Decomposition: cross-entropy equals entropy plus KL divergence, linking it directly to common loss functions.
  - Estimation: it can be approximated from samples and is differentiable for gradient-based learning.
- ### Applications
  - Cross-entropy loss for training classifiers.
  - The evidence lower bound regulariser in variational autoencoders.
  - Policy regularisation in reinforcement learning algorithms.
  - Knowledge distillation matching student and teacher distributions.
- ### Relationships
  - hasPart:: [[Entropy]]
  - partOf:: [[Information Theory]]
  - implements:: [[Loss Function]]
  - requires:: [[Probability Distribution]]
  - requires:: [[Statistics]]
  - enables:: [[Variational Inference]]
  - enables:: [[Model Training]]
  - uses:: [[Probability Theory]]
  - supports:: [[Variational Autoencoder]]
  - supports:: [[Knowledge Distillation]]
  - supports:: [[Reinforcement Learning]]
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Bayesian Inference]]
  - relatedTo:: [[Gradient Descent]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Generative Model]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
