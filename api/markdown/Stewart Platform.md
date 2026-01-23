- ### OntologyBlock
  id:: stewartplatform-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0137
    - filename-history:: ["RB-0137-stewartplatform.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0137
    - preferred-term:: Stewart Platform
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Stewart platform uses six prismatic actuators attached in pairs to baseplate and top plate via universal joints.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:StewartPlatform
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Parallel Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :StewartPlatform))
      (SubClassOf :StewartPlatform :ParallelRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :StewartPlatform "Stewart Platform"@en)
      (AnnotationAssertion rdfs:comment :StewartPlatform
        "Stewart platform uses six prismatic actuators attached in pairs to baseplate and top plate via universal joints."@en)
      ```

- ## About Stewart Platform
  Stewart platform uses six prismatic actuators attached in pairs to baseplate and top plate via universal joints.
  
  A parallel robot with six prismatic actuators providing 6-DOF motion (also called hexapod).