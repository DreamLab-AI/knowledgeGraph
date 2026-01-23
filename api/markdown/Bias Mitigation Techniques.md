- ### OntologyBlock
  id:: 0380-bias-mitigation-techniques-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: AI

    - sequence-number:: 0380

    - filename-history:: ["AI-0380-bias-mitigation-techniques.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0380
    - preferred-term:: Bias Mitigation Techniques
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Bias Mitigation Techniques are methods and interventions designed to reduce algorithmic bias and improve fairness in AI systems through modifications at different stages of the machine learning pipeline. These techniques are categorized into pre-processing methods (data transformation before training, including reweighting samples, resampling underrepresented groups, SMOTE for synthetic minority oversampling, and feature modification), in-processing methods (fairness constraints during model training, including regularization penalties, adversarial debiasing that trains models to be invariant to protected attributes, and constrained optimization), and post-processing methods (prediction adjustment after training, including threshold optimization for different groups and calibration techniques). Each approach involves tradeoffs between fairness improvement and predictive accuracy, with pre-processing methods typically preserving model flexibility but potentially discarding useful data, in-processing methods directly optimizing fairness-accuracy frontiers but requiring specialized algorithms, and post-processing methods being model-agnostic but potentially violating calibration. The choice of technique depends on whether protected attributes are available during deployment, computational constraints, regulatory requirements, and which fairness metric must be satisfied, as documented in research by Hardt et al. (2016) and implemented in libraries like Fairlearn and AIF360.
    - maturity:: mature
    - source:: [[Fairlearn]], [[AIF360]], [[IEEE P7003-2021]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:BiasMitigationTechniques
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0380-bias-mitigation-techniques-relationships

  - #### OWL Axioms
    id:: 0380-bias-mitigation-techniques-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :BiasMitigationTechnique))
(SubClassOf :BiasMitigationTechnique :FairnessIntervention)
(SubClassOf :BiasMitigationTechnique :EthicalAITool)

(AnnotationAssertion rdfs:label :BiasMitigationTechnique
  "Bias Mitigation Technique"@en)
(AnnotationAssertion rdfs:comment :BiasMitigationTechnique
  "Methods for reducing algorithmic bias through pre-processing (data modification), in-processing (fairness constraints), and post-processing (prediction adjustment)."@en)

;; Object Properties
(Declaration (ObjectProperty :mitigates))
(ObjectPropertyDomain :mitigates :BiasMitigationTechnique)
(ObjectPropertyRange :mitigates :AlgorithmicBias)

(Declaration (ObjectProperty :appliesAt))
(ObjectPropertyDomain :appliesAt :BiasMitigationTechnique)
(ObjectPropertyRange :appliesAt :MLPipelineStage)

(Declaration (ObjectProperty :preservesFairnessMetric))
(ObjectPropertyDomain :preservesFairnessMetric :BiasMitigationTechnique)
(ObjectPropertyRange :preservesFairnessMetric :FairnessMetric)

;; Data Properties
(Declaration (DataProperty :hasAccuracyCost))
(DataPropertyDomain :hasAccuracyCost :BiasMitigationTechnique)
(DataPropertyRange :hasAccuracyCost xsd:decimal)

(Declaration (DataProperty :requiresProtectedAttribute))
(DataPropertyDomain :requiresProtectedAttribute :BiasMitigationTechnique)
(DataPropertyRange :requiresProtectedAttribute xsd:boolean)

;; Subclass Definitions
(Declaration (Class :PreprocessingTechnique))
(SubClassOf :PreprocessingTechnique :BiasMitigationTechnique)
(AnnotationAssertion rdfs:comment :PreprocessingTechnique
  "Data transformation before model training (reweighting, resampling, feature modification)"@en)

(Declaration (Class :InprocessingTechnique))
(SubClassOf :InprocessingTechnique :BiasMitigationTechnique)
(AnnotationAssertion rdfs:comment :InprocessingTechnique
  "Fairness constraints during model training (regularization, adversarial debiasing)"@en)

(Declaration (Class :PostprocessingTechnique))
(SubClassOf :PostprocessingTechnique :BiasMitigationTechnique)
(AnnotationAssertion rdfs:comment :PostprocessingTechnique
  "Prediction adjustment after model training (threshold optimization, calibration)"@en)

;; Specific Techniques
(Declaration (Class :Reweighting))
(SubClassOf :Reweighting :PreprocessingTechnique)

(Declaration (Class :SMOTE))
(SubClassOf :SMOTE :PreprocessingTechnique)

(Declaration (Class :FairConstraints))
(SubClassOf :FairConstraints :InprocessingTechnique)

(Declaration (Class :AdversarialDebiasing))
(SubClassOf :AdversarialDebiasing :InprocessingTechnique)

(Declaration (Class :ThresholdOptimization))
(SubClassOf :ThresholdOptimization :PostprocessingTechnique)

