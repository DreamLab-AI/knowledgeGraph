A rendering technique is a specific algorithm or computational methodology for transforming a three-dimensional geometric scene description into a two-dimensional pixel image, inherently balancing image fidelity against computational cost and latency. The fundamental paradigms are rasterization (projecting geometry to screen space via edge-walking and interpolation), ray tracing (physically simulating light transport by casting rays from the virtual camera), and path tracing (extending ray tracing with Monte Carlo sampling for unbiased global illumination). Modern systems layer shading models (forward, deferred, clustered), global illumination approximations, and screen-space post-processing into hybrid pipelines that target real-time or offline quality budgets across hardware ranging from mobile GPUs to dedicated ray-tracing silicon.

### Overview

- Rendering is the final synthesis step in a 3D graphics pipeline: geometry, materials, lights, and a camera viewpoint are combined by an algorithm that determines the colour of each output pixel.
- The choice of rendering technique is the primary architectural decision in any real-time or offline graphics system because it determines latency, image quality, hardware requirements, and the types of visual effects that are achievable.
- **Why it matters for spatial computing**: [[Augmented Reality]] and [[Virtual Reality]] impose strict per-frame latency budgets (typically 11–20 ms) while demanding high perceptual fidelity; the rendering technique chosen directly constrains what is possible within those budgets.
- **Why it matters for offline synthesis**: Film VFX, product visualisation, and architectural rendering prioritise photorealism over latency, favouring computationally expensive techniques such as [[Path Tracing]] and bidirectional path tracing.
- The field has been transformed by two trends: programmable [[Shader]] pipelines (replacing fixed-function hardware), and the integration of [[Machine Learning]] into rendering (super-resolution, denoising, neural radiance fields).

### Key Paradigms

- **[[Rasterization]]**
  - Dominant real-time technique since the late 1990s.
  - Projects 3D triangles onto the 2D screen via the rendering pipeline (vertex transform → rasterisation → fragment shading).
  - Efficient on current GPU architectures; limitations include difficulty with secondary rays (reflections, shadows, global illumination).
  - APIs: [[Vulkan]], [[DirectX 12]], [[OpenGL]], [[Metal]].
- **[[Ray Tracing]]**
  - Casts one or more rays per pixel from the virtual camera into the scene and computes intersections with geometry.
  - Enables physically accurate shadows, reflections, and refractions with far less per-effect engineering than rasterization hacks.
  - Hardware-accelerated on NVIDIA RTX (RT Cores), AMD RDNA 2+, Intel Arc; standardised via [[DirectX Raytracing]] (DXR) and [[Vulkan Ray Tracing]] extensions.
  - Real-time use typically blends rasterization and ray tracing in hybrid pipelines (e.g. ray-traced shadows and reflections composited over a rasterised G-buffer).
- **[[Path Tracing]]**
  - Extends ray tracing with Monte Carlo integration over the hemisphere of directions at each surface hit.
  - Produces unbiased [[Global Illumination]] including caustics, colour bleeding, and volumetric scattering.
  - Requires many samples per pixel to converge; used in offline film rendering (Pixar RenderMan, Weta Manuka, DNEG Iray).
  - Real-time path tracing is emerging via [[AI-Driven Denoising]] and hardware RT units (e.g. NVIDIA DLSS 3 + Path Tracing in Portal RTX).
- **Hybrid and Screen-Space Techniques**
  - Most shipping real-time engines blend paradigms: rasterized primary visibility + ray-traced secondary effects + screen-space approximations.
  - [[Deferred Rendering]]: separates a geometry pass (G-buffer) from a lighting pass, enabling many dynamic lights with bounded cost.
  - Clustered / Tiled Deferred: subdivides screen space into tiles or 3D clusters for efficient light assignment.
  - [[Screen-Space Reflections]] (SSR): approximates reflections using only visible pixel data.
  - [[Ambient Occlusion]]: approximates contact shadows and occlusion (SSAO, HBAO, GTAO).
  - [[Temporal Antialiasing]] (TAA): accumulates sub-pixel samples across frames to reduce aliasing.

### Core Components & Mechanisms

