- ### OntologyBlock
  id:: manipulator-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0003
    - preferred-term:: Manipulator
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: A manipulator is a robot consisting of a series of segments, typically moving in a serial or parallel kinematic chain, with an end-effector for performing tasks.
    - maturity:: mature
    - source:: [[ISO 8373:2021]]
    - authority-score:: 0.99

  - **Semantic Classification**
    - owl:class:: rb:Manipulator
    - owl:role:: Object
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    id:: manipulator-relationships
    - is-part-of:: [[Robot (RB-0001)]]

  - #### OWL Axioms
    id:: manipulator-owl-axioms
    collapsed:: true
    - ```clojure
      ; Core Class Declaration
      (Declaration (Class :Manipulator))
      (SubClassOf :Manipulator :Robot)
      
      ; Defining Characteristics
      (SubClassOf :Manipulator
        (ObjectSomeValuesFrom :hasKinematicChain :KinematicStructure))
      
      (SubClassOf :Manipulator
        (ObjectSomeValuesFrom :hasEndEffector :EndEffector))
      
      (SubClassOf :Manipulator
        (ObjectSomeValuesFrom :definesWorkspace :WorkspaceVolume))
      
      (SubClassOf :Manipulator
        (ObjectMinCardinality 3 :hasJoint :RoboticJoint))
      
      ; Kinematic Types
      (DisjointUnion :KinematicStructure
        (:SerialKinematic :ParallelKinematic :HybridKinematic))
      
      ; Joint Types
      (DisjointUnion :RoboticJoint
        (:RevoluteJoint :PrismaticJoint :HelicalJoint :CylindricalJoint))
      
      ; Properties
      (DataPropertyAssertion :hasManipulationCapability :Manipulator "true"^^xsd:boolean)
      
      ; Workspace Constraint
      (SubClassOf :Manipulator
        (DataSomeValuesFrom :hasReach xsd:decimal))
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Manipulator "Manipulator"@en)
      (AnnotationAssertion rdfs:comment :Manipulator
        "Robot with kinematic chain and end-effector for object manipulation"@en)
      (AnnotationAssertion :hasISOReference :Manipulator "ISO 8373:2021"^^xsd:string)
      
      ; Object Properties
      (Declaration (ObjectProperty :hasKinematicChain))
      (ObjectPropertyDomain :hasKinematicChain :Manipulator)
      (ObjectPropertyRange :hasKinematicChain :KinematicStructure)
      (FunctionalObjectProperty :hasKinematicChain)
      
      (Declaration (ObjectProperty :hasEndEffector))
      (ObjectPropertyDomain :hasEndEffector :Manipulator)
      (ObjectPropertyRange :hasEndEffector :EndEffector)
      
      (Declaration (ObjectProperty :hasJoint))
      (ObjectPropertyDomain :hasJoint :Manipulator)
      (ObjectPropertyRange :hasJoint :RoboticJoint)
      
      (Declaration (ObjectProperty :definesWorkspace))
      (ObjectPropertyDomain :definesWorkspace :Manipulator)
      (ObjectPropertyRange :definesWorkspace :WorkspaceVolume)
      
      ; Data Properties
      (Declaration (DataProperty :hasReach))
      (DataPropertyDomain :hasReach :Manipulator)
      (DataPropertyRange :hasReach xsd:decimal)
      
      (Declaration (DataProperty :payloadCapacity))
      (DataPropertyDomain :payloadCapacity :Manipulator)
      (DataPropertyRange :payloadCapacity xsd:decimal)
      
      (Declaration (DataProperty :repeatability))
      (DataPropertyDomain :repeatability :Manipulator)
      (DataPropertyRange :repeatability xsd:decimal)
      
      ; Equivalence Axioms
      (EquivalentClasses :Manipulator
        (ObjectIntersectionOf :Robot
          (ObjectSomeValuesFrom :hasKinematicChain :KinematicStructure)
          (ObjectSomeValuesFrom :hasEndEffector :EndEffector)))

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)
```

- ## About Manipulator
  id:: manipulator-about

  - A manipulator is a robot consisting of a series of segments, typically moving in a serial or parallel kinematic chain, with an end-effector for performing tasks.
  -
  - ### Technical Details
    id:: manipulator-details
    - [Content preserved from original file]
  -
  - ### Standards & References
    id:: manipulator-standards
    - [[ISO 8373:2021]]
  -
  - ### Related Concepts
    id:: manipulator-related