- ### OntologyBlock
  id:: intelligentnpc-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: MV
    - sequence-number:: 0003
    - filename-history:: ["MV-0003-intelligentnpc.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: MV-0003
    - preferred-term:: Intelligent NPC
    - source-domain:: mv
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Non-player characters with AI-driven behavior.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: mv:IntelligentNpc
    - belongsToDomain:: [[Metaverse]]

  - #### Relationships
    - is-subclass-of:: [[Digital Humans]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :IntelligentNpc))
      (SubClassOf :IntelligentNpc :DigitalHumans)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :IntelligentNpc "Intelligent NPC"@en)
      (AnnotationAssertion rdfs:comment :IntelligentNpc
        "Non-player characters with AI-driven behavior."@en)
      ```

- ## About Intelligent NPC
  Non-player characters with AI-driven behavior.