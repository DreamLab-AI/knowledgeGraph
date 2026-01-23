- ### OntologyBlock
  id:: tactilesensor-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0164
    - filename-history:: ["RB-0164-tactilesensor.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0164
    - preferred-term:: Tactile Sensor
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Tactile sensor provides touch sensing capability similar to human fingertips.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:TactileSensor
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Exteroceptive Sensor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :TactileSensor))
      (SubClassOf :TactileSensor :ExteroceptiveSensor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :TactileSensor "Tactile Sensor"@en)
      (AnnotationAssertion rdfs:comment :TactileSensor
        "Tactile sensor provides touch sensing capability similar to human fingertips."@en)
      ```

- ## About Tactile Sensor
  Tactile sensor provides touch sensing capability similar to human fingertips.
  
  A sensor measuring contact forces and textures.