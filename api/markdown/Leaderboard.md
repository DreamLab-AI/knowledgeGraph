public:: true

# Leaderboard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6a86dd616a5812d947ec5f71d182adae2f04e2378c2048427528eba534203e5d",
  "@type": "Page",
  "vc:slug": "leaderboard",
  "title": "Leaderboard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:benchmark-evaluation",
      "vc:label": "Benchmark Evaluation"
    },
    {
      "@id": "urn:visionflow:linked:benchmark-dataset",
      "vc:label": "Benchmark Dataset"
    },
    {
      "@id": "urn:visionflow:linked:model-comparison",
      "vc:label": "Model Comparison"
    },
    {
      "@id": "urn:visionflow:linked:model-evaluation",
      "vc:label": "Model Evaluation"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:leaderboard",
  "@type": "Class",
  "label": "Leaderboard",
  "definition": "A leaderboard is a public, continuously updated ranking of systems or models against a shared benchmark dataset and fixed evaluation protocol, typically reporting standardised metrics on held-out test sets. Leaderboards make model comparison transparent and reproducible, drive competitive progress in machine learning and adjacent fields, and increasingly incorporate human preference voting — whilst also inviting over-fitting, benchmark gaming and metric myopia when rankings are treated as ends in themselves.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:benchmark-evaluation",
    "label": "Benchmark Evaluation"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:benchmark-dataset",
        "label": "Benchmark Dataset"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A leaderboard is a public, continuously updated ranking of systems or models against a shared benchmark dataset and fixed evaluation protocol, typically reporting standardised metrics on held-out test sets. Leaderboards make model comparison transparent and reproducible, drive competitive progress in machine learning and adjacent fields, and increasingly incorporate human preference voting — whilst also inviting over-fitting, benchmark gaming and metric myopia when rankings are treated as ends in themselves."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Leaderboard
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Benchmark Evaluation]]
  - depends-on:: [[Benchmark Dataset]]
  - enables:: [[Model Comparison]]
  - related-to:: [[Model Evaluation]]

- ### Content

  ## Definition

  A **leaderboard** is the public face of [[Benchmark Evaluation]]: an ordered table of submissions ranked by score on a common task, with the [[Benchmark Dataset]], metrics and submission rules fixed so that entries are directly comparable. The format descends from competition science — Netflix Prize (2006), Kaggle competitions, and academic shared tasks — and was institutionalised for machine learning research by benchmarks such as ImageNet/ILSVRC, SQuAD, GLUE and SuperGLUE, whose leaderboards charted (and arguably accelerated) the field's progress from feature engineering to pre-trained transformers.

  A well-run leaderboard enforces evaluation hygiene: hidden or rotated test sets to prevent training on the answers, limited submission frequency to deter test-set probing, standardised harnesses so scores are computed identically for every entrant, and provenance metadata (model size, training data, compute) so rankings can be read in context. It converts scattered claims in papers into a single, auditable record of the state of the art, and gives newcomers an unambiguous target — the essence of the [[Model Comparison]] it exists to enable.

  Leaderboards also distort. Goodhart's law applies with full force: models over-fit benchmark idiosyncrasies, ensembles and prompt tricks chase decimal points that do not transfer, test-set contamination in web-scale training corpora silently inflates scores, and "SOTA-chasing" narrows research agendas. Mature practice therefore treats a leaderboard position as one signal within broader [[Model Evaluation]], not a verdict.

  ## Current Landscape

  In the LLM era leaderboards have multiplied and diversified. Static-benchmark boards (Hugging Face Open LLM Leaderboard, HELM) aggregate suites such as MMLU, GSM8K and BIG-bench; preference-based boards, most prominently LMSYS Chatbot Arena, rank models by Elo ratings computed from millions of blind pairwise human votes, sidestepping test-set contamination at the price of popularity effects and prompt-distribution bias. Domain boards cover code (SWE-bench, LiveCodeBench), agents, safety and multilingual ability. The current frontier concerns trust: contamination detection, private held-out evaluations, statistical significance of rank differences, and disclosure standards — a recognition that leaderboards now shape procurement and investment decisions, not merely academic bragging rights.
