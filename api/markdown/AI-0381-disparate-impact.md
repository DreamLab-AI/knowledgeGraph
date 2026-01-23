- ### OntologyBlock
  id:: 0381-disparate-impact-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0381
    - preferred-term:: Disparate Impact
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Disparate Impact is a legal doctrine and form of indirect discrimination that occurs when facially neutral policies, practices, or algorithmic systems disproportionately affect protected groups, regardless of intent to discriminate. Originating from US employment law (EEOC Uniform Guidelines 1978) and extended to UK and EU anti-discrimination frameworks, disparate impact is measured by comparing selection rates, approval rates, or outcome rates between protected and unprotected groups. The "80 percent rule" (four-fifths rule) establishes that disparate impact exists when the selection rate for a protected group is less than 80 percent of the rate for the highest-performing group, calculated as a disparate impact ratio. Unlike disparate treatment (intentional direct discrimination), disparate impact focuses on discriminatory outcomes rather than discriminatory intent. Legal defenses include business necessity (US) - demonstrating the practice is job-related and consistent with business necessity, and proportionate means (UK/EU) - showing the practice is a proportionate means of achieving a legitimate aim. In AI systems, disparate impact analysis requires statistical testing of algorithmic decisions across demographic groups, documentation of less discriminatory alternatives if available, and compliance with sector-specific regulations in employment, lending, insurance, and housing domains.
    - maturity:: mature
    - source:: [[US EEOC Uniform Guidelines]], [[UK Equality Act 2010]], [[EU Anti-Discrimination Directives]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:DisparateImpact
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0381-disparate-impact-relationships

  - #### OWL Axioms
    id:: 0381-disparate-impact-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :DisparateImpact))
(SubClassOf :DisparateImpact :LegalConcept)
(SubClassOf :DisparateImpact :AlgorithmicBias)

(AnnotationAssertion rdfs:label :DisparateImpact
  "Disparate Impact"@en)
(AnnotationAssertion rdfs:comment :DisparateImpact
  "Discriminatory effect of facially neutral policies that disproportionately affect protected groups, measured by the 80% rule (four-fifths rule) under US employment law."@en)
(AnnotationAssertion :dcterms:source :DisparateImpact
  "US EEOC Uniform Guidelines (1978), UK Equality Act 2010, EU Anti-Discrimination Directives")

;; Object Properties
(Declaration (ObjectProperty :affectsProtectedGroup))
(ObjectPropertyDomain :affectsProtectedGroup :DisparateImpact)
(ObjectPropertyRange :affectsProtectedGroup :ProtectedGroup)

(Declaration (ObjectProperty :arisesFrom))
(ObjectPropertyDomain :arisesFrom :DisparateImpact)
(ObjectPropertyRange :arisesFrom :FaciallyNeutralPolicy)

(Declaration (ObjectProperty :measuredBy))
(ObjectPropertyDomain :measuredBy :DisparateImpact)
(ObjectPropertyRange :measuredBy :DisparityMetric)

;; Data Properties
(Declaration (DataProperty :hasDisparateImpactRatio))
(DataPropertyDomain :hasDisparateImpactRatio :DisparateImpact)
(DataPropertyRange :hasDisparateImpactRatio xsd:decimal)
(AnnotationAssertion rdfs:comment :hasDisparateImpactRatio
  "Ratio of selection rates; < 0.8 indicates disparate impact under US EEOC guidelines"@en)

(Declaration (DataProperty :violates80PercentRule))
(DataPropertyDomain :violates80PercentRule :DisparateImpact)
(DataPropertyRange :violates80PercentRule xsd:boolean)

(Declaration (DataProperty :hasBusinessNecessityJustification))
(DataPropertyDomain :hasBusinessNecessityJustification :DisparateImpact)
(DataPropertyRange :hasBusinessNecessityJustification xsd:boolean)

(Declaration (DataProperty :hasLessDiscriminatoryAlternative))
(DataPropertyDomain :hasLessDiscriminatoryAlternative :DisparateImpact)
(DataPropertyRange :hasLessDiscriminatoryAlternative xsd:boolean)

;; Subclasses
(Declaration (Class :StatisticalDisparateImpact))
(SubClassOf :StatisticalDisparateImpact :DisparateImpact)
(AnnotationAssertion rdfs:comment :StatisticalDisparateImpact
  "Quantifiable disparity in selection/outcome rates between groups"@en)

(Declaration (Class :DisparateTreatment))
(SubClassOf :DisparateTreatment :Discrimination)
(AnnotationAssertion rdfs:comment :DisparateTreatment
  "Intentional differential treatment based on protected attribute (direct discrimination)"@en)

(Declaration (Class :DisparateOutcomes))
(SubClassOf :DisparateOutcomes :DisparateImpact)
(AnnotationAssertion rdfs:comment :DisparateOutcomes
  "Different outcomes experienced by groups, may or may not be discriminatory"@en)

;; Disjointness
(DisjointClasses :DisparateTreatment :StatisticalDisparateImpact)

;; Constraints
(SubClassOf :DisparateImpact
  (ObjectSomeValuesFrom :affectsProtectedGroup :ProtectedGroup))
(SubClassOf :DisparateImpact
  (DataSomeValuesFrom :hasDisparateImpactRatio xsd:decimal))

;; Legal Defense
(Declaration (Class :BusinessNecessityDefense))
(AnnotationAssertion rdfs:comment :BusinessNecessityDefense
  "Practice is job-related and consistent with business necessity (US law)"@en)

(Declaration (Class :ProportionateMeans))
(AnnotationAssertion rdfs:comment :ProportionateMeans
  "Practice is proportionate means of achieving legitimate aim (UK/EU law)"@en)
      ```

- ## About Disparate Impact
  id:: 0381-disparate-impact-about

  - 
  -
  
