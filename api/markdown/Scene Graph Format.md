iri:: http://narrativegoldmine.com/spatial-computing#SceneGraphFormat
uri:: urn:visionclaw:concept:spatial-computing:scene-graph-format
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:scene-graph-format
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Scene Graph Format
content-hash:: sha256-12-958efc8f3eed
legacy-term-id:: MV-9134
status:: draft
maturity:: draft
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
  - SceneGraphFormat is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:SceneGraphFormat
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
