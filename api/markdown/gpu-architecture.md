- ### Definition
  - GPU architecture describes the design of graphics processing units as massively parallel processors built around many simple cores, wide memory interfaces and hardware for graphics-specific tasks.

- ### Semantic Classification
  - owl-class:: metaverse:GPUArchitecture
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Hardware]]
  - bridges-to:: [[GPU Computing]], [[Graphics Pipeline]]
  - requires:: [[Memory Hierarchy]]
  - enables:: [[Real-Time Rendering]], [[Parallel Computing]]

- ### Content
  - A GPU groups thousands of arithmetic units into clusters that execute the same instruction across many threads, fed by a deep memory hierarchy and high-bandwidth memory. Dedicated units handle texturing, rasterisation and increasingly ray tracing and tensor operations.
  - This design suits the data-parallel workloads of real-time rendering and general parallel computing. It is exposed to developers through the graphics pipeline and through compute APIs such as CUDA.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z