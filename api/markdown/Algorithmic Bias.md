- ### OntologyBlock
  id:: 0378-algorithmic-bias-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: AI

    - sequence-number:: 0378

    - filename-history:: ["AI-0378-algorithmic-bias.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0378
    - preferred-term:: Algorithmic Bias
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Algorithmic Bias refers to systematic and repeatable errors in AI systems that create unfair outcomes favoring or discriminating against particular groups or individuals. This bias manifests through multiple pathways including historical bias (reflecting past societal inequalities in training data), representation bias (unrepresentative or incomplete data samples), measurement bias (flawed proxy variables), aggregation bias (combining heterogeneous groups inappropriately), and feedback loops (where system outputs influence future inputs, amplifying initial biases). Algorithmic bias affects protected groups based on attributes such as race, gender, age, disability, or socioeconomic status, potentially resulting in discriminatory decisions in critical domains like hiring, lending, criminal justice, and healthcare. Detection requires statistical analysis, fairness auditing, and counterfactual testing, while mitigation involves pre-processing data corrections, in-processing fairness constraints, and post-processing prediction adjustments. The severity and legal implications of algorithmic bias are governed by anti-discrimination frameworks including the EU Anti-Discrimination Directives, UK Equality Act 2010, and US civil rights legislation.
    - maturity:: mature
    - source:: [[ISO/IEC TR 24027]], [[NIST SP 1270]], [[IEEE P7003-2021]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:AlgorithmicBias
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0378-algorithmic-bias-relationships

  - #### OWL Axioms
    id:: 0378-algorithmic-bias-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :AlgorithmicBias))
(SubClassOf :AlgorithmicBias :EthicalConcern)
(SubClassOf :AlgorithmicBias :AIRisk)

(AnnotationAssertion rdfs:label :AlgorithmicBias
  "Algorithmic Bias"@en)
(AnnotationAssertion rdfs:comment :AlgorithmicBias
  "Systematic and repeatable errors in AI systems that create unfair outcomes, including historical bias, representation bias, measurement bias, and feedback loops."@en)
(AnnotationAssertion :dcterms:source :AlgorithmicBias
  "ISO/IEC TR 24027:2021, NIST SP 1270, IEEE P7003-2021")

;; Object Properties
(Declaration (ObjectProperty :affectsGroup))
(ObjectPropertyDomain :affectsGroup :AlgorithmicBias)
(ObjectPropertyRange :affectsGroup :ProtectedGroup)

(Declaration (ObjectProperty :originatesFrom))
(ObjectPropertyDomain :originatesFrom :AlgorithmicBias)
(ObjectPropertyRange :originatesFrom :BiasSource)

(Declaration (ObjectProperty :manifestsIn))
(ObjectPropertyDomain :manifestsIn :AlgorithmicBias)
(ObjectPropertyRange :manifestsIn :AISystemComponent)

(Declaration (ObjectProperty :amplifiedBy))
(ObjectPropertyDomain :amplifiedBy :AlgorithmicBias)
(ObjectPropertyRange :amplifiedBy :FeedbackMechanism)

(Declaration (ObjectProperty :detectedBy))
(ObjectPropertyDomain :detectedBy :AlgorithmicBias)
(ObjectPropertyRange :detectedBy :BiasDetectionMethod)

(Declaration (ObjectProperty :mitigatedBy))
(ObjectPropertyDomain :mitigatedBy :AlgorithmicBias)
(ObjectPropertyRange :mitigatedBy :BiasMitigationTechnique)

;; Data Properties
(Declaration (DataProperty :hasSeverity))
(DataPropertyDomain :hasSeverity :AlgorithmicBias)
(DataPropertyRange :hasSeverity xsd:string)
(AnnotationAssertion rdfs:comment :hasSeverity
  "Severity level: low, medium, high, critical"@en)

(Declaration (DataProperty :hasImpactScope))
(DataPropertyDomain :hasImpactScope :AlgorithmicBias)
(DataPropertyRange :hasImpactScope xsd:string)

(Declaration (DataProperty :isSystematic))
(DataPropertyDomain :isSystematic :AlgorithmicBias)
(DataPropertyRange :isSystematic xsd:boolean)

(Declaration (DataProperty :hasLegalImplication))
(DataPropertyDomain :hasLegalImplication :AlgorithmicBias)
(DataPropertyRange :hasLegalImplication xsd:boolean)

;; Bias Type Subclasses
(Declaration (Class :HistoricalBias))
(SubClassOf :HistoricalBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :HistoricalBias
  "Bias arising from historical societal inequalities reflected in training data"@en)

(Declaration (Class :RepresentationBias))
(SubClassOf :RepresentationBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :RepresentationBias
  "Bias from unrepresentative or incomplete training data samples"@en)

(Declaration (Class :MeasurementBias))
(SubClassOf :MeasurementBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :MeasurementBias
  "Bias from flawed measurement or proxy variables for ground truth"@en)

