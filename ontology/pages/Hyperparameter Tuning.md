public:: true

# Hyperparameter Tuning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hyperparameter-tuning",
  "@type": "Page",
  "vc:slug": "hyperparameter-tuning",
  "title": "Hyperparameter Tuning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hyperparameter-tuning",
  "@type": "Class",
  "label": "Hyperparameter Tuning",
  "definition": "Hyperparameter tuning is the systematic process of searching over the configuration space of parameters that govern the training process of a machine learning model — distinct from the learnable parameters updated during training itself. Common hyperparameters include learning rate, batch size, network depth and width, regularisation coefficients, dropout rate, optimiser choice, and architectural decisions such as kernel size or number of attention heads. The tuning process employs search strategies — including grid search, random search, Bayesian optimisation, population-based methods, and evolutionary algorithms — to identify configurations that maximise model performance on a held-out validation set while controlling for overfitting. Efficient hyperparameter optimisation is critical to practical machine learning deployment because model generalisation is often highly sensitive to these configuration choices, and naive exhaustive search is computationally intractable in high-dimensional spaces.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      },
      {
        "@id": "urn:ngm:class:auto-ml",
        "label": "AutoML"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:validation-set",
        "label": "Validation Set"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      },
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:random-search",
        "label": "Random Search"
      },
      {
        "@id": "urn:ngm:class:grid-search",
        "label": "Grid Search"
      },
      {
        "@id": "urn:ngm:class:evolutionary-algorithm",
        "label": "Evolutionary Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-generalisation",
        "label": "Model Generalisation"
      },
      {
        "@id": "urn:ngm:class:neural-architecture-search",
        "label": "Neural Architecture Search"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:objective-function",
        "label": "Objective Function"
      },
      {
        "@id": "urn:ngm:class:early-stopping",
        "label": "Early Stopping"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Manual Feature Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:meta-learning",
        "label": "Meta-Learning"
      },
      {
        "@id": "urn:ngm:class:empirical-experimental-design-tracking",
        "label": "Experiment Tracking"
      },
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:hyperparameter-optimisation",
      "label": "Hyperparameter Optimisation"
    },
    {
      "@id": "urn:ngm:class:model-selection",
      "label": "Model Selection"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Hyperparameter Tuning]] — also called hyperparameter optimisation — is the systematic search over the configuration space of parameters that control how a [[Machine Learning]] model is trained, rather than the learnable weights adjusted during training itself. Tuning strategies range from exhaustive [[Grid Search]] and [[Random Search]] to surrogate-model-driven [[Bayesian Optimisation]] and population-level methods, all evaluated against a held-out [[Validation Set]] to select configurations that maximise [[Model Generalisation]] without [[Overfitting]]. It is a foundational sub-discipline of [[Machine Learning Pipeline]] construction and the core engine inside [[AutoML]] systems.

- ### Overview
  - Hyperparameter tuning addresses a fundamental challenge in applied machine learning: a model's learnable parameters (weights, biases) are optimised automatically by gradient descent during training, but the configuration choices that govern training — learning rate, batch size, regularisation strength, network depth, dropout rate — cannot be set by the same mechanism. These configuration choices sit "above" the training loop, giving rise to the term *hyper*-parameters.
  - The significance of hyperparameter choices is large: an identical architecture trained with a poorly chosen learning rate may converge to a suboptimal solution or diverge entirely, while the best configuration can yield substantial gains in accuracy, efficiency, or robustness. Hyperparameter sensitivity is especially pronounced in [[Deep Learning]], where the configuration space can have hundreds of dimensions.
  - The fundamental workflow is:
    - Define a search space (ranges and distributions over each hyperparameter).
    - Select a search strategy to propose candidate configurations.
    - Train a model for each configuration (possibly using early termination).
    - Evaluate each configuration on a [[Validation Set]] or via [[Cross-Validation]].
    - Select the configuration achieving the best validation metric.
    - Optionally retrain on the combined training + validation data with the chosen configuration before final test evaluation.
  - A key discipline concern is *over-tuning*: repeated querying of the same validation set can cause the tuned configuration to overfit the validation data itself, so rigorous practitioners maintain a separate held-out test set that is never used during tuning.

