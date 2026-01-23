- ### OntologyBlock
  id:: steppermotor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0173
    - filename-history:: ["RB-0173-steppermotor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0173
    - preferred-term:: Stepper Motor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Stepper motor divides full rotation into discrete steps for open-loop position control.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:StepperMotor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Electric Motor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :StepperMotor))
      (SubClassOf :StepperMotor :ElectricMotor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :StepperMotor "Stepper Motor"@en)
      (AnnotationAssertion rdfs:comment :StepperMotor
        "Stepper motor divides full rotation into discrete steps for open-loop position control."@en)
      ```

- ## About Stepper Motor
  Stepper motor divides full rotation into discrete steps for open-loop position control.
  
  A motor moving in discrete steps.