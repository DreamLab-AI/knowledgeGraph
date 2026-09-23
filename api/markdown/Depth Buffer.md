
A depth buffer (also called a z-buffer) is a per-pixel array maintained during rasterised rendering that stores the depth of the nearest surface drawn at each screen position. As fragments are generated, their interpolated depth is compared against the stored value, and only fragments closer to the camera overwrite the colour and depth, resolving visibility automatically. The depth buffer is the standard hidden-surface-removal mechanism in real-time graphics pipelines.

- ### Overview
  - The depth buffer holds one depth value per screen pixel, initialised to the far plane.
  - As triangles are rasterised, each fragment's interpolated depth is tested against the stored depth.
  - Closer fragments pass the depth test and update both the colour and depth buffers; farther ones are discarded.
  - This per-pixel test automatically resolves arbitrary overlapping geometry without sorting.
- ### Mechanisms
  - Depth interpolation across each rasterised primitive.
  - The depth (z) test with configurable comparison functions (less, less-equal, etc.).
  - Depth writes gated by the test result and write mask.
  - Precision management via the projection matrix, depth ranges, and reversed-z to mitigate banding.
- ### Key aspects
  - Precision: non-linear distribution of depth values concentrated near the camera.
  - Z-fighting: artefacts when surfaces have nearly equal depth, mitigated by bias or reversed-z.
  - Early-z: hardware rejection of occluded fragments before shading for performance.
  - Memory: depth attachments consume framebuffer bandwidth alongside colour.
- ### Applications
  - Real-time 3D rendering in games, simulation, and AR/VR.
  - Drives [[Occlusion Culling]] and early fragment rejection.
  - Input to post-processing such as ambient occlusion and depth of field.
  - Shadow mapping stores scene depth from the light's viewpoint.
- ### Provenance

