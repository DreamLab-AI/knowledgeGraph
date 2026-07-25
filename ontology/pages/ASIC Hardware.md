public:: true

# ASIC Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:asic-hardware",
  "@type": "Page",
  "vc:slug": "asic-hardware",
  "title": "ASIC Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asic-hardware",
  "@type": "Class",
  "label": "ASIC Hardware",
  "definition": "Application-Specific Integrated Circuits (ASICs) are custom silicon chips designed and manufactured to perform a fixed, narrowly defined computational task with maximum efficiency. Unlike general-purpose processors, ASIC hardware sacrifices programmability for dramatically superior performance-per-watt ratios in its target workload, making it the dominant substrate for high-throughput, power-sensitive deployments.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:computer-hardware", "label": "Computer Hardware"}],
  "relations": {
    "contrastsWith": [{"@id": "urn:ngm:class:fpga", "label": "FPGA"}],
    "enables": [
      {"@id": "urn:ngm:class:parallel-processing", "label": "Parallel Processing"},
      {"@id": "urn:ngm:class:digital-signal-processing", "label": "Digital Signal Processing"},
      {"@id": "urn:ngm:class:neural-processing-unit", "label": "Neural Processing Unit"}
    ],
    "relatedTo": [{"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[ASIC Hardware]] refers to [[Computer Hardware]] built around silicon dies whose logic is permanently configured at fabrication time to execute one class of operations. Common applications include Bitcoin mining, neural-network inference, network packet processing, and video codec acceleration. Because the gate layout is tailored to a single algorithm, ASICs achieve throughput and energy efficiency that general-purpose CPUs and [[FPGA]] devices cannot match at scale.

- ### Relationships
  - ASIC Hardware contrasts sharply with [[FPGA]] devices, which can be reprogrammed post-fabrication but at lower efficiency. It enables [[Parallel Processing]] by integrating thousands of identical compute units on a single die, and underpins [[Digital Signal Processing]] pipelines in telecommunications and media. Modern AI ASICs implement [[Neural Processing Unit]] arrays optimised for matrix multiplication. Once deployed in constrained environments they intersect closely with [[Embedded Systems]] design patterns.

- ### Content
  - ASIC design emerged as a commercial discipline in the early 1980s when gate-array methodologies allowed companies to produce custom logic without building a full-custom chip from scratch. The technique matured through the 1990s with the rise of HDL-based synthesis flows using VHDL and Verilog, enabling teams to express hardware behaviour in software-like languages before committing to masks. By the 2000s, ASIC tape-outs were routine for networking equipment, consumer electronics, and cryptographic accelerators.

  - The physical design process entails logical synthesis, place-and-route, timing closure, and sign-off verification against foundry design-rule checks before masks are sent for fabrication. Modern ASICs are manufactured at leading-edge nodes (5 nm, 3 nm, and below) using TSMC, Samsung, or Intel Foundry processes. Non-recurring engineering costs are substantial — mask sets for a 5 nm design exceed USD 10 million — so ASICs are only cost-effective at volumes or workload intensities that cannot be served by reconfigurable alternatives.

  - The cryptocurrency mining ecosystem validated ASIC economics at scale: SHA-256 mining ASICs deliver terahashes-per-second at millijoules per hash, outperforming GPU clusters by orders of magnitude. AI infrastructure followed with Google's Tensor Processing Units, Cerebras Wafer-Scale Engine, and Groq Language Processing Units — each a custom ASIC targeting transformer inference or training. Networking vendors such as Broadcom and Marvell produce switch ASICs handling 800 Gbps+ per chip, displacing programmable NPUs in high-volume deployments.

  - As of 2024–2025, the AI ASIC market is undergoing rapid fragmentation, with hyperscalers (Google, Amazon, Microsoft, Meta) all fielding proprietary silicon to reduce dependence on Nvidia GPUs. Edge inference ASICs are proliferating in automotive, robotics, and IoT devices, driven by power envelopes below 5 W. Chiplet integration via advanced packaging (CoWoS, FOVEROS) allows mixing ASIC dies with DRAM and I/O chiplets, partially recovering flexibility without sacrificing per-die efficiency.

