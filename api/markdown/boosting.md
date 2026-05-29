- ### Definition
  - A sequential ensemble learning technique that combines multiple weak learners into a strong predictor by iteratively training each new model to correct the errors of its predecessors. Instance weights are adjusted after each round so that misclassified examples receive more attention; the final prediction is a weighted vote across all weak learners. Key algorithms include AdaBoost, Gradient Boosting, XGBoost, LightGBM, and CatBoost.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Boosting
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Ensemble Methods]]
  - **requires**: Machine Learning (theoretical foundation), Training Data (iterative reweighting input)
  - **enables**: Overfitting (risk without regularisation; managed by early stopping)
  - **uses**: Gradient Descent (loss minimisation in gradient boosting), Regularisation (L1/L2 penalties in XGBoost/LightGBM)
  - **contrastsWith**: Deep Learning (competing high-accuracy paradigm for tabular data)

- ### Content

  - #### Inverse Relationships (Inferred by Reasoner)
    - AdaBoost is-subclass-of Boosting
    - Gradient Boosting is-subclass-of Boosting
  - skos:related:: [[XGBoost]]
  - skos:related:: [[LightGBM]]
  - skos:related:: [[CatBoost]]
  - reduces:: [[Bias]]
  - improves:: [[Accuracy]]

  ### Definition
  Boosting is a sequential ensemble learning technique that combines multiple weak learners into a strong learner by iteratively training models to correct the mistakes of previous models. Each new model focuses on examples that previous models misclassified, with instance weights adjusted to emphasize hard-to-classify examples, progressively building a powerful ensemble through adaptive learning.

  ### Core Concept
  - Start with weak learner (slightly better than random)
  - Train sequence of models
  - Each model focuses on previous errors
  - Weight instances by difficulty
  - Combine models with weighted voting
  - Final model is strong learner

  ### Key Algorithms
  **AdaBoost (Adaptive Boosting):**
  - Original boosting algorithm (1995)
  - Updates instance weights after each iteration
  - Misclassified examples get higher weights
  - Combines models with weighted majority vote
  - Sensitive to noisy data and outliers

  **Gradient Boosting:**
  - Fits new models to residual errors
  - Uses gradient descent in function space
  - Minimizes loss function iteratively
  - More flexible than AdaBoost
  - Foundation for modern implementations

  **XGBoost (Extreme Gradient Boosting):**
  - Optimized gradient boosting
  - Regularization to prevent overfitting
  - Parallel processing
  - Handles missing values
  - Tree pruning
  - Dominant in ML competitions

  **LightGBM:**
  - Gradient-based One-Side Sampling
  - Exclusive Feature Bundling
  - Faster training on large datasets
  - Lower memory usage
  - Leaf-wise tree growth

  **CatBoost:**
  - Handles categorical features natively
  - Ordered boosting (reduces prediction shift)
  - Symmetric trees
  - Robust to overfitting

  ### Mathematical Framework
  **AdaBoost Update Rule:**
  - α_t = 0.5 * ln((1 - ε_t) / ε_t)  [model weight]
  - w_t+1 = w_t * exp(-α_t * y_i * h_t(x_i))  [instance weight]

  **Gradient Boosting:**
  - F_m(x) = F_{m-1}(x) + γ_m * h_m(x)
  - h_m fits negative gradient of loss

  ### Properties
  **Strengths:**
  - High predictive accuracy
  - Handles complex non-linear patterns
  - Feature importance built-in
  - Robust to outliers (gradient boosting)
  - Works well with heterogeneous features

  **Weaknesses:**
  - Prone to overfitting without regularization
  - Sensitive to noisy data (AdaBoost)
  - Sequential training (harder to parallelize)
  - Longer training time than bagging
  - Requires careful hyperparameter tuning

  ### Hyperparameters
  - Number of estimators (iterations)
  - Learning rate (shrinkage)
  - Max depth of trees
  - Min samples per leaf
  - Subsample ratio
  - Regularization parameters (L1, L2)

  ### Applications
  - Kaggle competition winners
  - Click-through rate prediction
  - Ranking systems (search engines)
  - Risk assessment
  - Anomaly detection
  - Customer churn prediction
  - Fraud detection

  ### Best Practices
  - Start with low learning rate, more trees
  - Use cross-validation for tuning
  - Monitor for overfitting
  - Apply early stopping
  - Consider regularization
  - Scale features for some variants
  - Handle missing values appropriately

  ### Historical Impact
  - Theoretical breakthrough in ML (PAC learning)
  - Proved weak learners → strong learner
  - Foundation for modern winning solutions
  - Influenced neural network ensembles

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z