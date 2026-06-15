public:: true

# Bayesian Knowledge Tracing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bayesian-knowledge-tracing",
  "@type": "Page",
  "title": "Bayesian Knowledge Tracing",
  "vc:slug": "bayesian-knowledge-tracing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bayesian-knowledge-tracing",
  "@type": "Class",
  "label": "Bayesian Knowledge Tracing",
  "definition": "Bayesian Knowledge Tracing (BKT) is a probabilistic modelling technique that estimates a learner's mastery of a skill over time by treating knowledge as a latent binary state inferred from a sequence of correct and incorrect responses. Using a hidden Markov model with parameters for prior knowledge, learning, guessing, and slipping, BKT updates the probability that a student has mastered each skill after every interaction. It is a cornerstone of intelligent tutoring systems and adaptive learning, enabling personalised pacing and content selection.",
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
        "@id": "urn:ngm:class:intelligent-tutoring-system",
        "label": "Intelligent Tutoring System"
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
        "@id": "urn:ngm:class:item-response-theory",
        "label": "Item Response Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:item-response-theory",
        "label": "Item Response Theory"
      },
      {
        "@id": "urn:ngm:class:spaced-repetition",
        "label": "Spaced Repetition"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
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
      "@id": "urn:ngm:class:bkt",
      "label": "BKT"
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
  - [[Bayesian Knowledge Tracing]] is a probabilistic learner-modelling method that infers latent skill mastery from response sequences, underpinning [[Adaptive Learning]] and [[Intelligent Tutoring System]] pacing. It applies a hidden Markov model to estimate when a student has learned each skill, drawing on [[Machine Learning]] and [[Cognitive Science]].
- ### Overview
  - BKT represents each skill's mastery as an unobservable binary state. After each attempt, Bayesian updating revises the probability of mastery using whether the response was correct, accounting for the chance that a knowing student slipped or an unknowing student guessed.
  - The model's four parameters — prior knowledge, transition (learning) rate, guess rate, and slip rate — are typically fitted from historical response data per skill, allowing the tutor to predict performance and decide when a learner is ready to advance.
- ### Mechanisms
  - The hidden Markov state evolves only from not-mastered to mastered, reflecting that knowledge, once acquired, is assumed retained within a session.
  - Guess and slip parameters separate true mastery from noisy observations.
  - Posterior mastery probability drives decisions to advance, remediate, or repeat.
  - Parameter fitting uses expectation-maximisation or gradient methods over logged interactions.
- ### Applications
  - Skill-by-skill progress tracking in cognitive tutors for mathematics and programming.
  - Mastery-based gating that holds learners on a topic until a threshold is reached.
  - Dashboards reporting estimated mastery to learners and instructors.
  - Content sequencing in [[Personalised Learning]] platforms.
- ### Relationships
  - partOf:: [[Adaptive Learning]]
  - partOf:: [[Intelligent Tutoring System]]
  - uses:: [[Machine Learning]]
  - implements:: [[Adaptive Learning]]
  - enables:: [[Personalised Learning]]
  - enables:: [[Intelligent Tutoring System]]
  - requires:: [[Educational Technology]]
  - supports:: [[Personalised Learning]]
  - contrastsWith:: [[Item Response Theory]]
  - relatedTo:: [[Item Response Theory]]
  - relatedTo:: [[Spaced Repetition]]
  - relatedTo:: [[Cognitive Science]]
  - bridgesTo:: [[Artificial Intelligence]]
- ### Provenance
  - updated:: 2026-06-15
