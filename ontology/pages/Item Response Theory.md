public:: true

# Item Response Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:item-response-theory",
  "@type": "Page",
  "title": "Item Response Theory",
  "vc:slug": "item-response-theory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:item-response-theory",
  "@type": "Class",
  "label": "Item Response Theory",
  "definition": "Item Response Theory (IRT) is a family of psychometric models that relate the probability of a correct response to a test item to a latent trait of the respondent, such as ability, and to properties of the item, such as difficulty and discrimination. Unlike classical test theory, IRT places examinees and items on a common scale, enabling adaptive testing, equating across forms, and fine-grained measurement of ability. It is widely used in assessment, educational technology, and the adaptive components of intelligent learning systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:adaptive-learning",
      "label": "Adaptive Learning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:adaptive-learning",
        "label": "Adaptive Learning"
      },
      {
        "@id": "urn:ngm:class:educational-technology",
        "label": "Educational Technology"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:adaptive-learning",
        "label": "Adaptive Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:personalised-learning",
        "label": "Personalised Learning"
      },
      {
        "@id": "urn:ngm:class:intelligent-tutoring-system",
        "label": "Intelligent Tutoring System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:educational-technology",
        "label": "Educational Technology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:personalised-learning",
        "label": "Personalised Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bayesian-knowledge-tracing",
        "label": "Bayesian Knowledge Tracing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bayesian-knowledge-tracing",
        "label": "Bayesian Knowledge Tracing"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:intelligent-tutoring-system",
        "label": "Intelligent Tutoring System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:irt",
      "label": "IRT"
    },
    {
      "@id": "urn:ngm:class:latent-trait-theory",
      "label": "Latent Trait Theory"
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
  - [[Item Response Theory]] is a psychometric framework that models the probability of a correct response as a function of a latent ability and item parameters, placing learners and items on a shared scale. It powers adaptive assessment within [[Adaptive Learning]] and [[Educational Technology]], complementing [[Machine Learning]] driven tutors.
- ### Overview
  - IRT shifts measurement from raw test scores to estimated latent traits. Each item is characterised by an item characteristic curve describing how response probability rises with ability, allowing precise, item-aware estimation of where a learner sits on the trait continuum.
  - Because examinees and items share one scale, IRT supports equating across different test forms and selecting the most informative next item for a given ability estimate, the principle behind computerised adaptive testing.
- ### Mechanisms
  - The one-parameter (Rasch) model varies only item difficulty along the ability scale.
  - Two- and three-parameter models add discrimination and guessing parameters for richer item modelling.
  - Item information functions quantify measurement precision at each ability level.
  - Maximum-likelihood and Bayesian estimation recover ability and item parameters from response patterns.
- ### Applications
  - Computerised adaptive testing that tailors item difficulty to each candidate.
  - Standardised assessment design, scoring, and form equating.
  - Ability estimation feeding [[Personalised Learning]] recommendations.
  - Item bank calibration and quality control in [[Intelligent Tutoring System]] platforms.
- ### Relationships
  - partOf:: [[Adaptive Learning]]
  - partOf:: [[Educational Technology]]
  - uses:: [[Machine Learning]]
  - implements:: [[Adaptive Learning]]
  - enables:: [[Personalised Learning]]
  - enables:: [[Intelligent Tutoring System]]
  - requires:: [[Educational Technology]]
  - supports:: [[Personalised Learning]]
  - contrastsWith:: [[Bayesian Knowledge Tracing]]
  - relatedTo:: [[Bayesian Knowledge Tracing]]
  - relatedTo:: [[Cognitive Science]]
  - relatedTo:: [[Intelligent Tutoring System]]
  - bridgesTo:: [[Artificial Intelligence]]
- ### Provenance
  - updated:: 2026-06-15
