public:: true

# Real-Time Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a3d1aaa8a17ac05a5dfcdc1d70ba80ae47be20b47ef68a747a64b5bbc8a7d087",
  "@type": "Page",
  "vc:slug": "real-time-computing",
  "title": "Real-Time Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:real-time-operating-system",
      "vc:label": "Real-Time Operating System"
    },
    {
      "@id": "urn:visionflow:linked:embedded-systems",
      "vc:label": "Embedded Systems"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Real-Time Computing"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-computing",
  "@type": "Class",
  "label": "Real-Time Computing",
  "definition": "Real-time computing is a computational paradigm in which the correctness of a system depends not only on producing logically correct results but also on producing them within specified timing constraints. Systems are classified as hard real-time (where a missed deadline constitutes a system failure, e.g. aircraft fly-by-wire), firm real-time (where late results are useless but non-catastrophic), or soft real-time (where occasional deadline misses degrade quality rather than cause failure, e.g. multimedia streaming). Achieving real-time guarantees requires deterministic scheduling, bounded interrupt latency, and careful resource management throughout the entire software stack.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:real-time-systems",
      "label": "Real-Time Systems"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      },
      {
        "@id": "urn:ngm:class:deterministic-scheduling",
        "label": "Deterministic Scheduling"
      },
      {
        "@id": "urn:ngm:class:interrupt-handling",
        "label": "Interrupt Handling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicles",
        "label": "Autonomous Vehicles"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      },
      {
        "@id": "urn:ngm:class:flight-control-systems",
        "label": "Flight Control Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hard-real-time",
        "label": "Hard Real-Time"
      },
      {
        "@id": "urn:ngm:class:soft-real-time",
        "label": "Soft Real-Time"
      },
      {
        "@id": "urn:ngm:class:deadline-scheduling",
        "label": "Deadline Scheduling"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:priority-scheduling",
        "label": "Priority Scheduling"
      },
      {
        "@id": "urn:ngm:class:memory-management",
        "label": "Memory Management"
      },
      {
        "@id": "urn:ngm:class:watchdog-timer",
        "label": "Watchdog Timer"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:clock-synchronisation",
        "label": "Clock Synchronisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber Physical Systems"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:batch-processing",
        "label": "Batch Processing"
      },
      {
        "@id": "urn:ngm:class:time-sharing",
        "label": "Time-Sharing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:posix",
        "label": "POSIX"
      },
      {
        "@id": "urn:ngm:class:iso-26262",
        "label": "ISO 26262"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning-inference",
        "label": "Machine Learning Inference"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:real-time-computing:43f1b2a3965d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a3d1aaa8a17ac05a5dfcdc1d70ba80ae47be20b47ef68a747a64b5bbc8a7d087"
  },
  "vc:resolutions": [
    {
      "raw": "[[Real-Time Operating System]]",
      "resolved": "urn:visionflow:linked:real-time-operating-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embedded Systems]]",
      "resolved": "urn:visionflow:linked:embedded-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Real-time computing is a computational paradigm where system correctness depends on both producing logically correct results and delivering those results within defined [[Latency]] bounds. Unlike conventional computing — which prioritises average-case throughput — real-time systems guarantee worst-case execution times, enabling safety-critical and time-sensitive applications such as [[Embedded Systems]], [[Autonomous Vehicles]], and [[Industrial Automation]]. The field encompasses three principal categories: hard, firm, and soft real-time, differentiated by the consequences of missing a [[Deadline Scheduling]] deadline.

- ### Overview
  - Real-time computing emerged from the demands of process control, avionics, and telecommunications where a correct result delivered too late is operationally indistinguishable from a wrong result. The defining characteristic is temporal determinism: the system must be able to prove, through analysis or measurement, that every task will meet its deadline under all expected operating conditions.
  - The discipline spans hardware design (interrupt latency, DMA controllers), operating system kernel architecture ([[Real-Time Operating System]]), scheduling algorithms, and application programming models. It intersects with [[Cyber-Physical Systems]] research, where computational processes are tightly coupled to physical processes unfolding in continuous time.
  - Real-time computing is distinct from high-performance computing: a fast average case with unpredictable worst case is usually unacceptable; a slower but deterministic response is preferred. This trade-off shapes every layer of the stack, from memory allocation policies to network protocol design.

- ### Key Components
  - #### Hard vs Firm vs Soft Real-Time
    - **Hard real-time** — missing any deadline constitutes a system failure. Examples: [[Flight Control Systems]], [[Antilock Braking System]], pacemakers. Verified via Worst-Case Execution Time (WCET) analysis.
    - **Firm real-time** — late results are discarded as worthless but do not cause catastrophic failure. Example: video frame capture buffers.
    - **Soft real-time** — occasional deadline misses reduce quality but the system continues acceptably. Examples: [[Multimedia Streaming]], [[Augmented Reality]] rendering pipelines.
  - #### Scheduling
    - [[Priority Scheduling]] assigns fixed or dynamic priorities to tasks; higher-priority tasks preempt lower ones.
    - Rate-Monotonic Scheduling (RMS) — a fixed-priority policy proven optimal for periodic, independent tasks.
    - Earliest Deadline First (EDF) — a dynamic policy that is provably optimal for a single processor under certain conditions.
    - [[Deadline Scheduling]] — Linux SCHED_DEADLINE implements Constant Bandwidth Server (CBS) for EDF-compliant scheduling.
  - #### Real-Time Operating Systems
    - A [[Real-Time Operating System]] (RTOS) provides deterministic context switching, bounded [[Interrupt Handling]] latency, priority-ceiling or priority-inheritance mutex protocols, and real-time memory allocation. Common RTOSes include FreeRTOS, VxWorks, QNX, Zephyr, and RTEMS.
    - Linux with PREEMPT_RT patches reduces non-preemptible kernel sections to provide soft/firm real-time behaviour on commodity hardware.
  - #### Timing Analysis
    - WCET analysis uses static code analysis, hardware models, and measurement to establish provable upper bounds on task execution time.
    - [[Clock Synchronisation]] (via IEEE 1588 Precision Time Protocol or GPS) is essential in distributed real-time systems.
    - [[Watchdog Timer]] circuits detect and recover from software hangs independently of the processor.
  - #### Memory Management
    - [[Memory Management]] in real-time contexts avoids dynamic heap allocation (to prevent non-deterministic garbage collection pauses), uses memory pools, and locks pages into RAM to prevent page-fault latency.

- ### Applications and Use Cases
  - #### Safety-Critical Systems
    - [[Flight Control Systems]] — fly-by-wire aircraft rely on hard real-time guarantees; ARINC 653 partitioned operating environments enforce temporal and spatial isolation between applications.
    - Medical devices — infusion pumps, ventilators, and defibrillators depend on microsecond-accurate actuation loops.
    - Nuclear control systems — reactor rod control requires deterministic response to sensor events.
  - #### Automotive and Transportation
    - [[Autonomous Vehicles]] fuse sensor data from [[LiDAR]], camera, and radar with hard timing constraints on perception-to-actuation loops.
    - AUTOSAR (Automotive Open System Architecture) defines a real-time software framework for automotive [[Embedded Systems]].
    - [[Antilock Braking System]] and electronic stability control implement hard real-time feedback loops operating at kHz rates.
  - #### Industrial and Robotics
    - [[Industrial Automation]] uses programmable logic controllers (PLCs) and industrial Ethernet protocols (EtherCAT, PROFINET IRT) that provide sub-millisecond cycle times.
    - [[Robotics]] motion controllers require real-time joint-torque and position control loops, often implemented on [[Embedded Systems]] with dedicated real-time cores.
    - SCADA systems and [[Cyber-Physical Systems]] integrate real-time sensors with supervisory control over distributed networks.
  - #### Telecommunications and Networking
    - 5G base-station processing employs real-time Linux or FPGA pipelines for radio signal processing within strict frame timing windows.
    - Time-Sensitive Networking (TSN, IEEE 802.1Q extensions) brings deterministic [[Latency]] guarantees to standard Ethernet for industrial and automotive use.
  - #### Edge Computing and AI
    - [[Edge Computing]] deployments increasingly combine real-time constraints with [[Machine Learning Inference]], requiring co-design of inference engines with RTOS schedulers.
    - [[Digital Twin]] platforms that simulate physical processes in lock-step with real hardware must maintain temporal synchronisation with real-world events.
    - Robotics operating system (ROS 2) incorporates real-time DDS middleware (Fast DDS, Cyclone DDS) to support [[Robotics]] applications with quality-of-service deadline constraints.

- ### Relationships
  - requires:: [[Real-Time Operating System]]
  - requires:: [[Deterministic Scheduling]]
  - requires:: [[Interrupt Handling]]
  - enables:: [[Embedded Systems]]
  - enables:: [[Autonomous Vehicles]]
  - enables:: [[Industrial Automation]]
  - enables:: [[Flight Control Systems]]
  - hasPart:: [[Hard Real-Time]]
  - hasPart:: [[Soft Real-Time]]
  - hasPart:: [[Deadline Scheduling]]
  - uses:: [[Priority Scheduling]]
  - uses:: [[Memory Management]]
  - uses:: [[Watchdog Timer]]
  - dependsOn:: [[Latency]]
  - dependsOn:: [[Clock Synchronisation]]
  - supports:: [[Cyber-Physical Systems]]
  - supports:: [[Edge Computing]]
  - supports:: [[Robotics]]
  - contrastsWith:: [[Batch Processing]]
  - contrastsWith:: [[Time-Sharing]]
  - standardizedBy:: [[POSIX]]
  - standardizedBy:: [[ISO 26262]]
  - bridges-to:: [[Machine Learning Inference]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Fault Tolerance]]
  - relatedTo:: [[Concurrency]]

- ### Standards and Context
  - **POSIX.1b (IEEE 1003.1b)** — defines real-time extensions to POSIX including priority scheduling, asynchronous I/O, timers, and shared memory.
  - **ISO 26262** — functional safety standard for road vehicles that mandates ASIL (Automotive Safety Integrity Level) compliance, closely tied to real-time guarantees.
  - **DO-178C** — software considerations in airborne systems certification; requires WCET analysis and deterministic scheduling for DAL-A software.
  - **IEC 61508** — safety integrity level framework for industrial functional safety with direct implications for real-time control system design.
  - **ARINC 653** — avionics application standard defining time and space partitioning on real-time operating systems.
  - **IEEE 802.1Q TSN** — Time-Sensitive Networking standards (Credit-Based Shaper, Time-Aware Shaper, Frame Preemption) extending Ethernet with bounded [[Latency]] for industrial and automotive networks.
  - **IEEE 1588 PTP** — Precision Time Protocol enabling sub-microsecond [[Clock Synchronisation]] across distributed real-time systems.
  - AUTOSAR and ROS 2 are major industry frameworks that standardise real-time software architectures for automotive and [[Robotics]] domains respectively.

- ### Provenance
  - sources:: POSIX.1b standard; ISO 26262 automotive safety standard; DO-178C avionics software guidelines; Liu & Layland (1973) RMS foundational paper; AUTOSAR specification; ROS 2 design documentation
  - updated:: 2026-06-13
