
Deduplication is a data-management technique that eliminates redundant copies of identical data by storing a single instance and referencing it wherever the same content recurs. Implementations typically hash data chunks and compare digests, so identical blocks resolve to the same stored object. It reduces storage footprint, backup windows, and network transfer in content-addressed and backup systems.

- ### Content
  - Deduplication operates at file, block, or variable-length-chunk granularity, inline or post-process. Gains are largest for repetitive datasets such as backups and VM images; costs include hashing overhead and the need to handle hash collisions safely.

