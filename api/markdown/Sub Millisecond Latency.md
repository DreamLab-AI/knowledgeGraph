- ### OntologyBlock
  id:: submillisecondlatency-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0565
    - filename-history:: ["BC-0565-submillisecondlatency.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0565
    - preferred-term:: Sub-Millisecond Latency
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Latency characteristic where consensus adds less than one millisecond to transaction confirmation time.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:SubMillisecondLatency
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :SubMillisecondLatency))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :SubMillisecondLatency "Sub-Millisecond Latency"@en)
      (AnnotationAssertion rdfs:comment :SubMillisecondLatency
        "Latency characteristic where consensus adds less than one millisecond to transaction confirmation time."@en)
      ```

- ## About Sub-Millisecond Latency
  Latency characteristic where consensus adds less than one millisecond to transaction confirmation time.