- ### Definition
  - A [[Classification Threshold]] is a scalar decision boundary applied to the continuous probabilistic output of a [[Classifier]] in order to convert a real-valued score into a discrete class assignment. In [[Binary Classification]], the most common setting, a model typically produces a posterior probability estimate p(y=1|x) ∈ [0,1] for the positive class; the threshold τ ∈ [0,1] maps this score to a binary label: the prediction is positive if p ≥ τ and negative otherwise. Although the conventional default threshold is 0.5 (reflecting equal prior class weights and symmetric misclassification costs), this value is rarely optimal in practice. Threshold selection is therefore a critical post-training calibration step that fundamentally shapes the operating point of a deployed model along the [[ROC Curve]] or [[Precision-Recall Curve]].
  - Adjusting τ shifts the trade-off between two families of error: lowering the threshold increases the true positive rate (sensitivity, recall) at the cost of more false positives (reduced specificity and precision); raising it does the reverse, capturing fewer true positives while suppressing false alarms. This trade-off is formally captured by the receiver operating characteristic — a curve that sweeps τ from 0 to 1 and plots the true positive rate against the false positive rate at each operating point. The area under this curve ([[AUC-ROC]]) summarises threshold-agnostic discriminative performance, whilst the [[Precision-Recall Curve]] provides complementary insight under severe class imbalance where the positive class is rare.
  - Multiple principled strategies exist for choosing an optimal threshold. Youden's J statistic (J = sensitivity + specificity − 1) identifies the point of maximum balanced performance on the [[ROC Curve]]. Cost-sensitive optimisation explicitly encodes the asymmetric real-world costs of false positives and false negatives — a critical consideration in [[Medical Diagnosis AI]], [[Fraud Detection]], and [[Credit Scoring]] where misclassification costs differ by orders of magnitude. More recent approaches include Mixed Integer Linear Programming formulations that optimise arbitrary linear metrics and constraints simultaneously, and quantile-based thresholding that re-parameterises τ as a score quantile compatible with stochastic gradient descent. In multi-class settings, thresholds extend to one-versus-rest decision boundaries or to softmax argmax selection, and multi-label classifiers require per-class sigmoid thresholds tuned independently. The [[Confusion Matrix]] fully characterises model performance at any fixed threshold, providing the true positive, false positive, true negative, and false negative counts from which all standard metrics — precision, recall, [[F1 Score]], specificity, and [[Matthews Correlation Coefficient]] — are derived. [[Probability Calibration]] ensures that the raw model score accurately reflects true class probability prior to thresholding, which is essential when the threshold is to be interpreted in probabilistic rather than purely operational terms. Under [[AI Governance]] frameworks, threshold choices must be documented, justified with reference to application-specific cost structures, and audited for differential impact across demographic subgroups to satisfy [[AI Fairness]] requirements embedded in the EU AI Act and UK MHRA guidance for Software as a Medical Device.

- ### Semantic Classification
  - owl-class:: ai:ClassificationThreshold
  - owl-role:: Concept | DecisionMechanism | EvaluationComponent
  - owl-inferred:: ai:ModelCalibrationTechnique, ai:OperatingPointSelector, ai:FairnessIntervention
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[ModelEvaluationLayer]]

