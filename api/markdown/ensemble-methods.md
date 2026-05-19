- ### Definition
  - Ensemble Methods is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:EnsembleMethods
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Machine Learning]]
  - enables:: [[Model Combination]]
  - bridges-to:: [[Digital Twin]], [[Blockchain]]

- ### Content

  - #### Inverse Relationships (Inferred by Reasoner)
    - Boosting is-subclass-of Ensemble Methods
    - Bagging is-subclass-of Ensemble Methods
    - Stacking is-subclass-of Ensemble Methods
  - skos:related:: [[Random Forest]]
  - skos:related:: [[Gradient Boosting]]
  - enables:: [[Model Combination]]
  - improves:: [[Generalization]]

  ### Definition
  Ensemble methods are machine learning techniques that combine multiple models (weak learners) to create a stronger, more accurate predictor. By aggregating predictions from diverse models, ensembles reduce variance, bias, or improve predictions through the wisdom of crowds principle, often achieving better performance than any single model alone.

  ### Core Principles
  **Diversity:**
  - Models make different errors
  - Created through:
  - Different algorithms
  - Different training data subsets
  - Different feature subsets
  - Different hyperparameters

  **Aggregation:**
  - Combine predictions to make final decision
  - Methods: voting, averaging, weighted combination

  **Bias-Variance Tradeoff:**
  - Bagging reduces variance
  - Boosting reduces bias
  - Stacking can reduce both

  ### Major Ensemble Types
  **Parallel Ensembles:**
  - Train models independently
  - Aggregate predictions
  - Examples: Bagging, Random Forest
  - Reduces variance

  **Sequential Ensembles:**
  - Train models iteratively
  - Each model corrects previous errors
  - Examples: Boosting (AdaBoost, Gradient Boosting)
  - Reduces bias

  **Hierarchical Ensembles:**
  - Multiple levels of models
  - Examples: Stacking, cascading
  - Can reduce both bias and variance

  ### Combination Methods
  **Classification:**
  - Majority voting
  - Weighted voting
  - Soft voting (average probabilities)

  **Regression:**
  - Simple averaging
  - Weighted averaging
  - Median (robust to outliers)

  **Meta-Learning:**
  - Train meta-model on base model outputs
  - Stacking approach

  ### Theoretical Foundation
  - Condorcet's jury theorem
  - Bias-variance decomposition
  - PAC (Probably Approximately Correct) learning
  - Margin theory

  ### Advantages
  - Improved accuracy and robustness
  - Reduced overfitting
  - Better generalization
  - Handles complex patterns
  - Often wins competitions (Kaggle)

  ### Disadvantages
  - Increased computational cost
  - Less interpretable (black box)
  - More complex to deploy
  - Diminishing returns with too many models
  - Risk of overfitting if not careful

  ### Notable Implementations
  - Random Forest (Bagging + feature randomness)
  - XGBoost (Gradient Boosting)
  - LightGBM (Fast gradient boosting)
  - CatBoost (Categorical boosting)
  - Voting Classifier (sklearn)

  ### Applications
  - Kaggle competitions (dominant approach)
  - Credit scoring
  - Fraud detection
  - Medical diagnosis
  - Stock price prediction
  - Customer churn prediction
  - Image and text classification

  ### Best Practices
  - Ensure base model diversity
  - Use cross-validation for training
  - Don't combine too many weak models
  - Balance complexity vs. performance
  - Consider computational constraints

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z