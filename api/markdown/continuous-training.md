- ### Definition
  - Continuous training is an [[MLOps]] practice that automatically retrains deployed [[Machine Learning]] models on new data whenever [[Data Drift]], [[Concept Drift]], or performance degradation is detected in production, ensuring that predictive accuracy is maintained as real-world data distributions shift over time. Unlike conventional offline training cycles that produce static model artefacts updated infrequently by human-triggered batch runs, continuous training embeds [[Model Training]] as a first-class automated stage within a [[CI-CD Automation]] pipeline, treating model weights as living artefacts that evolve alongside the data they serve. The practice extends [[DevOps]] principles — automation, reproducibility, observability, and rapid iteration — to the machine learning lifecycle, drawing on components including a [[Feature Store]] for consistent feature materialisation, a [[Data Pipeline]] for ingestion and preprocessing, a [[Model Registry]] for versioned model artefacts, [[Experiment Tracking]] for reproducibility, and [[Model Monitoring]] for production signal capture. Retraining is triggered by one of three strategies: schedule-based (e.g., nightly or weekly cron), data-volume-based (trigger when N new labelled examples accumulate), or drift-based (trigger when statistical tests detect distribution shift in input features or prediction outputs, as assessed by tools such as [[Evidently AI]] or [[Seldon Core]] Alibi Detect). The retrained candidate model undergoes automated [[Model Validation]] against held-out evaluation sets, challenger-versus-champion comparisons, and business-logic quality gates before being promoted through [[Shadow Mode Deployment]] or [[Canary Deployment]] into production — providing robust safeguards against deploying degraded models. Continuous training is most valuable for models exposed to non-stationary data distributions: recommendation systems responding to evolving user preferences, fraud-detection classifiers adapting to adversarial tactic drift, demand-forecasting models tracking market shifts, and [[Natural Language Processing]] systems whose input lexicon changes with culture and current events. The practice is distinct from [[Online Learning]], which updates model weights incrementally in real time on individual data points; continuous training collects data over a window and retrains from scratch or fine-tunes via [[Transfer Learning]] or [[Gradient Descent]] continuation, giving stronger statistical guarantees and better compatibility with validation workflows. It is also distinct from [[Continual Learning]], which focuses on avoiding catastrophic forgetting across sequential tasks; continuous training assumes a single evolving task distribution. As of 2025, continuous training is a core capability of major cloud [[MLOps]] platforms including Google [[Vertex AI]], Amazon [[SageMaker]], and Azure ML, and is supported by open-source orchestrators including [[Kubeflow]], [[MLflow]], and [[Apache Airflow]] on [[Kubernetes]] infrastructure.

- ### Semantic Classification
  - owl-class:: ai:ContinuousTraining
  - owl-role:: ExecutableProtocol | MLOpsPattern | LifecycleAutomation
  - owl-inferred:: ai:ModelLifecycleProcess, ai:DriftResponseMechanism, ai:AutomatedMLPipeline
  - belongs-to-domain:: [[MLOps]]
  - implemented-in-layer:: [[Model Training Pipeline]]

