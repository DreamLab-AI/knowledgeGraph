- ### OntologyBlock
  id:: surfacerobot-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0127
    - filename-history:: ["RB-0127-surfacerobot.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0127
    - preferred-term:: Surface Marine Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Surface marine robot operates on water surface like unmanned surface vessels.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:SurfaceRobot
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Marine Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :SurfaceRobot))
      (SubClassOf :SurfaceRobot :MarineRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :SurfaceRobot "Surface Marine Robot"@en)
      (AnnotationAssertion rdfs:comment :SurfaceRobot
        "Surface marine robot operates on water surface like unmanned surface vessels."@en)
      ```

- ## About Surface Marine Robot
  Surface marine robot operates on water surface like unmanned surface vessels.
  
  A marine robot operating on water surface.