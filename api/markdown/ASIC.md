public:: true

# ASIC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:asic",
  "@type": "Page",
  "vc:slug": "asic",
  "title": "ASIC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asic",
  "@type": "Class",
  "label": "ASIC",
  "definition": "An Application-Specific Integrated Circuit (ASIC) is a custom integrated circuit designed and fabricated at the transistor and mask level to perform a specific function or narrow set of functions with maximum efficiency, in contrast to general-purpose processors such as CPUs and GPUs that are optimised for programmable flexibility. ASICs achieve superior performance-per-watt and cost efficiency at production volume by eliminating logic not required for the target workload, at the expense of reconfigurability. Design is conducted using hardware description languages (VHDL, SystemVerilog), electronic design automation suites, and a foundry-specific tape-out flow; non-recurring engineering costs at advanced nodes (5nm, 3nm) can exceed tens of millions of pounds, making economic viability contingent on volume or uniquely demanding performance requirements. ASICs are central to cryptocurrency mining, AI inference and training acceleration, high-speed networking switch fabric, signal processing, and consumer electronics where power, cost, and performance constraints demand purpose-built silicon.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hardware",
      "label": "Hardware"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:semiconductor-industry",
        "label": "Semiconductor Industry"
      },
      {
        "@id": "urn:ngm:class:system-on-chip",
        "label": "System-on-Chip"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:electronic-design-automation",
        "label": "Electronic Design Automation"
      },
      {
        "@id": "urn:ngm:class:foundry",
        "label": "Semiconductor Foundry"
      },
      {
        "@id": "urn:ngm:class:hardware-description-language",
        "label": "Hardware Description Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:neural-processing-unit",
        "label": "Neural Processing Unit"
      },
      {
        "@id": "urn:ngm:class:inference-hardware",
        "label": "Inference Hardware"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      },
      {
        "@id": "urn:ngm:class:high-speed-networking",
        "label": "High-Speed Networking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:matrix-multiplication",
        "label": "Matrix Multiplication"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hashing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fpga",
        "label": "FPGA"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:central-processing-unit",
        "label": "Central Processing Unit"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:hardware-component",
        "label": "Hardware Component"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-accelerator",
        "label": "AI Accelerator"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:application-specific-integrated-circuit",
      "label": "Application-Specific Integrated Circuit"
    },
    {
      "@id": "urn:ngm:class:custom-silicon",
      "label": "Custom Silicon"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An [[ASIC]] (Application-Specific Integrated Circuit) is a semiconductor chip whose logic is permanently optimised at the mask and transistor level for a specific computational workload, yielding peak efficiency in operations per watt and unit cost at production volumes compared to reprogrammable alternatives such as [[FPGA]] or general-purpose [[GPU Compute]]. Because an ASIC cannot be reprogrammed post-fabrication, design decisions are irreversible; the circuit is taped out to a foundry once the register-transfer-level design is finalised. ASICs underpin [[Hardware Acceleration]] for AI inference, cryptographic hashing in [[Proof of Work]] blockchain mining, high-speed networking switch fabric, and signal processing applications where [[Embedded Systems]] demand purpose-built silicon at scale.

- ### Overview
  - ASICs represent the end of the hardware design spectrum that maximises efficiency at the cost of flexibility. Where a [[Central Processing Unit]] executes arbitrary software and a [[FPGA]] allows field-reconfiguration of logic, an ASIC commits its gate-level topology at fabrication time and cannot be altered thereafter.
  - This permanence is both the source of ASIC advantage (no wasted transistors, minimal leakage, optimised clock trees) and its primary risk: a design error or a shift in the target workload makes the chip worthless without a new tape-out.
  - The economics of ASIC development are governed by non-recurring engineering (NRE) costs — mask sets at a 3nm or 5nm foundry node can exceed $20–50M USD — balanced against the per-unit cost advantage once production volumes are sufficient to amortise that fixed cost.
  - The [[Semiconductor Industry]] has progressively enabled smaller, faster, and more power-efficient ASICs by advancing CMOS process nodes following a trajectory related to Moore's Law, though the cadence has slowed at sub-5nm geometries.

- ### Key Components
  - **Register-Transfer Level (RTL) Design** — The behavioural specification of the circuit written in [[Hardware Description Language]] such as VHDL or SystemVerilog. RTL captures the data-path and control-path logic before any physical implementation decisions are made. See [[Register-Transfer Level]].
  - **Electronic Design Automation (EDA)** — Software suites (Synopsys, Cadence, Siemens EDA) used for synthesis, simulation, formal verification, place-and-route, and sign-off. See [[Electronic Design Automation]].
  - **Standard Cell Library** — A characterised library of primitive logic cells (AND, OR, flip-flops, multiplexers) optimised by the foundry or a third-party IP provider for a specific process node. See [[Standard Cell Library]].
  - **Synthesis** — Translation of RTL into a gate-level netlist using standard cells, constrained by timing, area, and power targets.
  - **Place and Route** — Physical mapping of the gate-level netlist onto the chip floorplan, followed by routing of metal interconnects.
  - **Sign-Off Verification** — Static timing analysis (STA), power integrity, electromigration, and design rule checks (DRC) to certify the layout meets all constraints before tape-out.
  - **Tape-Out** — Submission of the final GDSII or OASIS layout file to the [[Semiconductor Foundry]] (TSMC, Samsung Foundry, GlobalFoundries, SMIC) for mask generation and wafer fabrication. See [[Tape-Out]].
  - **Chiplet Architecture** — Advanced packaging technique that disaggregates monolithic die into multiple smaller dies (chiplets) connected via high-bandwidth die-to-die interconnects (UCIe, HBM stacks). See [[Chiplet Architecture]].

- ### Design Flow
  - The ASIC design flow follows a structured sequence from specification through to packaged silicon:
    - **Specification and Architecture** — Define the target workload, performance targets (throughput, latency), power budget, and area constraints.
    - **RTL Coding** — Implement the architecture in [[Hardware Description Language]]; verified by simulation (ModelSim, VCS, Xcelium) and formal property checking.
    - **Synthesis** — Map RTL to [[Standard Cell Library]] gate netlist using Synopsys Design Compiler or Cadence Genus; optimise for timing, area, power (PPA).
    - **Physical Design** — Floorplanning, power distribution network (PDN) design, clock tree synthesis, place and route using Cadence Innovus or Synopsys IC Compiler.
    - **Sign-Off** — Static timing analysis (STA) with Synopsys PrimeTime, power analysis with PrimeTime PX, DRC and LVS with Calibre or Klayout.
    - **Tape-Out and Fabrication** — GDSII submission, mask generation, photolithography, chemical-mechanical planarisation (CMP), and wafer dicing.
    - **Packaging and Test** — Die attachment, bonding (wire-bond or flip-chip), package (BGA, CSP, or advanced 2.5D/3D packaging), automatic test equipment (ATE) post-fabrication.

- ### ASIC Variants and Categories
  - **Full-Custom ASIC** — Every transistor laid out manually; highest performance but extreme NRE cost. Used in high-frequency analog/mixed-signal circuits.
  - **Standard Cell ASIC** — Most common digital category; composed from pre-characterised cells. Balances design productivity with performance.
  - **Gate Array / Sea-of-Gates** — Pre-fabricated base layers with custom metal interconnect; lower NRE than full-custom at some performance cost. Historically important; less common at advanced nodes.
  - **Platform / Structured ASIC** — Pre-defined fabric with configurable IP blocks; intermediate between FPGA and standard-cell ASIC in reconfigurability and NRE cost.
  - **AI ASIC / Domain-Specific Accelerator** — Purpose-built for machine-learning workloads (matrix multiply, convolution). Includes [[Neural Processing Unit]] variants and [[AI Accelerator]] products.
  - **Crypto ASIC** — Optimised for SHA-256 or other [[Cryptographic Hashing]] algorithms used in [[Proof of Work]] consensus; e.g. Bitmain Antminer series.
  - **Networking ASIC** — Programmable forwarding-plane silicon for packet switching (Broadcom Tomahawk, Marvell Prestera, Intel Tofino). Enables [[High-Speed Networking]] at terabit scales.

- ### Applications / Use Cases
  - **AI Inference and Training Acceleration** — Google Tensor Processing Unit (TPU), AWS Trainium/Inferentia, Microsoft Maia, Meta MTIA, and Groq LPU are landmark [[AI Accelerator]] ASICs designed to reduce dependence on [[GPU Compute]] for neural network workloads, targeting lower cost-per-FLOP and energy-per-token. See [[Inference Hardware]].
  - **Cryptocurrency Mining** — Bitcoin mining migrated from CPU to [[GPU Compute]] to [[FPGA]] to ASIC within a few years after the 2009 genesis block. ASIC miners for SHA-256 now dominate [[Bitcoin Mining]], with leading products from Bitmain, MicroBT, and Canaan Computing. [[Proof of Work]] algorithms designed to be ASIC-resistant (Ethereum's Ethash, Monero's RandomX) have had mixed success; well-resourced attackers eventually build specialised hardware.
  - **High-Speed Networking** — Switch and router ASICs (Broadcom Tomahawk/Jericho, Marvell, Cisco Silicon One) perform high-bandwidth packet forwarding, deep-packet inspection, and traffic management at multi-terabit per second throughput impossible with software-defined packet processing alone.
  - **Mobile and Consumer SoC** — Apple A-series and M-series chips are [[System-on-Chip]] ASICs integrating CPU, GPU, Neural Engine (NPU), media codec, and I/O controllers on a single die. Qualcomm Snapdragon and MediaTek Dimensity follow similar architectures.
  - **Signal Processing and Communications** — ASICs handle FEC (forward error correction), LDPC/turbo decoding, and modulation/demodulation in 5G base stations, satellite terminals, and cable modems.
  - **Automotive and Safety-Critical** — Automotive-grade ASICs (ISO 26262 compliant) implement ADAS perception pipelines, LiDAR signal processing, and radar signal chains. Tesla's Full Self-Driving (FSD) chip is a notable custom ASIC example.
  - **Smart Cards and Cryptographic Hardware** — Secure element ASICs implement cryptographic primitives (AES, RSA, ECC) in hardware for tamper resistance in payment cards, SIM cards, and hardware security modules ([[HSM]]).

- ### Relationships
  - hasPart:: [[Register-Transfer Level]]
  - hasPart:: [[Standard Cell Library]]
  - hasPart:: [[Physical Layout]]
  - partOf:: [[Semiconductor Industry]]
  - partOf:: [[System-on-Chip]]
  - requires:: [[Electronic Design Automation]]
  - requires:: [[Semiconductor Foundry]]
  - requires:: [[Hardware Description Language]]
  - enables:: [[Hardware Acceleration]]
  - enables:: [[Neural Processing Unit]]
  - enables:: [[Inference Hardware]]
  - enables:: [[Bitcoin Mining]]
  - enables:: [[High-Speed Networking]]
  - dependsOn:: [[CMOS Process]]
  - dependsOn:: [[Supply Chain Management]]
  - implements:: [[Matrix Multiplication]]
  - implements:: [[Cryptographic Hashing]]
  - uses:: [[Chiplet Architecture]]
  - uses:: [[Advanced Packaging]]
  - contrastsWith:: [[FPGA]]
  - contrastsWith:: [[GPU Compute]]
  - contrastsWith:: [[Central Processing Unit]]
  - relatedTo:: [[Embedded Systems]]
  - relatedTo:: [[Hardware Component]]
  - relatedTo:: [[Tape-Out]]
  - relatedTo:: [[Node Shrink]]
  - bridges-to:: [[AI Accelerator]]
  - bridges-to:: [[Proof of Work]]

- ### ASIC vs Programmable Alternatives
  - The triad of [[FPGA]], [[GPU Compute]], and ASIC represents a Pareto frontier of flexibility vs efficiency:
    - **FPGA** — Reprogrammable lookup-table fabric. Higher NRE-adjusted cost per unit than ASIC, 5–15× lower performance-per-watt, but prototype-friendly and supports field updates. Used for low-to-mid volume production and rapid prototyping of future ASIC designs.
    - **GPU** — Massively parallel SIMD processor with high memory bandwidth. Highly programmable (CUDA, ROCm, OpenCL) and reusable across workloads; dominant for AI training. 5–20× less energy-efficient than a purpose-built ASIC on the same algorithm.
    - **ASIC** — Minimum power and area for a fixed algorithm at volume. No reprogrammability. Optimal for workloads that are algorithmically stable, run at large scale, and justify NRE investment.
  - Design and fabrication cycles for advanced-node ASICs span 18–30 months, so ASIC teams must bet on workload stability over a multi-year horizon. [[FPGA]] prototyping often precedes ASIC tape-out to validate architecture before committing NRE.

- ### Standards and Context
  - **Process Nodes** — Foundry process technology is designated by nominal node size (28nm, 16nm, 7nm, 5nm, 3nm, 2nm). Major foundries: TSMC (Taiwan), Samsung Foundry (South Korea), GlobalFoundries (USA/Germany/Singapore), Intel Foundry Services. Advanced nodes below 5nm are available only at TSMC and Samsung as of 2025.
  - **EDA Standards** — Liberty (.lib) format for cell characterisation; LEF/DEF for physical design exchange; GDSII and OASIS for layout; SDF for timing annotation; UPF (IEEE 1801) for power intent specification.
  - **Interface Standards** — PCIe, HBM (High Bandwidth Memory), LPDDR, UCIe (Universal Chiplet Interconnect Express) govern how ASICs integrate into system platforms.
  - **IP Licensing** — ARM (now Subsidiary of SoftBank), RISC-V Foundation, Cadence, Synopsys, and MIPS supply licensable processor and interface IP cores that ASIC designers integrate into custom designs, reducing RTL development burden.
  - **Export Controls** — Advanced semiconductor IP and manufacturing equipment (EUV lithography) are subject to export control regimes (US EAR, Dutch ASML controls, Japan Wassenaar). Entities on the Entity List face restrictions on access to sub-7nm foundry capacity, a significant geopolitical constraint on ASIC supply chains. See [[Supply Chain Management]].
  - **Chiplet Ecosystems** — UCIe 1.0 (ratified 2022) standardises die-to-die electrical interfaces; JEDEC HBM3e standardises high-bandwidth memory stacking. These enable multi-vendor chiplet integration. See [[Chiplet Architecture]].

- ### Notable ASIC Products and Programmes
  - **Google TPU v1–v5** — Matrix-multiply-optimised ASIC for TensorFlow workloads; TPU v1 (2016) was first large-scale hyperscaler AI ASIC deployment.
  - **Apple A-series / M-series** — Annual cadence custom SoC integrating CPU (Firestorm/Avalanche cores), GPU, Neural Engine ([[Neural Processing Unit]]), and Secure Enclave.
  - **Bitmain Antminer (S series)** — Dominant SHA-256 mining ASIC; multiple generations tracking TSMC node shrinks.
  - **Broadcom Tomahawk** — Industry-standard Ethernet switch ASIC; Tomahawk 5 reaches 51.2 Tbps aggregate bandwidth.
  - **Cerebras WSE-3** — Wafer-scale engine; largest known ASIC by die area (over 900 mm²).
  - **Groq LPU** — Language Processing Unit ASIC for high-throughput LLM [[Inference Hardware]]; deterministic execution model.
  - **Amazon Trainium / Inferentia** — AWS custom silicon for cost-effective training and inference of large [[AI Accelerator]] workloads in AWS data centres.
  - **Tesla FSD Chip** — In-house automotive ASIC for Full Self-Driving perception pipeline; manufactured at Samsung 14nm, successor at TSMC 7nm.

- ### Geopolitical and Supply Chain Context
  - ASIC supply chains are geographically concentrated. Advanced-node fabrication is effectively limited to TSMC (Taiwan) and Samsung (South Korea), creating systemic supply-chain risk amplified by US-China semiconductor trade restrictions.
  - The CHIPS and Science Act (USA, 2022) and European Chips Act (EU, 2023) aim to incentivise domestic advanced-node foundry capacity (Intel, TSMC Arizona, Samsung Texas) but construction timelines extend to 2027–2030.
  - EUV (Extreme Ultraviolet) lithography machines, supplied exclusively by ASML (Netherlands), are required for sub-7nm patterning and are subject to Dutch export controls preventing their sale to China.
  - These dynamics make semiconductor supply chains a [[governance]] and [[security]] concern as well as a pure engineering one. See [[Supply Chain Management]].

- ### Provenance
  - sources:: Established semiconductor engineering knowledge; ISSCC proceedings; TSMC technology disclosures; IEEE Solid-State Circuits Society; Linley Group analyst reports; Google TPU and Apple SoC product disclosures.
  - updated:: 2026-06-13
