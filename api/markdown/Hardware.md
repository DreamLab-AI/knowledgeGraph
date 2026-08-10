public:: true

# Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb4a87526c345b70f1f212d7ac96e520838888224cb2023b8a51ddd8d23f6902",
  "@type": "Page",
  "vc:slug": "hardware",
  "title": "Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9624"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hardware"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware",
  "@type": "Class",
  "label": "Hardware",
  "definition": "Hardware denotes the physical, tangible components of a computing system — processors, memory modules, storage devices, input/output peripherals, power subsystems, and interconnects — that collectively provide the substrate on which software executes. In the spatial-computing and infrastructure context it encompasses both general-purpose devices (CPUs, GPUs, FPGAs, ASICs) and specialised sensors and actuators (depth cameras, inertial measurement units, haptic controllers, head-mounted displays) that enable immersive and intelligent workloads. Hardware capability sets the fundamental performance, latency, power, and thermal envelope that software stacks must respect, making hardware design decisions inseparable from system architecture, operating-system abstractions, and application-level trade-offs. The discipline spans semiconductor fabrication, PCB design, embedded firmware, hardware security primitives, and the standards that allow heterogeneous devices to interoperate.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:hardware-component",
        "label": "Hardware Component"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:central-processing-unit",
        "label": "Central Processing Unit"
      },
      {
        "@id": "urn:ngm:class:memory-subsystem",
        "label": "Memory Subsystem"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:on-device-inference",
        "label": "On-Device Inference"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      },
      {
        "@id": "urn:ngm:class:device-drivers",
        "label": "Device Driver"
      },
      {
        "@id": "urn:ngm:class:power-management",
        "label": "Power Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:semiconductor-fabrication",
        "label": "Semiconductor Fabrication"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hardware-abstraction",
        "label": "Hardware Abstraction"
      },
      {
        "@id": "urn:ngm:class:hardware-and-edge",
        "label": "Hardware and Edge"
      },
      {
        "@id": "urn:ngm:class:firmware",
        "label": "Firmware"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:jedec",
        "label": "JEDEC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:virtual-machine",
        "label": "Virtual Machine"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-processing-unit",
        "label": "Neural Processing Unit"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:computer-hardware",
      "label": "Computer Hardware"
    },
    {
      "@id": "urn:ngm:class:physical-computing-components",
      "label": "Physical Computing Components"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb4a87526c345b70f1f212d7ac96e520838888224cb2023b8a51ddd8d23f6902"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Hardware denotes the tangible, physical layer of any computing system — the [[Central Processing Unit]], [[GPU Compute]], [[Memory Subsystem]], [[Storage Device]], [[Sensor]] arrays, power delivery, and interconnect fabric that collectively execute software instructions and interact with the physical world. In the context of [[Spatial Computing]], hardware further encompasses [[Head-Mounted Display]] optics, [[Depth Camera]] arrays, [[Inertial Measurement Unit]] packages, [[Haptic Controller]] actuators, and [[Edge Computing]] nodes that bring immersive and intelligent workloads into wearable and ambient form factors. Hardware capability — measured in FLOPS, memory bandwidth, thermal design power, and latency — constitutes the hard budget within which every [[Software]] stack must operate, making hardware selection and abstraction design fundamental to system architecture. The discipline spans from [[Semiconductor Fabrication]] and PCB layout through [[Firmware]], [[Device Driver]] layers, [[Hardware Abstraction]], and [[Hardware Security Module]] primitives.
- ### Overview
  - Hardware is the physical substrate of computation: the collection of electronic and mechanical components that store, process, transmit, and display information. Unlike [[Software]], which can be copied and updated instantaneously, hardware is subject to the constraints of materials science, manufacturing yield, thermal dissipation, and supply-chain economics.
  - The evolution of hardware has followed several interrelated trajectories:
    - **Moore's Law scaling** — transistor density doubling roughly every two years, enabling ever-greater compute density on a fixed silicon die area.
    - **Heterogeneous integration** — combining CPUs, [[GPU Compute]], [[Neural Processing Unit]] dies, and I/O controllers on a single substrate (e.g. chiplet architectures) to exceed the limits of monolithic scaling.
    - **Specialisation** — domain-specific accelerators (DSAs) such as [[Hardware Acceleration]] units for matrix multiplication, video codec, and ray-tracing, delivering orders-of-magnitude efficiency improvements over general-purpose cores.
    - **Edge deployment** — shrinking compute to battery-powered, thermally constrained form factors to reduce latency and preserve privacy, motivating [[On-Device Inference]] and [[Embedded Systems]] design.
  - In [[Spatial Computing]] specifically, hardware constraints dominate the user experience: display resolution, refresh rate, field of view, wireless bandwidth, and compute budget collectively determine the presence and comfort of [[Virtual Reality]] and [[Augmented Reality]] systems.
- ### Key Components
  - **[[Central Processing Unit]] (CPU)**
    - Executes general-purpose instruction streams; orchestrates system-level tasks, I/O, and operating-system scheduling.
    - Modern CPUs incorporate multiple heterogeneous core types (performance + efficiency clusters) and integrated memory controllers.
  - **[[GPU Compute]] (GPU)**
    - Massively parallel processor optimised for matrix operations; primary workhorse for [[Real-Time Rendering]] and [[Artificial Intelligence]] inference.
    - Discrete GPUs connect over PCIe; integrated GPUs share the SoC die and power budget with the CPU.
  - **[[Neural Processing Unit]] (NPU / AI Accelerator)**
    - Fixed-function or programmable silicon optimised for neural-network inference (INT8/INT4 arithmetic, sparse-matrix support).
    - Enables [[On-Device Inference]] for vision, speech, and gesture recognition within milliwatt budgets.
  - **[[Memory Subsystem]]**
    - DRAM (DDR5, LPDDR5, HBM3) provides working memory; capacity and bandwidth are often the primary bottleneck for both rendering and model inference.
    - Cache hierarchies (L1/L2/L3 SRAM) reduce effective memory latency; emerging CXL interconnects allow memory pooling across devices.
  - **[[Storage Device]]**
    - NVMe SSDs (PCIe Gen 4/5) provide near-DRAM sequential throughput for asset streaming in spatial applications.
    - eMMC and UFS flash serve embedded and mobile hardware tiers.
  - **[[Sensor]] Arrays**
    - [[Depth Camera]] (structured light, ToF, stereo) for spatial mapping and hand tracking.
    - [[Inertial Measurement Unit]] (6-DOF IMU) for head and controller pose estimation.
    - Cameras for inside-out [[Simultaneous Localisation and Mapping]].
    - Microphone arrays for spatial audio capture and wake-word detection.
  - **[[Haptic Controller]] / Actuators**
    - Eccentric rotating mass (ERM) and linear resonant actuator (LRA) motors provide tactile feedback.
    - Research devices explore ultrasonic and electrostatic mid-air haptics.
  - **Display and Optics**
    - [[Head-Mounted Display]] panels: LCD, fast-switch LCD, OLEDoS, MicroLED for high brightness and low persistence.
    - Pancake lens stacks or waveguides (diffractive or holographic) for compact optical trains in [[Augmented Reality]].
  - **[[Firmware]] and [[Device Driver]]**
    - Firmware runs directly on microcontrollers (RTOS or bare-metal) to manage power states, sensor calibration, and boot sequences.
    - Kernel-mode device drivers expose hardware capabilities through OS abstractions to user-space software.
  - **[[Power Management]]**
    - Dynamic voltage and frequency scaling (DVFS), power domains, and sleep states govern thermal headroom and battery life.
    - USB PD, wireless charging, and battery management ICs (PMICs) are integral hardware sub-systems.
  - **[[Hardware Security Module]] (HSM) / Secure Enclave**
    - Isolated cryptographic processors for key storage, attestation, and [[Trusted Execution Environment]] operations.
    - ARM TrustZone, Intel TDX, and AMD SEV are representative implementations.
- ### Applications and Use Cases
  - **[[Spatial Computing]] Headsets**
    - Standalone XR devices (e.g. Apple Vision Pro, Meta Quest series) integrate SoC, display, optics, and sensors into a single wearable, requiring aggressive [[Power Management]] and [[Hardware Abstraction]] layers to expose capabilities uniformly to [[Real-Time Rendering]] engines.
  - **Data Centre and Cloud Infrastructure**
    - Rack-scale servers combining high-core-count CPUs, NVLink-connected GPU clusters, and high-bandwidth networking accelerate [[Artificial Intelligence]] training and rendering farms. Hardware reliability (ECC memory, redundant power, out-of-band management) is paramount.
  - **[[Edge Computing]] and IoT**
    - Arm Cortex-M and RISC-V microcontrollers power constrained sensor nodes; [[Embedded Systems]] design trades compute for energy efficiency.
    - Industrial edge gateways run deterministic [[Real-Time Rendering]] and local control loops with sub-millisecond latency guarantees.
  - **[[Robotics]]**
    - Mobile robot platforms integrate SoC compute, LiDAR, stereo cameras, motor drivers, and [[Haptic Controller]]-class servo controllers into mechatronic systems requiring tight hardware-software co-design.
  - **[[Augmented Reality]] Glasses**
    - Ultra-low-power waveguide combiners paired with microLED projectors and DSP/NPU co-processors enable all-day wearable AR with sub-10 W thermal envelope.
  - **[[Artificial Intelligence]] Training Hardware**
    - Custom AI accelerators (Google TPU, Cerebras WSE, Graphcore IPU) achieve superior throughput-per-watt for specific model architectures by eliminating general-purpose overhead present in GPU designs.
  - **[[Hardware Security Module]] Applications**
    - Payment terminals, certificate authorities, and blockchain wallet devices use dedicated HSMs to enforce key non-exportability and cryptographic policy.
- ### Relationships
  - hasPart:: [[Hardware Component]]
  - hasPart:: [[GPU Compute]]
  - hasPart:: [[Central Processing Unit]]
  - hasPart:: [[Memory Subsystem]]
  - hasPart:: [[Storage Device]]
  - hasPart:: [[Sensor]]
  - enables:: [[Hardware Acceleration]]
  - enables:: [[Embedded Systems]]
  - enables:: [[Edge Computing]]
  - enables:: [[Real-Time Rendering]]
  - enables:: [[On-Device Inference]]
  - requires:: [[Operating System]]
  - requires:: [[Device Driver]]
  - requires:: [[Power Management]]
  - dependsOn:: [[Semiconductor Fabrication]]
  - dependsOn:: [[Supply Chain]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Artificial Intelligence]]
  - supports:: [[Robotics]]
  - relatedTo:: [[Hardware Abstraction]]
  - relatedTo:: [[Hardware and Edge]]
  - relatedTo:: [[Firmware]]
  - relatedTo:: [[Hardware Security Module]]
  - standardizedBy:: [[IEEE]]
  - standardizedBy:: [[JEDEC]]
  - contrastsWith:: [[Software]]
  - contrastsWith:: [[Virtual Machine]]
  - bridges-to:: [[Neural Processing Unit]]
  - bridges-to:: [[Trusted Execution Environment]]
