public:: true

# Benchmarks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:benchmarks",
  "@type": "Page",
  "vc:slug": "benchmarks",
  "title": "Benchmarks",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:benchmarks",
  "@type": "Class",
  "label": "Benchmarks",
  "definition": "Benchmarks are standardised tasks, datasets, or workloads used to measure and compare the capabilities or performance of systems, models, or components under controlled conditions. In AI they encompass curated evaluation suites that probe language understanding, reasoning, coding, and multimodal perception to produce comparable scores across model generations. In computing and robotics, benchmarks measure throughput, latency, accuracy, and energy efficiency. Benchmark results are published in leaderboards and model cards to support reproducible science and informed procurement decisions.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation benchmarks and leaderboards"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"},
      {"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metrics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"},
      {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:software-testing", "label": "Software Testing"},
      {"@id": "urn:ngm:class:adversarial-testing", "label": "Adversarial Testing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Benchmarks are standardised evaluation suites that apply controlled tasks and [[Evaluation Metric]] measurements to compare the capabilities of AI models, software systems, or hardware components against published baselines.

- ### Relationships
  - Benchmarks use [[Evaluation Metric]] and [[Performance Metrics]] frameworks to quantify results, and their outputs feed directly into [[Model Evaluation Results]] reports and [[Model Performance]] comparisons. They are central to the development and release cycles of [[Large Language Models]], where [[Benchmark Standard]] bodies govern methodology and reproducibility. [[Software Testing]] pipelines incorporate benchmark suites for regression detection, and [[Adversarial Testing]] extends benchmarks into robustness and red-teaming scenarios.

- ### Content
  - Benchmarks serve as the empirical lingua franca of the AI field, allowing researchers, practitioners, and regulators to compare systems that may differ dramatically in architecture and training data. A well-designed benchmark specifies the task format, the evaluation split, the scoring metric, and any constraints on inference time or compute, creating a reproducible experimental protocol. Without such standardisation, claims of superior performance are unverifiable and potentially misleading.

  - In the [[Large Language Models]] era, benchmark suites have expanded from narrow tasks like reading comprehension or named-entity recognition to complex multi-step reasoning challenges. Suites such as MMLU, HumanEval, BIG-Bench, and GPQA probe general knowledge, coding ability, emergent capabilities, and expert-level reasoning. The rapid progression of model scores has repeatedly saturated individual benchmarks, driving the field to continually devise harder and more realistic evaluation settings.

  - A significant challenge is benchmark contamination: training corpora drawn from the open web may include benchmark test sets, inflating apparent performance. Methodological responses include held-out evaluation sets, dynamic benchmarks that regenerate problems programmatically, and third-party blind evaluation services. These safeguards are increasingly codified in [[Benchmark Standard]] frameworks to ensure that reported [[Model Evaluation Results]] reflect genuine capability rather than memorisation.

  - Beyond AI, benchmarks play equally important roles in robotics, where the ISO 9283 standard defines manipulator performance tests, and in high-performance computing, where standardised workloads from organisations such as SPEC guide hardware procurement. The common thread is that benchmarks transform subjective claims into objective, comparable measurements that drive engineering progress.
