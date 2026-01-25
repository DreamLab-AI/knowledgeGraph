- ### OntologyBlock
  id:: 0384-intersectional-fairness-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0384
    - preferred-term:: Intersectional Fairness
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Intersectional Fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognizing that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analyzing single attributes in isolation. Rooted in intersectionality theory from critical race and feminist scholarship (Crenshaw 1989), this framework acknowledges that the experiences of, for example, Black women cannot be understood simply as the combination of being Black and being a woman, but involve distinct discriminatory patterns at the intersection of race and gender. In AI systems, intersectional fairness requires evaluating bias and fairness metrics across intersectional subgroups defined by specific combinations of protected attribute values, where the number of subgroups equals the product of attribute cardinalities (e.g., 2 genders × 4 race categories × 3 age brackets = 24 subgroups). This analysis often reveals intersectional disparities where subgroups experience worse outcomes than predicted by single-attribute analysis, particularly affecting individuals with multiple marginalized identities. Implementation challenges include exponential growth of subgroups with additional attributes, sample size limitations for rare intersectional groups, and computational complexity of enforcing fairness across all subgroups simultaneously. Intersectional fairness auditing is increasingly required by comprehensive AI governance frameworks and documented in research by Buolamwini and Gebru (2018) on gender-race bias in facial recognition.
    - maturity:: mature
    - source:: [[Crenshaw (1989)]], [[Buolamwini and Gebru (2018)]], [[IEEE P7003-2021]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:IntersectionalFairness
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0384-intersectional-fairness-relationships

  - #### OWL Axioms
    id:: 0384-intersectional-fairness-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :IntersectionalFairness))
(SubClassOf :IntersectionalFairness :FairnessParadigm)
(AnnotationAssertion rdfs:comment :IntersectionalFairness
  "Fairness accounting for overlapping protected attributes (e.g., Black women experience unique discrimination not captured by race or gender alone)"@en)

;; Object Properties
(Declaration (ObjectProperty :combinesAttributes))
(ObjectPropertyDomain :combinesAttributes :IntersectionalFairness)
(ObjectPropertyRange :combinesAttributes :ProtectedAttributeSet)

(Declaration (ObjectProperty :identifiesSubgroup))
(ObjectPropertyDomain :identifiesSubgroup :IntersectionalFairness)
(ObjectPropertyRange :identifiesSubgroup :IntersectionalSubgroup)

;; Data Properties
(Declaration (DataProperty :hasAttributeCount))
(DataPropertyDomain :hasAttributeCount :IntersectionalFairness)
(DataPropertyRange :hasAttributeCount xsd:integer)

(Declaration (DataProperty :hasSubgroupCount))
(AnnotationAssertion rdfs:comment :hasSubgroupCount
  "Number of intersectional subgroups = product of cardinalities"@en)

;; Subclasses
(Declaration (Class :IntersectionalSubgroup))
(AnnotationAssertion rdfs:comment :IntersectionalSubgroup
  "Subgroup defined by specific values of multiple protected attributes"@en)

(Declaration (Class :IntersectionalDisparity))
(SubClassOf :IntersectionalDisparity :AlgorithmicBias)
      ```

- ## About Intersectional Fairness
  id:: 0384-intersectional-fairness-about

  - 
  -
  

