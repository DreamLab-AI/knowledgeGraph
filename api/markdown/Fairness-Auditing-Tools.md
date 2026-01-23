- ### OntologyBlock
  id:: 0386-fairness-auditing-tools-ontology
  collapsed:: true
  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0386
    - filename-history:: ["AI-0386-fairness-auditing-tools.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0386
    - preferred-term:: Fairness Auditing Tools
    - source-domain:: ai
    - status:: complete
    - version:: 2.0
    - last-updated:: 2025-11-13
  - **Definition** [Updated 2025]
    - definition:: Fairness Auditing Tools are software libraries, platforms, and frameworks designed to detect, measure, and mitigate algorithmic bias in AI systems through automated analysis, visualization, and intervention capabilities. Leading open-source tools include [[Fairlearn]] (Microsoft, MIT license) providing fairness metrics and mitigation algorithms for Python with scikit-learn integration, [[AIF360]] (IBM, Apache-2.0 license) offering comprehensive bias detection and mitigation across the ML pipeline with 71+ fairness metrics, [[What-If Tool]] (Google, Apache-2.0) providing interactive visual interfaces for TensorFlow model exploration and counterfactual analysis, [[Aequitas]] (University of Chicago, MIT license) focusing on fairness auditing for criminal justice and policy applications, [[Amazon SageMaker Clarify]] for enterprise bias detection and explainability, and [[FairTest]] (Columbia University, MIT license) enabling statistical fairness testing with association discovery.
    - maturity:: mature
    - source:: [[Fairlearn]], [[AIF360]], [[What-If Tool]], [[SageMaker Clarify]], [[IEEE P7003-2021]], [[ISO/IEC TR 24027]], [[EU AI Act]]
    - authority-score:: 0.95
  - **Semantic Classification**
    - owl:class:: aigo:FairnessAuditingTools
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

- ## About Fairness Auditing Tools [Updated 2025]

Fairness Auditing Tools are systematic frameworks and software solutions designed to detect, measure, and mitigate bias in artificial intelligence systems. Grounded in interdisciplinary research spanning computer science, ethics, law, and social sciences, these tools operationalize fairness requirements from standards including [[IEEE P7003-2021]], [[ISO/IEC TR 24027:2021]], and the [[EU AI Act Article 10]] on data governance and bias mitigation.

- ## Leading Fairness Auditing Tools (2025)

### [[Fairlearn]] (Microsoft) [Updated 2025]
- [[Fairlearn]] is an open-source Python toolkit developed by Microsoft for assessing and improving fairness in AI systems, with strong focus on mitigating bias across sensitive attributes such as race, gender, age, and disability status
- Community-driven and actively maintained, with robust integration into the [[Azure ML]] ecosystem
- Repository: https://github.com/fairlearn/fairlearn
- Documentation: https://fairlearn.org

**Latest Features (2025)**:
- **Fairness Metrics Dashboard**: Interactive visualization dashboard for assessing model impacts across demographic groups
- **Unfairness Mitigation Algorithms**: Postprocessing algorithms (e.g., ThresholdOptimizer) and reduction algorithms (e.g., GridSearch, ExponentiatedGradient)
- **Jupyter Notebook Support**: Dashboard available as Jupyter widget for interactive analysis and reporting
- **Bias Analysis**: Supports analysis across multiple sensitive features simultaneously

### [[IBM AI Fairness 360]] (AIF360) [Updated 2025]
- Open-source Python toolkit developed by [[IBM Research]] for detecting, measuring, and mitigating bias in ML datasets and models
- Released under Apache v2.0 license with active community support
- Repository: https://github.com/Trusted-AI/AIF360

**Capabilities**:
- Supports **71 bias metrics** for comprehensive bias detection across datasets and model predictions
- **9 bias mitigation algorithms** spanning pre-processing, in-processing, and post-processing stages
- Compatible with [[scikit-learn]], [[TensorFlow]], and [[PyTorch]]
- Integrates with Jupyter Notebooks for interactive development

### [[Google What-If Tool]] (WIT) [Updated 2025]
- Interactive, code-free platform for fairness auditing and model interpretability developed by [[PAIR (People + AI Research)]] team
- Natively supports [[TensorFlow Estimators]], [[TensorFlow Serving]], and [[Google Cloud AI Platform]]

**Latest Features**:
- **Counterfactual Analysis**: Compare datapoint to nearest counterfactual with different prediction
- **Performance and Algorithmic Fairness Analysis**: Slice model performance by subgroups
- **Partial Dependence Plots**: Automatically generated plots showing how predictions change as features vary
- **Model Comparison**: Run inference on two models simultaneously and compare results

- ## See Also
- [[Algorithmic Bias]]
- [[AI Ethics]]
- [[Fairness in AI]]
- [[EU AI Act]]
- [[Machine Learning]]
