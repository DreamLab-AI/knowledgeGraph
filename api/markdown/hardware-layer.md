- ### Definition
  - The Hardware Layer is the lowest stratum of the canonical stack, comprising the physical computing, storage, and signalling devices on which everything above runs. Nothing sits below it; immediately above it is the Network Layer, which connects discrete machines. It contains processors, memory, storage media, accelerators, and the physical transmission media that carry signals.

- ### Semantic Classification
  - owl-class:: arch:HardwareLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Computer Architecture]], [[Digital Signal Processing]]
  - enables:: [[Network Layer]], [[Compute Layer]]

- ### Content
  - The Hardware Layer is the physical substrate of any system, providing the deterministic execution and storage that abstractions above depend on. Typical members include central and graphics processors, tensor accelerators, volatile and non-volatile memory, network interface controllers, and the cabling or radio media that carry bits between devices.
  - Because it is the foundation, it requires no layer beneath it. It enables the Network Layer that interconnects machines and the Compute Layer that schedules work onto these resources. Its physical limits, clock speed, memory bandwidth, and power budget, propagate upward as ceilings on everything else.
  - The layer bridges to computer architecture and to signal processing, where instruction sets and analogue-to-digital conversion determine what the silicon can do. Reliability and fault characteristics defined here shape the trust assumptions of higher layers.

- ### Provenance
  - sources:: [[IEEE (Institute of Electrical and Electronics Engineers)]]
  - migration-date:: 2026-05-29T00:00:00Z