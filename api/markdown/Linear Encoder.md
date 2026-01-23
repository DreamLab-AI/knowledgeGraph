- ### OntologyBlock
  id:: linearencoder-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0158
    - filename-history:: ["RB-0158-linearencoder.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0158
    - preferred-term:: Linear Encoder
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Linear encoder measures linear displacement.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:LinearEncoder
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Encoder]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :LinearEncoder))
      (SubClassOf :LinearEncoder :Encoder)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :LinearEncoder "Linear Encoder"@en)
      (AnnotationAssertion rdfs:comment :LinearEncoder
        "Linear encoder measures linear displacement."@en)
      ```

- ## About Linear Encoder
  Linear encoder measures linear displacement.
  
  An encoder measuring linear position.