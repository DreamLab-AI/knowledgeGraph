public:: true

# Score Function

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:score-function",
  "@type": "Page",
  "title": "Score Function",
  "vc:slug": "score-function",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:score-function",
  "@type": "Class",
  "label": "Score Function",
  "definition": "In score-based generative modelling, the Score Function is the gradient of the log probability density of the data with respect to the input, indicating the direction of increasing data likelihood. Diffusion models learn to estimate this score across noise levels, then use it to iteratively denoise samples drawn from a simple prior. The score function connects diffusion models to Langevin-style sampling and energy-based formulations.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:diffusion-model",
      "label": "Diffusion Model"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:noise-schedule",
        "label": "Noise Schedule"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:stochastic-differential-equation",
        "label": "Stochastic Differential Equation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
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
  - In score-based generative modelling, the Score Function is the gradient of the log probability density of the data with respect to the input, indicating the direction of increasing data likelihood.
  - Related concepts: [[Diffusion Model]] [[Generative Model]] [[Probability Distribution]] [[Sampling]] [[Stochastic Differential Equation]]
- ### Overview
  - In score-based generative modelling, the Score Function is the gradient of the log probability density of the data with respect to the input, indicating the direction of increasing data likelihood.
  - Diffusion models learn to estimate this score across noise levels, then use it to iteratively denoise samples drawn from a simple prior.
  - The score function connects diffusion models to Langevin-style sampling and energy-based formulations.
  - It is modelled as a subclass of [[Diffusion Model]] within the artificial-intelligence domain.
- ### Key aspects
  - [[Noise Schedule]] is a constituent or mechanism relevant to Score Function.
  - [[Probability Distribution]] is a constituent or mechanism relevant to Score Function.
  - [[Maximum Likelihood Estimation]] is a constituent or mechanism relevant to Score Function.
- ### Mechanisms
  - Score Function enables [[Sampling]].
  - Score Function enables [[Generative Model]].
  - Score Function supports [[Diffusion Model]].
- ### Applications
  - Applied in contexts involving [[Sampling]].
  - Applied in contexts involving [[Generative Model]].
  - Applied in contexts involving [[Diffusion Model]].
  - Applied in contexts involving [[Artificial Intelligence]].
- ### Relationships
  - subClassOf:: [[Diffusion Model]]
  - partOf:: [[Diffusion Model]]
  - uses:: [[Probability Distribution]]
  - uses:: [[Maximum Likelihood Estimation]]
  - hasPart:: [[Noise Schedule]]
  - enables:: [[Sampling]]
  - enables:: [[Generative Model]]
  - dependsOn:: [[Stochastic Differential Equation]]
  - relatedTo:: [[Artificial Intelligence]]
  - supports:: [[Diffusion Model]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
