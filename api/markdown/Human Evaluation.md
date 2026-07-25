public:: true

# Human Evaluation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:human-evaluation",
  "@type": "Page",
  "title": "Human Evaluation",
  "vc:slug": "human-evaluation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:human-evaluation",
  "@type": "Class",
  "label": "Human Evaluation",
  "definition": "Human evaluation is the assessment of machine-learning system outputs by human judges against quality criteria such as relevance, fluency, helpfulness, factuality, or preference between alternatives. It complements automatic metrics by capturing nuanced, subjective, and context-dependent judgements that proxy measures miss, and is central to evaluating generative and conversational models. It contrasts with automatic evaluation in cost, latency, and the need to manage rater agreement and bias.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:ai-evaluation",
      "label": "AI Evaluation"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:crowdsourcing",
        "label": "Crowdsourcing"
      },
      {
        "@id": "urn:ngm:class:inter-annotator-agreement",
        "label": "Inter-Annotator Agreement"
      },
      {
        "@id": "urn:ngm:class:a-b-testing",
        "label": "A/B Testing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:inter-annotator-agreement",
        "label": "Inter-Annotator Agreement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
      },
      {
        "@id": "urn:ngm:class:preference-learning",
        "label": "Preference Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:benchmarks",
        "label": "Benchmark"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:conversational-ai",
        "label": "Conversational AI"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
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
  - [[Human Evaluation]] is the rating of model outputs by people against quality criteria such as helpfulness, fluency, and factuality.
  - It complements automatic [[Evaluation Metric]]s, capturing subjective judgements that proxy scores miss.
  - It is a method within [[Model Evaluation]] and underpins [[Reinforcement Learning from Human Feedback]].
- ### Overview
  - Human raters score, rank, or express pairwise preferences over system outputs, often via [[Crowdsourcing]] or expert panels.
  - Protocols control for rater bias, fatigue, and ambiguity, and aggregate judgements with [[Inter-Annotator Agreement]] measures.
  - It is the gold standard for evaluating generative and conversational systems where reference-based metrics correlate poorly with quality.
- ### Key aspects
  - Direct assessment scales or pairwise preference comparisons.
  - Clear rubrics defining each quality dimension.
  - Agreement and reliability tracking via [[Inter-Annotator Agreement]].
  - Higher cost and latency than automatic [[Evaluation Metric]]s.
- ### Mechanisms
  - Task design, rubric authoring, and rater calibration.
  - Sampling outputs and randomising presentation to limit bias.
  - Collecting absolute ratings or A/B preferences.
  - Aggregating with majority vote, Elo, or Bradley-Terry models.
- ### Applications
  - Comparing large language models in [[Model Comparison]] leaderboards.
  - Generating preference data for [[Reinforcement Learning from Human Feedback]].
  - Validating safety, helpfulness, and factuality of generative output.
  - Auditing [[Benchmark]] results where automatic metrics are unreliable.
- ### Relationships
  - contrastsWith:: [[Evaluation Metric]]
  - partOf:: [[Model Evaluation]]
  - uses:: [[Crowdsourcing]]
  - uses:: [[Inter-Annotator Agreement]]
  - uses:: [[A/B Testing]]
  - dependsOn:: [[Inter-Annotator Agreement]]
  - supports:: [[Model Comparison]]
  - supports:: [[Preference Learning]]
  - enables:: [[Reinforcement Learning from Human Feedback]]
  - requires:: [[Benchmark]]
  - relatedTo:: [[Large Language Model]]
  - relatedTo:: [[Conversational AI]]
  - implements:: [[Model Comparison]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
