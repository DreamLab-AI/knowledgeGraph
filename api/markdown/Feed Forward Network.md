- ### OntologyBlock
  id:: feedforwardnetwork-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0811
    - filename-history:: ["AI-0811-feedforwardnetwork.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0811
    - preferred-term:: Feed Forward Network
    - source-domain:: ai
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: 
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:FeedForwardNetwork
    - belongsToDomain:: [[Artificial Intelligence]]

  - #### Relationships
    - is-subclass-of:: [[Neural Network Component]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :FeedForwardNetwork))
      (SubClassOf :FeedForwardNetwork :NeuralNetworkComponent)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :FeedForwardNetwork "Feed Forward Network"@en)
      ```

- ## About Feed Forward Network
  