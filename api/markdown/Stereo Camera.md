- ### OntologyBlock
  id:: stereocamera-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0161
    - filename-history:: ["RB-0161-stereocamera.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0161
    - preferred-term:: Stereo Camera
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Stereo camera uses two lenses to capture images for 3D depth estimation.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:StereoCamera
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Camera]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :StereoCamera))
      (SubClassOf :StereoCamera :Camera)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :StereoCamera "Stereo Camera"@en)
      (AnnotationAssertion rdfs:comment :StereoCamera
        "Stereo camera uses two lenses to capture images for 3D depth estimation."@en)
      ```

- ## About Stereo Camera
  Stereo camera uses two lenses to capture images for 3D depth estimation.
  
  A dual camera system providing depth perception.