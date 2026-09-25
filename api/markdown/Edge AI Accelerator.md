Specialised silicon or programmable hardware designed to execute AI inference workloads directly on edge or IoT devices, without routing data to the cloud. Designs prioritise energy efficiency, low latency, and a small physical footprint while sustaining the throughput demanded by real-time computer vision, natural language processing, and sensor fusion tasks. Representative architectures include neural processing units (NPUs), purpose-built ASICs, FPGAs configured for neural-network dataflows, and neuromorphic chips that mimic sparse spiking computation.

### Semantic Classification

### Content

## Overview

Edge AI accelerators are purpose-built compute units that run neural-network inference workloads on or near the data source — in cameras, smartphones, industrial sensors, autonomous vehicles, and IoT gateways — without the latency, bandwidth cost, or privacy exposure of round-tripping data to the cloud. They typically implement fixed-function matrix-multiply engines, sparse-activation units, or spiking neural network substrates, and are paired with on-chip SRAM to minimise off-chip memory bandwidth.

## Key Architecture Families

- **NPUs (Neural Processing Units)**: Dedicated tensor engines integrated into SoCs (Apple Neural Engine, Qualcomm Hexagon, Google Edge TPU). Offer 1–10 TOPS at sub-1W budgets.
- **FPGAs**: Reconfigurable fabric enabling custom dataflows for evolving model architectures. Common in industrial and medical edge deployments.
- **Neuromorphic chips**: Event-driven, spiking designs (Intel Loihi, BrainScaleS) for ultra-low-power always-on sensing and anomaly detection.
- **Microcontroller-class MCUs with ML extensions**: ARM Cortex-M with CMSIS-NN; targets TinyML workloads like keyword spotting under 1 mW.

  ## Applications

- Real-time object detection and scene understanding for autonomous robots and drones.
- On-device natural language processing for voice interfaces without cloud dependency.
- Predictive maintenance in industrial IoT through continuous sensor fusion.
- Digital twin synchronisation at the network edge, reducing core-network load.

### Provenance

