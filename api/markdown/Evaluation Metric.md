public:: true

# Evaluation Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:evaluation-metric",
  "@type": "Page",
  "vc:slug": "evaluation-metric",
  "title": "Evaluation Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:evaluation-metric",
  "@type": "Class",
  "label": "Evaluation Metric",
  "definition": "An evaluation metric is a quantitative or qualitative measure used to assess the performance, quality, or behaviour of a machine learning model, algorithm, or system against a defined objective. Metrics are computed over held-out test data or through human judgment protocols and provide the empirical basis for model comparison, selection, and deployment decisions. The choice of metric directly shapes what properties a model optimises for during training and what trade-offs are made between competing objectives such as accuracy, fairness, and calibration.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metrics"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:accuracy", "label": "Accuracy"},
      {"@id": "urn:ngm:class:precision", "label": "Precision"},
      {"@id": "urn:ngm:class:recall", "label": "Recall"},
      {"@id": "urn:ngm:class:f1-score", "label": "F1 Score"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"},
      {"@id": "urn:ngm:class:performance-benchmarks", "label": "Performance Benchmarks"},
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An evaluation metric is a quantitative measure applied to model outputs or system behaviours to determine how well a model meets its intended objectives, providing the empirical basis for comparison, selection, and iterative improvement.
- ### Relationships
  - Evaluation Metric is a subclass of [[Performance Metrics]] and encompasses specific measures including [[Accuracy]], [[Precision]], [[Recall]], [[F1 Score]], and [[Loss Function]]. Metrics inform [[Model Performance]] reporting and underpin [[Benchmark Standard]] comparisons. They feed directly into [[Model Evaluation Results]] and guide both [[Model Training]] and governance processes including [[AI Safety]] and [[AI Governance]] audits. [[Fairness Metrics]] constitute a specialised subtype addressing equitable treatment across demographic groups.
- ### Content
  - Evaluation metrics form the empirical backbone of machine learning science. Without well-defined metrics, claims about model quality are unfalsifiable; with them, competing approaches can be ranked on a common scale and progress tracked over time. The choice of metric is therefore a design decision with significant downstream consequences: a model optimised for raw accuracy on an imbalanced classification task may achieve high scores while failing on minority classes, whereas F1 score or area under the ROC curve would expose such failure modes.

  - Task type strongly determines which metrics are applicable. For binary and multi-class classification, accuracy, precision, recall, F1, and AUC-ROC are standard. For regression, mean absolute error (MAE), mean squared error (MSE), and R-squared are common. For natural language generation, BLEU, ROUGE, and METEOR measure n-gram overlap, while more recent alternatives such as BERTScore and MoverScore use learned representations to capture semantic similarity. For image generation, Fréchet Inception Distance (FID) and CLIP Score are widely used.

  - Human evaluation metrics exist alongside automatic measures, particularly for open-ended generation tasks such as dialogue, creative writing, and visual question answering. Human raters assess fluency, coherence, relevance, and factual accuracy, often through structured rating scales. The correlation between automatic and human metrics is an active research area; misalignment between the two is a known failure mode that can mislead model development.

  - Metric gaming and Goodhart's Law pose persistent challenges. Once a metric becomes a training target, models may learn to optimise the proxy measure without improving the underlying quality it was meant to represent. This drives demand for diverse metric suites and held-out evaluation sets that are decoupled from training signal. Multi-metric evaluation frameworks and Pareto-front analysis are increasingly used to surface trade-offs rather than collapse everything to a single number.

  - Regulatory and governance frameworks are beginning to mandate specific evaluation metrics as part of model documentation requirements. The EU AI Act and related guidelines require risk-level-appropriate evaluation evidence; AI model cards and datasheets specify which metrics were measured, on which populations, and under what conditions, institutionalising metric transparency as a component of responsible AI practice.
