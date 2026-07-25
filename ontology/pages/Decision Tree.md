public:: true

# Decision Tree
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decision-tree",
  "@type": "Page",
  "title": "Decision Tree",
  "vc:slug": "decision-tree",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:supervised-learning", "vc:label": "Supervised Learning"},
    {"@id": "urn:visionflow:linked:classification", "vc:label": "Classification"},
    {"@id": "urn:visionflow:linked:regression", "vc:label": "Regression"},
    {"@id": "urn:visionflow:linked:ensemble-methods", "vc:label": "Ensemble Methods"},
    {"@id": "urn:visionflow:linked:interpretability", "vc:label": "Interpretability"},
    {"@id": "urn:visionflow:linked:explainability", "vc:label": "Explainability"},
    {"@id": "urn:visionflow:linked:random-forest", "vc:label": "Random Forest"},
    {"@id": "urn:visionflow:linked:gradient-boosted-trees", "vc:label": "Gradient Boosted Trees"},
    {"@id": "urn:visionflow:linked:overfitting", "vc:label": "Overfitting"},
    {"@id": "urn:visionflow:linked:pruning", "vc:label": "Pruning"},
    {"@id": "urn:visionflow:linked:bias-variance-tradeoff", "vc:label": "Bias-Variance Tradeoff"},
    {"@id": "urn:visionflow:linked:feature-importance", "vc:label": "Feature Importance"},
    {"@id": "urn:visionflow:linked:gini-coefficient", "vc:label": "Gini Coefficient"},
    {"@id": "urn:visionflow:linked:information-gain", "vc:label": "Information Gain"},
    {"@id": "urn:visionflow:linked:decision-transparency", "vc:label": "Decision Transparency"},
    {"@id": "urn:visionflow:linked:explainable-ai", "vc:label": "Explainable AI"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:training-data", "vc:label": "Training Data"},
    {"@id": "urn:visionflow:linked:evaluation-metric", "vc:label": "Evaluation Metric"},
    {"@id": "urn:visionflow:linked:cross-validation", "vc:label": "Cross Validation"},
    {"@id": "urn:visionflow:linked:bagging", "vc:label": "Bagging"},
    {"@id": "urn:visionflow:linked:boosting", "vc:label": "Boosting"},
    {"@id": "urn:visionflow:linked:hyperparameter-tuning", "vc:label": "Hyperparameter Tuning"},
    {"@id": "urn:visionflow:linked:feature-engineering", "vc:label": "Feature Engineering"},
    {"@id": "urn:visionflow:linked:model-evaluation", "vc:label": "Model Evaluation"},
    {"@id": "urn:visionflow:linked:confusion-matrix", "vc:label": "Confusion Matrix"},
    {"@id": "urn:visionflow:linked:support-vector-machine", "vc:label": "Support Vector Machine"},
    {"@id": "urn:visionflow:linked:logistic-regression", "vc:label": "Logistic Regression"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:k-nearest-neighbours", "vc:label": "K-Nearest Neighbours"},
    {"@id": "urn:visionflow:linked:shap", "vc:label": "SHAP"},
    {"@id": "urn:visionflow:linked:post-hoc-explanation", "vc:label": "Post Hoc Explanation"},
    {"@id": "urn:visionflow:linked:regulatory-compliance", "vc:label": "Regulatory Compliance"},
    {"@id": "urn:visionflow:linked:ai-fairness", "vc:label": "AI Fairness"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-tree",
  "@type": "Class",
  "label": "Decision Tree",
  "definition": "A decision tree is a supervised learning model that predicts an outcome by recursively partitioning the feature space into regions, represented as a tree of decision nodes and leaf nodes. Each internal node tests a feature against a threshold and routes an instance down a branch, while leaves assign a class label or numeric value. Decision trees are valued for their interpretability and form the building blocks of ensemble methods such as random forests and gradient boosting.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.90,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supervised-learning",
      "label": "Supervised Learning"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:classification", "label": "Classification"},
      {"@id": "urn:ngm:class:regression", "label": "Regression"},
      {"@id": "urn:ngm:class:pruning", "label": "Pruning"},
      {"@id": "urn:ngm:class:feature-importance", "label": "Feature Importance"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:ensemble-methods", "label": "Ensemble Methods"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:classification", "label": "Classification"},
      {"@id": "urn:ngm:class:regression", "label": "Regression"},
      {"@id": "urn:ngm:class:interpretability", "label": "Interpretability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ensemble-methods", "label": "Ensemble Methods"},
      {"@id": "urn:ngm:class:random-forest", "label": "Random Forest"},
      {"@id": "urn:ngm:class:gradient-boosted-trees", "label": "Gradient Boosted Trees"},
      {"@id": "urn:ngm:class:decision-transparency", "label": "Decision Transparency"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:interpretability", "label": "Interpretability"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"},
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:support-vector-machine", "label": "Support Vector Machine"},
      {"@id": "urn:ngm:class:logistic-regression", "label": "Logistic Regression"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ensemble-methods", "label": "Ensemble Methods"},
      {"@id": "urn:ngm:class:random-forest", "label": "Random Forest"},
      {"@id": "urn:ngm:class:gradient-boosted-trees", "label": "Gradient Boosted Trees"},
      {"@id": "urn:ngm:class:bagging", "label": "Bagging"},
      {"@id": "urn:ngm:class:boosting", "label": "Boosting"},
      {"@id": "urn:ngm:class:bias-variance-tradeoff", "label": "Bias-Variance Tradeoff"},
      {"@id": "urn:ngm:class:overfitting", "label": "Overfitting"},
      {"@id": "urn:ngm:class:shap", "label": "SHAP"},
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A decision tree is a [[Supervised Learning]] model that predicts an outcome by recursively partitioning the feature space into axis-aligned hyperrectangular regions, represented as a rooted acyclic tree of decision nodes and leaf nodes. At each internal (decision) node, the algorithm applies a test to a single feature — comparing a numeric feature against a threshold value, or checking whether a categorical feature belongs to a subset — and routes each training or inference instance down the branch corresponding to the test outcome. At each leaf node, the model assigns a class label (for [[Classification]] tasks) or a numeric value (for [[Regression]] tasks) based on the instances that reached that leaf during training. Decision trees are constructed by greedy recursive partitioning: at each node, the algorithm selects the feature and split that maximises a purity criterion over the training set — most commonly [[Gini Coefficient]] (Gini impurity) for the CART algorithm, [[Information Gain]] (entropy reduction) for ID3 and C4.5, or variance reduction for regression trees. The resulting model is intrinsically interpretable: each prediction corresponds to a traversable path of human-readable conditions that constitutes a direct form of [[Decision Transparency]]. This interpretability makes decision trees uniquely valuable in regulated domains — [[Regulatory Compliance]] in financial services, healthcare, and public administration often requires that predictions be explainable, a requirement that [[Decision Tree]] instances satisfy by construction. However, a single unconstrained tree suffers from high variance and [[Overfitting]]: it will memorise the training data rather than generalising, producing poor performance on unseen instances. This [[Bias-Variance Tradeoff]] failure motivates the principal use of decision trees as base learners in [[Ensemble Methods]] — specifically [[Bagging]] (as in [[Random Forest]]) and [[Boosting]] (as in [[Gradient Boosted Trees]] and XGBoost/LightGBM) — which are among the most powerful and widely deployed [[Machine Learning]] algorithms for structured tabular data as of 2026.

- ### Semantic Classification
  - owl-class:: ai:DecisionTree
  - owl-role:: Algorithm | SupervisedLearningModel | InterpretableModel
  - owl-inferred:: ai:MachineLearningAlgorithm, ai:InterpretableClassifier, ai:EnsembleBaselearner
  - belongs-to-domain:: [[Machine Learning]]
  - implemented-in-layer:: [[Algorithm Layer]]
  - related-standard:: [[IEEE P2976 (XAI)]], [[ISO/IEC 42001]]
  - exemplar-of:: [[Interpretable Model]], [[Explainable AI]]

- ### Relationships
  - is-subclass-of:: [[Supervised Learning]], [[Machine Learning]], [[Interpretable Model]]
  - has-part:: [[Classification]], [[Regression]], [[Pruning]], [[Feature Importance]], [[Decision Path]], [[Gini Coefficient]], [[Information Gain]]
  - requires:: [[Training Data]], [[Evaluation Metric]], [[Feature Engineering]], [[Labelled Dataset]], [[Cross Validation]]
  - enables:: [[Ensemble Methods]], [[Random Forest]], [[Gradient Boosted Trees]], [[Decision Transparency]], [[Explainable AI]], [[Anomaly Detection]], [[Interpretability]], [[Feature Importance]], [[Knowledge Graph]], [[Responsible AI]]
  - implements:: [[Classification]], [[Regression]], [[Interpretability]], [[Recursive Partitioning]]
  - depends-on:: [[Supervised Learning]], [[Training Data]], [[Gini Coefficient]], [[Information Gain]], [[Bias-Variance Tradeoff]]
  - supports:: [[Interpretability]], [[Explainability]], [[Explainable AI]], [[Regulatory Compliance]], [[AI Fairness]], [[Decision Transparency]], [[AI Governance]], [[Responsible AI]], [[Algorithmic Accountability]]
  - uses:: [[Gini Coefficient]], [[Information Gain]], [[Pruning]], [[Cross Validation]], [[Hyperparameter Tuning]], [[SHAP]], [[Confusion Matrix]], [[Model Evaluation]], [[Feature Engineering]]
  - contrasts-with:: [[Neural Network]], [[Support Vector Machine]], [[Logistic Regression]], [[K-Nearest Neighbours]], [[Naive Bayes]], [[Deep Learning]]
  - related-to:: [[Ensemble Methods]], [[Random Forest]], [[Gradient Boosted Trees]], [[Bagging]], [[Boosting]], [[Bias-Variance Tradeoff]], [[Overfitting]], [[AI Fairness]], [[Post Hoc Explanation]], [[Counterfactual Explanation]], [[Feature Engineering]], [[Hyperparameter Tuning]], [[Algorithmic Accountability]], [[Sentiment Analysis]], [[Text Classification]], [[Algorithmic Bias]], [[Knowledge Graph]], [[Data Science]]
  - standardized-by:: [[IEEE P2976 (XAI)]]
  - applied-in:: [[Natural Language Processing]], [[Medical Diagnosis AI]], [[Data Science]], [[Algorithmic Accountability]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:DecisionNode))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:LeafNode))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:SplittingCriterion))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:Pruning))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:FeatureImportance))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:DecisionPath))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:hasPart ai:SplitThreshold))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:requires ai:TrainingData))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:requires ai:EvaluationMetric))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:requires ai:FeatureEngineering))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:dependsOn ai:SupervisedLearning))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:dependsOn ai:LabelledDataset))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:dependsOn ai:SplittingCriterion))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:Classification))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:Regression))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:EnsembleMethods))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:DecisionTransparency))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:FeatureImportance))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:RuleExtraction))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:Interpretability))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:AnomalyDetection))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:RandomForest))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:enables ai:GradientBoostedTrees))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:implements ai:Interpretability))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:implements ai:RecursivePartitioning))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:implements ai:GiniImpurity))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:implements ai:InformationGain))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:supports ai:RegulatoryCompliance))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:supports ai:AIFairness))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:supports ai:DecisionTransparency))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:uses ai:SHAP))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:uses ai:CrossValidation))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:reducesTo ai:ClassificationRule))
      SubClassOf(ai:DecisionTree
        ObjectSomeValuesFrom(ai:reducesTo ai:IfThenRuleSet))
      SubClassOf(ai:RandomForest
        ObjectSomeValuesFrom(ai:reducesTo ai:DecisionTree))
      SubClassOf(ai:GradientBoostedTrees
        ObjectSomeValuesFrom(ai:reducesTo ai:DecisionTree))
      SubClassOf(ai:XGBoost
        ObjectSomeValuesFrom(ai:reducesTo ai:DecisionTree))
      SubClassOf(ai:LightGBM
        ObjectSomeValuesFrom(ai:reducesTo ai:DecisionTree))
      ```
  - ## About
    - The decision tree is one of the oldest and most enduring algorithms in [[Machine Learning]], with roots in statistical classification theory of the 1960s and formalisation in the seminal CART (Classification and Regression Trees) text by Breiman, Friedman, Olshen, and Stone in 1984.
    - Its core computational idea — greedy recursive binary partitioning of the feature space using a purity criterion — is simple enough to be taught in an introductory course, yet rich enough in structure to underpin the most competitive tabular data algorithms in use four decades later.
    - The tree's interpretability distinguishes it categorically from methods such as [[Neural Network]] or [[Support Vector Machine]]: every prediction maps to a path of explicit conditions that can be read, understood, verified, and challenged by a human expert.
    - This property is not merely an academic virtue; it is a commercial and regulatory necessity in domains where decisions must be auditable — credit scoring, medical diagnosis, insurance underwriting, and criminal justice risk assessment all benefit from or require models whose reasoning can be inspected.
    - The core building blocks of a decision tree are:
      - **Root node**: The topmost decision node; applies the first test to the entire training set. The feature chosen at the root has the highest global discriminating power under the splitting criterion.
      - **Internal (decision) nodes**: Each applies a univariate threshold test (for continuous features: x_j ≤ t) or category membership test (for categorical features: x_j ∈ S). Routes instances to left or right child.
      - **Branches**: Directed edges connecting a parent node to its two children (binary trees in CART). Label each branch with the test outcome (True/False, ≤t / >t).
      - **Leaf nodes**: Terminal nodes; assign a prediction. For [[Classification]]: the majority class label (or class probability distribution) of training instances that reached this leaf. For [[Regression]]: the mean (or median) of target values of instances at this leaf.
      - **Decision path**: The sequence of edges from root to leaf traversed for a given input instance. This path constitutes the human-readable explanation of the prediction — the direct mechanism of [[Decision Transparency]].
    - The training objective is to find a tree that minimises prediction error on the training set while avoiding [[Overfitting]]. Because optimal tree construction is NP-hard (Hyafil and Rivest 1976), all practical algorithms use greedy top-down induction: at each node, select the feature and threshold that maximise a local purity improvement criterion, then recurse on each child subset. This greedy approach is computationally efficient but produces trees that may be suboptimal globally — a known limitation that motivates both [[Pruning]] and [[Ensemble Methods]].
    - The practical limitation of single decision trees is their instability: small changes in training data can produce dramatically different tree structures, reflecting high variance in the learning algorithm.
    - A deep tree perfectly fitting the training set generalises poorly, a manifestation of [[Overfitting]] resulting from the [[Bias-Variance Tradeoff]].
    - [[Pruning]] — both pre-pruning (stopping early when splits produce insufficient gain) and post-pruning (growing a full tree then removing branches that do not improve generalisation on a validation set) — partially addresses this but does not eliminate it.
    - The solution that transformed decision trees from a somewhat disappointing standalone model into the backbone of the world's most powerful tabular [[Machine Learning]] algorithms was [[Ensemble Methods]]: combining many trees through [[Bagging]] (training each tree on a bootstrap sample and averaging, as in [[Random Forest]]) or [[Boosting]] (training trees sequentially to correct the residuals of the prior ensemble, as in [[Gradient Boosted Trees]]).
    - Breiman's [[Random Forest]] (2001) and the XGBoost implementation of gradient-boosted trees by Chen and Guestrin (2016) represent the two most consequential developments in practical [[Machine Learning]] for structured data, and both are architecturally decision-tree ensembles.
    - In 2026, decision trees occupy a distinctive position in the AI landscape: individually they remain the canonical interpretable model and the exemplar of [[Decision Transparency]], while collectively — as components of XGBoost, LightGBM, CatBoost, and [[Random Forest]] — they power a substantial fraction of production ML deployments in finance, healthcare, e-commerce, and scientific computing.
    - The resurgence of interest in [[Explainable AI]] driven by regulatory pressure from the EU AI Act and the UK's Data (Use and Access) Act 2025 has renewed interest in single-tree models and tree-based surrogate models as transparent alternatives or complements to black-box systems.
    - Fundamentally, the decision tree embodies a particular theory of learning: that patterns in data can be expressed as a hierarchical set of conjunctive conditions on individual features. This assumption is both its strength (capturing non-linearity and interactions without explicit [[Feature Engineering]]) and its limitation (axis-aligned splits may poorly approximate smooth curved boundaries, and greedy construction may miss globally optimal structures).
    - The relationship of decision trees to the broader landscape of [[Machine Learning]] algorithms is defined by their position on the accuracy-interpretability tradeoff: they occupy the interpretable end of this spectrum as standalone models, and the high-accuracy end when used as components of ensembles. No other algorithm occupies both ends of this spectrum simultaneously; this dual role is the decision tree's unique contribution to the field.
    - In the context of [[AI Fairness]] and [[Responsible AI]], decision trees offer a distinctive advantage: their transparent decision paths can be directly audited for discriminatory conditions, and fairness constraints can be incorporated directly into the splitting criterion. This makes them particularly suited to the [[Regulatory Compliance]] requirements of high-risk AI Act Annex III deployments where both accuracy and fairness auditing are mandatory.
    - The growing adoption of [[Knowledge Graph]] representations in AI systems has created new roles for decision tree models: as classifiers over knowledge graph node features, as rule extraction engines generating triples for [[Knowledge Graph]] population, and as interpretable components within neuro-symbolic reasoning systems that combine [[Deep Learning]] representation learning with rule-based symbolic reasoning. In [[Transfer Learning]] scenarios, shallow decision trees trained on target domain features provide fast adaptation baselines against which deep transfer learning models must demonstrate superior performance to justify their additional complexity and interpretability cost.
  - ## Algorithm Families and Structural Variants
    - Decision tree learning algorithms differ primarily in their splitting criterion, structural constraints, and scope of supported feature types:
    - **ID3 (Iterative Dichotomiser 3)**:
      - Quinlan (1986). Uses [[Information Gain]] (entropy reduction) as the splitting criterion.
      - Restricted to categorical features; cannot handle continuous features or missing values; no pruning mechanism.
      - Historically foundational; superseded in practice by C4.5 and CART.
    - **C4.5**:
      - Quinlan (1993). Extension of ID3 using Gain Ratio to correct the bias of information gain toward high-cardinality features.
      - Handles continuous features via threshold search; missing values via fractional instance routing; includes reduced-error post-pruning.
      - Generates rule sets from trees (C4.5rules). Widely used in the 1990s–2000s in academic benchmarks.
    - **C5.0**:
      - Commercial successor to C4.5, licensed by RuleQuest Research.
      - Improved speed, reduced memory footprint, boosting support, and advanced pruning techniques.
      - Produces smaller, more accurate trees in most benchmarks; handles very large datasets efficiently.
    - **CART (Classification and Regression Trees)**:
      - Breiman, Friedman, Olshen, and Stone (1984). The dominant algorithm in modern ML practice.
      - Uses [[Gini Coefficient]] (Gini impurity) for [[Classification]], variance reduction for [[Regression]].
      - Produces strictly binary trees (all splits are binary, even for multi-class categorical features).
      - Supports pre-pruning (depth limits, sample minimums) and cost-complexity post-pruning (ccp_alpha parameter).
      - The structural basis for [[Random Forest]], XGBoost, LightGBM, CatBoost, and scikit-learn's tree implementations.
    - **Oblique Decision Trees**:
      - Test linear combinations of features at each node (w^T x ≤ θ), producing diagonal decision boundaries.
      - More expressive than axis-aligned trees for linearly-separable problems with rotated boundaries.
      - Computationally more expensive (requires optimising over weight vectors at each node) and less interpretable (conditions are linear combinations rather than single-feature tests).
    - **Fuzzy Decision Trees**:
      - Extend crisp threshold tests with fuzzy membership functions (e.g., Gaussian, trapezoidal), providing smooth transitions between branches.
      - More robust to noise and measurement uncertainty; output fuzzy confidence values.
      - Reduced interpretability compared to crisp trees; used in industrial control and sensor-based systems.
    - **Probabilistic Decision Trees (Bayesian Trees)**:
      - Assign soft probability distributions at leaves rather than hard class labels.
      - BART (Bayesian Additive Regression Trees, Chipman et al. 2010) treats the sum of many shallow trees as a prior, inferring the posterior via MCMC. Provides full uncertainty quantification.
      - Used in biostatistics, epidemiology, and causal inference where uncertainty characterisation is as important as point prediction accuracy.
    - **Hierarchical Density Trees (Isolation Trees)**:
      - Isolation Forest (Liu et al. 2008) constructs random trees that isolate anomalies by recursively partitioning on randomly selected features and thresholds. Anomalies require fewer splits to isolate.
      - Used for [[Anomaly Detection]] in fraud, cybersecurity, and quality control without requiring labelled anomaly examples.
    - **Model Trees**:
      - Internal nodes perform standard feature splits, but leaves contain multivariate regression models (linear regression, logistic regression) rather than constant predictions.
      - M5 algorithm (Quinlan 1992) is the canonical implementation. Combines the piecewise structure of trees with the smooth prediction surfaces of linear models.
      - Used in regression tasks where the relationship between features and outcome is locally linear but globally non-linear.
  - ## Splitting Criteria — Formal Definitions
    - The splitting criterion determines which feature and threshold are chosen at each decision node. The choice has theoretical implications (what property of the distribution the criterion targets) and practical implications (computational cost, tree shape, sensitivity to class imbalance).
    - **Gini Impurity**:
      - For node t with class proportions p_1, ..., p_k: Gini(t) = 1 - sum_{i=1}^{k} p_i^2
      - Measures the probability of incorrectly classifying a randomly selected instance if it were labelled according to the class distribution at node t.
      - A pure node (all instances of one class) has Gini = 0; maximum impurity for k=2 classes is Gini = 0.5 when p_1 = p_2 = 0.5.
      - CART selects the split that minimises the weighted sum: Gini_split = (n_left / n) * Gini(t_left) + (n_right / n) * Gini(t_right).
      - Computationally slightly faster than entropy (no logarithm computation); tends to produce slightly larger trees.
    - **Information Gain (Entropy)**:
      - Entropy of node t: H(t) = -sum_{i=1}^{k} p_i * log2(p_i) (with 0 * log2(0) := 0 by convention).
      - Information gain of a split: IG(t, s) = H(t) - (n_left/n) * H(t_left) - (n_right/n) * H(t_right).
      - Maximised by ID3. Biased towards features with many distinct values (e.g., a unique ID column achieves maximum IG by splitting each instance into its own child).
      - Gain Ratio (C4.5): GR = IG / SplitInfo, where SplitInfo = -sum_j (n_j/n) * log2(n_j/n) is the entropy of the split itself. Normalises IG to penalise high-cardinality splits.
    - **Variance Reduction (for regression)**:
      - For regression nodes with target values y_1, ..., y_n: Var(t) = (1/n) * sum_{i=1}^{n} (y_i - y_bar)^2.
      - CART regression trees select the split minimising: n_left * Var(t_left) + n_right * Var(t_right).
      - Equivalent to minimising the mean squared error (MSE) of the constant leaf predictions.
    - **Class Imbalance and Splitting Criteria**:
      - When class frequencies are highly unequal (e.g., 95% negative in fraud detection), pure Gini and entropy both tend to produce biased trees that classify everything as the majority class. Mitigation approaches include: class weighting (upweighting minority class in impurity computation), oversampling (SMOTE), undersampling, and using a balanced Gini criterion.
    - **Empirical comparison**:
      - Benchmarks consistently show Gini impurity and information gain produce similar tree structures and predictive performance on balanced datasets; the choice matters more for computational efficiency than classification accuracy.
      - Gain Ratio (C4.5) typically produces trees with fewer nodes and better generalisation than pure information gain on datasets with high-cardinality categorical features.
  - ## Overfitting, Pruning, and Regularisation
    - Unconstrained decision tree growth produces trees that memorise the training set, exhibiting near-zero training error but poor generalisation — the canonical [[Overfitting]] failure mode amplified by the [[Bias-Variance Tradeoff]].
    - The root cause is the greedy nature of tree construction: at each step, the locally best split is selected, which may capture noise in the training data rather than true signal. A sufficiently deep tree can achieve zero training error on any finite dataset by partitioning each training instance into its own leaf.
    - The standard mitigations span three categories: pre-pruning (restricting growth during training), post-pruning (reducing a full tree after training), and regularisation (penalising complexity in the objective function).
    - **Pre-pruning (early stopping)**:
      - Constrain maximum depth (`max_depth`): the most commonly tuned hyperparameter. Trees with depth 3–5 are interpretable; depths beyond 10–15 are typically used only as base learners in ensembles.
      - Minimum samples per split (`min_samples_split`): refuse to split a node unless it contains at least k training instances, preventing splits on tiny subsets that are likely noise artefacts.
      - Minimum samples per leaf (`min_samples_leaf`): ensure every leaf contains at least k instances, preventing single-instance leaves that overfit perfectly.
      - Minimum impurity decrease (`min_impurity_decrease`): only split if the impurity reduction exceeds a threshold, preventing splits that provide negligible signal.
      - Maximum number of leaf nodes (`max_leaf_nodes`): directly cap the total number of leaves, providing a coarse complexity bound.
      - Requires careful [[Hyperparameter Tuning]] via [[Cross Validation]]; typically implemented as a grid or random search over (max_depth, min_samples_leaf) combinations.
    - **Post-pruning (cost-complexity pruning, also called weakest link pruning)**:
      - Grow the full unconstrained tree, producing a large, overfit tree T_max.
      - Generate a sequence of nested subtrees T_max ⊃ T_1 ⊃ ... ⊃ T_root by iteratively removing the branch with the smallest ratio of impurity reduction to number of leaves removed (the effective alpha, α_eff).
      - Select the optimal subtree from this sequence by evaluating on a held-out validation set or by k-fold [[Cross Validation]].
      - scikit-learn implements this via the `ccp_alpha` parameter: higher values produce smaller trees.
      - More principled than pre-pruning because it searches the space of all subtrees, not just those reachable by stopping early. Computationally equivalent to training once then searching the subtree sequence.
    - **Reduced Error Pruning**:
      - Quinlan (1987). Iteratively test each internal node: replace it with a leaf if this does not increase error on a separate validation set. Repeat until no further reduction is possible.
      - Simple and fast; used in C4.5. Does not require computing the full subtree sequence.
    - **Minimal Description Length (MDL) Pruning**:
      - Frames the tree-data pair as a coding problem: the total description length is the length of the encoded tree structure plus the length of the data given the tree. Prunes to minimise total description length, implementing Occam's razor directly.
      - Theoretically motivated by MDL principle (Rissanen 1978); less commonly implemented in standard libraries but used in domain-specific systems.
    - **Regularisation in gradient-boosted trees**:
      - XGBoost adds L1 (alpha) and L2 (lambda) regularisation terms on leaf weights to the gradient boosting objective, penalising extreme leaf values.
      - Subsample and colsample_bytree introduce stochasticity during tree construction, analogous to dropout in neural networks — further reducing [[Overfitting]] in the ensemble.
      - Learning rate (eta) controls the contribution of each tree: smaller eta requires more trees but reduces overfitting.
  - ## Interpretability and Decision Transparency
    - The decision tree's claim to intrinsic [[Interpretability]] rests on the direct correspondence between a prediction and a human-readable decision path.
    - For a tree of depth d, any prediction results from at most d binary tests, expressible as a conjunction of conditions: "if age > 35 AND income < £30,000 AND credit history = poor, then: credit risk = HIGH."
    - This if-then representation is directly interpretable by domain experts without specialised ML knowledge, satisfying the simulatability and decomposability criteria of Lipton (2016).
    - This makes the [[Decision Tree]] the canonical model for [[Decision Transparency]]: it provides not just an explanation but the explanation, derived directly from the model itself rather than from a post-hoc approximation of a black-box model.
    - **Simulatability**: A human can mentally simulate the entire decision process for a given instance by following the path from root to leaf. Shallow trees (depth ≤ 5) satisfy this criterion; deeper trees do not.
    - **Decomposability**: Each node's decision is fully specified by a single feature and threshold, with no hidden interactions or entangled representations. A domain expert can assess whether each split condition is sensible and flag problematic ones.
    - **Algorithmic transparency**: The CART algorithm itself is deterministic and fully specified, enabling anyone to reproduce the training process. This satisfies the algorithmic transparency property of Lipton (2016).
    - **Feature Importance from impurity reduction**:
      - The total impurity decrease attributable to feature j across all nodes where it is used provides a built-in global [[Feature Importance]] ranking.
      - Computed as: FI(j) = sum over all nodes t where feature j is used: (n_t / N) * (impurity(t) - n_left/n_t * impurity(t_left) - n_right/n_t * impurity(t_right)).
      - Known biases: impurity-based importance is biased towards high-cardinality features (Strobl et al. 2007), and towards features correlated with other features (one is selected, the other appears unimportant). Permutation importance and [[SHAP]] values are preferred for unbiased attribution.
    - **[[SHAP]] TreeExplainer**:
      - Lundberg et al. (2018) provides exact, consistent [[Feature Importance]] attribution for tree ensembles in polynomial time O(TLD^2), where T is the number of trees, L is the number of leaves, and D is the maximum depth.
      - SHAP values are the unique allocation satisfying efficiency, dummy, symmetry, and linearity axioms from cooperative game theory, providing theoretically grounded per-feature-per-prediction attributions.
      - Applicable to [[Random Forest]], XGBoost, LightGBM, and CatBoost models. Supported by the `shap` Python library.
    - **Depth and accuracy tradeoff**:
      - Trees of depth 3–5 are interpretable to a domain expert; depths beyond 10–15 are used only as base learners in ensembles where interpretability of individual trees is not required.
      - In regulated settings (credit scoring under FCA and GDPR, clinical decision support), depth-constrained shallow trees are sometimes mandatory because they produce auditable decision paths that satisfy [[Regulatory Compliance]] requirements without recourse to post-hoc approximation.
      - Rudin (2019) argues that for high-stakes decisions, the post-hoc explanation of a black-box model should never substitute for using an inherently interpretable model when accuracy requirements permit. For many structured tabular prediction tasks, a properly tuned shallow tree achieves adequate accuracy while providing full interpretability.
    - **Surrogate models and tree extraction**:
      - A shallow [[Decision Tree]] can be fitted as a surrogate to approximate the predictions of a complex black-box model (neural network, deep XGBoost) on the training or test set. The surrogate tree's structure then provides a global post-hoc explanation of the black-box model's behaviour, at the cost of fidelity (the surrogate may not perfectly replicate the black-box's predictions).
      - Viper (Bastani et al. 2018) uses policy distillation to train a shallow decision tree to mimic a deep reinforcement learning policy, achieving near-equivalent performance in many control tasks with full interpretability.
      - The global surrogate approach is used in regulatory auditing when the deployed model cannot be changed but an interpretable description must be provided to regulators or auditors.
  - ## Ensemble Foundations
    - The [[Decision Tree]] is the canonical base learner for two dominant ensemble paradigms. Both preserve the tree as the fundamental computational unit while substantially improving predictive accuracy through aggregation or sequential correction.
    - **Bagging ([[Random Forest]])**:
      - Breiman (2001). Short for Bootstrap Aggregating applied to decision trees with random feature subsampling.
      - Construction: train N trees, each on an independently drawn bootstrap sample (sampling with replacement) of the training data. At each internal node of each tree, consider only a random subset of features (typically sqrt(p) for classification, p/3 for regression) to select the best split — this decorrelates the trees.
      - Aggregation: majority vote for [[Classification]]; averaging for [[Regression]].
      - Variance reduction mechanism: the ensemble average of N uncorrelated estimators has variance sigma^2/N; the random feature subsetting ensures low correlation between trees, bringing the ensemble closer to this ideal.
      - Parallelisable: all N trees can be trained simultaneously.
      - Out-of-bag (OOB) estimation: each tree's training excludes ~37% of the data (the OOB sample), providing a free validation estimate without a separate validation set.
      - As of 2026, [[Random Forest]] remains the most widely deployed ensemble model in clinical, environmental, and genomics settings due to its robustness, resistance to overfitting, and low hyperparameter sensitivity.
    - **Boosting ([[Gradient Boosted Trees]])**:
      - Friedman (2001). Sequential ensemble where each tree corrects the errors of the prior ensemble.
      - The gradient boosting framework: fit the first tree to the data; compute the pseudo-residuals (negative gradients of the loss function with respect to the current prediction); fit the next tree to the pseudo-residuals; add to the ensemble with a learning rate (eta); repeat N times.
      - Reduces both bias (by correcting systematic errors) and variance (through regularisation and stochastic subsampling).
      - More sensitive to hyperparameter choice (n_estimators, max_depth, learning_rate, subsample) and outliers than random forest; requires more careful tuning.
      - XGBoost (Chen and Guestrin 2016): adds L1/L2 regularisation to the objective, uses second-order Taylor expansion of the loss for more accurate tree selection, implements approximate split finding via histograms, supports distributed training and GPU acceleration.
      - LightGBM (Ke et al. 2017): leaf-wise (best-first) rather than level-wise tree growth, histogram-based splitting with gradient-based one-side sampling (GOSS) and exclusive feature bundling (EFB). 20x faster than XGBoost on large datasets; comparable accuracy.
      - CatBoost (Prokhorenkova et al. 2018): ordered boosting to prevent target leakage; native categorical feature handling via ordered target statistics. Best default hyperparameters; reduced need for manual tuning.
    - **Stacking**:
      - A [[Decision Tree]] (typically shallow) is sometimes used as the meta-learner in a stacking ensemble, taking as input the out-of-fold predictions of base models. The tree as meta-learner naturally handles non-linear interactions between base models and provides interpretable combination rules.
    - Both bagging and boosting paradigms inherit the interpretability infrastructure of the individual tree — [[Feature Importance]] from Gini reduction, and exact [[SHAP]] TreeExplainer attributions — while substantially outperforming single trees on all standard benchmarks.
  - ## Use Cases and Applications
    - Decision trees and their ensemble variants are deployed across an exceptionally broad range of domains, unified by their combination of strong empirical accuracy and interpretability infrastructure.
    - **Credit scoring and lending**:
      - XGBoost with SHAP explanations is the dominant credit risk model architecture in UK retail banking (Lloyds, Barclays, HSBC, NatWest) and fintech (Monzo, Starling).
      - Provides compliance with GDPR Article 22 and FCA Consumer Duty requirements through SHAP-derived feature attribution explanations for adverse credit decisions.
      - Recent work (Abdelsalam et al. 2026) demonstrates gradient-boosted trees with feature selection achieving 86.87% accuracy on credit classification with full SHAP explainability.
      - Tree-enhanced gradient boosting algorithms (AugBoost-RFS and AugBoost-RFU) outperform conventional GBDTs and neural network augmentation by offering superior accuracy-interpretability balance.
    - **Medical diagnosis and clinical decision support**:
      - NHS AI deployments including sepsis detection, surgical risk stratification, and radiology triage use gradient-boosted trees on electronic health record (EHR) tabular data.
      - Shallow trees (depth 3–6) provide directly interpretable clinical decision rules that can be reviewed, overridden, and explained by clinicians at the point of care.
      - Random forests applied to genomic and proteomic data provide [[Feature Importance]] rankings identifying biomarkers of clinical relevance.
      - NICE AI evidence standards require that clinical AI systems provide interpretable outputs; tree-based models satisfy this without recourse to post-hoc approximation for shallow configurations.
    - **Fraud detection**:
      - Transaction-level fraud detection at payment networks (Mastercard, Visa) and banks uses gradient-boosted trees to score anomaly probability in real time, processing millions of transactions per day.
      - [[Feature Importance]] outputs guide fraud analyst investigations by identifying which transaction attributes contributed most to a suspicious score.
      - Streaming tree models are deployed in low-latency inference pipelines requiring sub-millisecond decision time; the depth-bounded tree traversal is O(depth) in inference cost.
    - **Insurance underwriting**:
      - Motor and home insurance pricing models in Lloyd's of London and UK direct insurers (Aviva, AXA UK, Direct Line) combine actuarial features with gradient-boosted trees to produce premium predictions.
      - FCA's pricing practices review and general insurance pricing rules require that algorithmic pricing models be explainable and non-discriminatory, motivating tree-based architectures.
    - **Scientific computing and physics**:
      - Boosted Decision Trees (BDTs) implemented in TMVA and StatPatternRecognition have been a primary signal/background classification technique at CERN's LHC for two decades, used by ATLAS and CMS collaborations for Higgs boson discovery and new physics searches.
      - In genomics and bioinformatics, random forests are the standard tool for phenotype prediction, gene selection (variable importance for genome-wide association studies), and single-cell RNA sequencing cluster identification.
      - Environmental science: random forests are widely used for climate variable prediction, biodiversity modelling, and remote sensing land cover classification.
    - **Rule extraction and knowledge discovery**:
      - Post-training rule extraction from decision trees or tree ensembles produces interpretable if-then rule sets for decision support system integration and regulatory reporting.
      - RIPPER (Cohen 1995) and Apriori-based rule extraction from trees produce compact rule sets that can be audited, modified, and deployed independently of the original tree.
      - Rule extraction is used in expert system construction: domain experts validate and optionally override automatically extracted rules.
    - **Natural language processing and text classification**:
      - Gradient-boosted trees over TF-IDF, BM25, and hand-crafted text features remain competitive for text [[Classification]] tasks where interpretability of the text signal is required (spam filtering, regulatory document classification, [[Sentiment Analysis]], and [[Text Classification]]).
      - Tree-based models provide interpretable [[Feature Importance]] over n-grams and linguistic features, supporting debugging and [[Algorithmic Bias]] analysis of text classifiers.
    - **Climate and environmental science**:
      - [[Random Forest]] models are among the most widely used algorithms in climate science for precipitation nowcasting, land cover classification from satellite imagery, and ecological species distribution modelling.
      - Decision tree explainability provides domain scientists with physically interpretable models: when a tree learns that "if temperature > 28°C AND humidity > 85% AND ocean surface temperature anomaly > 1.5°C, then tropical cyclone formation probability = HIGH," this constitutes a verifiable physical hypothesis that domain experts can evaluate.
    - **Manufacturing and operations**:
      - Decision trees are used in predictive maintenance (predict equipment failure from sensor data), quality control (classify defects from production line sensor readings), and supply chain optimisation (route orders through logistics networks based on feature conditions).
      - Sheffield and Manchester manufacturing clusters use decision tree models for defect prediction in steel rolling, chemical process optimisation, and automotive component quality control.
    - **Reinforcement learning and planning**:
      - Decision trees are used as policy representations in model-based [[Supervised Learning]] from demonstrations (imitation learning), producing interpretable policies that can be verified against safety specifications.
      - Viper (Bastani et al. 2018) trains a shallow decision tree to mimic a deep RL policy with near-equivalent performance but full interpretability — directly applicable to safety-critical control systems where the EU AI Act requires explainable autonomous decisions.
  - ## Formal Learning Theory
    - Decision tree learning sits within the [[Supervised Learning]] paradigm and its theoretical properties are well-studied under PAC (Probably Approximately Correct) learning theory and the VC-dimension framework.
    - **VC-Dimension**: The VC-dimension of the class of all decision trees on n binary features is 2^n (exponential in feature count), meaning that a decision tree can shatter any set of 2^n points in the worst case, confirming its expressive power — and explaining why unconstrained trees overfit. Depth-limited trees with depth d have VC-dimension O(d * log(n)), giving polynomial sample complexity bounds.
    - **PAC-Learning Analysis**: Kearns and Mansour (1996) established that decision stumps (depth-1 trees) are PAC-learnable with polynomial sample and time complexity. Full trees are PAC-learnable under distributional assumptions, but NP-hardness results (Hyafil and Rivest 1976) mean that no polynomial-time algorithm can guarantee finding the smallest consistent tree in the worst case. This is why all practical algorithms are greedy.
    - **Generalisation Bounds**: Classical Vapnik-Chervonenkis theory gives |E[L(h)] - E_S[L(h)]| ≤ O(sqrt(VCdim(H) * log(m) / m)) for hypothesis class H and sample size m. Uniform convergence bounds justify using held-out validation and cross-validation for tree selection. More modern Rademacher complexity bounds provide tighter distributional-dependent guarantees.
    - **Noise Tolerance**: Blum and Rivest (1992) showed that learning decision trees is hard in the presence of adversarial noise. However, natural noise models (random classification noise, attribute noise) are more tractable. Recent work by Blanc et al. (2022) established that popular decision tree algorithms are provably noise-tolerant under natural conditions, providing theoretical grounding for their empirical robustness.
    - **Consistency**: A learning algorithm is consistent if, given infinite training data, it recovers the Bayes-optimal classifier. Unrestricted decision trees grown to full depth are not consistent in general because they fit noise; depth-limited trees are consistent under mild conditions. Random forests are consistent under conditions studied by Biau (2012) and Denil et al. (2014).
  - ## Fairness and Ethical Considerations
    - Decision trees have specific fairness properties that distinguish them from other classifiers and make them particularly relevant to the [[AI Fairness]] and [[Regulatory Compliance]] agenda.
    - **Disparate Impact in Tree Splits**: A decision tree may select a proxy feature that correlates with a protected attribute (race, gender, age) even when the protected attribute is excluded from the feature set. If income correlates strongly with postcode, and postcode correlates with ethnicity, a tree that splits on income is engaging in indirect discrimination. Detecting and mitigating this requires fairness-aware feature selection and split constraint methods.
    - **Fairness-Constrained Tree Learning**: Active research area since 2018, with algorithms that incorporate demographic parity, equalised odds, or individual fairness constraints directly into the tree-building objective. Kamiran and Calders (2010) introduced the first fairness-aware decision tree; subsequent work has addressed the tension between fairness constraints and predictive accuracy (often termed the fairness-accuracy tradeoff).
    - **Counterfactual Fairness in Trees**: A [[Counterfactual Explanation]] from a decision tree specifies the minimum change to a rejected individual's features required to receive a positive decision. Under the EU AI Act and GDPR [[Contestability]] requirements, lenders must provide applicants with actionable recourse information. Shallow trees naturally satisfy this: their decision paths directly generate counterfactual recourse statements.
    - **Audit and Explainability for Protected Groups**: [[Feature Importance]] from random forests and XGBoost can be stratified by demographic group to identify differential feature reliance — a form of algorithmic auditing. [[SHAP]] interaction values further decompose predictions into main effects and interaction effects, revealing where group-differential treatment arises in the model.
    - **Historical Bias**: If training data reflects historical discrimination — e.g., past credit denial rates correlated with gender — a decision tree trained on those labels will replicate that discrimination. Data-level interventions (reweighting, resampling) and algorithmic fairness constraints are required alongside [[Decision Transparency]] disclosures.
  - ## Comparison with Competing Algorithms
    - Decision trees exist within a competitive landscape of [[Classification]] and [[Regression]] algorithms, each with different bias-variance profiles, computational demands, and interpretability properties:
    - **vs. [[Logistic Regression]]**: Logistic regression produces a linear decision boundary, is parametric, requires feature scaling, and provides calibrated probability estimates. More interpretable at the model level (coefficient = log-odds contribution per unit feature). Less flexible than trees for non-linear problems; trees automatically capture feature interactions and non-linearities without feature engineering. Logistic regression is preferred when the decision boundary is genuinely approximately linear and coefficient interpretability is required.
    - **vs. [[Support Vector Machine]]**: SVMs produce maximum-margin decision boundaries, are robust in high-dimensional spaces, but produce no probability outputs by default (Platt calibration required), are computationally expensive to train on large datasets (O(n^3) for kernel SVM), and are essentially uninterpretable. Decision trees are vastly more interpretable and scale to large datasets; SVMs are preferred when margin maximisation is theoretically motivated and dataset size is moderate.
    - **vs. [[Neural Network]]**: Neural networks learn hierarchical feature representations and excel in image, text, and audio modalities, but are computationally expensive, require large data volumes, and are intrinsically uninterpretable (black box). Single decision trees are far more interpretable; ensemble trees (XGBoost, Random Forest) match or exceed neural network performance on tabular data. Neural networks are preferred for unstructured data; trees are preferred for structured tabular data and regulatory settings.
    - **vs. [[K-Nearest Neighbours]]**: KNN is non-parametric, stores the entire training set, and makes predictions by voting among the k nearest training instances. No explicit model is learned; no feature importance is computed; inference scales poorly with n. Decision trees are more efficient at inference (O(log n) depth traversal vs. O(n) distance computation), more interpretable, and provide explicit feature rankings.
    - **vs. [[Naive Bayes]]**: Naive Bayes assumes conditional independence of features given the class label, which is often violated but leads to fast, probabilistic classifiers. Decision trees make no distributional assumptions, naturally capture feature interactions, and tend to outperform Naive Bayes when interactions are important. Naive Bayes is preferred for text classification and spam filtering where its assumptions approximately hold.
  - ## Implementation and Software Ecosystem
    - The decision tree algorithm is implemented in every major machine learning library, with consistent interfaces enabling rapid experimentation and production deployment:
    - **scikit-learn** (Python): `DecisionTreeClassifier` and `DecisionTreeRegressor` implement CART with configurable criterion (gini, entropy, log_loss), max_depth, min_samples_split, min_samples_leaf, max_features, and cost-complexity pruning via `ccp_alpha`. `RandomForestClassifier/Regressor` and `GradientBoostingClassifier/Regressor` build on the CART implementation. Industry standard for research and prototyping; not optimised for production-scale training.
    - **XGBoost**: Chen and Guestrin (2016). C++ core with Python/R/JVM bindings. Gradient-boosted CART trees with L1/L2 regularisation, approximate split finding via histogram algorithm, out-of-core computation for datasets exceeding memory, and GPU acceleration. The most widely used gradient boosting library for tabular data competitions and production deployments 2016–present.
    - **LightGBM**: Ke et al. (2017). Microsoft Research. Leaf-wise (best-first) rather than level-wise tree growth, histogram-based split finding with gradient-based one-side sampling (GOSS) and exclusive feature bundling (EFB). 20x faster than XGBoost on large datasets, comparable accuracy. Preferred for very large datasets (>10M rows).
    - **CatBoost**: Prokhorenkova et al. (2018). Yandex. Specialised handling of categorical features without target leakage via ordered target statistics. Comparable accuracy to XGBoost/LightGBM with better out-of-box default hyperparameters.
    - **R packages**: `rpart` (CART), `randomForest` (Breiman's original implementation), `gbm` (Gradient Boosting Machine), `xgboost`, `ranger` (fast parallelised random forest). R remains dominant in clinical biostatistics and environmental modelling.
    - **GOSDT (Optimal Sparse Decision Trees)**: Hu et al. (2019). Python implementation of integer programming-based optimal sparse decision tree construction. Tractable for datasets with up to ~10K instances and ~50 binary features after binarisation. Available at github.com/ubc-systopia/gosdt-guesses.
    - **interpretml** (Microsoft): Implements Explainable Boosting Machine (EBM), a regularised generalised additive model using CART trees as shape functions. Provides near-[[Random Forest]] accuracy with full additive interpretability — each feature's contribution is a learnable function displayed as an interactive chart. Directly supports [[Decision Transparency]] and [[Regulatory Compliance]] in high-risk [[AI Governance]] contexts.
    - **Weka** (University of Waikato): Java-based ML workbench with comprehensive decision tree implementations (J48 for C4.5, REPTree, RandomForest, SimpleCart). Widely used in academic teaching and [[Data Science]] research. Open-source with extensive documentation.
    - **H2O.ai**: Distributed, in-memory ML platform with optimised gradient-boosted tree and [[Random Forest]] implementations. Supports Python, R, Java, and REST APIs. Widely used in enterprise [[Data Science]] and financial services for large-scale credit risk and fraud models.
  - ## Academic Context
    - The theoretical foundations of decision trees span statistical learning theory, information theory, and combinatorial optimisation.
    - The computational intractability of optimal decision trees (NP-hard in general; Hyafil and Rivest 1976) motivates all greedy construction algorithms.
    - PAC-learning analysis (Kearns and Mansour 1996) established sample complexity bounds for decision tree learning.
    - The bias-variance decomposition (Geman et al. 1992) provides the theoretical explanation for single-tree instability and the variance reduction mechanism of [[Bagging]].
    - Freund and Schapire's AdaBoost (1997) and Friedman's Gradient Boosting (2001) formalised [[Boosting]] as gradient descent in function space, placing tree-based boosting within a rigorous statistical framework.
    - Breiman's Random Forests (2001) paper provided theoretical analysis of the generalisation error in terms of individual tree accuracy and correlation between trees.
    - Chen and Guestrin's XGBoost (2016, KDD) formalised the gradient-boosted tree objective with regularisation terms, second-order Taylor expansion of the loss, and distributed computing implementation, producing an algorithm that dominated competitive machine learning for five years.
    - The recent revival of interest in optimal (non-greedy) decision trees — GOSDT (Hu et al. 2019), Interpretable AI's algorithms — reflects renewed regulatory demand for provably optimal interpretable models.
    - Rudin's 2019 Nature Machine Intelligence paper "Stop explaining black box machine learning models for high stakes decisions" made the provocative and influential argument that inherently interpretable models — including shallow decision trees — should be mandatory in high-stakes settings, and that post-hoc explanations of black-box models are inherently unreliable approximations.
    - The Hastie, Tibshirani, and Friedman textbook "The Elements of Statistical Learning" (2001, 2009) remains the canonical mathematical treatment of decision trees, random forests, and boosting within a unified statistical framework.
    - Strobl et al. (2007) demonstrated that standard Gini-based feature importance in random forests is biased towards high-cardinality features and towards features with many missing values, motivating conditional permutation importance and SHAP-based attribution as more reliable alternatives.
    - Key research groups: Carnegie Mellon University (Rudin, Ustun on [[Responsible AI]] and interpretable ML), MIT (Madry group on adversarial robustness of trees), Stanford (Hastie, Tibshirani on statistical learning and [[Regression]]), UC Berkeley (Breiman legacy group), University of Edinburgh (interpretable ML and [[AI Fairness]]), Alan Turing Institute (algorithmic accountability with trees as case studies in [[Algorithmic Accountability]]).
    - The connection between decision trees and [[Causal Inference]] has emerged as a significant research direction: trees trained on observational data learn correlations rather than causal relationships, but causal trees (Wager and Athey 2018) explicitly estimate heterogeneous treatment effects, extending the decision tree framework into causal policy evaluation. This is directly applicable to [[Medical Diagnosis AI]], [[AI Governance]] policy analysis, and personalised intervention design.
    - Decision trees have also gained traction in [[Natural Language Processing]] as classification components within hybrid pipelines: syntax-based feature trees for parse tree classification, [[Text Classification]] with n-gram features via gradient boosting, and [[Sentiment Analysis]] with handcrafted linguistic features. The combination of rule-based linguistic feature engineering and tree-based classification remains competitive for low-resource NLP settings where [[Deep Learning]] requires prohibitive amounts of training data.
  - ## Current Landscape (2026)
    - In 2026, tree-based ensemble methods remain the leading algorithms for structured tabular data, a position they have held since XGBoost's emergence circa 2014–2016.
    - Kaggle competition analyses and industry benchmarks consistently confirm that gradient-boosted tree implementations (XGBoost, LightGBM, CatBoost) outperform deep learning approaches on tabular data of moderate size, while also outperforming on computational efficiency and interpretability.
    - The tabular deep learning research wave of 2021–2024 (TabNet, SAINT, FT-Transformer) has not displaced boosted trees as the production default.
    - The 2026 regulatory environment under the EU AI Act and UK Data (Use and Access) Act creates specific demand for either inherently interpretable single-tree models or post-hoc tree-based explanation pipelines (XGBoost + SHAP) for high-risk AI applications.
    - Fahey (2026) notes that decision trees are not fashionable but remain foundational — every XGBoost and LightGBM model is, at its core, an ensemble of decision trees. Credit scoring on tabular data using tree-enhanced gradient boosting (augmented with SHAP explanations) achieves state-of-the-art accuracy while satisfying explainability obligations.
    - Privacy-preserving decision tree inference using fully homomorphic encryption (TFHE) is an active research area addressing the tension between model deployment confidentiality and auditability requirements.
    - Key industry adoption metrics in 2026:
      - XGBoost and LightGBM dominate Kaggle structured data competitions; their usage rate in winning solutions has remained above 80% since 2016.
      - In UK financial services, XGBoost with SHAP has been adopted as a quasi-standard by major retail banks for credit risk and fraud models.
      - NHS AI Lab procurement assessments recommend gradient-boosted trees as a baseline model for structured EHR prediction tasks.
      - AutoML platforms (H2O.ai, DataRobot, Google AutoML Tables) consistently select gradient-boosted trees as the best-performing model type on tabular classification benchmarks.
      - Research on optimal decision trees (GOSDT, EBM) is gaining traction in regulated domains where the auditable nature of every split in the model is a compliance requirement, not just a nice-to-have.
    - The challenge for single trees in 2026 is that shallowness for interpretability constrains accuracy, while depth sufficient for competitive accuracy destroys interpretability. The Explainable Boosting Machine (EBM) from Microsoft's interpretml library partially resolves this by training an additive model composed of CART shape functions, achieving near-random-forest accuracy while maintaining full additive interpretability — a significant development for regulatory compliance in high-risk AI settings.
  - ## UK Context
    - Decision trees and their ensemble derivatives are deeply embedded in UK financial services, public health, and scientific computing infrastructure.
    - **Financial services**: UK retail banks applying FCA Consumer Duty and GDPR-derived explanation obligations to credit decisions have adopted XGBoost with SHAP as a quasi-standard architecture. Leeds-based Asda Money, Sheffield-based Provident Financial (now Vanquis Banking Group), and Newcastle-based Virgin Money all operate credit risk models subject to FCA model risk management oversight. The FCA's 2026 model risk management guidance explicitly names explainable tree-based models as a recommended architecture for high-risk credit decisions.
    - **Healthcare**: NHS England's AI deployment pathway, developed under the NHS England Transformation Directorate, recommends gradient-boosted tree models for clinical decision support in resource-constrained settings where both accuracy and interpretability are required. Manchester University NHS Foundation Trust has deployed sepsis early warning systems and surgical risk stratification tools using XGBoost on EHR tabular data. Leeds Teaching Hospitals NHS Trust uses random forest models for post-operative complication prediction. These deployments are subject to NICE's AI evidence standards, which require interpretable outputs.
    - **Scientific computing**: CERN's ATLAS and CMS experiments at the Large Hadron Collider use Boosted Decision Tree (BDT) ensembles implemented in TMVA (Toolkit for Multivariate Analysis) and scikit-learn for particle physics event classification (signal vs. background discrimination). UK groups at Manchester, Imperial, Cambridge, and Edinburgh contribute to these analyses. In genomics, UK Biobank-linked research uses random forests for polygenic risk score construction and gene-phenotype association mapping.
    - **Academic research**:
      - University of Edinburgh AIAI (Artificial Intelligence and its Applications Institute): interpretable ML, optimal decision trees, fairness-constrained learning.
      - Imperial College London (Statistics and Data Science): ensemble calibration, uncertainty quantification in tree models, Bayesian tree methods.
      - University College London (Computer Science): trustworthy ML, decision support systems, human-AI interaction with tree-based models.
      - King's College London: Explainable Machine Learning module directly covers decision tree-based interpretation.
      - University of Manchester (Department of Computer Science): tabular ML benchmarks, clinical decision support with trees.
      - Alan Turing Institute (London, cross-institutional): fairness, transparency, and explainability programme explicitly features tree-based models as case studies for algorithmic auditing in UK public sector AI applications.
    - **Northern English industrial context**: The concentration of financial services in Leeds (HSBC UK headquarters, Yorkshire Bank, Leeds Building Society) and Sheffield (Lloyds regional operations, Barclays digital operations) means that FCA-driven adoption of explainable tree models is operationally relevant across the Northern Powerhouse financial corridor. Manufacturing and logistics optimisation using decision tree-based scheduling and demand forecasting is active in the Sheffield and Leeds industrial base.
  - ## Future Directions (2026–2030)
    - Several research and engineering frontiers will shape the evolution of decision trees through 2030:
    - **Optimal and certifiable interpretable trees**: Provably optimal interpretable trees — GOSDT and related integer programming approaches — are becoming computationally tractable on larger datasets through advances in branch-and-bound algorithms and co-design with modern hardware. They will likely displace heuristic shallow trees in highest-stakes regulated applications where optimality guarantees are legally significant. As EU AI Act enforcement creates demand for defensible, certifiable model choices, the ability to prove that a given tree is the best possible interpretable model for a dataset becomes commercially valuable.
    - **Privacy-preserving tree inference**: The tension between tree-based interpretability and privacy is motivating research into privacy-preserving inference: TFHE-based homomorphic encryption of decision tree inference (Boura et al. 2023) enables model evaluation on encrypted data, addressing deployment scenarios where the deployer cannot access individuals' plaintext features. This is particularly relevant for UK healthcare data held under NHS strict governance frameworks.
    - **Amortised tree structure inference**: Mukherjee et al. (2025) apply meta-learning to generalise tree construction across problem distributions, training a neural network to predict good tree structures directly without exhaustive search. This potentially breaks the computational barrier to optimal tree search and enables rapid tree construction on new datasets with theoretical guarantees.
    - **Fairness-constrained tree learning**: Training trees subject to demographic parity, equalised odds, or counterfactual fairness constraints will become a regulatory necessity in high-risk EU AI Act Annex III domains, driving algorithmic development beyond the current ad-hoc post-hoc bias mitigation workflow. The complexity of fairness-constrained tree construction is an open research problem.
    - **Hybrid neuro-symbolic architectures**: Differentiable tree structures (soft trees, neural oblivious decision trees, Tabular Transformers with tree inductive biases) seek to capture the accuracy of deep learning with the interpretability of trees. As of 2026, none has definitively displaced plain gradient-boosted trees on tabular data benchmarks, but the theoretical appeal ensures continued investment.
    - **Uncertainty quantification**: Conformal prediction applied to decision tree outputs (Shafer and Vovk 2008 framework) provides distribution-free coverage guarantees on prediction sets, enabling deployment in safety-critical settings where point predictions are insufficient. Bayesian decision trees (BART — Bayesian Additive Regression Trees) provide full posterior uncertainty characterisation.
    - **Multimodal and tabular-text fusion**: As structured tabular data increasingly co-exists with unstructured text in business databases, hybrid architectures combining tree-based tabular feature processing with transformer-based text encoding are emerging. These maintain the interpretability of the tabular component while leveraging language model representations for free-text fields.
    - **Federated tree learning**: Training gradient-boosted trees across multiple privacy-constrained data silos (e.g., NHS Trusts, competing banks) without centralising data is an active research area, enabling [[Regulatory Compliance]] with data minimisation principles while maintaining model accuracy. [[Federated Learning]] for gradient-boosted trees requires secure aggregation of split statistics without exposing individual data points, a non-trivial cryptographic engineering challenge.
    - **Causal decision trees**: Standard decision trees learn correlational patterns from observational data. Incorporating [[Causal Inference]] into tree construction — selecting splits based on estimated causal effects rather than correlational impurity — is an emerging research frontier with applications in [[Medical Diagnosis AI]], policy evaluation, and personalised recommendation systems where confounding is a major concern.
    - **Differentiable and neural decision trees**: Soft decision trees (Irsoy et al. 2012; Frosst and Hinton 2017) replace hard binary splits with differentiable routing functions, enabling end-to-end gradient-based training. Neural oblivious decision trees (NODE, Popov et al. 2019) achieve competitive performance on tabular benchmarks. These architectures retain the structural interpretability of trees while enabling integration into differentiable computational graphs alongside [[Deep Learning]] components in hybrid neuro-symbolic systems.
  - ## Research and Literature
    - 1. Breiman, L., Friedman, J., Olshen, R., and Stone, C. (1984). Classification and Regression Trees. Wadsworth. (CART — the foundational algorithm for all modern tree methods.)
    - 2. Quinlan, J.R. (1986). Induction of Decision Trees. Machine Learning 1(1): 81–106. doi:10.1007/BF00116251. (ID3 algorithm.)
    - 3. Quinlan, J.R. (1993). C4.5: Programs for Machine Learning. Morgan Kaufmann.
    - 4. Hyafil, L. and Rivest, R.L. (1976). Constructing optimal binary decision trees is NP-complete. Information Processing Letters 5(1): 15–17. doi:10.1016/0020-0190(76)90095-8.
    - 5. Breiman, L. (1996). Bagging predictors. Machine Learning 24(2): 123–140. doi:10.1007/BF00058655.
    - 6. Freund, Y. and Schapire, R. (1997). A decision-theoretic generalisation of on-line learning and an application to boosting. Journal of Computer and System Sciences 55(1): 119–139. doi:10.1006/jcss.1997.1504.
    - 7. Breiman, L. (2001). Random forests. Machine Learning 45(1): 5–32. doi:10.1023/A:1010933404324.
    - 8. Friedman, J. (2001). Greedy function approximation: A gradient boosting machine. Annals of Statistics 29(5): 1189–1232. doi:10.1214/aos/1013203451.
    - 9. Chen, T. and Guestrin, C. (2016). XGBoost: A scalable tree boosting system. Proceedings of KDD 2016, 785–794. doi:10.1145/2939672.2939785.
    - 10. Ke, G., Meng, Q., Finley, T., et al. (2017). LightGBM: A highly efficient gradient boosting decision tree. Advances in Neural Information Processing Systems 30 (NIPS 2017).
    - 11. Prokhorenkova, L., Gusev, G., Vorobev, A., et al. (2018). CatBoost: Unbiased boosting with categorical features. Advances in Neural Information Processing Systems 31 (NeurIPS 2018).
    - 12. Lundberg, S.M., Erion, G.G., and Lee, S-I. (2018). Consistent individualised feature attribution for tree ensembles. arXiv:1802.03888. (TreeSHAP — O(TLD^2) exact SHAP for tree models.)
    - 13. Lipton, Z.C. (2016). The mythos of model interpretability. ICML Workshop on Human Interpretability in Machine Learning. arXiv:1606.03490.
    - 14. Rudin, C. (2019). Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead. Nature Machine Intelligence 1: 206–215. doi:10.1038/s42256-019-0048-x.
    - 15. Hu, X., Rudin, C., and Seltzer, M. (2019). Optimal sparse decision trees. Advances in Neural Information Processing Systems 32 (NeurIPS 2019). arXiv:1904.12847.
    - 16. Geman, S., Bienenstock, E., and Doursat, R. (1992). Neural networks and the bias/variance dilemma. Neural Computation 4(1): 1–58. doi:10.1162/neco.1992.4.1.1.
    - 17. Kearns, M. and Mansour, Y. (1996). On the boosting ability of top-down induction of decision trees. Proceedings of STOC 1996. doi:10.1145/237814.237860.
    - 18. Wachter, S., Mittelstadt, B., and Russell, C. (2017). Counterfactual explanations without opening the black box. Harvard Journal of Law and Technology 31(2). (Contestability and tree-based explanations.)
    - 19. Ribeiro, M.T., Singh, S., and Guestrin, C. (2016). "Why Should I Trust You?": Explaining the predictions of any classifier. Proceedings of KDD 2016. doi:10.1145/2939672.2939778. (LIME, applicable to tree models.)
    - 20. Fernandez-Delgado, M., Cernadas, E., Barro, S., and Amorim, D. (2014). Do we need hundreds of classifiers to solve real world classification problems? Journal of Machine Learning Research 15: 3133–3181. (Benchmark study in which random forests rank top.)
    - 21. Boura, C., Chillotti, I., Joye, M., et al. (2023). Privacy-preserving tree-based inference with TFHE. Proceedings of ACM CCS 2023. arXiv:2303.01254.
    - 22. Mukherjee, S., Ghosh, S., and Zaheer, M. (2025). Learning decision trees as amortised structure inference. arXiv:2503.06985.
    - 23. Fahey, J. (2026). Decision trees in 2026: History, mechanics, markets, and the future of interpretable machine learning. Medium, March 2026.
    - 24. Abdelsalam, M., Abdelrazek, S., and Abdelmaksoud, I.R. (2026). Improving credit scoring with feature selection and predictive modelling. International Journal of Information Management Data Insights. doi:10.1177/18758967251369775.
    - 25. Strobl, C., Boulesteix, A-L., Zeileis, A., and Hothorn, T. (2007). Bias in random forest variable importance measures. BMC Bioinformatics 8(1): 25. doi:10.1186/1471-2105-8-25.
    - 26. Loh, W-Y. (2011). Classification and regression trees. WIREs Data Mining and Knowledge Discovery 1(1): 14–23. doi:10.1002/widm.8. (Comprehensive algorithmic review.)
    - 27. Hastie, T., Tibshirani, R., and Friedman, J. (2009). The Elements of Statistical Learning, 2nd ed. Springer. Chapter 9: Additive Models, Trees, and Related Methods.
    - 28. Arrieta, A.B., Díaz-Rodríguez, N., et al. (2020). Explainable Artificial Intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI. Information Fusion 58: 82–115. doi:10.1016/j.inffus.2019.12.012.

  - ## Key Terminology
    - **Decision node**: An internal node of the tree that applies a test (feature threshold or category membership) to route instances to child branches. The feature and threshold at each decision node are selected during training to maximise purity improvement.
    - **Leaf node (terminal node)**: A terminal node that assigns a prediction — a class label (or class probability distribution) for [[Classification]], or a numeric value for [[Regression]]. All instances reaching a given leaf during inference receive the same prediction.
    - **Decision path**: The sequence of edges traversed from root to leaf for a given input instance. The conjunction of conditions along the path constitutes the intrinsic explanation of the prediction, the direct mechanism of [[Decision Transparency]].
    - **Root node**: The topmost decision node. The feature chosen at the root has the highest global discriminating power under the splitting criterion across the full training set.
    - **Gini impurity**: G(t) = 1 - sum(p_i^2) — the probability of misclassifying a randomly drawn instance given the class distribution at node t. Splitting criterion used by CART. Ranges from 0 (pure node, one class only) to 1 - 1/k (maximally impure, k equal classes).
    - **Information gain**: The reduction in entropy produced by a split. IG(t, s) = H(t) - (n_left/n) * H(t_left) - (n_right/n) * H(t_right). Maximised by ID3.
    - **Gain ratio**: Information gain normalised by SplitInfo (entropy of the split variable), correcting the bias of pure information gain towards high-cardinality features. Used by C4.5.
    - **Pruning**: Reduction of tree size after or during training to prevent [[Overfitting]]. Pre-pruning constrains growth; post-pruning removes branches from a fully grown tree; cost-complexity pruning selects from a sequence of increasingly pruned subtrees.
    - **Feature importance (Gini importance)**: Aggregate measure of each feature's contribution to purity reduction across all nodes where it is used during training. Sum of (n_t / N) * impurity_reduction_t for all nodes t using feature j. Built-in interpretability signal of tree models; known to be biased towards high-cardinality features (Strobl et al. 2007).
    - **Bootstrap aggregating (bagging)**: Training each tree on an independently drawn bootstrap sample (sampling with replacement) of the training data; predictions aggregated by majority vote (classification) or averaging (regression). Reduces variance. Mechanism underlying [[Random Forest]].
    - **Out-of-bag (OOB) error**: Error estimate computed on the ~37% of training instances excluded from each bootstrap sample. Provides a free cross-validation estimate without a separate validation set in [[Random Forest]] training.
    - **Boosting**: Sequential training of trees where each tree is fitted to the pseudo-residuals (negative gradients of the loss) of the current ensemble. Reduces both bias and variance. Mechanism underlying [[Gradient Boosted Trees]], XGBoost, and LightGBM.
    - **SHAP TreeExplainer**: Algorithm by Lundberg et al. (2018) computing exact Shapley value feature attributions for tree ensemble predictions in polynomial time O(TLD^2), where T = trees, L = leaves, D = max depth. Provides theoretically grounded per-prediction attributions satisfying game-theoretic axioms.
    - **Surrogate model**: A simple, interpretable model (often a shallow decision tree) fitted to approximate the behaviour of a complex black-box model over a dataset, providing a global post-hoc explanation. Fidelity to the black-box model (not to ground truth) is the relevant accuracy measure.
    - **Bias-variance tradeoff**: The fundamental tension in [[Supervised Learning]] between underfitting (high bias, low variance) and overfitting (low bias, high variance). A single unconstrained decision tree has low bias (high flexibility) but high variance (unstable to training data perturbations). Ensemble methods exploit this by averaging many high-variance, low-bias trees.
    - **GOSDT (Generalised Optimal Sparse Decision Trees)**: Algorithm (Hu et al. 2019) using dynamic programming and branch-and-bound search to find the globally optimal decision tree under a regularisation constraint, as opposed to greedy heuristic construction. Produces provably optimal interpretable trees; computationally tractable for datasets up to ~10K instances.
    - **Isolation Tree**: Component of Isolation Forest (Liu et al. 2008). A randomly constructed tree that partitions the feature space without a target variable. Anomalies are isolated with fewer splits than normal instances. Used in unsupervised [[Anomaly Detection]].

- ### Provenance
  - sources:: https://medium.com/@fahey_james/history-mechanics-markets-and-the-future-of-interpretable-machine-learning-9a65bd9ebd90, https://arxiv.org/pdf/2503.06985, https://arxiv.org/pdf/2303.01254, https://doi.org/10.1177/18758967251369775, https://mbrenndoerfer.com/writing/cart-decision-trees-classification-regression-mathematical-foundations-python-implementation, https://arxiv.org/pdf/2410.19200, https://www.sciencedirect.com/science/article/abs/pii/S0957417421013798
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
