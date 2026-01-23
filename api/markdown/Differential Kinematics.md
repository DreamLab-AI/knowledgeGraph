- ### OntologyBlock
  id:: differentialkinematics-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0183
    - filename-history:: ["RB-0183-differentialkinematics.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0183
    - preferred-term:: Differential Kinematics
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Differential kinematics uses Jacobian matrix to relate joint and Cartesian velocities.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:DifferentialKinematics
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Kinematics]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :DifferentialKinematics))
      (SubClassOf :DifferentialKinematics :RobotKinematics)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :DifferentialKinematics "Differential Kinematics"@en)
      (AnnotationAssertion rdfs:comment :DifferentialKinematics
        "Differential kinematics uses Jacobian matrix to relate joint and Cartesian velocities."@en)
      ```

- ## About Differential Kinematics
  Differential kinematics uses Jacobian matrix to relate joint and Cartesian velocities.
  
  Relationship between joint velocities and end-effector velocities.