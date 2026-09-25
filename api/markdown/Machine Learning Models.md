Categories and types of machine learning algorithms including classification models, regression models, clustering algorithms, and neural networks, each designed for specific prediction and pattern recognition tasks.

### Semantic Classification

### Content

## Model Categories

### Classification Models

- Category prediction
- Label assignment
- Discrete outputs
- Spam detection
- Disease diagnosis

  ### Regression Models

- Continuous value prediction
- Price forecasting
- Temperature estimation
- Sales projection
- Quantity prediction

  ## Classification Algorithms

  ### Logistic Regression

- Binary classification
- Multi-class support
- Probability estimation
- Threshold decisions
- Interpretable results

  ### Support Vector Machine (SVM)

- Hyperplane separation
- Kernel functions
- Non-linear classification
- High-dimensional data
- Margin maximisation

  ### k-Nearest Neighbours (kNN)

- Distance-based classification
- No training phase
- Instance-based learning
- Neighbourhood voting
- Simple implementation

  ### Naive Bayes

- Probabilistic classifier
- Bayes theorem application
- Independence assumption
- Text classification
- Fast computation

  ### Decision Trees

- Rule-based decisions
- Feature splits
- Interpretable structure
- Overfitting risk
- Ensemble foundation

  ### Random Forest

- Multiple decision trees
- Ensemble averaging
- Reduced overfitting
- Feature importance
- Robust predictions

  ## Regression Algorithms

  ### Linear Regression

- Straight line fitting
- Coefficient estimation
- Simple relationships
- Baseline model
- Quick implementation

  ### Multiple Linear Regression

- Multiple input features
- Multivariate analysis
- Combined effects
- Feature weighting
- Correlation handling

  ### Polynomial Regression

- Non-linear relationships
- Curve fitting
- Higher-order terms
- Flexibility increase
- Overfitting caution

  ### Regularised Regression

- Lasso (L1)
- Ridge (L2)
- Elastic Net
- Overfitting prevention
- Feature selection

  ## Versatile Algorithms

  ### Decision Trees

- Classification and regression
- Tree-like structure
- Feature splitting
- Interpretability
- Ensemble building

  ### Random Forest

- Both task types
- Bagging ensemble
- Parallel trees
- Variance reduction
- Robust performance

  ### Support Vector Machines

- SVC (Classification)
- SVR (Regression)
- Kernel flexibility
- High-dimensional support
- Margin optimisation

  ### Neural Networks

- Universal approximators
- Deep architectures
- Complex patterns
- Multiple outputs
- Task flexibility

  ## Model Selection Criteria

  ### Problem Type

- Categorical output: Classification
- Continuous output: Regression
- Group discovery: Clustering
- Dimensionality: Reduction
- Sequence: Time series

  ### Data Characteristics

- Dataset size
- Feature count
- Label availability
- Noise levels
- Distribution shape

  ### Performance Metrics

  #### Classification Metrics

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC

  #### Regression Metrics

- MSE (Mean Squared Error)
- MAE (Mean Absolute Error)
- RMSE
- R-squared
- Adjusted R-squared

  ## Ensemble Methods

  ### Bagging

- Bootstrap sampling
- Parallel training
- Averaging predictions
- Variance reduction
- Random Forest

  ### Boosting

- Sequential learning
- Error correction
- Weighted samples
- Bias reduction
- XGBoost, AdaBoost

  ### Stacking

- Meta-learning
- Model combination
- Level-wise training
- Diverse base models
- Superior performance

  ## 2024 Algorithm Importance

  ### Top Algorithms

- Random Forest (versatility)
- Gradient Boosting (accuracy)
- Neural Networks (complexity)
- SVM (robustness)
- Logistic Regression (interpretability)

  ### AI Job Market

- Algorithm understanding essential
- Framework proficiency
- Model selection skills
- Performance tuning
- Deployment expertise

  ## Model Functions

  ### Core Capabilities

- Pattern recognition
- Prediction generation
- Data-driven learning
- Error improvement
- Adaptive performance

  ### Application Areas

- Healthcare diagnosis
- Financial prediction
- Image recognition
- Natural language
- Recommendation systems

### Current Landscape (2026)

- Reasoning models became the default paradigm: DeepSeek released the open-weight R1 (20 January 2025, MIT-licensed, 671B/37B-active MoE) matching OpenAI's o1 at roughly 30x lower API cost, and OpenAI's GPT-5 (7 August 2025) unified fast generation and chain-of-thought reasoning into a single routed system, folding the earlier o1/o3 line into the mainline.
- The frontier consolidated around a handful of labs — OpenAI (GPT-5.x), Google DeepMind (Gemini 2.5 Pro, released 25 March 2025, native-multimodal MoE on TPU v5p), Anthropic (Claude Opus 4.5, November 2025, leading agentic coding and computer-use), xAI (Grok 4) and DeepSeek — competing on agentic coding (SWE-bench Verified), long context (1M+ tokens) and autonomous computer use (OSWorld).
- "MoE-ification" of the open ecosystem: nearly every major open-weight model released in 2025–2026 (Llama 4 Scout/Maverick, Qwen 3.x, Kimi K2, DeepSeek V3/V4, OpenAI's gpt-oss) moved from dense transformers to sparse mixture-of-experts, decoupling total parameters (memory) from active parameters (per-token compute).
- Open-weight parity: by mid-2026 open models from DeepSeek, Alibaba (Qwen), Meta (Llama) and Mistral score within single digits of closed frontier models on mainstream coding, extraction and summarisation tasks, at roughly 8–12x lower inference cost, leaving a narrowing closed-model advantage mainly in hardest multi-step reasoning and freshest world knowledge.
- Regulation crystallised around general-purpose AI: the EU AI Act's GPAI obligations entered into application on 2 August 2025, backed by the voluntary GPAI Code of Practice (published 10 July 2025, covering Transparency, Copyright, and Safety & Security), with a training-content disclosure template and a 10^25 FLOP threshold defining "systemic risk" models.
- Enforcement teeth arrived in 2026: from 2 August 2026 the European Commission and AI Office can enforce GPAI obligations with fines, models placed on the market before 2 August 2025 must comply by 2 August 2027, and providers submit documentation via the EU SEND platform.
- Open frontier challenges as of 2026 include the high memory footprint and low-utilisation inefficiency of sparse MoE serving, reliability and hallucination in long-horizon agentic workflows, evaluation saturation (benchmarks like AIME and SWE-bench being maxed out), and reconciling rapid open-weight proliferation with systemic-risk governance.

### References

- 1. European Commission — Shaping Europe's Digital Future (2026). AI Act — regulatory framework and application timeline. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- 2. European Commission (2025). The General-Purpose AI Code of Practice. https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- 3. Epoch AI (2025). What went into training DeepSeek-R1? https://epoch.ai/gradient-updates/what-went-into-training-deepseek-r1
- 4. DigitalOcean (2026). The MoE-ification of the Open Model Ecosystem, and What It Means for Inference Cost. https://www.digitalocean.com/community/tutorials/mixture-of-experts-inference-cost
- 5. IBM (2026). A list of large language models (LLMs). https://www.ibm.com/think/topics/large-language-models-list

### Provenance

