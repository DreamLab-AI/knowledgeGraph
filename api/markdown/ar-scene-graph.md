- ### Definition
  - AR Scene Graph is a hierarchical data structure used in augmented reality to represent and organize spatial relationships between virtual objects, real-world elements, and their transformations, enabling context-aware placement, semantic understanding, and natural interaction between digital content and physical environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:ArSceneGraph
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Spatial Data Structure]]
  - requires:: [[3D Scene Reconstruction]], [[Object Detection]], [[Spatial Relationships]]
  - enables:: [[Context-Aware AR]], [[Semantic Scene Understanding]], [[Retargetable AR Experiences]]
  - bridges-to:: [[Computer Vision]] (ai)

- ### Content

  ### Technical Details
  Key components include:
  - **Hierarchical Structure**: Nodes representing scene entities (floors, rooms, objects) with edges representing relative transformations
  - **Spatial Relationships**: Proximity, support, and comparative relationships between objects for rich scene understanding
  - **Semantic Annotations**: Object classification, material properties, and functional attributes
  - **Spatial Relationship Graphs (SRGs)**: Extended scene graphs incorporating real-world sensor data from trackers and cameras

  ### Applications
  - **Retargetable AR**: Framework adapting AR experiences to various environments based on scene context rather than absolute coordinates
  - **Indoor Navigation**: Hierarchical understanding of floors, rooms, and objects for wayfinding
  - **Interactive Storytelling**: Automatic population of virtual content matching story plots to scene semantics
  - **Robotics and Smart Homes**: Scene understanding for autonomous navigation and assistive technologies

  ### Technical Implementation
  3D Scene Graph Generators incrementally build semantic and spatial representations from RGB-D sequences by detecting objects, estimating poses, selecting optimal viewpoints, and extracting inter-object relations via vision-language reasoning.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z