- ### Relationships
  - is-subclass-of:: [[MLOps]], [[AI Lifecycle]]
  - has-part:: [[Model Training Pipeline]], [[Drift Detection]], [[Model Evaluation]], [[Model Registry]]
  - requires:: [[Feature Store]], [[Model Registry]], [[Data Versioning]], [[Labelling Pipeline]], [[Model Monitoring]]
  - enables:: [[Model Deployment]], [[Model Serving]], [[Production ML]], [[Continuous Deployment]]
  - implements:: [[CI-CD Automation]], [[DevOps]]
  - depends-on:: [[Data Drift]], [[Concept Drift]], [[Model Monitoring]], [[Data Pipeline]]
  - supports:: [[Model Governance]], [[Continuous Deployment]], [[A-B Testing]]
  - uses:: [[Model Training]], [[Experiment Tracking]], [[Kubeflow]], [[MLflow]], [[Apache Airflow]], [[Vertex AI]], [[SageMaker]], [[Evidently AI]], [[Seldon Core]]
  - contrasts-with:: [[Online Learning]], [[Continual Learning]], [[Batch Training]]
  - related-to:: [[Continuous Integration]], [[Transfer Learning]], [[Federated Learning]], [[Deep Learning]], [[Shadow Mode Deployment]], [[Canary Deployment]], [[Model Validation]], [[Statistical Process Control]]
  - standardized-by:: [[MLOps]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:ModelTrainingPipeline))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:DriftDetection))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:ModelEvaluation))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:ModelRegistry))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:RetrainingTrigger))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:ValidationGate))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:DataPipeline))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:hasPart ai:FeatureStore))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:requires ai:FeatureStore))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:requires ai:ModelRegistry))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:requires ai:DataVersioning))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:requires ai:LabellingPipeline))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:requires ai:ModelMonitoring))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:requires ai:ExperimentTracking))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:dependsOn ai:DataDrift))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:dependsOn ai:ConceptDrift))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:enables ai:ModelDeployment))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:enables ai:ModelServing))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:enables ai:ProductionML))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:enables ai:ContinuousDeployment))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:enables ai:ModelGovernance))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:supports ai:CanaryDeployment))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:supports ai:ShadowModeDeployment))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:implements ai:CICDAutomation))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:implements ai:DevOps))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:Kubeflow))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:MLflow))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:ApacheAirflow))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:EvidentlyAI))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:SeldonCore))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:VertexAI))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:uses ai:SageMaker))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:reducesTo ai:ModelTraining))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:reducesTo ai:CICDAutomation))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:isPartOf ai:MLOps))
      SubClassOf(ai:ContinuousTraining
        ObjectSomeValuesFrom(ai:isPartOf ai:AILifecycle))
      ```

  - ## About
    - Continuous training (CT) closes the model lifecycle loop by treating trained [[Neural Network]] or classical ML model weights as mutable artefacts that must be refreshed as the world changes around them. The fundamental motivation is the phenomenon of **model decay**: a model trained on a static historical snapshot will progressively diverge from the current data distribution as [[Data Drift]] (statistical shifts in input feature distributions), [[Concept Drift]] (changes in the relationship between features and labels), or covariate shift accumulate in the production environment. Unchecked decay erodes predictive accuracy and, in high-stakes domains such as financial fraud detection, medical decision support, or real-time personalisation, can have significant commercial or safety consequences. Continuous training integrates [[Model Monitoring]] signals — latency statistics, prediction distribution histograms, cohort-level accuracy estimates, and statistical divergence tests such as the Kolmogorov-Smirnov test or Population Stability Index — directly into retraining trigger logic, so the pipeline responds to degradation evidence rather than arbitrary calendar schedules.

    - Architecturally, a continuous training system comprises several cooperating subsystems. The [[Data Pipeline]] ingests, validates, and preprocesses new production data; a [[Labelling Pipeline]] (manual, semi-automated, or programmatic via weak supervision) assigns labels to incoming examples; the [[Feature Store]] materialises features consistently between training and serving to prevent training-serving skew; [[Experiment Tracking]] logs hyperparameters, dataset versions, and evaluation metrics for every training run; and the [[Model Registry]] versionsed, annotates, and governs trained model artefacts. Orchestrators such as [[Kubeflow]] Pipelines, [[Apache Airflow]], or cloud-native equivalents such as [[Vertex AI]] Pipelines and [[SageMaker]] Pipelines schedule and execute the directed acyclic graph (DAG) of retraining steps. Upon successful training, automated [[Model Validation]] compares the challenger model against the current champion on held-out evaluation sets; if the challenger passes quality gates, it is promoted and deployed via [[Canary Deployment]] or [[Shadow Mode Deployment]] before full rollout, and [[A-B Testing]] may continue in production to confirm improvement.

    - Continuous training is distinct from but complementary to [[Online Learning]], which updates model weights from individual streaming data points at inference time. Continuous training collects data over a defined window — typically hours to days — before triggering a full or fine-tuning retraining run, providing stronger statistical robustness and compatibility with standard [[Model Evaluation]] workflows but incurring higher per-update latency. Hybrid architectures exist that combine online parameter updates for rapid adaptation with periodic continuous retraining for full model refresh. The practice also intersects with [[Transfer Learning]], where the continuous training cycle fine-tunes a pretrained base rather than training from scratch, dramatically reducing compute requirements and enabling faster adaptation. As large [[Deep Learning]] models such as [[Neural Network]] transformers enter production, [[Model Compression]] techniques (distillation, quantisation) are increasingly applied within continuous training pipelines to make retraining economically viable.

  - ## Components / Architecture
    - **Retraining triggers**
      - *Schedule-based*: Cron-driven runs (hourly, daily, weekly) — simple, predictable, but wasteful during stable periods.
      - *Data-volume-based*: Pipeline fires when N new labelled samples accumulate, ensuring sufficient signal for statistical stability.
      - *Drift-based*: [[Model Monitoring]] tools ([[Evidently AI]], [[Seldon Core]] Alibi Detect, Prometheus + custom metrics) test input distributions against training baselines; significant divergence triggers retraining. Statistical tests include Kolmogorov-Smirnov, Population Stability Index, Maximum Mean Discrepancy, and chi-squared tests for categorical features.
      - *Performance-based*: Degradation of monitored proxy metrics (click-through rate, average precision, error rates) below threshold directly triggers the pipeline.
    - **Data ingestion and feature materialisation**
      - [[Data Pipeline]] collects raw production logs, applies validation (Great Expectations or Deequ checks), and routes clean records to the [[Feature Store]].
      - [[Feature Engineering]] transforms raw signals into model-ready features; the [[Feature Store]] ensures identical transformations are applied at training and serving time, eliminating training-serving skew.
      - [[Data Versioning]] via tools such as DVC or Delta Lake snapshots the exact dataset used for each training run, enabling reproducibility and retrospective debugging.
    - **Training execution**
      - [[Model Training]] runs as a containerised job orchestrated by [[Kubeflow]] Pipelines, [[Apache Airflow]], or a cloud-native equivalent such as [[Vertex AI]] Pipelines or [[SageMaker]] Pipelines.
      - Hyperparameter values, training code version, dataset hash, and compute configuration are logged to [[Experiment Tracking]] (MLflow, Weights & Biases, Neptune).
      - Distributed training (data parallelism, model parallelism) may be employed for large [[Deep Learning]] models; [[Gradient Descent]] optimisation runs on fresh labelled data, potentially with warm-starting from incumbent weights via [[Transfer Learning]].
    - **Validation gates**
      - Automated evaluation compares the challenger model against the champion on held-out evaluation sets: standard metrics (precision/recall, F1, RMSE, AUC-ROC) and business-specific KPIs.
      - Challenger must exceed champion by a configurable margin; if not, the incumbent is retained and the run is logged as a failed promotion.
      - Fairness checks and bias audits may be part of the gate, particularly in regulated domains.
    - **Deployment and traffic management**
      - Promoted models are registered in the [[Model Registry]] with metadata tags and lineage provenance.
      - [[Continuous Deployment]] routes traffic to the new model version via [[Canary Deployment]] (gradually shift traffic) or [[Shadow Mode Deployment]] (mirror traffic to new model without surfacing predictions to users).
      - [[A-B Testing]] frameworks (Optimizely, Statsig, or in-house experimentation) randomise user cohorts and compare live prediction quality.
    - **Monitoring and feedback loop**
      - [[Model Monitoring]] continuously captures prediction distributions, latency, error rates, and business outcome proxies.
      - Feedback loops close when labels become available (e.g., fraud labels arrive days after transaction, conversion labels arrive after purchase), enabling ground-truth evaluation in production.
      - [[Statistical Process Control]] charting (X-bar, CUSUM) and anomaly detection algorithms (Isolation Forest, ADWIN, EDDM) provide early warning of emerging drift.

  - ## Use Cases / Major Families
    - **Recommendation and ranking systems**: E-commerce, streaming platforms (Netflix, Spotify), and social media feeds rely on continuous training to adapt to shifting user preferences, seasonal trends, and content catalogue changes. Recommendation models at large platforms typically retrain daily or more frequently.
    - **Fraud and anomaly detection**: Financial services (banks, payment processors) continuously retrain fraud classifiers as adversaries adapt tactics, card details rotate, and transaction patterns shift across geographies. Retraining cadences of hours to days are common.
    - **Demand forecasting and supply chain**: Retail and logistics companies retrain demand forecasting models in response to macroeconomic signals, weather events, promotional calendars, and supply disruptions, maintaining accuracy across non-stationary market conditions.
    - **Natural language processing in production**: Chatbots, search ranking, sentiment analysis, and content moderation models must adapt as vocabulary, slang, and topics evolve. Continuous fine-tuning of [[Deep Learning]] language models on fresh labelled conversational data maintains relevance.
    - **Predictive maintenance in manufacturing**: Industrial IoT sensor streams exhibit drift as machines age, ambient conditions change, and operating regimes shift; continuous training of anomaly detection and time-to-failure models maintains diagnostic accuracy in Manchester, Leeds, and Sheffield manufacturing contexts.
    - **Healthcare risk scoring**: Clinical risk models (sepsis prediction, readmission scoring) drift as clinical practice protocols, patient demographics, and treatment patterns change; continuous training supports NHS hospital deployments while maintaining governance via [[Model Governance]] frameworks.
    - **Cybersecurity and intrusion detection**: Network traffic profiles and attack vectors evolve rapidly; continuous training of intrusion detection models on current network logs is essential for maintaining detection rates.

  - ## Academic Context
    - The theoretical foundations of continuous training draw from machine learning theory on concept drift (Widmer & Kubat, 1996; Gama et al., 2014), online learning (Shalev-Shwartz, 2011), and transfer learning (Pan & Yang, 2010). The applied MLOps perspective was systematised by Sculley et al.'s influential "Hidden Technical Debt in Machine Learning Systems" (2015, NeurIPS), which identified the fragility of static production ML systems and the compounding cost of deferred maintenance. Google's 2017 whitepaper "MLOps: Continuous delivery and automation pipelines in machine learning" formalised the CT stage as the third pillar (alongside CI and CD) of the ML delivery cycle.
    - Subsequent academic and industrial research has focused on drift detection algorithms — the ADWIN (Adaptive Windowing) algorithm (Bifet & Gavalda, 2007), EDDM (Early Drift Detection Method, Baena-Garcia et al., 2006), and statistical tests including Page-Hinkley and the more recent MMD (Maximum Mean Discrepancy)-based online drift tests (Gretton et al., 2012). The Modyn system (Stojakovic et al., 2023) proposed a data-centric framework for continuous training pipelines that decouples trigger logic, data selection, and retraining execution. A 2024 meta-analysis (ResearchGate) comparing 35 peer-reviewed studies from 2015 to 2024 found that adaptive retraining strategies (which use drift signals to determine both when and how much to retrain) consistently outperform periodic and data-volume strategies on real-world datasets.
    - Recent work has extended continuous training to large language models and foundation models: parameter-efficient continuous fine-tuning using LoRA and prefix tuning dramatically reduces the compute cost of retraining cycle, while continual pre-training approaches update the base model on domain-specific corpora. The EU AI Act (2024) has created regulatory demand for continuous training transparency: Art. 17 requires high-risk AI systems to maintain training data records, and Art. 72 mandates post-market monitoring — effectively legislating continuous training and drift detection as compliance requirements rather than engineering choices for high-risk deployments.

  - ## Current Landscape (2026)
    - Continuous training has matured from a research pattern to an engineering expectation for production ML systems. Major cloud platforms have baked CT capabilities into their managed MLOps offerings: Google [[Vertex AI]] includes Vertex Pipelines with automatic model monitoring and retraining triggers, and was recognised as a Leader in the 2024 Gartner Magic Quadrant for Cloud AI Developer Services. Amazon [[SageMaker]] provides Model Monitor, Data Wrangler, and SageMaker Pipelines supporting automated retraining, with AWS holding approximately 34% market share among enterprise MLOps platforms as of 2025. Azure ML's Responsible AI toolbox integrates drift detection alongside model explanation and fairness monitoring.
    - Open-source tooling has consolidated around [[Kubeflow]] Pipelines for Kubernetes-native orchestration, [[MLflow]] for experiment tracking and model registry, [[Apache Airflow]] for general workflow orchestration, and [[Evidently AI]] for drift monitoring and reporting. Seldon Core's Alibi Detect library provides statistical drift detection algorithms (KS test, MMD, LSDD, classifier-based drift detectors) directly usable within continuous training pipelines. The Modyn academic framework (2023) has influenced thinking about data selection and sampling strategies within retraining pipelines.
    - The extension of continuous training to large foundation models and LLMs is an active frontier. Parameter-efficient fine-tuning methods (LoRA, QLoRA, prefix tuning) enable economically viable continuous fine-tuning of models with billions of parameters. Retrieval-augmented generation architectures provide a complementary pattern: updated knowledge bases enable fresh factual responses without retraining model weights. A 2026 patent (USPTO 12518213) on "Sustainable retraining for production machine learning" addresses energy-efficiency considerations in retraining frequency decisions, reflecting growing awareness of the carbon cost of continuous model updates.
    - [[Federated Learning]] is increasingly integrated with continuous training patterns for privacy-sensitive domains: mobile keyboard prediction, healthcare, and financial services use federated continuous training to adapt models on distributed edge data without centralising sensitive records.

  - ## UK Context
    - The United Kingdom has significant institutional investment in the MLOps and continuous training ecosystem. The Alan Turing Institute — the national institute for data science and artificial intelligence — has funded research programmes on responsible ML system maintenance, data governance, and model monitoring. The University of Manchester's £120 million AI research hub (opened 2024) includes embedded industry partnerships focused on production AI systems in advanced manufacturing, healthcare, and logistics — all contexts that demand continuous training for non-stationary data.
    - The University of Edinburgh's School of Informatics has a long track record in machine learning systems research; the Edinburgh DataShare infrastructure and collaborations with NHS Scotland create applied continuous training use cases in clinical risk modelling. University College London's DARK Lab and Centre for Artificial Intelligence have published work on concept drift and sequential decision-making under distribution shift. Imperial College London's Data Science Institute and Centre for Process Systems Engineering contribute continuous learning work in industrial monitoring and process control contexts.
    - In Northern England, continuous training is relevant to the manufacturing and logistics sectors in the Sheffield-Rotherham Advanced Manufacturing Innovation District, the Leeds Digital Festival ecosystem, and the Newcastle-based HealthTech cluster. NHS trusts across England are deploying clinical risk models that require drift monitoring and retraining as patient demographics, clinical protocols, and electronic health record structures evolve. The NHS AI Lab (within NHSX) has produced guidance on post-deployment model monitoring that aligns with continuous training best practice. UKRI Innovate UK programmes have funded Northern English SMEs deploying production ML systems with continuous retraining pipelines in quality inspection, predictive maintenance, and demand forecasting.

  - ## Future Directions (2026-2030)
    - **Continuous training for foundation models**: As enterprises integrate fine-tuned versions of large language models and vision-language models into products, continuous fine-tuning cycles using parameter-efficient methods (LoRA, QLoRA) will become standard practice, with careful management of catastrophic forgetting via continual learning constraints.
    - **Autonomous retraining agents**: Agentic AI systems will manage continuous training pipelines end-to-end — selecting data, triggering runs, evaluating candidates, and making promotion decisions — with human-in-the-loop escalation only for anomalous cases. This merges [[CI-CD Automation]] principles with autonomous AI system management.
    - **Energy-efficient retraining**: Carbon-aware scheduling of retraining workloads (prioritising low-carbon grid windows), coupled with data selection strategies that minimise the training data required per update, will become standard practice as sustainability regulations tighten. This is an active research area as of 2025 (USPTO 12518213).
    - **Regulatory compliance as a driver**: The EU AI Act's post-market monitoring requirements (Art. 72) and the UK's forthcoming AI Bill will mandate continuous monitoring and retraining documentation for high-risk AI systems. Compliance tooling will embed continuous training into governance frameworks.
    - **Federated continuous training at scale**: Privacy-preserving continuous training via federated learning will mature with improved communication efficiency, differential privacy guarantees, and better handling of heterogeneous client data distributions.
    - **Continual pre-training of large models**: Foundation model providers will shift toward continuous pre-training on curated web crawls and domain corpora, blurring the line between initial model development and operational maintenance.

  - ## Research & Literature
    - 1. Widmer, G., & Kubat, M. (1996). Learning in the presence of concept drift and hidden contexts. *Machine Learning*, 23(1), 69–101.
    - 2. Gama, J., Žliobaitė, I., Bifet, A., Pechenizkiy, M., & Bouchachia, A. (2014). A survey on concept drift adaptation. *ACM Computing Surveys*, 46(4), 44. https://doi.org/10.1145/2523813
    - 3. Sculley, D., et al. (2015). Hidden technical debt in machine learning systems. *Advances in Neural Information Processing Systems (NeurIPS)*, 28, 2503–2511.
    - 4. Pan, S. J., & Yang, Q. (2010). A survey on transfer learning. *IEEE Transactions on Knowledge and Data Engineering*, 22(10), 1345–1359.
    - 5. Shalev-Shwartz, S. (2011). Online learning and online convex optimization. *Foundations and Trends in Machine Learning*, 4(2), 107–194.
    - 6. Bifet, A., & Gavalda, R. (2007). Learning from time-changing data with adaptive windowing. In *Proceedings of SDM 2007*, 443–448.
    - 7. Baena-Garcia, M., et al. (2006). Early drift detection method. In *Proceedings of the 4th ECML PKDD International Workshop on Knowledge Discovery from Data Streams*.
    - 8. Gretton, A., et al. (2012). A kernel two-sample test. *Journal of Machine Learning Research*, 13, 723–773.
    - 9. Google Cloud. (2017). MLOps: Continuous delivery and automation pipelines in machine learning. Google Cloud Architecture Center. https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning
    - 10. Stojakovic, D., et al. (2023). Modyn: Data-centric machine learning pipeline orchestration. *arXiv:2312.06254*. https://arxiv.org/abs/2312.06254
    - 11. Shankar, S., et al. (2022). Operationalizing machine learning: An interview study. *arXiv:2209.09125*.
    - 12. Klaise, J., et al. (2020). Alibi detect: Algorithms for outlier, adversarial and concept drift detection. *Journal of Machine Learning Research*, 23(193), 1–6.
    - 13. Huyen, C. (2022). *Designing Machine Learning Systems*. O'Reilly Media. (Chapter 9: Continual Learning and Test in Production)
    - 14. Zaharia, M., et al. (2018). Accelerating the machine learning lifecycle with MLflow. *IEEE Data Engineering Bulletin*, 41(4), 39–45.
    - 15. Bisong, E. (2019). *Building Machine Learning and Deep Learning Models on Google Cloud Platform*. Apress. (Vertex AI predecessor: GCP AI Platform.)
    - 16. Baylor, D., et al. (2017). TFX: A TensorFlow-based production-scale machine learning platform. In *Proceedings of KDD 2017*, 1387–1395. https://doi.org/10.1145/3097983.3098021
    - 17. Polyzotis, N., et al. (2018). Data lifecycle challenges in production machine learning. *ACM SIGMOD Record*, 47(2), 17–28.
    - 18. Bottou, L. (2010). Large-scale machine learning with stochastic gradient descent. In *Proceedings of COMPSTAT 2010*, 177–186.
    - 19. Lu, J., et al. (2019). Learning under concept drift: A review. *IEEE Transactions on Knowledge and Data Engineering*, 31(12), 2346–2363.
    - 20. Kairouz, P., et al. (2021). Advances and open problems in federated learning. *Foundations and Trends in Machine Learning*, 14(1-2), 1–210.
    - 21. McMahan, B., et al. (2017). Communication-efficient learning of deep networks from decentralized data. In *Proceedings of AISTATS 2017*, 1273–1282.
    - 22. Lwakatare, L.E., et al. (2019). A taxonomy of software engineering challenges for machine learning systems: An empirical investigation. In *Proceedings of XP 2019*, 227–243.
    - 23. Paleyes, A., et al. (2022). Challenges in deploying machine learning: A survey of case studies. *ACM Computing Surveys*, 55(6), 114.
    - 24. Kleppmann, M. (2017). *Designing Data-Intensive Applications*. O'Reilly Media. (Chapter 11: Stream Processing — foundational for event-driven CT triggers.)
    - 25. AWS. (2024). Amazon SageMaker Model Monitor — documentation. https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html
    - 26. European Parliament. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council on artificial intelligence (AI Act). Official Journal of the European Union. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689
    - 27. Nguyen, T.T., et al. (2024). Model monitoring, data drift detection, and efficient model retraining: A review. *ResearchGate*. https://www.researchgate.net/publication/395703466

- ### Provenance
  - sources:: https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning; https://arxiv.org/abs/2312.06254; https://doi.org/10.1145/2523813; https://www.evidentlyai.com/ml-in-production/data-drift; https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689; https://arxiv.org/pdf/2506.13838; https://www.researchgate.net/publication/395703466
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm