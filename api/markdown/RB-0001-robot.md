- ### OntologyBlock
  id:: robot-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: RB-0001
    - preferred-term:: Robot
    - source-domain:: rb
    - status:: complete
    - public-access:: true
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A robot is an actuated mechanism programmable in two or more axes with a degree of autonomy, moving within its environment, to perform intended tasks.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 1.0

  - **Semantic Classification**
    - owl:class:: rb:Robot
    - owl:physicality:: PhysicalEntity
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    id:: robot-relationships
    - is-part-of:: [[MechatronicSystem]], [[AutonomousAgent]]

  - #### OWL Axioms
    id:: robot-owl-axioms
    collapsed:: true
    - ```clojure
      ; Core Class Declaration
      (Declaration (Class :Robot))
      (SubClassOf :Robot :MechatronicSystem)
      (SubClassOf :Robot :AutonomousAgent)
      
      ; Essential Characteristics
      (SubClassOf :Robot
        (ObjectMinCardinality 2 :hasDegreesOfFreedom :Axis))
      
      (SubClassOf :Robot
        (ObjectSomeValuesFrom :hasControlSystem :RobotController))
      
      (SubClassOf :Robot
        (ObjectSomeValuesFrom :hasSensingCapability :SensorSystem))
      
      (SubClassOf :Robot
        (ObjectSomeValuesFrom :hasPowerSource :PowerSupply))
      
      (SubClassOf :Robot
        (ObjectSomeValuesFrom :hasMechanicalStructure :RobotFrame))
      
      ; Properties
      (DataPropertyAssertion :isProgrammable :Robot "true"^^xsd:boolean)
      (DataPropertyAssertion :minimumAxes :Robot "2"^^xsd:integer)
      (DataPropertyAssertion :hasAutonomy :Robot "true"^^xsd:boolean)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Robot "Robot"@en)
      (AnnotationAssertion rdfs:comment :Robot
        "Actuated mechanism programmable in two or more axes with a degree of autonomy"@en)
      (AnnotationAssertion :hasISOReference :Robot "ISO 8373:2021"^^xsd:string)
      (AnnotationAssertion :standardDefinition :Robot
        "ISO 8373:2021 clause 2.6"^^xsd:string)
      
      ; Disjoint Classes
      (DisjointClasses :Robot :StaticMachine)
      (DisjointClasses :Robot :PurelyMechanicalDevice)
      
      ; Object Properties
      (Declaration (ObjectProperty :hasControlSystem))
      (ObjectPropertyDomain :hasControlSystem :Robot)
      (ObjectPropertyRange :hasControlSystem :ControlSystem)
      (FunctionalObjectProperty :hasControlSystem)
      
      (Declaration (ObjectProperty :hasSensingCapability))
      (ObjectPropertyDomain :hasSensingCapability :Robot)
      (ObjectPropertyRange :hasSensingCapability :SensorSystem)
      
      (Declaration (ObjectProperty :performsTask))
      (ObjectPropertyDomain :performsTask :Robot)
      (ObjectPropertyRange :performsTask :RoboticTask)
      
      ; Data Properties
      (Declaration (DataProperty :minimumAxes))
      (DataPropertyDomain :minimumAxes :Robot)
      (DataPropertyRange :minimumAxes xsd:integer)
      
      (Declaration (DataProperty :autonomyLevel))
      (DataPropertyDomain :autonomyLevel :Robot)
      (DataPropertyRange :autonomyLevel xsd:decimal)

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)
```

- ## About Robot
  id:: robot-about

  - A robot is an actuated mechanism programmable in two or more axes with a degree of autonomy, moving within its environment, to perform intended tasks.
  -
  - ### Technical Details
    id:: robot-details
    - [Content preserved from original file]
  -
  - ### 2024-2025: The Humanoid Deployment Era
    id:: robot-recent-developments

    The period from 2024 through 2025 witnessed humanoid robotics transition from research demonstrations to commercial production deployments, with **Tesla Optimus** and **Figure AI** leading the charge towards mass-manufactured general-purpose robots. What remained speculative in 2023 became operational reality by 2025, with humanoid robots working production lines, navigating uneven terrain autonomously, and approaching price points enabling consumer adoption.

    #### Tesla Optimus: Production Scaling
    Tesla announced plans to produce approximately **5,000 Optimus robots in 2025** for internal factory use, with aggressive scaling to 10,000-12,000 unit capacity and a target of **50,000 units in 2026**. Production Version 2 (V2), incorporating lessons from V1, was expected mid-2025 with monthly capacity of 10,000 units. Elon Musk projected long-term pricing between **$20,000-30,000**—"less than a car"—with production costs dropping below $20,000 at volumes exceeding 1 million units annually, roughly half the cost of a Model Y at equivalent scale.

    Technical demonstrations in December 2024 showed Optimus traversing uneven terrain and self-correcting when slipping—**all without vision**, relying entirely on neural networks and sensors for autonomous navigation. Tesla reported two Optimus robots already working autonomously in its factory, validating real-world operational capabilities beyond controlled demonstrations.

    #### Figure AI: First Commercial Humanoid Deployment
    **Figure 02** became the first humanoid robot successfully deployed in automotive production, operating at **BMW Group Plant Spartanburg** in South Carolina. Figure AI founder Brett Adcock reported one robot running on the BMW X3 body shop production line for **five months, 10 hours per day, every single day** of production—demonstrating sustained operational reliability critical for industrial adoption.

    Performance metrics showed remarkable improvements: Figure 02 achieved a **400% increase in speed** and **7× improvement in success rate** compared to its predecessor, performing up to **1,000 placements per day**. The robot's hands evolved to include **16 degrees of freedom per hand** with human-equivalent strength, whilst overall computing power tripled and voice communication capabilities improved substantially.

    Figure AI raised over **$700 million since 2022**, with backers including Microsoft, NVIDIA, Intel Capital, and Jeff Bezos' investment firm. Reuters reported in February 2025 that Figure sought an additional **$1.5 billion**, potentially valuing the company at **$40 billion**—reflecting investor confidence in humanoid robotics' commercial viability.

    #### Industry Context and Trajectory
    Humanoid robotics approached a use-case and commercial-validation inflection point, with companies including Agility Robotics (Digit), Figure AI, and Apptronik competing for production deployments. However, as IEEE Spectrum noted, operational maturity, continuous uptime, field-proven reliability, and demonstrable unit economics remained to be fully proven across the industry.

    The integration of large language models with robotic systems—"putting ChatGPT brains inside robot bodies," as Scientific American characterised it—enabled natural language task specification and adaptive behaviour. Research from MIT, Stanford (Mobile ALOHA, DrEureka), and commercial labs demonstrated robots tidying rooms, performing complex manipulations, and learning sim-to-real transfers with minimal human intervention.

    By late 2025, the remaining question was not "if" humanoid robots would transform labour markets, but "when" and "how fast." The 2-5 year timeline projected in early 2024 appeared increasingly conservative as production deployments accelerated and costs declined. The confluence of AI reasoning, improved actuators, mass manufacturing, and commercial validation suggested that humanoid robots would become ubiquitous infrastructure by 2027-2030—fundamentally reshaping manufacturing, logistics, healthcare, and domestic labour.
  -
  - ### Standards & References
    id:: robot-standards
    - [[ISO 8373:2021]]
  -
  - ### Related Concepts
    id:: robot-related
