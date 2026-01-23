- ### OntologyBlock
  id:: leadscrewactuator-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0176
    - filename-history:: ["RB-0176-leadscrewactuator.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0176
    - preferred-term:: Lead Screw Actuator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Lead screw actuator uses threaded rod for simple linear motion.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:LeadScrewActuator
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Linear Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :LeadScrewActuator))
      (SubClassOf :LeadScrewActuator :LinearActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :LeadScrewActuator "Lead Screw Actuator"@en)
      (AnnotationAssertion rdfs:comment :LeadScrewActuator
        "Lead screw actuator uses threaded rod for simple linear motion."@en)
      ```

- ## About Lead Screw Actuator
  Lead screw actuator uses threaded rod for simple linear motion.
  
  A linear actuator using lead screw mechanism.