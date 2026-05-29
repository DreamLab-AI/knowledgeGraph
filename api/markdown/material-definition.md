- ### Definition
  - A [[Material Definition]] is a renderer-agnostic structured specification encoding surface physical properties — such as base colour, roughness, metalness, and emissivity — consumed by a [[Render Pipeline]] to evaluate [[Physically Based Rendering]] appearance under lighting.

- ### Relationships
  - Material definitions sit at the intersection of authoring tools and rendering engines: they reference [[Shader]] programs to compute light interaction, rely on [[Texture Mapping]] to spatially vary surface properties, and are serialised in interchange formats such as [[Gltf Standard]] and [[OpenUSD]] so that assets can flow across the [[3D Rendering]] supply chain without re-authoring.

- ### Content
  - The concept emerged from the shift toward physically based rendering in the early 2010s, when game engines and film pipelines converged on a shared vocabulary of surface descriptors. Prior ad hoc per-engine material formats were incompatible, so industry working groups — notably the Khronos Group and Pixar — formalised interchange schemas.

  - A material definition aggregates scalar and texture-backed parameters into a coherent shading model. At runtime, a vertex shader transforms geometry into screen space, a pixel shader evaluates the BRDF (bidirectional reflectance distribution function) using the material parameters and incident light data, and optional compute shaders handle effects such as subsurface scattering or ambient occlusion.

  - Material definitions are critical to consistent visual output across diverse platforms. A single PBR material authored in MaterialX can be translated to Vulkan, Metal, WebGPU, and path-traced renderers, dramatically reducing content pipeline costs for XR, metaverse, and simulation applications.

  - In 2024-2025, neural material representations are emerging alongside traditional parametric models, allowing generative AI to synthesise material definitions from photographs or text prompts. Real-time path tracing in consumer hardware, driven by NVIDIA RTX and AMD RDNA, is raising baseline fidelity expectations and accelerating adoption of richer material parameter sets including participating media and spectral colour models.