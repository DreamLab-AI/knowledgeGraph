iri:: http://narrativegoldmine.com/spatial-computing#3dFileFormat
uri:: urn:visionclaw:concept:spatial-computing:3d-file-format
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:3d-file-format
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: 3D File Format
content-hash:: sha256-12-998d6c33672d
legacy-term-id:: MV-9502
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T20:30:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - 3D File Formats are standardised container structures for encoding three-dimensional geometric data, textures, materials, animations, and metadata. Common formats include [[glTF]] (GL Transmission Format), FBX, OBJ, and USD, each optimised for specific use cases such as real-time rendering, interoperability, or archival preservation in spatial computing environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:3DFileFormat
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: [[Data Format Standard]]
  - bridges-to:: [[3D Model]], [[Asset Pipeline]], [[Interoperability]]
  - enables:: [[Cross-Platform Asset Exchange]], [[3D Rendering]], [[Digital Asset Management]]
  - requires:: [[Mesh Data]], [[Material Definition]], [[Animation Keyframes]]

- ### Content

  ## Overview

  3D File Formats serve as critical interchange standards enabling asset portability across development tools, rendering engines, and platforms. Each format balances file size, fidelity, rendering efficiency, and supported features.

  ## Common Formats
  - **glTF**: Optimised for web and real-time applications, providing efficient streaming
  - **FBX**: Industry standard for animation and rigging workflows
  - **OBJ**: Simple text-based format for geometric data interchange
  - **USD**: Pixar's universal format for complex, layered virtual environments

  #### Related Concepts
  - [[3D Model]], [[Mesh Data]], [[Material Definition]], [[Asset Pipeline]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
