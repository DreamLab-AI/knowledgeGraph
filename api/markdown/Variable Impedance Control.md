- ### OntologyBlock
  id:: variableimpedancecontrol-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0151
    - filename-history:: ["RB-0151-variableimpedancecontrol.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0151
    - preferred-term:: Variable Impedance Control
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Variable impedance control modulates robot impedance parameters online based on task requirements.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:VariableImpedanceControl
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Impedance Control]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :VariableImpedanceControl))
      (SubClassOf :VariableImpedanceControl :ImpedanceControl)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :VariableImpedanceControl "Variable Impedance Control"@en)
      (AnnotationAssertion rdfs:comment :VariableImpedanceControl
        "Variable impedance control modulates robot impedance parameters online based on task requirements."@en)
      ```

- ## About Variable Impedance Control
  Variable impedance control modulates robot impedance parameters online based on task requirements.
  
  An impedance control system with online adjustable parameters.