- ### Standards and Context
  - **[[IEEE]]** — IEEE standards govern bus protocols (PCIe, USB), wireless interfaces (802.11, 802.15.4), and hardware description languages (VHDL, SystemVerilog).
  - **[[JEDEC]]** — JEDEC standardises DRAM interface specifications (DDR4/5, LPDDR5, HBM3) and flash storage protocols (eMMC, UFS).
  - **OpenCL / Vulkan / Metal** — cross-vendor compute and graphics APIs that form the primary [[Hardware Abstraction]] layer for GPU and NPU workloads.
  - **RISC-V International** — open instruction-set architecture enabling royalty-free custom processor designs, increasingly adopted in [[Embedded Systems]] and AI accelerators.
  - **Arm Architecture Licences** — dominant ISA for mobile, [[Edge Computing]], and wearable spatial-computing SoCs.
  - **PCIe / CXL** — high-bandwidth, cache-coherent interconnects enabling composable hardware architectures in data-centre and desktop platforms.
  - **OpenXR** — Khronos Group standard API abstracting over heterogeneous [[Head-Mounted Display]] hardware, reducing fragmentation for [[Spatial Computing]] developers.
  - **Export Control (ITAR / EAR / BIS)** — advanced semiconductor hardware (especially AI accelerators above defined FLOP thresholds) is subject to international export restrictions, making [[Supply Chain]] compliance a governance concern.
