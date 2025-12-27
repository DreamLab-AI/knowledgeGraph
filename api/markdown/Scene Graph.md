id:: scene-graph-ontology

- ### OntologyBlock
  id:: Scene Graph
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0112
  - preferred-term:: Scene Graph
  - source-domain:: mv
  - owl:class:: mv:SceneGraph
  - status:: draft
  - definition:: A hierarchical tree-based data structure organizing and describing the spatial, logical, and rendering relationships among objects in a 3D scene, enabling efficient traversal, culling, and rendering operations.

### Relationships
- is-subclass-of:: [[Metaverse]]
- is-part-of:: [[VirtualWorld]]
- is-part-of:: [[Game Engine]]
- is-part-of:: [[3D Engine]]
- is-part-of:: [[Rendering Engine]]
- is-part-of:: [[glTF (3D File Format)]]
- has-part:: [[Scene Node]]
- has-part:: [[Camera Node]]
- has-part:: [[Light Node]]
- has-part:: [[Group Node]]
- has-part:: [[Geometry Node]]
- has-part:: [[Transform Node]]
- requires:: [[Bounding Volume]]
- requires:: [[Transform Matrix]]
- requires:: [[Spatial Index]]
- enables:: [[Level of Detail]]
- enables:: [[Spatial Queries]]
- enables:: [[Scene Rendering]]
- enables:: [[Frustum Culling]]
- enables:: [[Collision Detection]]
- is-required-by:: [[Real-Time Rendering Pipeline]]
- depends-on:: [[Graphics API]]
- depends-on:: [[Rendering Pipeline]]
- depends-on:: [[Coordinate System]]
