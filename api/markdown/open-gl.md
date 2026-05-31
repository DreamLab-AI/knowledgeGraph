- ### Definition
  - OpenGL is a cross-platform graphics API for rendering 2D and 3D vector graphics, providing a standardised interface to the rendering capabilities of graphics hardware.

- ### Semantic Classification
  - owl-class:: general:OpenGL
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics API]]
  - bridges-to:: [[Vulkan]]
  - requires:: [[GPU]], [[Shader Language]]
  - enables:: [[3D Rendering]], [[Rasterization]]

- ### Content
  - OpenGL defines a set of functions for submitting geometry, configuring state and invoking programmable shaders, abstracting over the underlying graphics hardware so that applications run across vendors and platforms. It uses a rasterisation pipeline with programmable vertex and fragment stages.
  - Maintained by the Khronos Group, OpenGL has been a long-standing foundation for graphics applications and remains widely supported. Its lower-level successor Vulkan offers more explicit control over hardware for performance-critical use.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z