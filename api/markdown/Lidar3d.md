- ### OntologyBlock
  id:: lidar3d-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0163
    - filename-history:: ["RB-0163-lidar3d.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0163
    - preferred-term:: 3D LiDAR
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: 3D LiDAR generates three-dimensional point cloud of environment.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:Lidar3d
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Lidar]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Lidar3d))
      (SubClassOf :Lidar3d :Lidar)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Lidar3d "3D LiDAR"@en)
      (AnnotationAssertion rdfs:comment :Lidar3d
        "3D LiDAR generates three-dimensional point cloud of environment."@en)
      ```

- ## About 3D LiDAR
  3D LiDAR generates three-dimensional point cloud of environment.
  
  A LiDAR creating 3D point clouds.