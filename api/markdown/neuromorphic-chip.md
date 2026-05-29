- ### Definition
  - Computer chips designed to mimic the structure and function of biological neural networks, using analog circuits to emulate neuronal behavior for energy-efficient AI processing.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:NeuromorphicChip
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content

  ## Overview

  A neuromorphic chip implements computation in a manner analogous to the mammalian brain: massively parallel, event-driven processing by large populations of artificial spiking neurons, with co-located memory and compute that avoids the energy cost of shuttling data across a traditional memory bus. Unlike GPU compute or tensor processing units, neuromorphic architectures are optimised for sparse, temporally coded signals—making them well suited to sensor-driven applications such as edge inference on audio, vision, and motion data with extreme power budgets.

  ## Key Characteristics and Applications

  Neuromorphic chips operate at milliwatt or sub-milliwatt power levels, enabling always-on perception on battery-constrained devices. The event-driven paradigm means that computation occurs only when input changes, yielding near-zero idle power. Application domains include robotics, prosthetics, always-on keyword spotting, real-time anomaly detection in industrial sensors, and TinyML inference on embedded systems. Continued progress depends on advances in device physics (memristors, phase-change materials) to implement synaptic plasticity in silicon at scale.

- ### Provenance
  - sources:: [[AI Hardware]], [[Intel Loihi]], [[IBM TrueNorth]]
  - migration-date:: 2026-04-26T00:00:00Z