- **[[Shader]] Programs**: GPU programs (vertex, geometry, fragment/pixel, compute, mesh, task) that perform per-vertex and per-pixel computation; the primary creative and algorithmic surface for rendering engineers.
- **[[Physically Based Rendering]] (PBR)**: A shading paradigm that models material-light interaction using physically motivated BRDFs (Cook-Torrance microfacet model); industry standard in games and VFX since c. 2013.
- **[[Texture Mapping]]**: Applying 2D image data (colour, normal, roughness, metallic maps) to 3D geometry to add surface detail without additional geometry.
- **[[Global Illumination]]**: Algorithms that simulate indirect light transport — voxel cone tracing, light probe grids, irradiance volumes, precomputed radiance transfer, screen-space GI.
- **[[Antialiasing]]**: Techniques to reduce jagged edges — MSAA (multi-sample), TXAA, [[Temporal Antialiasing]], DLSS, FSR — increasingly handled by AI upscalers.
- **[[Level of Detail]] (LOD)**: Substituting lower-complexity geometry or impostors for distant objects to reduce shading cost without perceptible quality loss.
- **[[Scene Graph]]**: Hierarchical spatial data structure organising renderable objects; traversed each frame to determine what is submitted to the rendering pipeline.
- **Acceleration Structures**: Bounding Volume Hierarchies (BVH) and k-d trees accelerate both ray-object intersection tests and frustum culling; BVH construction is now hardware-assisted on dedicated RT units.
- **[[Post Processing]]**: Screen-space effects applied after the main render pass — tone mapping, bloom, depth of field, motion blur, chromatic aberration, colour grading.

### Applications and Use Cases

- **Real-Time Video Games**: Rasterization + hybrid RT effects in engines such as Unreal Engine 5 (Lumen GI, Nanite virtualised geometry), Unity HDRP, and id Tech 7.
- **[[Virtual Reality]] and [[Augmented Reality]]**: Stereo rendering with foveated rendering zones, reprojection / asynchronous spacewarp, and strict latency budgets; technique choice drives device comfort and presence.
- **[[Metaverse]] Platforms**: Persistent, multi-user 3D environments requiring efficient streaming, LOD management, and scalable lighting across heterogeneous client hardware.
- **Film and VFX**: Offline path tracing (RenderMan, Arnold, V-Ray, Redshift) for photorealistic imagery; render farms aggregate hundreds of CPU/GPU nodes.
- **Architectural and Product Visualisation**: Real-time ray tracing in D5 Render, Enscape, and Lumion, or offline path tracing in Chaos V-Ray; clients can explore designs before construction.
- **[[Digital Twin]] Simulation**: Real-time rendering of high-fidelity city or industrial models for situational awareness and planning, often via NVIDIA Omniverse (using USD and MDL materials).
- **[[Neural Rendering]]**: NeRF (Neural Radiance Fields) and 3D Gaussian Splatting learn implicit scene representations from photographs, synthesising novel views without explicit geometry; bridges classical rendering with [[Machine Learning]].
- **Medical and Scientific Visualisation**: Volume rendering (ray-casting through 3D scalar fields such as CT/MRI data) to display internal structures without surface meshes.
- **Automotive HMI and ADAS Simulation**: Physically accurate sensor-simulation rendering (cameras, LiDAR, radar) for training and validating autonomous vehicle perception models.

### Standards and Context

- **[[Graphics API]]s**: [[Vulkan]] 1.3 (Khronos Group), [[DirectX 12]] Ultimate (Microsoft), [[Metal]] (Apple), [[OpenGL]] (Khronos) — define the hardware abstraction layer through which rendering techniques are submitted to the GPU.
- **[[DirectX Raytracing]] (DXR)**: Microsoft's standardised ray tracing API extension to DirectX 12; widely adopted by IHVs and engine vendors.
- **[[Vulkan Ray Tracing]]**: Khronos cross-platform ray tracing extensions (VK_KHR_ray_tracing_pipeline) providing portable access to hardware RT units.
- **OpenUSD / MDL**: Universal Scene Description (Pixar/NVIDIA) and Material Definition Language (NVIDIA) standardise scene and material interchange between rendering tools and digital twin pipelines.
- **SIGGRAPH**: The ACM Special Interest Group on Computer Graphics is the primary venue for rendering technique research; the *Advances in Real-Time Rendering* course tracks industry practice.
- **Physically Based Shading**: The PBR metallic-roughness workflow is de-facto standardised via glTF 2.0 (Khronos) for web and game assets.
- **[[Khronos Group]]**: Maintains Vulkan, OpenGL, OpenCL, glTF — the primary open standards body for GPU rendering interfaces.

