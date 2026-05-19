schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#Bagging
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:bagging
public:: true

# Bagging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:daa68d41d7c470b612c36697f95ce59222aa1fa0843eb601465a0d8f3e8b37ce",
  "@type": "Page",
  "vc:slug": "bagging",
  "title": "Bagging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:parallel-training",
      "vc:label": "Parallel Training"
    },
    {
      "@id": "urn:visionflow:owl:class:ensemble-methods",
      "vc:label": "Ensemble Methods"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Digital Asset]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d80d097688e9"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#Bagging"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1016"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Bagging"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:bagging"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:bagging"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:daa68d41d7c470b612c36697f95ce59222aa1fa0843eb601465a0d8f3e8b37ce@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:bagging",
  "@type": "OntologyClass",
  "label": "Bagging",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:ensemble-methods",
      "vc:label": "Ensemble Methods"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:daa68d41d7c470b612c36697f95ce59222aa1fa0843eb601465a0d8f3e8b37ce"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:daa68d41d7c470b612c36697f95ce59222aa1fa0843eb601465a0d8f3e8b37ce@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Bagging is a concept within the ai domain.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:parallel-training",
      "vc:label": "Parallel Training"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:digital-asset",
      "vc:label": "Digital Asset"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bagging:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:daa68d41d7c470b612c36697f95ce59222aa1fa0843eb601465a0d8f3e8b37ce"
  },
  "vc:resolutions": [
    {
      "raw": "[[Parallel Training]]",
      "resolved": "urn:visionflow:linked:parallel-training",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ensemble Methods]]",
      "resolved": "urn:visionflow:owl:class:ensemble-methods",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:daa68d41d7c470b612c36697f95ce59222aa1fa0843eb601465a0d8f3e8b37ce@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Bagging is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Bagging
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Ensemble Methods]]
  - enables:: [[Parallel Training]]

- ### Content

  #### Key Characteristics
  **Advantages:**
  - Reduces variance without increasing bias
  - Prevents overfitting
  - Parallel training (fast with multiple cores)
  - Out-of-bag error estimation (built-in validation)
  - Robust to noisy data
  - Works well with unstable learners (high variance)

  **Best Suited For:**
  - Decision trees (highly unstable)
  - Neural networks
  - Regression models prone to overfitting
  - High-dimensional data

  **Limitations:**
  - Doesn't help with high-bias models
  - Less effective than boosting for bias reduction
  - Increased computational cost
  - Less interpretable than single model
  - Can underfit if base learners too simple

  ### Out-of-Bag (OOB) Evaluation
  - Each model has ~37% samples not in training
  - Use OOB samples for unbiased error estimate
  - No need for separate validation set
  - Similar accuracy to cross-validation
  - Computationally free

  ### Variants and Extensions
  **Random Forest:**
  - Bagging + random feature selection
  - Further increases diversity
  - Reduces correlation between trees

  **Pasting:**
  - Sampling without replacement
  - Less diversity than bagging

  **Random Subspaces:**
  - Sample features instead of instances
  - Useful for high-dimensional data

  **Random Patches:**
  - Sample both instances and features

  ### Hyperparameters
  - Number of estimators (B): 50-500 typical
  - Bootstrap sample size: usually same as training set
  - Max features per model (if using feature sampling)
  - Base learner hyperparameters

  ### Implementation Notes
  ```python
  # Scikit-learn example
  from sklearn.ensemble import BaggingClassifier
  from sklearn.tree import DecisionTreeClassifier

  bagging = BaggingClassifier(
    base_estimator=DecisionTreeClassifier(),
    n_estimators=100,
    max_samples=1.0,  # 100% of training size
    bootstrap=True,   # with replacement
    oob_score=True,   # compute OOB error
    n_jobs=-1         # parallel training
  )
  ```

  ### Applications
  - Credit risk assessment
  - Medical diagnosis
  - Image classification
  - Anomaly detection
  - Time series forecasting
  - Customer segmentation

  ### Comparison with Boosting
  | Aspect | Bagging | Boosting |
  |--------|---------|----------|
  | Training | Parallel | Sequential |
  | Focus | Reduce variance | Reduce bias |
  | Weighting | Equal weights | Adaptive weights |
  | Speed | Faster (parallelizable) | Slower |
  | Overfitting | Less prone | More prone |
  | Outliers | Robust | Sensitive |

  ### Historical Note
  Introduced by Leo Breiman in 1994, bagging laid the foundation for Random Forests and demonstrated that model diversity through randomization could significantly improve generalization.

  ### Definition
  Bagging (Bootstrap Aggregating) is a parallel ensemble learning technique that trains multiple models independently on different random subsets of the training data created through bootstrap sampling (sampling with replacement). By averaging predictions from diverse models, bagging reduces variance and prevents overfitting, making it particularly effective with high-variance, low-bias models like decision trees.

  ### Algorithm Overview
  1. **Bootstrap Sampling:**
   - Create B bootstrap samples from training set
   - Each sample: randomly select N instances with replacement
   - ~63.2% unique instances per sample
   - ~36.8% out-of-bag (OOB) instances

  2. **Parallel Training:**
   - Train independent model on each bootstrap sample
   - Same learning algorithm for all models
   - No communication between models

  3. **Aggregation:**
   - Classification: majority voting
   - Regression: average predictions
   - Can use weighted or probability-based voting

  ### Mathematical Foundation
  **Variance Reduction:**
  - Individual model variance: σ²
  - If models independent: ensemble variance ≈ σ²/B
  - Practical reduction less due to correlation
  - Goal: create diverse, low-correlation models

  **Bootstrap Statistics:**
  - Each bootstrap sample contains ~63.2% unique instances
  - Probability of instance selected: 1 - (1-1/N)^N ≈ 1 - 1/e
  - OOB instances serve as validation set

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
