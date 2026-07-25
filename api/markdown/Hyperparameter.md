public:: true

# Hyperparameter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:935033bece42b6253070d2d0cbe4b7b2ebaac017d24fdeb058735229e5bb0825",
  "@type": "Page",
  "vc:slug": "hyperparameter",
  "title": "Hyperparameter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "MachineLearningDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0048"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hyperparameter"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hyperparameter",
  "@type": "Class",
  "label": "Hyperparameter",
  "definition": "A configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, number of layers, dropout rate, and regularisation coefficients. Hyperparameter selection directly determines model capacity, convergence speed, and generalisation, making their tuning a critical step in building effective machine learning systems.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning Discipline"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:batch-size",
        "label": "Batch Size"
      },
      {
        "@id": "urn:ngm:class:learning-rate-schedule",
        "label": "Learning Rate Schedule"
      },
      {
        "@id": "urn:ngm:class:dropout",
        "label": "Dropout"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-configuration",
        "label": "Model Configuration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:validation-data",
        "label": "Validation Data"
      },
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:neural-network-architecture",
        "label": "Neural Network Architecture"
      },
      {
        "@id": "urn:ngm:class:generalisation",
        "label": "Generalisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:training-dataset",
        "label": "Training Dataset"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      },
      {
        "@id": "urn:ngm:class:grid-search",
        "label": "Grid Search"
      },
      {
        "@id": "urn:ngm:class:random-search",
        "label": "Random Search"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:auto-ml",
        "label": "AutoML"
      },
      {
        "@id": "urn:ngm:class:neural-architecture-search",
        "label": "Neural Architecture Search"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:parameter",
        "label": "Model Parameter"
      },
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:meta-learning",
        "label": "Meta-Learning"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:model-selection",
        "label": "Model Selection"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tuning-parameter",
      "label": "Tuning Parameter"
    },
    {
      "@id": "urn:ngm:class:training-configuration-variable",
      "label": "Training Configuration Variable"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hyperparameter:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:935033bece42b6253070d2d0cbe4b7b2ebaac017d24fdeb058735229e5bb0825"
  },
  "vc:resolutions": [
    {
      "raw": "[[MachineLearningDomain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, and number of layers.
- ### Semantic Classification
  - owl-class:: artificial-intelligence:Hyperparameter
  - owl-role:: Concept
  - belongs-to-domain:: [[MachineLearningDomain]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - ### Primary Definition
  A **Hyperparameter** is a configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, and number of layers. Hyperparameters are tuned through experimentation.
  ## Academic Context
  - Brief contextual overview
  - Hyperparameters are foundational to machine learning, controlling how models learn without being learned themselves from training data
  - Distinguished from model parameters (weights and biases learned during training)
  - Critical for model performance and generalisation
  - Academic foundations
  - Formal definition established in ISO/IEC 22989:2022 for AI terminology
  - Extensively studied in optimisation theory and statistical learning frameworks
  - Research spans automated hyperparameter tuning, neural architecture search, and meta-learning
  ## Current Landscape (2026)
  - Industry adoption and implementations
  - Universal across all machine learning frameworks including TensorFlow, PyTorch, scikit-learn, and JAX
  - Automated tuning tools widely adopted: Optuna, Ray Tune, Weights & Biases Sweeps
  - UK companies like DeepMind (Google subsidiary) and Faculty (acquired by Accenture in January 2026) have pioneered efficient hyperparameter optimisation
  - Technical capabilities and limitations
  - Common hyperparameters include learning rate, batch size, number of layers, dropout rate, regularisation strength
  - Manual tuning remains time-consuming and computationally expensive
  - AutoML platforms increasingly automate selection but may lack domain-specific insights
  - Standards and frameworks
  - ISO/IEC 22989:2022 provides standardised AI terminology including hyperparameters
  - NIST AI Risk Management Framework addresses documentation requirements
  - EU AI Act Article 11 mandates disclosure of hyperparameter choices for high-risk systems
  ## Research & Literature
  - Key academic papers and sources
  - Bergstra, J., & Bengio, Y. (2012). "Random Search for Hyper-Parameter Optimization." Journal of Machine Learning Research, 13, 281-305. [http://jmlr.org/papers/v13/bergstra12a.html](http://jmlr.org/papers/v13/bergstra12a.html)
  - Feurer, M., & Hutter, F. (2019). "Hyperparameter Optimization." In Automated Machine Learning (pp. 3-33). Springer. [https://doi.org/10.1007/978-3-030-05318-5_1](https://doi.org/10.1007/978-3-030-05318-5_1)
  - Elsken, T., et al. (2019). "Neural Architecture Search: A Survey." Journal of Machine Learning Research, 20(55), 1-21. [http://jmlr.org/papers/v20/18-598.html](http://jmlr.org/papers/v20/18-598.html)
  - Ongoing research directions
  - Transfer learning for hyperparameter tuning across related tasks
  - Bayesian optimisation and Gaussian processes for efficient search
  - Meta-learning approaches to learn optimal hyperparameter configurations
  ## UK Context
  - British contributions and implementations
  - DeepMind's research on automated hyperparameter tuning for reinforcement learning systems
  - University of Oxford's work on Bayesian optimisation for hyperparameter search
  - Faculty (acquired by Accenture in January 2026) developed enterprise AutoML platforms with sophisticated tuning
  - North England innovation hubs
  - University of Manchester's machine learning research group explores efficient tuning methods
  - Leeds Institute for Data Analytics investigates hyperparameter optimisation for healthcare AI
  - Regional case studies
  - Manchester-based Peak (acquired by UiPath in March 2025) applies automated hyperparameter tuning to retail forecasting and inventory optimisation
  - Newcastle University's digital health projects optimise medical imaging models via principled hyperparameter search
  ## Future Directions
  - Emerging trends and developments
  - Neural architecture search (NAS) automating both architecture and hyperparameter selection
  - Meta-learning frameworks predicting optimal hyperparameters from dataset characteristics
  - Green AI initiatives balancing performance with energy efficiency in hyperparameter tuning
  - Anticipated challenges
  - Computational cost of exhaustive search remains prohibitive for large-scale models
  - Generalisation across domains still requires domain expertise
  - Explainability of automated tuning decisions for regulatory compliance
  - Research priorities
  - Efficient search algorithms reducing computational burden
  - Transfer learning for hyperparameter configurations
  - Integration with model interpretability and fairness constraints
  ## Hyperparameter Tuning Methods
  - Grid search
  - Exhaustive search over specified parameter grid
  - Guarantees finding best combination within grid but computationally expensive
  - scikit-learn GridSearchCV: [https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
  - Random search
  - Samples random combinations from parameter distributions
  - Often more efficient than grid search for high-dimensional spaces
  - scikit-learn RandomizedSearchCV: [https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)
  - Bayesian optimisation
  - Uses probabilistic model to guide search towards promising regions
  - Popular tools include Optuna, Hyperopt, and Google Vizier
  - Neural architecture search
  - Automates both architecture and hyperparameter selection
  - Computationally intensive but yields state-of-the-art results
  ## References
  1. ISO/IEC 22989:2022. Information technology — Artificial intelligence — Artificial intelligence concepts and terminology.
  2. Bergstra, J., & Bengio, Y. (2012). Random Search for Hyper-Parameter Optimization. Journal of Machine Learning Research, 13, 281-305. http://jmlr.org/papers/v13/bergstra12a.html
  3. Feurer, M., & Hutter, F. (2019). Hyperparameter Optimization. In Automated Machine Learning (pp. 3-33). Springer. https://doi.org/10.1007/978-3-030-05318-5_1
  4. Elsken, T., et al. (2019). Neural Architecture Search: A Survey. Journal of Machine Learning Research, 20(55), 1-21. http://jmlr.org/papers/v20/18-598.html
  5. NIST AI 100-3. U.S. Leadership in AI: A Plan for Federal Engagement in Developing Technical Standards and Related Tools. https://www.nist.gov/publications/us-leadership-ai-plan-federal-engagement-developing-technical-standards-and-related
  ## Metadata
  - Last Updated: 2025-11-11
  - Review Status: Comprehensive editorial review
  - Verification: Academic sources verified
  - Regional Context: UK context included
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
