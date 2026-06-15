public:: true

# Score-Based Generative Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:score-based-generative-model",
  "@type": "Page",
  "title": "Score-Based Generative Model",
  "vc:slug": "score-based-generative-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:score-based-generative-model",
  "@type": "Class",
  "label": "Score-Based Generative Model",
  "definition": "A score-based generative model is a class of generative model that learns the gradient of the log probability density of data — the score function — and samples by reversing a noising process using that learned score. Training perturbs data with noise at multiple scales and fits a neural network to estimate the score at each scale, after which Langevin-style or reverse stochastic-differential-equation dynamics transform noise into samples. The framework provides a unifying continuous-time view that subsumes denoising diffusion models.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:stochastic-differential-equation",
        "label": "Stochastic Differential Equation"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
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
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:latent-diffusion",
        "label": "Latent Diffusion"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:diffusion-policy",
        "label": "Diffusion Policy"
      },
      {
        "@id": "urn:ngm:class:classifier-free-guidance",
        "label": "Classifier-Free Guidance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:flow-matching",
        "label": "Flow Matching"
      },
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
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
	- A [[Score-Based Generative Model]] learns the score (the gradient of the log data density) and generates samples by reversing a noising process, closely related to the [[Diffusion Model]] family.
	- It relies on [[Stochastic Differential Equation]] dynamics and a [[Neural Network]] score estimator trained with [[Deep Learning]].
- ### Overview
	- Rather than modelling the density directly, the model estimates its gradient, sidestepping the intractable normalising constant.
	- A forward process progressively corrupts data into noise; a learned reverse process, driven by the estimated score, transforms noise back into data.
	- Song and Ermon's continuous-time formulation casts both the forward and reverse processes as stochastic differential equations, unifying score matching with denoising diffusion.
- ### Mechanisms
	- Denoising score matching trains the network to predict the score across a continuum of noise levels.
	- Sampling uses annealed Langevin dynamics or numerical SDE/ODE solvers for the reverse process.
	- A probability-flow ODE gives a deterministic sampler and exact likelihood evaluation.
- ### Applications
	- High-fidelity image, audio, and video synthesis.
	- Robotic action generation via [[Diffusion Policy]].
	- Inverse problems, super-resolution, and conditional generation with [[Classifier-Free Guidance]].
- ### Relationships
	- dependsOn:: [[Stochastic Differential Equation]]
	- dependsOn:: [[Neural Network]]
	- implements:: [[Generative Model]]
	- uses:: [[Deep Learning]]
	- relatedTo:: [[Diffusion Model]]
	- relatedTo:: [[Latent Diffusion]]
	- contrastsWith:: [[Generative Adversarial Network]]
	- contrastsWith:: [[Variational Autoencoder]]
	- enables:: [[Diffusion Policy]]
	- enables:: [[Classifier-Free Guidance]]
	- bridgesTo:: [[Flow Matching]]
	- bridgesTo:: [[Markov Chain Monte Carlo]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
