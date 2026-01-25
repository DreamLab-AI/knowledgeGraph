- ### OntologyBlock
  id:: humanoid-robot-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0004
    - preferred-term:: Humanoid Robot
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A humanoid robot is a robot whose overall appearance and kinematic structure are based on the human body, typically including a head, torso, two arms, and two legs.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 0.96

  - **Semantic Classification**
    - owl:class:: rb:HumanoidRobot
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    id:: humanoid-robot-relationships
    - is-part-of:: [[Robot (RB-0001)]], [[MobileRobot (RB-0002)]]

  - #### OWL Axioms
    id:: humanoid-robot-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :HumanoidRobot))
      (SubClassOf :HumanoidRobot :Robot)
      (SubClassOf :HumanoidRobot :MobileRobot)
      
      (SubClassOf :HumanoidRobot
        (ObjectExactCardinality 1 :hasHead :RobotHead))
      
      (SubClassOf :HumanoidRobot
        (ObjectExactCardinality 1 :hasTorso :RobotTorso))
      
      (SubClassOf :HumanoidRobot
        (ObjectExactCardinality 2 :hasArm :RobotArm))
      
      (SubClassOf :HumanoidRobot
        (ObjectExactCardinality 2 :hasLeg :RobotLeg))
      
      (SubClassOf :HumanoidRobot
        (ObjectSomeValuesFrom :performsBipedalLocomotion :WalkingGait))
      
      (DataPropertyAssertion :isAnthropomorphic :HumanoidRobot "true"^^xsd:boolean)
      
      (AnnotationAssertion rdfs:label :HumanoidRobot "Humanoid Robot"@en)
      (AnnotationAssertion rdfs:comment :HumanoidRobot
        "Robot with human-like morphology including bipedal locomotion"@en)
      
      (Declaration (ObjectProperty :hasBodyPart))
      (ObjectPropertyDomain :hasBodyPart :HumanoidRobot)
      (ObjectPropertyRange :hasBodyPart :RobotBodyComponent)
      
      (Declaration (DataProperty :heightMeters))
      (DataPropertyDomain :heightMeters :HumanoidRobot)
      (DataPropertyRange :heightMeters xsd:decimal)
      (DataPropertyAssertion :heightMeters :HumanoidRobot "1.2"^^xsd:decimal)
      (DataPropertyAssertion :heightMeters :HumanoidRobot "2.0"^^xsd:decimal)

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)
```

- ## About Humanoid Robot
  id:: humanoid-robot-about

  - A humanoid robot is a robot whose overall appearance and kinematic structure are based on the human body, typically including a head, torso, two arms, and two legs.
  -
  - ### Technical Details
    id:: humanoid-robot-details
    - [Content preserved from original file]
  -
  - ### Standards & References
    id:: humanoid-robot-standards
    - [[ISO 8373:2021]]
  -
  - ### Related Concepts
    id:: humanoid-robot-related