public:: true

# System-on-Chip
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:system-on-chip", "@type":"Page", "title":"System-on-Chip", "vc:slug":"system-on-chip", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:system-on-chip",
  "@type": "Class",
  "label": "System-on-Chip",
  "definition": "A system-on-chip (SoC) is an integrated circuit that combines most or all of the components of a computer system onto a single die, typically including one or more processor cores, memory, input and output interfaces and specialised accelerators. By co-locating these subsystems, an SoC reduces physical size, power consumption and inter-component latency compared with multi-chip designs. SoCs are foundational to mobile devices, embedded systems and edge computing, where space and energy efficiency are critical.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hardware-component",
      "label": "Hardware Component"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cpu",
        "label": "CPU"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:memory",
        "label": "Memory"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:non-volatile-memory",
        "label": "Non-Volatile Memory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:iot-device",
        "label": "IoT Device"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:field-programmable-gate-array",
        "label": "Field-Programmable Gate Array"
      },
      {
        "@id": "urn:ngm:class:system-architecture",
        "label": "System Architecture"
      },
      {
        "@id": "urn:ngm:class:hardware-component",
        "label": "Hardware Component"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A system-on-chip is an integrated [[Hardware Component]] that places a complete computing system, including a [[Processor]], [[Memory]] and interfaces, onto a single die. It contrasts with a discrete [[Microcontroller]] by integrating richer subsystems such as a [[GPU]] and high-speed buses, and it underpins modern [[Edge Computing]] platforms.

- ### Overview
  - The SoC is the dominant integration strategy for compute-dense, power-constrained devices. By fabricating the processor cores, caches, memory controllers, signal processors, radios and accelerators on one piece of silicon, designers shorten interconnect distances and cut the energy spent moving data between chips.
  - Tighter integration improves performance per watt and reduces board area, which is why smartphones, tablets, wearables and many embedded controllers are built around SoCs rather than collections of separate chips.
  - SoC design is a multidisciplinary effort spanning logic design, physical layout, verification and software bring-up, and increasingly relies on reusable intellectual-property blocks licensed from third parties.

- ### Key aspects
  - One or more general-purpose processor cores provide the central execution capability, often arranged in heterogeneous big and little clusters for efficiency.
  - On-die graphics, neural and signal-processing accelerators offload specialised workloads from the main cores.
  - Integrated memory controllers and caches manage access to on-chip and external memory with low latency.
  - High-bandwidth on-chip interconnects and standardised interfaces link the subsystems and connect to peripherals.
  - Power management blocks gate clocks and voltages dynamically to minimise consumption.

- ### Applications
  - Smartphone, tablet and wearable processors that combine compute, graphics and connectivity.
  - Edge and IoT controllers running inference and sensing workloads locally.
  - Automotive and industrial control units requiring deterministic real-time behaviour.
  - Networking and storage accelerators integrating data-plane functions on a single die.

- ### Relationships
  - subClassOf:: [[Hardware Component]]
  - hasPart:: [[CPU]]
  - hasPart:: [[GPU]]
  - hasPart:: [[Memory]]
  - partOf:: [[Embedded System]]
  - dependsOn:: [[Processor]]
  - dependsOn:: [[Hardware]]
  - uses:: [[Non-Volatile Memory]]
  - enables:: [[Edge Computing]]
  - enables:: [[IoT Device]]
  - supports:: [[Internet of Things]]
  - supports:: [[Real-Time Operating System]]
  - contrastsWith:: [[Microcontroller]]
  - relatedTo:: [[Field-Programmable Gate Array]]
  - relatedTo:: [[System Architecture]]
  - relatedTo:: [[Hardware Component]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