- ### Current Landscape (2026)
  - The market bifurcated between premium headsets and lightweight glasses: Apple refreshed the Vision Pro with the M5 chip and a Dual Knit Band in October 2025 (still $3,499), while multiple April 2026 reports (MacRumors, Tom's Hardware, AppleInsider) indicated Apple had halted active Vision Pro hardware development and pivoted engineering toward AR glasses.
  - Android XR arrived as a credible third platform: Samsung's Galaxy XR headset launched in October 2025 at $1,799 on the Snapdragon XR2+ Gen 2, co-developed with Google, positioning Android XR against visionOS and Meta's Horizon OS.
  - Display-in-glasses crossed a consumer threshold when Meta shipped the Meta Ray-Ban Display at $799 on 30 September 2025 - the first full-colour waveguide inside a Ray-Ban frame, paired with a wrist-worn EMG Neural Band for gesture input.
  - Silicon specialised into two tiers: Qualcomm's Snapdragon AR1 / AR1+ Gen 1 (unveiled at AWE 2025, ~26-28% smaller, running Llama 3.2 1B on-device) targets sub-50g display-free and monocular glasses, while the XR2+ Gen 2 powers full headsets such as Galaxy XR and Quest 3.
  - Meta opened Horizon OS to third-party OEMs (announced April 2024), yielding ASUS and Lenovo XR devices and an Xbox-edition Quest, while confirming Quest 4 is pushed to roughly H2 2027 or later at an expected $700-800.
  - Samsung confirmed on its Q4 2025 earnings call (late January 2026) that Android XR smart glasses (codenamed "Haean"/"Jinju", models SM-O200P/SM-O200J) with deep Gemini integration will ship in 2026, with display versions expected in 2027.
  - Open challenges as of 2026 remain waveguide field-of-view and brightness, all-day battery within eyewear thermal/weight budgets (~50g on 155mAh cells), on-device versus cloud AI inference, and weak consumer demand for high-end headsets despite chip and display gains.

- ### References
  - 1. Apple Newsroom (2025). Apple Vision Pro upgraded with the M5 chip and Dual Knit Band. https://www.apple.com/newsroom/2025/10/apple-vision-pro-upgraded-with-the-m5-chip-and-dual-knit-band/
  - 2. UploadVR (2025). Snapdragon AR1+ Is A New Chip For High-End Smart Glasses. https://www.uploadvr.com/qualcomm-snapdragon-ar1-plus-smart-glasses-chip/
  - 3. VR/AR Association (2026). Samsung Confirms Android XR Smart Glasses Are Coming in 2026, And Qualcomm Is Building the Silicon. https://www.thevrara.com/blog/2026/2/9/samsung-confirms-android-xr-smart-glasses-are-coming-in-2026-and-vrara-member-qualcomm-is-building-the-silicon-behind-the-revolution
  - 4. The Gadgeteer (2026). Every Smart Glasses Design Tells You Who They're Chasing. https://the-gadgeteer.com/2026/05/25/smart-glasses-2026-design-strategy/
  - 5. Frame Sixty (2026). Mixed Reality Products in 2026: Headsets to Frameworks. https://framesixty.com/mixed-reality-products/
  - 6. TS2 (2025). XR Revolution Unfolds: Major Spatial Computing News (July 23-24, 2025). https://ts2.tech/en/xr-revolution-unfolds-major-spatial-computing-news-july-23-24-2025/

- ### Provenance
  - sources:: IEEE Standards Association; JEDEC Solid State Technology Association; Khronos Group OpenXR specification; Arm Architecture Reference Manual; industry knowledge to training cutoff
  - updated:: 2026-06-13
