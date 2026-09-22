public:: true

# Denoising Score Matching
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:denoising-score-matching", "@type":"Page", "title":"Denoising Score Matching", "vc:slug":"denoising-score-matching", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:denoising-score-matching",
  "@type": "Class",
  "label": "Denoising Score Matching",
  "definition": "Denoising score matching is a training objective for learning the score function, the gradient of the log probability density, of a data distribution. Rather than estimating the score directly, it perturbs data with known Gaussian noise and trains a model to predict the noise, which is equivalent to estimating the score of the noise-perturbed distribution. This objective avoids the intractable normalising constant of energy-based models and underpins score-based generative models and diffusion models, where the learned score guides iterative sampling from noise back to data.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:stochastic-differential-equation",
        "label": "Stochastic Differential Equation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vae",
        "label": "Variational Autoencoder"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
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
  - [[Denoising Score Matching]] is a training objective that learns the score, the gradient of the log density, of a [[Probability Distribution]].
  - It perturbs data with Gaussian noise and trains a [[Neural Network]] to predict that noise, sidestepping the intractable normalising constant.
  - It is the learning principle behind score-based and [[Diffusion Model]] generation.
- ### Overview
  - Estimating a probability density directly requires its normalising constant, which is intractable for high-dimensional data.
  - Score matching circumvents this by learning the score function instead, since the score does not depend on the normaliser.
  - The denoising variant adds known noise and reduces the objective to a simple regression: predict the added noise.
  - Sampling then follows the learned score, for example via Langevin dynamics or by reversing a noising process.
- ### Mechanisms
  - Noise perturbation: data are corrupted at multiple noise scales to cover the distribution broadly.
  - Score estimation: the model output relates directly to the gradient of the log density of the perturbed data.
  - Equivalence: minimising the denoising objective is provably equivalent to matching the perturbed-data score.
  - Iterative sampling: starting from noise, repeated score-guided steps transport samples back toward the data manifold.
- ### Applications
  - High-fidelity image, audio and video synthesis through diffusion models.
  - Conditional generation such as text-to-image and inpainting.
  - Inverse problems and scientific data generation where the score guides reconstruction.
  - Likelihood-free density modelling in energy-based and score-based frameworks.
- ### Relationships
  - partOf:: [[Diffusion Model]]
  - implements:: [[Generative Model]]
  - uses:: [[Neural Network]]
  - uses:: [[Gradient Descent]]
  - requires:: [[Probability Distribution]]
  - requires:: [[Stochastic Process]]
  - hasPart:: [[Sampling]]
  - enables:: [[Diffusion Model]]
  - dependsOn:: [[Stochastic Differential Equation]]
  - contrastsWith:: [[Variational Autoencoder]]
  - relatedTo:: [[Markov Chain]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
