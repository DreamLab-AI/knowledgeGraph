Vertex processing is the stage of the graphics pipeline that operates on each vertex of geometry, transforming its position from model space through world, view, and clip space, and computing or passing per-vertex attributes such as normals, texture coordinates, and colours. Executed largely by programmable vertex shaders on the GPU, it prepares primitives for clipping, perspective division, and rasterisation, and may feed subsequent geometry, tessellation, and fragment stages. As a foundational step in real-time rendering it determines screen-space placement and the interpolated inputs available to downstream shading.

### Overview

- Vertex processing converts object-space geometry into clip-space positions ready for the fixed-function clipping and rasterisation stages.
- The transform chain composes model, view, and projection matrices, after which the GPU performs clipping and perspective division to reach normalised device coordinates.
- Per-vertex outputs such as transformed normals, texture coordinates, and varying values are interpolated across primitives to drive downstream [[Fragment Shading]].
- Modern pipelines may extend vertex processing with tessellation and geometry stages, or replace the classic path entirely with mesh shaders that amplify and cull geometry on-GPU.

### Mechanisms

#### Coordinate transforms

- Model-to-world, world-to-view (camera), and view-to-clip (projection) matrix multiplications applied per vertex.
- Normal transformation by the inverse-transpose of the model-view matrix to preserve correct lighting directions.

#### Programmable vertex shader

- The [[Vertex Shader]] executes user code per vertex on the [[GPU]], enabling skinning, morphing, procedural deformation, and instancing.
- Outputs a clip-space position plus arbitrary varyings consumed later in the pipeline.

#### Attribute fetch and assembly

- Vertex attributes are read from buffers per the input layout and assembled before shading.
- Instancing reuses vertex data across many draw instances with per-instance attributes.

#### Hand-off to rasterisation

- After clipping and perspective division, primitives pass to [[Rasterization]], which generates fragments and interpolates varyings.

### Applications

#### Real-time 3D rendering

- Core of games, simulations, and visualisation engines feeding the [[Real-Time Rendering Pipeline]].

#### Character and procedural animation

- GPU skinning, blend-shape morphing, and vertex displacement driven in the vertex stage.

#### Large-scene throughput

- Instancing and GPU-driven culling reduce CPU overhead, with [[Geometry Processing]] and mesh shaders scaling vertex counts.

### Provenance

