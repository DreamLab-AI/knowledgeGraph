- ### OntologyBlock
  id:: lowerlimbexoskeleton-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0140
    - filename-history:: ["RB-0140-lowerlimbexoskeleton.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0140
    - preferred-term:: Lower Limb Exoskeleton
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Lower limb exoskeleton assists or augments walking and leg movements.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:LowerLimbExoskeleton
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Exoskeleton Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :LowerLimbExoskeleton))
      (SubClassOf :LowerLimbExoskeleton :ExoskeletonRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :LowerLimbExoskeleton "Lower Limb Exoskeleton"@en)
      (AnnotationAssertion rdfs:comment :LowerLimbExoskeleton
        "Lower limb exoskeleton assists or augments walking and leg movements."@en)
      ```

- ## About Lower Limb Exoskeleton
  Lower limb exoskeleton assists or augments walking and leg movements.
  
  An exoskeleton for legs and hips.