- ### OntologyBlock
  id:: newtoneulerdynamics-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0184
    - filename-history:: ["RB-0184-newtoneulerdynamics.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0184
    - preferred-term:: Newton-Euler Dynamics
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Newton-Euler method applies F=ma and τ=Iα to each link recursively.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:NewtonEulerDynamics
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Dynamics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :NewtonEulerDynamics))
      (SubClassOf :NewtonEulerDynamics :RobotDynamics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :NewtonEulerDynamics "Newton-Euler Dynamics"@en)
      (AnnotationAssertion rdfs:comment :NewtonEulerDynamics
        "Newton-Euler method applies F=ma and τ=Iα to each link recursively."@en)
      ```

- ## About Newton-Euler Dynamics
  Newton-Euler method applies F=ma and τ=Iα to each link recursively.
  
  Dynamics formulation using Newton's and Euler's equations.