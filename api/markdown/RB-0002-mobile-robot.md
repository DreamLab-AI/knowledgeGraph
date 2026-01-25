- ### OntologyBlock
  id:: mobile-robot-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0002
    - preferred-term:: Mobile Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A mobile robot is a robot with locomotion capabilities that enable it to move within its working environment.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 0.98

  - **Semantic Classification**
    - owl:class:: rb:MobileRobot
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    id:: mobile-robot-relationships
    - is-part-of:: [[Robot (RB-0001)]]

  - #### OWL Axioms
    id:: mobile-robot-owl-axioms
    collapsed:: true
    - ```clojure
      ; Core Class Declaration
      (Declaration (Class :MobileRobot))
      (SubClassOf :MobileRobot :Robot)
      
      ; Defining Characteristics
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :hasLocomotionSystem :LocomotionMechanism))
      
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :hasNavigationCapability :NavigationSystem))
      
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :performsLocalisation :LocalisationMethod))
      
      (SubClassOf :MobileRobot
        (ObjectSomeValuesFrom :operatesInEnvironment :OperationalEnvironment))
      
      ; Locomotion Types (Disjoint Union)
      (DisjointUnion :LocomotionMechanism
        (:WheeledLocomotion :TrackedLocomotion :LeggedLocomotion
         :AerialLocomotion :AquaticLocomotion :HybridLocomotion))
      
      ; Properties
      (DataPropertyAssertion :hasLocomotionCapability :MobileRobot "true"^^xsd:boolean)
      (DataPropertyAssertion :requiresNavigation :MobileRobot "true"^^xsd:boolean)
      
      ; Navigation Requirements
      (SubClassOf :MobileRobot
        (ObjectMinCardinality 1 :hasSensor :PerceptionSensor))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :MobileRobot "Mobile Robot"@en)
      (AnnotationAssertion rdfs:comment :MobileRobot
        "Robot with locomotion capabilities for environmental navigation"@en)
      (AnnotationAssertion :hasISOReference :MobileRobot "ISO 8373:2021"^^xsd:string)
      
      ; Object Properties
      (Declaration (ObjectProperty :hasLocomotionSystem))
      (ObjectPropertyDomain :hasLocomotionSystem :MobileRobot)
      (ObjectPropertyRange :hasLocomotionSystem :LocomotionMechanism)
      
      (Declaration (ObjectProperty :hasNavigationCapability))
      (ObjectPropertyDomain :hasNavigationCapability :MobileRobot)
      (ObjectPropertyRange :hasNavigationCapability :NavigationSystem)
      
      (Declaration (ObjectProperty :traversesTerrain))
      (ObjectPropertyDomain :traversesTerrain :MobileRobot)
      (ObjectPropertyRange :traversesTerrain :TerrainType)
      
      ; Data Properties
      (Declaration (DataProperty :maximumSpeed))
      (DataPropertyDomain :maximumSpeed :MobileRobot)
      (DataPropertyRange :maximumSpeed xsd:decimal)
      
      (Declaration (DataProperty :mobilityEnvelope))
      (DataPropertyDomain :mobilityEnvelope :MobileRobot)
      (DataPropertyRange :mobilityEnvelope xsd:string)
      
      ; Equivalence Axioms
      (EquivalentClasses :MobileRobot
        (ObjectIntersectionOf :Robot
          (ObjectSomeValuesFrom :hasLocomotionSystem :LocomotionMechanism)))

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)
```

- ## About Mobile Robot
  id:: mobile-robot-about

  - A mobile robot is a robot with locomotion capabilities that enable it to move within its working environment.
  -
  - ### Technical Details
    id:: mobile-robot-details
    - [Content preserved from original file]
  -
  - ### Standards & References
    id:: mobile-robot-standards
    - [[ISO 8373:2021]]
  -
  - ### Related Concepts
    id:: mobile-robot-related


<!-- Merged from Mobile Robot.md: Artificial Intelligence, Artificial Superintelligence, Microsoft CoPilot, Prompt Engineering -->
