- ### Definition
  - A math library component in the Metaverse domain that required by PhysicsEngine.

- ### Semantic Classification
  - owl-class:: spatial-computing:MathLibrary
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Software Library]]

- ### Content
  Math libraries are foundational dependencies across spatial computing, game development, and scientific simulation. Representative libraries include GLM (OpenGL Mathematics) for GLSL-compatible vector and matrix types, Eigen for general-purpose linear algebra, and DirectXMath / xmath for SIMD-optimised console and PC development. In real-time 3D contexts the library must expose types that map efficiently to GPU shader inputs — typically 16-byte-aligned float4 vectors and 4×4 matrices — as well as utilities for perspective projection, frustum culling, and quaternion interpolation (slerp/nlerp). Physics engines such as Bullet and PhysX bundle their own math layers to avoid external dependencies, while custom game engines often ship a minimal, profile-guided math library tuned to their target hardware.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z