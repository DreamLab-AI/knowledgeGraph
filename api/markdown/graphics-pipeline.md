- ### Definition
  - The graphics pipeline is the ordered sequence of stages that transforms 3D scene description into a 2D image, covering vertex processing, primitive assembly, rasterisation and fragment shading.

- ### Semantic Classification
  - owl-class:: metaverse:GraphicsPipeline
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Rasterization]], [[Shader]]
  - requires:: [[GPU Architecture]]
  - enables:: [[Real-Time Rendering]]

- ### Content
  - The pipeline runs vertices through transformation and projection, assembles them into primitives, rasterises those primitives into fragments and shades each fragment to produce pixel colours, with programmable shader stages at key points. Modern variants add geometry, tessellation and compute stages.
  - Implemented in GPU hardware and exposed through APIs such as Vulkan and OpenGL, the pipeline is the backbone of real-time rendering. Programmable shaders give developers control over transformation and shading.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z