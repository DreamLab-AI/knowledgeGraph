The programmable stage of the graphics pipeline in which per-fragment computations determine the final colour and depth of each candidate pixel produced by rasterisation. Fragment shaders evaluate lighting models, sample and filter textures, and apply material properties in parallel across thousands of GPU cores, consuming interpolated vertex attributes and producing the shaded values that are blended into the framebuffer, making this stage the dominant cost in most real-time rendering workloads.

### Semantic Classification

### Content

## Definition

**Fragment shading** (called pixel shading in Direct3D terminology) is the stage of the [[Real-Time Rendering Pipeline]] that computes the appearance of every fragment — a candidate pixel with associated attributes — emitted by the rasteriser. After [[Vertex Processing]] transforms geometry into screen space and [[Rasterization]] determines which pixels each triangle covers, the fragment shader runs once per fragment, receiving perspective-correct interpolated attributes such as texture coordinates, surface normals, tangents, and vertex colours, and outputting a final colour (and optionally depth) to be merged into the framebuffer.

The stage is fully programmable. Fragment shaders written in GLSL, HLSL, WGSL, or Metal Shading Language implement the material and lighting models of modern graphics: physically based BRDF evaluation with metallic-roughness parameters, normal mapping, shadow-map sampling, ambient occlusion, environment reflections, fog, and tone mapping. Because a 1080p frame can generate several million fragments — and overlapping geometry multiplies this through overdraw — fragment shading is executed in massive data parallelism on the [[GPU]], with fragments packed into warps or wavefronts that run in lockstep, and it is typically the largest consumer of both arithmetic throughput and texture bandwidth in a frame.

## Technical Details

- **Execution model**: fragments are shaded in 2×2 quads so that screen-space derivatives (ddx/ddy) can be computed by differencing neighbours; these derivatives drive mip level selection during [[Texture Mapping]]. Helper invocations at triangle edges execute solely to supply derivatives.
- **Inputs and outputs**: interpolated varyings, uniforms/constant buffers, textures and samplers in; one or more colour outputs (multiple render targets for deferred shading), optional depth, in the fixed sRGB or HDR formats of the bound framebuffer.
- **Interaction with fixed-function stages**: early depth/stencil testing can reject fragments before shading (early-Z), a major optimisation defeated when the shader writes depth or uses discard; after shading, fixed-function blending, depth test, and write-out complete the per-sample merge.
- **Performance characteristics**: cost scales with resolution, overdraw, and shader complexity rather than triangle count. Standard optimisations include depth pre-passes and front-to-back sorting to maximise early-Z rejection, moving work per-vertex where quality permits, variable-rate shading, and — on tile-based mobile GPUs — keeping intermediate results on-chip to save bandwidth.
- **Architectural alternatives**: deferred shading decouples visibility from shading by writing geometric attributes to a G-buffer and shading once per visible pixel; compute-based and mesh-shading pipelines vary the geometry side, but per-pixel appearance in rasterised rendering remains the fragment shader's job.

  ## Current Landscape

- **WebGPU brings fragment shading to the web**: the W3C WebGPU and WGSL specifications reached Candidate Recommendation on the Recommendation track (WGSL Candidate Recommendation Draft, June 2025; both specs actively maintained into 2026). WGSL defines exactly three programmable stages — vertex, fragment, and compute — with `@fragment` entry points that sample textures and output to `@location(n)` colour attachments.
- **Per-sample vs per-pixel**: the WebGPU spec formalises that fragment shaders may run once per pixel and broadcast to samples, but *must* run once per sample when `sample_index` or `sample` interpolation contributes to output — the standard multisampling/supersampling trade-off, now precisely specified for the web.
- **Integer interpolation rule**: WGSL requires user-defined fragment inputs of integer type to use `flat` interpolation, a portability constraint fixing a long-standing source of cross-GPU shader bugs.
- **Bandwidth-driven optimisation persists**: variable-rate shading, tile-based on-chip accumulation on mobile GPUs, early-Z and depth pre-passes remain the dominant levers, since fragment cost still scales with resolution and overdraw rather than triangle count.

  **Sources**:

- https://www.w3.org/TR/WGSL/
- https://www.w3.org/TR/webgpu/

### Provenance

