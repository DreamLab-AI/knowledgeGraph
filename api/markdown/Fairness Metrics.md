- ### OntologyBlock
  id:: 0377-fairness-metrics-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: AI

    - sequence-number:: 0377

    - filename-history:: ["AI-0377-fairness-metrics.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0377
    - preferred-term:: Fairness Metrics
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Fairness Metrics are quantitative measures and mathematical frameworks used to evaluate and ensure equitable treatment across different demographic groups in AI systems. These metrics provide objective, measurable criteria to assess whether an algorithmic system produces disparate impacts, maintains statistical parity, or achieves equalized odds across protected attributes such as race, gender, age, or disability status. Key fairness metrics include demographic parity (equal positive prediction rates across groups), equalized odds (equal true positive and false positive rates), equal opportunity (equal true positive rates), and predictive parity (equal precision across groups). The selection and application of fairness metrics depends on the specific context, stakeholder values, and regulatory requirements, as different metrics can conflict and no single metric satisfies all fairness criteria simultaneously. Implementation requires confusion matrix analysis, statistical testing, and careful consideration of base rate differences between groups, as formalized in IEEE P7003-2021 and NIST SP 1270 guidelines for algorithmic fairness assessment.
    - maturity:: mature
    - source:: [[IEEE P7003-2021]], [[ISO/IEC TR 24027]], [[NIST SP 1270]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:FairnessMetrics
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0377-fairness-metrics-relationships

  - #### OWL Axioms
    id:: 0377-fairness-metrics-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessMetric))
(SubClassOf :FairnessMetric :EvaluationMetric)
(SubClassOf :FairnessMetric :EthicalAIComponent)

(AnnotationAssertion rdfs:label :FairnessMetric
  "Fairness Metric"@en)
(AnnotationAssertion rdfs:comment :FairnessMetric
  "Quantitative measures for assessing algorithmic fairness across protected groups, including demographic parity, equalized odds, and equality of opportunity."@en)
(AnnotationAssertion :dcterms:source :FairnessMetric
  "IEEE P7003-2021, ISO/IEC TR 24027:2021, NIST SP 1270")

;; Object Properties
(Declaration (ObjectProperty :measures))
(ObjectPropertyDomain :measures :FairnessMetric)
(ObjectPropertyRange :measures :AlgorithmicFairness)

(Declaration (ObjectProperty :detectsBias))
(ObjectPropertyDomain :detectsBias :FairnessMetric)
(ObjectPropertyRange :detectsBias :ProtectedAttribute)

(Declaration (ObjectProperty :appliesTo))
(ObjectPropertyDomain :appliesTo :FairnessMetric)
(ObjectPropertyRange :appliesTo :AIModel)

(Declaration (ObjectProperty :requiresConfusionMatrix))
(SubObjectPropertyOf :requiresConfusionMatrix :dependsOn)

;; Data Properties
(Declaration (DataProperty :hasValueRange))
(DataPropertyAssertion :hasValueRange :FairnessMetric
  "[0,1] for most metrics"^^xsd:string)

(Declaration (DataProperty :hasThreshold))
(DataPropertyDomain :hasThreshold :FairnessMetric)
(DataPropertyRange :hasThreshold xsd:decimal)

(Declaration (DataProperty :requiresGroundTruth))
(DataPropertyAssertion :requiresGroundTruth :FairnessMetric
  "true"^^xsd:boolean)

;; Subclass Definitions
(Declaration (Class :DemographicParity))
(SubClassOf :DemographicParity :FairnessMetric)
(AnnotationAssertion rdfs:comment :DemographicParity
  "P(Ŷ=1|A=0) = P(Ŷ=1|A=1) where A is protected attribute and Ŷ is prediction"@en)

(Declaration (Class :EqualizedOdds))
(SubClassOf :EqualizedOdds :FairnessMetric)
(AnnotationAssertion rdfs:comment :EqualizedOdds
  "P(Ŷ=1|A=0,Y=y) = P(Ŷ=1|A=1,Y=y) for y ∈ {0,1}"@en)

(Declaration (Class :EqualOpportunity))
(SubClassOf :EqualOpportunity :FairnessMetric)
(AnnotationAssertion rdfs:comment :EqualOpportunity
  "P(Ŷ=1|A=0,Y=1) = P(Ŷ=1|A=1,Y=1) - equal true positive rates"@en)

(Declaration (Class :PredictiveParity))
(SubClassOf :PredictiveParity :FairnessMetric)
(AnnotationAssertion rdfs:comment :PredictiveParity
  "P(Y=1|Ŷ=1,A=0) = P(Y=1|Ŷ=1,A=1) - equal precision across groups"@en)

;; Disjoint Classes
(DisjointClasses :DemographicParity :EqualizedOdds :EqualOpportunity)

;; Domain Constraints
(SubClassOf :FairnessMetric
  (ObjectSomeValuesFrom :measures :AlgorithmicFairness))
(SubClassOf :FairnessMetric
  (ObjectSomeValuesFrom :detectsBias :ProtectedAttribute))
