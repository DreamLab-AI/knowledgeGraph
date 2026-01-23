- ### OntologyBlock
  id:: rov-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0128
    - filename-history:: ["RB-0128-rov.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0128
    - preferred-term:: Remotely Operated Vehicle (ROV)
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: ROV is tethered underwater robot controlled remotely via cable providing power and communications.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:Rov
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Underwater Robot]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Rov))
      (SubClassOf :Rov :UnderwaterRobot)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Rov "Remotely Operated Vehicle (ROV)"@en)
      (AnnotationAssertion rdfs:comment :Rov
        "ROV is tethered underwater robot controlled remotely via cable providing power and communications."@en)
      ```

- ## About Remotely Operated Vehicle (ROV)
  ROV is tethered underwater robot controlled remotely via cable providing power and communications.
  
  An underwater robot tethered to surface ship by cable.