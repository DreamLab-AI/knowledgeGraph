public:: true

# Hardware Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:227936a954451924bae1da14bb4157c84ff233469d71a8e5ebd0360c1b86edb6",
  "@type": "Page",
  "vc:slug": "hardware-design",
  "title": "Hardware Design",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:systems-engineering", "vc:label": "Systems Engineering"},
    {"@id": "urn:visionflow:linked:hardware-description-language", "vc:label": "Hardware Description Language"},
    {"@id": "urn:visionflow:linked:formal-verification", "vc:label": "Formal Verification"},
    {"@id": "urn:visionflow:linked:semiconductor", "vc:label": "Semiconductor"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware-design",
  "@type": "Class",
  "label": "Hardware Design",
  "definition": "The engineering discipline of specifying, architecting, implementing, and verifying physical computing and electronic systems — from printed circuit boards and mechatronic assemblies to FPGAs and full-custom silicon — spanning requirements capture, architectural trade-off between performance, power, area, and cost, register-transfer-level description in hardware description languages, synthesis and physical implementation, and exhaustive pre-fabrication verification, since unlike software a shipped hardware error cannot be patched and a mask respin costs months and millions.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:systems-engineering",
    "label": "Systems Engineering"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:hardware-description-language", "label": "Hardware Description Language"},
      {"@id": "urn:ngm:class:formal-verification", "label": "Formal Verification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:system-on-chip", "label": "System-on-Chip"},
      {"@id": "urn:ngm:class:fpga", "label": "FPGA"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:semiconductor", "label": "Semiconductor"},
      {"@id": "urn:ngm:class:jedec", "label": "JEDEC"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The engineering discipline of specifying, architecting, implementing, and verifying physical computing and electronic systems — from printed circuit boards and mechatronic assemblies to FPGAs and full-custom silicon — spanning requirements capture, architectural trade-off between performance, power, area, and cost, register-transfer-level description in hardware description languages, synthesis and physical implementation, and exhaustive pre-fabrication verification, since unlike software a shipped hardware error cannot be patched and a mask respin costs months and millions."

- ### Semantic Classification
  - owl-class:: infrastructure:HardwareDesign
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Systems Engineering]]
  - uses:: [[Hardware Description Language]], [[Formal Verification]]
  - enables:: [[System-on-Chip]], [[FPGA]]
  - bridges-to:: [[Robotics]]

- ### Content

  ## Definition

  **Hardware design** is the discipline that turns a specification into working physical electronics. Its scope runs from board-level design — schematic capture, component selection, PCB layout, signal and power integrity — through programmable logic on an [[FPGA]], to application-specific integrated circuits and full [[System-on-Chip]] designs integrating processor cores, memory controllers, and accelerators on one die. Across all scales the governing trade-off is the same quartet: performance, power, area (or board space and bill-of-materials cost), and schedule.

  Digital design practice centres on the register-transfer level: behaviour is expressed in a [[Hardware Description Language]] such as VHDL, Verilog, or SystemVerilog, then synthesised by electronic design automation tools into gate netlists, placed and routed, and checked against timing, power, and manufacturing rules. Because a fabricated error cannot be patched — a mask respin at an advanced node costs millions of pounds and a quarter of schedule — verification consumes the majority of engineering effort. Constrained-random simulation under UVM, emulation, and increasingly [[Formal Verification]] (model checking and equivalence checking, mainstream since the Pentium FDIV recall made the cost of escapes vivid) together aim to prove the design correct before tape-out.

  Hardware design is also a standards-governed activity: interface and memory specifications from bodies such as [[JEDEC]] (DDR, LPDDR), PCI-SIG, and MIPI define the contracts a design must honour to interoperate. And it is the physical substrate of every embodied system in this graph — a robot is co-designed hardware and software, its sensing, actuation, compute, and power architecture set by hardware-design decisions long before any control code runs, which is why robotics curricula list hardware design among their core requirements.

  ## Current Landscape

  - **EDA consolidation and AI**: Synopsys, Cadence, and Siemens EDA dominate tooling; reinforcement-learning-assisted floorplanning and placement now ship in production flows. Google's macro-placement method — introduced as a 2020 preprint, published in *Nature* in 2021 and named **AlphaChip** in September 2024 alongside a *Nature* addendum and a released pre-trained checkpoint — has been used across TPU v5e, v5p and Trillium and Axion CPU blocks, though its reproducibility remains publicly contested (no independent replication on open benchmarks as of 2026).
  - **Open-source hardware**: RISC-V has made processor architecture a commons; open toolchains (Yosys, OpenROAD) and open PDKs (SkyWater 130 nm) allow fabricable open-source silicon, with chiplet standards (UCIe) opening multi-die integration.
  - **Domain-specific silicon**: the end of Dennard scaling pushed differentiation into accelerators — AI training and inference chips, video codecs, network processors — making hardware design a competitive weapon for cloud and automotive firms that once bought commodity parts.
  - **Verification frontier**: formal methods expand from block-level proofs towards security properties (information-flow, side-channel freedom), while shift-left co-design ties hardware models to software bring-up ever earlier in the schedule.

  **Sources**:
  - https://deepmind.google/blog/how-alphachip-transformed-computer-chip-design/
  - https://github.com/google-research/circuit_training/blob/main/README.md
