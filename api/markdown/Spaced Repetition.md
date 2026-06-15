public:: true

# Spaced Repetition
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:spaced-repetition",
  "@type": "Page",
  "title": "Spaced Repetition",
  "vc:slug": "spaced-repetition",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spaced-repetition",
  "@type": "Class",
  "label": "Spaced Repetition",
  "definition": "Spaced repetition is a learning technique that schedules reviews of material at increasing intervals timed to occur just before predicted forgetting, exploiting the psychological spacing effect to strengthen long-term retention efficiently. Algorithmic implementations track each item's review history and recall outcomes to compute the optimal next-review date, concentrating study effort on material at risk of being forgotten. It is a core mechanism in flashcard software and the memory-management components of adaptive learning systems.",
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
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:educational-technology",
        "label": "Educational Technology"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:personalised-learning",
        "label": "Personalised Learning"
      },
      {
        "@id": "urn:ngm:class:intelligent-tutoring-system",
        "label": "Intelligent Tutoring System"
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
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:item-response-theory",
        "label": "Item Response Theory"
      },
      {
        "@id": "urn:ngm:class:bayesian-knowledge-tracing",
        "label": "Bayesian Knowledge Tracing"
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
      "@id": "urn:ngm:class:spaced-rehearsal",
      "label": "Spaced Rehearsal"
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
  - [[Spaced Repetition]] is a memory-optimisation technique that schedules reviews at expanding intervals to counter forgetting, central to flashcard tools and the retention layer of [[Adaptive Learning]]. It draws on [[Cognitive Science]] and increasingly on [[Machine Learning]] to personalise scheduling.
- ### Overview
  - The technique operationalises the spacing effect: information reviewed at distributed intervals is retained far longer than information crammed in a single session. By reviewing each item just as recall begins to fade, learners maximise retention per unit of study time.
  - Scheduling algorithms model each item's memory strength and project a review date. Correct, effortful recalls lengthen the interval, while failures shorten it, concentrating effort precisely where forgetting is imminent.
- ### Mechanisms
  - The forgetting curve models memory decay over time as the basis for interval selection.
  - Interval-growth algorithms such as SM-2 expand spacing after each successful recall.
  - Recall-difficulty feedback adjusts an item's ease and future intervals.
  - Modern schedulers fit memory models to large datasets to predict optimal review timing.
- ### Applications
  - Flashcard applications for language vocabulary and factual recall.
  - Medical and professional examination preparation requiring durable retention.
  - Memory-management modules within [[Personalised Learning]] platforms.
  - Reinforcement of skills surfaced as at-risk by [[Intelligent Tutoring System]] diagnostics.
- ### Relationships
  - partOf:: [[Adaptive Learning]]
  - partOf:: [[Educational Technology]]
  - uses:: [[Machine Learning]]
  - implements:: [[Adaptive Learning]]
  - enables:: [[Personalised Learning]]
  - requires:: [[Educational Technology]]
  - requires:: [[Cognitive Science]]
  - supports:: [[Personalised Learning]]
  - supports:: [[Intelligent Tutoring System]]
  - contrastsWith:: [[Bayesian Knowledge Tracing]]
  - relatedTo:: [[Cognitive Science]]
  - relatedTo:: [[Item Response Theory]]
  - relatedTo:: [[Bayesian Knowledge Tracing]]
  - bridgesTo:: [[Artificial Intelligence]]
- ### Provenance
  - updated:: 2026-06-15
