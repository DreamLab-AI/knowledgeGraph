- ### OntologyBlock
  id:: monocularcamera-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0160
    - filename-history:: ["RB-0160-monocularcamera.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0160
    - preferred-term:: Monocular Camera
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Monocular camera uses single lens to capture 2D images.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:MonocularCamera
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Camera]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :MonocularCamera))
      (SubClassOf :MonocularCamera :Camera)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MonocularCamera "Monocular Camera"@en)
      (AnnotationAssertion rdfs:comment :MonocularCamera
        "Monocular camera uses single lens to capture 2D images."@en)
      ```

- ## About Monocular Camera
  Monocular camera uses single lens to capture 2D images.
  
  A single camera providing 2D images.