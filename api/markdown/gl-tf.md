- ### Definition
  - glTF (GL Transmission Format) is an open royalty-free standard from the Khronos Group for the efficient transmission and loading of 3D scenes and models, defining geometry, materials, animation and scene structure in a compact runtime format.

- ### Semantic Classification
  - owl-class:: metaverse:glTF
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[3D File Format]]
  - bridges-to:: [[WebXR]]
  - requires:: [[3D Model]], [[Material Definition]]
  - enables:: [[Asset Interoperability]], [[Real-Time Rendering]]

- ### Content
  - glTF encodes meshes, textures, skinning, animation and a node hierarchy in a JSON description paired with binary buffers, optimised for direct upload to graphics APIs without an intermediate translation step. It is widely used as a delivery format for the web and for real-time engines because it minimises parsing and runtime processing.
  - The format is maintained by the Khronos Group and is often described as the JPEG of 3D. Extensions cover physically based materials, compression such as Draco and Meshopt, and integration with rendering features, which makes glTF a common interchange target for metaverse platforms and 3D asset pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z