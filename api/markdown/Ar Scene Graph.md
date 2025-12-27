- ### OntologyBlock
  id:: ar-scene-graph-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9772
	- source-domain:: mv
	- preferred-term:: Ar Scene Graph
	- status:: active
	- definition:: AR Scene Graph is a hierarchical data structure used in augmented reality to represent and organize spatial relationships between virtual objects, real-world elements, and their transformations, enabling context-aware placement, semantic understanding, and natural interaction between digital content and physical environments.
	- owl:class:: mv:ArSceneGraph
	- belongsToDomain:: [[metaverse]]
	- is-subclass-of:: [[Spatial Data Structure]]
	- enables:: [[Context-Aware AR]], [[Semantic Scene Understanding]], [[Retargetable AR Experiences]]
	- requires:: [[3D Scene Reconstruction]], [[Object Detection]], [[Spatial Relationships]]
	- #### Relationships
	  id:: ar-scene-graph-relationships
	  collapsed:: true

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
