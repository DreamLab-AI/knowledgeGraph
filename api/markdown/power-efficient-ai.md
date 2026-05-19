- ### Definition
  - Power-Efficient AI optimizes machine learning systems to minimize energy consumption during inference and training, critical for battery-powered edge devices, IoT sensors, and mobile platforms requiring extended deployment lifetimes. Power-efficient designs target both computational energy (processor operations consuming 50-80% of power budget) and memory access energy (data movement between caches and main memory consuming 20-40%), recognizing that modern systems dissipate more energy moving data than computing. Techniques include dynamic voltage and frequency scaling (DVFS) that adjust processor frequency based on inference demands, power gating that completely deactivates unused hardware components, and event-driven inference that only activates computation when sensor data indicates significant events. Energy efficiency measured in TOPS/Watt (tera-operations per watt) quantifies inference throughput per unit power. Model-level optimizations employ low-precision arithmetic (INT8, FP16 instead of FP32), reducing both computation and memory energy. Hardware accelerators like specialized AI chips achieve 10-50x energy efficiency versus general-purpose processors through reduced datapath widths and specialized operations. Battery-powered IoT systems achieving month-to-year deployment lifetimes require sub-10mW average power budgets, feasible only through extreme energy optimization. Applications include medical wearables, autonomous drones, environmental sensors, and wildlife tracking tags. Energy harvesting systems combining low-power inference with solar or kinetic energy enable perpetual operation. Power-efficient AI is fundamental to sustainable computing, enabling intelligent systems in remote locations without frequent battery replacement or maintenance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PowerEfficientAI
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Power-Efficient AI (AI-0440) — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z