public:: true

# Intrinsic Interpretability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b4a28781e6cb466c62fe344239170062fef2abce7c7caba89653773dd27d670",
  "@type": "Page",
  "vc:slug": "intrinsic-interpretability",
  "title": "Intrinsic Interpretability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:black-box-model",
      "vc:label": "Black Box Model"
    },
    {
      "@id": "urn:visionflow:linked:decision-tree-approximation",
      "vc:label": "Decision Tree Approximation"
    },
    {
      "@id": "urn:visionflow:linked:rule-extraction",
      "vc:label": "Rule Extraction"
    },
    {
      "@id": "urn:visionflow:owl:class:explainable-ai",
      "vc:label": "Explainable AI"
    },
    {
      "@id": "urn:visionflow:owl:class:interpretable-ai",
      "vc:label": "Interpretable AI"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:model-interpretability",
      "vc:label": "Model Interpretability"
    },
    {
      "@id": "urn:visionflow:owl:class:model-transparency",
      "vc:label": "Model Transparency"
    },
    {
      "@id": "urn:visionflow:owl:class:post-hoc-explanation",
      "vc:label": "Post Hoc Explanation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0300"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Intrinsic Interpretability"
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
  "@id": "urn:ngm:class:intrinsic-interpretability",
  "@type": "Class",
  "label": "Intrinsic Interpretability",
  "definition": "The inherent transparency and understandability of a machine learning model's architecture and decision-making process, achieved through model design rather than external explanation techniques, enabling direct human comprehension without additional interpretability mods.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:post-hoc-explanation", "label": "Post Hoc Explanation"},
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:model-interpretability", "label": "Model Interpretability"},
      {"@id": "urn:ngm:class:interpretable-ai", "label": "Interpretable AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-transparency", "label": "Model Transparency"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:intrinsic-interpretability:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b4a28781e6cb466c62fe344239170062fef2abce7c7caba89653773dd27d670"
  },
  "vc:resolutions": [
    {
      "raw": "[[Black Box Model]]",
      "resolved": "urn:visionflow:linked:black-box-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decision Tree Approximation]]",
      "resolved": "urn:visionflow:linked:decision-tree-approximation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rule Extraction]]",
      "resolved": "urn:visionflow:linked:rule-extraction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:owl:class:explainable-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interpretable AI]]",
      "resolved": "urn:visionflow:owl:class:interpretable-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Interpretability]]",
      "resolved": "urn:visionflow:owl:class:model-interpretability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Transparency]]",
      "resolved": "urn:visionflow:owl:class:model-transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Post Hoc Explanation]]",
      "resolved": "urn:visionflow:owl:class:post-hoc-explanation",
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
  - The inherent transparency and understandability of a machine learning model's architecture and decision-making process, achieved through model design rather than external explanation techniques, enabling direct human comprehension without additional interpretability methods.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:IntrinsicInterpretability
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **contrastsWith**: [[Post Hoc Explanation]], [[Explainable AI]]
  - **partOf**: [[Model Interpretability]], [[Interpretable AI]]
  - **enables**: [[Model Transparency]], [[Accountability]]
  - **supports**: [[Trustworthy AI]], [[AI Governance]]

- ### Content
  - The inherent transparency and understandability of a machine learning model's architecture and decision-making process, achieved through model design rather than external explanation techniques, enabling direct human comprehension without additional interpretability methods.

  - ## Risks to Bitcoin the money (intrinsic)

  - ## Risks to Bitcoin the money (intrinsic)

  - ## Risks to Bitcoin the money (intrinsic)

  - ## Risks to Bitcoin the money (intrinsic)

  - ## Risks to Bitcoin the money (intrinsic)

  ## Related Terms

  - **Broader**: [[Interpretable AI]], [[Model Interpretability]]
  - **Narrower**: [[Decision Tree Approximation]], [[Rule Extraction]]
  - **Related**: [[Explainable AI]], [[Model Transparency]]
  - **Contrasts**: [[Post Hoc Explanation]], [[Black Box Model]]

  ## Formal Specification

  ### Core Principles

  1. **Transparency by Design**: Model structure directly reveals reasoning
  2. **Direct Interpretability**: No auxiliary explanation mechanism required
  3. **Self-documenting**: Decision logic inherent in model representation
  4. **Human-understandable**: Comprehensible without deep technical expertise

  ### Formal Characterisation

  A model `f: X → Y` has intrinsic interpretability if:

  ```
  ∀x ∈ X, reasoning(f, x) is directly observable from f's structure
  ```

  Where `reasoning(f, x)` represents the decision pathway from input to output.

  ## Intrinsically Interpretable Models

  ### Linear Models

  #### Linear Regression

  **Form**:
  ```
  y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
  ```

  **Interpretability Properties**:
  - **Coefficients** (βᵢ): Direct feature importance
  - **Additive effects**: Marginal contribution of each feature
  - **Sign**: Positive/negative relationship direction
  - **Magnitude**: Relative influence strength

  **Limitations**:
  - Assumes linear relationships
  - Feature interactions require explicit engineering
  - Sensitive to multicollinearity

  #### Logistic Regression

  **Form**:
  ```
  P(y=1|x) = 1 / (1 + e^(-z))  where z = β₀ + Σβᵢxᵢ
  ```

  **Interpretability**:
  - **Coefficients**: Log-odds ratios
  - **Odds Ratio**: e^(βᵢ) for unit increase in feature
  - **Probability**: Direct probabilistic interpretation
  - **Decision Boundary**: Linear hyperplane

  **Use Cases**:
  - Medical diagnosis (interpretable risk scores)
  - Credit scoring (regulatory compliance)
  - Binary classification with transparency requirements

  ### Tree-Based Models

  #### Decision Trees

  **Structure**:
  ```
  Tree ::= Leaf(value) | Node(feature, threshold, left_tree, right_tree)
  ```

  **Interpretability Properties**:
  - **Path-based reasoning**: Explicit if-then rules
  - **Feature selection**: Only relevant features used
  - **Non-linear boundaries**: Piecewise constant approximations
  - **Visualisable**: Graphical tree representation

  **Advantages**:
  - No feature scaling required
  - Handles mixed data types
  - Captures feature interactions implicitly

  **Disadvantages**:
  - High variance (instability)
  - Greedy splitting (suboptimal)
  - Depth-complexity trade-off

  #### Rule Sets

  **Form**:
  ```
  IF (condition₁ AND condition₂ AND ...) THEN prediction
  ```

  **Examples**:
  - **RuleFit**: Extract rules from tree ensembles
  - **Skope-rules**: Supervised rule induction
  - **OneR**: Single-feature rule classification

  **Interpretability**:
  - Explicit logical conditions
  - Human-readable statements
  - Easy audit and verification
  - Domain expert validation

  ### Generalised Additive Models (GAMs)

  **Form**:
  ```
  g(E[y]) = β₀ + f₁(x₁) + f₂(x₂) + ... + fₙ(xₙ)
  ```

  **Interpretability**:
  - **Additive structure**: Isolates individual feature effects
  - **Shape functions** (fᵢ): Non-linear but visualisable
  - **No interaction terms** (in basic GAM): Simplifies understanding
  - **Partial dependence**: Direct from shape functions

  **Modern Extensions**:
  - **GA²M**: Pairwise interactions allowed
  - **EBM (Explainable Boosting Machines)**: Bagged GAMs with interactions

  **Applications**:
  - Healthcare risk models (Caruana et al., 2015)
  - Ecological modelling
  - Econometric analysis

  ### Sparse Linear Models

  #### LASSO (Least Absolute Shrinkage and Selection Operator)

  **Objective**:
  ```
  minimize: ||y - Xβ||₂² + λ||β||₁
  ```

  **Interpretability Benefits**:
  - **Automatic feature selection**: L1 penalty induces sparsity
  - **Reduced dimensionality**: Fewer features to interpret
  - **Simplified coefficients**: Only non-zero features considered

  **Trade-offs**:
  - May exclude correlated but relevant features
  - Regularisation parameter tuning required
  - Less stable than Ridge regression

  ### Prototype-Based Models

  #### k-Nearest Neighbours (k-NN)

  **Decision Rule**:
  ```
  ŷ = mode({yᵢ : xᵢ ∈ k-nearest neighbours of x})
  ```

  **Interpretability**:
  - **Instance-based**: Predictions explained by training examples
  - **Similarity reasoning**: Nearest neighbours justify classification
  - **No model parameters**: Directly uses training data

  **Limitations**:
  - Curse of dimensionality
  - Computationally expensive at scale
  - Requires meaningful distance metric

  #### Case-Based Reasoning

  **Mechanism**:
  - Retrieve similar past cases
  - Adapt solution to current problem
  - Store new case for future use

  **Transparency**:
  - Explicit precedent-based reasoning
  - Analogical explanation
  - Traceable decision provenance

  ## Key Properties

  ### Simulatability

  **Definition**: Can a human mentally simulate the model's operation?

  **Characteristics**:
  - **Low complexity**: Limited depth/parameters
  - **Transparent operations**: Understandable transformations
  - **Traceable paths**: Follow decision logic manually

  **Examples**:
  - Small decision trees (depth ≤ 5)
  - Linear models with few features (< 10)
  - Simple rule sets (< 20 rules)

  ### Decomposability

  **Definition**: Can each component be individually explained?

  **Components**:
  1. **Input interpretability**: Meaningful, human-understandable features
  2. **Parameter interpretability**: Each parameter has semantic meaning
  3. **Algorithmic transparency**: Learning algorithm is understandable

  **Example** (Linear Regression):
  - **Inputs**: Named features (age, income, etc.)
  - **Parameters**: Coefficients with clear interpretation
  - **Algorithm**: Ordinary least squares (closed-form solution)

  ### Monotonicity

  **Definition**: Does the model preserve expected monotonic relationships?

  **Enforcement**:
  - **Monotonic constraints**: Explicit in some frameworks (XGBoost)
  - **Domain knowledge**: Ensures sensible behaviour
  - **Regulatory compliance**: Required in some sectors (finance)

  **Example**:
  Credit scoring where higher income monotonically increases creditworthiness (all else equal).

  ## Implementation Strategies

  ### Model Selection

  **Decision Framework**:
  1. **Assess complexity budget**: How much interpretability is required?
  2. **Evaluate performance requirements**: Is accuracy loss acceptable?
  3. **Consider regulatory context**: Are there legal transparency mandates?
  4. **Domain constraints**: Are there known relationships to preserve?

  **Selection Matrix**:

  | Model Type | Complexity | Accuracy | Interpretability | Use Case |
  |------------|------------|----------|------------------|----------|
  | Linear Regression | Low | Moderate | Very High | Baseline, regulated |
  | Decision Tree | Low-Medium | Moderate | High | Exploratory, small data |
  | GAM | Medium | High | High | Healthcare, ecology |
  | Sparse Linear | Low | Moderate-High | Very High | High-dimensional, sparse |
  | Small Neural Net | Medium | High | Medium | Moderate complexity |

  ### Complexity Constraints

  **Tree Depth Limitation**:
  ```python
  DecisionTreeClassifier(max_depth=5, max_leaf_nodes=32)
  ```
  - Enforces simulatability
  - Prevents overfitting
  - Maintains visualisability

  **Feature Sparsity**:
  ```python
  LassoCV(alpha=0.1)  # Stronger penalty → fewer features
  ```
  - Reduces cognitive load
  - Focuses on primary drivers
  - Simplifies validation

  **Interaction Constraints**:
  ```python
  ExplainableBoostingClassifier(max_interaction_bins=8)
  ```
  - Limits pairwise interactions
  - Balances accuracy and interpretability
  - Controlled complexity growth

  ### Hybrid Approaches

  **Knowledge Distillation**:
  ```
  Train complex model (teacher) → Train simple model (student) to mimic teacher
  ```
  - Preserves much of teacher accuracy
  - Gains student interpretability
  - Deployed student model is intrinsically interpretable

  **Modular Architecture**:
  - **Interpretable components**: Critical decision-making
  - **Black-box components**: Feature extraction/representation
  - **Clear interfaces**: Explicit handoffs between modules

  ## Application Domains

  ### Healthcare

  **Requirements**:
  - Clinical validation by physicians
  - Patient informed consent
  - Regulatory approval (IEEE P2802, FDA)

  **Preferred Models**:
  - Logistic regression (risk scores)
  - Decision trees (diagnostic flowcharts)
  - GAMs (disease risk models)

  **Examples**:
  - Pneumonia risk prediction (Caruana et al., 2015)
  - Sepsis detection (Henry et al., 2015)
  - Stroke risk assessment (Framingham Risk Score)

  ### Finance

  **Regulatory Context**:
  - Fair lending laws (Equal Credit Opportunity Act)
  - GDPR Article 22 (right to explanation)
  - Model risk management (SR 11-7)

  **Model Choices**:
  - Logistic regression (credit scoring)
  - Scorecard models (rule-based)
  - Linear models (stress testing)

  **Compliance**:
  - Transparent adverse action explanations
  - Auditability for regulators
  - Bias detection and mitigation

  ### Criminal Justice

  **Ethical Requirements**:
  - Due process considerations
  - Avoiding discriminatory proxies
  - Judicial review capability

  **Deployed Systems**:
  - **COMPAS**: Risk assessment for recidivism (controversial)
  - **PSA (Public Safety Assessment)**: Pretrial risk evaluation
  - **PATTERN**: Federal sentencing tool

  **Concerns**:
  - Black-box COMPAS sparked calls for interpretability
  - Trade-off between accuracy and fairness
  - Judicial understanding requirement

  ## Standards & Compliance

  ### IEEE Standards

  **IEEE P2976 (XAI)**:
  - Intrinsic interpretability as "strongly explainable AI"
  - Highest tier in XAI classification
  - Comprehensive explanation without auxiliary methods

  **IEEE 7001-2021 (Transparency)**:
  - Intrinsic models meet purpose, process, and performance transparency
  - Clear algorithmic transparency dimension
  - Stakeholder-appropriate explanations

  **IEEE P2863 (Governance)**:
  - Intrinsic interpretability for organisational accountability
  - Substantive governance requirement satisfaction
  - Simplified compliance auditing

  ### Industry Guidelines

  **Model Cards** (Mitchell et al., 2019):
  - Document intrinsic interpretability properties
  - Specify model architecture simplicity
  - Disclose interpretability-accuracy trade-offs

  **Responsible AI Maturity Model**:
  - Intrinsic interpretability as gold standard
  - Preferred for high-stakes applications
  - Reduced reliance on post-hoc techniques

  ## Evaluation Metrics

  ### Complexity Measures

  **Model Size**:
  - **Parameters**: Number of coefficients/weights
  - **Tree metrics**: Depth, number of leaves, number of nodes
  - **Rule count**: Total rules in rule set

  **Cognitive Load**:
  - **Simulatability threshold**: Can expert mentally simulate?
  - **Explanation length**: Words/symbols needed to describe
  - **Decision path length**: Steps from input to output

  ### Performance Metrics

  **Accuracy-Interpretability Trade-off**:
  ```
  Δ Accuracy = Accuracy(complex model) - Accuracy(interpretable model)
  ```
  - Quantifies interpretability cost
  - Informs model selection
  - Context-dependent tolerance

  **Fidelity** (for surrogate approaches):
  ```
  Fidelity = Agreement(interpretable model, complex model)
  ```
  - Measures approximation quality
  - Validates distillation success
  - Ensures explanation accuracy

  ## Challenges & Limitations

  ### Expressiveness Constraints

  **Linear Assumptions**:
  - Real-world relationships often non-linear
  - Interaction effects require explicit engineering
  - May underfit complex data

  **Complexity-Accuracy Trade-off**:
  - Intrinsically interpretable models typically less accurate
  - Performance gap varies by domain
  - Modern methods (EBM) narrow gap but don't eliminate

  ### Scalability Issues

  **High-Dimensional Data**:
  - Visualisation challenges beyond 3D
  - Feature selection becomes critical
  - Curse of dimensionality for k-NN

  **Computational Efficiency**:
  - Decision trees slow to train at scale
  - k-NN expensive at inference
  - GAMs require iterative fitting

  ### Human Factors

  **Illusion of Understanding**:
  - Simple models may appear more trustworthy than warranted
  - Over-confidence in interpretability
  - Neglect of model limitations

  **Expertise Dependency**:
  - Domain knowledge required for validation
  - Statistical literacy for coefficient interpretation
  - Context-specific understanding

  ## Research Directions

  ### Emerging Models

  **Neural Additive Models (NAMs)**:
  - Neural networks with GAM-like additive structure
  - Learned shape functions via MLPs
  - Higher capacity than linear GAMs

  **Concept Bottleneck Models**:
  - Intermediate layer representing human-understandable concepts
  - Explicit concept-based reasoning
  - Interventional debugging capability

  **Monotonic Neural Networks**:
  - Constrained architectures preserving monotonicity
  - Lattice-based models (TensorFlow Lattice)
  - Domain knowledge integration

  ### Theoretical Advances

  **Interpretability Bounds**:
  - Formalising accuracy-interpretability trade-off
  - Characterising minimum complexity for task
  - Information-theoretic frameworks

  **Causally Interpretable Models**:
  - Structural causal models
  - Counterfactual reasoning
  - Interventional predictions

  ## Best Practices

  ### Design Principles

  1. **Simplicity First**: Start with simplest adequate model
  2. **Domain Alignment**: Features match expert understanding
  3. **Constraint Integration**: Encode known relationships (monotonicity, etc.)
  4. **Iterative Refinement**: Validate with stakeholders, refine as needed

  ### Development Workflow

  **Pre-training**:
  - Engineer interpretable features
  - Consult domain experts
  - Define complexity budget

  **Training**:
  - Apply regularisation/constraints
  - Monitor complexity metrics
  - Validate against interpretable baseline

  **Post-training**:
  - Expert review of learned model
  - Sanity checks on parameters/rules
  - User testing for comprehensibility

  ### Deployment Guidelines

  **Documentation**:
  - Explicit model architecture description
  - Parameter/rule interpretation guide
  - Known limitations disclosure

  **Monitoring**:
  - Track model complexity over time (retraining)
  - Monitor for interpretability degradation
  - User feedback on understandability

  **Maintenance**:
  - Periodic expert validation
  - Recalibrate as needed
  - Update documentation with learnings

  ## Related Terms

  - **Broader**: [[Interpretable AI]], [[Model Interpretability]]
  - **Narrower**: [[Decision Tree Approximation]], [[Rule Extraction]]
  - **Related**: [[Explainable AI]], [[Model Transparency]]
  - **Contrasts**: [[Post Hoc Explanation]], [[Black Box Model]]

  ## Formal Specification

  ### Core Principles

  1. **Transparency by Design**: Model structure directly reveals reasoning
  2. **Direct Interpretability**: No auxiliary explanation mechanism required
  3. **Self-documenting**: Decision logic inherent in model representation
  4. **Human-understandable**: Comprehensible without deep technical expertise

  ### Formal Characterisation

  A model `f: X → Y` has intrinsic interpretability if:

  ```
  ∀x ∈ X, reasoning(f, x) is directly observable from f's structure
  ```

  Where `reasoning(f, x)` represents the decision pathway from input to output.

  ## Intrinsically Interpretable Models

  ### Linear Models

  #### Linear Regression

  **Form**:
  ```
  y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
  ```

  **Interpretability Properties**:
  - **Coefficients** (βᵢ): Direct feature importance
  - **Additive effects**: Marginal contribution of each feature
  - **Sign**: Positive/negative relationship direction
  - **Magnitude**: Relative influence strength

  **Limitations**:
  - Assumes linear relationships
  - Feature interactions require explicit engineering
  - Sensitive to multicollinearity

  #### Logistic Regression

  **Form**:
  ```
  P(y=1|x) = 1 / (1 + e^(-z))  where z = β₀ + Σβᵢxᵢ
  ```

  **Interpretability**:
  - **Coefficients**: Log-odds ratios
  - **Odds Ratio**: e^(βᵢ) for unit increase in feature
  - **Probability**: Direct probabilistic interpretation
  - **Decision Boundary**: Linear hyperplane

  **Use Cases**:
  - Medical diagnosis (interpretable risk scores)
  - Credit scoring (regulatory compliance)
  - Binary classification with transparency requirements

  ### Tree-Based Models

  #### Decision Trees

  **Structure**:
  ```
  Tree ::= Leaf(value) | Node(feature, threshold, left_tree, right_tree)
  ```

  **Interpretability Properties**:
  - **Path-based reasoning**: Explicit if-then rules
  - **Feature selection**: Only relevant features used
  - **Non-linear boundaries**: Piecewise constant approximations
  - **Visualisable**: Graphical tree representation

  **Advantages**:
  - No feature scaling required
  - Handles mixed data types
  - Captures feature interactions implicitly

  **Disadvantages**:
  - High variance (instability)
  - Greedy splitting (suboptimal)
  - Depth-complexity trade-off

  #### Rule Sets

  **Form**:
  ```
  IF (condition₁ AND condition₂ AND ...) THEN prediction
  ```

  **Examples**:
  - **RuleFit**: Extract rules from tree ensembles
  - **Skope-rules**: Supervised rule induction
  - **OneR**: Single-feature rule classification

  **Interpretability**:
  - Explicit logical conditions
  - Human-readable statements
  - Easy audit and verification
  - Domain expert validation

  ### Generalised Additive Models (GAMs)

  **Form**:
  ```
  g(E[y]) = β₀ + f₁(x₁) + f₂(x₂) + ... + fₙ(xₙ)
  ```

  **Interpretability**:
  - **Additive structure**: Isolates individual feature effects
  - **Shape functions** (fᵢ): Non-linear but visualisable
  - **No interaction terms** (in basic GAM): Simplifies understanding
  - **Partial dependence**: Direct from shape functions

  **Modern Extensions**:
  - **GA²M**: Pairwise interactions allowed
  - **EBM (Explainable Boosting Machines)**: Bagged GAMs with interactions

  **Applications**:
  - Healthcare risk models (Caruana et al., 2015)
  - Ecological modelling
  - Econometric analysis

  ### Sparse Linear Models

  #### LASSO (Least Absolute Shrinkage and Selection Operator)

  **Objective**:
  ```
  minimize: ||y - Xβ||₂² + λ||β||₁
  ```

  **Interpretability Benefits**:
  - **Automatic feature selection**: L1 penalty induces sparsity
  - **Reduced dimensionality**: Fewer features to interpret
  - **Simplified coefficients**: Only non-zero features considered

  **Trade-offs**:
  - May exclude correlated but relevant features
  - Regularisation parameter tuning required
  - Less stable than Ridge regression

  ### Prototype-Based Models

  #### k-Nearest Neighbours (k-NN)

  **Decision Rule**:
  ```
  ŷ = mode({yᵢ : xᵢ ∈ k-nearest neighbours of x})
  ```

  **Interpretability**:
  - **Instance-based**: Predictions explained by training examples
  - **Similarity reasoning**: Nearest neighbours justify classification
  - **No model parameters**: Directly uses training data

  **Limitations**:
  - Curse of dimensionality
  - Computationally expensive at scale
  - Requires meaningful distance metric

  #### Case-Based Reasoning

  **Mechanism**:
  - Retrieve similar past cases
  - Adapt solution to current problem
  - Store new case for future use

  **Transparency**:
  - Explicit precedent-based reasoning
  - Analogical explanation
  - Traceable decision provenance

  ## Key Properties

  ### Simulatability

  **Definition**: Can a human mentally simulate the model's operation?

  **Characteristics**:
  - **Low complexity**: Limited depth/parameters
  - **Transparent operations**: Understandable transformations
  - **Traceable paths**: Follow decision logic manually

  **Examples**:
  - Small decision trees (depth ≤ 5)
  - Linear models with few features (< 10)
  - Simple rule sets (< 20 rules)

  ### Decomposability

  **Definition**: Can each component be individually explained?

  **Components**:
  1. **Input interpretability**: Meaningful, human-understandable features
  2. **Parameter interpretability**: Each parameter has semantic meaning
  3. **Algorithmic transparency**: Learning algorithm is understandable

  **Example** (Linear Regression):
  - **Inputs**: Named features (age, income, etc.)
  - **Parameters**: Coefficients with clear interpretation
  - **Algorithm**: Ordinary least squares (closed-form solution)

  ### Monotonicity

  **Definition**: Does the model preserve expected monotonic relationships?

  **Enforcement**:
  - **Monotonic constraints**: Explicit in some frameworks (XGBoost)
  - **Domain knowledge**: Ensures sensible behaviour
  - **Regulatory compliance**: Required in some sectors (finance)

  **Example**:
  Credit scoring where higher income monotonically increases creditworthiness (all else equal).

  ## Implementation Strategies

  ### Model Selection

  **Decision Framework**:
  1. **Assess complexity budget**: How much interpretability is required?
  2. **Evaluate performance requirements**: Is accuracy loss acceptable?
  3. **Consider regulatory context**: Are there legal transparency mandates?
  4. **Domain constraints**: Are there known relationships to preserve?

  **Selection Matrix**:

  | Model Type | Complexity | Accuracy | Interpretability | Use Case |
  |------------|------------|----------|------------------|----------|
  | Linear Regression | Low | Moderate | Very High | Baseline, regulated |
  | Decision Tree | Low-Medium | Moderate | High | Exploratory, small data |
  | GAM | Medium | High | High | Healthcare, ecology |
  | Sparse Linear | Low | Moderate-High | Very High | High-dimensional, sparse |
  | Small Neural Net | Medium | High | Medium | Moderate complexity |

  ### Complexity Constraints

  **Tree Depth Limitation**:
  ```python
  DecisionTreeClassifier(max_depth=5, max_leaf_nodes=32)
  ```
  - Enforces simulatability
  - Prevents overfitting
  - Maintains visualisability

  **Feature Sparsity**:
  ```python
  LassoCV(alpha=0.1)  # Stronger penalty → fewer features
  ```
  - Reduces cognitive load
  - Focuses on primary drivers
  - Simplifies validation

  **Interaction Constraints**:
  ```python
  ExplainableBoostingClassifier(max_interaction_bins=8)
  ```
  - Limits pairwise interactions
  - Balances accuracy and interpretability
  - Controlled complexity growth

  ### Hybrid Approaches

  **Knowledge Distillation**:
  ```
  Train complex model (teacher) → Train simple model (student) to mimic teacher
  ```
  - Preserves much of teacher accuracy
  - Gains student interpretability
  - Deployed student model is intrinsically interpretable

  **Modular Architecture**:
  - **Interpretable components**: Critical decision-making
  - **Black-box components**: Feature extraction/representation
  - **Clear interfaces**: Explicit handoffs between modules

  ## Application Domains

  ### Healthcare

  **Requirements**:
  - Clinical validation by physicians
  - Patient informed consent
  - Regulatory approval (IEEE P2802, FDA)

  **Preferred Models**:
  - Logistic regression (risk scores)
  - Decision trees (diagnostic flowcharts)
  - GAMs (disease risk models)

  **Examples**:
  - Pneumonia risk prediction (Caruana et al., 2015)
  - Sepsis detection (Henry et al., 2015)
  - Stroke risk assessment (Framingham Risk Score)

  ### Finance

  **Regulatory Context**:
  - Fair lending laws (Equal Credit Opportunity Act)
  - GDPR Article 22 (right to explanation)
  - Model risk management (SR 11-7)

  **Model Choices**:
  - Logistic regression (credit scoring)
  - Scorecard models (rule-based)
  - Linear models (stress testing)

  **Compliance**:
  - Transparent adverse action explanations
  - Auditability for regulators
  - Bias detection and mitigation

  ### Criminal Justice

  **Ethical Requirements**:
  - Due process considerations
  - Avoiding discriminatory proxies
  - Judicial review capability

  **Deployed Systems**:
  - **COMPAS**: Risk assessment for recidivism (controversial)
  - **PSA (Public Safety Assessment)**: Pretrial risk evaluation
  - **PATTERN**: Federal sentencing tool

  **Concerns**:
  - Black-box COMPAS sparked calls for interpretability
  - Trade-off between accuracy and fairness
  - Judicial understanding requirement

  ## Standards & Compliance

  ### IEEE Standards

  **IEEE P2976 (XAI)**:
  - Intrinsic interpretability as "strongly explainable AI"
  - Highest tier in XAI classification
  - Comprehensive explanation without auxiliary methods

  **IEEE 7001-2021 (Transparency)**:
  - Intrinsic models meet purpose, process, and performance transparency
  - Clear algorithmic transparency dimension
  - Stakeholder-appropriate explanations

  **IEEE P2863 (Governance)**:
  - Intrinsic interpretability for organisational accountability
  - Substantive governance requirement satisfaction
  - Simplified compliance auditing

  ### Industry Guidelines

  **Model Cards** (Mitchell et al., 2019):
  - Document intrinsic interpretability properties
  - Specify model architecture simplicity
  - Disclose interpretability-accuracy trade-offs

  **Responsible AI Maturity Model**:
  - Intrinsic interpretability as gold standard
  - Preferred for high-stakes applications
  - Reduced reliance on post-hoc techniques

  ## Evaluation Metrics

  ### Complexity Measures

  **Model Size**:
  - **Parameters**: Number of coefficients/weights
  - **Tree metrics**: Depth, number of leaves, number of nodes
  - **Rule count**: Total rules in rule set

  **Cognitive Load**:
  - **Simulatability threshold**: Can expert mentally simulate?
  - **Explanation length**: Words/symbols needed to describe
  - **Decision path length**: Steps from input to output

  ### Performance Metrics

  **Accuracy-Interpretability Trade-off**:
  ```
  Δ Accuracy = Accuracy(complex model) - Accuracy(interpretable model)
  ```
  - Quantifies interpretability cost
  - Informs model selection
  - Context-dependent tolerance

  **Fidelity** (for surrogate approaches):
  ```
  Fidelity = Agreement(interpretable model, complex model)
  ```
  - Measures approximation quality
  - Validates distillation success
  - Ensures explanation accuracy

  ## Challenges & Limitations

  ### Expressiveness Constraints

  **Linear Assumptions**:
  - Real-world relationships often non-linear
  - Interaction effects require explicit engineering
  - May underfit complex data

  **Complexity-Accuracy Trade-off**:
  - Intrinsically interpretable models typically less accurate
  - Performance gap varies by domain
  - Modern methods (EBM) narrow gap but don't eliminate

  ### Scalability Issues

  **High-Dimensional Data**:
  - Visualisation challenges beyond 3D
  - Feature selection becomes critical
  - Curse of dimensionality for k-NN

  **Computational Efficiency**:
  - Decision trees slow to train at scale
  - k-NN expensive at inference
  - GAMs require iterative fitting

  ### Human Factors

  **Illusion of Understanding**:
  - Simple models may appear more trustworthy than warranted
  - Over-confidence in interpretability
  - Neglect of model limitations

  **Expertise Dependency**:
  - Domain knowledge required for validation
  - Statistical literacy for coefficient interpretation
  - Context-specific understanding

  ## Research Directions

  ### Emerging Models

  **Neural Additive Models (NAMs)**:
  - Neural networks with GAM-like additive structure
  - Learned shape functions via MLPs
  - Higher capacity than linear GAMs

  **Concept Bottleneck Models**:
  - Intermediate layer representing human-understandable concepts
  - Explicit concept-based reasoning
  - Interventional debugging capability

  **Monotonic Neural Networks**:
  - Constrained architectures preserving monotonicity
  - Lattice-based models (TensorFlow Lattice)
  - Domain knowledge integration

  ### Theoretical Advances

  **Interpretability Bounds**:
  - Formalising accuracy-interpretability trade-off
  - Characterising minimum complexity for task
  - Information-theoretic frameworks

  **Causally Interpretable Models**:
  - Structural causal models
  - Counterfactual reasoning
  - Interventional predictions

  ## Best Practices

  ### Design Principles

  1. **Simplicity First**: Start with simplest adequate model
  2. **Domain Alignment**: Features match expert understanding
  3. **Constraint Integration**: Encode known relationships (monotonicity, etc.)
  4. **Iterative Refinement**: Validate with stakeholders, refine as needed

  ### Development Workflow

  **Pre-training**:
  - Engineer interpretable features
  - Consult domain experts
  - Define complexity budget

  **Training**:
  - Apply regularisation/constraints
  - Monitor complexity metrics
  - Validate against interpretable baseline

  **Post-training**:
  - Expert review of learned model
  - Sanity checks on parameters/rules
  - User testing for comprehensibility

  ### Deployment Guidelines

  **Documentation**:
  - Explicit model architecture description
  - Parameter/rule interpretation guide
  - Known limitations disclosure

  **Monitoring**:
  - Track model complexity over time (retraining)
  - Monitor for interpretability degradation
  - User feedback on understandability

  **Maintenance**:
  - Periodic expert validation
  - Recalibrate as needed
  - Update documentation with learnings

  #### References
  ### Academic Literature

  - Rudin, C. (2019). "Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead." *Nature Machine Intelligence*, 1(5), 206-215
  - Caruana, R., et al. (2015). "Intelligible models for healthcare: Predicting pneumonia risk and hospital 30-day readmission." *KDD*
  - Lou, Y., et al. (2013). "Accurate intelligible models with pairwise interactions." *KDD*
  - Nori, H., et al. (2019). "InterpretML: A unified framework for machine learning interpretability." *arXiv:1909.09223*

  ### Standards

  - IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
  - IEEE. (2021). *IEEE 7001-2021: Standard for Transparency of Autonomous Systems*

  ### Tools & Frameworks

  - Microsoft Research. (2023). *InterpretML: Glass-box models*
  - Lundberg, S. M. (2023). *SHAP library* (TreeExplainer for intrinsic models)

  ## See Also

  - [[Interpretable AI]]
  - [[Post Hoc Explanation]]
  - [[Model Interpretability]]
  - [[Decision Tree Approximation]]
  - [[Black Box Model]]
  - [[Rule Extraction]]
  - ### Original Content
		- ```
  # Intrinsic Interpretability

		  **Term ID**: AI-0300
		  **Category**: XAI Fundamentals
		  **Status**: Established
		  **Last Updated**: 2025-10-27

		  ## Definition

		  The inherent transparency and understandability of a machine learning model's architecture and decision-making process, achieved through model design rather than external explanation techniques, enabling direct human comprehension without additional interpretability methods.

		  ## Related Terms

		  - **Broader**: [[Interpretable AI]], [[Model Interpretability]]
		  - **Narrower**: [[Decision Tree Approximation]], [[Rule Extraction]]
		  - **Related**: [[Explainable AI]], [[Model Transparency]]
		  - **Contrasts**: [[Post Hoc Explanation]], [[Black Box Model]]

		  ## Formal Specification

		  ### Core Principles

		  1. **Transparency by Design**: Model structure directly reveals reasoning
		  2. **Direct Interpretability**: No auxiliary explanation mechanism required
		  3. **Self-documenting**: Decision logic inherent in model representation
		  4. **Human-understandable**: Comprehensible without deep technical expertise

		  ### Formal Characterisation

		  A model `f: X → Y` has intrinsic interpretability if:

		  ```
		  ∀x ∈ X, reasoning(f, x) is directly observable from f's structure
		  ```

		  Where `reasoning(f, x)` represents the decision pathway from input to output.

		  ## Intrinsically Interpretable Models

		  ### Linear Models

		  #### Linear Regression

		  **Form**:
		  ```
		  y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
		  ```

		  **Interpretability Properties**:
		  - **Coefficients** (βᵢ): Direct feature importance
		  - **Additive effects**: Marginal contribution of each feature
		  - **Sign**: Positive/negative relationship direction
		  - **Magnitude**: Relative influence strength

		  **Limitations**:
		  - Assumes linear relationships
		  - Feature interactions require explicit engineering
		  - Sensitive to multicollinearity

		  #### Logistic Regression

		  **Form**:
		  ```
		  P(y=1|x) = 1 / (1 + e^(-z))  where z = β₀ + Σβᵢxᵢ
		  ```

		  **Interpretability**:
		  - **Coefficients**: Log-odds ratios
		  - **Odds Ratio**: e^(βᵢ) for unit increase in feature
		  - **Probability**: Direct probabilistic interpretation
		  - **Decision Boundary**: Linear hyperplane

		  **Use Cases**:
		  - Medical diagnosis (interpretable risk scores)
		  - Credit scoring (regulatory compliance)
		  - Binary classification with transparency requirements

		  ### Tree-Based Models

		  #### Decision Trees

		  **Structure**:
		  ```
		  Tree ::= Leaf(value) | Node(feature, threshold, left_tree, right_tree)
		  ```

		  **Interpretability Properties**:
		  - **Path-based reasoning**: Explicit if-then rules
		  - **Feature selection**: Only relevant features used
		  - **Non-linear boundaries**: Piecewise constant approximations
		  - **Visualisable**: Graphical tree representation

		  **Advantages**:
		  - No feature scaling required
		  - Handles mixed data types
		  - Captures feature interactions implicitly

		  **Disadvantages**:
		  - High variance (instability)
		  - Greedy splitting (suboptimal)
		  - Depth-complexity trade-off

		  #### Rule Sets

		  **Form**:
		  ```
		  IF (condition₁ AND condition₂ AND ...) THEN prediction
		  ```

		  **Examples**:
		  - **RuleFit**: Extract rules from tree ensembles
		  - **Skope-rules**: Supervised rule induction
		  - **OneR**: Single-feature rule classification

		  **Interpretability**:
		  - Explicit logical conditions
		  - Human-readable statements
		  - Easy audit and verification
		  - Domain expert validation

		  ### Generalised Additive Models (GAMs)

		  **Form**:
		  ```
		  g(E[y]) = β₀ + f₁(x₁) + f₂(x₂) + ... + fₙ(xₙ)
		  ```

		  **Interpretability**:
		  - **Additive structure**: Isolates individual feature effects
		  - **Shape functions** (fᵢ): Non-linear but visualisable
		  - **No interaction terms** (in basic GAM): Simplifies understanding
		  - **Partial dependence**: Direct from shape functions

		  **Modern Extensions**:
		  - **GA²M**: Pairwise interactions allowed
		  - **EBM (Explainable Boosting Machines)**: Bagged GAMs with interactions

		  **Applications**:
		  - Healthcare risk models (Caruana et al., 2015)
		  - Ecological modelling
		  - Econometric analysis

		  ### Sparse Linear Models

		  #### LASSO (Least Absolute Shrinkage and Selection Operator)

		  **Objective**:
		  ```
		  minimize: ||y - Xβ||₂² + λ||β||₁
		  ```

		  **Interpretability Benefits**:
		  - **Automatic feature selection**: L1 penalty induces sparsity
		  - **Reduced dimensionality**: Fewer features to interpret
		  - **Simplified coefficients**: Only non-zero features considered

		  **Trade-offs**:
		  - May exclude correlated but relevant features
		  - Regularisation parameter tuning required
		  - Less stable than Ridge regression

		  ### Prototype-Based Models

		  #### k-Nearest Neighbours (k-NN)

		  **Decision Rule**:
		  ```
		  ŷ = mode({yᵢ : xᵢ ∈ k-nearest neighbours of x})
		  ```

		  **Interpretability**:
		  - **Instance-based**: Predictions explained by training examples
		  - **Similarity reasoning**: Nearest neighbours justify classification
		  - **No model parameters**: Directly uses training data

		  **Limitations**:
		  - Curse of dimensionality
		  - Computationally expensive at scale
		  - Requires meaningful distance metric

		  #### Case-Based Reasoning

		  **Mechanism**:
		  - Retrieve similar past cases
		  - Adapt solution to current problem
		  - Store new case for future use

		  **Transparency**:
		  - Explicit precedent-based reasoning
		  - Analogical explanation
		  - Traceable decision provenance

		  ## Key Properties

		  ### Simulatability

		  **Definition**: Can a human mentally simulate the model's operation?

		  **Characteristics**:
		  - **Low complexity**: Limited depth/parameters
		  - **Transparent operations**: Understandable transformations
		  - **Traceable paths**: Follow decision logic manually

		  **Examples**:
		  - Small decision trees (depth ≤ 5)
		  - Linear models with few features (< 10)
		  - Simple rule sets (< 20 rules)

		  ### Decomposability

		  **Definition**: Can each component be individually explained?

		  **Components**:
		  1. **Input interpretability**: Meaningful, human-understandable features
		  2. **Parameter interpretability**: Each parameter has semantic meaning
		  3. **Algorithmic transparency**: Learning algorithm is understandable

		  **Example** (Linear Regression):
		  - **Inputs**: Named features (age, income, etc.)
		  - **Parameters**: Coefficients with clear interpretation
		  - **Algorithm**: Ordinary least squares (closed-form solution)

		  ### Monotonicity

		  **Definition**: Does the model preserve expected monotonic relationships?

		  **Enforcement**:
		  - **Monotonic constraints**: Explicit in some frameworks (XGBoost)
		  - **Domain knowledge**: Ensures sensible behaviour
		  - **Regulatory compliance**: Required in some sectors (finance)

		  **Example**:
		  Credit scoring where higher income monotonically increases creditworthiness (all else equal).

		  ## Implementation Strategies

		  ### Model Selection

		  **Decision Framework**:
		  1. **Assess complexity budget**: How much interpretability is required?
		  2. **Evaluate performance requirements**: Is accuracy loss acceptable?
		  3. **Consider regulatory context**: Are there legal transparency mandates?
		  4. **Domain constraints**: Are there known relationships to preserve?

		  **Selection Matrix**:

		  | Model Type | Complexity | Accuracy | Interpretability | Use Case |
		  |------------|------------|----------|------------------|----------|
		  | Linear Regression | Low | Moderate | Very High | Baseline, regulated |
		  | Decision Tree | Low-Medium | Moderate | High | Exploratory, small data |
		  | GAM | Medium | High | High | Healthcare, ecology |
		  | Sparse Linear | Low | Moderate-High | Very High | High-dimensional, sparse |
		  | Small Neural Net | Medium | High | Medium | Moderate complexity |

		  ### Complexity Constraints

		  **Tree Depth Limitation**:
		  ```python
		  DecisionTreeClassifier(max_depth=5, max_leaf_nodes=32)
		  ```
		  - Enforces simulatability
		  - Prevents overfitting
		  - Maintains visualisability

		  **Feature Sparsity**:
		  ```python
		  LassoCV(alpha=0.1)  # Stronger penalty → fewer features
		  ```
		  - Reduces cognitive load
		  - Focuses on primary drivers
		  - Simplifies validation

		  **Interaction Constraints**:
		  ```python
		  ExplainableBoostingClassifier(max_interaction_bins=8)
		  ```
		  - Limits pairwise interactions
		  - Balances accuracy and interpretability
		  - Controlled complexity growth

		  ### Hybrid Approaches

		  **Knowledge Distillation**:
		  ```
		  Train complex model (teacher) → Train simple model (student) to mimic teacher
		  ```
		  - Preserves much of teacher accuracy
		  - Gains student interpretability
		  - Deployed student model is intrinsically interpretable

		  **Modular Architecture**:
		  - **Interpretable components**: Critical decision-making
		  - **Black-box components**: Feature extraction/representation
		  - **Clear interfaces**: Explicit handoffs between modules

		  ## Application Domains

		  ### Healthcare

		  **Requirements**:
		  - Clinical validation by physicians
		  - Patient informed consent
		  - Regulatory approval (IEEE P2802, FDA)

		  **Preferred Models**:
		  - Logistic regression (risk scores)
		  - Decision trees (diagnostic flowcharts)
		  - GAMs (disease risk models)

		  **Examples**:
		  - Pneumonia risk prediction (Caruana et al., 2015)
		  - Sepsis detection (Henry et al., 2015)
		  - Stroke risk assessment (Framingham Risk Score)

		  ### Finance

		  **Regulatory Context**:
		  - Fair lending laws (Equal Credit Opportunity Act)
		  - GDPR Article 22 (right to explanation)
		  - Model risk management (SR 11-7)

		  **Model Choices**:
		  - Logistic regression (credit scoring)
		  - Scorecard models (rule-based)
		  - Linear models (stress testing)

		  **Compliance**:
		  - Transparent adverse action explanations
		  - Auditability for regulators
		  - Bias detection and mitigation

		  ### Criminal Justice

		  **Ethical Requirements**:
		  - Due process considerations
		  - Avoiding discriminatory proxies
		  - Judicial review capability

		  **Deployed Systems**:
		  - **COMPAS**: Risk assessment for recidivism (controversial)
		  - **PSA (Public Safety Assessment)**: Pretrial risk evaluation
		  - **PATTERN**: Federal sentencing tool

		  **Concerns**:
		  - Black-box COMPAS sparked calls for interpretability
		  - Trade-off between accuracy and fairness
		  - Judicial understanding requirement

		  ## Standards & Compliance

		  ### IEEE Standards

		  **IEEE P2976 (XAI)**:
		  - Intrinsic interpretability as "strongly explainable AI"
		  - Highest tier in XAI classification
		  - Comprehensive explanation without auxiliary methods

		  **IEEE 7001-2021 (Transparency)**:
		  - Intrinsic models meet purpose, process, and performance transparency
		  - Clear algorithmic transparency dimension
		  - Stakeholder-appropriate explanations

		  **IEEE P2863 (Governance)**:
		  - Intrinsic interpretability for organisational accountability
		  - Substantive governance requirement satisfaction
		  - Simplified compliance auditing

		  ### Industry Guidelines

		  **Model Cards** (Mitchell et al., 2019):
		  - Document intrinsic interpretability properties
		  - Specify model architecture simplicity
		  - Disclose interpretability-accuracy trade-offs

		  **Responsible AI Maturity Model**:
		  - Intrinsic interpretability as gold standard
		  - Preferred for high-stakes applications
		  - Reduced reliance on post-hoc techniques

		  ## Evaluation Metrics

		  ### Complexity Measures

		  **Model Size**:
		  - **Parameters**: Number of coefficients/weights
		  - **Tree metrics**: Depth, number of leaves, number of nodes
		  - **Rule count**: Total rules in rule set

		  **Cognitive Load**:
		  - **Simulatability threshold**: Can expert mentally simulate?
		  - **Explanation length**: Words/symbols needed to describe
		  - **Decision path length**: Steps from input to output

		  ### Performance Metrics

		  **Accuracy-Interpretability Trade-off**:
		  ```
		  Δ Accuracy = Accuracy(complex model) - Accuracy(interpretable model)
		  ```
		  - Quantifies interpretability cost
		  - Informs model selection
		  - Context-dependent tolerance

		  **Fidelity** (for surrogate approaches):
		  ```
		  Fidelity = Agreement(interpretable model, complex model)
		  ```
		  - Measures approximation quality
		  - Validates distillation success
		  - Ensures explanation accuracy

		  ## Challenges & Limitations

		  ### Expressiveness Constraints

		  **Linear Assumptions**:
		  - Real-world relationships often non-linear
		  - Interaction effects require explicit engineering
		  - May underfit complex data

		  **Complexity-Accuracy Trade-off**:
		  - Intrinsically interpretable models typically less accurate
		  - Performance gap varies by domain
		  - Modern methods (EBM) narrow gap but don't eliminate

		  ### Scalability Issues

		  **High-Dimensional Data**:
		  - Visualisation challenges beyond 3D
		  - Feature selection becomes critical
		  - Curse of dimensionality for k-NN

		  **Computational Efficiency**:
		  - Decision trees slow to train at scale
		  - k-NN expensive at inference
		  - GAMs require iterative fitting

		  ### Human Factors

		  **Illusion of Understanding**:
		  - Simple models may appear more trustworthy than warranted
		  - Over-confidence in interpretability
		  - Neglect of model limitations

		  **Expertise Dependency**:
		  - Domain knowledge required for validation
		  - Statistical literacy for coefficient interpretation
		  - Context-specific understanding

		  ## Research Directions

		  ### Emerging Models

		  **Neural Additive Models (NAMs)**:
		  - Neural networks with GAM-like additive structure
		  - Learned shape functions via MLPs
		  - Higher capacity than linear GAMs

		  **Concept Bottleneck Models**:
		  - Intermediate layer representing human-understandable concepts
		  - Explicit concept-based reasoning
		  - Interventional debugging capability

		  **Monotonic Neural Networks**:
		  - Constrained architectures preserving monotonicity
		  - Lattice-based models (TensorFlow Lattice)
		  - Domain knowledge integration

		  ### Theoretical Advances

		  **Interpretability Bounds**:
		  - Formalising accuracy-interpretability trade-off
		  - Characterising minimum complexity for task
		  - Information-theoretic frameworks

		  **Causally Interpretable Models**:
		  - Structural causal models
		  - Counterfactual reasoning
		  - Interventional predictions

		  ## Best Practices

		  ### Design Principles

		  1. **Simplicity First**: Start with simplest adequate model
		  2. **Domain Alignment**: Features match expert understanding
		  3. **Constraint Integration**: Encode known relationships (monotonicity, etc.)
		  4. **Iterative Refinement**: Validate with stakeholders, refine as needed

		  ### Development Workflow

		  **Pre-training**:
		  - Engineer interpretable features
		  - Consult domain experts
		  - Define complexity budget

		  **Training**:
		  - Apply regularisation/constraints
		  - Monitor complexity metrics
		  - Validate against interpretable baseline

		  **Post-training**:
		  - Expert review of learned model
		  - Sanity checks on parameters/rules
		  - User testing for comprehensibility

		  ### Deployment Guidelines

		  **Documentation**:
		  - Explicit model architecture description
		  - Parameter/rule interpretation guide
		  - Known limitations disclosure

		  **Monitoring**:
		  - Track model complexity over time (retraining)
		  - Monitor for interpretability degradation
		  - User feedback on understandability

		  **Maintenance**:
		  - Periodic expert validation
		  - Recalibrate as needed
		  - Update documentation with learnings

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
