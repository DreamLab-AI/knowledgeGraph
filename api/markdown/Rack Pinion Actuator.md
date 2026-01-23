- ### OntologyBlock
  id:: rackpinionactuator-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0178
    - filename-history:: ["RB-0178-rackpinionactuator.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0178
    - preferred-term:: Rack and Pinion Actuator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: Rack and pinion actuator converts rotary motion to linear via gear mechanism.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:RackPinionActuator
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Linear Actuator]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :RackPinionActuator))
      (SubClassOf :RackPinionActuator :LinearActuator)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :RackPinionActuator "Rack and Pinion Actuator"@en)
      (AnnotationAssertion rdfs:comment :RackPinionActuator
        "Rack and pinion actuator converts rotary motion to linear via gear mechanism."@en)
      ```

- ## About Rack and Pinion Actuator
  Rack and pinion actuator converts rotary motion to linear via gear mechanism.
  
  A linear actuator using rack and pinion mechanism.