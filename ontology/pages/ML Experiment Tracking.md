public:: true

# ML Experiment Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1fe14f0aed73e945e8037499e6bec3958d249d5446037c4c9adf7a36ac482113",
  "@type": "Page",
  "vc:slug": "experiment-tracking",
  "title": "ML Experiment Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:linked:data-versioning",
      "vc:label": "Data Versioning"
    },
    {
      "@id": "urn:visionflow:linked:reproducibility",
      "vc:label": "Reproducibility"
    },
    {
      "@id": "urn:visionflow:linked:mlflow",
      "vc:label": "MLflow"
    },
    {
      "@id": "urn:visionflow:linked:dvc",
      "vc:label": "DVC"
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
  "@id": "urn:ngm:class:experiment-tracking",
  "@type": "Class",
  "label": "ML Experiment Tracking",
  "definition": "The systematic recording of every machine-learning training run — hyperparameters, code version, dataset version, environment, metrics, and resulting artefacts — in a queryable store, so that results can be compared across runs, reproduced exactly, and promoted to production with a complete audit trail linking a deployed model back to the precise conditions that produced it.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:mlops",
    "label": "MLOps"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-model-development",
        "label": "AI Model Development"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Data Versioning"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mlflow",
        "label": "MLflow"
      },
      {
        "@id": "urn:ngm:class:weights-and-biases",
        "label": "Weights and Biases"
      },
      {
        "@id": "urn:ngm:class:dvc",
        "label": "DVC"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The systematic recording of every machine-learning training run — hyperparameters, code version, dataset version, environment, metrics, and resulting artefacts — in a queryable store, so that results can be compared across runs, reproduced exactly, and promoted to production with a complete audit trail linking a deployed model back to the precise conditions that produced it."

- ### Semantic Classification
  - owl-class:: machine-learning:ExperimentTracking
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[MLOps]]
  - part-of:: [[AI Model Development]]
  - enables:: [[Reproducibility]]
  - uses:: [[Data Versioning]]

- ### Content

  ## Definition

  **Experiment tracking** is the MLOps practice of logging, for every training run, the complete set of inputs and outputs that define it: the hyperparameters chosen, the git commit of the training code, the version of the dataset, the software environment, the metrics observed during and after training, and the model artefacts produced. Where software engineering has version control for code, machine learning needs tracking across three coupled axes — code, data, and configuration — because a model's behaviour is a function of all three. Without it, a team cannot answer basic questions such as "which run produced the model now in production?" or "what changed between the run that worked and the run that regressed?"

  A tracking system typically exposes a logging API called from training scripts, a backing store for run metadata, and a UI for comparing runs side by side — sorting by metric, plotting learning curves, and diffing hyperparameters. Mature setups link tracking to [[Data Versioning]] tools such as [[DVC]] so that each run references an immutable dataset hash, and to a [[Model Registry]] so that promotion from experiment to staging to production carries the full lineage with it.

  The practice underpins scientific [[Reproducibility]] in applied ML and is increasingly a compliance requirement: audit regimes for high-risk AI systems (for example under the EU AI Act) expect organisations to demonstrate exactly how a deployed model was produced, which is only possible if the producing run was tracked.

  ## Technical Details

  **What gets logged per run**:
  - Parameters: learning rate, batch size, architecture choices, random seeds
  - Source: git commit hash, dirty-state diff, entry-point command
  - Data: dataset identifier and content hash (via DVC, lakeFS, or object-store snapshots)
  - Environment: container image, dependency lockfile, hardware (GPU type, count)
  - Metrics: stepwise training/validation curves plus final evaluation scores
  - Artefacts: model weights, tokenisers, plots, evaluation reports

  **Representative tooling**:
  - [[MLflow]] — open-source tracking server with autologging and a model registry; the de facto self-hosted standard
  - [[Weights and Biases]] — hosted tracking with rich collaborative dashboards and sweep orchestration
  - [[DVC]] — git-native experiment tracking where runs are lightweight commits over versioned data pipelines
  - Neptune, Comet, ClearML, TensorBoard — alternatives spanning hosted, self-hosted, and visualisation-first niches

  **Good practice**: log seeds and environment for exact reruns; treat runs as immutable records; tag runs with the hypothesis being tested so the store reads as a lab notebook rather than a metrics dump; and gate [[Hyperparameter Tuning]] sweeps through the same tracking path as manual runs so all evidence is comparable.

  ## Current Landscape

  - **MLflow 3 (released June 2025)** reoriented the de facto open-source standard around generative AI: a new first-class `LoggedModel` entity moves beyond the run-centric design, and MLflow Tracing provides auto-instrumented, hierarchical observability for 20+ GenAI libraries (OpenAI, LangChain, LlamaIndex, LangGraph, AutoGen, PydanticAI, smolagents), with token/cost tracking, a prompt registry, and human/LLM-judge feedback APIs.
  - **Managed offerings followed quickly**: Amazon SageMaker AI shipped fully managed MLflow 3.0 in July 2025, positioning tracing and version lineage as the debugging backbone for GenAI applications, alongside Databricks' managed MLflow.
  - **Consolidation among vendors**: Weights & Biases was acquired by GPU cloud provider CoreWeave in 2025 and now vertically integrates with that compute stack (its Weave product covers GenAI tracing); Neptune.ai positions on governance and extreme logging scale for foundation-model builders.
  - **Regulatory pull**: the EU AI Act's obligations for general-purpose AI model providers applied from 2 August 2025, requiring maintained technical documentation of training processes, evaluation results, data sources, and compute — an audit trail that is only practically producible from systematic experiment tracking.
  - **Scope shift**: the discipline's centre of gravity has widened from metric-curve comparison for training runs to full-lineage observability across models, prompts, agents, and evaluations — a convergence of experiment tracking with production tracing.

  **Sources**:
  - https://mlflow.org/releases/3/
  - https://aws.amazon.com/about-aws/whats-new/2025/07/fully-managed-mlflow-3-0-amazon-sagemaker-ai/
  - https://www.databricks.com/blog/mlflow-30-unified-ai-experimentation-observability-and-governance
  - https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers
