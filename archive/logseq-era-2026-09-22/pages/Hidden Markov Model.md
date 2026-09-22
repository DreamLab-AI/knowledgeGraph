public:: true

# Hidden Markov Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:hidden-markov-model",
  "@type": "Page",
  "title": "Hidden Markov Model",
  "vc:slug": "hidden-markov-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hidden-markov-model",
  "@type": "Class",
  "label": "Hidden Markov Model",
  "definition": "A hidden Markov model (HMM) is a probabilistic model for sequences in which an unobserved Markov chain of discrete states generates observable outputs, one per state, according to state-dependent emission distributions. The model is defined by transition probabilities between hidden states and emission probabilities for observations, plus an initial state distribution. HMMs support efficient inference for filtering, decoding, and learning over sequential data.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphical-model",
      "label": "Graphical Model"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:sequence-model",
        "label": "Sequence Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:graphical-model",
        "label": "Graphical Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:part-of-speech-tagging",
        "label": "Part Of Speech Tagging"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:graphical-model",
        "label": "Graphical Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:dynamic-programming",
        "label": "Dynamic Programming"
      },
      {
        "@id": "urn:ngm:class:expectation-maximisation",
        "label": "Expectation Maximisation"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latent-variable-model",
        "label": "Latent Variable Model"
      },
      {
        "@id": "urn:ngm:class:state-machine",
        "label": "State Machine"
      },
      {
        "@id": "urn:ngm:class:time-series",
        "label": "Time Series"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:time-series",
        "label": "Time Series"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:state-machine",
        "label": "State Machine"
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
  - A hidden Markov model (HMM) is a probabilistic model for sequences in which an unobserved Markov chain of discrete states generates observable outputs, one per state, according to state-dependent emission distributions. The model is defined by transition probabilities between hidden states and emission probabilities for observations, plus an initial state distribution. HMMs support efficient inference for filtering, decoding, and learning over sequential data.
  - Related: [[Graphical Model]] [[Markov Chain]] [[Sequence Model]] [[Speech Recognition]] [[Dynamic Programming]]
- ### Overview
  - An HMM combines a Markov chain over hidden states with an emission model that maps each state to a distribution over observations. Three classical problems define its use: evaluating the likelihood of an observation sequence with the forward algorithm, decoding the most probable hidden state sequence with the Viterbi algorithm, and learning the parameters from data with the Baum-Welch algorithm, an instance of expectation-maximisation. As a latent-variable sequence model it powered decades of speech and language processing before deep sequence models became dominant.
- ### Mechanisms
  - A hidden Markov chain governs transitions between discrete states.
  - State-dependent emission distributions produce observations.
  - The forward-backward algorithm computes likelihoods and posteriors.
  - The Viterbi algorithm decodes the most probable state sequence.
  - Baum-Welch training fits parameters via expectation-maximisation.
- ### Applications
  - Speech recognition and acoustic modelling.
  - Part-of-speech tagging and sequence labelling.
  - Bioinformatics, including gene and protein sequence analysis.
  - Gesture and activity recognition.
  - Time-series segmentation and regime detection.
- ### Relationships
  - implements:: [[Sequence Model]]
  - dependsOn:: [[Markov Chain]]
  - dependsOn:: [[Graphical Model]]
  - enables:: [[Speech Recognition]]
  - enables:: [[Part Of Speech Tagging]]
  - partOf:: [[Graphical Model]]
  - uses:: [[Dynamic Programming]]
  - uses:: [[Expectation Maximisation]]
  - uses:: [[Bayesian Inference]]
  - hasPart:: [[Markov Chain]]
  - relatedTo:: [[Latent Variable Model]]
  - relatedTo:: [[State Machine]]
  - relatedTo:: [[Time Series]]
  - supports:: [[Time Series]]
  - contrastsWith:: [[State Machine]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
