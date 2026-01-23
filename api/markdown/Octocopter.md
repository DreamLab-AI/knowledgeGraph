- ### OntologyBlock
  id:: octocopter-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0124
    - filename-history:: ["RB-0124-octocopter.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0124
    - preferred-term:: Octocopter
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Octocopter is an eight-rotor VTOL aircraft for heavy payloads.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:Octocopter
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Multirotor]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Octocopter))
      (SubClassOf :Octocopter :Multirotor)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Octocopter "Octocopter"@en)
      (AnnotationAssertion rdfs:comment :Octocopter
        "Octocopter is an eight-rotor VTOL aircraft for heavy payloads."@en)
      ```

- ## About Octocopter
  Octocopter is an eight-rotor VTOL aircraft for heavy payloads.
  
  A multirotor with eight rotors.