- ### Key Components and Mechanisms
  - **Grid Search**
    - Exhaustively evaluates all combinations of a discrete, manually specified parameter grid.
    - Guaranteed to find the best configuration on the grid but scales exponentially: 10 parameters with 10 values each = 10 billion evaluations.
    - Still practical for low-dimensional spaces (2–3 hyperparameters) with cheap models.
  - **Random Search**
    - Randomly samples configurations from defined distributions over the search space.
    - Empirically more efficient than grid search because hyperparameter importance is unequal — random sampling naturally dedicates more evaluations to the most impactful dimensions.
    - Forms the baseline for most modern frameworks including [[Optuna]], Hyperopt, and [[Weights and Biases]] Sweeps.
  - **[[Bayesian Optimisation]]**
    - Treats tuning as black-box optimisation. A probabilistic surrogate model — commonly a [[Gaussian Process]] or Tree-structured Parzen Estimator (TPE) — is fitted to observed (configuration, performance) pairs.
    - An acquisition function (e.g. Expected Improvement, Upper Confidence Bound) selects the next configuration that best trades off exploitation of known good regions and exploration of uncertain ones.
    - Reduces the number of expensive training runs needed, making it the dominant approach for expensive models.
    - Popular implementations: Optuna (TPE), GPyOpt (GP-based), BoTorch (Bayesian optimisation in PyTorch).
  - **Multi-Fidelity Methods**
    - Methods such as Hyperband and Successive Halving allocate a small compute budget to many configurations, progressively promoting only the most promising ones to longer training runs.
    - BOHB (Bayesian Optimisation and Hyperband) combines surrogate-model selection with Hyperband's resource scheduling for state-of-the-art efficiency.
  - **Population-Based Training (PBT)**
    - Trains a population of models concurrently. At intervals, underperforming members copy weights from top performers and perturb their hyperparameters.
    - Dynamically adapts hyperparameters throughout training rather than fixing them at the start, enabling schedules (e.g. cyclical learning rates) to emerge automatically.
    - Popularised by DeepMind for reinforcement learning and language model training.
  - **[[Neural Architecture Search]] (NAS)**
    - Extends hyperparameter tuning to the model topology itself: layer types, skip connections, filter sizes, and cell composition become searchable dimensions.
    - Differentiable NAS (DARTS) relaxes the discrete architecture choices to continuous mixing weights, enabling gradient-based optimisation.
    - The boundary between NAS and hyperparameter tuning is blurry; both are subsumed under [[AutoML]].
  - **[[Early Stopping]]**
    - Terminates unpromising training runs before completion based on validation performance trends, freeing budget for more configurations.
    - Ubiquitous as a regularisation technique and as a multi-fidelity scheduling primitive.
  - **[[Regularisation]] Tuning**
    - Regularisation hyperparameters — L1/L2 penalty coefficients, dropout rate, weight decay — are among the most impactful and are a primary target of tuning.
    - Properly tuned [[Regularisation]] is the primary mechanism for controlling [[Overfitting]].

- ### Applications and Use Cases
  - **[[Deep Learning]] model development**
    - Tuning learning rate and learning-rate schedule is universally the highest-impact hyperparameter for neural network training convergence.
    - Batch size, weight decay, and dropout rate are second-tier priorities. Architecture depth, width, and attention heads are NAS-territory.
  - **[[Transfer Learning]] fine-tuning**
    - When adapting a pre-trained model (e.g. a large language model or vision transformer), the fine-tuning learning rate, number of unfrozen layers, and LoRA rank are critical hyperparameters.
    - Typical search space is much smaller than training from scratch.
  - **Classical machine learning**
    - Tree ensemble methods ([[Random Forest]], XGBoost, LightGBM) have well-understood hyperparameter spaces: n_estimators, max_depth, min_samples_leaf, subsample, learning rate. Bayesian optimisation over these spaces is standard practice in competitive machine learning (Kaggle).
  - **[[Reinforcement Learning]]**
    - RL algorithms are notoriously sensitive to hyperparameters (discount factor, entropy coefficient, clip ratio in PPO). PBT was developed partly to address this.
  - **[[MLOps]] pipelines**
    - Automated retraining pipelines trigger hyperparameter sweeps when model performance degrades on production data, bridging tuning to operational machine learning.
  - **[[Natural Language Processing]]**
    - Fine-tuning large language models on downstream tasks — sentiment analysis, question answering, summarisation — uses hyperparameter tuning to set learning rate warmup steps, sequence length, and adapter rank.

