public:: true

# Hyperparameter Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hyperparameter-optimisation",
  "@type": "Page",
  "vc:slug": "hyperparameter-optimisation",
  "title": "Hyperparameter Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hyperparameter-optimisation",
  "@type": "Class",
  "label": "Hyperparameter Optimisation",
  "definition": "Hyperparameter optimisation is the automated search process for the configuration values — such as learning rate, regularisation strength, architecture depth, and batch size — that govern a machine learning model's training dynamics but are not learned directly from data, with the aim of maximising held-out validation performance. It encompasses grid search, random search, Bayesian optimisation, and gradient-based meta-learning, operating over an outer loop that wraps the inner model training procedure.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hyperparameter", "label": "Hyperparameter"}],
  "relations": {
    "uses": [{"@id": "urn:ngm:class:neural-architecture-search", "label": "Neural Architecture Search"}, {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"}, {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"}],
    "enables": [{"@id": "urn:ngm:class:model-training", "label": "Model Training"}, {"@id": "urn:ngm:class:machine-learning-discipline-model", "label": "Machine Learning Model"}],
    "relatedTo": [{"@id": "urn:ngm:class:hyperparameter-tuning", "label": "Hyperparameter Tuning"}, {"@id": "urn:ngm:class:learning-rate-schedule", "label": "Learning Rate Schedule"}],
    "dependsOn": [{"@id": "urn:ngm:class:machine-learning-discipline-framework", "label": "Machine Learning Framework"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Hyperparameter Optimisation]] is the outer-loop search process that identifies the best [[Hyperparameter]] configurations for a [[Machine Learning Model]] — values such as learning rate, regularisation coefficients, architecture depth, and [[Batch Size]] that control training dynamics but are not updated by backpropagation. It operates by repeatedly instantiating and training candidate configurations, evaluating each against a validation metric, and using the results to guide the next configuration choice, whether through exhaustive enumeration, random sampling, or principled probabilistic models such as Gaussian Process Bayesian optimisation.

- ### Relationships
  - [[Neural Architecture Search]] extends hyperparameter optimisation to the discrete search space of network topology, jointly optimising architecture and training configuration. [[Gradient Descent]] and [[Learning Rate Schedule]] are themselves subject to optimisation: learning rate warm-up, cosine annealing, and cyclical schedules are common search axes. The optimisation loop wraps a [[Machine Learning Pipeline]] that includes data preprocessing, training, and evaluation, with the whole process orchestrated by [[Machine Learning Framework]]s such as PyTorch Lightning, JAX, or MLflow.

- ### Content
  - Early machine learning practitioners performed hyperparameter selection manually through domain intuition and grid search, a computationally expensive exhaustive enumeration of discrete value grids. Bergstra and Bengio's 2012 paper on random search demonstrated that random sampling over continuous ranges empirically outperforms grid search at equal compute budgets, because relevant hyperparameters typically form a low-dimensional manifold within the full configuration space. This finding shifted standard practice toward random search as the default baseline.

  - Bayesian optimisation formalised principled sequential search by fitting a surrogate probabilistic model (Gaussian Process or Tree-structured Parzen Estimator) to observed (configuration, validation score) pairs and selecting the next configuration via an acquisition function that balances exploration and exploitation. Spearmint, Hyperopt, BOHB, and Optuna are widely adopted implementations. Asynchronous Hyperband (ASHA) and Population-Based Training (PBT) address the compute cost of evaluating each configuration to convergence by early-stopping poor performers and recycling resources to promising configurations.

  - In practice, hyperparameter optimisation is integrated into MLOps platforms — Weights & Biases Sweeps, MLflow, AWS SageMaker Automatic Model Tuning, Google Vertex AI Vizier — making it accessible without manual orchestration. Neural architecture search tools such as Keras Tuner and AutoGluon extend the search to architectural choices, approaching the vision of fully automated machine learning (AutoML). The commercial impact is significant: automated HPO routinely improves model accuracy by 2–10 percentage points over hand-tuned baselines on structured data tasks.

  - In 2024–2025, hyperparameter optimisation for large language models presents unique challenges: the cost of a single training run precludes the hundreds of evaluations assumed by classical Bayesian methods. Proxy tasks, scaling laws extrapolation, and transfer learning from smaller models to inform large-model configuration are active research directions. Curriculum learning schedules, mixed-precision training configurations, and RLHF reward model hyperparameters are new search axes that existing optimisation libraries are being extended to handle.

