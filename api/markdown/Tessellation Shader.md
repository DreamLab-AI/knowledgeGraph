A tessellation shader is a programmable stage of the GPU graphics pipeline that subdivides coarse geometric patches into finer primitives at render time, controlling the level of detail of surfaces dynamically. It comprises a control phase that sets tessellation factors and an evaluation phase that positions the generated vertices. By adaptively refining meshes on the GPU, it produces smooth curved surfaces and displacement-mapped detail without inflating the source geometry.

### Overview

- Introduced to offload adaptive subdivision from the CPU to the GPU, reducing geometry transfer and memory.
- Driven by per-edge and per-interior tessellation factors that scale detail by distance or screen-space error.
- Distinct from a [[Compute Shader]] in that it is fixed to the geometry-amplification role of the pipeline.

### Key aspects

- Control stage computes tessellation factors that govern how finely each patch is split.
- Evaluation stage interpolates new vertex attributes and applies displacement.
- Adaptive factors implement continuous [[Level Of Detail]] to balance fidelity and cost.
- Often paired with displacement maps to add geometric detail without authoring dense meshes.

### Applications

- Terrain and water rendering with distance-based refinement.
- Character and organic surface smoothing in interactive engines.
- Architectural and CAD visualisation requiring crisp curved edges.

### Provenance