- ### Relationships
  - partOf:: [[Machine Learning Pipeline]]
  - partOf:: [[AutoML]]
  - requires:: [[Validation Set]]
  - requires:: [[Cross-Validation]]
  - requires:: [[Model Evaluation]]
  - uses:: [[Bayesian Optimisation]]
  - uses:: [[Gaussian Process]]
  - uses:: [[Random Search]]
  - uses:: [[Grid Search]]
  - uses:: [[Evolutionary Algorithm]]
  - enables:: [[Model Generalisation]]
  - enables:: [[Neural Architecture Search]]
  - enables:: [[Deep Learning]]
  - dependsOn:: [[Objective Function]]
  - dependsOn:: [[Early Stopping]]
  - dependsOn:: [[Regularisation]]
  - contrastsWith:: [[Overfitting]]
  - relatedTo:: [[Transfer Learning]]
  - relatedTo:: [[Meta-Learning]]
  - relatedTo:: [[Experiment Tracking]]
  - relatedTo:: [[Distributed Training]]
  - bridges-to:: [[MLOps]]
  - bridges-to:: [[Cloud Computing]]

- ### Tools and Frameworks
  - **Optuna** — Bayesian (TPE) and multi-fidelity search; define-by-run API; widely used in industry.
  - **Hyperopt** — TPE-based, older; underpins many downstream frameworks.
  - **Ray Tune** — Distributed hyperparameter search over CPU/GPU clusters; integrates with most search algorithms; canonical for [[Distributed Training]] scenarios.
  - **Weights & Biases Sweeps** — Cloud-managed hyperparameter sweeps with automatic logging and visualisation; tightly integrated with [[Experiment Tracking]].
  - **KerasTuner** — Keras-native tuning with random, Bayesian, and Hyperband strategies.
  - **SMAC3** — Sequential Model-based Algorithm Configuration; strong Gaussian-process-based Bayesian optimisation library from academic ML.
  - **NNI (Neural Network Intelligence)** — Microsoft's open-source toolkit supporting 20+ tuning algorithms including BOHB and PBT.
  - **SigOpt** — Enterprise Bayesian optimisation platform, acquired by Intel; aimed at production model development teams.

- ### Standards and Context
  - There is no formal ISO or IEEE standard governing hyperparameter tuning methodology, but several best practices have emerged as de facto standards in the research community:
    - Report hyperparameter search space, budget, and the number of random seeds used when publishing results (NeurIPS reproducibility checklist).
    - Use stratified [[Cross-Validation]] for small datasets rather than a single validation split to obtain stable performance estimates.
    - Apply the [[Occam's Razor]] principle — prefer simpler configurations when performance differences are within statistical noise.
  - [[MLOps]] platforms ([[Kubeflow]], MLflow, SageMaker) include hyperparameter tuning as a first-class pipeline stage, bridging research practice to production deployment.
  - The [[AutoML]] community has formalised hyperparameter optimisation as a combinatorial optimisation problem (CASH — Combined Algorithm Selection and Hyperparameter optimisation), unifying algorithm selection with hyperparameter configuration.

- ### Provenance
  - sources:: Bergstra & Bengio (2012) "Random Search for Hyper-Parameter Optimisation"; Snoek et al. (2012) "Practical Bayesian Optimisation of Machine Learning Algorithms"; Li et al. (2017) "Hyperband"; Jaderberg et al. (2017) "Population Based Training"; Zoph & Le (2016) "Neural Architecture Search with Reinforcement Learning"
  - updated:: 2026-06-13
