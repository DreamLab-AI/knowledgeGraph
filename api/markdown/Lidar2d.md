- ### OntologyBlock
  id:: lidar2d-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: RB
    - sequence-number:: 0162
    - filename-history:: ["RB-0162-lidar2d.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: RB-0162
    - preferred-term:: 2D LiDAR
    - source-domain:: rb
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-13

  - **Definition**
    - definition:: 2D LiDAR scans single horizontal or vertical plane for obstacle detection.
    - maturity:: established
    - source:: Chimera Prime Research
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: rb:Lidar2d
    - belongsToDomain:: [[Robotics]]

  - #### Relationships
    - is-subclass-of:: [[Lidar]]

  - #### OWL Axioms
    - ```clojure
      ; Class Declaration
      (Declaration (Class :Lidar2d))
      (SubClassOf :Lidar2d :Lidar)
      
      ; Annotations
      (AnnotationAssertion rdfs:label :Lidar2d "2D LiDAR"@en)
      (AnnotationAssertion rdfs:comment :Lidar2d
        "2D LiDAR scans single horizontal or vertical plane for obstacle detection."@en)
      ```

- ## About 2D LiDAR
  2D LiDAR scans single horizontal or vertical plane for obstacle detection.
  
  A LiDAR scanning in single plane.