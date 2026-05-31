- ### Definition
  - A memory hierarchy organises storage into layers of differing speed, size and cost so that frequently accessed data sits in fast caches close to the processor and bulk data resides in slower, larger memory.

- ### Semantic Classification
  - owl-class:: metaverse:MemoryHierarchy
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Hardware]]
  - bridges-to:: [[Parallel Computing]], [[GPU Computing]]
  - requires:: [[Computer Hardware]]
  - enables:: [[GPU Architecture]], [[Real-Time Rendering]]

- ### Content
  - The hierarchy typically runs from registers through several cache levels to main memory and storage, with each level trading latency against capacity. Programs that exhibit temporal and spatial locality benefit because recently and nearby data is served from fast levels.
  - On GPUs the hierarchy spans registers, shared or local memory, caches and high-bandwidth device memory. Rendering and compute performance often depends more on memory access patterns and bandwidth than on raw arithmetic throughput.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z