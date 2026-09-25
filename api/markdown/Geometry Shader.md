A geometry shader is a programmable stage of the graphics pipeline that operates on whole primitives, such as points, lines or triangles, after vertex processing and before rasterisation. Unlike vertex shaders, it can create or discard primitives, emitting zero or more output primitives for each input. This capability supports effects such as silhouette extrusion, point-sprite expansion and dynamic level-of-detail generation directly on the GPU.

### Overview

- The geometry shader sits between vertex processing and rasterisation, receiving fully assembled primitives rather than individual vertices.
- It is unique among shader stages in being able to amplify or cull geometry, emitting a variable number of output primitives per input primitive.
- Because amplification can be expensive, geometry shaders are often reserved for effects that genuinely require runtime primitive generation.

### Mechanisms

- The stage receives a single primitive plus optional adjacency information as input.
- Programmable logic may emit new vertices and primitives, transform them, or discard the primitive entirely.
- Emitted primitives are passed downstream to rasterisation and fragment processing.
- Output topology and maximum vertex count are declared so the GPU can allocate resources.

### Applications

- Silhouette and shadow-volume extrusion for stylised and shadowed rendering.
- Expansion of points into camera-facing sprites for particle effects.
- Dynamic tessellation and level-of-detail adjustment based on view distance.
- Generation of fur, grass and other procedural geometry on the GPU.

### Provenance

