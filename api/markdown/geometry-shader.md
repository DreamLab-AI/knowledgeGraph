- ### Definition
  - Geometry Shader is rooted in Shader Language and relates to [[Rendering Pipeline]], [[Graphics Pipeline]], [[Rasterization]]. A geometry shader is a programmable stage of the graphics pipeline that operates on whole primitives, such as points, lines or triangles, after vertex processing and before rasterisation.

- ### Overview
  - The geometry shader sits between vertex processing and rasterisation, receiving fully assembled primitives rather than individual vertices.
  - It is unique among shader stages in being able to amplify or cull geometry, emitting a variable number of output primitives per input primitive.
  - Because amplification can be expensive, geometry shaders are often reserved for effects that genuinely require runtime primitive generation.

- ### Mechanisms
  - The stage receives a single primitive plus optional adjacency information as input.
  - Programmable logic may emit new vertices and primitives, transform them, or discard the primitive entirely.
  - Emitted primitives are passed downstream to rasterisation and fragment processing.
  - Output topology and maximum vertex count are declared so the GPU can allocate resources.

- ### Applications
  - Silhouette and shadow-volume extrusion for stylised and shadowed rendering.
  - Expansion of points into camera-facing sprites for particle effects.
  - Dynamic tessellation and level-of-detail adjustment based on view distance.
  - Generation of fur, grass and other procedural geometry on the GPU.

- ### Relationships
  - subClassOf:: [[Shader Language]]
  - hasPart:: [[Graphics Pipeline]]
  - partOf:: [[Rendering Pipeline]]
  - uses:: [[HLSL]]
  - uses:: [[GLSL]]
  - requires:: [[GPU Computing]]
  - requires:: [[Graphics Processing Unit]]
  - enables:: [[Level of Detail]]
  - enables:: [[Particle System]]
  - supports:: [[Real-Time Rendering]]
  - supports:: [[Visual Effects]]
  - contrastsWith:: [[Vertex Shader]]
  - contrastsWith:: [[Compute Shader]]
  - relatedTo:: [[Rasterization]]
  - relatedTo:: [[Graphics API]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation