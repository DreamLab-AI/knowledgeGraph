- ### OntologyBlock
  id:: proprioceptivesensor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0155
    - filename-history:: ["RB-0155-proprioceptivesensor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0155
    - preferred-term:: Proprioceptive Sensor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Proprioceptive sensor provides information about robot's own configuration and internal forces.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:ProprioceptiveSensor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Robot Sensor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :ProprioceptiveSensor))
      (SubClassOf :ProprioceptiveSensor :RobotSensor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :ProprioceptiveSensor "Proprioceptive Sensor"@en)
      (AnnotationAssertion rdfs:comment :ProprioceptiveSensor
        "Proprioceptive sensor provides information about robot's own configuration and internal forces."@en)
      ```

- ## About Proprioceptive Sensor
  Proprioceptive sensor provides information about robot's own configuration and internal forces.
  
  A sensor measuring robot's internal state (position, velocity, force).