(SubClassOf :FairnessMetric
  (DataSomeValuesFrom :hasThreshold xsd:decimal))
      ```

- ## About Fairness Metrics
  id:: 0377-fairness-metrics-about

  - 
  -
  



## Academic Context

- Brief contextual overview
  - Fairness metrics are mathematical tools used to measure and address bias in artificial intelligence systems, ensuring equitable treatment across demographic groups
  - These metrics are central to the ethical development and deployment of AI, reflecting ongoing debates about equality, equity, and justice in automated decision-making

- Key developments and current state
  - The field has matured from theoretical frameworks to practical implementation, with increasing emphasis on context-specific fairness standards
  - Recent research highlights the impossibility of satisfying all fairness definitions simultaneously, necessitating careful trade-offs depending on application domain

- Academic foundations
  - Rooted in social science, statistics, and computer science, fairness metrics draw from concepts such as demographic parity, equal opportunity, and predictive parity
  - Theoretical work continues to explore the compatibility and limitations of different fairness criteria

## Current Landscape (2025)

- Industry adoption and implementations
  - Many organisations now embed fairness metrics into their AI governance strategies, using them to comply with regulations, build trust, and protect brand reputation
  - Notable platforms include Iterate.ai, Shelf.io, and IEEE’s machine learning fairness standards

- UK and North England examples where relevant
  - UK-based companies and public sector bodies increasingly adopt fairness metrics, particularly in sectors such as finance, healthcare, and public services
  - In North England, cities like Manchester, Leeds, Newcastle, and Sheffield host innovation hubs and research centres focused on ethical AI, including fairness and bias mitigation

- Technical capabilities and limitations
  - Fairness metrics can identify and quantify bias across groups, but they cannot eliminate all forms of unfairness due to inherent trade-offs between different fairness definitions
  - Metrics are most effective when combined with transparency, explainability, and continuous monitoring

- Standards and frameworks
  - IEEE 3198-2025 provides a comprehensive standard for evaluating machine learning fairness, specifying methods, metrics, and test cases
  - Other frameworks include the EU’s AI Act and the UK’s own regulatory guidance on automated decision-making

## Research & Literature

- Key academic papers and sources
  - Barocas, S., Hardt, M., & Narayanan, A. (2019). Fairness and Machine Learning: Limitations and Opportunities. fairmlbook.org. https://fairmlbook.org/
  - Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2021). A Survey on Bias and Fairness in Machine Learning. ACM Computing Surveys, 54(6), 1–37. https://doi.org/10.1145/3457607
  - Mitchell, S., Potash, E., Barocas, S., D’Amour, A., & Lum, K. (2021). Algorithmic Fairness: Choices, Assumptions, and Definitions. Annual Review of Statistics and Its Application, 8, 141–163. https://doi.org/10.1146/annurev-statistics-042720-020326

- Ongoing research directions
  - Contextual fairness standards tailored to specific domains (e.g., healthcare, criminal justice)
  - Global and cultural variations in fairness perceptions and requirements
  - Integration of fairness metrics with explainable AI and human-in-the-loop systems

## UK Context

- British contributions and implementations
  - The UK has been active in developing regulatory frameworks and best practices for AI fairness, with contributions from academic institutions, industry, and government bodies
  - The Centre for Data Ethics and Innovation (CDEI) and the Alan Turing Institute play key roles in shaping national policy and research

- North England innovation hubs (if relevant)
  - Manchester, Leeds, Newcastle, and Sheffield are home to several universities and research centres engaged in AI ethics and fairness, including the University of Manchester’s AI for Social Good initiative and Newcastle University’s Centre for Social Justice and Community Action

- Regional case studies
  - Local authorities in North England have piloted AI systems for social services, using fairness metrics to ensure equitable outcomes for diverse communities
  - For example, a recent project in Leeds used fairness metrics to evaluate an AI-driven housing allocation system, highlighting the importance of context-specific fairness standards

## Future Directions

- Emerging trends and developments
  - Increasing focus on domain-specific fairness standards and global harmonisation of regulatory approaches
  - Growing interest in the role of cultural and societal factors in shaping fairness perceptions

- Anticipated challenges
  - Balancing competing fairness criteria and managing trade-offs in real-world applications
  - Ensuring that fairness metrics are accessible and usable for non-expert stakeholders

- Research priorities
  - Developing more robust and context-aware fairness metrics
  - Exploring the intersection of fairness, transparency, and accountability in AI systems
  - Investigating the long-term societal impacts of fairness-aware AI

## References

1. Barocas, S., Hardt, M., & Narayanan, A. (2019). Fairness and Machine Learning: Limitations and Opportunities. fairmlbook.org. https://fairmlbook.org/
2. Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2021). A Survey on Bias and Fairness in Machine Learning. ACM Computing Surveys, 54(6), 1–37. https://doi.org/10.1145/3457607
3. Mitchell, S., Potash, E., Barocas, S., D’Amour, A., & Lum, K. (2021). Algorithmic Fairness: Choices, Assumptions, and Definitions. Annual Review of Statistics and Its Application, 8, 141–163. https://doi.org/10.1146/annurev-statistics-042720-020326
4. IEEE 3198-2025. IEEE Standard for Machine Learning Fairness. IEEE. https://standards.ieee.org/ieee/3198/11068/
5. Centre for Data Ethics and Innovation (CDEI). (2023). AI Barometer Report. https://www.gov.uk/government/organisations/centre-for-data-ethics-and-innovation
6. Alan Turing Institute. (2023). Fairness in AI. https://www.turing.ac.uk/research/research-programmes/fairness-ai
7. University of Manchester. (2023). AI for Social Good. https://www.manchester.ac.uk/research/themes/ai-for-social-good/
8. Newcastle University. (2023). Centre for Social Justice and Community Action. https://www.ncl.ac.uk/csjca/


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


