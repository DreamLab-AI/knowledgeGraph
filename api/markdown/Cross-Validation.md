public:: true

# Cross-Validation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-validation",
  "@type": "Page",
  "vc:slug": "cross-validation",
  "title": "Cross-Validation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "AI Machine Learning"},
    {"@id": "urn:visionflow:linked:model-evaluation", "vc:label": "Model Evaluation"},
    {"@id": "urn:visionflow:linked:model-selection", "vc:label": "Model Selection"},
    {"@id": "urn:visionflow:linked:bias-variance-tradeoff", "vc:label": "Bias-Variance Tradeoff"},
    {"@id": "urn:visionflow:linked:overfitting", "vc:label": "Overfitting"},
    {"@id": "urn:visionflow:linked:hyperparameter-tuning", "vc:label": "Hyperparameter Tuning"},
    {"@id": "urn:visionflow:linked:regularisation", "vc:label": "Regularisation"},
    {"@id": "urn:visionflow:linked:ensemble-methods", "vc:label": "Ensemble Methods"},
    {"@id": "urn:visionflow:linked:statistical-learning-theory", "vc:label": "Statistical Learning Theory"},
    {"@id": "urn:visionflow:linked:supervised-learning", "vc:label": "Supervised Learning"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:convolutional-neural-network", "vc:label": "Convolutional Neural Network"},
    {"@id": "urn:visionflow:linked:applied-machine-learning", "vc:label": "Applied Machine Learning"},
    {"@id": "urn:visionflow:linked:benign-overfitting", "vc:label": "Benign Overfitting"},
    {"@id": "urn:visionflow:linked:annotated-training-data", "vc:label": "Annotated Training Data"},
    {"@id": "urn:visionflow:linked:statistical-inference", "vc:label": "Statistical Inference"},
    {"@id": "urn:visionflow:linked:data-governance", "vc:label": "Data Governance"},
    {"@id": "urn:visionflow:linked:resampling", "vc:label": "Resampling"},
    {"@id": "urn:visionflow:linked:performance-metrics", "vc:label": "Performance Metric"},
    {"@id": "urn:visionflow:linked:gradient-boosting", "vc:label": "Gradient Boosting"},
    {"@id": "urn:visionflow:linked:random-forest", "vc:label": "Random Forest"},
    {"@id": "urn:visionflow:linked:generalisation-error", "vc:label": "Generalisation Error"},
    {"@id": "urn:visionflow:linked:bayesian-optimisation", "vc:label": "Bayesian Optimisation"},
    {"@id": "urn:visionflow:linked:automl", "vc:label": "AutoML"},
    {"@id": "urn:visionflow:linked:feature-selection", "vc:label": "Feature Selection"},
    {"@id": "urn:visionflow:linked:data-augmentation", "vc:label": "Data Augmentation"},
    {"@id": "urn:visionflow:linked:loss-function", "vc:label": "Loss Function"},
    {"@id": "urn:visionflow:linked:decision-tree", "vc:label": "Decision Tree"},
    {"@id": "urn:visionflow:linked:support-vector-machine", "vc:label": "Support Vector Machine"},
    {"@id": "urn:visionflow:linked:machine-learning-grounded-domain", "vc:label": "MachineLearningDomain"},
    {"@id": "urn:visionflow:linked:algorithm-layer", "vc:label": "AlgorithmLayer"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-validation",
  "@type": "Class",
  "label": "Cross-Validation",
  "definition": "Cross-validation is a statistical resampling technique for evaluating machine learning model performance by partitioning available data into complementary training and validation subsets, training the model on each partition in turn, and averaging the resulting error estimates. It provides a less optimistic and more generalisable estimate of out-of-sample predictive performance than a single train–test split.",
  "domain": "machine-learning",
  "maturity": "established",
  "quality": 0.90,
  "subClassOf": {
    "@id": "urn:ngm:class:model-evaluation",
    "label": "Model Evaluation"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:sampling", "label": "Stratified Sampling"},
      {"@id": "urn:ngm:class:k-fold", "label": "K-Fold Split"},
      {"@id": "urn:ngm:class:leave-one-out", "label": "Leave-One-Out"},
      {"@id": "urn:ngm:class:nested-cv", "label": "Nested Cross-Validation"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:model-selection", "label": "Model Selection"},
      {"@id": "urn:ngm:class:applied-machine-learning", "label": "Applied Machine Learning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:labelled-dataset", "label": "Labelled Dataset"},
      {"@id": "urn:ngm:class:resampling", "label": "Resampling"},
      {"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metric"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:hyperparameter-tuning", "label": "Hyperparameter Tuning"},
      {"@id": "urn:ngm:class:bias-variance-tradeoff", "label": "Bias-Variance Tradeoff"},
      {"@id": "urn:ngm:class:model-comparison", "label": "Model Comparison"},
      {"@id": "urn:ngm:class:feature-selection", "label": "Feature Selection"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:statistical-estimation", "label": "Statistical Estimation"},
      {"@id": "urn:ngm:class:statistical-learning-theory", "label": "Statistical Learning Theory"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metric"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:applied-machine-learning", "label": "Applied Machine Learning"},
      {"@id": "urn:ngm:class:model-comparison", "label": "Model Comparison"},
      {"@id": "urn:ngm:class:overfitting-prevention", "label": "Overfitting Prevention"},
      {"@id": "urn:ngm:class:automl", "label": "AutoML"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:annotated-training-data", "label": "Annotated Training Data"},
      {"@id": "urn:ngm:class:holdout-validation", "label": "Holdout Validation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:benign-overfitting", "label": "Benign Overfitting"},
      {"@id": "urn:ngm:class:regularisation", "label": "Regularisation"},
      {"@id": "urn:ngm:class:ensemble-methods", "label": "Ensemble Learning"},
      {"@id": "urn:ngm:class:data-augmentation", "label": "Data Augmentation"},
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:statistical-inference", "label": "Statistical Inference"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:resampling-validation", "label": "Resampling Validation"},
    {"@id": "urn:ngm:class:k-fold-validation", "label": "K-Fold Validation"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "FullEnrichment"
  }
}
```

- ### Definition
  - Cross-validation is a statistical [[Resampling]] technique used within [[AI Machine Learning]] and [[Supervised Learning]] workflows to produce a reliable estimate of a model's [[Generalisation Error]] on unseen data. Rather than evaluating on a single held-out partition, cross-validation partitions the available [[Annotated Training Data]] into k complementary folds, training the model k times — each time holding out a different fold as the validation set — and averaging the resulting error measurements across all k runs. This procedure directly addresses the [[Bias-Variance Tradeoff]] inherent in model assessment: a single holdout split introduces high variance in the performance estimate because the result depends on which examples happen to fall in the test set, while cross-validation reduces that variance by rotating the held-out portion through the whole dataset. The technique is foundational to [[Model Selection]] and [[Hyperparameter Tuning]], providing an unbiased basis for comparing competing architectures, feature sets, and preprocessing pipelines. Its most important variant, nested cross-validation, uses two concentric loops: an inner loop for hyperparameter search and an outer loop for generalisation estimation, entirely decoupling model selection from performance reporting and eliminating the optimistic bias that arises when the same data guides both choices. Cross-validation is especially critical when labelled data is scarce — as in medical imaging, clinical biomarker research, and low-resource natural language processing — where reserving a permanent holdout set would reduce the training corpus to an extent that harms model quality. Its conceptual roots in predictive sample reuse date to Allen (1974), Geisser (1975), and Stone (1974), with Kohavi's 1995 IJCAI study demonstrating empirically that ten-fold stratified cross-validation is the most reliable practical default across a wide range of [[Decision Tree]] and probabilistic classifiers. Today cross-validation is standard practice in [[Applied Machine Learning]], [[Deep Learning]], and [[Ensemble Methods]], and is natively supported by toolkits including scikit-learn, PyTorch Lightning, Hugging Face Evaluate, and [[AutoML]] systems such as Auto-sklearn and FLAML.

- ### Semantic Classification
  - owl-class:: machine-learning:CrossValidation
  - owl-role:: EvaluationProtocol | StatisticalTechnique | ExecutableProtocol
  - owl-inferred:: machine-learning:ModelEvaluationMethod, machine-learning:ResamplingTechnique, machine-learning:BiasReductionStrategy
  - belongs-to-domain:: [[MachineLearningDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Model Evaluation]], [[Statistical Learning Theory]], [[Resampling]]
  - has-part:: [[Bias-Variance Tradeoff]], [[Hyperparameter Tuning]], [[Feature Selection]], [[Model Selection]]
  - requires:: [[Annotated Training Data]], [[Resampling]], [[Performance Metric]], [[Loss Function]]
  - enables:: [[Hyperparameter Tuning]], [[Model Selection]], [[Overfitting]] prevention, [[Generalisation Error]] estimation, [[AutoML]]
  - implements:: [[Statistical Inference]] principles, [[Resampling]] estimation
  - depends-on:: [[Statistical Learning Theory]], [[Supervised Learning]], [[AI Machine Learning]]
  - supports:: [[Applied Machine Learning]], [[Model Evaluation]], [[Ensemble Methods]], [[Regularisation]], [[Bias-Variance Tradeoff]]
  - uses:: [[Performance Metric]], [[Loss Function]], [[Random Forest]], [[Gradient Boosting]], [[Convolutional Neural Network]], [[Decision Tree]], [[Support Vector Machine]]
  - contrasts-with:: [[Annotated Training Data]] single-split, [[Benign Overfitting]] reliance
  - related-to:: [[Regularisation]], [[Ensemble Methods]], [[Data Augmentation]], [[Bayesian Optimisation]], [[AutoML]], [[Deep Learning]]
  - standardized-by:: scikit-learn, ISO/IEC 22989 AI Concepts and Terminology

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:KFoldSplit))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:StratifiedSampling))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:LeaveOneOut))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:NestedCrossValidation))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:PerformanceMetric))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:TrainValidationSplit))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:ErrorAggregation))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:hasPart ai:FoldIndexer))
  ## Dependency Relationships
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:requires ai:LabelledDataset))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:requires ai:Resampling))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:requires ai:PerformanceMetric))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:requires ai:StatisticalEstimation))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:dependsOn ai:StatisticalLearningTheory))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:dependsOn ai:SupervisedLearning))
  ## Capability Relationships
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:enables ai:HyperparameterTuning))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:enables ai:ModelSelection))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:enables ai:ModelComparison))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:enables ai:FeatureSelection))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:enables ai:GeneralisationErrorEstimation))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:enables ai:AutoML))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:supports ai:OverfittingPrevention))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:supports ai:AppliedMachineLearning))
  ## Implementation Relationships
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:implements ai:StatisticalInference))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:implements ai:ResamplingEstimation))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:uses ai:LossFunction))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:uses ai:PerformanceMetric))
  ## Reduction Relationships
      SubClassOf(ai:NestedCrossValidation
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
      SubClassOf(ai:StratifiedCrossValidation
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
      SubClassOf(ai:LeaveOneOut
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
      SubClassOf(ai:TimeSeriesCrossValidation
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
      SubClassOf(ai:GroupedCrossValidation
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
      SubClassOf(ai:BootstrapValidation
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
      SubClassOf(ai:MonteCarloCrossValidation
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossValidation))
  ## Contrasting Relationships
      DisjointClasses(ai:CrossValidation ai:HoldoutValidation)
      SubClassOf(ai:CrossValidation
        ObjectAllValuesFrom(ai:contrastsWith ai:SingleSplitEvaluation))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:avoids ai:AnnotationBias))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:mitigates ai:Overfitting))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:quantifies ai:GeneralisationError))
      SubClassOf(ai:NestedCrossValidation
        ObjectSomeValuesFrom(ai:prevents ai:SelectionBias))
      SubClassOf(ai:CrossValidation
        ObjectSomeValuesFrom(ai:supports ai:ModelComparison))

  ## About
    Cross-validation is the dominant resampling-based protocol for assessing and comparing machine learning models in situations where the full data budget must serve both training and evaluation. At its core, the method systematically rotates a held-out portion of the labelled dataset through all available samples, ensuring that every observation contributes to both model training and model testing across the full procedure. The averaged test error across folds provides an unbiased estimate of expected generalisation performance that is significantly more stable than any single holdout split, because its variance decreases with k and does not depend on a single arbitrary partition boundary. This stability advantage is particularly consequential when labelled data is expensive or scarce, as in medical imaging diagnostics, rare-event clinical prediction, low-resource natural language tasks, and genomic biomarker studies where the cost of acquiring each labelled sample may run to hundreds or thousands of pounds. In these regimes, reserving 20% or 30% of the dataset as a permanent holdout imposes an unacceptable penalty on training set size and model quality; cross-validation allows the full corpus to contribute to training while still providing a statistically sound performance estimate.

    The technique sits at the intersection of [[Statistical Inference]] and practical [[Applied Machine Learning]]. From a Bayesian perspective, cross-validation approximates leave-one-out (LOO) posterior predictive performance under mild regularity conditions, connecting it to information-theoretic criteria such as AIC and WAIC. Stone (1977) proved that LOO cross-validation and AIC are asymptotically equivalent model selectors under regularity conditions, establishing cross-validation's theoretical grounding within the broader information-theoretic framework. From a frequentist perspective, it is a consistent estimator of the conditional test error of the fitted model under the given training-set distribution, with concentration bounds provided by the theory of Rademacher complexity and VC dimension. In practice, the choice of k controls the bias-variance tradeoff of the estimator itself: small k (e.g., k=2) yields high-bias, low-variance estimates because the training folds are small; large k (e.g., LOO) yields low-bias but high-variance estimates and high computational cost. Kohavi's 1995 empirical study confirmed that k=10 provides the best practical balance across most classification tasks, a finding corroborated repeatedly across subsequent benchmarking studies. The practical recommendation of k=5 or k=10 has proven remarkably durable across three decades of machine learning, surviving the transition from shallow models to [[Deep Learning]] in the sense that the same fold count remains optimal when deep learning is applied to small datasets, even though the computational regime has changed dramatically.

    A critical but often overlooked aspect of cross-validation practice is the correct treatment of preprocessing within the fold loop. A common methodological error is to fit preprocessing transformers — scalers, imputers, PCA dimensionality reducers, TF-IDF vectorisers — on the entire dataset before splitting into folds, rather than fitting them exclusively on the training fold and applying the learned transformation to the validation fold. This error, known as preprocessing leakage or pipeline leakage, introduces a subtle but real upward bias in CV estimates because the validation data influences the preprocessing step via the fitted parameters. Scikit-learn's Pipeline API enforces correct preprocessing by ensuring that all transformers in the pipeline are fitted only on the training fold during each CV iteration, propagating the fit to the validation fold without refitting. The same principle applies to feature selection: selecting features based on their correlation with the label across the full dataset before CV splits contaminates the CV estimate because the feature selector implicitly uses information from all folds simultaneously. This specific failure mode — selection bias amplified by CV — was demonstrated theoretically and empirically by Ambroise and McLachlan (2002) in the context of gene expression microarray studies, where it produced dramatically overoptimistic error estimates.

    As dataset sizes and model complexity have grown, several limitations of naive cross-validation have come into focus. For time-ordered data, standard k-fold violates temporal integrity and introduces data leakage because future observations train the model before past observations are evaluated; the model appears to generalise well to the validation set because it has implicitly seen the future, but the performance does not hold when the model is deployed on truly future data. For spatially correlated data, standard k-fold can produce overly optimistic estimates because nearby samples appear in both training and validation folds; since the model is essentially interpolating between training points, and nearby validation points are nearly identical to nearby training points, the spatial autocorrelation inflates CV accuracy to far above what would be achieved on geographically independent test sites. For grouped data — multiple measurements from the same subject such as multiple CT scans from the same patient, multiple text messages from the same user, or multiple seismic traces from the same geographical deployment — standard k-fold risks information leakage across the subject boundary because the model learns subject-specific representations during training that generalise trivially to validation measurements from the same subject. These pathologies have driven specialised variants: time-series CV (forward-chaining or rolling-origin), spatial block CV, and grouped (or subject-wise) CV. Collectively, the design of an appropriate cross-validation scheme for a given domain is now recognised as a methodological decision of equivalent importance to architecture selection, and choosing the wrong CV variant for a domain with temporal, spatial, or grouping structure is one of the most common sources of irreproducible results in applied machine learning literature.

  ## Components and Variants
    Cross-validation is not a single algorithm but a family of resampling strategies united by the principle of rotating a held-out validation subset through the available data. Each variant makes a different trade-off between bias, variance, computational cost, and domain appropriateness. Understanding which variant to apply is as important as understanding the choice of model architecture or [[Regularisation]] strategy.

    - **Standard k-Fold**: Partition dataset into k equally sized folds; train on k-1, validate on 1; rotate k times; average metric. Default k=10 recommended by Kohavi (1995) for most classification tasks, k=5 for computationally expensive models. The simplest and most widely implemented variant across tabular, image, and NLP tasks. The estimator has known bias: it underestimates the true generalisation error because the fold training set is only ((k-1)/k)n samples, smaller than the full dataset. For k=10 this underestimate is approximately 10%, which is considered acceptable for comparative purposes.
    - **Stratified k-Fold**: Extends standard k-fold by preserving class proportions within each fold, preventing degenerate splits where a rare class appears only in a single fold. Critical for medical classification tasks where positive class prevalence may be under 5%. Standard in scikit-learn's StratifiedKFold and the default used by sklearn's cross_val_score for classifiers. For multi-label classification, a stratification strategy based on label combination or iterative stratification (Szymanski and Kajdanowicz, 2017) is preferred.
    - **Leave-One-Out (LOO)**: The extreme case where k=n; each single observation forms the validation set in turn. Provides the lowest-bias CV estimate because the training sets are size n-1, approaching n. However, variance is high because the n validation sets are highly correlated (each shares n-2 training points with each other), and the computational cost is O(n) model fits — prohibitive for large n. Analytically approximable via LOO-CV formulae for Gaussian processes and linear models (via hat-matrix computations), and via PSIS-LOO in Bayesian models (Vehtari et al., 2017).
    - **Leave-p-Out**: Generalises LOO by holding out p observations at each iteration. All C(n,p) combinations are evaluated. For p>1 the number of iterations grows combinatorially, making this only practical for very small datasets or analytically tractable models.
    - **Repeated k-Fold**: Runs the full k-fold procedure multiple times with different random fold assignments and averages all fold results. Reduces the Monte Carlo variance in the CV estimate at the cost of r×k model fits. Standard recommendation for small biomedical datasets where the single-run k-fold estimate has unacceptably high variance; typical choices are r=5 or r=10 repeats of 10-fold CV.
    - **Nested Cross-Validation**: The two-level loop protocol that entirely separates model selection from performance estimation. The outer loop iterates over outer folds (typically k_outer=5 or 10), defining the test set for performance reporting. Inside each outer fold, an inner loop (k_inner=3 or 5) performs hyperparameter search. The best hyperparameter configuration from the inner loop is retrained on the full outer training set, then evaluated on the outer test fold. The average of outer fold test errors is the reported performance estimate. This is the gold standard for clinical and biomedical AI because the reported estimate is unbiased with respect to the model selection process itself, not just the fitted model. Mandated by TRIPOD+AI (2023) and referenced in FDA and EMA AI/SaMD guidance.
    - **Stratified Nested CV**: Applies stratification in both the outer and inner loops of nested CV. Critical for class-imbalanced clinical datasets where both model selection and performance reporting must remain unbiased with respect to class distribution.
    - **Time-Series / Rolling-Origin CV**: Respects temporal ordering by always training on past observations and validating on future windows. Two main variants: (a) expanding window — the training set grows at each origin point, eventually using all available history; (b) fixed window — a window of constant size slides forward, ensuring the training set always covers the same historical depth. Prevents future leakage that would arise from standard k-fold applied to time-ordered sequences. The primary CV protocol for financial forecasting, energy demand prediction, epidemiological nowcasting, and multivariate time series modelling.
    - **Spatial Block CV**: Divides geographic space into contiguous blocks such that training and validation blocks are spatially separated by a minimum gap (the range of spatial autocorrelation). Used in environmental science, remote sensing, epidemiology, and ecology where nearby samples share spatial autocorrelation. Roberts et al. (2017) demonstrated that standard k-fold applied to spatially structured data inflates AUC estimates by 0.1–0.2 compared to block CV, a substantial overestimate that has invalidated a significant fraction of published species distribution models.
    - **Grouped / Subject-Wise / Site-Wise CV**: Ensures that all data from one group (patient, user, device, site) appears in either training or validation, never both. This prevents the model from leveraging subject-level representations learned during training when evaluating on the same subject. Standard in multi-site medical imaging studies where the group is the imaging site; in user behaviour modelling where the group is the user; in multi-subject EEG/ERP studies where the group is the experimental participant. scikit-learn implements this via GroupKFold and StratifiedGroupKFold.
    - **Monte Carlo / Shuffle-Split CV**: Repeatedly samples a random train/test split of specified proportions (e.g., 80/20) and averages the resulting estimates. Unlike k-fold, the same observation may appear in the test set multiple times across iterations, and not all observations are guaranteed to appear in any test set. Flexible for irregular grouping or class balancing constraints; commonly used when exact fold size constraints or group constraints make exhaustive k-fold cumbersome. Also called random subsampling cross-validation.
    - **Bootstrap Validation**: Samples n observations with replacement to form the training set; the out-of-bag (OOB) samples — approximately 36.8% of the dataset — form the validation set. Each observation has probability (1-1/n)^n → 1/e ≈ 0.368 of not appearing in a bootstrap sample. The OOB error estimate has lower variance than LOO on small datasets. Efron's .632+ bootstrap (Efron and Tibshirani, 1997) corrects for the pessimism bias of the naive OOB estimate by weighting between the training error (0% pessimism) and the OOB error (maximum pessimism) using a correction factor.
    - **Purged and Embargoed CV (Financial ML)**: Extends grouped CV to address look-ahead bias in financial time series where observations near the fold boundary have overlapping information horizons. The purged CV method removes training observations whose outcomes overlap with the test period; embargoed CV additionally removes a buffer of k observations after the test period from training to eliminate embargo leakage. Introduced by Lopez de Prado (2018) as the standard for financial ML model evaluation.

  ## Use Cases and Major Applications
    Cross-validation is applied at multiple stages of the machine learning development lifecycle: during exploratory model comparison, during [[Hyperparameter Tuning]], during [[Feature Selection]], and as the final performance reporting mechanism. Its role varies by domain and dataset size, but its presence as the primary evaluation tool across all stages of classical ML is near-universal.

    - **Model comparison and benchmarking**: Cross-validation is the standard basis for reporting comparative performance in ML papers, enabling fair comparison of algorithms across datasets without relying on a single arbitrary train/test split. It is required by NeurIPS, ICML, and ICLR reproducibility checklists. Demsar (2006) proposed the Wilcoxon signed-rank test applied to k-fold CV results across multiple datasets as the recommended statistical comparison procedure for ML algorithms.
    - **Hyperparameter search**: Grid search, random search, and [[Bayesian Optimisation]] all rely on cross-validation scores to evaluate candidate hyperparameter configurations. This is the inner loop of nested CV when hyperparameter search and performance reporting are combined. GridSearchCV and RandomizedSearchCV in scikit-learn implement this directly, fitting the full cross-validation loop for each candidate configuration. Bayesian hyperparameter optimisation frameworks (Optuna, Hyperopt, SMAC) use CV scores as the objective function to maximise through sequential model-based optimisation.
    - **Feature selection and pipeline comparison**: Importance-based, filter-based, and wrapper feature selection methods all use cross-validation scores to assess which feature subsets generalise rather than overfit. Pipeline-level CV (scikit-learn Pipeline + GridSearchCV) enforces correct preprocessing by fitting scalers and selectors only on the training fold of each split, preventing leakage of test-set statistics into the feature selection step. RFECV (Recursive Feature Elimination with Cross-Validation) applies this principle to iterative feature pruning.
    - **Medical and clinical AI**: Nested CV is mandated by TRIPOD+AI reporting guidelines for clinical prediction model evaluation. Subject-wise CV prevents overfitting to patient identity in multi-site studies. UK NIHR-funded AI diagnostics studies — including the NHSX AI Lab chest X-ray, diabetic retinopathy screening, and early cancer detection cohort studies — routinely apply subject-wise nested CV as a condition of NHS Evidence Standards for AI-driven digital health technologies.
    - **AutoML**: Systems including Auto-sklearn 2.0, FLAML, H2O AutoML, and Google AutoML internally apply cross-validation for model selection, preprocessing selection, and ensembling decisions. Auto-sklearn 2.0 uses 5-fold CV with portfolio-based warm-starting to select ensemble members. FLAML uses 5-fold CV by default with early stopping per fold to reduce total compute. The CV loop is the central evaluation engine of every AutoML system in production.
    - **Low-resource NLP**: When fine-tuning transformers on small task-specific datasets (clinical notes, legal documents, minority-language corpora), k-fold CV provides more reliable dev-set estimates than a single split. This reduces variance in reported GLUE, SuperGLUE, and domain-specific benchmark scores. Ten-fold CV is standard for NLP datasets with fewer than 5,000 training examples; leave-one-out or Monte Carlo CV for datasets under 500 examples.
    - **Genomics and transcriptomics**: High-dimensional omics data (gene expression microarrays, RNA-seq, proteomics) present the extreme p >> n regime where n may be hundreds of samples but p may be tens of thousands of features. Nested CV with embedded filter-based feature selection is the only statistically sound evaluation protocol in this regime. The nestedcv R package (Wang et al., 2023) implements fast nested CV with multiple filter strategies (Pearson correlation, mutual information, ANOVA F-test) nested inside the outer CV loop to prevent selection bias. Essential for biomarker discovery and clinical genomics.
    - **Credit risk and fraud detection**: Financial ML applications apply time-series CV (walk-forward validation) or purged/embargoed CV to prevent look-ahead bias. Credit scorecards must comply with PRA/FCA model risk management guidance that specifies performance estimation methodology. Cross-validation is embedded in the validation lifecycle of every regulated financial model in the UK.
    - **Ensemble stacking and blending**: The meta-learner in stacked ensemble methods trains on out-of-fold predictions produced by the base learners during cross-validation. This is architecturally essential: if base learner predictions on the full training set are used instead of OOF predictions, the meta-learner learns to exploit overfitting patterns in base learner outputs rather than genuinely complementary representations. CV is therefore not merely an evaluation tool in ensemble methods but a generative component of the training process itself.
    - **Drug discovery and cheminformatics**: QSAR (Quantitative Structure-Activity Relationship) models predicting molecular properties from chemical structure descriptors use cross-validation with chemical scaffold splits (rather than random splits) to ensure the CV estimate reflects generalisation to novel chemical scaffolds rather than interpolation within known scaffold families. This is equivalent to grouped CV where the group is the molecular scaffold.

  ## Formal Analysis
    The expected generalisation error for a learning algorithm A trained on n samples is decomposed (under squared loss) as:

        E[L(f_n, x)] = Bias²(f_n) + Var(f_n) + σ²_irreducible

    Cross-validation estimates the left-hand side directly from data without requiring distributional assumptions, making it a distribution-free method. This is a crucial advantage over information criteria such as AIC and BIC, which assume specific parametric model forms and rely on asymptotic approximations that may not hold for small samples or complex nonparametric models. The distribution-free nature of CV makes it applicable to arbitrary learning algorithms including [[Random Forest]], [[Gradient Boosting]], [[Support Vector Machine]], [[Neural Network]], and non-standard pipelines for which no analytic information criterion exists.

    For the k-fold CV estimator, the bias is a function of how close the fold training-set size ((k-1)n/k) is to the true desired training set size n. At k=10, the training fold contains 90% of the data, so the bias relative to training on the full dataset is approximately a 10% training set reduction — generally small enough to be ignored in comparisons across models trained with identical k. As k→n (LOO), bias→0 but variance grows because the n validation subsets are highly correlated (each differs from the others by only one training point). Arlot and Celisse (2010) provide a comprehensive theoretical analysis showing that the optimal k trades these two sources of error, typically settling near k=5 or k=10 for most practical n. Specifically, for n<100, LOO or k=n-1 is often preferred; for 100<n<10,000, k=10 is standard; for n>10,000, k=5 or k=3 is preferred to reduce computational cost.

    The variance of the k-fold CV estimator is a function of both within-fold variance and between-fold covariance. Dietterich (1998) showed that paired t-tests on k-fold CV results are not valid for comparing two algorithms because the k test errors are correlated — they share overlapping training sets. He proposed the 5×2 CV F-test as a statistically valid alternative. Nadeau and Bengio (2003) derived a corrected variance estimator for k-fold CV that accounts for the between-fold covariance, enabling valid hypothesis tests from standard k-fold results.

    Nested CV has stronger guarantees than single-loop CV: the outer-loop CV estimate is an unbiased estimate of the expected test error of the model selection procedure, not merely the fitted model. This distinction matters when the selection procedure itself is data-adaptive (e.g., [[Bayesian Optimisation]] of hyperparameters) — a naive holdout after optimisation underestimates the effective model complexity because the holdout was implicitly used to select the hyperparameters. Varma and Simon (2006) quantified this selection bias empirically in gene expression microarray studies, finding that single-loop CV over-estimates AUC by 0.04–0.10 compared to nested CV on the same datasets. Cawley and Talbot (2010) extended this analysis to show that the bias compounds when the inner hyperparameter search is itself extensive, motivating regularisation of the search procedure.

    The relationship between cross-validation and [[Regularisation]] is bidirectional. Cross-validation selects the regularisation strength (e.g., the lambda in L1 or L2 [[Regularisation]]), but the regularised model's stability also influences the quality of the CV estimate — highly regularised models produce CV estimates with lower variance because the predictions are stable across fold assignments. Cory-Wright et al. (2025) exploit this relationship explicitly by incorporating an instability penalty into the inner loop objective of nested CV, selecting the configuration that achieves good inner-loop performance while being stable across inner fold assignments. This stability-regularised nested CV produces tighter outer-loop estimates, particularly for sparse regression and pruned [[Decision Tree]] models where small data perturbations can produce large changes in the selected model.

  ## Academic Context
    Cross-validation's conceptual foundations span five decades, with distinct periods of theoretical development, empirical consolidation, and domain-specific extension. The early period (1968-1985) established the fundamental LOO principle. Allen (1968, 1974) introduced PRESS (Predicted Residual Sum of Squares) for regression model selection — arguably the first systematic leave-one-out procedure. Lachenbruch and Mickey (1968) applied LOO to discriminant analysis, producing the first classification-context CV results. Geisser (1975) formalised "predictive sample reuse" as a unifying statistical framework, proposing that models should be evaluated by their ability to predict withheld observations — a principle that extends naturally from regression to classification to generative modelling. Stone (1974, 1977) connected LOO cross-validation to AIC, showing they select the same model asymptotically under mild regularity conditions; this asymptotic equivalence established cross-validation as part of the information-theoretic fabric of model selection rather than a mere heuristic.

    The consolidation period (1985-2000) saw CV become the standard evaluation tool in machine learning. Kohavi (1995) performed the first large-scale empirical comparison of cross-validation and bootstrap variants for classifier accuracy estimation, studying over half a million runs of C4.5 and Naive Bayes across multiple datasets with systematically varied k values and stratification strategies. His finding that stratified 10-fold CV is the most reliable practical default has proven remarkably robust across three subsequent decades of algorithm development. Dietterich (1998) addressed the statistical validity of comparisons based on CV results, demonstrating that paired t-tests on k-fold CV results are not valid due to inter-fold correlation, and proposing the 5×2 CV F-test as a valid alternative. Efron and Tibshirani (1997) introduced the .632+ bootstrap estimator that corrects for the pessimism bias of naive OOB validation, providing a bootstrap-based alternative with lower variance than LOO.

    The theoretical deepening period (2000-2015) established rigorous bounds on CV estimator properties. Kearns and Ron (1999) analysed algorithmic stability as the key determinant of CV concentration bounds, showing that algorithms that are stable to small perturbations of the training set (like regularised ridge regression) produce CV estimates that concentrate tightly around the true generalisation error, while unstable algorithms (like unregularised decision trees) produce high-variance CV estimates. This stability-CV connection motivates [[Regularisation]] as both a model quality improvement and a CV estimate quality improvement. Arlot and Celisse (2010) published the definitive mathematical survey of cross-validation in statistics, covering V-fold, LOO, generalised cross-validation (GCV), and structured variants, deriving bias-variance decompositions for each and characterising optimal k as a function of n. Varma and Simon (2006) demonstrated empirically in high-dimensional genomic data that using single-loop CV for both model selection and performance reporting produces systematic upward bias in reported AUC, motivating the now-standard nested protocol for clinical AI studies.

    The domain extension period (2015-present) has adapted CV to structured data domains where the i.i.d. assumption fails. Roberts et al. (2017) demonstrated that spatial autocorrelation causes standard k-fold CV to dramatically overestimate model performance in ecological species distribution models, and proposed spatial block CV as the appropriate alternative. Similar demonstrations followed for temporal data (Racine, 2000; Bergmeir and Benitez, 2012), phylogenetically structured data, and multi-site medical studies. Austin et al. (2024) showed that distributional bias in the LOO estimator arises when training set composition influences the expected predictive distribution, introducing a bias that standard LOO theory does not account for. Cory-Wright et al. (2025) introduced stability-regularised nested CV, explicitly penalising instability of the selected model across the inner loop to produce tighter validation-test gap estimates for sparse regression and decision trees.

    Two recent research threads connect cross-validation to the broader AI evaluation landscape. First, conformal prediction (Vovk et al. 2005; Angelopoulos and Bates, 2023) uses CV as the calibration mechanism for constructing prediction sets with guaranteed marginal coverage, making CV central to trustworthy uncertainty quantification in deployed AI systems. Second, the failure of standard CV to handle distribution shift between training and test populations has driven work on shift-aware CV protocols that simulate anticipated deployment distribution in the fold design, a research direction accelerated by the mismatch between benchmark evaluation and real-world AI deployment that has undermined the reproducibility of clinical AI studies.

  ## Current Landscape (2026)
    In 2026, cross-validation remains the default evaluation protocol for classical machine learning across all major frameworks. scikit-learn 1.9 ships a rich CV API including StratifiedGroupKFold, TimeSeriesSplit, and RepeatedStratifiedKFold as first-class estimators with pipeline-level integration that prevents preprocessing leakage. PyTorch Lightning's Trainer API supports custom CV loops via callbacks. Hugging Face Evaluate provides fold-aware metric accumulation for transformer fine-tuning.

    For large [[Deep Learning]] models — [[Convolutional Neural Network]] for medical imaging, transformers for NLP — full k-fold CV remains computationally prohibitive on single GPU budgets. The dominant practice for foundation model fine-tuning is a fixed train/validation/test split following established benchmark conventions (e.g., GLUE, BioASQ, CheXpert). However, k-fold CV is still applied in ablation studies and when comparing fine-tuned variants on small task-specific corpora.

    Nested CV is gaining regulatory traction. The FDA and EMA have both issued draft guidance documents (2024-2025) for AI/ML-based Software as a Medical Device (SaMD) that reference rigorous cross-validation as a requirement for performance reporting. TRIPOD+AI (2023) mandates subject-wise or site-wise nested CV for multi-site clinical studies. The UK Medicines and Healthcare products Regulatory Agency (MHRA) Good Machine Learning Practice guidelines (updated 2024) align with these requirements.

    In [[AutoML]] platforms, cross-validation is the evaluation engine. Auto-sklearn 2.0 uses 5-fold CV with portfolio-based warm-starting. FLAML uses 5-fold by default with early stopping per fold for efficiency. Google Cloud AutoML uses cross-validation internally but exposes only aggregate metrics to users. Optuna integrates CV scores as objectives for hyperparameter search. The rise of [[Ensemble Methods]] systems (stacking, blending) also relies on out-of-fold predictions produced by cross-validation to form the meta-learner's training set, making CV architecturally central to modern ensemble pipelines.

    A significant challenge in 2026 is cross-validation design for foundation model evaluation. When a pretrained model is evaluated on a downstream task by few-shot prompting (rather than fine-tuning), the notion of a "training fold" is unclear. Recent work by Liao et al. (2024) and others has begun to define prompt-split evaluation protocols, but no consensus standard has emerged. Similarly, the evaluation of retrieval-augmented systems and agents introduces temporal and source leakage risks that classic CV theory does not address.

  ## UK Context
    Cross-validation is deeply embedded in UK academic machine learning research, regulatory guidance, and industrial AI deployment practice, reflecting the UK's long tradition in statistical science and its specific regulatory environment for AI in healthcare and financial services.

    At the academic level, the Alan Turing Institute at the British Library in London hosts cross-disciplinary working groups on statistical evaluation methodology, including evaluation frameworks for AI-assisted clinical decision making that mandate nested CV protocols and site-wise validation for multi-site studies. The Turing's AI Safety programme (expanded under the AI Safety Institute following the Bletchley Park Summit of 2023) includes evaluation methodology as a core competency, recognising that overoptimistic CV estimates have contributed to AI systems being deployed with insufficient real-world validation. University of Edinburgh's School of Informatics, home to researchers including Amos Storkey, contributed foundational work on Gaussian process model evaluation using exact LOO-CV formulae and approximate methods, and Charles Sutton's group co-developed variational inference approaches that enable scalable approximate leave-one-out assessment of latent variable models without refitting the model n times.

    Cambridge's Statistical Laboratory has a long history in foundations of model evaluation: Harold Jeffreys' Bayesian model comparison criteria are intellectual predecessors of Bayesian model selection methods that cross-validation relates to asymptotically. The MRC Biostatistics Unit at Cambridge, a leading centre for Bayesian clinical trial methodology, routinely applies cross-validation and related resampling methods for prognostic model evaluation in clinical research. The Cambridge Centre for AI in Medicine applies rigorous nested CV protocols in its clinical [[Deep Learning]] projects for medical imaging and electronic health record analysis.

    At the University of Manchester, the bioinformatics and data science groups within the Faculty of Biology, Medicine and Health routinely publish clinical AI studies using stratified nested CV, reflecting the NIHR Data Science and Biomedical Informatics agenda and the specific requirements of studies using the UK Biobank — one of the world's largest research biobanks with genetic, imaging, and health data on 500,000 participants. The Farr Institute, reconstituted as Health Data Research UK (HDRUK) with nodes at Manchester, Edinburgh, UCL, and five other UK universities, has published best-practice guides on cross-validation design for electronic health record (EHR)-based prediction models, recommending nested subject-wise CV as the standard for multi-site EHR studies.

    UCL's Department of Statistical Science, Gatsby Computational Neuroscience Unit, and Centre for Artificial Intelligence each contribute to theoretical and applied evaluation methodology. The Gatsby Unit's foundational work on kernel methods and Gaussian processes informs exact LOO-CV computation for these model classes. UCL's CREST (Centre for Research on Evolution, Search and Testing) studies automated model evaluation in the software testing context, connecting model evaluation theory to software quality assurance.

    In Northern England, Sheffield's Machine Intelligence group within the Department of Computer Science has contributed to evaluation methodology for speech and language models, where grouped (speaker-wise) cross-validation is the standard protocol to prevent speaker identity leakage from training to validation sets. The Sheffield group's work on automatic speech recognition evaluation directly informs how industry systems report word error rates using leave-speaker-out CV. Newcastle University's Digital Institute applies time-series CV extensively in energy demand forecasting and smart grid analytics for the North East England renewable energy transition, where temporal leakage would produce catastrophically optimistic forecasting validation results that would lead to dangerous grid management decisions. Leeds Institute for Data Analytics (LIDA) uses blocked spatial CV in epidemiological risk mapping — for example, mapping cardiovascular disease risk across Yorkshire and Humber using GP record data — where geographic autocorrelation would inflate model AUC by 0.05-0.15 if standard k-fold were used instead of spatial block CV.

    UK industrial adoption reflects both mature practice and regulatory mandates. NHS diagnostic AI deployments — including the NHSX AI Lab cohort of chest X-ray, diabetic retinopathy screening, and early cancer detection tools evaluated under the NHS AI and Digital Regulations Service — are required to report nested subject-wise CV performance as a condition of NHS Evidence Standards for AI-driven digital health technologies. The NICE Evidence Standards Framework for Digital Health Technologies (updated 2024) specifies that predictive models must report performance on independent test sets or, where this is infeasible, on nested CV with site-wise stratification. UK FinTech firms including Revolut, Monzo, and Starling apply time-series or purged/embargoed CV as standard practice for credit risk scoring and fraud detection model validation, aligned with the Prudential Regulation Authority (PRA) and Financial Conduct Authority (FCA) model risk management guidelines (SS1/23 and related supervisory statements) that require evidence of rigorous holdout validation methodology for material models used in regulatory capital calculation.

    The UK's Information Commissioner's Office (ICO) guidance on AI and data protection (2024) intersects with cross-validation practice: when training data contains personal data, each fold re-use means personal data contributes to multiple training and validation runs, and the ICO guidance requires that the data minimisation and purpose limitation principles of UK GDPR are respected in the design of the CV procedure. For NHS patient data processed under Section 251 of the NHS Act 2006, this imposes constraints on which CV designs are legally permissible for model evaluation studies, particularly around data retention during multi-fold resampling.

  ## Future Directions (2026-2030)
    Cross-validation's future development is driven by four converging pressures: the shift toward foundation models that challenge traditional fold-based evaluation; the growing need for evaluation protocols that account for distribution shift and deployment conditions rather than just i.i.d. generalisation; the computational scaling challenge of evaluating large models on large datasets; and the regulatory demand for evaluation protocols with formal guarantees rather than empirical heuristics.

    - **Foundation model-adapted CV**: The community is actively developing prompt-split, context-split, and retrieval-split evaluation protocols that extend CV semantics to in-context learning and retrieval-augmented generation, where no parameter update occurs during "training" and the notion of a training fold is ill-defined. Early proposals (Liao et al., 2024) split prompts and demonstrations rather than training examples, but no consensus standard has emerged. This is the most technically urgent open problem in ML evaluation methodology as foundation models displace fine-tuned models as the dominant paradigm for applied NLP and vision tasks.
    - **Conformal prediction integration**: CV+ (cross-conformal prediction) and jackknife+ (Barber et al., 2021) extend standard CV to produce marginal coverage guarantees on individual prediction sets rather than just average accuracy estimates, combining evaluation and uncertainty quantification in a single procedure. Mondrian conformal predictors and Venn predictors adapt these to stratified settings. The UK's growing use of AI in NHS clinical decision support is driving interest in conformal prediction as a way to provide formally guaranteed uncertainty bounds on AI-generated diagnostic recommendations.
    - **Computationally efficient approximations**: PSIS-LOO (Pareto-Smoothed Importance Sampling LOO, Vehtari et al. 2017) for Bayesian models, the linear response approximation for Gaussian processes, influence-function approximations for [[Deep Learning]] models (Koh and Liang, 2017), and ELEKTRA (Approximation of LOO via efficient re-weighting, 2024) all aim to achieve LOO-quality estimates at k-fold cost. As model training moves to GPU clusters, the asymptotic cost of n model refits for LOO becomes completely infeasible, but the analytical quality of LOO is desirable for small clinical datasets; efficient approximations bridge this gap.
    - **Causal and distributional shift-aware CV**: As ML deployments encounter systematic distribution shift between training populations and deployment populations — a pervasive problem in clinical AI where models trained on historical hospital data encounter current patient populations that differ in demographics, disease prevalence, and comorbidity patterns — future CV variants are expected to incorporate explicitly simulated shift patterns into the fold design. Shift-aware CV tests model performance under conditions that approximate expected deployment shifts rather than assuming the deployment distribution matches the training distribution.
    - **Federated CV**: For privacy-preserving ML where data cannot leave local institutions (NHS hospitals, retail banks, GP practices) due to data governance constraints, federated cross-validation protocols distribute fold computation across sites and aggregate only encrypted gradient updates or summary statistics. With differential privacy guarantees on the fold estimates, federated CV enables multi-site model evaluation without centralising patient data, aligning with the NHS's data minimisation principles and the UK-GDPR requirements under the Data Protection Act 2018.
    - **AutoML co-optimisation of evaluation design**: Future [[AutoML]] systems are expected to jointly optimise the CV design (k, stratification scheme, grouping rule, preprocessing pipeline) alongside the model architecture and hyperparameters, treating evaluation fidelity as a tunable resource allocation problem. Just as [[Hyperparameter Tuning]] optimises model configuration, evaluation design optimisation would identify the minimum-cost CV scheme that achieves a target level of estimate variance for the given dataset and model class.
    - **Regulatory integration**: The EU AI Act (fully applicable from 2026), the UK's AI regulation proposals (expected 2026-2027), and the FDA's AI/ML Action Plan all point toward cross-validation becoming a formal regulatory requirement for high-risk AI systems, rather than a community best practice. This will drive standardisation of CV protocols across sectors, analogous to how GCP (Good Clinical Practice) standardised clinical trial methodology. The Alan Turing Institute and British Standards Institution (BSI) are both involved in developing UK-specific AI evaluation standards that will reference cross-validation methodology.
    - **Benchmark contamination detection**: As foundation models are trained on increasingly large fractions of the internet, the risk that benchmark test sets appear in model training data (contamination) makes CV estimates from static benchmarks untrustworthy. Time-stamped CV — where test data is drawn from periods after model training cutoff dates — and synthetic held-out benchmark generation are emerging as contamination-resistant evaluation protocols for foundation model assessment.

  ## Research and Literature
    1. Allen, D.M. (1974). "The Relationship Between Variable Selection and Data Augmentation and a Method for Prediction." Technometrics, 16(1), 125-127.
    2. Geisser, S. (1975). "The Predictive Sample Reuse Method with Applications." Journal of the American Statistical Association, 70(350), 320-328.
    3. Stone, M. (1974). "Cross-validatory Choice and Assessment of Statistical Predictions." Journal of the Royal Statistical Society Series B, 36(2), 111-133.
    4. Stone, M. (1977). "An Asymptotic Equivalence of Choice of Model by Cross-Validation and Akaike's Criterion." Journal of the Royal Statistical Society Series B, 39(1), 44-47.
    5. Lachenbruch, P.A. and Mickey, M.R. (1968). "Estimation of Error Rates in Discriminant Analysis." Technometrics, 10(1), 1-11.
    6. Kohavi, R. (1995). "A Study of Cross-Validation and Bootstrap for Accuracy Estimation and Model Selection." Proceedings of the 14th International Joint Conference on Artificial Intelligence (IJCAI-95), 1137-1143.
    7. Efron, B. and Tibshirani, R. (1997). "Improvements on Cross-Validation: The .632+ Bootstrap Method." Journal of the American Statistical Association, 92(438), 548-560.
    8. Kearns, M. and Ron, D. (1999). "Algorithmic Stability and Sanity-Check Bounds for Leave-One-Out Cross-Validation." Neural Computation, 11(6), 1427-1453.
    9. Varma, S. and Simon, R. (2006). "Bias in Error Estimation When Using Cross-Validation for Model Selection." BMC Bioinformatics, 7(1), 91.
    10. Arlot, S. and Celisse, A. (2010). "A Survey of Cross-Validation Procedures for Model Selection." Statistics Surveys, 4, 40-79.
    11. Bergstra, J. and Bengio, Y. (2012). "Random Search for Hyper-parameter Optimisation." Journal of Machine Learning Research, 13, 281-305.
    12. Cawley, G.C. and Talbot, N.L.C. (2010). "On Over-fitting in Model Selection and Subsequent Selection Bias in Performance Evaluation." Journal of Machine Learning Research, 11, 2079-2107.
    13. Vehtari, A., Gelman, A. and Gabry, J. (2017). "Practical Bayesian Model Evaluation Using Leave-One-Out Cross-Validation and WAIC." Statistics and Computing, 27(5), 1413-1432.
    14. Hastie, T., Tibshirani, R. and Friedman, J. (2009). The Elements of Statistical Learning: Data Mining, Inference and Prediction (2nd ed.). Springer.
    15. Bergstra, J.S., Bardenet, R., Bengio, Y. and Kégl, B. (2011). "Algorithms for Hyper-parameter Optimisation." Advances in Neural Information Processing Systems (NeurIPS), 24.
    16. Pedregosa, F. et al. (2011). "Scikit-learn: Machine Learning in Python." Journal of Machine Learning Research, 12, 2825-2830.
    17. Roberts, D.R. et al. (2017). "Cross-validation Strategies for Data with Temporal, Spatial, Hierarchical, or Phylogenetic Structure." Ecography, 40(8), 913-929.
    18. Austin, P.C., Pe'er, I. and Korem, T. (2024). "Distributional Bias Compromises Leave-One-Out Cross-Validation." PLOS Computational Biology, 20(6), e1012200.
    19. Collins, G.S. et al. (2023). "TRIPOD+AI: Guidance for Reporting Predictive Models Using Regression or Machine Learning." The BMJ, 385, e078378.
    20. Rajpurkar, P. et al. (2022). "AI in Health and Medicine." Nature Medicine, 28(1), 31-38.
    21. Feurer, M. et al. (2022). "Auto-Sklearn 2.0: Hands-free AutoML via Meta-Learning." Journal of Machine Learning Research, 23(261), 1-61.
    22. Wang, L. et al. (2023). "nestedcv: An R Package for Fast Implementation of Nested Cross-Validation with Embedded Feature Selection Designed for Transcriptomics and High-Dimensional Data." Bioinformatics Advances, 3(1), vbad048.
    23. Király, F.J. et al. (2025). "Being Aware of Data Leakage and Cross-Validation Scaling in Chemometric Model Validation." Journal of Chemometrics, 39, e70026.
    24. Cory-Wright, R. et al. (2025). "Stability-Regularised Nested Cross-Validation for Model Selection." arXiv preprint.
    25. Liao, Q. et al. (2024). "Rethinking Evaluation in the Era of Time Series Foundation Models: Unknown Information Leakage Challenges." arXiv:2510.13654.
    26. Bischl, B. et al. (2023). "Hyperparameter Optimization: Foundations, Algorithms, Best Practices and Open Challenges." WIREs Data Mining and Knowledge Discovery, 13(2), e1484.
    27. Snoek, J., Larochelle, H. and Adams, R.P. (2012). "Practical Bayesian Optimization of Machine Learning Algorithms." Advances in Neural Information Processing Systems (NeurIPS), 25.
    28. Barber, R.F. et al. (2021). "Predictive Inference with the Jackknife+." The Annals of Statistics, 49(1), 486-507. (Jackknife+ and CV+ for distribution-free prediction sets.)
    29. Ambroise, C. and McLachlan, G.J. (2002). "Selection Bias in Gene Extraction on the Basis of Microarray Gene-Expression Data." PNAS, 99(10), 6562-6566. (Classic demonstration of CV leakage bias in gene selection.)
    30. Lopez de Prado, M. (2018). Advances in Financial Machine Learning. Wiley. (Purged and embargoed CV for financial time series.)
    31. Angelopoulos, A.N. and Bates, S. (2023). "Conformal Prediction: A Gentle Introduction." Foundations and Trends in Machine Learning, 16(4), 494-591.

  ## Practitioner Notes
    Cross-validation is straightforward to apply correctly in simple cases but has several non-obvious failure modes that regularly affect published ML research. The most common errors are: (1) fitting preprocessing objects on the full dataset before CV splitting, producing optimistic estimates due to preprocessing leakage; (2) applying standard k-fold to grouped, temporal, or spatial data where the i.i.d. assumption fails; (3) using single-loop CV for simultaneous model selection and performance reporting rather than nested CV; (4) interpreting k-fold CV results as if the k test errors were independent (they are correlated through shared training data), leading to incorrect statistical comparisons; and (5) failing to check that CV fold sizes are adequate — with k=10 and n=100, each validation fold contains only 10 samples, producing unreliable fold-level estimates even if the average over 10 folds is reasonable. Practitioners implementing cross-validation in [[Applied Machine Learning]] should use a pipeline-aware CV framework, choose the CV variant appropriate to their data structure, apply nested CV when both tuning and reporting, use repeated CV or multiple random seeds to assess estimate variability, and report confidence intervals or standard errors on CV metrics rather than point estimates alone. The scikit-learn documentation (https://scikit-learn.org/stable/modules/cross_validation.html) provides the most comprehensive and pedagogically clear reference for implementing CV correctly across the range of variants discussed here.

  ## Key Terminology
    - **Fold**: One of the k equally sized partitions of the training dataset used in k-fold cross-validation. Each fold serves once as the validation set and k-1 times as part of the training set across the full procedure.
    - **Training fold**: The (k-1)/k fraction of data used to train the model during one CV iteration. The model is fit exclusively on the training fold; no validation fold data is accessible to the fitting procedure.
    - **Validation fold**: The held-out 1/k fraction used to evaluate model error during one iteration. Also called the test fold in some literature, though this term is discouraged when a separate held-out test set also exists.
    - **Out-of-fold (OOF) predictions**: The collection of predictions made by each model on the fold that it was held out from during training. OOF predictions are used in ensemble stacking to train the meta-learner and in conformal prediction calibration.
    - **Outer loop (nested CV)**: The cross-validation loop whose average test error across outer folds is reported as the unbiased generalisation estimate of the model selection procedure.
    - **Inner loop (nested CV)**: The cross-validation loop used to select the best hyperparameter configuration. Runs entirely within each outer training partition; the outer test fold is never accessible to the inner loop.
    - **Stratification**: Ensuring that class proportions are approximately equal in each fold, preventing degenerate splits where a rare class is absent from the training or validation set. Critical for imbalanced classification tasks. Extended to multi-label stratification via iterative stratification for multi-label datasets.
    - **Grouped CV / Subject-wise CV**: Ensuring that all observations from one group (patient, user, device, imaging site) appear in either training or validation but never both within the same split. Prevents identity leakage that artificially inflates CV performance estimates in grouped datasets.
    - **Data leakage (CV leakage)**: Any mechanism by which information from the validation fold enters the model fitting or preprocessing steps, producing an optimistically biased CV estimate. Two main forms: (a) preprocessing leakage — fitting scalers, imputers, or feature selectors on the full dataset before CV splitting; (b) target leakage — including features that are functions of the outcome variable in the feature set. Pipeline-aware CV implementations (scikit-learn Pipeline API) prevent preprocessing leakage by design.
    - **PRESS**: Predicted Residual Sum of Squares — Allen's (1974) LOO statistic for linear regression. Computable in O(n) without refitting the model n times via the hat-matrix identity, making LOO-CV analytically tractable for linear models.
    - **PSIS-LOO**: Pareto-Smoothed Importance Sampling approximation to LOO-CV for Bayesian models, introduced by Vehtari et al. (2017). Approximates the LOO posterior predictive density by importance-weighting MCMC draws from the full-data posterior, correcting for extreme importance weights using a Pareto tail fit. Enables LOO-quality evaluation for Bayesian models without n separate posterior inference runs.
    - **CV+**: Cross-conformal prediction — a conformal prediction method that uses out-of-fold residuals from k-fold CV to construct prediction sets with marginal coverage guarantees on individual predictions. Introduced by Barber et al. (2021) as an extension of the jackknife+ method, providing finite-sample validity.
    - **Generalisation gap**: The difference between validation set error (estimated by CV) and training set error. A large generalisation gap indicates [[Overfitting]]; a small gap with high absolute error indicates underfitting. CV is the primary tool for monitoring the generalisation gap across model configurations.
    - **Model selection bias**: The upward bias in reported CV performance that arises when the same data is used for both hyperparameter selection and performance reporting without nesting the two procedures. Quantified by Varma and Simon (2006) as 0.04-0.10 AUC in typical genomic classification studies. Eliminated by nested CV.
    - **Selection instability**: The tendency of the selected hyperparameter configuration to change substantially across repeated nested CV runs due to the high variance of the inner-loop CV scores for small datasets. Addressed by stability-regularised nested CV (Cory-Wright et al. 2025) and by averaging across multiple inner-loop runs.
    - **Walk-forward validation**: The time-series CV variant in which the model is retrained at each evaluation point using all data up to that point, simulating the experience of a production forecasting system that retrains on accumulating data. The most realistic evaluation protocol for time series but computationally expensive for long histories with frequent retraining.

- ### Provenance
  - sources:: https://www.semanticscholar.org/paper/A-Study-of-Cross-Validation-and-Bootstrap-for-and-Kohavi/8c70a0a39a686bf80b76cb1b77f9eef156f6432d, https://arxiv.org/pdf/1811.12808, https://pubs.rsna.org/doi/full/10.1148/ryai.220232, https://scikit-learn.org/stable/modules/cross_validation.html, https://arxiv.org/html/2606.12552, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10125905/, https://arxiv.org/pdf/2401.16407, https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/full/10.1002/cem.70026
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