(Declaration (Class :AggregationBias))
(SubClassOf :AggregationBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :AggregationBias
  "Bias from combining heterogeneous groups into single model"@en)

(Declaration (Class :EvaluationBias))
(SubClassOf :EvaluationBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :EvaluationBias
  "Bias in benchmarks or test sets used for model evaluation"@en)

(Declaration (Class :DeploymentBias))
(SubClassOf :DeploymentBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :DeploymentBias
  "Bias from misalignment between development and deployment contexts"@en)

(Declaration (Class :FeedbackLoopBias))
(SubClassOf :FeedbackLoopBias :AlgorithmicBias)
(AnnotationAssertion rdfs:comment :FeedbackLoopBias
  "Bias amplified through system outputs influencing future inputs"@en)

;; Complexity Constraints
(SubClassOf :AlgorithmicBias
  (ObjectSomeValuesFrom :affectsGroup :ProtectedGroup))
(SubClassOf :AlgorithmicBias
  (ObjectSomeValuesFrom :originatesFrom :BiasSource))
(SubClassOf :AlgorithmicBias
  (DataSomeValuesFrom :hasSeverity xsd:string))

;; Disjoint Unions
(DisjointUnion :BiasSource
  :DataSource :AlgorithmDesign :HumanDecision :SystemicFactors)
      ```

- ## About Algorithmic Bias
  id:: 0378-algorithmic-bias-about

  - 
  -
  



# Algorithmic Bias Ontology Entry – Revised

## Academic Context

- Algorithmic bias represents a fundamental challenge in contemporary artificial intelligence and machine learning systems[1][2]
  - Defined as systematic errors or imbalanced outcomes produced by algorithms due to prejudicial assumptions embedded during design and training phases[1]
  - Emerges primarily when training datasets contain structural flaws, narrow representation, stereotypes, measurement inaccuracies, or deliberate omissions[1]
  - Rooted in human decision-making: computer scientists inadvertently or purposefully transpose cognitive and subconscious biases onto algorithmic systems[1]
  - Distinguishable from statistical bias (inaccurate predictions from incomplete data) versus discriminatory bias (unfair treatment of protected groups)[3]

- Key academic distinction: algorithmic bias typically refers to hidden bias resulting from input data rather than explicit programming instructions[2]
  - The algorithm appears impartial precisely because its bias is obscured within training data, lending false credibility to discriminatory outputs[2]
  - Manifests across multiple dimensions: allocation harms (unfair withholding of opportunities or resources) and representation harms (biased depiction influencing perception)[4]

## Current Landscape (2025)

- Industry adoption and documented implementations
  - Facial recognition and online recruiting tools demonstrate measurable gender and ethnicity biases with significant societal implications[1]
  - Over 70% of companies utilising AI-enabled employment tools cite efficiency and neutrality as primary drivers, though these capabilities face increasing scrutiny[6]
  - Criminal justice systems employ biased algorithms influencing bail and sentencing decisions, disproportionately affecting marginalised communities[1]
  - Higher education institutions deploy admissions algorithms that inadvertently replicate structural biases from historical data—for example, treating advanced placement (AP) coursework as a quality signal despite no explicit instruction to do so[2]
  - Financial lending, healthcare diagnostics, and insurance distribution programmes all exhibit documented allocative harms[3]

- UK and North England context
  - British regulatory frameworks increasingly scrutinise algorithmic decision-making in public services, though region-specific implementation studies remain limited
  - Manchester and Leeds host growing AI ethics research communities examining fairness in automated systems, particularly within local government procurement and social services
  - Newcastle and Sheffield universities contribute to algorithmic accountability research, though comprehensive North England case studies documenting bias mitigation remain sparse

- Technical capabilities and limitations
  - Machine learning models can perpetuate and amplify existing inequalities when trained on biased historical data[3]
  - Disparate impact analysis provides a measurable framework: protected groups should receive favourable outcomes at a rate of at least 80% of the most advantaged group's rate (legal threshold)[3]
  - Structural data exclusion represents a fundamental challenge: many AI systems systematically omit rural populations, marginalised castes, indigenous groups, or those lacking digital access[5]
  - Clinical annotations standardised using thresholds derived from dominant populations ignore genetic, environmental, or cultural differences influencing health outcomes[5]

- Standards and frameworks
  - Governance frameworks increasingly emphasise transparency, accountability measures, and fairness auditing in AI-powered analytics[3]
  - Organisations employ disparate impact analysis to identify discriminatory patterns in hiring and lending processes[3]
  - Emerging emphasis on contextual intelligence in system design and deployment, recognising that technology lacks intrinsic objectivity[5]

## Research & Literature

- Key academic sources and current scholarship
  - EBSCO Research Starters (2025). "Algorithmic Bias." Comprehensive overview of systematic errors, bias types (sample bias, prejudice bias, measurement bias, exclusion bias), and societal implications across criminal justice and employment sectors.
  - Every Learner Everywhere (2025). "What Are the Risks of Algorithmic Bias in Higher Education?" Examines how algorithms replicate structural biases through training data, with specific focus on admissions systems and the illusion of algorithmic impartiality.
  - Journal of World Association for Research and Review (2025). "Algorithmic Bias, Data Ethics, and Governance: Ensuring Fairness in AI-Driven Business Decisions." Peer-reviewed analysis distinguishing statistical bias from discriminatory bias, examining disparate impact analysis and governance frameworks. DOI: WJARR-2025-0571.
  - The Decision Lab (2025). "Algorithmic Bias – Reference Guide." Classifies bias into allocation and representation harms; provides framework for understanding how algorithmic bias compounds existing inequities.
  - National Centre for Biotechnology Information (2025). "Algorithmic Bias in Public Health AI: A Silent Threat to Equity in Low-Resource Contexts." Examines structural data exclusion, clinical annotation standardisation, and material harms in Brazil and India case studies. PMC12325396.
  - Northwestern Journal of Technology and Intellectual Property (2025). "Algorithmic Bias in AI Employment Decisions." Documents Derek Mobley class action lawsuit against WorkDay Inc. (filed February 2024) alleging discriminatory patterns against African-Americans, individuals over 40, and those with disabilities. Analyses AI tools in HR including machine learning algorithms, computer vision, and large language models.

- Ongoing research directions
  - Mechanisms for detecting and mitigating bias in real-time deployment scenarios
  - Contextual adaptation of algorithms across diverse populations and geographies
  - Governance frameworks balancing innovation with fairness requirements
  - Transparency and explainability in algorithmic decision-making

## UK Context

- British regulatory and institutional responses
  - UK Information Commissioner's Office (ICO) increasingly scrutinises algorithmic decision-making in public sector applications
  - British Standards Institution (BSI) developing standards for AI governance and fairness assessment
  - Academic institutions across England examining algorithmic bias in public services, though comprehensive regional studies remain limited

- North England innovation and research
  - Manchester: Growing research community examining algorithmic fairness in local government procurement and social services allocation
  - Leeds: University research initiatives investigating bias in healthcare AI systems and clinical decision support
  - Newcastle: Academic work on algorithmic accountability and transparency in public sector automation
  - Sheffield: Research into fairness frameworks for employment and recruitment algorithms
  - Regional challenge: limited documented case studies of bias mitigation successes in North England public services, representing research gap

## Future Directions

- Emerging trends and developments
  - Shift from post-hoc bias detection towards proactive fairness-by-design methodologies[3]
  - Increasing legal liability for organisations deploying biased systems (evidenced by employment discrimination lawsuits)[6]
  - Growing emphasis on structural data inclusion and representation of marginalised populations in training datasets[5]
  - Integration of contextual intelligence and domain expertise into algorithmic design processes[5]

- Anticipated challenges
  - Tension between algorithmic efficiency and fairness requirements
  - Difficulty standardising fairness metrics across diverse application domains
  - Resource constraints in low-income regions limiting bias mitigation capacity[5]
  - Regulatory fragmentation across jurisdictions complicating compliance

- Research priorities
  - Developing robust, domain-specific fairness metrics beyond disparate impact analysis
  - Understanding how algorithmic bias manifests differently across cultural and geographic contexts
  - Creating practical governance frameworks balancing innovation with equity
  - Establishing accountability mechanisms for algorithmic harms in public services
  - Investigating long-term societal impacts of algorithmic bias on marginalised communities

## References

1. EBSCO (2025). Algorithmic Bias. Research Starters – Computer Science. Available at: ebsco.com/research-starters/computer-science/algorithmic-bias

2. Every Learner Everywhere (2025). What Are the Risks of Algorithmic Bias in Higher Education? Available at: everylearnereverywhere.org/blog/what-are-the-risks-of-algorithmic-bias-in-higher-education/

3. Journal of World Association for Research and Review (2025). Algorithmic Bias, Data Ethics, and Governance: Ensuring Fairness in AI-Driven Business Decisions. WJARR-2025-0571.

4. The Decision Lab (2025). Algorithmic Bias – Reference Guide. Computer Science. Available at: thedecisionlab.com/reference-guide/computer-science/algorithmic-bias

5. National Centre for Biotechnology Information (2025). Algorithmic Bias in Public Health AI: A Silent Threat to Equity in Low-Resource Contexts. PMC12325396. Available at: pmc.ncbi.nlm.nih.gov/articles/PMC12325396/

6. Northwestern Journal of Technology and Intellectual Property (2025). Algorithmic Bias in AI Employment Decisions. Available at: jtip.law.northwestern.edu/2025/01/30/algorithmic-bias-in-ai-employment-decisions/

7. International Journal of Human-Computer Interaction (2025). Understanding Perceptions of Algorithmic Bias Through the Risk Perception Attitude Framework. Available at: tandfonline.com/doi/full/10.1080/10447318.2025.2546661


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


