
A Math Library is a software library providing optimised implementations of mathematical operations — including vector and matrix arithmetic, quaternion transformations, geometric queries, interpolation, and numerical methods — that underpin real-time 3D graphics, physics simulation, and spatial computing systems. These libraries abstract hardware-level SIMD optimisations and GPU-friendly data layouts, enabling physics engines, rendering pipelines, and game engines to perform high-throughput computation at interactive frame rates.

- ### Semantic Classification

- ### Content
  Math libraries are foundational dependencies across spatial computing, game development, and scientific simulation. Representative libraries include GLM (OpenGL Mathematics) for GLSL-compatible vector and matrix types, Eigen for general-purpose linear algebra, and DirectXMath / xmath for SIMD-optimised console and PC development. In real-time 3D contexts the library must expose types that map efficiently to GPU shader inputs — typically 16-byte-aligned float4 vectors and 4×4 matrices — as well as utilities for perspective projection, frustum culling, and quaternion interpolation (slerp/nlerp). Physics engines such as Bullet and PhysX bundle their own math layers to avoid external dependencies, while custom game engines often ship a minimal, profile-guided math library tuned to their target hardware.

- ### Provenance

