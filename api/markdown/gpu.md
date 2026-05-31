- ### Definition
  - A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads.

- ### Semantic Classification
  - owl-class:: general:GPU
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics Processing]]
  - bridges-to:: [[Graphics Processing Unit]]
  - requires:: [[Shader]]
  - enables:: [[Real-Time Rendering]], [[Rasterization]], [[Ray Tracing]]

- ### Content
  - A GPU contains many simple cores organised for single-instruction multiple-data execution, which suits the per-pixel and per-vertex arithmetic of rendering as well as matrix-heavy compute tasks. Programmable shader stages and compute pipelines expose this parallelism to applications through graphics and compute APIs.
  - Beyond graphics, GPUs accelerate scientific computing, simulation and machine learning because many of those workloads map well onto wide parallel hardware. The term GPU is used interchangeably with Graphics Processing Unit.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z