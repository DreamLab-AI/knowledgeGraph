public:: true

# Stacking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6123f64d04b8e0a9e0d40963b3bc95fe0ef7117242806a56c5e5ee4f2d25664",
  "@type": "Page",
  "vc:slug": "stacking",
  "title": "Stacking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ensemble-methods",
      "vc:label": "Ensemble Methods"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1017"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stacking"
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
  "@id": "urn:ngm:class:stacking",
  "@type": "Class",
  "label": "Stacking",
  "definition": "Stacking is a artificial intelligence concept and a type of Ensemble Mods.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:ensemble-methods",
      "label": "Ensemble Methods"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:stacking:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6123f64d04b8e0a9e0d40963b3bc95fe0ef7117242806a56c5e5ee4f2d25664"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ensemble Methods]]",
      "resolved": "urn:visionflow:owl:class:ensemble-methods",
      "kind": "ResolvedLink"
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
  - Stacking is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Stacking
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Ensemble Methods]]

- ### Content

  ### Definition
  Stacking (Stacked Generalization) is a hierarchical ensemble method that combines multiple base models (level-0) through a meta-model (level-1) that learns how to best combine their predictions. Unlike simple voting or averaging, stacking trains a second-level model on the outputs of base models, potentially capturing complex patterns in how different models complement each other to achieve superior performance.

  ### Architecture
  **Level 0 (Base Models):**
  - Diverse learning algorithms
  - Different model types preferred (e.g., SVM, tree, neural net)
  - Trained on original training data
  - Generate predictions for meta-model

  **Level 1 (Meta-Model):**
  - Learns to combine base model predictions
  - Trained on base model outputs
  - Often simple model (logistic regression, ridge)
  - Makes final prediction

  **Optional Multiple Levels:**
  - Can stack meta-models recursively
  - Diminishing returns beyond 2-3 levels

  ### Training Procedure
  **Naive Approach (Problematic):**
  1. Train base models on training set
  2. Generate predictions on training set
  3. Train meta-model on these predictions
  → Risk of overfitting

  **Proper Cross-Validation Approach:**
  1. Split training data into K folds
  2. For each base model:
   - Train on K-1 folds
   - Predict on holdout fold
   - Repeat for all folds
  3. Combine fold predictions as meta-features
  4. Train meta-model on meta-features
  5. Retrain base models on full training set
  6. Use for final predictions

  ### Prediction Process
  1. New instance x arrives
  2. Each base model predicts: h₁(x), h₂(x), ..., hₜ(x)
  3. Meta-model receives base predictions as features
  4. Meta-model outputs final prediction

  ### Key Design Choices
  **Base Model Selection:**
  - Use diverse algorithms
  - Avoid highly correlated models
  - Include models with different strengths
  - 3-10 base models typical

  **Meta-Model Selection:**
  - Often simple linear model
  - Regularization recommended (ridge, lasso)
  - Can be any supervised learner
  - Should not overfit (base models already complex)

  **Feature Engineering for Meta-Model:**
  - Raw base model predictions
  - Confidence/probability scores
  - Prediction rankings
  - Original features (can help, but increases complexity)

  ### Advantages
  - Can reduce both bias and variance
  - Learns optimal combination automatically
  - Flexible (works with any models)
  - Often outperforms simple averaging
  - Captures complementary strengths

  ### Disadvantages
  - More complex than bagging/boosting
  - Requires careful cross-validation
  - Risk of overfitting meta-model
  - Computationally expensive
  - Harder to interpret
  - More hyperparameters to tune

  ### Variants
  **Blending:**
  - Simpler than stacking
  - Hold out validation set for meta-training
  - No cross-validation required
  - Less data for base model training

  **Multi-Level Stacking:**
  - Stack multiple meta-model layers
  - Level-2, Level-3 models
  - Rarely used (diminishing returns)

  **Feature-Weighted Stacking:**
  - Meta-model uses both base predictions and original features
  - Increases complexity

  ### Practical Tips
  - Use cross-validation properly (avoid leakage)
  - Keep meta-model simple
  - Ensure base model diversity
  - Monitor for overfitting
  - Use regularization in meta-model
  - Consider computational budget
  - Validate on holdout test set

  ### Implementation Example (Conceptual)
  ```python
  # Base models
  models = [
    ('lr', LogisticRegression()),
    ('rf', RandomForestClassifier()),
    ('svm', SVC(probability=True)),
    ('xgb', XGBClassifier())
  ]

  # Meta-model
  meta_model = LogisticRegression()

  # Stacking classifier
  from sklearn.ensemble import StackingClassifier
  stacking = StackingClassifier(
    estimators=models,
    final_estimator=meta_model,
    cv=5,  # cross-validation folds
    stack_method='predict_proba'
  )
  ```

  ### Applications
  - Kaggle competition winning solutions
  - High-stakes predictions (medical, financial)
  - Complex pattern recognition
  - Image classification
  - Natural language processing
  - Time series forecasting

  ### Comparison with Other Ensembles
  | Method | Training | Combination | Complexity |
  |--------|----------|-------------|------------|
  | Bagging | Parallel | Averaging | Low |
  | Boosting | Sequential | Weighted | Medium |
  | Stacking | Hierarchical | Meta-learned | High |

  ### Historical Note
  Introduced by David Wolpert in 1992, stacking has become a staple of machine learning competitions, often forming part of the winning solution through its ability to optimally combine diverse model strengths.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
