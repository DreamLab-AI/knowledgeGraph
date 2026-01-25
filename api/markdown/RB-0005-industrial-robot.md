- ### OntologyBlock
  id:: industrial-robot-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0005
    - preferred-term:: Industrial Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: An industrial robot is an automatically controlled, reprogrammable, multipurpose manipulator programmable in three or more axes, which may be either fixed in place or mobile for use in industrial automation applications.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 1.0

  - **Semantic Classification**
    - owl:class:: rb:IndustrialRobot
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    id:: industrial-robot-relationships
    - is-part-of:: [[Manipulator (RB-0003)]]

  - #### OWL Axioms
    id:: industrial-robot-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :IndustrialRobot))
      (SubClassOf :IndustrialRobot :Manipulator)
      
      (SubClassOf :IndustrialRobot
        (ObjectMinCardinality 3 :hasAxis :RoboticAxis))
      
      (SubClassOf :IndustrialRobot
        (DataSomeValuesFrom :isReprogrammable xsd:boolean))
      
      (SubClassOf :IndustrialRobot
        (DataHasValue :isReprogrammable "true"^^xsd:boolean))
      
      (SubClassOf :IndustrialRobot
        (ObjectSomeValuesFrom :operatesIn :IndustrialEnvironment))
      
      (DisjointUnion :IndustrialRobotType
        (:ArticulatedRobot :SCARArobot :CartesianRobot :CylindricalRobot :DeltaRobot :PolarRobot))
      
      (AnnotationAssertion rdfs:label :IndustrialRobot "Industrial Robot"@en)
      (AnnotationAssertion :hasISOReference :IndustrialRobot "ISO 8373:2021, ISO 10218-1:2011"^^xsd:string)
      
      (Declaration (ObjectProperty :hasApplicationDomain))
      (ObjectPropertyDomain :hasApplicationDomain :IndustrialRobot)
      (ObjectPropertyRange :hasApplicationDomain :ManufacturingProcess)
      
      (Declaration (DataProperty :cycleTime))
      (DataPropertyDomain :cycleTime :IndustrialRobot)
      (DataPropertyRange :cycleTime xsd:decimal)
      
      (Declaration (DataProperty :mtbf))
      (DataPropertyDomain :mtbf :IndustrialRobot)
      (DataPropertyRange :mtbf xsd:integer)

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)
```

- ## About Industrial Robot
  id:: industrial-robot-about

  - An industrial robot is an automatically controlled, reprogrammable, multipurpose manipulator programmable in three or more axes, which may be either fixed in place or mobile for use in industrial automation applications.
  -
  - ### Technical Details
    id:: industrial-robot-details
    - [Content preserved from original file]
  -
  - ### Standards & References
    id:: industrial-robot-standards
    - [[ISO 8373:2021]]
    - [[ISO 10218-1]]
  -
  - ### Related Concepts
    id:: industrial-robot-related