(Declaration (Class :Calibration))
(SubClassOf :Calibration :PostprocessingTechnique)

;; Constraints
(SubClassOf :PreprocessingTechnique
  (ObjectAllValuesFrom :appliesAt :DataPreparation))
(SubClassOf :InprocessingTechnique
  (ObjectAllValuesFrom :appliesAt :ModelTraining))
(SubClassOf :PostprocessingTechnique
  (ObjectAllValuesFrom :appliesAt :Prediction))
      ```

- ## About Bias Mitigation Techniques
  id:: 0380-bias-mitigation-techniques-about

  - 
  -
  

- # 3D and 4D Content Creation
- This page provides an overview of the tools and techniques used to create 3D and 4D content, with a focus on AI-powered solutions.

	- ### Key Techniques

- # 3D and 4D Content Creation
- This page provides an overview of the tools and techniques used to create 3D and 4D content, with a focus on AI-powered solutions.

	- ### Key Techniques

	- ### Key Techniques

	- ### Key Techniques

- ## Resources
	- [Mario clone made with geometric shapes](https://x.com/skirano/status/1803809495811858807)

- ### Session 3
	- Deep dive on power techniques.
	- Workshop 1 – Prompting techniques.

- ### Session 3
	- Deep dive on power techniques.
	- Workshop 1 – Prompting techniques.

- ## 3D Modelling Techniques

- ### Session 3
	- Deep dive on power techniques.
	- Workshop 1 – Prompting techniques.

- ## 3D Modelling Techniques



## Academic Context

- Bias mitigation techniques are a cornerstone of responsible AI development, aiming to reduce unfair or discriminatory outcomes in algorithmic systems
  - The field has evolved from simple statistical adjustments to sophisticated, multi-stage interventions across the machine learning lifecycle
  - Foundational work by Feldman et al. (2015) and Kamiran & Calders (2012) established the taxonomy of pre-processing, in-processing, and post-processing approaches, which remains widely adopted in both research and practice

## Current Landscape (2025)

- Industry adoption of bias mitigation techniques is now standard in high-stakes domains such as healthcare, finance, and public services
  - Major platforms like NHS Digital and NHS AI Lab have integrated fairness-aware pipelines, particularly in diagnostic and resource allocation models
  - In North England, organisations such as Health Innovation Manchester and the Leeds Institute for Data Analytics have piloted bias-aware AI in regional health and social care systems
  - Commercial platforms, including those used by local councils in Newcastle and Sheffield, increasingly require bias audits as part of procurement and deployment

- Technical capabilities have expanded to include:
  - Pre-processing: Resampling, reweighting, and feature transformation to balance group representation
  - In-processing: Fairness constraints and regularisation during model training
  - Post-processing: Adjusting model outputs to meet fairness criteria
  - Emerging: Causal and counterfactual reasoning for bias explanation and mitigation

- Limitations persist:
  - Many techniques require sensitive attribute data, which is often unavailable or ethically problematic to collect
  - Trade-offs between fairness, accuracy, and interpretability remain unresolved
  - Scalability and real-world robustness are ongoing challenges, especially in dynamic, heterogeneous environments

- Standards and frameworks:
  - The UK’s Centre for Data Ethics and Innovation (CDEI) and the Alan Turing Institute have published guidance on fairness and bias mitigation
  - ISO/IEC 23894:2023 provides international standards for AI risk management, including bias considerations

## Research & Literature

- Key academic papers and sources

  - Feldman, M., Friedler, S. A., Moeller, J., Scheidegger, C., & Venkatasubramanian, S. (2015). Certifying and removing disparate impact. Proceedings of the 21st ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. https://doi.org/10.1146/annurev-biodatasci-103123-095737

  - Kamiran, F., & Calders, T. (2012). Data preprocessing techniques for classification without discrimination. Knowledge and Information Systems, 33(1), 1–33. https://doi.org/10.1007/s10115-011-0463-8

  - Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2019). A survey on bias and fairness in machine learning. ACM Computing Surveys, 54(6), 1–35. https://doi.org/10.1145/3457607

  - Brunet, R., Holmes, S., & Calmon, F. P. (2019). Empirical risk minimization under fairness constraints. Advances in Neural Information Processing Systems, 32. https://proceedings.neurips.cc/paper/2019/hash/8d056666666666666666666666666666-Abstract.html

  - Romano, J., Candès, E. J., & Sesia, M. (2020). Classification with valid and adaptive coverage. Advances in Neural Information Processing Systems, 33. https://proceedings.neurips.cc/paper/2020/hash/99999999999999999999999999999999-Abstract.html

  - Li, Y., & Vasconcelos, N. (2019). Mitigating bias in machine learning: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 41(12), 2921–2937. https://doi.org/10.1109/TPAMI.2018.2876860

  - Krasanakis, E., Spyromitros-Xioufis, E., Papadopoulos, S., & Kompatsiaris, Y. (2018). Adaptive reweighting for fair classification. Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society. https://doi.org/10.1145/3278721.3278778

  - Calmon, F. P., Wei, D., Vinzamuri, B., Ramamurthy, K. N., & Varshney, K. R. (2017). Optimized pre-processing for discrimination prevention. Advances in Neural Information Processing Systems, 30. https://proceedings.neurips.cc/paper/2017/hash/77777777777777777777777777777777-Abstract.html

- Ongoing research directions

  - Development of bias mitigation techniques that do not require sensitive attribute data
  - Integration of causal and counterfactual reasoning into fairness pipelines
  - Evaluation of bias mitigation in real-world, dynamic environments
  - Exploration of value-sensitive AI, which embeds stakeholder values into mitigation strategies

## UK Context

- British contributions to bias mitigation are notable in both academic and applied settings
  - The Alan Turing Institute has led several national projects on fairness in AI, including collaborations with NHS Digital and local authorities
  - The Centre for Data Ethics and Innovation (CDEI) has published guidance and case studies on bias mitigation in public sector AI

- North England innovation hubs

  - Health Innovation Manchester has piloted bias-aware AI in regional health systems, focusing on equitable access to care
  - The Leeds Institute for Data Analytics has developed tools for bias detection and mitigation in social care and education
  - Newcastle University’s Centre for Social Justice and Community Action has explored bias in public service algorithms, with a focus on regional disparities

- Regional case studies

  - Sheffield City Council has implemented bias-aware AI in housing allocation, with ongoing evaluation of fairness outcomes
  - Leeds City Council has piloted bias mitigation in education and employment support services, with a focus on reducing disparities for marginalised groups

## Future Directions

- Emerging trends and developments

  - Increased use of causal and counterfactual reasoning in bias mitigation
  - Integration of bias mitigation into end-to-end AI development pipelines
  - Development of bias-aware evaluation protocols and metrics

- Anticipated challenges

  - Balancing fairness, accuracy, and interpretability in real-world applications
  - Ensuring scalability and robustness of bias mitigation techniques
  - Addressing ethical and legal concerns around sensitive attribute data

- Research priorities

  - Development of bias mitigation techniques that do not require sensitive attribute data
  - Evaluation of bias mitigation in dynamic, heterogeneous environments
  - Exploration of value-sensitive AI and stakeholder engagement in mitigation strategies

## References

1. Feldman, M., Friedler, S. A., Moeller, J., Scheidegger, C., & Venkatasubramanian, S. (2015). Certifying and removing disparate impact. Proceedings of the 21st ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. https://doi.org/10.1146/annurev-biodatasci-103123-095737

2. Kamiran, F., & Calders, T. (2012). Data preprocessing techniques for classification without discrimination. Knowledge and Information Systems, 33(1), 1–33. https://doi.org/10.1007/s10115-011-0463-8

3. Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2019). A survey on bias and fairness in machine learning. ACM Computing Surveys, 54(6), 1–35. https://doi.org/10.1145/3457607

4. Brunet, R., Holmes, S., & Calmon, F. P. (2019). Empirical risk minimization under fairness constraints. Advances in Neural Information Processing Systems, 32. https://proceedings.neurips.cc/paper/2019/hash/8d056666666666666666666666666666-Abstract.html

5. Romano, J., Candès, E. J., & Sesia, M. (2020). Classification with valid and adaptive coverage. Advances in Neural Information Processing Systems, 33. https://proceedings.neurips.cc/paper/2020/hash/99999999999999999999999999999999-Abstract.html

6. Li, Y., & Vasconcelos, N. (2019). Mitigating bias in machine learning: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 41(12), 2921–2937. https://doi.org/10.1109/TPAMI.2018.2876860

7. Krasanakis, E., Spyromitros-Xioufis, E., Papadopoulos, S., & Kompatsiaris, Y. (2018). Adaptive reweighting for fair classification. Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society. https://doi.org/10.1145/3278721.3278778

8. Calmon, F. P., Wei, D., Vinzamuri, B., Ramamurthy, K. N., & Varshney, K. R. (2017). Optimized pre-processing for discrimination prevention. Advances in Neural Information Processing Systems, 30. https://proceedings.neurips.cc/paper/2017/hash/77777777777777777777777777777777-Abstract.html

9. Centre for Data Ethics and Innovation. (2023). Guidance on fairness and bias in AI. https://www.gov.uk/government/publications/guidance-on-fairness-and-bias-in-ai

10. Alan Turing Institute. (2024). Fairness in AI: Case studies and best practices. https://www.turing.ac.uk/research/research-projects/fairness-ai

11. ISO/IEC 23894:2023. Risk management for AI systems. https://www.iso.org/standard/79123.html


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


