- ### Definition
  - A specific algorithm or methodology for transforming a geometric scene description into a final pixel image, trading image quality against computational cost. Fundamental categories include rasterization for real-time performance, ray tracing for physically accurate light transport, and path tracing for unbiased global illumination, with hybrid and screen-space variants bridging these extremes.

- ### Semantic Classification
  - owl-class:: spatial-computing:RenderingTechnique
  - owl-role:: Concept

- ### Relationships
  - Has Part: [[Rasterization]], [[Ray Tracing]], [[Post Processing]]
  - Uses: [[Shader]]
  - Supports: [[Visual Effects]]
  - Related To: [[Level of Detail]]

- ### Content
  # RenderingTechnique
  RenderingTechnique encompasses specific algorithms and methodologies transforming geometric scene descriptions into final images through various approaches trading quality against computational cost. Fundamental techniques include rasterization converting triangles into pixels through edge walking and interpolation—the dominant real-time method, ray tracing simulating light transport by casting rays from the camera and computing intersections—increasingly viable in real-time with hardware acceleration, path tracing extending ray tracing with unbiased global illumination through monte carlo sampling, and rasterization-hybrid approaches combining both for specific effects. Lighting models range from simple Lambertian diffuse and Phong specular to physically-based BRDF (Bidirectional Reflectance Distribution Function) models accurately representing material-light interaction. Shading strategies include forward rendering processing each object sequentially, deferred shading separating geometry and lighting into multiple passes enabling complex lighting scenarios, and clustered/tiled approaches subdividing screen space for efficient light assignment. Global illumination techniques simulate indirect lighting through voxel cone tracing, light propagation volumes, screen-space methods, or precomputed radiosity. Specialized techniques address specific challenges: screen-space reflections for water and mirrors, ambient occlusion enhancing depth perception, volumetric rendering for fog and atmospheric effects.
  - https://www.scratchapixel.com/ - Computer graphics rendering techniques explained
  - https://pbr-book.org/ - Physically Based Rendering: From Theory to Implementation
  - https://developer.nvidia.com/blog/rendering-techniques/ - NVIDIA rendering techniques blog
  - https://advances.realtimerendering.com/ - SIGGRAPH real-time rendering advances

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z