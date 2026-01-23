- ### OntologyBlock
  id:: rotaryencoder-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0157
    - filename-history:: ["RB-0157-rotaryencoder.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0157
    - preferred-term:: Rotary Encoder
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Rotary encoder measures shaft angle and direction.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:RotaryEncoder
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Encoder]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :RotaryEncoder))
      (SubClassOf :RotaryEncoder :Encoder)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :RotaryEncoder "Rotary Encoder"@en)
      (AnnotationAssertion rdfs:comment :RotaryEncoder
        "Rotary encoder measures shaft angle and direction."@en)
      ```

- ## About Rotary Encoder
  Rotary encoder measures shaft angle and direction.
  
  An encoder measuring angular position.