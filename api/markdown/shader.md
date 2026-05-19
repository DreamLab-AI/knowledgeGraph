- ### Definition
  - Shader is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: spatial-computing:Shader
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  # Shader
  Shader represents programmable processing units executing on GPUs defining how vertices transform, fragments shade, and compute tasks process in parallel across thousands of threads. Shaders replace fixed-function rendering pipelines with flexible artist-authored algorithms controlling every aspect of visual appearance. Vertex shaders process individual vertices transforming positions from object space through world and view spaces to clip space, potentially applying skeletal animation skinning, morphing, or procedural displacement. Fragment (pixel) shaders compute final color and depth for each screen sample, sampling textures, evaluating lighting equations, applying normal mapping for surface detail, and implementing effects like rim lighting or subsurface scattering. Geometry shaders optionally generate additional primitives from input geometry, enabling particle expansion or dynamic tessellation. Compute shaders provide general-purpose GPU computing for tasks like physics simulation, particle systems, or post-processing. Modern shading leverages programmable blending, conservative rasterization, and variable rate shading adjusting fragment shader invocation frequency based on scene importance. Shader authoring balances visual fidelity against performance budget, with profiling tools identifying bottlenecks and optimization opportunities.
  - https://www.khronos.org/opengl/wiki/Shader - OpenGL shader programming
  - https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl - HLSL shader language
  - https://docs.unity3d.com/Manual/ShadersOverview.html - Unity shader documentation
  - https://thebookofshaders.com/ - The Book of Shaders educational resource
  ## Sources
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z