### Current Landscape (2026)

- 3D Gaussian splatting (3DGS), first published at SIGGRAPH 2023, has become the dominant real-time radiance-field primitive, moving from research curiosity to production rendering in under three years and now sitting alongside mesh rasterisation and path tracing as a mainstream technique.
- Standardisation arrived in February 2026 when the Khronos Group released the KHR_gaussian_splatting extension for glTF 2.0 as a release candidate, paired with a KHR_gaussian_splatting_compression_spz extension built on Niantic Spatial's open-source SPZ container (up to ~90% smaller than PLY); ratification is targeted for Q2 2026, after which native support is expected in Three.js, Babylon.js, Unity and Unreal.
- MPEG opened a formal Explorations track (Part 45, Gaussian Splat Coding), publishing draft use cases and requirements through 2025 and common test conditions dated October 2025 and May 2026, signalling that a formal coding/compression standard is likely to follow the glTF interchange work.
- NVIDIA advanced the technique with 3D Gaussian Ray Tracing and the 3D Gaussian Unscented Transform (3DGUT), which add secondary lighting and support for nonlinear/fisheye cameras and rolling-shutter compensation, exposed through NuRec reconstruction APIs for physical-AI and autonomous-vehicle simulation; DLSS 4 (2025) pushed neural rendering (transformer-based ray reconstruction and multi-frame generation) into consumer real-time pipelines.
- Engine integration in 2026 remains third-party rather than first-party: Unreal Engine 5.5-5.7 relies on plugins such as Luma AI's free UE plugin and Jawset's Postshot, with no shipping Epic-native GS module; Epic's own MegaLights (stochastic many-light direct lighting) shipped in UE 5.5 for path-traced-quality lighting at scale.
- Real-time path tracing is now the target for high-end games and virtual production, with SIGGRAPH 2025's Advances in Real-Time Rendering course covering hybrid ReSTIR-plus-diffusion subsurface scattering, order-independent transparency and neural radiance caching (for example GSCache adapting 3DGS as a path-space radiance cache).
- Open frontiers as of 2026: splats bake lighting at capture time, so relightability, dynamic shadows and physically based response to scene lights are the most-requested gaps; DCC-grade editing (selections, boolean ops), mesh-splat-point-cloud hybrid pipelines, city-scale streaming, and mobile/embedded efficiency (e.g. LOD schemes like Octree-GS, foveation and hardware-algorithm co-design such as Lumina) remain active research.

### References

- 1. Khronos Group / AEC Magazine (2026). Khronos announces glTF Gaussian Splatting extension (KHR_gaussian_splatting release candidate). https://aecmag.com/news/khronos-announces-gltf-gaussian-splatting-extension/
- 2. MPEG (2026). Explorations Part 45 - Gaussian Splat Coding (use cases, requirements, common test conditions). https://www.mpeg.org/standards/Explorations/45/
- 3. Strayspark Studio (2026). Gaussian Splatting in Unreal Engine 5: The Capture-to-Game Pipeline. https://www.strayspark.studio/blog/gaussian-splatting-unreal-engine-5-capture-to-game-pipeline
- 4. NVIDIA (2025). 3D Gaussian Splatting for Realistic Physical AI Simulations - 3D Gaussian Ray Tracing, 3DGUT and NuRec. https://www.nvidia.com/en-us/on-demand/session/siggraph25-s07/
- 5. Advances in Real-Time Rendering in Games, SIGGRAPH 2025 (2025). Course programme - real-time path tracing, subsurface scattering, MegaLights. https://advances.realtimerendering.com/s2025/index.html
- 6. Emergent Mind (2025). Neural Rendering Techniques - survey of NeRF, 3DGS, radiance caching and hardware-algorithm co-design (Lumina, MetaSapiens). https://www.emergentmind.com/topics/neural-rendering-techniques

### Provenance

