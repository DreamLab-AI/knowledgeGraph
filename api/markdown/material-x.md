- ### Definition
  - MaterialX is an open standard for describing surface and procedural materials, shading networks and look development data in a renderer-independent form for exchange between content creation tools.

- ### Semantic Classification
  - owl-class:: metaverse:MaterialX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Material Definition]]
  - bridges-to:: [[glTF]]
  - requires:: [[Shader]], [[Texture Mapping]]
  - enables:: [[Physically Based Rendering]], [[Asset Interoperability]]

- ### Content
  - MaterialX captures the full graph of nodes, parameters, textures and shading relationships that define a material, allowing a look to move between applications and renderers without manual reconstruction. It separates the material definition from any specific renderer implementation.
  - Originally developed for film production and now maintained as an open standard, MaterialX is increasingly used alongside USD and glTF to carry rich material data through 3D asset pipelines. It supports physically based shading models so that appearance is preserved consistently across tools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z