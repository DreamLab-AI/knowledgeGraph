iri:: http://narrativegoldmine.com/spatial-computing#SceneGraph
uri:: urn:visionclaw:concept:spatial-computing:scene-graph
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:scene-graph
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Scene Graph
content-hash:: sha256-12-a6c965d50139
legacy-term-id:: 20112
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - A hierarchical tree-based data structure organizing and describing the spatial, logical, and rendering relationships among objects in a 3D scene, enabling efficient traversal, culling, and rendering operations.

- ### Semantic Classification
  - owl-class:: spatial-computing:SceneGraph
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[InteractionDomain]]
  - implemented-in-layer:: [[DataLayer]]

- ### Relationships
  - has-part:: [[Scene Node]], [[Transform Node]], [[Geometry Node]], [[Camera Node]], [[Light Node]], [[Group Node]]
  - is-part-of:: [[Rendering Engine]], [[3D Engine]], [[Virtual World]], [[Game Engine]], [[glTF (3D File Format)]]
  - requires:: [[Transform Matrix]], [[Bounding Volume]], [[Spatial Index]]
  - enables:: [[Scene Rendering]], [[Spatial Queries]], [[Collision Detection]], [[Level of Detail]], [[Frustum Culling]]
  - depends-on:: [[Graphics API]], [[Coordinate System]], [[Rendering Pipeline]]

- ### Content
  Scene Graph — content pending enrichment.

- ### Provenance
  - sources:: [[Web3D]], [[ISO/IEC 19775-2]]
  - migration-date:: 2026-04-26T00:00:00Z