- ### Relationships
  - is-subclass-of:: [[Model Evaluation]], [[Decision System]]
  - has-part:: [[ROC Curve]], [[Precision-Recall Curve]], [[Youden J Statistic]], [[Operating Point]]
  - requires:: [[Classifier]], [[Probability Calibration]], [[Supervised Learning]], [[Labelled Dataset]]
  - depends-on:: [[Binary Classification]], [[Confusion Matrix]], [[Loss Function]], [[Model Evaluation]]
  - enables:: [[Decision System]], [[Risk Management]], [[Cost-Sensitive Learning]], [[Clinical Decision Support]], [[Fraud Detection]], [[Anomaly Detection]], [[AI Fairness Audit]]
  - implements:: [[Cost-Sensitive Learning]], [[Threshold Optimisation]], [[Operating Point Selection]]
  - supports:: [[AI Fairness]], [[AI Governance]], [[Explainable AI]], [[Model Card]]
  - uses:: [[AUC-ROC]], [[F1 Score]], [[Precision]], [[Recall]], [[Matthews Correlation Coefficient]], [[Specificity]]
  - contrasts-with:: [[Regression]], [[Hard Label]], [[Soft Label]], [[Ranking]]
  - related-to:: [[Binary Classification]], [[Multi-Label Classification]], [[Class Imbalance]], [[Calibration]], [[Youden J Statistic]], [[Demographic Parity]], [[Equal Opportunity Fairness]]
  - standardized-by:: [[ISO/IEC 22989]], [[NIST AI RMF]], [[EU AI Act]], [[MHRA SaMD Guidance]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:ROCCurve))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:PrecisionRecallCurve))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:YoudenJStatistic))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:OperatingPoint))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:CostMatrix))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:ConfusionMatrixSlice))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:hasPart ai:F1Score))

  ## Dependency Relationships
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:requires ai:Classifier))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:requires ai:ProbabilityCalibration))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:requires ai:SupervisedLearning))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:dependsOn ai:BinaryClassification))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:dependsOn ai:ConfusionMatrix))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:dependsOn ai:LossFunction))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:dependsOn ai:LabelledDataset))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:dependsOn ai:ModelEvaluation))

  ## Capability Relationships
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:DecisionSystem))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:RiskManagement))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:FraudDetection))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:ClinicalDecisionSupport))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:AIFairnessAudit))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:AnomalyDetection))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:enables ai:CostSensitiveLearning))

  ## Implementation Relationships
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:implements ai:ThresholdOptimisation))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:implements ai:CostSensitiveLearning))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:implements ai:OperatingPointSelection))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:supports ai:AIFairness))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:supports ai:AIGovernance))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:supports ai:ExplainableAI))

  ## Reduction Relationships
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:reducesTo ai:BinaryDecision))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:reducesTo ai:OperatingPoint))
      SubClassOf(ai:ClassificationThreshold
        ObjectSomeValuesFrom(ai:reducesTo ai:PrecisionRecallTradeoff))

  ## About
    A classification threshold is the operational hinge point of any probabilistic classifier: it is the scalar value that transforms a continuous model output — typically a posterior class probability or a discriminant score — into an actionable binary or multi-class decision. The concept is foundational in [[Machine Learning]] and [[Statistical Learning Theory]], underpinning every deployed classification system from email spam filters to cancer screening tools, credit risk models, and autonomous vehicle perception pipelines.

    The default threshold of 0.5 assumes that the prior probability of the positive class is equal to that of the negative class and that misclassifying a positive as a negative carries the same cost as the reverse. Both assumptions are almost universally violated in real-world applications. Class imbalance — where the positive class is far rarer than the negative — is endemic in fraud detection (fraud rates of 0.1–1%), medical screening (rare disease prevalence), and cybersecurity (intrusion frequency). In such settings, a threshold of 0.5 causes the classifier to default to the majority class, achieving high accuracy whilst detecting almost no positive cases. Threshold adjustment is the simplest and most computationally efficient remedy: by lowering τ, practitioners can recover recall at an acceptable precision cost without retraining the model.

    The theoretical basis for threshold selection draws on statistical decision theory. The Bayes optimal threshold minimises expected misclassification cost: τ* = C(FP) / [C(FP) + C(FN)], where C(FP) and C(FN) are the costs of false positive and false negative errors respectively. When costs are equal, τ* = 0.5; when false negatives are twice as costly as false positives (as is common in medical screening), τ* = 0.33. This formal framing makes explicit what practitioners have long known intuitively: threshold selection is fundamentally a domain-knowledge problem, not a statistical one. The UK MHRA and the US FDA both emphasise that for Software as a Medical Device (SaMD), the classification threshold should be set using clinical rather than statistical reasoning, and must be validated on data representative of the intended patient population.

  ## Components / Architecture

    **ROC Curve Analysis**
    - The [[ROC Curve]] sweeps τ from 0 to 1, plotting (FPR, TPR) pairs at each threshold. The curve provides a model-level summary of discriminative ability (AUC-ROC) whilst simultaneously showing all achievable operating points. Practitioners select τ at the operating point that best satisfies domain constraints.
    - Youden's J statistic: J = sensitivity + specificity − 1; maximised at the inflection point of the ROC curve. Equivalent to maximising balanced accuracy (the arithmetic mean of sensitivity and specificity).
    - The F1-optimal threshold is found by sweeping τ and computing F1 = 2TP/(2TP + FP + FN) at each point; this is the standard approach in information retrieval and text classification tasks.

    **Precision-Recall Curve Analysis**
    - The [[Precision-Recall Curve]] is preferred under severe class imbalance because the ROC curve can appear optimistic when the negative class dominates. It plots precision = TP/(TP+FP) against recall = TP/(TP+FN) as τ varies.
    - Average Precision (AP) — the area under the precision-recall curve — is the standard evaluation metric in [[Object Detection]] (COCO mAP) and [[Information Retrieval]].
    - The threshold maximising F-beta score (Fβ = (1+β²)·precision·recall / (β²·precision + recall)) is selected by sweeping the PR curve with appropriate β weighting.

    **Cost-Sensitive Threshold Selection**
    - Cost matrix C encodes application-specific misclassification costs: C[0,1] (false positive cost) and C[1,0] (false negative cost). The optimal threshold is τ* = C[0,1] / (C[0,1] + C[1,0]).
    - In credit risk modelling, C[FN] reflects average loan default loss (£tens of thousands); C[FP] reflects opportunity cost of a rejected good applicant (£hundreds).
    - In medical screening, C[FN] may be arbitrarily high (missed cancer); C[FP] is the cost of an unnecessary biopsy (anxiety, procedure cost).

    **Fairness-Aware Threshold Selection**
    - Group-specific thresholds are learned per demographic subgroup to equalise false positive rates (demographic parity) or true positive rates (equal opportunity) across groups.
    - The EU AI Act and UK Equality Act 2010 both require that AI classification systems used in high-stakes domains do not impose disparate impacts on protected groups.
    - Fairlearn (Microsoft) and IBM AI Fairness 360 provide open-source tooling for group-specific threshold optimisation with fairness constraints.

    **Advanced Algorithmic Approaches**
    - Mixed Integer Linear Programming (MILP): formulates threshold selection as an optimisation problem over arbitrary linear metric constraints; globally optimal but computationally intensive for large candidate sets.
    - Quantile-based thresholding: reparameterises τ as the q-th quantile of predicted scores, converting rate constraints into differentiable surrogates compatible with SGD end-to-end training.
    - Post-hoc simplex search (a posteriori tuning): for deep multi-class networks, searches the probability simplex to maximise macro-F1, accuracy, or custom objective functions.

  ## Use Cases / Major Families

    **Medical Diagnosis and Clinical Decision Support**
    - Radiology AI (chest X-ray, mammography, CT): threshold set to achieve clinically mandated sensitivity ≥ 95% for specific pathologies; specificity adjusted based on radiologist workload capacity and downstream biopsy costs. NHS NHSX AI Award projects at Guy's and St Thomas' NHS Trust and Moorfields Eye Hospital deploy AI classifiers with MHRA-validated thresholds for diabetic retinopathy and AMD screening.
    - Pathology AI: whole-slide image classifiers for cancer detection at Imperial College Healthcare and University College Hospital use calibrated thresholds reviewed by clinical governance boards under the UK MDR 2002 (as amended) framework.
    - Sepsis early warning: EPIC Sepsis Model (deployed in the US and trialled in the UK) applies a severity-stratified threshold to alert clinical staff; threshold tuning is central to reducing alarm fatigue.

    **Fraud Detection and Financial Services**
    - Payment card fraud: Mastercard and Visa deploy real-time transaction classifiers with thresholds that balance fraud catch rate against false-alarm load on manual review queues. Lowering the threshold by 0.05 can increase fraud recall by 15% at the cost of a 3× increase in alert volume.
    - Mortgage and credit risk: under the Consumer Credit Act 1974 (UK) and the EU Consumer Credit Directive, automated credit refusal systems must be explainable; the threshold and its cost rationale must be documented in the credit decision audit trail.
    - Anti-money laundering (AML): Financial Conduct Authority (FCA) guidance requires UK banks to validate AML classifier thresholds on representative transaction samples annually.

    **Cybersecurity and Intrusion Detection**
    - Network intrusion detection systems (NIDS): extremely low positive-class prevalence (attack traffic is <0.1% of all packets) means default 0.5 thresholds are useless; operating thresholds of 0.01–0.1 are common, balanced against Security Operations Centre analyst capacity.
    - Malware classification: endpoint detection systems from CrowdStrike, Darktrace (Cambridge-founded), and Sophos (Oxford-based) use adaptive thresholds that shift based on threat intelligence feed confidence scores.

    **Spam and Content Moderation**
    - Email spam filters (SpamAssassin, Gmail): user-configurable sensitivity settings correspond directly to threshold adjustment. Google's Gmail achieves >99.9% spam catch rate with <0.1% false positive rate through ensemble classifier threshold tuning.
    - Social media content moderation: Meta, YouTube, and TikTok use multiple cascaded classifiers each with independently tuned thresholds for hate speech, misinformation, and CSAM detection.

    **Environmental and Scientific Applications**
    - Species presence/absence classifiers: ecological AI models predicting species distribution (used by UK Centre for Ecology and Hydrology) apply thresholds optimised for conservation priority rather than statistical accuracy.
    - Remote sensing: land cover and deforestation classifiers (ESA Copernicus, UK Space Agency projects) use precision-optimised thresholds to minimise false change detection alerts.

  ## Academic Context

    The classification threshold has roots in signal detection theory formalised by Peterson, Birdsall, and Fox (1954) during radar signal processing research for the US Air Force, which introduced the ROC curve as a tool for comparing detection systems at different operating points. Swets (1973) transported the ROC framework into psychological and medical testing research. Green and Swets (1966) published the foundational text "Signal Detection Theory and Psychophysics," establishing the mathematical relationship between threshold, sensitivity, and specificity that underlies modern ML evaluation practice.

    The connection to [[Statistical Decision Theory]] was formalised by Wald (1950) and developed in the context of pattern recognition by Duda and Hart (1973) in "Pattern Classification and Scene Analysis." The cost-sensitive framework for threshold selection was thoroughly analysed by Elkan (2001) in his landmark paper "The Foundations and Implications of Risk Scores," and by Domingos (1999) in "MetaCost: A General Method for Making Classifiers Cost-Sensitive."

    The calibration of probability scores prior to thresholding — ensuring that p(y=1|x) genuinely reflects a class probability — was systematically studied by Platt (1999), who introduced Platt scaling (a logistic regression correction applied to SVM outputs), and by Niculescu-Mizil and Caruana (2005), who benchmarked calibration methods across classifiers. Venn prediction (Vovk et al., 2005) and conformal prediction (Shafer and Vovk, 2008) provide distribution-free calibrated confidence intervals under which thresholds carry formal coverage guarantees.

    Threshold selection under class imbalance was comprehensively surveyed by He and Garcia (2009) and by Branco, Torgo, and Ribeiro (2016). The GHOST (Generating Hypotheses and Optimal Threshold Selection) algorithm by Greenbaum et al. (2022) provides a statistically principled approach to threshold optimisation for imbalanced molecular datasets. Multi-class threshold optimisation — the a posteriori tuning approach — was systematically analysed by Collell et al. (2016) and further developed in the FlexOVA framework by Zhu et al. (2022).

    The fairness dimension of threshold selection crystallised with Hardt, Price, and Srebro (2016) "Equality of Opportunity in Supervised Learning," which demonstrated that per-group threshold calibration is necessary and sufficient to achieve the equal opportunity fairness criterion. Chouldechova (2017) proved the impossibility theorem showing that three intuitively appealing fairness criteria (calibration within groups, balance for the positive class, balance for the negative class) cannot simultaneously be satisfied when base rates differ across groups — an insight with profound implications for any system that uses threshold-based classification in demographically heterogeneous populations.

  ## Current Landscape (2026)

    As of 2026, classification threshold selection is a mature but still actively researched topic. The EU AI Act (entered into force August 2024, full compliance for high-risk systems required by August 2026) mandates that high-risk AI systems — including those used in employment, credit, healthcare, and law enforcement — maintain records of the decision threshold used, the rationale for its selection, and the fairness audit results disaggregated by protected group. This has catalysed significant commercial investment in automated threshold documentation tooling, with MLflow, Weights & Biases, and Vertex AI all introducing threshold-tracking capabilities in their model registries during 2024–2025.

    The UK MHRA AI Airlock programme (launched May 2024, second cohort January 2025) provides a regulatory sandbox for SaMD developers to test AI classifiers — including their threshold configurations — in a supervised NHS environment before full UKCA marking. This has proven particularly important for radiology and pathology AI, where the MHRA now requires post-market surveillance data on threshold drift as patient population demographics evolve over time. The Post Market Surveillance Requirements Regulation (implemented June 2025) requires Periodic Safety Update Reports (PSURs) for higher-risk Class IIa, IIb, and III devices, which must include threshold performance monitoring data.

    In the financial services sector, the UK Financial Conduct Authority's 2024 AI governance framework explicitly requires UK-regulated firms to document and justify classification thresholds in automated decision systems for credit, insurance, and fraud, with particular attention to differential false positive rates that could constitute indirect discrimination under the Equality Act 2010.

    Research frontiers in 2025–2026 include threshold learning end-to-end within neural architectures (rather than post-hoc tuning), conformal prediction as a principled alternative that replaces a fixed threshold with adaptive prediction sets, and threshold-invariant fairness formulations that seek classifiers whose fairness properties hold across all threshold values rather than at a specific operating point. The Flexible Multi-Class Cost-Sensitive Thresholding paper (Zhu et al., Springer ADAC, 2025) extends cost-sensitive multi-class thresholding to arbitrary metric objectives with polynomial-time algorithms, representing the current state of the art for complex multi-class threshold optimisation.

  ## UK Context

    The UK has significant academic and industrial presence in the field of classification threshold methodology. The Alan Turing Institute (headquartered at the British Library, London) has produced research on threshold selection for fairness-aware machine learning, with contributions from David Leslie (ethics of algorithms) and Novi Quadrianto (fair machine learning). UCL's Statistical Science and Computer Science departments host active research programmes on calibration and uncertainty quantification relevant to threshold setting, with the CSML (Computational Statistics and Machine Learning) group led by Ricardo Silva working on probabilistic classification and threshold optimisation.

    The University of Edinburgh's Informatics department has a long tradition in probabilistic machine learning and classifier calibration, with work by Amos Storkey and Michael Gutmann on calibrated density models. Cambridge's Machine Learning Group (Zoubin Ghahramani, now at Google Brain Cambridge) developed kernel methods and Gaussian process classifiers where principled threshold selection is built into the probabilistic inference framework. Imperial College London's Data Science Institute has applied cost-sensitive threshold methods to clinical prediction models for the NHS, including sepsis risk stratification and deterioration prediction tools used at Imperial College Healthcare NHS Trust.

    Manchester's £120 million AI research hub (opened 2024) is actively working on threshold selection for industrial AI including manufacturing quality control, where the precision-recall trade-off directly impacts yield rates in semiconductor fabrication and pharmaceutical batch release. Sheffield and Leeds universities contribute through their Centre for Machine Learning and Health (CMHL) partnership, which focuses on threshold calibration for diagnostic AI deployed in Northern England NHS trusts.

    Commercial UK companies with notable threshold methodology work include Darktrace (Cambridge), which uses adaptive thresholds in its cyber AI platform that update in real time as network behaviour evolves; Benevolent AI (London), which applies calibrated thresholds to drug candidate classifiers; and Faculty AI (London), which has advised the NHS and government agencies on threshold documentation under the Government AI Playbook.

  ## Future Directions (2026-2030)

    **Conformal Prediction as Threshold Replacement.** The most significant near-term shift is likely to be the replacement of fixed classification thresholds with adaptive prediction sets from conformal prediction. Rather than outputting a class label for a fixed τ, conformal classifiers output the minimal set of classes whose true coverage is guaranteed at a user-specified confidence level (e.g., 90%). This provides rigorous frequentist coverage without assumptions about the distribution of the classifier's scores and eliminates the threshold-selection problem by replacing it with a confidence-level parameter that has a directly interpretable statistical meaning.

    **Threshold Learning End-to-End.** Several research groups are exploring architectures that learn optimal thresholds jointly with model parameters during training, rather than treating threshold selection as a post-hoc tuning step. Differentiable threshold learning through surrogate gradient approximations and quantile reparameterisation enables gradient-based optimisation of the exact evaluation metric of interest, including non-differentiable metrics such as F1-score and AUC.

    **Fairness-Constrained Threshold Optimisation.** The tension between predictive performance and fairness constraints at the threshold level will intensify as the EU AI Act and UK AI regulation mature. Research is converging on multi-objective threshold optimisation algorithms that find Pareto-optimal operating points balancing performance metrics against multiple simultaneous fairness criteria, with formal guarantees about the fairness-performance frontier.

    **Threshold Monitoring in Production.** Continuous monitoring of threshold performance as data distributions evolve — concept drift, covariate shift, population shift in healthcare AI — is becoming a core MLOps capability. Tools like Evidently AI, WhyLabs, and Arize AI provide real-time threshold drift detection with alerting for when the deployed threshold no longer achieves its target operating point on current production data.

    **Regulation-Aligned Threshold Documentation.** By 2028, it is anticipated that threshold documentation will be a mandated component of AI model cards and technical documentation under the EU AI Act implementing regulations. Standardised threshold specification formats — covering the threshold value, the metric being optimised, the cost rationale, and the fairness audit results — are being developed by CEN-CENELEC/JTC 21 and ISO/IEC JTC 1/SC 42.

  ## Research & Literature

    1. Peterson, W.W., Birdsall, T.G., Fox, W.C. (1954). The theory of signal detectability. *Transactions of the IRE Professional Group on Information Theory*, 4(4), 171–212.
    2. Green, D.M., Swets, J.A. (1966). *Signal Detection Theory and Psychophysics*. Wiley, New York.
    3. Swets, J.A. (1973). The relative operating characteristic in psychology. *Science*, 182(4116), 990–1000.
    4. Wald, A. (1950). *Statistical Decision Functions*. Wiley, New York.
    5. Duda, R.O., Hart, P.E. (1973). *Pattern Classification and Scene Analysis*. Wiley, New York.
    6. Elkan, C. (2001). The foundations and implications of risk scores. *Proceedings of the Seventh ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 155–164.
    7. Domingos, P. (1999). MetaCost: A general method for making classifiers cost-sensitive. *Proceedings of KDD-1999*, 155–164.
    8. Platt, J.C. (1999). Probabilistic outputs for support vector machines and comparisons to regularised likelihood methods. *Advances in Large Margin Classifiers*, MIT Press, 61–74.
    9. Niculescu-Mizil, A., Caruana, R. (2005). Predicting good probabilities with supervised learning. *Proceedings of the 22nd ICML*, 625–632.
    10. He, H., Garcia, E.A. (2009). Learning from imbalanced data. *IEEE Transactions on Knowledge and Data Engineering*, 21(9), 1263–1284.
    11. Hardt, M., Price, E., Srebro, N. (2016). Equality of opportunity in supervised learning. *Advances in Neural Information Processing Systems*, 29, 3315–3323.
    12. Chouldechova, A. (2017). Fair prediction with disparate impact: A study of bias in recidivism prediction instruments. *Big Data*, 5(2), 153–163.
    13. Vovk, V., Gammerman, A., Shafer, G. (2005). *Algorithmic Learning in a Random World*. Springer, New York.
    14. Shafer, G., Vovk, V. (2008). A tutorial on conformal prediction. *Journal of Machine Learning Research*, 9, 371–421.
    15. Branco, P., Torgo, L., Ribeiro, R.P. (2016). A survey of predictive modelling under imbalanced distributions. *ACM Computing Surveys*, 49(2), Article 31.
    16. Collell, G., Prelec, D., Patil, K.R. (2016). A simple plug-in bagging ensemble based on threshold-moving for classifying binary and multiclass imbalanced data. *Neurocomputing*, 214, 360–369.
    17. Fawcett, T. (2006). An introduction to ROC analysis. *Pattern Recognition Letters*, 27(8), 861–874.
    18. Davis, J., Goadrich, M. (2006). The relationship between precision-recall and ROC curves. *Proceedings of the 23rd ICML*, 233–240.
    19. Greenbaum, J.A., et al. (2022). GHOST: Adjusting the decision threshold to handle imbalanced data in machine learning. *Journal of Chemical Information and Modeling*, 62(8), 1813–1821.
    20. Zhu, R., et al. (2025). Flexible multi-class cost-sensitive thresholding. *Advances in Data Analysis and Classification*, Springer, doi:10.1007/s11634-025-00651-8.
    21. Ferri, C., Hernandez-Orallo, J., Modroiu, R. (2009). An experimental comparison of performance measures for classification. *Pattern Recognition Letters*, 30(1), 27–38.
    22. Zou, K.H., O'Malley, A.J., Mauri, L. (2007). Receiver-operating characteristic analysis for evaluating diagnostic tests and predictive models. *Circulation*, 115(5), 654–657.
    23. Hand, D.J. (2009). Measuring classifier performance: A coherent alternative to the area under the ROC curve. *Machine Learning*, 77(1), 103–123.
    24. MHRA (2024). Software and AI as a Medical Device — Guidance for Digital Health Technologies. UK Medicines and Healthcare Products Regulatory Agency.
    25. EU AI Act (2024). Regulation (EU) 2024/1689 on Artificial Intelligence. European Parliament and Council.
    26. ISO/IEC 22989:2022. Artificial Intelligence Concepts and Terminology. International Organisation for Standardisation.
    27. NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology, NIST AI 100-1.
    28. Bishop, C.M. (2006). *Pattern Recognition and Machine Learning*. Springer, New York. Chapter 1.5 (Decision Theory).

- ### Provenance
  - sources:: https://papers.phmsociety.org/index.php/phme/article/view/4139; https://link.springer.com/article/10.1007/s11634-025-00651-8; https://pubs.acs.org/doi/10.1021/acs.jcim.1c00160; https://arxiv.org/pdf/2510.01281; https://www.iatrox.com/blog/ai-for-medical-diagnosis-nhs-uk-2025-nice-eva-mhra-aidrs; https://fairlearn.org/main/user_guide/assessment/common_fairness_metrics.html; https://arxiv.org/pdf/2006.10667; Bishop (2006) Pattern Recognition and Machine Learning; Fawcett (2006) ROC Analysis; Hardt et al. (2016) Equality of Opportunity; Chouldechova (2017) Fair Prediction
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm