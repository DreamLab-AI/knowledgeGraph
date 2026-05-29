- ### Definition
  - A Scene Graph Format is a standardised serialisation schema for directed acyclic graphs that represent 3D scene hierarchies, encoding spatial transforms, geometry, materials, lights, cameras, and behaviours. Major formats include glTF (optimised for runtime delivery), USD (layered composition for production pipelines), X3D (ISO web standard), and Collada (interchange for DCC tools).

- ### Semantic Classification
  - owl-class:: spatial-computing:SceneGraphFormat
  - owl-role:: Concept

- ### Relationships
  - **enables** → [[Interoperability]], [[Real-Time Rendering]], [[Digital Twin]]
  - **uses** → [[3D Asset Standard]], [[Gltf Standard]]
  - **supports** → [[3D Model]], [[Rendering Pipeline]]

- ### Content
  # SceneGraphFormat
  SceneGraphFormat defines structured representations organizing 3D scenes as directed acyclic graphs (DAGs) where nodes represent spatial entities, transformations, geometry, materials, lights, cameras, and behaviors with parent-child relationships encoding spatial hierarchies. Nodes maintain local transformation matrices composed from position, rotation, and scale, with world transforms computed by concatenating ancestor transformations enabling efficient hierarchical animation and instancing. Common formats include X3D (ISO standard) for web-based 3D with declarative scene description, Collada (COL LAborative Design Activity) supporting digital content creation tool interchange, USD (Universal Scene Description) from Pixar providing powerful composition and layering for complex pipelines, glTF optimized for efficient transmission and runtime loading, and FBX widely used for animation and model exchange. Scene graphs enable efficient spatial culling by testing bounding volumes hierarchically, allow property inheritance where children adopt parent characteristics unless overridden, support instancing where multiple references share underlying data, and facilitate level streaming for large environments. Modern formats embed metadata including physics properties, navigation hints, interaction behaviors, and custom application data.
  - https://www.web3d.org/specifications/X3D - X3D ISO standard for web3D
  - https://www.khronos.org/collada/ - Collada 3D asset exchange schema
  - https://openusd.org/release/index.html - USD comprehensive documentation
  - https://www.khronos.org/gltf/ - glTF runtime 3D asset delivery

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z