
The graphics pipeline is the ordered sequence of stages that transforms a 3D scene description into a 2D raster image, encompassing vertex processing, primitive assembly, rasterisation, fragment shading, and output merging, executed on programmable GPU hardware and exposed through graphics APIs.

- ### Semantic Classification

- ### Content
  - The pipeline runs vertices through transformation and projection, assembles them into primitives, rasterises those primitives into fragments and shades each fragment to produce pixel colours, with programmable shader stages at key points. Modern variants add geometry, tessellation and compute stages.
  - Implemented in GPU hardware and exposed through APIs such as Vulkan and OpenGL, the pipeline is the backbone of real-time rendering. Programmable shaders give developers control over transformation and shading.

- ### Current Landscape (2026)
  - GPU-driven rendering has become the defining shift: D3D12 Work Graphs shipped as a retail feature with Shader Model 6.8 (Agility SDK 1.613, 2024) and gained Mesh Nodes in preview (Agility SDK 1.715), letting the GPU dispatch a full mesh-shader graphics pipeline and rasterise without CPU intervention; AMD mirrored this in Vulkan via the experimental VK_AMDX_shader_enqueue extension.
  - Shader Model 6.9 was officially released (2025), bringing DXR 1.2 out of preview with Opacity Micromaps and Shader Execution Reordering, plus Long Vector support; Shader Model 6.10 and neural-rendering primitives (cooperative vectors) are now in AgilitySDK 720 preview alongside Nsight Graphics 2025.2 tooling for Blackwell.
  - Neural rendering moved into the core pipeline: NVIDIA's DLSS 4 (January 2025, RTX 50-series/Blackwell) replaced CNNs with the industry's first real-time transformer models for Super Resolution and Ray Reconstruction and added Multi Frame Generation (up to three synthesised frames per rendered frame), while RTX Neural Radiance Cache and neural shaders push inference into shading itself.
  - At GTC 2026 NVIDIA announced DLSS 5, framed by Jensen Huang as "the GPT moment for graphics", extending neural rendering from upscaling to actively synthesising photorealistic lighting and material detail anchored to 3D scene data.
  - 3D Gaussian splatting is being folded into conventional GPU pipelines rather than treated as a separate NeRF track: NVIDIA's vkSplatting reference implementation (2026.1) added instanced multi-splat scenes, bindless assets, ray-traced shadows and DLSS Ray Reconstruction, converging radiance-field and mesh-based rasterisation.
  - WebGPU reached critical mass: as of November 2025 it ships by default in Chrome, Edge, Firefox (141, wgpu/naga) and Safari 26, mapping onto D3D12/Vulkan/Metal; the W3C spec sits at Candidate Recommendation with subgroups and FP16 promoted to core and mesh-shader and ray-tracing extensions in progress.
  - Open challenges as of 2026 include cross-vendor standardisation of Work Graphs (Intel still lacks support), exposing hardware ray tracing and mesh shaders through WebGPU, taming latency and artefacts from multi-frame generation, and reconciling neural/learned representations with deterministic, artist-authored content.

- ### References
  - 1. AMD GPUOpen (2024). GPU Work Graphs mesh nodes in Microsoft DirectX 12. https://gpuopen.com/learn/work_graphs_mesh_nodes/work_graphs_mesh_nodes-intro/
  - 2. Microsoft DirectX Developer Blog (2024). D3D12 Preview: Mesh Nodes in Work Graphs. https://devblogs.microsoft.com/directx/d3d12-mesh-nodes-in-work-graphs/
  - 3. NVIDIA (2025). NVIDIA DLSS 4 Introduces Multi Frame Generation and AI Innovations. https://www.nvidia.com/en-us/geforce/news/dlss4-multi-frame-generation-ai-innovations/
  - 4. NVIDIA Developer (2025). NVIDIA RTX Neural Rendering Introduces Next Era of AI-Powered Graphics. https://developer.nvidia.com/blog/nvidia-rtx-neural-rendering-introduces-next-era-of-ai-powered-graphics-innovation/
  - 5. WebGPU.com (2025). WebGPU Hits Critical Mass: All Major Browsers Now Ship It. https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/
  - 6. SplatLabs (2026). NVIDIA Just Put Gaussian Splatting on the GTC Main Stage. https://www.splatlabs.ai/blog/nvidia-vulkan-gaussian-splatting-2026

- ### Provenance

