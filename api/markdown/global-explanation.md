- ### Definition
  - Interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a machine learning model across its entire input space, rather than explaining individual predictions. Global explanations—such as feature importance rankings, partial dependence plots, and surrogate model trees—reveal systematic model tendencies and support auditing, debugging, and regulatory compliance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GlobalExplanation
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **partOf** [[Explainable AI]] — global explanation methods are a major sub-category of XAI techniques
  - **uses** [[Feature Importance]] — feature importance rankings are the most common form of global explanation
  - **uses** [[Model Interpretability]] — global explanations operationalise model-level interpretability
  - **contrastsWith** [[Local Explanation]] — global explanations characterise the whole model; local explanations target single instances
  - **enables** [[Model Transparency]] — global explanations communicate systematic model behaviour to non-technical stakeholders
  - **enables** [[Fairness]] — global feature importance reveals whether protected attributes drive model decisions

- ### Content

  ## Related Terms

  - **Broader**: [[Model Interpretability]], [[Explainable AI]]
  - **Narrower**: [[Partial Dependence Plot]], [[Permutation Importance]], [[Feature Importance]]
  - **Related**: [[Model Transparency]], [[Surrogate Models]]
  - **Contrasts**: [[Local Explanation]]

  ## Formal Specification

  ### Core Concept

  Given a trained model `f: X → Y`, a global explanation `G(f)` characterises:

  ```
  G(f) → {overall behaviour, feature importance, decision boundaries, interaction effects}
  ```

  **Scope**: Entire input space `X`
  **Objective**: Understand `f` holistically without instance-specific focus

  ### Mathematical Framework

  **Global Feature Importance**:
  ```
  I(f, j) = E_X[Impact of feature j on f(X)]
  ```

  **Global Model Approximation**:
  ```
  g* = argmin E_X[L(f(X), g(X))]
     g∈G_interpretable
  ```

  Where `g` is an interpretable surrogate model approximating `f` globally.

  ## Key Methods

  ### Feature Importance Measures

  #### Permutation Importance

  **Algorithm** (Breiman, 2001):

  1. **Baseline**: Compute model performance on validation set
   ```
   Score_original = Performance(f, X_val, y_val)
   ```

  2. **Permute feature**: Shuffle feature `j` values
   ```
   X_permuted = X_val with column j randomly shuffled
   ```

  3. **Recompute performance**:
   ```
   Score_permuted = Performance(f, X_permuted, y_val)
   ```

  4. **Feature importance**:
   ```
   FI(j) = Score_original - E[Score_permuted]
   ```

  **Properties**:
  - Model-agnostic
  - Accounts for feature interactions
  - Reflects true predictive importance

  **Limitations**:
  - Requires retraining for some models (not for tree ensembles)
  - Assumes feature independence
  - Variance from random permutation

  #### SHAP Feature Importance (Global)

  **Aggregation** (Lundberg & Lee, 2017):

  ```
  I(j) = (1/n) Σ |φ_j(x_i)|
             i=1 to n
  ```

  **Interpretation**: Average absolute SHAP value across all instances

  **Benefits**:
  - Consistent with local explanations
  - Theoretically grounded
  - Handles feature interactions

  **Visualisations**:
  - **Summary plot**: Distribution of SHAP values per feature
  - **Bar plot**: Mean absolute SHAP values
  - **Dependence plot**: Feature value vs. SHAP value

  ### Model Behaviour Characterisation

  #### Partial Dependence Plots (PDP)

  **Definition** (Friedman, 2001):

  ```
  PD_S(x_S) = E_X_C[f(x_S, X_C)]
  ```

  Where:
  - `S` is subset of features to visualise
  - `C` is complement of `S`
  - Marginalisation over `X_C`

  **Computation**:
  ```
  PD_S(x_S) ≈ (1/n) Σ f(x_S, x_C^(i))
                   i=1
  ```

  **Interpretation**: Average model output when feature(s) fixed at value

  **Advantages**:
  - Intuitive visualisation
  - Model-agnostic
  - Handles non-linear relationships

  **Limitations**:
  - Assumes feature independence (can be misleading)
  - Computationally expensive for many features
  - Ignores feature distribution

  #### Individual Conditional Expectation (ICE)

  **Definition** (Goldstein et al., 2015):

  ```
  ICE_i(x_S) = f(x_S, x_C^(i))
  ```

  **Interpretation**: Model output for instance `i` as feature(s) vary

  **Relationship to PDP**:
  ```
  PD_S(x_S) = (1/n) Σ ICE_i(x_S)
  ```

  **Benefits**:
  - Reveals heterogeneity (individual instance behaviour)
  - Detects interactions (diverging ICE curves)
  - Visualises distribution, not just average

  **Visualisation**: Overlaid curves showing instance-specific effects

  #### Accumulated Local Effects (ALE)

  **Definition** (Apley & Zhu, 2020):

  ```
  ALE_j(x) = ∫_{z_min}^x E_X|X_j=z[∂f/∂X_j | X_j=z] dz
  ```

  **Advantages over PDP**:
  - Unbiased with correlated features
  - Uses conditional rather than marginal distribution
  - Faster computation

  **Interpretation**: Accumulated marginal effect of feature

  **Use Case**: Preferred when features are correlated

  ### Surrogate Models

  #### Global Surrogate

  **Approach**:
  1. **Train black-box model**: `f(X) → Y`
  2. **Generate predictions**: `Ŷ = f(X)` for large dataset
  3. **Train interpretable model**: `g(X) → Ŷ`
  4. **Interpret** `g` as approximation of `f`

  **Interpretable Model Choices**:
  - Decision tree
  - Linear regression
  - Rule set (RuleFit)
  - GAM (Generalized Additive Model)

  **Fidelity Measure**:
  ```
  Fidelity = R²(f(X), g(X))
  ```

  **Trade-off**: Accuracy (of `f`) vs. Interpretability (of `g`)

  **Limitations**:
  - Surrogate may not faithfully represent black-box
  - Model mismatch in complex regions
  - Interpretability of surrogate still limited

  #### RuleFit

  **Algorithm** (Friedman & Popescu, 2008):

  1. **Extract rules** from tree ensemble
  2. **Fit sparse linear model** with rules as features
   ```
   y ≈ β₀ + Σ β_k R_k(x)
   ```
   Where `R_k` are if-then rules

  **Output**: Interpretable rule-based global model

  **Example**:
  ```
  Prediction = 0.5
  + 0.3 × (age > 50 AND cholesterol > 200)
  + 0.15 × (BMI > 30)
  - 0.2 × (exercise_weekly = True)
  ```

  **Benefits**:
  - Combines predictive power and interpretability
  - Explicit rule interactions
  - Sparse representation

  ### Interaction Detection

  #### Friedman's H-statistic

  **Two-way Interaction**:
  ```
  H²_jk = [Σ(PD_jk(x_j, x_k) - PD_j(x_j) - PD_k(x_k))²] / [Σ PD_jk(x_j, x_k)²]
  ```

  **Interpretation**: Proportion of variance due to interaction

  **Values**:
  - `H² = 0`: No interaction
  - `H² > 0`: Interaction present (larger = stronger)

  **Use Case**: Identify which feature pairs interact significantly

  #### SHAP Interaction Values

  **Definition**:
  ```
  φ_ij = Σ |S|!(|N|-|S|-1)! / (2|N|!) [Δ_ij(S)]
       S⊆N\{i,j}
  ```

  Where `Δ_ij(S)` quantifies pairwise interaction effect.

  **Benefits**:
  - Consistent with SHAP values
  - Detects non-linear interactions
  - Distributes effects fairly

  **Visualisation**: Heatmap of interaction strengths

  ## Application Domains

  ### Model Debugging

  **Use Cases**:
  - Detect unexpected feature importance (sanity check)
  - Identify bias in feature usage
  - Discover data leakage

  **Example**:
  Global feature importance reveals that "patient ID" has high importance → data leakage detected.

  ### Regulatory Compliance

  **Finance**:
  - Fair lending: ensure protected attributes not driving decisions
  - Model risk management: holistic model understanding

  **Healthcare**:
  - Clinical validation: feature importance aligns with medical knowledge
  - IEEE P2802 compliance: transparent device behaviour

  **Example**:
  Partial dependence plots show that "race" feature has flat PD → no discriminatory effect.

  ### Scientific Discovery

  **Use Cases**:
  - Hypothesis generation from feature importance
  - Mechanism understanding via PDPs
  - Interaction detection for biological pathways

  **Example**:
  Climate modelling: PDP reveals non-linear CO₂ effect on temperature, guiding further research.

  ### Model Comparison

  **Approach**:
  - Generate global explanations for multiple models
  - Compare feature importance rankings
  - Assess consistency of relationships (PDPs)

  **Decision Criterion**: Select model with interpretable, domain-aligned behaviour.

  ## Implementation Approaches

  ### Permutation Importance

  **Scikit-learn**:
  ```python
  from sklearn.inspection import permutation_importance

  result = permutation_importance(
    estimator=model,
    X=X_val,
    y=y_val,
    n_repeats=10,
    random_state=42,
    scoring='accuracy'
  )

  importances = result.importances_mean
  ```

  **Custom Implementation**:
  ```python
  def permutation_importance(model, X, y, metric, n_repeats=10):
    baseline_score = metric(y, model.predict(X))
    importances = {}

    for col in X.columns:
        scores = []
        for _ in range(n_repeats):
            X_permuted = X.copy()
            X_permuted[col] = X_permuted[col].sample(frac=1).values
            score = metric(y, model.predict(X_permuted))
            scores.append(baseline_score - score)
        importances[col] = np.mean(scores)

    return importances
  ```

  ### Partial Dependence Plots

  **Scikit-learn**:
  ```python
  from sklearn.inspection import PartialDependenceDisplay

  features = ['age', 'cholesterol', ('age', 'cholesterol')]

  PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=features,
    feature_names=X_train.columns
  )
  ```

  **PDPbox**:
  ```python
  from pdpbox import pdp

  pdp_age = pdp.pdp_isolate(
    model=model,
    dataset=X_train,
    model_features=X_train.columns,
    feature='age'
  )

  pdp.pdp_plot(pdp_age, 'age')
  ```

  ### ICE Plots

  **Scikit-learn** (built into PDP):
  ```python
  from sklearn.inspection import PartialDependenceDisplay

  PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=['age'],
    kind='both',  # Shows both PDP and ICE
    ice_lines_kw={'alpha': 0.2}
  )
  ```

  ### ALE Plots

  **ALEPython**:
  ```python
  from alepython import ale_plot

  ale_plot(
    model=model.predict,
    X_train=X_train,
    feature='age',
    bins=20
  )
  ```

  ### SHAP Global Explanations

  **Summary Plot**:
  ```python
  import shap

  explainer = shap.TreeExplainer(model)
  shap_values = explainer.shap_values(X_test)

  shap.summary_plot(shap_values, X_test, plot_type="bar")  # Feature importance
  shap.summary_plot(shap_values, X_test)  # Distribution
  ```

  **Dependence Plot**:
  ```python
  shap.dependence_plot(
    ind='age',
    shap_values=shap_values,
    features=X_test,
    interaction_index='cholesterol'  # Color by interaction
  )
  ```

  ### Surrogate Models

  **Global Tree Surrogate**:
  ```python
  from sklearn.tree import DecisionTreeRegressor, plot_tree

  # Train black-box model
  black_box = RandomForestRegressor().fit(X_train, y_train)

  # Generate predictions
  y_surrogate = black_box.predict(X_train)

  # Train interpretable surrogate
  surrogate = DecisionTreeRegressor(max_depth=5)
  surrogate.fit(X_train, y_surrogate)

  # Visualize
  plot_tree(surrogate, feature_names=X_train.columns, filled=True)

  # Assess fidelity
  from sklearn.metrics import r2_score
  fidelity = r2_score(black_box.predict(X_test), surrogate.predict(X_test))
  print(f"Surrogate fidelity: {fidelity:.3f}")
  ```

  ## Evaluation Metrics

  ### Fidelity Metrics

  **Global Fidelity** (for surrogates):
  ```
  Fidelity = R²(f(X), g(X))
  ```
  Measures how well interpretable model `g` approximates black-box `f`.

  **Feature Importance Stability**:
  ```
  Stability = Spearman_correlation(FI(subset₁), FI(subset₂))
  ```
  Consistency across data subsets.

  ### Computational Efficiency

  **PDP Complexity**:
  - Grid points: `m`
  - Instances: `n`
  - Features: `p`
  - Complexity: `O(m × n × p)` for all features

  **Permutation Importance Complexity**:
  - Features: `p`
  - Repeats: `r`
  - Complexity: `O(p × r × prediction_cost)`

  ### Completeness Metrics

  **Interaction Coverage**:
  ```
  Coverage = (Detected interactions) / (True interactions)
  ```

  **Feature Coverage**:
  Percentage of features with significant importance.

  ## Challenges & Limitations

  ### Methodological Challenges

  **Feature Correlation**:
  - **PDP Issue**: Marginalises over unrealistic feature combinations
  - **Solution**: Use ALE or condition on realistic feature values
  - **Example**: Age and years of education correlated; PDP may show "5-year-old with PhD"

  **Computational Cost**:
  - **PDP/ICE**: Requires many model evaluations
  - **SHAP**: Exponential complexity (exact)
  - **Mitigation**: Sampling, approximations, caching

  **Interpretation Ambiguity**:
  - **Permutation Importance**: Which feature interactions are captured?
  - **SHAP**: Baseline choice affects values
  - **Surrogate**: Fidelity-interpretability trade-off

  ### Practical Challenges

  **High-Dimensional Data**:
  - Visualising >3 features difficult
  - Feature selection needed
  - Curse of dimensionality for interactions

  **Model Complexity**:
  - Deep neural networks: millions of parameters
  - Global explanations may oversimplify
  - Multiple explanations needed for completeness

  **Dynamic Models**:
  - Online learning: explanations change over time
  - Temporal dependencies: static explanations insufficient
  - Concept drift: explanations become stale

  ## Research Directions

  ### Emerging Areas

  **Causal Global Explanations**:
  - Structural causal models
  - Interventional feature importance
  - Beyond observational statistics

  **Temporal Global Explanations**:
  - Evolution of feature importance
  - Concept drift detection
  - Dynamic model behaviour

  **Multi-objective Global Explanations**:
  - Balancing accuracy, fairness, and interpretability
  - Pareto-optimal model selection
  - Trade-off visualisation

  **Scalable Global Explanations**:
  - Distributed PDP computation
  - Incremental feature importance
  - Approximate methods for large-scale data

  ### Industry Innovation

  **Microsoft InterpretML**:
  - Explainable Boosting Machines (inherently global)
  - ICE plots with distribution
  - Interaction detection

  **Google Cloud Explainable AI**:
  - Feature attributions aggregated globally
  - What-If Tool for PDP-like exploration
  - TensorFlow Model Analysis integration

  **DataRobot**:
  - Automated feature importance
  - Feature effects (PDP-like)
  - Prediction explanations at scale

  ## Best Practices

  ### Method Selection

  **Decision Tree**:
  1. **Feature correlation**: High → ALE; Low → PDP
  2. **Model type**: Trees → native importance; Any → permutation/SHAP
  3. **Computational budget**: Limited → permutation; Ample → SHAP
  4. **Explanation goal**: Feature ranking → importance; Relationships → PDP/ALE

  ### Implementation Guidelines

  **Pre-deployment**:
  - Validate feature importance with domain experts
  - Check PDP/ALE for unexpected patterns
  - Assess computational feasibility
  - Test on held-out data

  **Production**:
  - Pre-compute global explanations (cached)
  - Update periodically (model drift)
  - Monitor feature importance shifts
  - Dashboard for stakeholder access

  **Post-deployment**:
  - Track explanation usage
  - Refine based on feedback
  - Update as model evolves
  - Audit for consistency

  ### Visualisation Best Practices

  **Feature Importance**:
  - Sort by magnitude
  - Include confidence intervals (permutation variance)
  - Highlight top-K features
  - Use color for positive/negative effects

  **PDP/ICE**:
  - Show feature distribution (rug plot)
  - Include confidence bands
  - Limit number of ICE curves (avoid clutter)
  - 2D PDPs for key interactions

  **SHAP Plots**:
  - Summary plot: distribution + importance
  - Dependence plots: select top interactions
  - Waterfall plots: global average explanation

  ### Documentation

  **Model Cards** should include:
  - Global explanation methods used
  - Feature importance rankings
  - Key feature effects (PDP summaries)
  - Computational requirements

  **User-Facing**:
  - Executive summary of model behaviour
  - Top-K feature importance with interpretation
  - Key relationships (PDP insights)
  - Known limitations

  ## Related Terms

  - **Broader**: [[Model Interpretability]], [[Explainable AI]]
  - **Narrower**: [[Partial Dependence Plot]], [[Permutation Importance]], [[Feature Importance]]
  - **Related**: [[Model Transparency]], [[Surrogate Models]]
  - **Contrasts**: [[Local Explanation]]

  ## Formal Specification

  ### Core Concept

  Given a trained model `f: X → Y`, a global explanation `G(f)` characterises:

  ```
  G(f) → {overall behaviour, feature importance, decision boundaries, interaction effects}
  ```

  **Scope**: Entire input space `X`
  **Objective**: Understand `f` holistically without instance-specific focus

  ### Mathematical Framework

  **Global Feature Importance**:
  ```
  I(f, j) = E_X[Impact of feature j on f(X)]
  ```

  **Global Model Approximation**:
  ```
  g* = argmin E_X[L(f(X), g(X))]
     g∈G_interpretable
  ```

  Where `g` is an interpretable surrogate model approximating `f` globally.

  ## Key Methods

  ### Feature Importance Measures

  #### Permutation Importance

  **Algorithm** (Breiman, 2001):

  1. **Baseline**: Compute model performance on validation set
   ```
   Score_original = Performance(f, X_val, y_val)
   ```

  2. **Permute feature**: Shuffle feature `j` values
   ```
   X_permuted = X_val with column j randomly shuffled
   ```

  3. **Recompute performance**:
   ```
   Score_permuted = Performance(f, X_permuted, y_val)
   ```

  4. **Feature importance**:
   ```
   FI(j) = Score_original - E[Score_permuted]
   ```

  **Properties**:
  - Model-agnostic
  - Accounts for feature interactions
  - Reflects true predictive importance

  **Limitations**:
  - Requires retraining for some models (not for tree ensembles)
  - Assumes feature independence
  - Variance from random permutation

  #### SHAP Feature Importance (Global)

  **Aggregation** (Lundberg & Lee, 2017):

  ```
  I(j) = (1/n) Σ |φ_j(x_i)|
             i=1 to n
  ```

  **Interpretation**: Average absolute SHAP value across all instances

  **Benefits**:
  - Consistent with local explanations
  - Theoretically grounded
  - Handles feature interactions

  **Visualisations**:
  - **Summary plot**: Distribution of SHAP values per feature
  - **Bar plot**: Mean absolute SHAP values
  - **Dependence plot**: Feature value vs. SHAP value

  ### Model Behaviour Characterisation

  #### Partial Dependence Plots (PDP)

  **Definition** (Friedman, 2001):

  ```
  PD_S(x_S) = E_X_C[f(x_S, X_C)]
  ```

  Where:
  - `S` is subset of features to visualise
  - `C` is complement of `S`
  - Marginalisation over `X_C`

  **Computation**:
  ```
  PD_S(x_S) ≈ (1/n) Σ f(x_S, x_C^(i))
                   i=1
  ```

  **Interpretation**: Average model output when feature(s) fixed at value

  **Advantages**:
  - Intuitive visualisation
  - Model-agnostic
  - Handles non-linear relationships

  **Limitations**:
  - Assumes feature independence (can be misleading)
  - Computationally expensive for many features
  - Ignores feature distribution

  #### Individual Conditional Expectation (ICE)

  **Definition** (Goldstein et al., 2015):

  ```
  ICE_i(x_S) = f(x_S, x_C^(i))
  ```

  **Interpretation**: Model output for instance `i` as feature(s) vary

  **Relationship to PDP**:
  ```
  PD_S(x_S) = (1/n) Σ ICE_i(x_S)
  ```

  **Benefits**:
  - Reveals heterogeneity (individual instance behaviour)
  - Detects interactions (diverging ICE curves)
  - Visualises distribution, not just average

  **Visualisation**: Overlaid curves showing instance-specific effects

  #### Accumulated Local Effects (ALE)

  **Definition** (Apley & Zhu, 2020):

  ```
  ALE_j(x) = ∫_{z_min}^x E_X|X_j=z[∂f/∂X_j | X_j=z] dz
  ```

  **Advantages over PDP**:
  - Unbiased with correlated features
  - Uses conditional rather than marginal distribution
  - Faster computation

  **Interpretation**: Accumulated marginal effect of feature

  **Use Case**: Preferred when features are correlated

  ### Surrogate Models

  #### Global Surrogate

  **Approach**:
  1. **Train black-box model**: `f(X) → Y`
  2. **Generate predictions**: `Ŷ = f(X)` for large dataset
  3. **Train interpretable model**: `g(X) → Ŷ`
  4. **Interpret** `g` as approximation of `f`

  **Interpretable Model Choices**:
  - Decision tree
  - Linear regression
  - Rule set (RuleFit)
  - GAM (Generalized Additive Model)

  **Fidelity Measure**:
  ```
  Fidelity = R²(f(X), g(X))
  ```

  **Trade-off**: Accuracy (of `f`) vs. Interpretability (of `g`)

  **Limitations**:
  - Surrogate may not faithfully represent black-box
  - Model mismatch in complex regions
  - Interpretability of surrogate still limited

  #### RuleFit

  **Algorithm** (Friedman & Popescu, 2008):

  1. **Extract rules** from tree ensemble
  2. **Fit sparse linear model** with rules as features
   ```
   y ≈ β₀ + Σ β_k R_k(x)
   ```
   Where `R_k` are if-then rules

  **Output**: Interpretable rule-based global model

  **Example**:
  ```
  Prediction = 0.5
  + 0.3 × (age > 50 AND cholesterol > 200)
  + 0.15 × (BMI > 30)
  - 0.2 × (exercise_weekly = True)
  ```

  **Benefits**:
  - Combines predictive power and interpretability
  - Explicit rule interactions
  - Sparse representation

  ### Interaction Detection

  #### Friedman's H-statistic

  **Two-way Interaction**:
  ```
  H²_jk = [Σ(PD_jk(x_j, x_k) - PD_j(x_j) - PD_k(x_k))²] / [Σ PD_jk(x_j, x_k)²]
  ```

  **Interpretation**: Proportion of variance due to interaction

  **Values**:
  - `H² = 0`: No interaction
  - `H² > 0`: Interaction present (larger = stronger)

  **Use Case**: Identify which feature pairs interact significantly

  #### SHAP Interaction Values

  **Definition**:
  ```
  φ_ij = Σ |S|!(|N|-|S|-1)! / (2|N|!) [Δ_ij(S)]
       S⊆N\{i,j}
  ```

  Where `Δ_ij(S)` quantifies pairwise interaction effect.

  **Benefits**:
  - Consistent with SHAP values
  - Detects non-linear interactions
  - Distributes effects fairly

  **Visualisation**: Heatmap of interaction strengths

  ## Application Domains

  ### Model Debugging

  **Use Cases**:
  - Detect unexpected feature importance (sanity check)
  - Identify bias in feature usage
  - Discover data leakage

  **Example**:
  Global feature importance reveals that "patient ID" has high importance → data leakage detected.

  ### Regulatory Compliance

  **Finance**:
  - Fair lending: ensure protected attributes not driving decisions
  - Model risk management: holistic model understanding

  **Healthcare**:
  - Clinical validation: feature importance aligns with medical knowledge
  - IEEE P2802 compliance: transparent device behaviour

  **Example**:
  Partial dependence plots show that "race" feature has flat PD → no discriminatory effect.

  ### Scientific Discovery

  **Use Cases**:
  - Hypothesis generation from feature importance
  - Mechanism understanding via PDPs
  - Interaction detection for biological pathways

  **Example**:
  Climate modelling: PDP reveals non-linear CO₂ effect on temperature, guiding further research.

  ### Model Comparison

  **Approach**:
  - Generate global explanations for multiple models
  - Compare feature importance rankings
  - Assess consistency of relationships (PDPs)

  **Decision Criterion**: Select model with interpretable, domain-aligned behaviour.

  ## Implementation Approaches

  ### Permutation Importance

  **Scikit-learn**:
  ```python
  from sklearn.inspection import permutation_importance

  result = permutation_importance(
    estimator=model,
    X=X_val,
    y=y_val,
    n_repeats=10,
    random_state=42,
    scoring='accuracy'
  )

  importances = result.importances_mean
  ```

  **Custom Implementation**:
  ```python
  def permutation_importance(model, X, y, metric, n_repeats=10):
    baseline_score = metric(y, model.predict(X))
    importances = {}

    for col in X.columns:
        scores = []
        for _ in range(n_repeats):
            X_permuted = X.copy()
            X_permuted[col] = X_permuted[col].sample(frac=1).values
            score = metric(y, model.predict(X_permuted))
            scores.append(baseline_score - score)
        importances[col] = np.mean(scores)

    return importances
  ```

  ### Partial Dependence Plots

  **Scikit-learn**:
  ```python
  from sklearn.inspection import PartialDependenceDisplay

  features = ['age', 'cholesterol', ('age', 'cholesterol')]

  PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=features,
    feature_names=X_train.columns
  )
  ```

  **PDPbox**:
  ```python
  from pdpbox import pdp

  pdp_age = pdp.pdp_isolate(
    model=model,
    dataset=X_train,
    model_features=X_train.columns,
    feature='age'
  )

  pdp.pdp_plot(pdp_age, 'age')
  ```

  ### ICE Plots

  **Scikit-learn** (built into PDP):
  ```python
  from sklearn.inspection import PartialDependenceDisplay

  PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=['age'],
    kind='both',  # Shows both PDP and ICE
    ice_lines_kw={'alpha': 0.2}
  )
  ```

  ### ALE Plots

  **ALEPython**:
  ```python
  from alepython import ale_plot

  ale_plot(
    model=model.predict,
    X_train=X_train,
    feature='age',
    bins=20
  )
  ```

  ### SHAP Global Explanations

  **Summary Plot**:
  ```python
  import shap

  explainer = shap.TreeExplainer(model)
  shap_values = explainer.shap_values(X_test)

  shap.summary_plot(shap_values, X_test, plot_type="bar")  # Feature importance
  shap.summary_plot(shap_values, X_test)  # Distribution
  ```

  **Dependence Plot**:
  ```python
  shap.dependence_plot(
    ind='age',
    shap_values=shap_values,
    features=X_test,
    interaction_index='cholesterol'  # Color by interaction
  )
  ```

  ### Surrogate Models

  **Global Tree Surrogate**:
  ```python
  from sklearn.tree import DecisionTreeRegressor, plot_tree

  # Train black-box model
  black_box = RandomForestRegressor().fit(X_train, y_train)

  # Generate predictions
  y_surrogate = black_box.predict(X_train)

  # Train interpretable surrogate
  surrogate = DecisionTreeRegressor(max_depth=5)
  surrogate.fit(X_train, y_surrogate)

  # Visualize
  plot_tree(surrogate, feature_names=X_train.columns, filled=True)

  # Assess fidelity
  from sklearn.metrics import r2_score
  fidelity = r2_score(black_box.predict(X_test), surrogate.predict(X_test))
  print(f"Surrogate fidelity: {fidelity:.3f}")
  ```

  ## Evaluation Metrics

  ### Fidelity Metrics

  **Global Fidelity** (for surrogates):
  ```
  Fidelity = R²(f(X), g(X))
  ```
  Measures how well interpretable model `g` approximates black-box `f`.

  **Feature Importance Stability**:
  ```
  Stability = Spearman_correlation(FI(subset₁), FI(subset₂))
  ```
  Consistency across data subsets.

  ### Computational Efficiency

  **PDP Complexity**:
  - Grid points: `m`
  - Instances: `n`
  - Features: `p`
  - Complexity: `O(m × n × p)` for all features

  **Permutation Importance Complexity**:
  - Features: `p`
  - Repeats: `r`
  - Complexity: `O(p × r × prediction_cost)`

  ### Completeness Metrics

  **Interaction Coverage**:
  ```
  Coverage = (Detected interactions) / (True interactions)
  ```

  **Feature Coverage**:
  Percentage of features with significant importance.

  ## Challenges & Limitations

  ### Methodological Challenges

  **Feature Correlation**:
  - **PDP Issue**: Marginalises over unrealistic feature combinations
  - **Solution**: Use ALE or condition on realistic feature values
  - **Example**: Age and years of education correlated; PDP may show "5-year-old with PhD"

  **Computational Cost**:
  - **PDP/ICE**: Requires many model evaluations
  - **SHAP**: Exponential complexity (exact)
  - **Mitigation**: Sampling, approximations, caching

  **Interpretation Ambiguity**:
  - **Permutation Importance**: Which feature interactions are captured?
  - **SHAP**: Baseline choice affects values
  - **Surrogate**: Fidelity-interpretability trade-off

  ### Practical Challenges

  **High-Dimensional Data**:
  - Visualising >3 features difficult
  - Feature selection needed
  - Curse of dimensionality for interactions

  **Model Complexity**:
  - Deep neural networks: millions of parameters
  - Global explanations may oversimplify
  - Multiple explanations needed for completeness

  **Dynamic Models**:
  - Online learning: explanations change over time
  - Temporal dependencies: static explanations insufficient
  - Concept drift: explanations become stale

  ## Research Directions

  ### Emerging Areas

  **Causal Global Explanations**:
  - Structural causal models
  - Interventional feature importance
  - Beyond observational statistics

  **Temporal Global Explanations**:
  - Evolution of feature importance
  - Concept drift detection
  - Dynamic model behaviour

  **Multi-objective Global Explanations**:
  - Balancing accuracy, fairness, and interpretability
  - Pareto-optimal model selection
  - Trade-off visualisation

  **Scalable Global Explanations**:
  - Distributed PDP computation
  - Incremental feature importance
  - Approximate methods for large-scale data

  ### Industry Innovation

  **Microsoft InterpretML**:
  - Explainable Boosting Machines (inherently global)
  - ICE plots with distribution
  - Interaction detection

  **Google Cloud Explainable AI**:
  - Feature attributions aggregated globally
  - What-If Tool for PDP-like exploration
  - TensorFlow Model Analysis integration

  **DataRobot**:
  - Automated feature importance
  - Feature effects (PDP-like)
  - Prediction explanations at scale

  ## Best Practices

  ### Method Selection

  **Decision Tree**:
  1. **Feature correlation**: High → ALE; Low → PDP
  2. **Model type**: Trees → native importance; Any → permutation/SHAP
  3. **Computational budget**: Limited → permutation; Ample → SHAP
  4. **Explanation goal**: Feature ranking → importance; Relationships → PDP/ALE

  ### Implementation Guidelines

  **Pre-deployment**:
  - Validate feature importance with domain experts
  - Check PDP/ALE for unexpected patterns
  - Assess computational feasibility
  - Test on held-out data

  **Production**:
  - Pre-compute global explanations (cached)
  - Update periodically (model drift)
  - Monitor feature importance shifts
  - Dashboard for stakeholder access

  **Post-deployment**:
  - Track explanation usage
  - Refine based on feedback
  - Update as model evolves
  - Audit for consistency

  ### Visualisation Best Practices

  **Feature Importance**:
  - Sort by magnitude
  - Include confidence intervals (permutation variance)
  - Highlight top-K features
  - Use color for positive/negative effects

  **PDP/ICE**:
  - Show feature distribution (rug plot)
  - Include confidence bands
  - Limit number of ICE curves (avoid clutter)
  - 2D PDPs for key interactions

  **SHAP Plots**:
  - Summary plot: distribution + importance
  - Dependence plots: select top interactions
  - Waterfall plots: global average explanation

  ### Documentation

  **Model Cards** should include:
  - Global explanation methods used
  - Feature importance rankings
  - Key feature effects (PDP summaries)
  - Computational requirements

  **User-Facing**:
  - Executive summary of model behaviour
  - Top-K feature importance with interpretation
  - Key relationships (PDP insights)
  - Known limitations

  #### References
  ### Academic Literature

  - Friedman, J. H. (2001). "Greedy function approximation: A gradient boosting machine." *Annals of Statistics*, 29(5), 1189-1232
  - Breiman, L. (2001). "Random forests." *Machine Learning*, 45(1), 5-32
  - Goldstein, A., et al. (2015). "Peeking inside the black box: Visualizing statistical learning with plots of individual conditional expectation." *Journal of Computational and Graphical Statistics*, 24(1), 44-65
  - Apley, D. W., & Zhu, J. (2020). "Visualizing the effects of predictor variables in black box supervised learning models." *Journal of the Royal Statistical Society: Series B*, 82(4), 1059-1086
  - Friedman, J. H., & Popescu, B. E. (2008). "Predictive learning via rule ensembles." *Annals of Applied Statistics*, 2(3), 916-954

  ### Standards

  - IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
  - IEEE. (2021). *IEEE 7001-2021: Standard for Transparency of Autonomous Systems*

  ### Tools & Frameworks

  - Scikit-learn. (2023). *Inspection module*
  - Lundberg, S. M. (2023). *SHAP library*
  - Molnar, C. (2022). *Interpretable Machine Learning*

  ## See Also

  - [[Local Explanation]]
  - [[Feature Importance]]
  - [[Partial Dependence Plot]]
  - [[Permutation Importance]]
  - [[Individual Conditional Expectation]]
  - [[SHAP]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z