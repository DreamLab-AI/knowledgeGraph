public:: true

# Virtualisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:virtualisation", "@type":"Page", "title":"Virtualisation", "vc:slug":"virtualisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:virtualisation",
  "@type": "Class",
  "label": "Virtualisation",
  "definition": "Virtualisation is the creation of abstracted, software-defined representations of physical computing resources — processors, memory, storage and networks — allowing multiple isolated environments to share one set of hardware. A hypervisor or equivalent control layer presents each environment with the illusion of dedicated resources while multiplexing the underlying hardware. It is the foundational technology behind cloud computing, enabling consolidation, isolation, elastic provisioning and efficient utilisation of infrastructure.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:operating-system",
      "label": "Operating System"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:network-function-virtualization",
        "label": "Network Function Virtualization"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hypervisor",
        "label": "Hypervisor"
      },
      {
        "@id": "urn:ngm:class:hardware-abstraction",
        "label": "Hardware Abstraction"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-resources",
        "label": "Compute Resources"
      },
      {
        "@id": "urn:ngm:class:resource-management",
        "label": "Resource Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hardware-abstraction",
        "label": "Hardware Abstraction"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:virtual-machine",
        "label": "Virtual Machine"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:resource-management",
        "label": "Resource Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hypervisor",
        "label": "Hypervisor"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
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
  - [[Virtualisation]] abstracts physical [[Compute Resources]] into software-defined environments via a [[Hypervisor]] and [[Hardware Abstraction]], underpinning [[Cloud Computing]] and elastic [[Resource Management]].
  - It lets many isolated workloads share one set of hardware efficiently.
- ### Overview
  - A hypervisor partitions a physical host into multiple virtual machines, each running its own operating system as if on dedicated hardware.
  - Type-1 (bare-metal) hypervisors run directly on hardware, while type-2 hypervisors run atop a host operating system.
  - Beyond machine virtualisation, the same principle is applied to storage, networks and functions, decoupling logical services from physical devices.
  - Virtualisation provides the isolation, portability and density that make multi-tenant cloud platforms economically viable.
- ### Mechanisms
  - Hardware-assisted instructions trap and emulate privileged operations for guest environments.
  - A control layer schedules and arbitrates physical resources among guests.
  - Live migration moves running workloads between hosts without downtime.
  - Snapshots and templates enable rapid, repeatable provisioning.
- ### Applications
  - Server consolidation and data-centre efficiency.
  - Cloud infrastructure and elastic provisioning.
  - Network function virtualisation and software-defined networking.
  - Development, testing and isolation of untrusted workloads.
- ### Relationships
  - enables:: [[Cloud Computing]]
  - enables:: [[Scalability]]
  - enables:: [[Network Function Virtualization]]
  - uses:: [[Hypervisor]]
  - uses:: [[Hardware Abstraction]]
  - uses:: [[Operating System]]
  - requires:: [[Compute Resources]]
  - requires:: [[Resource Management]]
  - dependsOn:: [[Hardware Abstraction]]
  - hasPart:: [[Virtual Machine]]
  - supports:: [[Data Centre]]
  - supports:: [[Resource Management]]
  - relatedTo:: [[Hypervisor]]
  - relatedTo:: [[Cloud Computing]]
  - relatedTo:: [[Operating System]]
  - bridgesTo:: [[Kubernetes]]
- ### Provenance
  - updated:: 2026-06-15
